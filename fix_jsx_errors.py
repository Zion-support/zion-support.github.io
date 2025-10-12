#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_errors():
    # Find all page.tsx files
    pattern = "app/**/page.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if file has the malformed JSX pattern
            if "  </" in content and "Page" in content:
                print(f"Fixing {file_path}")
                
                # Fix the malformed JSX pattern
                # Pattern: "Page\n  </" should become "Page\n              </"
                content = re.sub(
                    r'Page\n  </',
                    'Page\n              </',
                    content
                )
                
                # Also fix the title and description
                content = re.sub(
                    r'<title>Page \| Zion Tech Group</title>',
                    '<title>Database Services | Zion Tech Group</title>',
                    content
                )
                
                content = re.sub(
                    r'content="Professional Page services by Zion Tech Group',
                    'content="Professional Database Services by Zion Tech Group',
                    content
                )
                
                content = re.sub(
                    r'content="page, AI solutions, IT services, Zion Tech Group, page"',
                    'content="database services, AI solutions, IT services, Zion Tech Group, database"',
                    content
                )
                
                # Write the fixed content back
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                fixed_count += 1
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    fix_jsx_errors()