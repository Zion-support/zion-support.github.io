#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase
"""
import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        content = re.sub(pattern1, r'\1', content, flags=re.DOTALL)
        
        # Pattern 2: <<<<<<< HEAD ... ======= ... >>>>>>> main
        pattern2 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> main'
        content = re.sub(pattern2, r'\1', content, flags=re.DOTALL)
        
        # Pattern 3: <<<<<<< HEAD ... ======= ... >>>>>>> cursor/...
        pattern3 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> cursor/[^\n]+'
        content = re.sub(pattern3, r'\1', content, flags=re.DOTALL)
        
        # Pattern 4: <<<<<<< HEAD ... ======= ... >>>>>>> origin/...
        pattern4 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> origin/[^\n]+'
        content = re.sub(pattern4, r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Fix common syntax errors
        # Fix unterminated strings
        content = re.sub(r'<title>([^<]*?)\n', r'<title>\1</title>\n', content)
        content = re.sub(r'<meta name="([^"]*?)" content="([^"]*?)\n', r'<meta name="\1" content="\2" />\n', content)
        
        # Fix missing semicolons and brackets
        content = re.sub(r'}\s*$', '};\n', content, flags=re.MULTILINE)
        content = re.sub(r'const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{([^}]*?)\s*$', r'const \1 = () => {\n\2\n};\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix broken JSX syntax
        content = re.sub(r'<(\w+)\s*([^>]*?)\s*>\s*$', r'<\1 \2>', content, flags=re.MULTILINE)
        content = re.sub(r'</(\w+)\s*>\s*$', r'</\1>', content, flags=re.MULTILINE)
        
        # Fix missing closing tags
        content = re.sub(r'<(\w+)([^>]*?)\s*>\s*$', r'<\1\2>', content, flags=re.MULTILINE)
        
        # Fix broken function declarations
        content = re.sub(r'const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{([^}]*?)\s*$', r'const \1: React.FC = () => {\n\2\n};\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix broken array declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*\[([^\]]*?)\s*$', r'const \1 = [\n\2\n];\n', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix broken object declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*\{([^}]*?)\s*$', r'const \1 = {\n\2\n};\n', content, flags=re.MULTILINE | re.DOTALL)
        
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
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts"""
    # Get all relevant files
    file_patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_to_process = []
    for pattern in file_patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to process
    files_to_process = [f for f in files_to_process if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', 'build', '.next', 'out', 'coverage'
    ])]
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()