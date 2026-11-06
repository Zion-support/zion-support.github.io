#!/usr/bin/env python3
"""
Parity tests for scripts/homepage_sanity_check.py

Guards the invariant required by the PR #71947 review:
the `requests` path and the `urllib` fallback must agree on

  * 2xx responses            -> status + content-type + body, no error
  * non-2xx with a body     -> status + content-type + body, no error
                               (urllib raises HTTPError; it must be converted)
  * DNS / timeout failures   -> surfaced as an error after the retry budget
  * retry accounting         -> transient failures are retried, HTTP errors are not

IMPORTANT: `fetch_with_retries` returns on the first fetcher that does NOT raise,
so when `requests` is importable the urllib backend is never reached. The retry
tests therefore pin the backend explicitly (ImportError injection for the
requests path) instead of assuming both backends run.

Run:  python3 -m unittest scripts.tests.test_homepage_sanity_check -v
"""

import importlib.util
import os
import threading
import unittest
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

SCRIPT_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "homepage_sanity_check.py")
_spec = importlib.util.spec_from_file_location("homepage_sanity_check", SCRIPT_PATH)
assert _spec is not None and _spec.loader is not None
hsc = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(hsc)

try:
    import requests  # noqa: F401
    REQUESTS_AVAILABLE = True
except Exception:  # noqa: BLE001 - environment may lack a working requests
    REQUESTS_AVAILABLE = False


class _Handler(BaseHTTPRequestHandler):
    """Serves a fixed status/body so both fetchers see identical responses."""

    status = 200
    body = "<!DOCTYPE html><html><body>ok</body></html>"
    content_type = "text/html; charset=utf-8"

    def do_GET(self):  # noqa: N802 - http.server API
        payload = self.body.encode("utf-8")
        self.send_response(self.status)
        self.send_header("Content-Type", self.content_type)
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def log_message(self, *args):  # keep test output clean
        pass


def _start_server(status=200, body=None, content_type=None):
    handler = type("BoundHandler", (_Handler,), {})
    handler.status = status
    if body is not None:
        handler.body = body
    if content_type is not None:
        handler.content_type = content_type
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    return server, f"http://127.0.0.1:{server.server_address[1]}/"


def _requests_result(url):
    if not REQUESTS_AVAILABLE:
        raise unittest.SkipTest("requests is not importable in this environment")
    return hsc._fetch_requests(url)


class ParityTests(unittest.TestCase):
    """Direct, backend-by-backend parity: both backends see the same server."""

    def test_2xx_parity(self):
        server, url = _start_server(status=200, body="<html>ok</html>", content_type="text/html")
        try:
            results = [("urllib", hsc._fetch_urllib(url)), ("requests", _requests_result(url))]
        finally:
            server.shutdown()

        for label, result in results:
            status, content_type, body, error = result
            self.assertIsNone(error, f"{label}: unexpected error {error}")
            self.assertEqual(status, 200, f"{label}: status mismatch")
            self.assertIn("text/html", content_type, f"{label}: content-type mismatch")
            self.assertIn("ok", body, f"{label}: body mismatch")

    def test_non_2xx_with_body_parity(self):
        """A 500 with a body must not be mistaken for a network failure."""
        server, url = _start_server(status=500, body="<html>internal error</html>", content_type="text/html")
        try:
            results = [("urllib", hsc._fetch_urllib(url)), ("requests", _requests_result(url))]
        finally:
            server.shutdown()

        for label, result in results:
            status, content_type, body, error = result
            self.assertIsNone(error, f"{label}: non-2xx must not surface as an error")
            self.assertEqual(status, 500, f"{label}: status mismatch")
            self.assertIn("internal error", body, f"{label}: body mismatch")

    def test_non_2xx_without_body_parity(self):
        """A 404 with an empty body must still return the status, not an error."""
        server, url = _start_server(status=404, body="", content_type="text/html")
        try:
            results = [("urllib", hsc._fetch_urllib(url)), ("requests", _requests_result(url))]
        finally:
            server.shutdown()

        for label, result in results:
            status, _content_type, _body, error = result
            self.assertIsNone(error, f"{label}: non-2xx must not surface as an error")
            self.assertEqual(status, 404, f"{label}: status mismatch")

    def test_build_failed_indicator_detection(self):
        """The guard must flag a build-failed fallback page."""
        indicators = hsc.BUILD_FAILED_INDICATORS
        self.assertTrue(any(indicator in "<html>build-failed</html>" for indicator in indicators))
        self.assertFalse(any(indicator in "<!DOCTYPE html><html>ok</html>" for indicator in indicators))


