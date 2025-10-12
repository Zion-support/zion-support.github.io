#!/usr/bin/env python3
"""
Script to fix function names that start with numbers
"""
import os
import glob
import re

def fix_function_names_in_file(file_path):
    """Fix function names in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix function names that start with numbers
        # Pattern: export default function 5G...() -> export default function FiveG...()
        content = re.sub(r'export default function 5G(\w+)\(', r'export default function FiveG\1(', content)
        
        # Pattern: function 5G...() -> function FiveG...()
        content = re.sub(r'function 5G(\w+)\(', r'function FiveG\1(', content)
        
        # Pattern: const 5G... = -> const FiveG... =
        content = re.sub(r'const 5G(\w+) =', r'const FiveG\1 =', content)
        
        # Pattern: let 5G... = -> let FiveG... =
        content = re.sub(r'let 5G(\w+) =', r'let FiveG\1 =', content)
        
        # Pattern: var 5G... = -> var FiveG... =
        content = re.sub(r'var 5G(\w+) =', r'var FiveG\1 =', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed function names in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function"""
    # Get all TSX files
    tsx_files = glob.glob('app/**/*.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in tsx_files:
        if fix_function_names_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed function names in {fixed_count} files")

if __name__ == "__main__":
    main()