#!/usr/bin/env python3
"""Content growth healthcheck for ziontechgroup static export."""

from pathlib import Path
from datetime import datetime, timezone
import re
import json

BASE = Path('/Users/miami2/zion.app')
REDIRECTS = BASE / '_redirects'
SITEMAP = BASE / 'sitemap.xml'
OUT_DIR = BASE / 'automation' / 'reports'
OUT_DIR.mkdir(parents=True, exist_ok=True)
OUT = OUT_DIR / 'content_growth_healthcheck.json'

ROUTES_EXPECTED = {
    'home': '/',
    'case-studies': '/case-studies/',
    'free-tools': '/free-tools/',
    'free-tools-hub': '/free-tools-hub/',
    'contact': '/contact/',
    'pricing': '/pricing/',
    'blog': '/blog/',
}

SERVICE_ROUTES_EXPECTED = [
    '/services/cloud-cost-optimization/',
    '/services/cybersecurity/',
    '/services/data-analytics/',
    '/services/blockchain/',
    '/services/iot/',
    '/services/ai-automation/',
    '/services/cloud/',
    '/services/security/',
    '/services/data/',
    '/services/blockchain/',
    '/services/iot/',
]


def read_redirects():
    routes = []
    conflicts = []
    target_counts = {}
    if REDIRECTS.exists():
        for line in REDIRECTS.read_text(encoding='utf-8', errors='ignore').splitlines():
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            parts = line.split()
            if len(parts) < 2:
                continue
            source = parts[0]
            target = parts[1]
            status = parts[2] if len(parts) > 2 else '200'
            routes.append({'source': source, 'target': target, 'status': status})
            target_counts[target] = target_counts.get(target, 0) + 1
            if target_counts[target] > 1:
                conflicts.append(target)
    return routes, conflicts


def read_sitemap():
    urls = []
    if SITEMAP.exists():
        text = SITEMAP.read_text(encoding='utf-8', errors='ignore')
        urls = re.findall(r'<loc>(.*?)</loc>', text)
    return urls


def classify_urls(urls):
    route_counts = {}
    for u in urls:
        p = u.replace('https://ziontechgroup.com', '').rstrip('/') or '/'
        route_counts[p] = route_counts.get(p, 0) + 1
    return route_counts


def check_routes(route_counts, routes):
    coverage = {}
    for key, route in ROUTES_EXPECTED.items():
        present = route in route_counts or route in [r['target'] for r in routes]
        coverage[key] = bool(present)
    service_coverage = {}
    for route in SERVICE_ROUTES_EXPECTED:
        service_coverage[route] = route in route_counts or route in [r['target'] for r in routes]
    return coverage, service_coverage


def main():
    routes, conflicts = read_redirects()
    urls = read_sitemap()
    route_counts = classify_urls(urls)
    coverage, service_coverage = check_routes(route_counts, routes)

    summary = {
        'generated_at': datetime.now(timezone.utc).isoformat(),
        'redirects_total': len(routes),
        'redirects_conflicts': conflicts,
        'sitemap_total_urls': len(urls),
        'sitemap_unique_paths': len(route_counts),
        'coverage': coverage,
        'service_coverage': service_coverage,
        'missing_routes': [r for r, ok in coverage.items() if not ok],
        'missing_services': [r for r, ok in service_coverage.items() if not ok],
    }

    OUT.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding='utf-8')
    print('saved', OUT)
    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
