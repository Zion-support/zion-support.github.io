#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_syntax_errors(file_path):
    """Fix common JSX syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing closing tags for sections
        content = re.sub(r'(\s+)</div>\s*</section>', r'\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix missing closing divs before section ends
        content = re.sub(r'(\s+)</div>\s*</section>', r'\1</div>\n\1</div>\n\1</section>', content)
        
        # Fix common className spacing issues
        content = re.sub(r'className="([^"]*?)([a-z])([A-Z])', r'className="\1\2 \3', content)
        content = re.sub(r'className="([^"]*?)([a-z])([0-9])', r'className="\1\2 \3', content)
        content = re.sub(r'className="([^"]*?)([0-9])([a-zA-Z])', r'className="\1\2 \3', content)
        
        # Fix specific patterns
        content = re.sub(r'bg-gradient-to-brfrom-', 'bg-gradient-to-br from-', content)
        content = re.sub(r'mx-autopx-', 'mx-auto px-', content)
        content = re.sub(r'font-boldtext-', 'font-bold text-', content)
        content = re.sub(r'text-lgtext-', 'text-lg text-', content)
        content = re.sub(r'mb-8max-w-', 'mb-8 max-w-', content)
        content = re.sub(r'from-cyan-500to-', 'from-cyan-500 to-', content)
        content = re.sub(r'hover:from-cyan-600hover:to-', 'hover:from-cyan-600 hover:to-', content)
        content = re.sub(r'w-5 h-5ml-', 'w-5 h-5 ml-', content)
        content = re.sub(r'text-4xlmd:text-6xlfont-bold', 'text-4xl md:text-6xl font-bold', content)
        content = re.sub(r'text-xl text-gray-300mb-8', 'text-xl text-gray-300 mb-8', content)
        
        # Fix missing spaces in other common patterns
        content = re.sub(r'([a-z])([A-Z])', r'\1 \2', content)
        content = re.sub(r'([a-z])([0-9])', r'\1 \2', content)
        content = re.sub(r'([0-9])([a-zA-Z])', r'\1 \2', content)
        
        # Fix JSX fragment issues
        content = re.sub(r'<>\s*<div', '<div', content)
        content = re.sub(r'</div>\s*</>', '</div>', content)
        
        # Fix missing closing tags
        content = re.sub(r'<section[^>]*>\s*<div[^>]*>\s*<div[^>]*>', r'<section>\n          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n            <div className="text-center mb-16">', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX syntax in {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing JSX syntax in {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                if fix_jsx_syntax_errors(file_path):
                    files_fixed += 1
    
    print(f"Fixed {files_fixed} files with JSX syntax errors")

if __name__ == "__main__":
    main()
