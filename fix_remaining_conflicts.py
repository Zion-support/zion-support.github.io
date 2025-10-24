#!/usr/bin/env python3
"""
Script to fix remaining merge conflicts and clean up files.
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts(content):
    """Fix merge conflicts by keeping the latest version."""
    # Remove all merge conflict markers and keep the content after the last =======
    lines = content.split('\n')
    cleaned_lines = []
    in_conflict = False
    conflict_sections = []
    current_section = []
    
    for line in lines:
        if line.startswith('<<<<<<<'):
            in_conflict = True
            current_section = []
        elif line.startswith('======='):
            if in_conflict:
                conflict_sections.append(current_section)
                current_section = []
        elif line.startswith('>>>>>>>'):
            if in_conflict:
                conflict_sections.append(current_section)
                # Keep the last section (after the last =======)
                if conflict_sections:
                    cleaned_lines.extend(conflict_sections[-1])
                conflict_sections = []
                current_section = []
                in_conflict = False
        elif in_conflict:
            current_section.append(line)
        else:
            cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)

def clean_duplicate_imports(content):
    """Clean up duplicate imports and unused imports."""
    lines = content.split('\n')
    import_lines = []
    other_lines = []
    seen_imports = set()
    
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('import ') or stripped.startswith('const ') and '= require(' in stripped:
            # Create a normalized version for comparison
            normalized = re.sub(r'\s+', ' ', stripped)
            if normalized not in seen_imports:
                import_lines.append(line)
                seen_imports.add(normalized)
        else:
            other_lines.append(line)
    
    return '\n'.join(import_lines + other_lines)

def fix_syntax_errors(content):
    """Fix common syntax errors."""
    # Fix missing closing braces
    content = re.sub(r'(\s+)(\w+)\s*\(\s*\)\s*{([^}]*)$', r'\1\2() {\n\3\n}', content, flags=re.MULTILINE)
    
    # Fix duplicate function declarations
    content = re.sub(r'(\w+)\s*\(\s*\)\s*{\s*\n\s*import\s+', r'import ', content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix merge conflicts
        content = fix_merge_conflicts(content)
        
        # Clean duplicate imports
        content = clean_duplicate_imports(content)
        
        # Fix syntax errors
        content = fix_syntax_errors(content)
        
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