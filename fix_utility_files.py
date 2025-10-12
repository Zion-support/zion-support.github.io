#!/usr/bin/env python3
"""
Fix utility files and hooks
"""

import os
import glob

def fix_utility_file(file_path):
    """Fix a utility file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix common issues
        content = content.replace(';\n;', ';\n')
        content = content.replace(';\n\n;', ';\n')
        content = content.replace(';\n  ', ';\n  ')
        
        # Fix missing interface declarations
        if 'passed: boolean;' in content and 'interface' not in content:
            content = content.replace('  passed: boolean;', 'interface CheckResult {\n  passed: boolean;')
            content = content.replace('  element?: HTMLElement;\n}', '  element?: HTMLElement;\n}\n')
        
        # Fix missing export statements
        if 'export' not in content and 'function' in content:
            content += '\n\nexport {};'
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function"""
    # Get all utility files and hooks
    patterns = [
        '/workspace/app/utils/**/*.ts',
        '/workspace/app/hooks/**/*.ts',
        '/workspace/app/config/**/*.ts'
    ]
    
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                if fix_utility_file(file_path):
                    files_fixed += 1
    
    print(f"\nFixed {files_fixed} utility files")

if __name__ == "__main__":
    main()