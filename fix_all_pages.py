#!/usr/bin/env python3
"""
Fix all page files with missing imports and syntax issues.
"""

import os
import glob
import re

def fix_page_file(file_path):
    """Fix a single page file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Add missing Link import if needed
        if 'Link' in content and 'import Link' not in content:
            content = content.replace(
                "import React from 'react';",
                "import React from 'react';\nimport Link from 'next/link';"
            )
        
        # Fix any remaining syntax issues
        # Remove any duplicate function declarations
        if 'export default function Page()' in content and 'const Page: React.FC' in content:
            # Keep only the const Page declaration and remove the duplicate export
            content = re.sub(r'export default function Page\(\) \{[^}]*\};\s*export default Page;', 'export default Page;', content, flags=re.DOTALL)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all page.tsx files
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in page_files:
        if fix_page_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} page files")

if __name__ == "__main__":
    main()