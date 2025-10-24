#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining issues in the codebase.
"""

import os
import re
import glob
from pathlib import Path

def fix_syntax_errors(content):
    """Fix common syntax errors."""
    # Remove any remaining merge conflict markers
    content = re.sub(r'<<<<<<<.*?\n', '', content, flags=re.DOTALL)
    content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
    content = re.sub(r'>>>>>>>.*?\n', '', content, flags=re.DOTALL)
    
    # Fix duplicate function declarations
    content = re.sub(r'(\w+)\s*\(\s*\)\s*{\s*\n\s*import\s+', r'import ', content, flags=re.MULTILINE)
    
    # Fix missing closing braces
    lines = content.split('\n')
    fixed_lines = []
    brace_count = 0
    
    for line in lines:
        fixed_lines.append(line)
        # Count braces
        brace_count += line.count('{') - line.count('}')
        
        # If we're at the end of a function and missing closing braces
        if line.strip() and not line.strip().startswith('//') and not line.strip().startswith('*'):
            if 'export default' in line and brace_count > 0:
                # Add missing closing braces
                for _ in range(brace_count):
                    fixed_lines.append('}')
                brace_count = 0
    
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
    
    # Combine imports and other lines
    return '\n'.join(import_lines + other_lines)

def fix_export_statements(content):
    """Fix export statements."""
    # Fix duplicate export statements
    content = re.sub(r'export default\s+\w+;\s*\n\s*export default', 'export default', content)
    
    # Ensure proper export format
    content = re.sub(r'(\w+)\s*\(\s*\)\s*{\s*\n\s*export default', r'export default function \1', content)
    
    return content

def process_file(file_path):
    """Process a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix syntax errors
        content = fix_syntax_errors(content)
        
        # Clean unused imports
        content = clean_unused_imports(content)
        
        # Fix export statements
        content = fix_export_statements(content)
        
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