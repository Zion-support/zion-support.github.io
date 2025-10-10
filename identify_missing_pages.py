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

def get_existing_pages():
    """Get all existing page directories"""
    existing_pages = set()
    
    # Check app directory
    app_dirs = glob.glob('app/*/')
    for dir_path in app_dirs:
        page_name = dir_path.replace('app/', '').replace('/', '')
        if page_name != 'components':  # Skip components directory
            existing_pages.add(f'/{page_name}')
    
    # Check src directory for pages
    src_dirs = glob.glob('src/*/')
    for dir_path in src_dirs:
        page_name = dir_path.replace('src/', '').replace('/', '')
        if page_name not in ['components', 'config', 'hooks', 'utils', 'types', 'content', 'data']:
            existing_pages.add(f'/{page_name}')
    
    return existing_pages

def identify_missing_pages():
    """Identify pages referenced in navigation but missing from filesystem"""
    nav_links = extract_navigation_links()
    existing_pages = get_existing_pages()
    
    missing_pages = nav_links - existing_pages
    
    print("=== MISSING PAGES ANALYSIS ===")
    print(f"Total navigation links: {len(nav_links)}")
    print(f"Total existing pages: {len(existing_pages)}")
    print(f"Missing pages: {len(missing_pages)}")
    print("\n=== MISSING PAGES ===")
    
    for page in sorted(missing_pages):
        print(f"  {page}")
    
    print("\n=== EXISTING PAGES NOT IN NAVIGATION ===")
    extra_pages = existing_pages - nav_links
    for page in sorted(extra_pages):
        print(f"  {page}")
    
    return missing_pages, extra_pages

if __name__ == "__main__":
    missing, extra = identify_missing_pages()