#!/usr/bin/env python3
"""
Script to fix syntax errors in the codebase
"""
import os
import re
import glob
from pathlib import Path

def fix_syntax_errors(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix array syntax issues
        content = re.sub(r'(\s*\{[^}]*\})\s*;\s*\]', r'\1\n];', content)
        content = re.sub(r'const (\w+) = \[\s*\];\s*', r'const \1 = [\n', content)
        
        # Fix function declarations
        content = re.sub(r'const (\w+): React\.FC = \(\) => \{\s*;\s*', r'const \1: React.FC = () => {\n', content)
        content = re.sub(r'const (\w+) = \(\) => \{\s*;\s*', r'const \1 = () => {\n', content)
        
        # Fix missing closing brackets
        content = re.sub(r'(\s*\{[^}]*\})\s*;\s*$', r'\1\n', content, flags=re.MULTILINE)
        
        # Fix broken object declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*\{([^}]*?)\s*$', r'const \1 = {\n\2\n};\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix broken array declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*\[([^\]]*?)\s*$', r'const \1 = [\n\2\n];\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix missing semicolons after imports
        content = re.sub(r'from\s+[\'"][^\'"]+[\'"]\s*$', lambda m: m.group(0) + ';', content, flags=re.MULTILINE)
        
        # Fix broken interface declarations
        content = re.sub(r'interface\s+(\w+)\s*\{([^}]*?)\s*$', r'interface \1 {\n\2\n}\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix broken type declarations
        content = re.sub(r'type\s+(\w+)\s*=\s*\{([^}]*?)\s*$', r'type \1 = {\n\2\n};\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix broken export statements
        content = re.sub(r'export\s+default\s+(\w+)\s*$', r'export default \1;\n', content, flags=re.MULTILINE)
        
        # Clean up extra whitespace and empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = re.sub(r'^\s*\n', '', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix syntax errors"""
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
        if fix_syntax_errors(file_path):
            fixed_count += 1
    
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()