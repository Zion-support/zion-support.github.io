#!/usr/bin/env python3
"""
Script to fix all interface declarations in the codebase
"""
import os
import re
import glob
from pathlib import Path

def fix_interfaces(file_path):
    """Fix interface declarations in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed interface declarations
        # Pattern: interface Name { } } } followed by properties
        content = re.sub(r'interface\s+(\w+)\s*\{\s*\}\s*\}\s*\}\s*\n(\s*\w+[^}]*?);', 
                        lambda m: f'interface {m.group(1)} {{\n{m.group(2)}\n}}', content, flags=re.DOTALL)
        
        # Fix malformed interface declarations with different patterns
        content = re.sub(r'interface\s+(\w+)\s*\{\s*\}\s*\}\s*\n(\s*\w+[^}]*?);', 
                        lambda m: f'interface {m.group(1)} {{\n{m.group(2)}\n}}', content, flags=re.DOTALL)
        
        # Fix malformed interface declarations with single extra brace
        content = re.sub(r'interface\s+(\w+)\s*\{\s*\}\s*\}\s*\n(\s*\w+[^}]*?);', 
                        lambda m: f'interface {m.group(1)} {{\n{m.group(2)}\n}}', content, flags=re.DOTALL)
        
        # Fix function declarations missing opening brace
        content = re.sub(r'(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*;\s*', r'\1: React.FC = () => {\n', content)
        content = re.sub(r'(\w+)\s*=\s*\(\)\s*=>\s*\{\s*;\s*', r'\1 = () => {\n', content)
        
        # Fix array syntax issues
        content = re.sub(r'const\s+(\w+)\s*=\s*\[\s*\];\s*\n(\s*\{[^}]*\},?\s*\n?)+', 
                        lambda m: m.group(0).replace('];', '['), content)
        
        # Fix object declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*\{([^}]*?)\s*$', r'const \1 = {\n\2\n};\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix missing semicolons after imports
        content = re.sub(r'from\s+[\'"][^\'"]+[\'"]\s*$', lambda m: m.group(0) + ';', content, flags=re.MULTILINE)
        
        # Clean up extra whitespace and empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = re.sub(r'^\s*\n', '', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed interfaces in: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix interfaces"""
    # Get all relevant files
    file_patterns = [
        'app/components/*.tsx',
        'app/components/*.ts',
        'src/components/*.tsx',
        'src/components/*.ts'
    ]
    
    files_to_process = []
    for pattern in file_patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_interfaces(file_path):
            fixed_count += 1
    
    print(f"Fixed interfaces in {fixed_count} files")

if __name__ == "__main__":
    main()