class RetryAccountingTests(unittest.TestCase):
    """Retry behaviour, pinning the backend that is actually exercised."""

    def test_http_error_is_not_retried__requests_backend(self):
        """requests returns the 500 once; urllib must not even be called."""
        if not REQUESTS_AVAILABLE:
            self.skipTest("requests is not importable; covered by the requests-installed job")
        calls = {"requests": 0, "urllib": 0}
        original_requests = hsc._fetch_requests
        original_urllib = hsc._fetch_urllib

        def counting_requests(url, timeout=10):
            calls["requests"] += 1
            return original_requests(url, timeout)

        def unexpected_urllib(url, timeout=10):
            # Record the call instead of raising: fetch_with_retries catches
            # Exception, so a raised assertion would be swallowed and retried.
            calls["urllib"] += 1
            return original_urllib(url, timeout)

        server, url = _start_server(status=500, body="boom", content_type="text/html")
        try:
            hsc._fetch_requests = counting_requests
            hsc._fetch_urllib = unexpected_urllib
            try:
                status, _ct, body, error = hsc.fetch_with_retries(url)
            finally:
                hsc._fetch_requests = original_requests
                hsc._fetch_urllib = original_urllib
        finally:
            server.shutdown()

        self.assertIsNone(error)
        self.assertEqual(status, 500)
        self.assertIn("boom", body)
        self.assertEqual(calls["requests"], 1, "requests path retried an HTTP error")
        self.assertEqual(calls["urllib"], 0, "urllib was reached despite requests succeeding")

    def test_http_error_is_not_retried__urllib_backend(self):
        """With requests unavailable, the urllib backend returns the 500 once."""
        calls = {"requests": 0, "urllib": 0}
        original_requests = hsc._fetch_requests
        original_urllib = hsc._fetch_urllib

        def raise_import_error(url, timeout=10):
            calls["requests"] += 1
            raise ImportError("requests disabled for this scenario")

        def counting_urllib(url, timeout=10):
            calls["urllib"] += 1
            return original_urllib(url, timeout)

        server, url = _start_server(status=500, body="boom", content_type="text/html")
        try:
            hsc._fetch_requests = raise_import_error
            hsc._fetch_urllib = counting_urllib
            try:
                status, _ct, body, error = hsc.fetch_with_retries(url)
            finally:
                hsc._fetch_requests = original_requests
                hsc._fetch_urllib = original_urllib
        finally:
            server.shutdown()

        self.assertIsNone(error)
        self.assertEqual(status, 500)
        self.assertIn("boom", body)
        self.assertEqual(calls["urllib"], 1, "urllib path retried an HTTP error")

    def test_transient_failure_is_retried_until_budget(self):
        """Transport failures on every backend must consume the retry budget."""
        attempts = {"n": 0}
        original_requests = hsc._fetch_requests
        original_urllib = hsc._fetch_urllib

        def flaky(url, timeout=10):
            attempts["n"] += 1
            raise OSError("simulated transport failure")

        hsc._fetch_requests = flaky
        hsc._fetch_urllib = flaky
        try:
            status, _ct, _body, error = hsc.fetch_with_retries("http://example.invalid/")
        finally:
            hsc._fetch_requests = original_requests
            hsc._fetch_urllib = original_urllib

        self.assertIsNotNone(error)
        self.assertIsNone(status)
        # MAX_RETRIES iterations x 2 backends per iteration.
        self.assertGreaterEqual(attempts["n"], hsc.MAX_RETRIES * 2, "retry budget not consumed")

    def test_requests_absent_falls_back_to_urllib(self):
        """ImportError from requests must hand over to urllib, not fail the check."""
        seen = {"backend": None}
        original_requests = hsc._fetch_requests
        original_urllib = hsc._fetch_urllib

        def raise_import_error(url, timeout=10):
            raise ImportError("requests disabled for this scenario")

        def tagging_urllib(url, timeout=10):
            seen["backend"] = "urllib"
            return original_urllib(url, timeout)

        server, url = _start_server(status=200, body="<html>fallback</html>", content_type="text/html")
        try:
            hsc._fetch_requests = raise_import_error
            hsc._fetch_urllib = tagging_urllib
            try:
                status, _ct, body, error = hsc.fetch_with_retries(url)
            finally:
                hsc._fetch_requests = original_requests
                hsc._fetch_urllib = original_urllib
        finally:
            server.shutdown()

        self.assertIsNone(error)
        self.assertEqual(status, 200)
        self.assertEqual(seen["backend"], "urllib")

    def test_dns_failure_is_an_error(self):
        """An unresolvable host must surface as an error, not a status code."""
        status, _content_type, _body, error = hsc.fetch_with_retries("http://this-host-does-not-exist.invalid/")
        self.assertIsNotNone(error, "DNS failure must be reported as an error")
        self.assertIsNone(status, "DNS failure must not report a status")


if __name__ == "__main__":
    unittest.main(verbosity=2)
