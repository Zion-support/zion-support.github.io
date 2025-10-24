#!/usr/bin/env python3
"""
Fix syntax errors in page files.
"""

import os
import glob
import re

def fix_page_syntax(file_path):
    """Fix syntax errors in a page file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix duplicate function declarations
        # Pattern: const Page: React.FC = () => { ... }; export default function Page() {
        pattern = r'(const Page: React\.FC = \(\) => \{[^}]*React\.useEffect\(\(\) => \{[^}]*\}, \[\]\);\s*)(export default function Page\(\) \{)'
        replacement = r'\1'
        
        fixed_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        # Fix missing closing brace for the const Page function
        if 'const Page: React.FC = () => {' in fixed_content and '};' not in fixed_content.split('return (')[1].split('export default')[0]:
            # Find the return statement and add the missing closing brace
            return_match = re.search(r'(return \([^}]*\);\s*)(export default)', fixed_content, re.DOTALL)
            if return_match:
                fixed_content = fixed_content.replace(
                    return_match.group(1),
                    return_match.group(1) + '};\n\n'
                )
        
        if fixed_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"Fixed syntax in: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all page.tsx files
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in page_files:
        if fix_page_syntax(file_path):
            fixed_count += 1
    
    print(f"Fixed syntax in {fixed_count} files")

if __name__ == "__main__":
    main()