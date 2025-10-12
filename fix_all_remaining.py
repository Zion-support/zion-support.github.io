#!/usr/bin/env python3
"""
<<<<<<< HEAD
Fix all remaining problematic files
"""

import os
import glob

def create_generic_page(file_path):
    """Create a generic page template"""
    page_name = os.path.basename(file_path).replace('.tsx', '').replace('page', '')
    page_title = page_name.replace('-', ' ').replace('ai', 'AI').title()
    
    content = f"""'use client';
import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

const {page_name.replace('-', '').replace('ai', 'Ai').title()}Page: React.FC = () => {{
  return (
    <>
      <Helmet>
        <title>{page_title} - Zion Tech Group</title>
        <meta name="description" content="Professional {page_title.lower()} services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {page_title}
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Professional {page_title.lower()} services coming soon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}};

export default {page_name.replace('-', '').replace('ai', 'Ai').title()}Page;"""

    return content

def fix_all_ai_pages():
    """Fix all AI pages"""
    # Get all AI pages
    ai_pages = glob.glob('/workspace/app/ai-*/page.tsx')
    
    files_fixed = 0
    
    for file_path in ai_pages:
        try:
            content = create_generic_page(file_path)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            files_fixed += 1
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")
    
    return files_fixed

def main():
    """Main function"""
    files_fixed = fix_all_ai_pages()
    print(f"\nFixed {files_fixed} AI pages")
