#!/usr/bin/env python3
"""
<<<<<<< HEAD
Script to fix merge conflicts and JSX syntax errors in the codebase
"""

=======
Script to fix merge conflicts and syntax errors in the codebase
"""
>>>>>>> origin/main
import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts(content):
<<<<<<< HEAD
    """Fix merge conflicts by choosing the appropriate version"""
    lines = content.split('\n')
    result = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Handle merge conflict markers
        if line.startswith('<<<<<<< HEAD'):
            # Skip until we find the separator
            i += 1
            while i < len(lines) and not lines[i].startswith('======='):
                i += 1
            i += 1  # Skip the separator
            
            # Keep the content after ======= until >>>>>>> 
            while i < len(lines) and not lines[i].startswith('>>>>>>>'):
                result.append(lines[i])
                i += 1
            i += 1  # Skip the closing marker
        elif line.startswith('=======') or line.startswith('>>>>>>>'):
            # Skip these markers
            i += 1
        else:
            result.append(line)
            i += 1
    
    return '\n'.join(result)

def fix_jsx_syntax(content):
=======
    """Fix merge conflict markers in content"""
    # Remove merge conflict markers and keep the HEAD version
    content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n', r'\1', content, flags=re.DOTALL)
    
    # Remove any remaining conflict markers
    content = re.sub(r'<<<<<<< [^\n]+\n', '', content)
    content = re.sub(r'=======\n', '', content)
    content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
    
    return content

def fix_jsx_syntax_errors(content):
>>>>>>> origin/main
    """Fix common JSX syntax errors"""
    # Fix unclosed JSX tags
    content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
    
<<<<<<< HEAD
    # Fix missing closing tags for Helmet
    content = re.sub(r'<Helmet([^>]*)>\s*$', r'<Helmet\1></Helmet>', content, flags=re.MULTILINE)
    
    # Fix JSX fragments
    content = re.sub(r'<>\s*$', r'<></>', content, flags=re.MULTILINE)
    
    # Fix missing semicolons after imports
    content = re.sub(r'^import\s+.*[^;]\s*$', lambda m: m.group(0) + ';', content, flags=re.MULTILINE)
    
    # Fix missing 'use client' directive
    if 'use client' not in content and 'export default' in content:
        content = "'use client';\n" + content
    
=======
    # Fix malformed JSX expressions
    content = re.sub(r'\{[^}]*\s*>\s*\}', lambda m: m.group(0).replace('>', '&gt;'), content)
    
    # Fix unclosed fragments
    content = re.sub(r'<>\s*$', r'<></>', content, flags=re.MULTILINE)
    
>>>>>>> origin/main
    return content

def fix_typescript_errors(content):
    """Fix common TypeScript errors"""
<<<<<<< HEAD
    # Fix missing type annotations
    content = re.sub(r'const\s+(\w+)\s*=\s*\(\)\s*=>', r'const \1 = (): void =>', content)
    
    # Fix missing return types
    content = re.sub(r'function\s+(\w+)\s*\([^)]*\)\s*{', r'function \1(): void {', content)
=======
    # Remove unused imports
    content = re.sub(r'import\s+\{[^}]*\}\s+from\s+[\'\"][^\'\"]+[\'\"];\s*\n', '', content)
    
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
>>>>>>> origin/main
    
    return content

def process_file(file_path):
<<<<<<< HEAD
    """Process a single file to fix merge conflicts and syntax errors"""
=======
    """Process a single file to fix errors"""
>>>>>>> origin/main
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
<<<<<<< HEAD
        # Fix merge conflicts
        content = fix_merge_conflicts(content)
        
        # Fix JSX syntax
        content = fix_jsx_syntax(content)
        
        # Fix TypeScript errors
=======
        # Apply fixes
        content = fix_merge_conflicts(content)
        content = fix_jsx_syntax_errors(content)
>>>>>>> origin/main
        content = fix_typescript_errors(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
<<<<<<< HEAD
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/app/**/*.jsx',
        '/workspace/app/**/*.js',
        '/workspace/components/**/*.tsx',
        '/workspace/components/**/*.ts',
        '/workspace/utils/**/*.ts',
        '/workspace/hooks/**/*.ts',
        '/workspace/types/**/*.ts'
=======
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
>>>>>>> origin/main
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
<<<<<<< HEAD
            if os.path.isfile(file_path):
                files_processed += 1
                if process_file(file_path):
                    files_fixed += 1
=======
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next']):
                continue
                
            files_processed += 1
            if process_file(file_path):
                files_fixed += 1
>>>>>>> origin/main
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()