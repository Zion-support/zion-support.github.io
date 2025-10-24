#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in TypeScript/JavaScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common syntax issues
        # 1. Fix malformed JSX fragments
        content = re.sub(r'<>\s*<>\s*', '<>', content)
        content = re.sub(r'</>\s*</>\s*', '</>', content)
        
        # 2. Fix missing semicolons after variable declarations
        content = re.sub(r'(\w+)\s*=\s*([^;]+)\s*$', r'\1 = \2;', content, flags=re.MULTILINE)
        
        # 3. Fix malformed function parameters
        content = re.sub(r'(\w+):\s*(\w+)\s*=\s*([^,)]+)', r'\1: \2 = \3', content)
        
        # 4. Fix malformed JSX attributes
        content = re.sub(r'className=&quot;([^&]+)&quot;', r'className="\1"', content)
        content = re.sub(r'className=&quot;([^&]+)&quot;', r'className="\1"', content)
        
        # 5. Fix malformed arrow functions
        content = re.sub(r'(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{', r'\1: React.FC = () => {', content)
        
        # 6. Fix malformed destructuring
        content = re.sub(r'{\s*(\w+)\s*:\s*(\w+)\s*}\s*=\s*', r'{\1: \2} = ', content)
        
        # 7. Fix malformed imports
        content = re.sub(r'import\s+(\w+)\s+from\s+[\'"](\w+)[\'"]', r'import \1 from "\2"', content)
        
        # 8. Fix malformed JSX closing tags
        content = re.sub(r'</(\w+)>\s*</(\w+)>', r'</\1>', content)
        
        # 9. Fix malformed object properties
        content = re.sub(r'(\w+):\s*([^,}]+)\s*,', r'\1: \2,', content)
        
        # 10. Fix malformed array destructuring
        content = re.sub(r'\[\s*(\w+)\s*,\s*(\w+)\s*\]\s*=\s*', r'[\1, \2] = ', content)
        
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
        'app/**/*.jsx',
        'src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.js',
        'src/**/*.jsx',
        'components/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.js',
        'components/**/*.jsx'
    ]
    
    files_fixed = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_syntax_errors(file_path):
                files_fixed += 1
                print(f"Fixed syntax errors in: {file_path}")
    
    print(f"Fixed syntax errors in {files_fixed} files")

if __name__ == "__main__":
    main()
