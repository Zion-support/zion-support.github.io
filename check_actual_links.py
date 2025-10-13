#!/usr/bin/env python3
import os
import re
import subprocess

def check_page_exists(route):
    """Check if a page actually exists"""
    if route == '' or route == '/':
        return os.path.exists('/workspace/app/page.tsx')
    else:
        # Remove leading slash
        clean_route = route.lstrip('/')
        page_path = f'/workspace/app/{clean_route}/page.tsx'
        return os.path.exists(page_path)

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

def analyze_actual_links():
    """Analyze the actual broken links"""
    print("🔍 Checking Actual Link Status...")
    print("=" * 50)
    
    component_links = get_links_from_components()
    
    working_links = []
    broken_links = []
    
    for link in component_links:
        if check_page_exists(link):
            working_links.append(link)
        else:
            broken_links.append(link)
    
    print(f"✅ WORKING LINKS ({len(working_links)}):")
    print("-" * 30)
    for link in sorted(working_links):
        print(f"  • {link}")
    print()
    
    print(f"❌ BROKEN LINKS ({len(broken_links)}):")
    print("-" * 30)
    for link in sorted(broken_links):
        print(f"  • {link}")
    print()
    
    # Check specific problematic links
    print("🔍 DETAILED CHECK:")
    print("-" * 20)
    test_links = ['/cloud-services', '/cybersecurity', '/custom-development', '/ai-services']
    for link in test_links:
        exists = check_page_exists(link)
        status = "✅ EXISTS" if exists else "❌ MISSING"
        print(f"  {link}: {status}")
    
    return broken_links

if __name__ == "__main__":
    broken_links = analyze_actual_links()
    print(f"\n📋 SUMMARY: {len(broken_links)} broken links found")