#!/usr/bin/env python3
"""Add the 20 new adaptive-* service URLs (services 731-750) to sitemap.xml."""
import re, os

BASE = '/Users/klebergarciaalcatrao/zion-support.github.io'
SITEMAP = f'{BASE}/sitemap.xml'

NEW_SERVICES = [
    # batch 731-740
    'adaptive-market-suite-4326e595',
    'adaptive-marketing-automotive-4eaa64ea',
    'adaptive-marketing-real-estate-dcf36513',
    'adaptive-marketing-retail-f7c18236',
    'adaptive-network-automation-75e54436',
    'adaptive-network-engine-ac5d0fa5',
    'adaptive-network-intelligence-ed03db29',
    'adaptive-network-management-711b20b1',
    'adaptive-network-optimization-fad449e3',
    'adaptive-network-orchestrator-136fe6c2',
    # batch 741-750
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

missing = [sid for sid in NEW_SERVICES if f'<loc>https://ziontechgroup.com/services/{sid}</loc>' not in sitemap]
print(f'Missing: {len(missing)} URLs')

if missing:
    new_block = '\n'.join(
        f'  <url>\n    <loc>https://ziontechgroup.com/services/{sid}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>'
        for sid in missing
    )
    sitemap = sitemap.replace('</urlset>', f'\n{new_block}\n</urlset>')
    with open(SITEMAP, 'w') as f:
        f.write(sitemap)
    new_count = len(re.findall(r'<loc>', sitemap))
    print(f'Sitemap updated: {existing_count} -> {new_count} URLs')
else:
    print('All 20 services already in sitemap. Nothing to do.')
