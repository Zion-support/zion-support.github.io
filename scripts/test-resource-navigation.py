#!/usr/bin/env python3
"""Check published-page destinations, anchors, metadata, and discovery paths."""
import re, sys, xml.etree.ElementTree as ET
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit
ROOT=Path(__file__).resolve().parents[1];PUBLIC=ROOT/'public'
class Doc(HTMLParser):
 def __init__(self,text):
  super().__init__();self.links=[];self.ids=[];self.h1=0;self.canonical=[];self.redirect=False;self.description=False;self.viewport=False;self.feed(text)
 def handle_starttag(self,t,a):
  d=dict(a)
  if d.get('id'):self.ids.append(d['id'])
  if t=='h1':self.h1+=1
  if t in ('a','script','link'):
   u=d.get('href') or d.get('src')
   if u:self.links.append(u)
  if t=='link' and d.get('rel')=='canonical':self.canonical.append(d.get('href'))
  if t=='meta':
   self.redirect|=d.get('http-equiv','').lower()=='refresh'
   self.description|=d.get('name')=='description' and bool(d.get('content'))
   self.viewport|=d.get('name')=='viewport'
files=sorted((PUBLIC/'resources').rglob('index.html'))+[PUBLIC/'search/index.html']
errors=[];urls=set()
for f in files:
 doc=Doc(f.read_text());rel='/'+f.parent.relative_to(PUBLIC).as_posix()+'/'
 for ok,msg in [(doc.h1==1,'one H1'),(doc.description,'description'),(doc.viewport,'viewport'),(doc.canonical==['https://ziontechgroup.com'+rel],'canonical'),(len(doc.ids)==len(set(doc.ids)),'unique IDs'),(not doc.redirect,'no redirect')]:
  if not ok:errors.append(f'{rel}: {msg}')
 for href in doc.links:
  u=urlsplit(href)
  if href.startswith('#'):
   if u.fragment not in doc.ids:errors.append(f'{rel}: missing anchor {href}')
  elif href.startswith('/'):
   urls.add(u.path)
   target=PUBLIC/u.path.lstrip('/')
   if not target.suffix:target=target/'index.html'
   if not target.is_file():errors.append(f'{rel}: missing {u.path}')
   elif target.suffix=='.html' and Doc(target.read_text(errors='replace')).redirect:errors.append(f'{rel}: redirect {u.path}')
search=(PUBLIC/'search/index.html').read_text();home=(PUBLIC/'index.html').read_text();blog=(PUBLIC/'blog/index.html').read_text()
for f in files[:-1]:
 route='/'+f.parent.relative_to(PUBLIC).as_posix()+'/'
 if f'href="{route}"' not in search:errors.append('Search omits '+route)
for name,s in [('home',home),('blog',blog)]:
 for route in ['/resources/','/search/']:
  if f'href="{route}"' not in s:errors.append(name+' omits '+route)
for token in ['id="home-menu-toggle"','aria-controls="home-primary-links"','id="home-primary-links"','/assets/js/home-navigation.js']:
 if token not in home:errors.append('Missing mobile navigation '+token)
assert 'max-width: 800px) { .nav-links { display: none' not in home
ET.parse(PUBLIC/'sitemap-0.xml')
print(f'{len(files)} content pages; {len(urls)} unique local destinations; {len(errors)} errors')
for error in errors:print(error)
sys.exit(bool(errors))
