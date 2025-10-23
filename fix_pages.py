#!/usr/bin/env python3
import os
import re
import glob

def fix_page_file(file_path):
    """Fix common syntax errors in page files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common patterns
        # 1. Fix malformed JSX structure where Helmet is not properly closed
        content = re.sub(
            r'(\s*<Helmet>\s*<title>.*?</title>\s*<meta[^>]*/>\s*<meta[^>]*/>\s*</Helmet>\s*<Navigation />\s*<div[^>]*>)\s*{/\* Hero Section \*/}\s*<div>',
            r'\1',
            content,
            flags=re.DOTALL
        )
        
        # 2. Fix missing closing tags and malformed structure
        content = re.sub(
            r'(\s*<Helmet>\s*<title>.*?</title>\s*<meta[^>]*/>\s*<meta[^>]*/>\s*</Helmet>\s*<Navigation />\s*)\s*<div[^>]*>.*?{/\* Hero Section \*/}\s*<div>',
            r'\1<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">',
            content,
            flags=re.DOTALL
        )
        
        # 3. Fix incomplete JSX structure
        content = re.sub(
            r'(\s*<Helmet>\s*<title>.*?</title>\s*<meta[^>]*/>\s*<meta[^>]*/>\s*</Helmet>\s*<Navigation />\s*)\s*<div[^>]*>.*?{/\* Hero Section \*/}\s*<div>\s*<section[^>]*>',
            r'\1<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">\n        <section className="relative py-20 px-4 overflow-hidden">',
            content,
            flags=re.DOTALL
        )
        
        # 4. Fix missing closing tags
        if '<div className="min-h-screen' in content and '</div>' not in content:
            content = content.rstrip() + '\n      </div>\n      <Footer />\n    </>\n  );\n};\n\nexport default PagePage;'
        
        # 5. Fix malformed title tags
        content = re.sub(
            r'<title>\s*([^<]+)\s*</title>',
            r'<title>\1</title>',
            content
        )
        
        # 6. Fix missing function declaration
        if 'const PagePage: React.FC = () => {' not in content and 'return (' in content:
            content = content.replace(
                'return (',
                'const PagePage: React.FC = () => {\n  return ('
            )
        
        # 7. Fix missing export
        if 'export default' not in content and 'PagePage' in content:
            content = content.rstrip() + '\n\nexport default PagePage;'
        
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
        if fix_page_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(page_files)} total page files")

if __name__ == "__main__":
    main()