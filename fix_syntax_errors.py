#!/usr/bin/env python3
"""
Script to fix common syntax errors after merge conflict resolution.
"""

import os
import re
import glob
from pathlib import Path

def fix_jsx_parent_element(content):
    """Fix JSX expressions that need one parent element."""
    # Find patterns where multiple JSX elements are at the same level
    # and wrap them in a fragment or div
    
    # Look for patterns like:
    # <Component1 />
    # <Component2 />
    # at the same indentation level
    
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this line starts a JSX element
        if re.match(r'^\s*<[A-Z]', line) and not re.match(r'^\s*</', line):
            # Look ahead to see if there are multiple JSX elements at the same level
            jsx_elements = []
            current_indent = len(line) - len(line.lstrip())
            j = i
            
            while j < len(lines):
                current_line = lines[j]
                if not current_line.strip():
                    j += 1
                    continue
                    
                line_indent = len(current_line) - len(current_line.lstrip())
                
                # If we hit a line with less indentation, we're done
                if line_indent < current_indent:
                    break
                    
                # If this is a JSX element at the same level
                if (line_indent == current_indent and 
                    re.match(r'^\s*<[A-Z]', current_line) and 
                    not re.match(r'^\s*</', current_line)):
                    jsx_elements.append((j, current_line))
                
                j += 1
            
            # If we found multiple JSX elements at the same level, wrap them
            if len(jsx_elements) > 1:
                # Add opening fragment
                indent = ' ' * current_indent
                fixed_lines.append(f"{indent}<>")
                
                # Add all JSX elements with proper indentation
                for _, element_line in jsx_elements:
                    fixed_lines.append(f"{indent}  {element_line.strip()}")
                
                # Add closing fragment
                fixed_lines.append(f"{indent}</>")
                
                # Skip the original lines
                i = jsx_elements[-1][0] + 1
                continue
        
        fixed_lines.append(line)
        i += 1
    
    return '\n'.join(fixed_lines)

def fix_missing_commas(content):
    """Fix missing commas in JSX props."""
    # Fix patterns like: prop1="value" prop2="value"
    # Should be: prop1="value", prop2="value"
    
    # Look for JSX props that are missing commas
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Fix missing commas in JSX props
        # Pattern: prop="value" prop2="value"
        if re.search(r'"[^"]*"\s+[a-zA-Z][a-zA-Z0-9]*=', line):
            # Add comma before the second prop
            line = re.sub(r'("[^"]*")\s+([a-zA-Z][a-zA-Z0-9]*=)', r'\1, \2', line)
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_jsx_closing_tags(content):
    """Fix JSX closing tag issues."""
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Fix unclosed tags
        if re.search(r'<[^>]*[^/]>[^<]*$', line) and not re.search(r'</[^>]*>', line):
            # This might be an unclosed tag, but we need more context
            pass
        
        # Fix malformed closing tags
        if re.search(r'</[^>]*[^>]$', line):
            line = re.sub(r'</([^>]*)[^>]$', r'</\1>', line)
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_declaration_errors(content):
    """Fix declaration and statement errors."""
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Fix missing semicolons
        if (re.match(r'^\s*(const|let|var|function)', line) and 
            not line.strip().endswith(';') and 
            not line.strip().endswith('{') and
            not line.strip().endswith('(')):
            line = line.rstrip() + ';'
        
        # Fix missing commas in object literals
        if re.search(r'}\s*$', line) and not re.search(r'[;,]\s*$', line):
            # Check if next line starts with a property
            pass
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_file(file_path):
    """Fix syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_jsx_parent_element(content)
        content = fix_missing_commas(content)
        content = fix_jsx_closing_tags(content)
        content = fix_declaration_errors(content)
        
        # Additional specific fixes
        # Fix common patterns that cause parsing errors
        
        # Fix malformed JSX expressions
        content = re.sub(r'<([^>]*)\s*>\s*<([^>]*)\s*>', r'<>\n    <\1>\n    <\2>\n</>', content)
        
        # Fix missing closing parentheses
        content = re.sub(r'\([^)]*$', lambda m: m.group(0) + ')', content, flags=re.MULTILINE)
        
        # Fix malformed function calls
        content = re.sub(r'(\w+)\s*\(\s*$', r'\1()', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix syntax errors in all files."""
    print("Fixing syntax errors...")
    
    # Get all TypeScript and JavaScript files
    patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    files_to_fix = []
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if 'node_modules' not in file_path:
                files_to_fix.append(file_path)
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()