#!/usr/bin/env python3
import os
import re
import glob

def extract_navigation_links():
    """Extract all href links from Navigation.tsx"""
    try:
        with open('src/components/Navigation.tsx', 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all href: '/path' patterns
        pattern = r"href: '([^']+)'"
        links = re.findall(pattern, content)
        return set(links)
    except Exception as e:
        print(f"Error reading Navigation.tsx: {e}")
        return set()

def check_page_exists(page_path):
    """Check if a page exists in either src or app directory"""
    # Remove leading slash
    clean_path = page_path.lstrip('/')
    
    # Check in src directory
    src_path = f"src/{clean_path}/page.tsx"
    if os.path.exists(src_path):
        return True, "src"
    
    # Check in app directory
    app_path = f"app/{clean_path}/page.tsx"
    if os.path.exists(app_path):
        return True, "app"
    
    return False, None

def check_all_navigation_links():
    """Check all navigation links and report missing ones"""
    nav_links = extract_navigation_links()
    
    print("=== NAVIGATION LINK CHECK ===")
    print(f"Total navigation links: {len(nav_links)}")
    print()
    
    missing_pages = []
    existing_pages = []
    
    for link in sorted(nav_links):
        exists, location = check_page_exists(link)
        if exists:
            existing_pages.append((link, location))
            print(f"✓ {link} (in {location})")
        else:
            missing_pages.append(link)
            print(f"✗ {link} (MISSING)")
    
    print(f"\n=== SUMMARY ===")
    print(f"Existing pages: {len(existing_pages)}")
    print(f"Missing pages: {len(missing_pages)}")
    
    if missing_pages:
        print(f"\n=== MISSING PAGES TO CREATE ===")
        for page in missing_pages:
            print(f"  {page}")
    
    return missing_pages, existing_pages

if __name__ == "__main__":
    missing, existing = check_all_navigation_links()