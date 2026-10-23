#!/usr/bin/env python3
"""Regression: metadata is not a navigation resource. Offline only."""
import importlib.util
from pathlib import Path
import tempfile
import unittest
ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('finalizer', ROOT/'scripts/finalize-use-case-map-artifact.py')
f = importlib.util.module_from_spec(spec); spec.loader.exec_module(f)
class MetadataTests(unittest.TestCase):
    def test_metadata_not_added_to_resource_index(self):
        source = ROOT/'public/apps/app-network-use-case-map.html'
        with tempfile.TemporaryDirectory() as td:
            pages = f.maps.build(source, Path(td))
            localized = f.link_copy.localize_pages(pages, f.maps.LANGS)
            self.assertEqual(len(localized), 5)
            for name, text in localized.items():
                with self.subTest(page=name):
                    self.assertIn('rel="canonical"', text)
                    self.assertNotIn('https://ziontechgroup.com/apps/app-network-use-case-map.html', f.Document(text).links)
                    self.assertEqual(f.Document(text).links, f.Document(pages[name]).links)
    def test_actual_unknown_navigation_still_rejected(self):
        source = ROOT/'public/apps/app-network-use-case-map.html'
        with tempfile.TemporaryDirectory() as td:
            changed = Path(td)/'source.html'
            changed.write_text(source.read_text().replace('</main>', '<a href="/unreviewed-destination/">Unknown</a></main>'))
            pages = f.maps.build(changed, Path(td)/'stage')
            with self.assertRaisesRegex(ValueError, 'No reviewed link translation: /unreviewed-destination/'):
                f.link_copy.localize_pages(pages, f.maps.LANGS)
if __name__ == '__main__': unittest.main()
