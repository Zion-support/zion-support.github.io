#!/usr/bin/env python3
"""
Script to fix malformed files with duplicate function declarations and misplaced return statements.
"""

import os
import re
import glob
from pathlib import Path

def fix_malformed_structure(content):
    """Fix malformed file structure."""
    lines = content.split('\n')
    fixed_lines = []
    in_function = False
    function_started = False
    return_found = False
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        
        # Skip empty lines at the beginning
        if not stripped and not in_function:
            continue
            
        # Check for function declaration
        if 'export default function' in stripped or 'const' in stripped and '= () =>' in stripped:
            if in_function and not return_found:
                # Previous function was incomplete, close it
                fixed_lines.append('  return null;')
                fixed_lines.append('};')
                fixed_lines.append('')
            
            in_function = True
            function_started = True
            return_found = False
            fixed_lines.append(line)
            continue
        
        # Check for return statement
        if stripped.startswith('return (') and in_function:
            return_found = True
            fixed_lines.append(line)
            continue
            
        # Check for closing brace
        if stripped == '}' and in_function:
            if return_found:
                fixed_lines.append(line)
                in_function = False
                function_started = False
                return_found = False
            else:
                # This is a premature closing brace, skip it
                continue
        
        # If we're in a function and haven't found return yet, skip non-return lines
        if in_function and not return_found and not stripped.startswith('return'):
            continue
            
        # Add the line
        fixed_lines.append(line)
    
    # If we ended in a function without proper closing
    if in_function and not return_found:
        fixed_lines.append('  return null;')
        fixed_lines.append('};')
    
    return '\n'.join(fixed_lines)

def fix_duplicate_imports(content):
    """Remove duplicate imports."""
    lines = content.split('\n')
    seen_imports = set()
    cleaned_lines = []
    
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('import '):
            if stripped not in seen_imports:
                cleaned_lines.append(line)
                seen_imports.add(stripped)
        else:
            cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)

def process_file(file_path):
    """Process a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed structure
        content = fix_malformed_structure(content)
        
        # Fix duplicate imports
        content = fix_duplicate_imports(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Fixed: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"✗ Error processing {file_path}: {e}")
        return False

def main():
    """Main function."""
    # Focus on files that are likely to have issues
    patterns = [
        'app/404/page.tsx',
        'app/5g-*/page.tsx',
        'app/ai-*/page.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            files_processed += 1
            if process_file(file_path):
                files_fixed += 1
    
    print(f"\nSummary:")
    print(f"Files processed: {files_processed}")
    print(f"Files fixed: {files_fixed}")

if __name__ == "__main__":
    main()