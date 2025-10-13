#!/usr/bin/env python3
"""
Fix the final remaining parsing errors.
"""

import os
import re
import glob
from pathlib import Path

def fix_numeric_function_names():
    """Fix function names that start with numbers."""
    print("Fixing function names that start with numbers...")
    
    # Files that have numeric function names
    problematic_files = [
        'app/404/page.tsx',
        'app/5g-data-analytics/page.tsx',
        'app/5g-edge-computing/page.tsx',
        'app/5g-implementation/page.tsx',
        'app/5g-iot-solutions/page.tsx',
        'app/5g-mobile-applications/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-private-networks/page.tsx',
        'app/5g-smart-city-solutions/page.tsx',
        'app/5g-solutions/page.tsx',
        'app/page.tsx',
        'app/sitemap.xml/page.tsx'
    ]
    
    for file_path in problematic_files:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Extract the service name from the path
                service_name = file_path.replace('app/', '').replace('/page.tsx', '')
                
                # Create a valid function name
                if service_name.startswith('5g'):
                    function_name = 'FiveG' + service_name[2:].replace('-', '').replace('/', '').title()
                elif service_name == '404':
                    function_name = 'NotFound'
                elif service_name == 'page':
                    function_name = 'Home'
                elif service_name == 'sitemap.xml':
                    function_name = 'Sitemap'
                else:
                    function_name = service_name.replace('-', '').replace('/', '').title()
                
                # Update the function name in the content
                old_pattern = r'export default function [^(]+\(\)'
                new_function = f'export default function {function_name}Page()'
                content = re.sub(old_pattern, new_function, content)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"Fixed function name in: {file_path}")
                
            except Exception as e:
                print(f"Error fixing {file_path}: {e}")

def fix_remaining_files():
    """Fix remaining problematic files."""
    print("Fixing remaining files...")
    
    # Fix fix-imports.cjs
    if os.path.exists('fix-imports.cjs'):
        os.remove('fix-imports.cjs')
        print("Removed fix-imports.cjs")
    
    # Fix page_clean.tsx
    if os.path.exists('page_clean.tsx'):
        os.remove('page_clean.tsx')
        print("Removed page_clean.tsx")

def main():
    """Main function to fix final errors."""
    print("Starting final error fixes...")
    
    fix_numeric_function_names()
    fix_remaining_files()
    
    print("Final error fixes complete!")

if __name__ == "__main__":
    main()