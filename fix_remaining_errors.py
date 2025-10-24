#!/usr/bin/env python3
"""
Script to fix remaining syntax errors in TSX files.
"""

import os
import re
import glob

def fix_remaining_errors():
    """Fix remaining syntax errors in TSX files"""
    
    # Find all TSX files
    tsx_files = []
    for root, dirs, files in os.walk('/workspace/app'):
        for file in files:
            if file.endswith('.tsx'):
                tsx_files.append(os.path.join(root, file))
    
    print(f"Found {len(tsx_files)} TSX files to check")
    
    fixed_count = 0
    
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix 1: Fix malformed JSX with missing opening tags and commas
            # Pattern: <footer className="..."> </footer><div className="...">,
            content = re.sub(
                r'<footer className="([^"]*?)">\s*</footer><div className="([^"]*?)">,',
                r'<footer className="\1">\n      <div className="\2">',
                content
            )
            
            # Fix 2: Fix malformed div elements with commas
            content = re.sub(
                r'<div className="([^"]*?)">\s*</div><div className="([^"]*?)">,',
                r'<div className="\1">\n        <div className="\2">',
                content
            )
            
            # Fix 3: Fix missing opening tags for h1 and p elements
            content = re.sub(
                r'<h1([^>]*?)([A-Za-z\s]+)\s*</h1>',
                r'<h1\1>\2</h1>',
                content
            )
            
            content = re.sub(
                r'<p([^>]*?)([A-Za-z\s]+)\s*</p>',
                r'<p\1>\2</p>',
                content
            )
            
            # Fix 4: Fix duplicate default exports
            # Remove duplicate export default statements
            lines = content.split('\n')
            new_lines = []
            seen_export_default = False
            
            for line in lines:
                if 'export default' in line:
                    if not seen_export_default:
                        new_lines.append(line)
                        seen_export_default = True
                    # Skip duplicate export default lines
                else:
                    new_lines.append(line)
            
            content = '\n'.join(new_lines)
            
            # Fix 5: Fix malformed function declarations
            content = re.sub(
                r'export default function\s+(\w+)\(\)\s*{\s*,\s*',
                r'export default function \1() {\n  ',
                content
            )
            
            # Fix 6: Fix missing semicolons after variable declarations
            content = re.sub(
                r'const\s+(\w+)\s*=\s*([^;]+)\n',
                r'const \1 = \2;\n',
                content
            )
            
            # Fix 7: Fix malformed JSX attributes
            content = re.sub(
                r'className="([^"]*?)\s*,\s*',
                r'className="\1" ',
                content
            )
            
            # Fix 8: Clean up extra whitespace and newlines
            content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
            content = re.sub(r'\s+$', '', content, flags=re.MULTILINE)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                fixed_count += 1
                print(f"Fixed remaining errors in: {file_path}")
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Successfully fixed remaining errors in {fixed_count} files")

if __name__ == "__main__":
    fix_remaining_errors()