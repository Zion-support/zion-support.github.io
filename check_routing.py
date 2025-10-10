#!/usr/bin/env python3
import os
import re

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

def extract_route_paths():
    """Extract all route paths from App.tsx"""
    try:
        with open('src/App.tsx', 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all <Route path="/path" patterns
        pattern = r'<Route path="([^"]+)"'
        routes = re.findall(pattern, content)
        return set(routes)
    except Exception as e:
        print(f"Error reading App.tsx: {e}")
        return set()

def check_routing_coverage():
    """Check if all navigation links have corresponding routes"""
    nav_links = extract_navigation_links()
    route_paths = extract_route_paths()
    
    print("=== ROUTING COVERAGE CHECK ===")
    print(f"Navigation links: {len(nav_links)}")
    print(f"Route paths: {len(route_paths)}")
    print()
    
    missing_routes = nav_links - route_paths
    extra_routes = route_paths - nav_links
    
    if missing_routes:
        print("=== MISSING ROUTES ===")
        for route in sorted(missing_routes):
            print(f"  {route}")
    
    if extra_routes:
        print("\n=== EXTRA ROUTES (not in navigation) ===")
        for route in sorted(extra_routes):
            print(f"  {route}")
    
    if not missing_routes and not extra_routes:
        print("✓ All navigation links have corresponding routes!")
    
    return missing_routes, extra_routes

if __name__ == "__main__":
    missing, extra = check_routing_coverage()