#!/usr/bin/env python3

"""
Script to fix all remaining parsing errors
"""

import os
import re
import glob

def fix_all_errors(content):
    """Fix all remaining parsing errors"""
    # Fix malformed class names with missing spaces
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    
    # Fix specific patterns
    content = re.sub(r'w-5 h-5m l-2', 'w-5 h-5 ml-2', content)
    content = re.sub(r'm in-h-screen', 'min-h-screen', content)
    content = re.sub(r'm ax-w-7xl', 'max-w-7xl', content)
    content = re.sub(r't ext-', 'text-', content)
    content = re.sub(r'f lex', 'flex', content)
    content = re.sub(r'bg-gradient-to-rfrom-', 'bg-gradient-to-r from-', content)
    content = re.sub(r'b order-2', 'border-2', content)
    content = re.sub(r'font-semiboldhover:', 'font-semibold hover:', content)
    content = re.sub(r't ext-2 xl font-boldtext-white', 'text-2xl font-bold text-white', content)
    content = re.sub(r't ext-4xl font-bold text-white', 'text-4xl font-bold text-white', content)
    content = re.sub(r't ext-lg text-gray-300', 'text-lg text-gray-300', content)
    content = re.sub(r'p y-16 px-4 sm:px-6 lg:px-8', 'py-16 px-4 sm:px-6 lg:px-8', content)
    content = re.sub(r'm ax-w-7xl mx-auto', 'max-w-7xl mx-auto', content)
    content = re.sub(r't ext-center', 'text-center', content)
    content = re.sub(r'f lex items-center justify-center', 'flex items-center justify-center', content)
    content = re.sub(r'm b-4', 'mb-4', content)
    content = re.sub(r'm b-6', 'mb-6', content)
    content = re.sub(r'm b-8', 'mb-8', content)
    content = re.sub(r'a b solute', 'absolute', content)
    content = re.sub(r'g r oup', 'group', content)
    content = re.sub(r'transformhover:', 'transform hover:', content)
    content = re.sub(r'justify-centerspace-x-2backdrop-blur-sm', 'justify-center space-x-2 backdrop-blur-sm', content)
    
    # Fix malformed JSX structure
    content = re.sub(r'<h1 className="w-5 h-5m l-2" />\s*<span className="w-5 h-5m l-2" />([^<]+)</span>\s*</h1>', r'<h1 className="text-4xl font-bold text-white mb-6">\1</h1>', content)
    content = re.sub(r'<p className="w-5 h-5m l-2">([^<]+)</p>', r'<p className="text-lg text-gray-300 mb-8">\1</p>', content)
    content = re.sub(r'<h2 className="t e xt-2 xl font-boldtext-white mb-4"\s*>\s*Coming Soon</h2>', r'<h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>', content)
    content = re.sub(r'<button className="w-5 h-5m l-2">([^<]+)</button>', r'<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">\1</button>', content)
    
    # Fix malformed section tags
    content = re.sub(r'<section className="w-5 h-5m l-2" />', r'<section className="py-16 px-4 sm:px-6 lg:px-8">', content)
    
    # Fix malformed div structures
    content = re.sub(r'<div className="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*<div className="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">', r'<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">', content)
    
    # Fix malformed closing tags
    content = re.sub(r'</span>\s*</h1>', r'</h1>', content)
    content = re.sub(r'</span>\s*</h2>', r'</h2>', content)
    
    # Fix malformed Helmet tags
    content = re.sub(r'<title />([^<]+)</title>', r'<title>\1</title>', content)
    
    # Fix malformed Link tags
    content = re.sub(r'<Link to="([^"]+)" className="([^"]+)" />\s*<span />([^<]+)</span>\s*<ArrowRight className="w-5 h-5m l-2" />\s*</Link>', r'<Link to="\1" className="\2">\n              <span>\3</span>\n              <ArrowRight className="w-5 h-5 ml-2" />\n            </Link>', content)
    
    # Fix malformed closing tags
    content = re.sub(r'</span>\s*</Link>', r'</Link>', content)
    
    return content

def process_file(file_path):
    """Process a single file"""

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content

        content = fix_all_errors(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function"""
    # Find all TypeScript/React files
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/*.tsx',
        '/workspace/*.ts'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if process_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()