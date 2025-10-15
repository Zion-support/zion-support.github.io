#!/usr/bin/env python3
"""
Script to fix common syntax errors in TypeScript/JavaScript files
"""
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Unterminated string literals
        # Look for lines that start with a quote but don't end with one
        lines = content.split('\n')
        fixed_lines = []
        for line in lines:
            if line.strip().startswith('"') and not line.strip().endswith('"') and not line.strip().endswith('";'):
                # Try to fix unterminated strings
                if 'import' in line:
                    # This is likely an import statement
                    fixed_lines.append(line + '";')
                else:
                    # Add closing quote and semicolon
                    fixed_lines.append(line + '";')
            else:
                fixed_lines.append(line)
        content = '\n'.join(fixed_lines)
        
        # Fix 2: Missing closing braces
        # Count opening and closing braces
        open_braces = content.count('{')
        close_braces = content.count('}')
        if open_braces > close_braces:
            # Add missing closing braces
            missing_braces = open_braces - close_braces
            content += '\n' + '}' * missing_braces
        
        # Fix 3: Missing semicolons after statements
        content = re.sub(r'(\w+)\s*\(\s*\)\s*$', r'\1();', content, flags=re.MULTILINE)
        
        # Fix 4: Fix common JSX syntax issues
        # Fix missing closing tags
        content = re.sub(r'<(\w+)([^>]*)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
        
        # Fix 5: Fix missing commas in object literals
        content = re.sub(r'(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):', r'\1: \2,\n  \3:', content, flags=re.MULTILINE)
        
        # Fix 6: Fix missing closing parentheses
        open_parens = content.count('(')
        close_parens = content.count(')')
        if open_parens > close_parens:
            missing_parens = open_parens - close_parens
            content += ')' * missing_parens
        
        # Fix 7: Fix missing closing brackets
        open_brackets = content.count('[')
        close_brackets = content.count(']')
        if open_brackets > close_brackets:
            missing_brackets = open_brackets - close_brackets
            content += ']' * missing_brackets
        
        # Fix 8: Fix common import/export issues
        content = re.sub(r'^import\s+([^;]+)$', r'import \1;', content, flags=re.MULTILINE)
        content = re.sub(r'^export\s+([^;]+)$', r'export \1;', content, flags=re.MULTILINE)
        
        # Fix 9: Fix missing return statements
        content = re.sub(r'(\w+)\s*\(\s*\)\s*\{\s*$', r'\1() {\n  return;\n}', content, flags=re.MULTILINE)
        
        # Fix 10: Fix missing closing quotes in JSX attributes
        content = re.sub(r'(\w+)="([^"]*)$', r'\1="\2"', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
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
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_syntax_errors(file_path):
                files_fixed += 1
    
    print(f"Processed {files_processed} files")
    print(f"Fixed syntax errors in {files_fixed} files")

if __name__ == "__main__":
    main()