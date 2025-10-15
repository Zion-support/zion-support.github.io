#!/usr/bin/env python3
"""
Script to automatically fix merge conflicts in TypeScript/TSX files
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep the main branch content
        # Pattern 1: Remove everything from <<<<<<< HEAD to =======
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n', '', content, flags=re.DOTALL)
        
        # Pattern 2: Remove everything from ======= to >>>>>>> main
        content = re.sub(r'=======\n.*?\n>>>>>>> main\n?', '', content, flags=re.DOTALL)
        
        # Pattern 3: Remove any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> main.*?\n?', '', content, flags=re.DOTALL)
        
        # Fix common syntax errors
        # Fix double semicolons
        content = re.sub(r';;+', ';', content)
        
        # Fix malformed JSX attributes
        content = re.sub(r'className\s*=\s*"([^"]*)"\s*;', r'className="\1"', content)
        content = re.sub(r'title\s*=\s*"([^"]*)"\s*;', r'title="\1"', content)
        content = re.sub(r'description\s*=\s*"([^"]*)"\s*;', r'description="\1"', content)
        
        # Fix malformed function declarations
        content = re.sub(r'const:\s*', 'const ', content)
        content = re.sub(r'const\s+(\w+):\s*=', r'const \1 =', content)
        
        # Fix malformed JSX
        content = re.sub(r'<(\w+):\s*', r'<\1 ', content)
        content = re.sub(r'className\s*=\s*"([^"]*)"\s*;', r'className="\1"', content)
        
        # Fix malformed object properties
        content = re.sub(r'(\w+):\s*"([^"]*)"\s*;', r'\1: "\2"', content)
        content = re.sub(r'(\w+):\s*([^,}]+)\s*;', r'\1: \2', content)
        
        # Fix malformed array elements
        content = re.sub(r'(\w+)\s*;\s*;', r'\1,', content)
        
        # Fix malformed JSX closing tags
        content = re.sub(r'</(\w+):\s*>', r'</\1>', content)
        
        # Fix malformed function calls
        content = re.sub(r'(\w+)\s*:\s*\(', r'\1(', content)
        
        # Fix malformed return statements
        content = re.sub(r'return\s*\(\s*<>\s*\{\}\s*<>', r'return (\n    <>', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'pages/**/*.tsx',
        'pages/**/*.ts',
        'hooks/**/*.ts',
        'hooks/**/*.tsx',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()