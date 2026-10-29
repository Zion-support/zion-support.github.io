"""Offline regression tests for the production drift workflow. Standard library only."""
import ast
import contextlib
import hashlib
import io
import json
import os
from pathlib import Path
import tempfile
import textwrap
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[2]
WORKFLOW = ROOT / ".github/workflows/apps-deployed-source-drift.yml"
text = WORKFLOW.read_text(encoding="utf-8")
marker = "          python3 - <<'PY'\n"
if text.count(marker) != 1:
    raise RuntimeError("Expected exactly one drift Python block; review extraction")
CODE = textwrap.dedent(text.split(marker, 1)[1].split("\n          PY", 1)[0])
TREE = ast.parse(CODE)
functions = [node for node in TREE.body
             if isinstance(node, ast.FunctionDef) and node.name == "read_complete_response"]
if len(functions) != 1:
    raise RuntimeError("Production complete-response reader missing")
namespace = {}
exec(compile(ast.Module(body=functions, type_ignores=[]), str(WORKFLOW), "exec"), namespace)
read_response = namespace["read_complete_response"]
PAIR_NODE = next(node.value for node in TREE.body if isinstance(node, ast.Assign)
                 and any(isinstance(t, ast.Name) and t.id == "pairs" for t in node.targets))
PAIRS = ast.literal_eval(PAIR_NODE)


class Response(io.BytesIO):
    def __init__(self, data, length=None):
        super().__init__(data)
        self.headers = {} if length is None else {"Content-Length": str(length)}
        self.status = 200


class ReaderTests(unittest.TestCase):
    def test_large_response_with_length(self):
        body = b"x" * 9_721_144
        self.assertEqual(read_response(Response(body, len(body))), body)

    def test_large_response_without_length(self):
        body = b"x" * 9_721_144
        self.assertEqual(read_response(Response(body)), body)

    def test_changed_tail_changes_hash(self):
        body = b"x" * 4_000_000
        a = read_response(Response(body + b"a"))
        b = read_response(Response(body + b"b"))
        self.assertNotEqual(hashlib.sha256(a).digest(), hashlib.sha256(b).digest())

    def test_exact_cap(self):
        self.assertEqual(read_response(Response(b"1234", 4), 4), b"1234")

    def test_overflow_without_length(self):
        with self.assertRaisesRegex(ValueError, "size_limit"):
            read_response(Response(b"12345"), 4)

    def test_declared_overflow(self):
        with self.assertRaisesRegex(ValueError, "size_limit"):
            read_response(Response(b"12345", 5), 4)

    def test_short_body(self):
        with self.assertRaisesRegex(ValueError, "incomplete"):
            read_response(Response(b"123", 4), 4)

    def test_negative_length(self):
        with self.assertRaises(ValueError):
            read_response(Response(b"x", -1))

    def test_non_numeric_length(self):
        with self.assertRaises(ValueError):
            read_response(Response(b"x", "invalid"))


class WorkflowTests(unittest.TestCase):
    def run_guard(self, scenario):
        # Execute the actual embedded workflow, replacing only network and sleep.
        # Every route has synthetic content; no company/customer data is loaded.
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            body = b"Zion Tech Group Apps Discovery synthetic test fixture"
            for path in PAIRS.values():
                file = root / path
                file.parent.mkdir(parents=True, exist_ok=True)
                file.write_bytes(body)
            (root / "automation/reports").mkdir(parents=True)
            calls = {}

            def fetch(request, timeout):
                from urllib.parse import urlsplit
                route = urlsplit(request.full_url).path
                if route not in PAIRS:
                    raise AssertionError("Unexpected network target")
                calls[route] = calls.get(route, 0) + 1
                if route == "/apps/" and scenario == "recover" and calls[route] == 1:
                    return Response(body[:-1], len(body))
                if route == "/apps/" and scenario == "truncated":
                    return Response(body[:-1], len(body))
                if route == "/apps/" and scenario == "different":
                    return Response(body + b" changed")
                return Response(body, len(body))

            previous = Path.cwd()
            exit_code = 0
            try:
                os.chdir(root)
                with patch("urllib.request.urlopen", side_effect=fetch), \
                     patch("time.sleep"), contextlib.redirect_stdout(io.StringIO()):
                    try:
                        exec(compile(CODE, str(WORKFLOW), "exec"), {"__name__": "__main__"})
                    except SystemExit as exc:
                        exit_code = exc.code
            finally:
                os.chdir(previous)
            report = json.loads((root / "automation/reports/apps-deployed-source-drift.json").read_text())
            row = next(item for item in report["checks"] if item["route"] == "/apps/")
            return exit_code, report, row, calls

    def test_retry_recovery_clears_error(self):
        code, report, row, calls = self.run_guard("recover")
        self.assertEqual(code, 0)
        self.assertEqual(report["failure_count"], 0)
        self.assertEqual(calls["/apps/"], 2)
        self.assertIsNone(row["error"])
        self.assertTrue(row["match"])

    def test_repeated_truncation_fails_closed(self):
        code, report, row, calls = self.run_guard("truncated")
        self.assertEqual(code, 1)
        self.assertEqual(report["failure_count"], 1)
        self.assertEqual(calls["/apps/"], 3)
        self.assertIsNone(row["live_sha256"])
        self.assertFalse(row["match"])
        self.assertIn("incomplete", row["error"])

    def test_real_drift_still_fails(self):
        code, report, row, _ = self.run_guard("different")
        self.assertEqual(code, 1)
        self.assertEqual(report["failure_count"], 1)
        self.assertFalse(row["match"])
        self.assertEqual(row["http_status"], 200)


if __name__ == "__main__":
    unittest.main(verbosity=2)
