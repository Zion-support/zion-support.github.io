#!/usr/bin/env python3
"""
Script to fix common syntax errors after merge conflict resolution
"""
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix orphaned JSX fragments
        content = re.sub(r'^\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix orphaned closing tags
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix malformed JSX fragments at the end of files
        content = re.sub(r'^\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        
        # Remove standalone closing tags that don't have opening tags
        lines = content.split('\n')
        fixed_lines = []
        in_jsx = False
        brace_count = 0
        
        for line in lines:
            stripped = line.strip()
            
            # Skip empty lines
            if not stripped:
                fixed_lines.append(line)
                continue
                
            # Skip orphaned JSX fragments
            if stripped in ['<>', '</>', '>', '}>']:
                continue
                
            # Skip lines that are just closing braces without context
            if stripped == '}' and not in_jsx and brace_count == 0:
                continue
                
            # Track JSX context
            if '<' in line and '>' in line:
                in_jsx = True
            elif '}' in line and '{' in line:
                in_jsx = False
                
            # Count braces
            brace_count += line.count('{') - line.count('}')
            
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Remove trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to check")
    
    fixed_count = 0
    for file_path in files_to_process:
        if os.path.isfile(file_path):
            if fix_syntax_errors(file_path):
                fixed_count += 1
    
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()