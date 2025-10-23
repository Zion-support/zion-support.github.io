#!/usr/bin/env python3
import os
import re
import glob

def fix_page_file(file_path):
    """Comprehensive fix for page files with common syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Remove duplicate function declarations
        content = re.sub(
            r'(\s*const\s+\w+Page:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*?)(\s*const\s+PagePage:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{)',
            r'\1',
            content,
            flags=re.DOTALL
        )
        
        # Fix 2: Fix malformed JSX structure
        content = re.sub(
            r'(\s*<Helmet>\s*<title>.*?</title>\s*<meta[^>]*/>\s*<meta[^>]*/>\s*</Helmet>\s*<Navigation />\s*)(\s*<div[^>]*>\s*{/\* Hero Section \*/}\s*</div>\s*<section[^>]*>)',
            r'\1<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">\n        <section className="relative py-20 px-4 overflow-hidden">',
            content,
            flags=re.DOTALL
        )
        
        # Fix 3: Fix incomplete JSX structure
        content = re.sub(
            r'(\s*<Helmet>\s*<title>.*?</title>\s*<meta[^>]*/>\s*<meta[^>]*/>\s*</Helmet>\s*<Navigation />\s*)(\s*<div[^>]*>\s*{/\* Hero Section \*/}\s*</div>\s*<section[^>]*>\s*<div[^>]*>\s*<div[^>]*>\s*</div>\s*</div>\s*</section>)',
            r'\1<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">\n        <section className="relative py-20 px-4 overflow-hidden">\n          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>\n          <div className="relative max-w-7xl mx-auto text-center">\n            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">\n              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Page Title</span>\n            </h1>\n            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">\n              Page description goes here.\n            </p>\n            <div className="flex flex-col sm:flex-row gap-4 justify-center">\n              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">\n                Get Started\n                <ArrowRight className="ml-2 h-5 w-5" />\n              </button>\n              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">\n                Learn More\n              </button>\n            </div>\n          </div>\n        </section>',
            content,
            flags=re.DOTALL
        )
        
        # Fix 4: Fix missing closing tags
        if '<div className="min-h-screen' in content and content.count('<div') > content.count('</div>'):
            # Add missing closing div
            content = content.rstrip() + '\n      </div>'
        
        # Fix 5: Fix missing Footer and closing tags
        if '<Footer />' not in content and 'export default' in content:
            # Find the last closing div and add Footer before it
            content = re.sub(
                r'(\s*</div>\s*)(\s*</>\s*;\s*\};\s*export default)',
                r'\1      <Footer />\n    \2',
                content,
                flags=re.DOTALL
            )
        
        # Fix 6: Fix malformed title tags
        content = re.sub(
            r'<title>\s*([^<]+)\s*</title>',
            r'<title>\1</title>',
            content
        )
        
        # Fix 7: Fix missing function declaration
        if 'const PagePage: React.FC = () => {' not in content and 'return (' in content and 'const ' not in content:
            content = content.replace(
                'return (',
                'const PagePage: React.FC = () => {\n  return ('
            )
        
        # Fix 8: Fix missing export
        if 'export default' not in content and 'PagePage' in content:
            content = content.rstrip() + '\n\nexport default PagePage;'
        
        # Fix 9: Fix incomplete JSX structure where div is not properly closed
        content = re.sub(
            r'(\s*<div[^>]*>\s*{/\* Hero Section \*/}\s*</div>\s*)(\s*<section[^>]*>)',
            r'\1\n        \2',
            content,
            flags=re.DOTALL
        )
        
        # Fix 10: Fix missing opening div tag
        content = re.sub(
            r'(\s*<Navigation />\s*)(\s*<div[^>]*>\s*{/\* Hero Section \*/}\s*</div>\s*<section)',
            r'\1<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">\n        <section',
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
        if fix_page_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(page_files)} total page files")

if __name__ == "__main__":
    main()