#!/usr/bin/env python3
"""
Script to fix common TypeScript syntax errors
"""
import os
import re

def fix_file(file_path):
    """Fix common syntax errors in a TypeScript file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix comma to semicolon in import statements
        content = re.sub(r"import\s+.*?from\s+['\"][^'\"]+['\"]\s*,", 
                        lambda m: m.group(0).rstrip(',') + ';', content)
        
        # Fix comma to semicolon in variable declarations
        content = re.sub(r"(\w+:\s*[^,]+),\s*$", r"\1;", content, flags=re.MULTILINE)
        
        # Fix comma to semicolon in interface properties
        content = re.sub(r"(\w+:\s*[^,]+),\s*\n", r"\1;\n", content)
        
        # Fix comma to semicolon in function calls
        content = re.sub(r"(\w+\([^)]+\)),\s*$", r"\1;", content, flags=re.MULTILINE)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Find and fix all TypeScript files"""
    fixed_count = 0
    
    for root, dirs, files in os.walk('.'):
        # Skip node_modules and other directories
        if 'node_modules' in root or '.next' in root:
            continue
            
        for file in files:
            if file.endswith('.ts') or file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                if fix_file(file_path):
                    fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()