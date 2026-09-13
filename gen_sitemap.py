#!/usr/bin/env python3
import json
import os

BASE_DIR = '/Users/klebergarciaalcatrao/zion-support.github.io'
SERVICES_FILE = '/Users/klebergarciaalcatrao/app/data/servicesData.json'
SITEMAP_FILE = os.path.join(BASE_DIR, 'sitemap.xml')

def generate_sitemap():
    with open(SERVICES_FILE, 'r') as f:
        data = json.load(f)
    
    if isinstance(data, dict):
        services = data.get('services', [])
    else:
        services = data
    
    urls = []
    for service in services:
        service_id = service.get('id')
        if service_id:
            urls.append(f'https://ziontechgroup.com/services/{service_id}')
    
    # Always include homepage
    urls.insert(0, 'https://ziontechgroup.com/')
    
    # Sitemap template
    sitemap = '''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{}
</urlset>'''.format('\n'.join([f'  <url><loc>{url}</loc></url>' for url in urls]))
    
    with open(SITEMAP_FILE, 'w') as f:
        f.write(sitemap)
    
    print(f'Generated sitemap with {len(urls)} URLs')
    return urls

if __name__ == '__main__':
    generate_sitemap()