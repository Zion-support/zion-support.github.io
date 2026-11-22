#!/usr/bin/env python3
"""Render the public resources hub and practical guides from a single content source."""
import html, json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
PUBLIC=ROOT/'public'
guides=json.loads((ROOT/'content/resource-guides.json').read_text())
def esc(s): return html.escape(s, quote=True)
def link(url,label): return f'<a href="{esc(url)}">{esc(label)}</a>'
def page(path,title,description,body):
 canonical='https://ziontechgroup.com'+path
 nav=''.join(link(u,t) for u,t in [('/', 'Home'),('/apps-network/','Apps'),('/services/','Services'),('/resources/','Resources'),('/search/','Search'),('/book/','Discovery')])
 result=f'''<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{esc(title)} | Zion Tech Group</title><meta name="description" content="{esc(description)}"><link rel="canonical" href="{canonical}"><meta property="og:title" content="{esc(title)}"><meta property="og:description" content="{esc(description)}"><meta property="og:url" content="{canonical}"><link rel="stylesheet" href="/assets/css/resource-center.css"></head><body>
<a class="skip" href="#main-content">Skip to content</a><header class="site-header"><div class="header-inner"><a class="brand" href="/">Zion Tech Group</a><nav class="nav" aria-label="Main navigation">{nav}</nav></div></header>
<main id="main-content" class="container">{body}</main><footer class="footer"><div class="container"><strong>Zion Tech Group</strong><p>Find a useful resource, explore a service, and plan your next step.</p><nav aria-label="Footer navigation">{nav}</nav></div></footer></body></html>'''
 target=PUBLIC/path.lstrip('/')/'index.html';target.parent.mkdir(parents=True,exist_ok=True);target.write_text(result)
def card(g):
 return f'<article class="card"><span class="tag">{esc(g["category"])}</span><h3>{link("/resources/"+g["slug"]+"/",g["title"])}</h3><p>{esc(g["summary"])}</p>{link("/resources/"+g["slug"]+"/","Read the guide →")}</article>'
for g in guides:
 path='/resources/'+g['slug']+'/'
 toc=''.join(f'<li>{link("#"+s["id"],s["title"])}</li>' for s in g['sections'])
 sections=''.join(f'<section id="{s["id"]}"><h2>{esc(s["title"])}</h2><p>{esc(s["body"])}</p><ul>'+''.join(f'<li>{esc(i)}</li>' for i in s['items'])+'</ul></section>' for s in g['sections'])
 related=''.join(f'<li>{link(*item)}</li>' for item in g['links'])
 body=f'''<nav class="breadcrumbs" aria-label="Breadcrumb">{link('/','Home')} / {link('/resources/','Resources')} / <span aria-current="page">Guide</span></nav><div class="hero"><p class="eyebrow">{esc(g['category'])} · Practical guide</p><h1>{esc(g['title'])}</h1><p class="lead">{esc(g['intro'])}</p></div><div class="article-layout"><nav class="contents" aria-label="On this page"><strong>In this guide</strong><ol>{toc}</ol></nav><article class="article-content">{sections}<aside class="callout"><h2>Your next step</h2><p>{esc(g['takeaway'])}</p><a class="button primary" href="/book/">Discuss your requirements</a></aside><section class="section"><h2>Continue exploring</h2><ul>{related}</ul>{link('/resources/','← All resources')} · {link('/search/','Search the site')}</section></article></div>'''
 page(path,g['title'],g['summary'],body)
body='''<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <span aria-current="page">Resources</span></nav><div class="hero"><p class="eyebrow">The Zion resource center</p><h1>Find your next useful step.</h1><p class="lead">Practical guides, apps, and service paths for teams planning AI automation and on-site IT work. Start with your goal, then follow the related resources.</p><div class="actions"><a class="button primary" href="/search/">Search apps, services &amp; guides</a><a class="button" href="#guides">Read the guides</a></div></div><nav class="jump-links" aria-label="Resource categories"><a class="button" href="#guides">Practical guides</a><a class="button" href="#explore">Browse by goal</a><a class="button" href="#more">More resources</a></nav><section class="section" id="guides"><p class="eyebrow">Plan with clarity</p><h2>Practical guides</h2><div class="grid">'''+''.join(card(g) for g in guides)+'''</div></section><section class="section" id="explore"><h2>Browse by goal</h2><div class="grid">'''
for title,desc,url,label in [
 ('Explore AI apps','Browse the network, compare a workflow, and review what you need for an implementation.','/apps-network/','Explore the apps network'),
 ('Arrange on-site IT support','Review field services, then prepare the location, equipment, timing, and access requirements.','/field-services/','Explore field services'),
 ('Plan an AI engagement','Explore consulting and implementation paths before defining a focused pilot.','/ai-consulting-services/','Explore AI consulting'),
 ('Review delivery options','Find the current engagement options and discuss the scope that fits your requirements.','/plans/','Review plans'),
 ('Prepare an automation brief','Use the prompt library as a starting point for describing tasks and reviewing AI output.','/prompt-library/','Open the prompt library'),
 ('Browse business use cases','Connect a business objective with relevant service and application pages.','/use-cases/','Explore use cases')]:
 body+=f'<article class="card"><h3>{esc(title)}</h3><p>{esc(desc)}</p>{link(url,label+" →")}</article>'
body+='''</div></section><section class="section" id="more"><h2>More resources</h2><p>Continue through the existing library or get help choosing a starting point.</p><div class="actions"><a class="button" href="/blog/">Blog &amp; insights</a><a class="button" href="/faq/">Frequently asked questions</a><a class="button" href="/composio/">Integration resources</a><a class="button" href="/heritage/">Company heritage</a><a class="button" href="/status/">Service status</a><a class="button" href="/llms.txt">Machine-readable overview</a><a class="button" href="/services/">Services</a><a class="button" href="/search/">Search the directory</a><a class="button" href="/book/">Discuss your project</a></div></section>'''
page('/resources/','Resources and practical guides','Explore practical AI and field service guides, connected apps, service paths, and planning resources from Zion Tech Group.',body)
