"""Dependency-free deterministic tests: never make public-site requests."""
import datetime as dt
import importlib.util
from pathlib import Path
import unittest

src = Path(__file__).with_name("public_navigation_rotation.py")
spec = importlib.util.spec_from_file_location("navigation_rotation", src)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


class RotationTests(unittest.TestCase):
    def test_url_is_local_and_queryless(self):
        self.assertEqual(mod.internal_url(mod.ORIGIN + "/", "/services/#about"), mod.ORIGIN + "/services/")
        self.assertIsNone(mod.internal_url(mod.ORIGIN + "/", "https://external.example/path"))
        self.assertIsNone(mod.internal_url(mod.ORIGIN + "/", "/discovery/?email=private"))

    def test_http_and_credentials_are_rejected(self):
        self.assertIsNone(mod.internal_url(mod.ORIGIN, "http://ziontechgroup.com/"))
        self.assertIsNone(mod.internal_url(mod.ORIGIN, "https://token@ziontechgroup.com/"))

    def test_always_includes_essential_routes(self):
        chosen = mod.select_links([], 17)
        self.assertEqual(chosen, [mod.ORIGIN + p for p in mod.ESSENTIAL])

    def test_round_robin_covers_all_discovered_urls(self):
        urls = {mod.ORIGIN + f"/resource-{i}/" for i in range(73)}
        weeks = [mod.select_links(urls, i) for i in range(5)]
        self.assertEqual(set(urls) - set().union(*map(set, weeks)), set())
        self.assertTrue(all(len(x) == 30 for x in weeks))

    def test_no_duplicate_when_less_than_budget(self):
        urls = {mod.ORIGIN + f"/item-{i}/" for i in range(9)}
        chosen = mod.select_links(urls, 2)
        self.assertEqual(len(chosen), 6 + 9)
        self.assertEqual(len(chosen), len(set(chosen)))

    def test_budget_must_cover_essential(self):
        with self.assertRaises(ValueError):
            mod.select_links([], 1, budget=5)

    def test_html_links_only_extract_anchors(self):
        parser = mod.Links()
        parser.feed('<a href="/ok">ok</a><script src="/bad"></script><form action="/submit"></form>')
        self.assertEqual(parser.hrefs, ['/ok'])

    def test_offline_audit_success(self):
        html = '<a href="/resource-1/">link</a><a href="https://elsewhere.example/">external</a>'
        called = []
        def fetch(url):
            called.append(url)
            return html
        result = mod.run_audit(fetch, date=dt.date(2026, 10, 22))
        self.assertEqual(result['status'], 'passed')
        self.assertEqual(result['checked_total'], 7)
        self.assertEqual(len(called), 7)
        self.assertEqual(result['discovered_nonquery_links'], 1)

    def test_offline_audit_fails_closed_on_missing_route(self):
        def fetch(url):
            if url.endswith('/discovery/'):
                raise ValueError('non-success-status')
            return '<a href="/ok/">OK</a>'
        report = mod.run_audit(fetch, date=dt.date(2026, 10, 22))
        self.assertEqual(report['status'], 'failed')
        self.assertEqual(report['failed_routes'][0]['path'], '/discovery/')
        self.assertNotIn('private', str(report))

    def test_failures_do_not_expose_network_errors(self):
        self.assertEqual(mod.classify_failure(RuntimeError('Bearer secret')), 'network-or-timeout')


if __name__ == '__main__':
    unittest.main()
