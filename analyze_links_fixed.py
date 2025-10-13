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

def check_specific_pages():
    """Check specific important pages"""
    important_pages = [
        '',  # root
        'about',
        'contact', 
        'services',
        'pricing',
        'blog',
        'careers',
        'ai-services',
        'micro-saas',
        'consultation',
        'demo',
        'support',
        'privacy',
        'terms',
        'cookies',
        'sitemap'
    ]
    
    existing_pages = get_existing_pages()
    missing_important = []
    
    for page in important_pages:
        if page not in existing_pages:
            missing_important.append(page)
    
    return missing_important

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
    
    # Check important pages specifically
    missing_important = check_specific_pages()
    
    print("❌ MISSING IMPORTANT PAGES:")
    print("-" * 30)
    if missing_important:
        for page in missing_important:
            if page == '':
                print(f"  • / (root page)")
            else:
                print(f"  • /{page}")
    else:
        print("  ✅ All important pages exist!")
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
    
    # Check if root page exists
    root_exists = '' in existing_pages
    print(f"🏠 Root page exists: {'✅ Yes' if root_exists else '❌ No'}")
    print()
    
    # Summary
    print("📋 SUMMARY:")
    print("-" * 20)
    print(f"  Missing important pages: {len(missing_important)}")
    print(f"  Broken links: {len(broken_links)}")
    print(f"  Root page exists: {'Yes' if root_exists else 'No'}")
    
    return {
        'missing_important_pages': missing_important,
        'broken_links': broken_links,
        'root_exists': root_exists
    }

if __name__ == "__main__":
    analyze_website()