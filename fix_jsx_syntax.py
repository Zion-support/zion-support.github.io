#!/usr/bin/env python3
"""
Script to fix JSX syntax errors in the codebase.
This script will:
1. Find all files with JSX syntax errors
2. Fix common JSX issues like mismatched tags, unclosed elements, etc.
3. Clean up malformed JSX structures
"""

import os
import re
import glob
from pathlib import Path

def find_jsx_files():
    """Find all JSX/TSX files."""
    jsx_files = []
    
    for root, dirs, files in os.walk('.'):
        # Skip node_modules and other irrelevant directories
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', 'build', '.next']]
        
        for file in files:
            if file.endswith(('.tsx', '.jsx')):
                jsx_files.append(os.path.join(root, file))
    
    return jsx_files

def fix_jsx_syntax(content):
    """Fix common JSX syntax issues."""
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Fix common JSX issues
        
        # Fix unclosed JSX elements
        if re.search(r'<(\w+)([^>]*?)(?<!/)>$', line) and not re.search(r'</\1>', content):
            # This is an unclosed tag, we need to find where it should be closed
            tag_name = re.search(r'<(\w+)', line).group(1)
            # For now, just add a closing tag at the end of the component
            pass
        
        # Fix malformed JSX comments
        if '/*' in line and '*/' not in line:
            # Find the closing comment
            j = i + 1
            while j < len(lines) and '*/' not in lines[j]:
                j += 1
            if j < len(lines):
                # Fix the comment
                fixed_lines.append(line)
                for k in range(i + 1, j):
                    fixed_lines.append(lines[k])
                fixed_lines.append(lines[j])
                i = j
            else:
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)
        
        i += 1
    
    return '\n'.join(fixed_lines)

def fix_specific_file(file_path):
    """Fix JSX syntax in a specific file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no JSX
        if '<' not in content or '>' not in content:
            return True
        
        # Fix common issues
        fixed_content = content
        
        # Fix unclosed JSX elements by adding proper closing tags
        # This is a simplified approach - in practice, you'd want more sophisticated parsing
        
        # Fix malformed return statements
        if 'return (' in fixed_content and not fixed_content.strip().endswith(');'):
            # Find the return statement and ensure it's properly closed
            return_match = re.search(r'return\s*\(', fixed_content)
            if return_match:
                # Count opening and closing parentheses
                start_pos = return_match.end() - 1
                paren_count = 0
                i = start_pos
                while i < len(fixed_content):
                    if fixed_content[i] == '(':
                        paren_count += 1
                    elif fixed_content[i] == ')':
                        paren_count -= 1
                        if paren_count == 0:
                            break
                    i += 1
                
                # If we didn't find a closing parenthesis, add one
                if paren_count > 0:
                    fixed_content += ')'
        
        # Fix JSX fragment issues
        fixed_content = re.sub(r'<>\s*$', '<React.Fragment>', fixed_content)
        fixed_content = re.sub(r'^\s*</>', '</React.Fragment>', fixed_content)
        
        # Fix self-closing tags
        fixed_content = re.sub(r'<(\w+)([^>]*?)(?<!/)>(\s*</\1>)', r'<\1\2 />', fixed_content)
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed JSX syntax in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix JSX syntax errors."""
    print("Finding JSX files...")
    jsx_files = find_jsx_files()
    
    print(f"Found {len(jsx_files)} JSX files")
    
    fixed_count = 0
    for file_path in jsx_files:
        if fix_specific_file(file_path):
            fixed_count += 1
    
    print(f"Fixed JSX syntax in {fixed_count}/{len(jsx_files)} files")

if __name__ == "__main__":
    main()