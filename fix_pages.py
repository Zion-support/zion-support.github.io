#!/usr/bin/env python3
import os
import re
import glob

def fix_page_file(file_path):
    """Fix common issues in page files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove duplicate default exports
        content = re.sub(r'export default [^;]+;\s*export default [^;]+;', 'export default function Page() {', content)
        
        # Fix missing imports
        if 'Helmet' in content and 'import { Helmet }' not in content:
            content = re.sub(r'import React from [\'"]react[\'"]', 
                           'import React from \'react\'\nimport { Helmet } from \'react-helmet-async\'', content)
        
        if 'Link' in content and 'import { Link }' not in content:
            content = re.sub(r'import React from [\'"]react[\'"]', 
                           'import React from \'react\'\nimport { Link } from \'react-router-dom\'', content)
        
        # Remove duplicate function declarations
        content = re.sub(r'export default function [^{]+{\s*}\s*export default [^;]+;', 
                        'export default function Page() {\n  return (\n    <div>Page content</div>\n  )\n}', content)
        
        # Fix malformed JSX
        content = re.sub(r'}\s*export default [^;]+;', '}', content)
        
        # Remove empty lines and clean up
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed issues in: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all page files
    patterns = [
        'app/**/page.tsx',
        'app/**/page.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                total_files += 1
                if fix_page_file(file_path):
                    fixed_count += 1
    
    print(f"\nProcessed {total_files} page files, fixed issues in {fixed_count} files")

if __name__ == "__main__":
    main()