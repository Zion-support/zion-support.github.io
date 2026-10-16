#!/usr/bin/env python3
"""Real-source homepage compatibility tests; no network or publishing."""
import importlib.util
from pathlib import Path
import re
import unittest
ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('finalizer',ROOT/'scripts/finalize-use-case-map-artifact.py')
f=importlib.util.module_from_spec(spec);spec.loader.exec_module(f)
class CurrentHomepageTests(unittest.TestCase):
 def homes(self):
  return {k:(ROOT/'public'/('index.html' if k=='pt' else k+'/index.html')).read_text(encoding='utf-8') for k in f.maps.LANGS}
 def test_current_five_homepages_accept(self):
  for locale,text in self.homes().items():
   with self.subTest(locale=locale):
    after=f.edit_home(text,locale)
    self.assertEqual(after.count('data-use-case-map-promotion='),1)
    self.assertIn('href="'+f.maps.route(locale)+'"',after)
 def test_repeat_render_identical(self):
  for locale,text in self.homes().items():
   with self.subTest(locale=locale):
    after=f.edit_home(text,locale);self.assertEqual(f.edit_home(after,locale),after)
 def test_original_content_restored_and_protected(self):
  for locale,text in self.homes().items():
   with self.subTest(locale=locale):
    after=f.edit_home(text,locale)
    self.assertEqual(f.protected(after),f.protected(text))
    self.assertTrue(set(f.Document(text).links).issubset(set(f.Document(after).links)))
    restored=re.sub(r'<section data-use-case-map-home="'+f.RELEASE+r'">[\s\S]*?</section>','',after)
    self.assertEqual(restored,text)
 def test_unknown_source_and_wrong_language_rejected(self):
  for locale,text in self.homes().items():
   with self.subTest(locale=locale):
    with self.assertRaises(ValueError):f.edit_home(text+'<!--changed-->',locale)
    wrong=text.replace('lang="'+f.maps.LANGS[locale]+'"','lang="xx"',1)
    with self.assertRaises(ValueError):f.edit_home(wrong,locale)
 def test_duplicate_wrapper_rejected(self):
  for locale,text in self.homes().items():
   with self.subTest(locale=locale):
    after=f.edit_home(text,locale)
    owned=re.search(r'<section data-use-case-map-home="'+f.RELEASE+r'">[\s\S]*?</section>',after).group()
    with self.assertRaises(ValueError):f.edit_home(after+owned,locale)
if __name__=='__main__':unittest.main()
