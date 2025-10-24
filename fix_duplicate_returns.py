#!/usr/bin/env python3
import os
import re
import glob

def fix_duplicate_returns(file_path):
    """Fix duplicate return statements and other syntax issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix duplicate return statements
        content = re.sub(r'return\s*\(\s*return\s*\(', 'return (', content)
        
        # Fix malformed title tags
        content = re.sub(r'<title>\u0001</title>', '<title>About - Zion Tech Group</title>', content)
        content = re.sub(r'<title>\u0001</title>', '<title>Accessibility Page - Zion Tech Group</title>', content)
        content = re.sub(r'<title>\u0001</title>', '<title>Accessibility - Zion Tech Group</title>', content)
        content = re.sub(r'<title>\u0001</title>', '<title>Ad Management - Zion Tech Group</title>', content)
        content = re.sub(r'<title>\u0001</title>', '<title>Advanced Security Suite - Zion Tech Group</title>', content)
        
        # Fix malformed JSX closing
        content = re.sub(r'</>;\s*\);\s*}\s*\);\s*}', '  );\n}', content)
        
        # Fix missing closing div
        content = re.sub(r'</Link>\s*</div>\s*</>', '</Link>\n        </div>\n      </div>\n    </>', content)
        
        # Fix malformed function endings
        content = re.sub(r'\);\s*}\s*\);\s*}\s*$', '  );\n}', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_fixed = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_duplicate_returns(file_path):
                files_fixed += 1
                print(f"Fixed duplicate returns in: {file_path}")
    
    print(f"Fixed duplicate returns in {files_fixed} files")

if __name__ == "__main__":
    main()
