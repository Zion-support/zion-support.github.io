#!/usr/bin/env python3
"""
Script to fix all JSX structure errors in React components
"""

import os
import re
import glob

def fix_jsx_file(file_path):
    """Fix JSX structure errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has JSX
        if '.tsx' not in file_path and '.jsx' not in file_path:
            return False
        
        print(f"Fixing JSX structure in: {file_path}")
        
        # Fix common JSX issues
        original_content = content
        
        # Fix missing closing tags in map functions
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix mismatched opening/closing tags
        content = re.sub(r'<div className="min-h-screen[^"]*">\s*<Helmet>', r'<>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <Helmet>', content)
        
        # Fix missing closing tags for cards
        content = re.sub(r'(\s+</div>\s*)\n\s*</div>\s*</section>', r'\1\n                </div>\n              ))}\n            </div>\n          </div>\n        </section>', content)
        
        # Fix fragment closing issues
        content = re.sub(r'</div>\s*</>\s*\);', r'</div>\n      </>\n    );', content)
        
        # Fix missing closing tags in map functions
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for statistics
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for consultation types
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for pricing cards
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for FAQ items
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for testimonials
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for contact form
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for footer
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for main content
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for hero section
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for services section
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for about section
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for team section
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for contact section
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for footer section
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for main wrapper
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing tags for fragment
        content = re.sub(r'(\s+)(\}))\s*</div>\s*</div>\s*</section>', r'\1\2\n\1</div>\n\1</div>\n\1</section>', content)
        
        # Write the fixed content back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX structure in: {file_path}")
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all JSX errors"""
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_jsx_file(file_path):
                files_fixed += 1
    
    print(f"\nFixed JSX structure in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()