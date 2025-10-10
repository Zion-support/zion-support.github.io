#!/usr/bin/env python3
import re
import os

def extract_routes_from_navigation():
    """Extract all routes from Navigation.tsx"""
    nav_file = '/workspace/app/components/Navigation.tsx'
    with open(nav_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract href values from the navigation
    href_pattern = r"href: '([^']+)'"
    routes = re.findall(href_pattern, content)
    
    # Also extract to values
    to_pattern = r'to="([^"]+)"'
    to_routes = re.findall(to_pattern, content)
    
    all_routes = set(routes + to_routes)
    return all_routes

def extract_routes_from_app():
    """Extract all routes from App.tsx"""
    app_file = '/workspace/App.tsx'
    with open(app_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract path values from Route elements
    path_pattern = r'path="([^"]+)"'
    routes = re.findall(path_pattern, content)
    
    return set(routes)

def check_missing_pages():
    """Check which routes have corresponding page files"""
    nav_routes = extract_routes_from_navigation()
    app_routes = extract_routes_from_app()
    
    print("Routes in Navigation but not in App.tsx:")
    missing_from_app = nav_routes - app_routes
    for route in sorted(missing_from_app):
        print(f"  {route}")
    
    print(f"\nTotal routes in navigation: {len(nav_routes)}")
    print(f"Total routes in App.tsx: {len(app_routes)}")
    print(f"Missing from App.tsx: {len(missing_from_app)}")
    
    # Check which pages actually exist
    print("\nChecking for missing page files:")
    missing_pages = []
    for route in nav_routes:
        if route == '/':
            page_path = '/workspace/app/page.tsx'
        else:
            page_path = f'/workspace/app{route}/page.tsx'
        
        if not os.path.exists(page_path):
            missing_pages.append(route)
            print(f"  Missing: {route} -> {page_path}")
    
    print(f"\nTotal missing pages: {len(missing_pages)}")
    return missing_pages

if __name__ == "__main__":
    missing_pages = check_missing_pages()