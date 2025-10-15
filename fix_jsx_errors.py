#!/usr/bin/env python3
"""
Script to fix JSX and remaining syntax errors
"""
import os
import re
import glob

def fix_jsx_errors(file_path):
    """Fix JSX and syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: JSX expressions must have one parent element
        # Wrap multiple JSX elements in a fragment
        if 'return (' in content and content.count('<') > 1:
            # Find the return statement and wrap multiple elements
            pattern = r'return\s*\(\s*([^)]+)\s*\)'
            def wrap_jsx(match):
                jsx_content = match.group(1).strip()
                if jsx_content.count('<') > 1 and not jsx_content.startswith('<>'):
                    return f'return (\n    <>\n      {jsx_content}\n    </>\n  )'
                return match.group(0)
            content = re.sub(pattern, wrap_jsx, content, flags=re.DOTALL)
        
        # Fix 2: Missing closing tags for JSX fragments
        content = re.sub(r'<>([^<]+)<([^>]+)>([^<]*)', r'<>\1<\2>\3</>', content)
        
        # Fix 3: Missing catch or finally clause
        content = re.sub(r'try\s*\{([^}]+)\}\s*$', r'try {\1} catch (error) {\n  console.error(error);\n}', content, flags=re.MULTILINE)
        
        # Fix 4: Empty block statements
        content = re.sub(r'\{\s*\}', r'{\n  // TODO: Implement\n}', content)
        
        # Fix 5: Fix missing closing parentheses in JSX
        content = re.sub(r'<(\w+)([^>]*)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
        
        # Fix 6: Fix missing semicolons after statements
        content = re.sub(r'(\w+)\s*\(\s*\)\s*$', r'\1();', content, flags=re.MULTILINE)
        
        # Fix 7: Fix missing closing braces
        open_braces = content.count('{')
        close_braces = content.count('}')
        if open_braces > close_braces:
            missing_braces = open_braces - close_braces
            content += '\n' + '}' * missing_braces
        
        # Fix 8: Fix missing closing parentheses
        open_parens = content.count('(')
        close_parens = content.count(')')
        if open_parens > close_parens:
            missing_parens = open_parens - close_parens
            content += ')' * missing_parens
        
        # Fix 9: Fix missing closing brackets
        open_brackets = content.count('[')
        close_brackets = content.count(']')
        if open_brackets > close_brackets:
            missing_brackets = open_brackets - close_brackets
            content += ']' * missing_brackets
        
        # Fix 10: Fix common import issues
        content = re.sub(r'^import\s+([^;]+)$', r'import \1;', content, flags=re.MULTILINE)
        
        # Fix 11: Fix missing return statements in functions
        content = re.sub(r'(\w+)\s*\(\s*\)\s*\{\s*$', r'\1() {\n  return;\n}', content, flags=re.MULTILINE)
        
        # Fix 12: Fix missing closing quotes
        content = re.sub(r'(\w+)="([^"]*)$', r'\1="\2"', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX errors in: {file_path}")
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
            if fix_jsx_errors(file_path):
                files_fixed += 1
    
    print(f"Processed {files_processed} files")
    print(f"Fixed JSX errors in {files_fixed} files")

if __name__ == "__main__":
    main()