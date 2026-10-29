"""Offline regression checks for the scoped static entry-page visual patch."""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import re
import unittest

ROOT=Path(__file__).resolve().parents[1]/'public'
class Document(HTMLParser):
    def __init__(self,text):
        super().__init__();self.tags=[];self.feed(text)
    def handle_starttag(self,tag,attrs): self.tags.append((tag,dict(attrs)))

class EntryPageContract(unittest.TestCase):
    def read(self,path): return (ROOT/path).read_text()
    def test_scoped_assets_and_unique_ids(self):
        for path in ['index.html','services/index.html','contact/index.html']+[p+'discovery/index.html' for p in ['', 'pt/','es/','fr/','de/']]:
            with self.subTest(path=path):
                d=Document(self.read(path));ids=Counter(a['id'] for _,a in d.tags if 'id'in a)
                self.assertTrue(all(n==1 for n in ids.values()))
                self.assertEqual(sum(t=='link' and a.get('href')=='/assets/css/entry-pages.css' for t,a in d.tags),1)
                self.assertTrue(any(t=='body' and a.get('data-entry-page') for t,a in d.tags))
    def test_home_portuguese_discovery_and_truthful_timing(self):
        s=self.read('index.html');d=Document(s)
        self.assertIn('cerca de 5 min',s)
        self.assertNotIn('2 min',s)
        self.assertTrue(any(t=='a' and a.get('href')=='/pt/discovery/' for t,a in d.tags))
        self.assertIn('aceitação do serviço não confirma entrega',s)
        self.assertIn('class="entry-discovery-detail"><details><summary>',s)
        self.assertIn('Consulting $499',s);self.assertIn('Starter $2.500',s);self.assertIn('Growth $8.000/mês',s)
    def test_services_all_original_card_destinations(self):
        d=Document(self.read('services/index.html'))
        expected=Counter(['/services/ai-email-intelligence/']*2+['/services/'+s+'/' for s in ['cybersecurity-platform-msp-2026-6558','cloud-cost-optimization','ai-observability','it-consulting-2026-6570','managed-it-services-small-business-2026-6559','it-staff-augmentation','cloud-migration-services-2026-6572','ai-smart-global-campaign','ai-observability-2026-6565','cloud-cost-ai-optimizer-2026-6534']])
        self.assertEqual(Counter(a['href'] for t,a in d.tags if t=='a' and a.get('class')=='card'),expected)
        self.assertIn('<html lang="en">',self.read('services/index.html'))
    def test_contact_recipient_and_navigation(self):
        s=self.read('contact/index.html');d=Document(s)
        self.assertIn('>contact@ziontechgroup.com</a>',s)
        self.assertEqual({a['href'] for t,a in d.tags if t=='a' and a.get('href','').startswith('mailto:')},{'mailto:contact@ziontechgroup.com'})
        self.assertTrue(any(t=='nav' and a.get('aria-label')=='Primary' for t,a in d.tags))
        self.assertFalse(any(t=='form' for t,_ in d.tags))
    def test_discovery_form_and_report_contract(self):
        for prefix in ['','pt/','es/','fr/','de/']:
            s=self.read(prefix+'discovery/index.html');d=Document(s)
            self.assertEqual(sum(t=='form' and a.get('id')=='dform' for t,a in d.tags),1)
            self.assertTrue(any(t=='h2' and a.get('id')=='questionnaire' and a.get('tabindex')=='-1' for t,a in d.tags))
            self.assertIn('href="#questionnaire"',s)
            self.assertIn('src="/assets/js/discovery-delivery.js"',s)
            for id in ['result','copy-report','download-report','report-text','email-fallback','form-errors','submit-report']:
                self.assertTrue(any(a.get('id')==id for _,a in d.tags),id)
            self.assertEqual(sum(t=='link' and a.get('rel')=='alternate' for t,a in d.tags),6)
    def test_no_global_css_replacement(self):
        s=self.read('assets/css/entry-pages.css')
        self.assertIn(':not(:has(header.nav)) nav.top',s)
        self.assertIn('[data-entry-page="home"] .entry-discovery-detail h2',s)
        self.assertNotIn('@import',s)
        self.assertNotIn('url(',s)

if __name__=='__main__': unittest.main()
