#!/usr/bin/env python3
"""Build a browsable, progressively enhanced search directory from public navigation hubs."""
import html,json,re,xml.etree.ElementTree as ET
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
from runpy import run_path
ROOT=Path(__file__).resolve().parents[1];PUBLIC=ROOT/'public'
class Doc(HTMLParser):
 def __init__(self,s):
  super().__init__(convert_charrefs=True);self.links=[];self.title='';self.desc='';self.canonical='';self.exclude=False;self.in_title=False;self.feed(s)
 def handle_starttag(self,t,a):
  a=dict(a)
  if t=='title': self.in_title=True
  if t=='a' and a.get('href'):self.links.append(a['href'])
  if t=='link' and a.get('rel')=='canonical':self.canonical=a.get('href','')
  if t=='meta':
   if a.get('name','').lower()=='description':self.desc=a.get('content','')
   if a.get('http-equiv','').lower()=='refresh' or ('noindex' in a.get('content','').lower() and a.get('name','').lower()=='robots'):self.exclude=True
 def handle_endtag(self,t):
  if t=='title':self.in_title=False
 def handle_data(self,d):
  if self.in_title:self.title+=d
blocked={'admin','war-room','ops','ops-ledger','internal','private','reports','api','auth','login','wp-admin','agent-brief','telegram'}
def normalize(href):
 p=urlsplit(href)
 if p.netloc and p.netloc not in ('ziontechgroup.com','www.ziontechgroup.com'):return None
 if p.scheme not in ('','https','http') or not p.path.startswith('/'):return None
 path=unquote(p.path)
 if any(part in blocked or part.startswith('.') for part in path.split('/')):return None
 if path.endswith('/index.html'):path=path[:-10]
 return path if Path(path).suffix else path.rstrip('/')+'/'
def file_for(path):return PUBLIC/path.lstrip('/') if Path(path).suffix else PUBLIC/path.lstrip('/')/'index.html'
def read(path):
 f=file_for(path)
 if not f.is_file():return None
 s=f.read_text(errors='replace');d=Doc(s)
 if d.exclude or not d.title or re.search(r'\bstub\b|not a packaged SKU|404|not found',d.title,re.I):return None
 if d.canonical and normalize(d.canonical)!=path:return None
 return d
seeds=['/','/apps/','/apps-network/','/services/','/ai-services/','/solutions/','/blog/','/resources/','/use-cases/','/industries/']
paths=set(seeds)
for node in ET.parse(PUBLIC/'sitemap-0.xml').getroot().iter():
 if node.tag.endswith('loc'):
  path=normalize(node.text)
  if path:paths.add(path)
# One bounded navigation level, rather than exposing unlisted operational files.
app_paths=set()
for path in seeds:
 d=read(path)
 if d:
  for href in d.links:
   candidate=normalize(href)
   if candidate:
    paths.add(candidate)
    if path in ('/apps/','/apps-network/'):app_paths.add(candidate)
rows=[]
for path in sorted(paths):
 if path == '/search/':continue
 d=read(path)
 if not d:continue
 category='Services & company'
 if path.startswith('/resources/'):category='Guides & resources'
 elif path.startswith('/blog/'):category='Articles'
 elif path.startswith('/field-services'):category='Field services'
 elif path in app_paths and path not in seeds:category='Apps & tools'
 title=re.sub(r'\s*[|·—–]\s*Zion(?: Tech Group)?.*$','',d.title).strip()
 desc=d.desc.strip() or {'Articles':'Read this article and explore related Zion resources.','Apps & tools':'Explore this app or tool and review its current scope.','Field services':'Review on-site IT service information and requirements.','Guides & resources':'Find practical guidance and links to the next step.','Services & company':'Explore this Zion service or information page.'}[category]
 rows.append(dict(path=path,title=title,description=desc,category=category))
rows.sort(key=lambda r:r['title'].casefold())
def e(s):return html.escape(s,quote=True)
options=''.join(f'<option>{e(c)}</option>' for c in sorted({r['category'] for r in rows}))
results=''.join(f'<article class="result" data-category="{e(r["category"])}"><span class="tag">{e(r["category"])}</span><h2><a href="{e(r["path"])}">{e(r["title"])}</a></h2><p>{e(r["description"])}</p><span class="result-path">{e(r["path"])}</span></article>' for r in rows)
body=f'''<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <span aria-current="page">Search</span></nav><div class="hero"><p class="eyebrow">The Zion directory</p><h1>Find the right starting point.</h1><p class="lead">Search the apps, services, articles, and guides linked from our main directories. Try “field services”, “cloud”, or “AI”.</p></div><form class="search-form" role="search" action="/search/" method="get"><div><label for="site-query">What are you looking for?</label><input id="site-query" name="q" type="search" placeholder="Search by topic or task" autocomplete="off"></div><div><label for="site-category">Content type</label><select id="site-category" name="category"><option value="">All content types</option>{options}</select></div><button type="reset">Clear filters</button></form><p class="results-count" role="status" aria-live="polite" id="results-count">{len(rows)} pages to explore</p><noscript><p>All directory links are listed below. Use your browser’s Find command to search this page.</p></noscript><div id="no-results" class="empty" hidden><h2>No matching pages</h2><p>Try a shorter phrase or clear the content filter. You can also <a href="/resources/">browse the resource center</a> or <a href="/book/">discuss your requirements</a>.</p></div><div id="search-results">{results}</div><script src="/assets/js/site-search.js" defer></script>'''
render=run_path(str(ROOT/'scripts/render-resource-center.py'))
render['page']('/search/','Search apps, services and resources','Find Zion apps, services, articles, and practical guides by topic and content type.',body)
print(f'Rendered search directory: {len(rows)} pages; excluded redirects, stubs, missing destinations, and unlisted operational paths.')
