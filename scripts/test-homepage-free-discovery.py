#!/usr/bin/env python3
"""Offline regression fixtures for the homepage source policy guard."""
import base64
import importlib.util
from pathlib import Path
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('guard', Path(__file__).with_name('check-homepage-free-discovery.py'))
guard = importlib.util.module_from_spec(spec)
spec.loader.exec_module(guard)

def document(content):
    return ('<!DOCTYPE html><html><head><title>Zion</title></head><body>' + content + '</body></html>').encode()

class PolicyTests(unittest.TestCase):
    def test_free_cta(self):
        self.assertEqual([], guard.inspect_source(document('<a href="/discovery/">Free Discovery</a>')))

    def test_portuguese_and_query(self):
        self.assertEqual([], guard.inspect_source(document('<a href="/discovery/?lang=pt">Discovery grátis</a>')))

    def test_unrelated_consulting_price(self):
        self.assertEqual([], guard.inspect_source(document('<a href="/discovery/">Free Discovery</a><p>Consulting $499</p>')))

    def test_encoded_source_fails(self):
        self.assertTrue(guard.inspect_source(base64.b64encode(document('<a href="/discovery/">Free</a>'))))

    def test_invalid_utf8(self):
        self.assertTrue(guard.inspect_source(b'\xff'))

    def test_replacement_character(self):
        self.assertTrue(guard.inspect_source(document('<a href="/discovery/">Free</a>\ufffd')))

    def test_missing_document_boundary(self):
        self.assertTrue(guard.inspect_source(b'<a href="/discovery/">Free</a>'))

    def test_missing_cta(self):
        self.assertTrue(guard.inspect_source(document('<p>Free Discovery</p>')))

    def test_missing_free_label(self):
        self.assertTrue(guard.inspect_source(document('<a href="/discovery/">Start Discovery</a>')))

    def test_paid_cta(self):
        self.assertTrue(guard.inspect_source(document('<a href="/discovery/">Free Discovery $99</a>')))

    def test_entity_paid_marker(self):
        self.assertTrue(guard.inspect_source(document('<a href="/discovery/">Free</a><p>Discovery &#36;99</p>')))

    def test_script_is_not_advertised_price(self):
        self.assertEqual([], guard.inspect_source(document('<a href="/discovery/">Free</a><script>const example="Discovery $99";</script>')))

    def test_missing_file_exits_nonzero(self):
        with tempfile.TemporaryDirectory() as root:
            self.assertEqual(1, guard.main([str(Path(root) / 'missing.html')]))

if __name__ == '__main__':
    unittest.main()
