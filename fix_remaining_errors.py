#!/usr/bin/env python3
"""
Script to fix remaining TypeScript/React syntax errors
"""
import os
import re
import glob

def fix_remaining_errors(file_path):
    """Fix remaining syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no obvious errors
        if not any(pattern in content for pattern in ['&gt;', '&lt;', 'const =', 'const const', 'const className']):
            return False
            
        print(f"Fixing remaining errors in: {file_path}")
        
        # Fix HTML entities
        content = content.replace('&gt;', '>')
        content = content.replace('&lt;', '<')
        
        # Fix broken const declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*=', r'const \1 = ', content)
        content = re.sub(r'const\s+const\s+', 'const ', content)
        content = re.sub(r'const\s+(\w+)\s*=\s*{\s*const\s+', r'const \1 = { ', content)
        content = re.sub(r'const\s+(\w+)\s*=\s*{\s*,\s*', r'const \1 = { ', content)
        content = re.sub(r'const\s+(\w+)\s*=\s*{\s*;\s*', r'const \1 = { ', content)
        
        # Fix broken JSX
        content = re.sub(r'<([^>]+)\s*const\s+(\w+)\s*=\s*([^>]+)\s*/>', r'<\1 \2={\3} />', content)
        content = re.sub(r'<([^>]+)\s*const\s+(\w+)\s*=\s*([^>]+)\s*>', r'<\1 \2={\3}>', content)
        
        # Fix broken function calls
        content = re.sub(r'(\w+)\s*\(\s*\)\s*=\s*>\s*{', r'\1(() => {', content)
        content = re.sub(r'(\w+)\s*\(\s*\)\s*=\s*>\s*\(', r'\1(() => (', content)
        
        # Fix broken object literals
        content = re.sub(r'{\s*const\s+(\w+)\s*:\s*([^,}]+)\s*,\s*const\s+(\w+)\s*:\s*([^,}]+)\s*}', r'{\1: \2, \3: \4}', content)
        content = re.sub(r'{\s*const\s+(\w+)\s*:\s*([^,}]+)\s*}', r'{\1: \2}', content)
        
        # Fix broken array literals
        content = re.sub(r'\[\s*const\s+(\w+)\s*=\s*([^,}\]]+)\s*,\s*const\s+(\w+)\s*=\s*([^,}\]]+)\s*\]', r'[\1, \3]', content)
        content = re.sub(r'\[\s*const\s+(\w+)\s*=\s*([^,}\]]+)\s*\]', r'[\1]', content)
        
        # Fix broken destructuring
        content = re.sub(r'{\s*const\s+(\w+)\s*=\s*([^}]+)\s*}', r'{\1}', content)
        content = re.sub(r'\(\s*{\s*const\s+(\w+)\s*=\s*([^}]+)\s*}\s*\)', r'({\1})', content)
        
        # Fix broken imports
        content = re.sub(r'import\s+([^;]+);\s*;', r'import \1;', content)
        content = re.sub(r'import\s+([^;]+);\s*export', r'import \1;\nexport', content)
        
        # Fix broken exports
        content = re.sub(r'export\s+default\s+([^;]+);\s*;', r'export default \1;', content)
        content = re.sub(r'export\s+default\s+([^;]+);\s*export', r'export default \1;\nexport', content)
        
        # Fix broken class declarations
        content = re.sub(r'class\s+(\w+)\s+extends\s+Component<([^>]+)>\s*/>', r'class \1 extends Component<\2> {', content)
        content = re.sub(r'class\s+(\w+)\s+extends\s+Component<([^>]+)>\s*{', r'class \1 extends Component<\2> {', content)
        
        # Fix broken return statements
        content = re.sub(r'return\s*;\s*<', r'return <', content)
        content = re.sub(r'return\s*;\s*{', r'return {', content)
        
        # Fix broken JSX fragments
        content = re.sub(r'<>\s*<', r'<><', content)
        content = re.sub(r'>\s*</>', r'></>', content)
        
        # Fix broken arrow functions
        content = re.sub(r'\(\s*const\s+(\w+)\s*=\s*([^)]+)\s*\)\s*=>', r'(\1) =>', content)
        content = re.sub(r'\(\s*{\s*const\s+(\w+)\s*=\s*([^}]+)\s*}\s*\)\s*=>', r'(\1) =>', content)
        
        # Clean up excessive whitespace
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix remaining syntax errors"""
    # Find all TypeScript/React files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '**/*.tsx',
        '**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and '.git' not in f]
    
    fixed_count = 0
    total_files = len(files_to_fix)
    
    print(f"Found {total_files} files to check for remaining errors...")
    
    for file_path in files_to_fix:
        if fix_remaining_errors(file_path):
            fixed_count += 1
    
    print(f"Fixed remaining errors in {fixed_count} files out of {total_files} total files.")

if __name__ == "__main__":
    main()