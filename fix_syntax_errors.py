#!/usr/bin/env python3
"""
Script to fix specific syntax errors like unterminated strings and malformed imports
"""
import os
import re
import glob
from pathlib import Path

def fix_unterminated_strings(content):
    """Fix unterminated string literals"""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Check for unterminated strings
        if '"' in line and not line.strip().endswith('"') and not line.strip().endswith('";') and not line.strip().endswith('",'):
            # Count quotes to see if we have an odd number
            quote_count = line.count('"')
            if quote_count % 2 == 1:
                # Add missing quote and semicolon if it looks like an import or statement
                if 'import' in line or 'from' in line or '=' in line:
                    line = line.rstrip() + '";'
                else:
                    line = line.rstrip() + '"'
        
        # Fix single quotes too
        if "'" in line and not line.strip().endswith("'") and not line.strip().endswith("';") and not line.strip().endswith("',"):
            quote_count = line.count("'")
            if quote_count % 2 == 1:
                if 'import' in line or 'from' in line or '=' in line:
                    line = line.rstrip() + "';"
                else:
                    line = line.rstrip() + "'"
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_import_statements(content):
    """Fix malformed import statements"""
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Fix imports with missing semicolons
        if line.strip().startswith('import ') and not line.strip().endswith(';'):
            # Check if it's a multi-line import or single line
            if '{' in line and '}' in line:
                line = line.rstrip() + ';'
            elif 'from' in line:
                line = line.rstrip() + ';'
            elif ',' in line and not line.strip().endswith(','):
                line = line.rstrip() + ';'
        
        # Fix imports with commas instead of semicolons
        if line.strip().startswith('import ') and line.strip().endswith(','):
            line = line.rstrip()[:-1] + ';'
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_jsx_syntax(content):
    """Fix JSX syntax errors"""
    # Fix malformed JSX tags
    content = re.sub(r'<([^>]+)\s*$', r'<\1>', content, flags=re.MULTILINE)
    
    # Fix unterminated JSX fragments
    content = re.sub(r'<>\s*$', r'<>', content, flags=re.MULTILINE)
    
    # Fix malformed closing tags
    content = re.sub(r'</\s*$', r'</div>', content, flags=re.MULTILINE)
    
    return content

def fix_object_syntax(content):
    """Fix JavaScript object syntax errors"""
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Fix object properties with missing colons
        if ':' not in line and ('=' in line or line.strip().endswith(',')):
            # Try to fix common patterns
            if '=' in line and not ':' in line:
                # This might be an object property
                if line.strip().endswith(','):
                    line = line.rstrip()[:-1] + ': value,'
                else:
                    line = line.rstrip() + ': value'
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def process_file(file_path):
    """Process a single file to fix syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes in order
        content = fix_unterminated_strings(content)
        content = fix_import_statements(content)
        content = fix_jsx_syntax(content)
        content = fix_object_syntax(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax in: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript and JavaScript files
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
            # Skip node_modules and dist directories
            if 'node_modules' in file_path or 'dist' in file_path:
                continue
                
            files_processed += 1
            if process_file(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed syntax in {files_fixed} files")

if __name__ == "__main__":
    main()