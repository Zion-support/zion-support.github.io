#!/usr/bin/env python3
"""
Fix missing commas in object literals and arrays
"""

import os
import re
import glob

def fix_missing_commas(content):
    """Fix missing commas in object literals and arrays"""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Check if this line ends an object property or array element
        if re.match(r'^\s*[a-zA-Z_][a-zA-Z0-9_]*\s*:', line) or re.match(r'^\s*"[^"]*"\s*$', line) or re.match(r'^\s*[0-9]+\s*$', line):
            # Check if next line starts a new property/element
            if i + 1 < len(lines):
                next_line = lines[i + 1]
                if (re.match(r'^\s*[a-zA-Z_][a-zA-Z0-9_]*\s*:', next_line) or 
                    re.match(r'^\s*"[^"]*"\s*$', next_line) or 
                    re.match(r'^\s*[0-9]+\s*$', next_line) or
                    re.match(r'^\s*}\s*$', next_line) or
                    re.match(r'^\s*]\s*$', next_line)):
                    # Add comma if missing
                    if not line.rstrip().endswith(',') and not line.rstrip().endswith('{') and not line.rstrip().endswith('['):
                        line = line.rstrip() + ','
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_missing_commas(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    files_to_fix = [
        'app/page.tsx',
        'app/team/page.tsx',
        'app/layout.tsx'
    ]
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file(file_path):
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files_to_fix)} checked")

if __name__ == "__main__":
    main()