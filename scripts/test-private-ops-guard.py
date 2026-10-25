#!/usr/bin/env python3
"""Synthetic fixtures for the public-ops publication boundary."""
import importlib.util
from pathlib import Path
import tempfile
import unittest

spec = importlib.util.spec_from_file_location("privacy_guard", Path(__file__).with_name("assert-no-private-ops.py"))
g = importlib.util.module_from_spec(spec)
spec.loader.exec_module(g)


class GuardTests(unittest.TestCase):
    def fixture(self, rel, blocked):
        with tempfile.TemporaryDirectory() as td:
            p = Path(td) / rel
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text("synthetic fixture")
            self.assertEqual(bool(g.violations(td)), blocked, rel)

    def test_private_formats_blocked(self):
        for name in ("CEO-OPS.md", "STATUS.md", "state.json", "log.json", "agents.json", "notes.txt", "report.pdf"):
            with self.subTest(name=name):
                self.fixture("ops/comms/" + name, True)

    def test_allowed_only_index(self):
        self.fixture("ops/comms/index.html", False)

    def test_nested_language_root(self):
        self.fixture("pt/OPS/COMMS/CEO-OPS.MD", True)

    def test_nested_index_alias(self):
        self.fixture("ops/comms/private/index.html", True)

    def test_missing_root(self):
        self.assertTrue(g.violations("/missing-zion-privacy-test-root"))

    def test_symlink_named_index(self):
        with tempfile.TemporaryDirectory() as td:
            p = Path(td) / "ops" / "comms"
            p.mkdir(parents=True)
            (p / "index.html").symlink_to("/etc/passwd")
            self.assertTrue(g.violations(td))

    def test_irrelevant_files_allowed(self):
        self.fixture("apps/example.html", False)


if __name__ == "__main__":
    unittest.main()
