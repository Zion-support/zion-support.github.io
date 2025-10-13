#!/usr/bin/env python3
"""
Generate a comprehensive sitemap for the website
"""
import json
import os
import re
from pathlib import Path

def extract_routes_from_app_tsx():
    """Extract all routes from App.tsx"""
    app_tsx_path = "/workspace/App.tsx"
    routes = []
    
    with open(app_tsx_path, 'r') as f:
        content = f.read()
    
    # Find all Route path patterns
    route_pattern = r'<Route\s+path="([^"]+)"\s+element={<[^>]+Page\s*/>}'
    matches = re.findall(route_pattern, content)
    
    for match in matches:
        routes.append(match)
    
    return routes

def find_existing_pages():
    """Find all existing page.tsx files"""
    pages = []
    app_dir = Path("/workspace/app")
    
    for page_file in app_dir.rglob("page.tsx"):
        # Convert file path to route
        relative_path = page_file.relative_to(app_dir)
        route = "/" + str(relative_path.parent).replace("\\", "/")
        if route == "/.":
            route = "/"
        pages.append(route)
    
    return sorted(pages)

def generate_sitemap():
    """Generate comprehensive sitemap"""
    routes_from_app = extract_routes_from_app_tsx()
    existing_pages = find_existing_pages()
    
    # Find missing routes (routes in App.tsx but no corresponding page)
    missing_pages = []
    for route in routes_from_app:
        if route not in existing_pages:
            missing_pages.append(route)
    
    # Find orphaned pages (pages that exist but not in App.tsx)
    orphaned_pages = []
    for page in existing_pages:
        if page not in routes_from_app:
            orphaned_pages.append(page)
    
    sitemap = {
        "total_routes_in_app": len(routes_from_app),
        "total_existing_pages": len(existing_pages),
        "missing_pages": missing_pages,
        "orphaned_pages": orphaned_pages,
        "all_routes": sorted(routes_from_app),
        "all_pages": sorted(existing_pages)
    }
    
    # Save sitemap
    with open("/workspace/sitemap_analysis.json", "w") as f:
        json.dump(sitemap, f, indent=2)
    
    print(f"=== SITEMAP ANALYSIS ===")
    print(f"Total routes in App.tsx: {len(routes_from_app)}")
    print(f"Total existing pages: {len(existing_pages)}")
    print(f"Missing pages: {len(missing_pages)}")
    print(f"Orphaned pages: {len(orphaned_pages)}")
    
    if missing_pages:
        print(f"\n=== MISSING PAGES ===")
        for page in missing_pages[:20]:  # Show first 20
            print(f"❌ {page}")
        if len(missing_pages) > 20:
            print(f"... and {len(missing_pages) - 20} more")
    
    if orphaned_pages:
        print(f"\n=== ORPHANED PAGES ===")
        for page in orphaned_pages[:20]:  # Show first 20
            print(f"⚠️  {page}")
        if len(orphaned_pages) > 20:
            print(f"... and {len(orphaned_pages) - 20} more")
    
    return sitemap

if __name__ == "__main__":
    generate_sitemap()