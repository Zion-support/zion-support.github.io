#!/usr/bin/env python3
"""
Fix remaining syntax errors in files
"""
import os
import re
import glob

def fix_syntax_errors(content):
    """Fix various syntax errors"""
    # Fix import statements with extra quotes and semicolons
    content = re.sub(r"import\s+([^;]+);'$", r"import \1;", content, flags=re.MULTILINE)
    content = re.sub(r"import\s+([^;]+)';$", r"import \1;", content, flags=re.MULTILINE)
    content = re.sub(r"import\s+([^;]+);$", r"import \1;", content, flags=re.MULTILINE)
    
    # Fix unterminated strings
    content = re.sub(r"'([^']*?)$", r"'\1'", content, flags=re.MULTILINE)
    content = re.sub(r'"([^"]*?)$', r'"\1"', content, flags=re.MULTILINE)
    
    # Fix extra quotes in strings
    content = re.sub(r"'([^']*?)''", r"'\1'", content)
    content = re.sub(r'"([^"]*?)""', r'"\1"', content)
    
    # Fix malformed JSX attributes
    content = re.sub(r'(\w+);>', r'\1>', content)
    content = re.sub(r'(\w+): value', r'\1', content)
    content = re.sub(r'(\w+)"', r'\1"', content)
    
    # Fix malformed function parameters
    content = re.sub(r'\(\s*{\s*([^}]*?)\s*;\s*:\s*value\s*}\s*\)', r'({\1})', content)
    
    # Fix malformed object properties
    content = re.sub(r'(\w+):\s*value', r'\1', content)
    
    # Fix extra semicolons in imports
    content = re.sub(r"from\s+'([^']+)';'", r"from '\1';", content)
    content = re.sub(r"from\s+\"([^\"]+)\";\"", r"from \"\1\";", content)
    
    # Fix malformed describe blocks
    content = re.sub(r"describe\('([^']+)',\s*\(\)\s*=>\s*\{'", r"describe('\1', () => {", content)
    
    # Fix malformed function calls
    content = re.sub(r"(\w+)\(\)\s*=>\s*\{\s*'", r"\1() => {", content)
    
    # Fix malformed throw statements
    content = re.sub(r"throw new Error\('([^']+)'\);'", r"throw new Error('\1');", content)
    
    # Fix malformed jest spy calls
    content = re.sub(r"jest\.spyOn\(([^)]+)\)\.mockImplementation\(\(\)\s*=>\s*\{\}\)\s*;'", r"jest.spyOn(\1).mockImplementation(() => {});", content)
    
    return content

def process_file(file_path):
    """Process a single file to fix syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_syntax_errors(content)
        
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
    """Main function to fix all files"""
    # Get all relevant files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts',
        'api/**/*.tsx',
        'api/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Processing {len(files_to_process)} files...")
    
    fixed_count = 0
    for file_path in files_to_process:
        if process_file(file_path):
            fixed_count += 1
    
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()