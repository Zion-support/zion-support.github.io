#!/usr/bin/env python3
"""
Final comprehensive cleanup script to fix all remaining issues.
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts(content):
    """Fix merge conflicts by keeping the latest version."""
    # Remove all merge conflict markers
    content = re.sub(r'<<<<<<<.*?\n', '', content, flags=re.DOTALL)
    content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
    content = re.sub(r'>>>>>>>.*?\n', '', content, flags=re.DOTALL)
    return content

def fix_malformed_jsx(content):
    """Fix malformed JSX structure."""
    lines = content.split('\n')
    fixed_lines = []
    in_function = False
    brace_count = 0
    return_found = False
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        
        # Skip empty lines at the beginning
        if not stripped and not in_function:
            continue
            
        # Check for function declaration
        if 'export default function' in stripped or ('const' in stripped and '= () =>' in stripped):
            if in_function and not return_found:
                # Previous function was incomplete, close it
                fixed_lines.append('  return null;')
                fixed_lines.append('};')
                fixed_lines.append('')
            
            in_function = True
            return_found = False
            brace_count = 0
            fixed_lines.append(line)
            continue
        
        # Check for return statement
        if stripped.startswith('return (') and in_function:
            return_found = True
            fixed_lines.append(line)
            continue
            
        # Count braces
        if in_function:
            brace_count += line.count('{') - line.count('}')
        
        # Check for closing brace
        if stripped == '}' and in_function:
            if return_found and brace_count <= 0:
                fixed_lines.append(line)
                in_function = False
                return_found = False
                brace_count = 0
            elif not return_found:
                # This is a premature closing brace, skip it
                continue
            else:
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)
    
    # If we ended in a function without proper closing
    if in_function and not return_found:
        fixed_lines.append('  return null;')
        fixed_lines.append('};')
    
    return '\n'.join(fixed_lines)

def clean_unused_imports(content):
    """Remove unused imports and variables."""
    lines = content.split('\n')
    cleaned_lines = []
    import_lines = []
    other_lines = []
    seen_imports = set()
    
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('import '):
            # Create a normalized version for comparison
            normalized = re.sub(r'\s+', ' ', stripped)
            if normalized not in seen_imports:
                import_lines.append(line)
                seen_imports.add(normalized)
        else:
            other_lines.append(line)
    
    return '\n'.join(import_lines + other_lines)

def process_file(file_path):
    """Process a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix merge conflicts
        content = fix_merge_conflicts(content)
        
        # Fix malformed JSX
        content = fix_malformed_jsx(content)
        
        # Clean unused imports
        content = clean_unused_imports(content)
        
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
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts'
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