#!/usr/bin/env python3
import os
import re
import glob

def fix_final_issues(file_path):
    """Fix final remaining issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Remove duplicate variable declarations
        lines = content.split('\n')
        new_lines = []
        seen_vars = set()
        
        for line in lines:
            # Check if this is a variable declaration
            if line.strip().startswith('const ') and '=' in line:
                var_name = line.strip().split('=')[0].split()[-1]
                if var_name in seen_vars:
                    # Skip duplicate declarations
                    continue
                seen_vars.add(var_name)
            
            new_lines.append(line)
        
        content = '\n'.join(new_lines)
        
        # Fix 2: Ensure proper return statement structure
        if 'return (' in content and 'const ' in content:
            # Find the last const declaration and ensure return comes after
            lines = content.split('\n')
            new_lines = []
            in_function = False
            last_const_line = -1
            
            for i, line in enumerate(lines):
                if 'export default function' in line:
                    in_function = True
                elif in_function and line.strip().startswith('const '):
                    last_const_line = i
                elif in_function and 'return (' in line and last_const_line >= 0:
                    # Make sure there's proper spacing
                    if i > last_const_line + 1:
                        new_lines.append('')
                new_lines.append(line)
            
            content = '\n'.join(new_lines)
        
        # Fix 3: Clean up any remaining syntax issues
        content = re.sub(r';\s*;', ';', content)  # Remove double semicolons
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)  # Clean up multiple newlines
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TSX files
    patterns = [
        'app/**/*.tsx'
    ]
    
    files_fixed = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_final_issues(file_path):
                files_fixed += 1
    
    print(f"\nFixed {files_fixed} files")

if __name__ == "__main__":
    main()