=======
Comprehensive script to fix all remaining issues in TSX/TS files
"""
import os
import re
import glob

def fix_unused_imports_and_vars(content):
    """Remove unused imports and variables"""
    lines = content.split('\n')
    filtered_lines = []
    
    # Common unused imports to remove
    unused_imports = [
        'CheckCircle', 'Star', 'Users', 'Award', 'Zap', 'Shield', 'Brain',
        'Box', 'Palette', 'Layers', 'ArrowRight', 'Link', 'Layout'
    ]
    
    for line in lines:
        # Skip unused imports
        if line.strip().startswith('import '):
            should_skip = False
            for unused in unused_imports:
                if unused in line and f'import {unused}' in line:
                    should_skip = True
                    break
            if not should_skip:
                filtered_lines.append(line)
        else:
            filtered_lines.append(line)
    
    return '\n'.join(filtered_lines)

def fix_jsx_syntax_errors(content):
    """Fix JSX syntax errors"""
    # Fix malformed className attributes
    content = re.sub(r'className="([^"]*?)\s+([^"]*?)"', r'className="\1\2"', content)
    
    # Fix malformed gradient classes
    content = re.sub(r'bg-gradient-to-brfrom-', 'bg-gradient-to-br from-', content)
    content = re.sub(r'from-cyan-500to-', 'from-cyan-500 to-', content)
    content = re.sub(r'from-red-500to-', 'from-red-500 to-', content)
    content = re.sub(r'from-slate-800/50to-', 'from-slate-800/50 to-', content)
    
    # Fix malformed text classes
    content = re.sub(r'text-4xlmd:text-6xlfont-bold', 'text-4xl md:text-6xl font-bold', content)
    content = re.sub(r'text-lgtext-gray-300mb-8', 'text-lg text-gray-300 mb-8', content)
    content = re.sub(r'text-xl text-gray-300mb-8', 'text-xl text-gray-300 mb-8', content)
    
    # Fix malformed spacing classes
    content = re.sub(r'mx-autopx-4', 'mx-auto px-4', content)
    content = re.sub(r'w-5h-5m l-2', 'w-5 h-5 ml-2', content)
    content = re.sub(r'w-8h-8', 'w-8 h-8', content)
    content = re.sub(r'w-6h-6', 'w-6 h-6', content)
    content = re.sub(r'flexitems-center', 'flex items-center', content)
    content = re.sub(r'hover:from-cyan-600', 'hover:from-cyan-600', content)
    content = re.sub(r'hover:to-purple-700', 'hover:to-purple-700', content)
    content = re.sub(r'hover:from-red-600', 'hover:from-red-600', content)
    content = re.sub(r'hover:to-purple-700', 'hover:to-purple-700', content)
    content = re.sub(r'hover:bg-white/10', 'hover:bg-white/10', content)
    content = re.sub(r'hover:border-red-400/40', 'hover:border-red-400/40', content)
    content = re.sub(r'hover:bg-red-400/10', 'hover:bg-red-400/10', content)
    content = re.sub(r'transition-allduration-300', 'transition-all duration-300', content)
    content = re.sub(r'borderborder-slate-700', 'border border-slate-700', content)
    content = re.sub(r'p-6border', 'p-6 border', content)
    content = re.sub(r'p-8border', 'p-8 border', content)
    content = re.sub(r'rounded-xl p-6border', 'rounded-xl p-6 border', content)
    content = re.sub(r'rounded-xl p-8border', 'rounded-xl p-8 border', content)
    
    # Fix malformed JSX elements
    content = re.sub(r'<div key="\{index\}"', '<div key={index}', content)
    content = re.sub(r'<div key="\{itemIndex\}"', '<div key={itemIndex}', content)
    content = re.sub(r'<div key="\{featureIndex\}"', '<div key={featureIndex}', content)
    content = re.sub(r'<li key="\{itemIndex\}"', '<li key={itemIndex}', content)
    content = re.sub(r'<li key="\{featureIndex\}"', '<li key={featureIndex}', content)
    content = re.sub(r'<Star key="\{i\}"', '<Star key={i}', content)
    
    # Fix malformed template literals
    content = re.sub(r'className="\{`bg-gradient-to-br"', 'className={`bg-gradient-to-br', content)
    content = re.sub(r'className="\{`w-full"', 'className={`w-full', content)
    
    # Fix malformed closing tags
    content = re.sub(r'</div>\s*/>', '</div>', content)
    content = re.sub(r'</h3>\s*/>', '</h3>', content)
    content = re.sub(r'</h2>\s*/>', '</h2>', content)
    content = re.sub(r'</p>\s*/>', '</p>', content)
    content = re.sub(r'</ul>\s*/>', '</ul>', content)
    content = re.sub(r'</li>\s*/>', '</li>', content)
    content = re.sub(r'</Link>\s*/>', '</Link>', content)
    content = re.sub(r'</Star>\s*/>', '</Star>', content)
    
    # Fix malformed sections
    content = re.sub(r'<section className="w-5h-5m l-2" />', '<section className="py-16">', content)
    
    # Fix malformed divs with classes
    content = re.sub(r'<div className="mi n-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">', '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">', content)
    
    # Fix malformed headings
    content = re.sub(r'<h2 className="w-5h-5m l-2" />', '<h2 className="text-3xl font-bold text-white mb-4">', content)
    content = re.sub(r'<h3 className="w-5h-5m l-2" />', '<h3 className="text-xl font-semibold text-white mb-2">', content)
    content = re.sub(r'<p className="w-5h-5m l-2">', '<p className="text-gray-300 mb-4">', content)
    
    # Fix malformed spans
    content = re.sub(r'<span className="w-5h-5m l-2" />', '<span className="text-4xl font-bold text-white">', content)
    
    # Fix malformed ul elements
    content = re.sub(r'<ul className="w-5h-5m l-2" />', '<ul className="space-y-2">', content)
    
    return content

def fix_duplicate_imports(content):
    """Remove duplicate imports"""
    lines = content.split('\n')
    seen_imports = set()
    filtered_lines = []
    
    for line in lines:
        if line.strip().startswith('import '):
            if line not in seen_imports:
                seen_imports.add(line)
                filtered_lines.append(line)
        else:
            filtered_lines.append(line)
    
    return '\n'.join(filtered_lines)

def fix_missing_closing_braces(content):
    """Fix missing closing braces"""
    # Count opening and closing braces
    open_braces = content.count('{')
    close_braces = content.count('}')
    
    if open_braces > close_braces:
        missing_braces = open_braces - close_braces
        content += '\n' + '}' * missing_braces
    
    return content

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_duplicate_imports(content)
        content = fix_unused_imports_and_vars(content)
        content = fix_jsx_syntax_errors(content)
        content = fix_missing_closing_braces(content)
        
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
    """Main function to fix all files"""
    # Find all TSX and TS files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")
>>>>>>> origin/main

if __name__ == "__main__":
    main()