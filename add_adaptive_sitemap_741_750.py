#!/usr/bin/env python3
"""Add the 10 new adaptive-* service URLs (services 741-750) to sitemap.xml."""
import re

BASE = '/Users/klebergarciaalcatrao/zion-support.github.io'
SITEMAP = f'{BASE}/sitemap.xml'

NEW_SERVICES = [
    'adaptive-network-platform-b7484536',
    'adaptive-network-system-ccfdfdce',
    'adaptive-optimization-agriculture-1-2a945029',
    'adaptive-optimization-agriculture-9c195ad3',
    'adaptive-optimization-education-c0b88177',
    'adaptive-optimization-for-finance-2cb64356',
    'adaptive-optimization-for-legal-38c6bc4c',
    'adaptive-optimization-for-real-estate-e734edcc',
    'adaptive-optimization-for-telecom-6157a269',
    'adaptive-optimization-manufacturing-b3f986ce',
]

with open(SITEMAP, 'r') as f:
    sitemap = f.read()

existing_count = len(re.findall(r'<loc>', sitemap))
print(f'Existing URLs: {existing_count}')

new_block = '\n'.join(
    f'  <url>\n    <loc>https://ziontechgroup.com/services/{sid}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>'
    for sid in NEW_SERVICES
)

# Check which already exist
missing = []
for sid in NEW_SERVICES:
    if f'<loc>https://ziontechgroup.com/services/{sid}</loc>' not in sitemap:
        missing.append(sid)

if not missing:
    print('All 10 services already in sitemap. Nothing to do.')
else:
    print(f'Adding {len(missing)} missing URLs to sitemap...')
    insert = f'\n{new_block}\n'
    sitemap = sitemap.replace('</urlset>', f'{insert}</urlset>')
    with open(SITEMAP, 'w') as f:
        f.write(sitemap)
    new_count = len(re.findall(r'<loc>', sitemap))
    print(f'Sitemap updated: {existing_count} -> {new_count} URLs')
    print(f'Added: {", ".join(missing)}')
