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
            self.assertEqual(len(c['planningGuides']),6)
            self.assertEqual([card[0] for card in c['planningGuides']], [card[0] for card in m.COPY['en']['planningGuides']])
            self.assertTrue(all(len(card)==3 and all(card) for card in c['cards']))
            self.assertTrue(all(len(card)==3 and all(card) for card in c['planningGuides']))
            if locale!='en':
                for key in ['title','intro','homeTitle','homeIntro','scope','discoveryBody','fieldNote']:
                    self.assertNotEqual(c[key],m.COPY['en'][key])
                for key in ['catalogTitle','catalogIntro','catalogGuidesTitle','catalogGuidesIntro','localizedDiscoveryLanguage']:
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

    def test_catalog_language_navigation_preserves_resource_and_local_discovery(self):
        for locale,c in m.COPY.items():
            text=m.render(locale,is_catalog=True);page=Page(text)
            links=page.find('a')
            self.assertTrue(any(a.get('href')==m.discovery(locale) and a.get('hreflang')==c['lang'] for a in links))
            guide_links=[a for a in links if 'data-catalog-guide' in a]
            self.assertEqual(len(guide_links),6)
            self.assertEqual({a['href'] for a in guide_links},{m.catalog(locale)+slug+'.html' for slug,_,_ in c['planningGuides']})
            self.assertIn(m.operations_guide(locale),[a['href'] for a in links])
            self.assertIn(m.catalog(locale)+'discovery-app-paths.html',[a['href'] for a in links])
            self.assertIn('/apps/content-hub.html',[a['href'] for a in links])
            self.assertTrue(all(m.catalog(l) in [a['href'] for a in links] for l in m.COPY))
            self.assertEqual(len(page.find('article')),12)

    def test_homepage_composition_preserves_owned_extensions_and_is_idempotent(self):
        for locale in ('pt','es','fr','de'):
            source=(ROOT/('public'+m.home(locale)+'index.html')).read_text()
            composed=m.compose_home(locale,source)
            self.assertEqual(composed,source)
            self.assertEqual(m.compose_home(locale,composed),composed)
            self.assertEqual(m.protected_parts(composed),m.protected_parts(source))
            self.assertEqual(composed.count('<!--zion-network-home:start-->'),1)
            self.assertEqual(composed.count('id="app-paths-home"'),1)
            for marker in ('<!--zion-network-home:start-->','id="zion-home-guides-styles"','data-home-language-selector'):
                with self.assertRaises(AssertionError):m.compose_home(locale,source.replace(marker,''))
            with self.assertRaises(AssertionError):
                m.compose_home(locale,source.replace('</body>','<script>window.keep=true;</script></body>'))

    def test_english_catalog_retains_legacy_links_and_is_idempotent(self):
        source=(ROOT/'public/apps/index.html').read_text()
        self.assertEqual(m.english_catalog(source),source)
        links=[a['href'] for a in Page(source).find('a')]
        for path in ('/prompt-library/','/ai-governance-checklist/','/roi-calc/','/ai-tender-scout/','/partners/'):
            self.assertIn(path,links)
        self.assertIn('/en/discovery/#dq',links)
        self.assertIn('/discovery/#dq',links)

if __name__=='__main__':unittest.main()
