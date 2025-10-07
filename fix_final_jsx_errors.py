#!/usr/bin/env python3
"""
Final script to fix remaining JSX syntax errors
"""

import os
import re
import glob

def fix_final_jsx_errors(file_path):
    """Fix final JSX syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed JSX attributes with colons and spaces
        content = re.sub(r'rel="canonical", href=" "', 'rel="canonical" href="https://ziontechgroup.com/blog/placeholder"', content)
        content = re.sub(r'rel="canonical", href=" "', 'rel="canonical" href="https://ziontechgroup.com/blog/placeholder"', content)
        
        # Fix malformed JSX attributes
        content = re.sub(r'<meta name="description" content="([^"]*)" /><link rel="canonical", href=" " />', r'<meta name="description" content="\1" />\n        <link rel="canonical" href="https://ziontechgroup.com/blog/placeholder" />', content)
        
        # Fix malformed JSX structure
        if '<Helmet>' in content and not content.strip().startswith('import'):
            # Add proper imports
            content = 'import React from "react";\nimport { Helmet } from "react-helmet-async";\n\n' + content
        
        # Fix malformed JSX elements
        content = re.sub(r'<div>\s*<Helmet>', '<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">\n      <Helmet>', content)
        
        # Fix malformed closing tags
        content = re.sub(r'  \);\s*\};\s*</div>\s*</li>', '  );\n}', content)
        content = re.sub(r'  \);\s*\};\s*</div>', '  );\n}', content)
        
        # Fix malformed JSX structure
        content = re.sub(r'<div>\s*<h1', '<div className="container mx-auto px-6 py-16">\n        <h1', content)
        
        # Fix malformed JSX attributes with colons
        content = re.sub(r'className="text-4xl md: text-5xl', 'className="text-4xl md:text-5xl', content)
        
        # Fix malformed JSX structure
        content = re.sub(r'<p className="text-zion-slate-light mb-8">([^<]+)</p>\s*<div>\s*<h1', r'<p className="text-zion-slate-light mb-8">\1</p>\n        \n        <div className="prose prose-invert max-w-3xl">\n          <p>\n            This is a placeholder for the blog post content.\n          </p>\n        </div>\n      </div>\n    </div>\n  );\n}', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed final JSX errors: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix final JSX errors"""
    # Find all blog TSX files
    blog_files = []
    
    # Search in both app/blog and src/pages/blog directories
    for pattern in ['/workspace/app/blog/**/*.tsx', '/workspace/src/pages/blog/**/*.tsx']:
        blog_files.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(blog_files)} blog files to check")
    
    fixed_count = 0
    for file_path in blog_files:
        if fix_final_jsx_errors(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files with final JSX errors")

if __name__ == "__main__":
    main()