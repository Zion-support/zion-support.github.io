#!/usr/bin/env python3

"""
Fix common syntax errors in merged files
"""
import os
import re
import glob

def fix_typescript_syntax_errors():
    """Fix common TypeScript syntax errors from merge conflicts"""
    
    # Find all TypeScript files
    ts_files = glob.glob("src/**/*.ts", recursive=True)
    tsx_files = glob.glob("src/**/*.tsx", recursive=True)
    all_files = ts_files + tsx_files
    
    print(f"Found {len(all_files)} TypeScript files to process")
    
    fixed_count = 0
    
    for file_path in all_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix common merge conflict issues
            
            # Fix missing export statements
            if content.strip().startswith('const ') and 'export' not in content:
                content = 'export ' + content
            
            # Fix missing semicolons after const declarations
            content = re.sub(r'(const\s+\w+\s*=\s*[^;]+)(\n)', r'\1;\2', content)
            
            # Fix missing commas in object properties
            content = re.sub(r'(\w+:\s*[^,}]+)(\n\s*\w+:)', r'\1,\2', content)
            
            # Fix missing commas in array elements
            content = re.sub(r'(\w+)(\n\s*])', r'\1,\2', content)
            
            # Fix missing type annotations
            content = re.sub(r'(const\s+\w+)\s*=\s*\(', r'\1: any = (', content)
            
            # Fix missing interface declarations
            if 'interface' not in content and 'type' not in content and 'const' in content:
                # Add a simple interface if needed
                content = 'interface Service {\n  id: string;\n  name: string;\n}\n\n' + content
            
            # Fix missing import statements
            if 'import' not in content and 'export' in content:
                content = 'import React from "react";\n\n' + content
            
            # Fix missing closing braces
            open_braces = content.count('{')
            close_braces = content.count('}')
            if open_braces > close_braces:
                content += '}' * (open_braces - close_braces)
            
            # Fix missing closing parentheses
            open_parens = content.count('(')
            close_parens = content.count(')')
            if open_parens > close_parens:
                content += ')' * (open_parens - close_parens)
            
            # Fix missing semicolons at end of statements
            lines = content.split('\n')
            fixed_lines = []
            for line in lines:
                line = line.strip()
                if line and not line.endswith((';', '{', '}', ':', ',', '(', ')', '[')) and not line.startswith(('import', 'export', 'interface', 'type', 'const', 'let', 'var', 'function', 'class')):
                    line += ';'
                fixed_lines.append(line)
            content = '\n'.join(fixed_lines)
            
            # Only write if content changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed: {file_path}")
                fixed_count += 1
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Fixed {fixed_count} files")
    return fixed_count

if __name__ == "__main__":
    fix_typescript_syntax_errors()
def fix_file_syntax(file_path):
    """Fix common syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing commas in arrays
        content = re.sub(r'(\{ [^}]+ \})\s*\n\s*(\{ [^}]+ \})', r'\1,\n\2', content)
        
        # Fix missing commas in imports
        content = re.sub(r'(\w+)\s*\n\s*(\w+)', r'\1,\n\2', content, flags=re.MULTILINE)
        
        # Fix missing commas in object properties
        content = re.sub(r'(\w+:\s*[^,\n]+)\s*\n\s*(\w+:)', r'\1,\n\2', content)
        
        # Fix missing commas in function parameters
        content = re.sub(r'(\w+)\s*\n\s*(\w+:)', r'\1,\n\2', content)
        
        # Fix merge conflict markers
        content = re.sub(r'        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*\n\s*export', r'\1;\n\nexport', content)
        
        # Fix missing commas in destructuring
        content = re.sub(r'(\w+)\s*\n\s*}', r'\1,\n}', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Fixed syntax errors in {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"❌ Error fixing {file_path}: {e}")
        return False

def main():
    """Main function"""
    print("🔧 Fixing syntax errors in merged files...")
    
    # Find all TypeScript and JavaScript files
    patterns = [
        'src/**/*.tsx',
        'src/**/*.ts', 
        'src/**/*.jsx',
        'src/**/*.js',
        '*.tsx',
        '*.ts',
        '*.jsx',
        '*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"📋 Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file_syntax(file_path):
                fixed_count += 1
    
    print(f"✅ Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()
