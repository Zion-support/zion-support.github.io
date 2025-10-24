#!/usr/bin/env python3
import os
import re
import glob

def fix_string_literals(file_path):
    """Fix unterminated string literals in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix common patterns
        # Fix 'next'' -> 'next'
        content = re.sub(r"'([^']*)''", r"'\1'", content)
        
        # Fix "([^"]*)"" -> "([^"]*)"
        content = re.sub(r'"([^"]*)""', r'"\1"', content)
        
        # Fix ['latin'' -> ['latin']
        content = re.sub(r"\['([^']*)''", r"['\1']", content)
        
        # Fix {"subsets": ['latin''; -> {"subsets": ['latin'],
        content = re.sub(r"\{\"subsets\":\s*\['([^']*)'';", r'{"subsets": [\'\1\'],', content)
        
        # Fix keywords: 'text'' -> keywords: 'text'
        content = re.sub(r"keywords:\s*'([^']*)''", r"keywords: '\1'", content)
        
        # Fix const "ComponentName": -> const ComponentName:
        content = re.sub(r'const\s+"([^"]*)":', r'const \1:', content)
        
        # Fix React.FC<Props> = ({ className = ''' -> React.FC<Props> = ({ className = ''
        content = re.sub(r"className\s*=\s*''''", r"className = ''", content)
        
        # Fix import statements with extra quotes
        content = re.sub(r"import\s+([^']*)'';", r"import \1;", content)
        
        # Fix from 'module'' -> from 'module'
        content = re.sub(r"from\s+'([^']*)''", r"from '\1'", content)
        
        # Fix standalone string literals that are just quotes
        content = re.sub(r"^\s*'([^']*)''\s*$", r"// \1", content, flags=re.MULTILINE)
        
        # Fix malformed object properties
        content = re.sub(r'"([^"]*)":\s*\'([^\']*)\'\'', r'"\1": \'\2\'', content)
        
        # Fix price strings like '$29 9'' -> '$29'
        content = re.sub(r"'(\$\d+)\s+\d+''", r"'\1'", content)
        
        # Fix period strings like '/month'' -> '/month'
        content = re.sub(r"'([^']*month)''", r"'\1'", content)
        
        # Fix features arrays
        content = re.sub(r"'([^']*support)''", r"'\1'", content)
        
        # Fix keywords arrays
        content = re.sub(r"keywords\s*=\s*\{\['([^']*)''", r"keywords = ['\1'", content)
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all .tsx files
    tsx_files = glob.glob('/workspace/**/*.tsx', recursive=True)
    
    fixed_count = 0
    total_count = len(tsx_files)
    
    print(f"Found {total_count} .tsx files to check")
    
    for file_path in tsx_files:
        if fix_string_literals(file_path):
            fixed_count += 1
            if fixed_count % 50 == 0:
                print(f"Fixed {fixed_count}/{total_count} files...")
    
    print(f"Fixed {fixed_count}/{total_count} files")

if __name__ == "__main__":
    main()