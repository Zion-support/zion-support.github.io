"""Translation, navigation and publication checks for the maintained showcase."""
import importlib.util
import json
import unittest
from html.parser import HTMLParser
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('showcase',ROOT/'scripts/render-apps-showcase.py')
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)

class Page(HTMLParser):
    def __init__(self,text):
        super().__init__();self.tags=[];self.feed(text)
    def handle_starttag(self,tag,attrs):self.tags.append((tag,dict(attrs)))
    def find(self,tag):return [a for t,a in self.tags if t==tag]

class Showcase(unittest.TestCase):
    def test_complete_copy_and_distinct_translations(self):
        self.assertEqual(set(m.COPY),{'en','pt','es','fr','de'})
        for locale,c in m.COPY.items():
            self.assertEqual(set(c),set(m.COPY['en']))
            self.assertEqual(len(c['cards']),6)
            self.assertEqual(len(c['steps']),3)
            self.assertEqual(len(c['groups']),3)
            self.assertTrue(all(len(card)==3 and all(card) for card in c['cards']))
            if locale!='en':
                for key in ['title','intro','homeTitle','homeIntro','scope','discoveryBody','fieldNote']:
                    self.assertNotEqual(c[key],m.COPY['en'][key])

    def test_pages_have_real_content_and_reciprocal_language_metadata(self):
        for locale,c in m.COPY.items():
            for is_home in (False,True):
                s=m.render(locale,is_home);p=Page(s)
                self.assertEqual(p.find('html')[0]['lang'],c['lang'])
                self.assertEqual(len(p.find('h1')),1);self.assertEqual(len(p.find('main')),1)
                self.assertEqual(len(p.find('article')),6)
                self.assertFalse(any(a.get('http-equiv','').lower()=='refresh' for a in p.find('meta')))
                ids=[a['id'] for _,a in p.tags if 'id' in a];self.assertEqual(len(ids),len(set(ids)))
                for a in p.find('a'):
                    if a['href'].startswith('#'):self.assertIn(a['href'][1:],ids)
                route=m.home if is_home else m.showcase
                alt={a['hreflang']:a['href'] for a in p.find('link') if a.get('rel')=='alternate'}
                self.assertEqual(len(alt),6)
                for l,v in m.COPY.items():self.assertEqual(alt[v['lang']],m.ORIGIN+route(l))
                self.assertIn(m.network(locale),[a['href'] for a in p.find('a')])

    def test_generated_sources_are_current_and_promotions_unique(self):
        for path,s in m.files().items():self.assertEqual((ROOT/path).read_text(),s,path)
        for path in ['public/index.html','public/en/index.html','public/apps/index.html']:
            s=(ROOT/path).read_text();self.assertEqual(s.count('id="zion-apps-showcase"'),1)
            self.assertEqual(s.count('id="zion-apps-showcase-title"'),1)

    def test_all_selected_resources_have_matching_locale(self):
        for l in m.COPY:
            suffix='' if l=='en' else '-pt-br' if l=='pt' else '-'+l
            for path in m.resource_routes(l):
                if '/zion-app-network/' in path:self.assertTrue(path.endswith(suffix+'.html'))
                else:self.assertTrue(path.startswith('/apps/' if l=='en' else '/'+l+'/apps/'))

if __name__=='__main__':unittest.main()
