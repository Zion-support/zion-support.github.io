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
        
        # Fix missing closing tags for JSX fragments
        # Look for patterns like: <div>...content... without proper closing
        lines = content.split('\n')
        fixed_lines = []
        i = 0
        while i < len(lines):
            line = lines[i]
            
            # Skip empty lines that are just whitespace
            if line.strip() == '':
                fixed_lines.append(line)
                i += 1
                continue
                
            # Check for orphaned closing tags
            if re.match(r'^\s*</>\s*$', line):
                # Skip this line as it's orphaned
                i += 1
                continue
                
            # Check for incomplete JSX fragments
            if re.match(r'^\s*<>\s*$', line):
                # Skip this line as it's orphaned
                i += 1
                continue
                
            fixed_lines.append(line)
            i += 1
        
        content = '\n'.join(fixed_lines)
        
        # Fix missing closing braces for functions
        # Look for function declarations that might be missing closing braces
        if 'export default function' in content and not content.strip().endswith('}'):
            # Count opening and closing braces
            open_braces = content.count('{')
            close_braces = content.count('}')
            
            if open_braces > close_braces:
                # Add missing closing braces
                missing_braces = open_braces - close_braces
                content += '\n' + '}' * missing_braces
        
        # Fix missing closing parentheses for JSX return statements
        if 'return (' in content and not content.strip().endswith(')'):
            # Look for the last return statement
            return_match = re.search(r'return\s*\([^)]*$', content, re.DOTALL)
            if return_match:
                # Add missing closing parenthesis
                content += '\n  )'
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules
            if 'node_modules' in file_path:
                continue
                
            files_processed += 1
            if fix_syntax_errors(file_path):
                files_fixed += 1
                print(f"Fixed syntax errors in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed syntax errors in {files_fixed} files")

if __name__ == "__main__":
    main()