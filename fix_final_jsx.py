#!/usr/bin/env python3
"""
Script to fix final JSX syntax errors
"""
import os
import re
import glob

def fix_final_jsx_errors(file_path):
    """Fix final JSX syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed JSX expressions with &gt; instead of >
        content = re.sub(r'&gt;', '>', content)
        
        # Fix malformed variable declarations
        content = re.sub(r'const:\s*(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{', r'const \1: React.FC = () => {', content)
        
        # Fix malformed object properties
        content = re.sub(r'nam:\s*e:\s*', 'name: ', content)
        content = re.sub(r'hre:\s*f:\s*', 'href: ', content)
        
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
            print(f"Fixed final JSX errors: {file_path}")
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
            if fix_final_jsx_errors(file_path):
                fixed_count += 1
    
    print(f"Successfully fixed {fixed_count} files")

if __name__ == "__main__":
    main()