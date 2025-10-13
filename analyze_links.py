#!/usr/bin/env python3
import os
import re
import subprocess
import json

def get_routes_from_app_tsx():
    """Extract all routes from App.tsx"""
    with open('/workspace/App.tsx', 'r') as f:
        content = f.read()
    
    # Find all route paths
    pattern = r'path="([^"]*)"'
    routes = re.findall(pattern, content)
    return routes

def get_existing_pages():
    """Get all existing page.tsx files"""
    result = subprocess.run(['find', '/workspace/app', '-name', 'page.tsx'], 
                          capture_output=True, text=True)
    pages = []
    for line in result.stdout.strip().split('\n'):
        if line:
            # Convert path to route
            route = line.replace('/workspace/app/', '').replace('/page.tsx', '')
            if route == 'page.tsx':  # Root page
                route = ''
            pages.append(route)
    return pages

def get_links_from_components():
    """Extract all links from Navigation and Footer components"""
    links = set()
    
    # Read Navigation component
    with open('/workspace/app/components/Navigation.tsx', 'r') as f:
        nav_content = f.read()
    
    # Find all Link to="..." patterns
    nav_pattern = r'to="([^"]*)"'
    nav_links = re.findall(nav_pattern, nav_content)
    links.update(nav_links)
    
    # Read Footer component
    with open('/workspace/app/components/Footer.tsx', 'r') as f:
        footer_content = f.read()
    
    footer_links = re.findall(nav_pattern, footer_content)
    links.update(footer_links)
    
    return list(links)

def analyze_website():
    """Analyze the website for missing pages and broken links"""
    print("🔍 Analyzing Zion Tech Group Website...")
    print("=" * 50)
    
    # Get data
    routes = get_routes_from_app_tsx()
    existing_pages = get_existing_pages()
    component_links = get_links_from_components()
    
    print(f"📊 Found {len(routes)} routes in App.tsx")
    print(f"📊 Found {len(existing_pages)} existing pages")
    print(f"📊 Found {len(component_links)} links in components")
    print()
    
    # Find missing pages (routes without corresponding pages)
    missing_pages = []
    for route in routes:
        if route not in existing_pages:
            missing_pages.append(route)
    
    print("❌ MISSING PAGES:")
    print("-" * 30)
    if missing_pages:
        for page in sorted(missing_pages):
            print(f"  • {page}")
    else:
        print("  ✅ All routes have corresponding pages!")
    print()
    
    # Find broken links (component links without corresponding pages)
    broken_links = []
    for link in component_links:
        if link not in existing_pages and link != '':
            broken_links.append(link)
    
    print("🔗 BROKEN LINKS:")
    print("-" * 30)
    if broken_links:
        for link in sorted(broken_links):
            print(f"  • {link}")
    else:
        print("  ✅ All component links have corresponding pages!")
    print()
    
    # Find pages without routes
    orphaned_pages = []
    for page in existing_pages:
        if page not in routes and page != '':
            orphaned_pages.append(page)
    
    print("📄 ORPHANED PAGES (pages without routes):")
    print("-" * 40)
    if orphaned_pages:
        for page in sorted(orphaned_pages)[:20]:  # Show first 20
            print(f"  • {page}")
        if len(orphaned_pages) > 20:
            print(f"  ... and {len(orphaned_pages) - 20} more")
    else:
        print("  ✅ All pages have corresponding routes!")
    print()
    
    # Summary
    print("📋 SUMMARY:")
    print("-" * 20)
    print(f"  Missing pages: {len(missing_pages)}")
    print(f"  Broken links: {len(broken_links)}")
    print(f"  Orphaned pages: {len(orphaned_pages)}")
    
    return {
        'missing_pages': missing_pages,
        'broken_links': broken_links,
        'orphaned_pages': orphaned_pages
    }

if __name__ == "__main__":
    analyze_website()