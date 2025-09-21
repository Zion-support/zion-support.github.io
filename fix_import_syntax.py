#!/usr/bin/env python3
"""
Fix import and destructuring syntax errors
"""
import os
import re
import glob

def fix_import_syntax(file_path):
    """Fix import and destructuring syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix import syntax
        content = re.sub(r'import React \{ (\w+) \} from', r'import React, { \1 } from', content)
        content = re.sub(r'import \{ ([^}]+) \} from', lambda m: f'import {{ {m.group(1).replace(" ", ", ")} }} from', content)
        
        # Fix destructuring syntax
        content = re.sub(r'const \[(\w+) (\w+)\] =', r'const [\1, \2] =', content)
        content = re.sub(r'const \{ (\w+) \} =', r'const { \1 } =', content)
        
        # Fix function parameter syntax
        content = re.sub(r'\((\w+): (\w+) (\w+)\)', r'(\1: \2, \3)', content)
        
        # Fix interface property syntax
        content = re.sub(r'(\w+): (\w+),', r'\1: \2;', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Fixed import syntax in {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"❌ Error fixing {file_path}: {e}")
        return False

def main():
    """Main function"""
    print("🔧 Fixing import and destructuring syntax...")
    
    # Find all TypeScript and JavaScript files
    patterns = [
        'src/**/*.tsx',
        'src/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"📋 Found {len(files_to_fix)} TypeScript files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_import_syntax(file_path):
                fixed_count += 1
    
    print(f"✅ Fixed import syntax in {fixed_count} files")

if __name__ == "__main__":
    main()