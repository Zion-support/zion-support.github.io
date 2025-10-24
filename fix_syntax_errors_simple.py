#!/usr/bin/env python3
"""
Simple script to fix common syntax errors in TypeScript/JSX files
"""

import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Remove trailing comma after function declaration
        content = re.sub(r'const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,', 'const \\1: React.FC = () => {', content)
        
        # Fix 2: Fix malformed h1 tags - <h1Ai -> <h1>Ai
        content = re.sub(r'<h1([A-Z][a-zA-Z\s]*)', r'<h1>\1', content)
        
        # Fix 3: Fix missing closing tags in h1
        content = re.sub(r'<h1>([^<]+)\n\s*</h1>', r'<h1>\1</h1>', content)
        
        # Fix 4: Fix malformed JSX with comma issues
        content = re.sub(r'className="([^"]*)"\s*,', r'className="\1"', content)
        
        # Fix 5: Fix missing semicolons after const declarations
        content = re.sub(r'const\s+\w+\s*=\s*new\s+Date\(\)\.getFullYear\(\)\n', 'const \\1 = new Date().getFullYear();\n', content)
        
        # Fix 6: Fix malformed div structure
        content = re.sub(r'</div><div className="([^"]*)"\s*>,', r'</div><div className="\1">', content)
        
        # Fix 7: Fix malformed JSX structure with commas
        content = re.sub(r'<div className="min-h-screen[^"]*">\s*</div><div className="[^"]*">,', 
                        lambda m: m.group(0).replace(',', ''), content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix syntax errors in all files"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_syntax_errors(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed syntax errors in {files_fixed} files")

if __name__ == "__main__":
    main()