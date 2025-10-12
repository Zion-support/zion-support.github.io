#!/usr/bin/env python3
import os
import re
import glob

def fix_duplicate_exports(file_path):
    """Fix duplicate export default statements"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has duplicate exports
        export_count = content.count('export default')
        if export_count <= 1:
            return False
        
        # Remove duplicate export statements, keeping only the first one
        lines = content.split('\n')
        export_found = False
        fixed_lines = []
        
        for line in lines:
            if 'export default' in line:
                if not export_found:
                    fixed_lines.append(line)
                    export_found = True
                # Skip duplicate exports
            else:
                fixed_lines.append(line)
        
        fixed_content = '\n'.join(fixed_lines)
        
        # Write fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed duplicate exports in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all files with potential duplicate exports
    file_patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    fixed_count = 0
    
    for pattern in file_patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_duplicate_exports(file_path):
                fixed_count += 1
    
    print(f"\nFixed duplicate exports in {fixed_count} files")

if __name__ == "__main__":
    main()