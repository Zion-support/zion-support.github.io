#!/usr/bin/env python3
import os
import re
import glob

def extract_links_from_navigation():
    """Extract all links from Navigation.tsx and Footer.tsx"""
    links = set()
    
    # Read Navigation.tsx
    try:
        with open('/workspace/app/components/Navigation.tsx', 'r') as f:
            nav_content = f.read()
            # Extract URLs from Link components
            nav_links = re.findall(r'to="([^"]+)"', nav_content)
            links.update(nav_links)
    except Exception as e:
        print(f"Error reading Navigation.tsx: {e}")
    
    # Read Footer.tsx
    try:
        with open('/workspace/app/components/Footer.tsx', 'r') as f:
            footer_content = f.read()
            # Extract URLs from Link components
            footer_links = re.findall(r'to="([^"]+)"', footer_content)
            links.update(footer_links)
    except Exception as e:
        print(f"Error reading Footer.tsx: {e}")
    
    return links

def check_page_exists(url):
    """Check if a page exists for the given URL"""
    if url == '/':
        return os.path.exists('/workspace/app/page.tsx')
    
    # Convert URL to file path
    page_path = f"/workspace/app{url}/page.tsx"
    return os.path.exists(page_path)

def analyze_links():
    """Analyze all links and check which pages exist"""
    links = extract_links_from_navigation()
    
    print(f"Found {len(links)} unique links in navigation and footer")
    print("\nAnalyzing link status:")
    print("=" * 50)
    
    missing_pages = []
    existing_pages = []
    
    for link in sorted(links):
        exists = check_page_exists(link)
        status = "✓" if exists else "✗"
        print(f"{status} {link}")
        
        if exists:
            existing_pages.append(link)
        else:
            missing_pages.append(link)
    
    print(f"\nSummary:")
    print(f"Total links: {len(links)}")
    print(f"Existing pages: {len(existing_pages)}")
    print(f"Missing pages: {len(missing_pages)}")
    
    if missing_pages:
        print(f"\nMissing pages:")
        for page in missing_pages:
            print(f"  - {page}")
    
    return missing_pages, existing_pages

if __name__ == "__main__":
    missing, existing = analyze_links()
