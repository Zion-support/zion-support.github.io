#!/usr/bin/env python3
import os
import re
import glob

def fix_duplicate_functions(file_path):
    """Fix duplicate function declarations and malformed JSX"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix duplicate function declarations
        # Pattern: const SomePage: React.FC = () => { ... const PagePage: React.FC = () => {
        content = re.sub(
            r'(\s*const\s+\w+Page:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*?)(\s*const\s+PagePage:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{)',
            r'\1',
            content,
            flags=re.DOTALL
        )
        
        # Fix malformed JSX structure where div is not properly closed
        content = re.sub(
            r'(\s*<div[^>]*>\s*{/\* Hero Section \*/}\s*</div>\s*)(\s*<section[^>]*>)',
            r'\1\n        \2',
            content,
            flags=re.DOTALL
        )
        
        # Fix missing opening div tag
        content = re.sub(
            r'(\s*<Navigation />\s*)(\s*<div[^>]*>\s*{/\* Hero Section \*/}\s*</div>\s*<section)',
            r'\1<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">\n        <section',
            content,
            flags=re.DOTALL
        )
        
        # Fix incomplete JSX structure
        content = re.sub(
            r'(\s*<div[^>]*>\s*{/\* Hero Section \*/}\s*</div>\s*<section[^>]*>\s*<div[^>]*>\s*<div[^>]*>\s*</div>\s*</div>\s*</section>)',
            r'\1\n        </div>',
            content,
            flags=re.DOTALL
        )
        
        # Fix missing closing tags
        if '<div className="min-h-screen' in content and content.count('<div') > content.count('</div>'):
            # Add missing closing div
            content = content.rstrip() + '\n      </div>'
        
        # Fix missing Footer and closing tags
        if '<Footer />' not in content and 'export default' in content:
            # Find the last closing div and add Footer before it
            content = re.sub(
                r'(\s*</div>\s*)(\s*</>\s*;\s*\};\s*export default)',
                r'\1      <Footer />\n    \2',
                content,
                flags=re.DOTALL
            )
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all page.tsx files in the app directory
    page_files = glob.glob('/workspace/app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in page_files:
        if fix_duplicate_functions(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(page_files)} total page files")

if __name__ == "__main__":
    main()