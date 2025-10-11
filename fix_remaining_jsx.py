#!/usr/bin/env python3
"""
Script to fix remaining JSX syntax errors
"""
import os
import re
import glob

def fix_jsx_errors(file_path):
    """Fix specific JSX syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed JSX expressions with > characters
        content = re.sub(r'\{[^}]*>[^}]*\}', lambda m: m.group(0).replace('>', '&gt;'), content)
        
        # Fix missing closing braces in JSX expressions
        content = re.sub(r'\{[^}]*$', lambda m: m.group(0) + '}', content)
        
        # Fix malformed arrow functions in JSX
        content = re.sub(r'const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\};\s*const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{', '', content, flags=re.DOTALL)
        
        # Fix duplicate component definitions
        content = re.sub(r'const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\};\s*const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{', '', content, flags=re.DOTALL)
        
        # Fix malformed JSX closing tags
        content = re.sub(r'</[^>]*>\s*</[^>]*>', lambda m: m.group(0).split('</')[0] + '>', content)
        
        # Fix missing commas in object literals
        content = re.sub(r'(\w+)\s*(\w+)\s*:', r'\1: \2:', content)
        
        # Fix malformed JSX expressions
        content = re.sub(r'\{[^}]*\{[^}]*\}', lambda m: m.group(0).replace('{{', '{').replace('}}', '}'), content)
        
        # Fix missing semicolons
        content = re.sub(r'(\s*</[^>]+>)\s*(\w)', r'\1;\n\2', content)
        
        # Fix malformed function definitions
        content = re.sub(r'const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\};\s*const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{', '', content, flags=re.DOTALL)
        
        # Fix duplicate export statements
        content = re.sub(r'export\s+default\s+\w+;\s*export\s+default\s+\w+;', 'export default AIServicesPage;', content)
        
        # Fix malformed JSX closing tags
        content = re.sub(r'</[^>]*>\s*</[^>]*>', lambda m: m.group(0).split('</')[0] + '>', content)
        
        # Fix missing closing braces
        open_braces = content.count('{')
        close_braces = content.count('}')
        if open_braces > close_braces:
            missing_braces = open_braces - close_braces
            content += '\n' + '}' * missing_braces
        
        # Fix malformed arrow functions
        content = re.sub(r'const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\};\s*const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{', '', content, flags=re.DOTALL)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX errors: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '**/*.tsx',
        '**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates and filter out node_modules
    files_to_fix = list(set([f for f in files_to_fix if 'node_modules' not in f]))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_jsx_errors(file_path):
                fixed_count += 1
    
    print(f"Successfully fixed {fixed_count} files")

if __name__ == "__main__":
    main()