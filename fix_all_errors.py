#!/usr/bin/env python3
"""
Comprehensive script to fix all merge conflicts and syntax errors
"""

import os
import re
import glob
import json

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by keeping the latest version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content into lines
        lines = content.split('\n')
        new_lines = []
        skip_until_end = False
        in_conflict = False
        
        for line in lines:
            if line.strip().startswith('<<<<<<< HEAD'):
                in_conflict = True
                skip_until_end = False
                continue
            elif line.strip().startswith('======='):
                skip_until_end = True
                continue
            elif line.strip().startswith('>>>>>>> '):
                in_conflict = False
                skip_until_end = False
                continue
            elif in_conflict and skip_until_end:
                # Skip lines between ======= and >>>>>>> (older version)
                continue
            elif in_conflict and not skip_until_end:
                # Keep lines between <<<<<<< and ======= (newer version)
                new_lines.append(line)
            else:
                # Keep all other lines
                new_lines.append(line)
        
        # Write the cleaned content back
        cleaned_content = '\n'.join(new_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_syntax_errors(file_path):
    """Fix common syntax errors in TypeScript/JavaScript files."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common syntax issues
        fixes = [
            # Fix missing semicolons after object properties
            (r'(\w+):\s*([^,}\n]+)\n\s*(\w+):', r'\1: \2,\n    \3:'),
            # Fix missing commas in object literals
            (r'(\w+):\s*([^,}\n]+)\n\s*(\w+):', r'\1: \2,\n    \3:'),
            # Fix malformed object properties
            (r'(\w+):\s*([^,}\n]+)\n\s*(\w+):', r'\1: \2,\n    \3:'),
            # Remove duplicate imports
            (r'import\s+.*?;\s*\n\s*import\s+.*?;\s*\n', r'import { } from \'module\';\n'),
            # Fix JSX syntax issues
            (r'<(\w+)\s*>\s*</\1>', r'<\1></\1>'),
            # Fix missing closing tags
            (r'<(\w+)([^>]*)>\s*([^<]+)\s*$', r'<\1\2>\3</\1>'),
        ]
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
        
        # Fix specific syntax issues
        lines = content.split('\n')
        new_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            # Fix missing semicolons
            if (line.strip().endswith(')') or line.strip().endswith(']') or line.strip().endswith('}')) and not line.strip().endswith(';') and not line.strip().endswith(',') and not line.strip().endswith('{') and not line.strip().endswith('[') and not line.strip().endswith('('):
                if i + 1 < len(lines) and lines[i + 1].strip() and not lines[i + 1].strip().startswith('//'):
                    line += ';'
            
            # Fix object property syntax
            if ':' in line and not line.strip().startswith('//') and not line.strip().startswith('*'):
                # Check if this looks like an object property
                if re.match(r'^\s*\w+\s*:', line) and not line.strip().endswith(',') and not line.strip().endswith(';'):
                    if i + 1 < len(lines) and lines[i + 1].strip() and not lines[i + 1].strip().startswith('//'):
                        line += ','
            
            new_lines.append(line)
            i += 1
        
        content = '\n'.join(new_lines)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing syntax in {file_path}: {e}")
        return False

def clean_duplicate_imports(file_path):
    """Remove duplicate imports from a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        import_lines = []
        other_lines = []
        seen_imports = set()
        
        for line in lines:
            if line.strip().startswith('import '):
                if line.strip() not in seen_imports:
                    import_lines.append(line)
                    seen_imports.add(line.strip())
            else:
                other_lines.append(line)
        
        # Combine imports and other lines
        cleaned_content = '\n'.join(import_lines + other_lines)
        
        if cleaned_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error cleaning imports in {file_path}: {e}")
        return False

def main():
    """Main function to process all files."""
    # Get all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '.next', 'backup', 'corrupted', 'broken']):
                continue
                
            files_processed += 1
            fixed = False
            
            # Fix merge conflicts
            if fix_merge_conflicts(file_path):
                fixed = True
                print(f"Fixed merge conflicts: {file_path}")
            
            # Clean duplicate imports
            if clean_duplicate_imports(file_path):
                fixed = True
                print(f"Cleaned imports: {file_path}")
            
            # Fix syntax errors
            if fix_syntax_errors(file_path):
                fixed = True
                print(f"Fixed syntax: {file_path}")
            
            if fixed:
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()