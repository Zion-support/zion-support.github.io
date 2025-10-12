#!/usr/bin/env python3
"""
Script to fix specific syntax errors in 5G pages and other problematic files.
"""

import os
import re
from pathlib import Path

def fix_5g_pages():
    """Fix specific syntax errors in 5G pages."""
    # List of 5G pages that need fixing
    pages = [
        'app/5g-data-analytics/page.tsx',
        'app/5g-edge-computing/page.tsx',
        'app/5g-implementation/page.tsx',
        'app/5g-iot-solutions/page.tsx',
        'app/5g-mobile-applications/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-private-networks/page.tsx',
        'app/5g-smart-city-solutions/page.tsx',
        'app/5g-solutions/page.tsx'
    ]
    
    for page in pages:
        file_path = f'/workspace/{page}'
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Fix missing closing brace/parenthesis
                if content.strip().endswith(');'):
                    # Already correct
                    continue
                elif content.strip().endswith('}'):
                    # Add missing closing parenthesis
                    content = content.rstrip() + '\n  );'
                elif content.strip().endswith(')'):
                    # Add missing closing brace
                    content = content.rstrip() + '\n}'
                else:
                    # Add both
                    content = content.rstrip() + '\n  );\n}'
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"Fixed {page}")
                
            except Exception as e:
                print(f"Error fixing {page}: {e}")

def fix_test_files():
    """Fix test files with syntax errors."""
    test_files = [
        '__tests__/advanced-components.test.tsx',
        '__tests__/components.test.tsx'
    ]
    
    for test_file in test_files:
        file_path = f'/workspace/{test_file}'
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Fix missing commas in test files
                content = re.sub(r'(\w+)\s*\)\s*$', r'\1,)', content, flags=re.MULTILINE)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"Fixed {test_file}")
                
            except Exception as e:
                print(f"Error fixing {test_file}: {e}")

def fix_api_file():
    """Fix the API file with syntax errors."""
    file_path = '/workspace/api/onsite-request.js'
    if os.path.exists(file_path):
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Fix try-catch syntax
            content = re.sub(r'catch\s*\(', '} catch (', content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Fixed {file_path}")
            
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")

def main():
    """Main function to fix all identified issues."""
    print("Fixing 5G pages...")
    fix_5g_pages()
    
    print("Fixing test files...")
    fix_test_files()
    
    print("Fixing API file...")
    fix_api_file()
    
    print("All fixes completed!")

if __name__ == "__main__":
    main()