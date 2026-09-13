#!/usr/bin/env python3
"""Patch sitemap.xml to add the 10 adaptive-predictive service URLs (811-820)."""
import re
import os

SITEMAP = '/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml'
BASE_URL = 'https://ziontechgroup.com/services/'

ADAPTIVE_IDS = [
    'adaptive-predictive-manager-1-c9ca6155',
    'adaptive-predictive-manager-fd87f20d',
    'adaptive-predictive-optimization-9217f294',
    'adaptive-predictive-orchestrator-f23ab65b',
    'adaptive-predictive-suite-d0ada1a9',
    'adaptive-predictive-system-1-ff190ee2',
    'adaptive-predictive-system-78fe74cf',
    'adaptive-predictor-energy-1-e60074d9',
    'adaptive-predictor-energy-ce7d6e00',
    'adaptive-predictor-for-automotive-674375f3',
]

with open(SITEMAP, 'r') as f:
    content = f.read()

existing_urls = set(re.findall(r'<loc>(.*?)</loc>', content))
added = []
skipped = []
for pid in ADAPTIVE_IDS:
    loc = f'{BASE_URL}{pid}'
    if loc in existing_urls:
        skipped.append(pid)
        continue
    entry = (
        f'  <url>\n'
        f'    <loc>{loc}</loc>\n'
        f'    <lastmod>2026-09-04</lastmod>\n'
        f'    <changefreq>weekly</changefreq>\n'
        f'    <priority>0.7</priority>\n'
        f'  </url>'
    )
    content = content.replace('</urlset>', f'{entry}\n</urlset>')
    added.append(pid)

with open(SITEMAP, 'w') as f:
    f.write(content)

total = len(re.findall(r'<loc>', content))
print(f'Sitemap now has {total} URLs')
print(f'Added: {len(added)}')
for pid in added:
    print(f'  + {BASE_URL}{pid}')
print(f'Skipped (already present): {len(skipped)}')
for pid in skipped:
    print(f'  - {BASE_URL}{pid}')
