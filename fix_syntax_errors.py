#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in TypeScript/JSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common syntax errors
        
        # Fix missing semicolons after object properties
        content = re.sub(r'(\w+):\s*(\w+)\s*\n\s*(\w+):', r'\1: \2,\n    \3:', content)
        
        # Fix missing commas in arrays
        content = re.sub(r'(\w+)\s*\n\s*(\w+):', r'\1,\n    \2:', content)
        
        # Fix missing closing brackets/parentheses
        content = re.sub(r'(\w+)\s*\n\s*return\s*\(', r'\1;\n\n  return (', content)
        
        # Fix malformed JSX comments
        content = re.sub(r'/\*\s*([^*]+)\s*\*/', r'/* \1 */', content)
        
        # Fix missing semicolons after function declarations
        content = re.sub(r'(\w+)\s*\(\s*\)\s*=>\s*\{([^}]+)\}\s*\n\s*(\w+)', r'\1 = () => {\2};\n\nconst \3', content)
        
        # Fix missing closing tags in JSX
        content = re.sub(r'<(\w+)([^>]*)>\s*([^<]+)\s*</(\w+)>', r'<\1\2>\3</\4>', content)
        
        # Fix missing imports
        if 'import React' in content and 'from \'react\'' not in content:
            content = content.replace('import React', 'import React from \'react\'')
        
        # Fix missing component declarations
        if 'const ' in content and 'React.FC' not in content and 'export default' in content:
            # Find the component name and add proper typing
            component_match = re.search(r'const (\w+).*?=.*?\(\)', content)
            if component_match:
                component_name = component_match.group(1)
                content = re.sub(
                    f'const {component_name}.*?=.*?\\(\\)',
                    f'const {component_name}: React.FC = ()',
                    content
                )
        
        # Fix missing closing braces
        lines = content.split('\n')
        brace_count = 0
        paren_count = 0
        bracket_count = 0
        
        for i, line in enumerate(lines):
            brace_count += line.count('{') - line.count('}')
            paren_count += line.count('(') - line.count(')')
            bracket_count += line.count('[') - line.count(']')
            
            # If we're at the end and have unmatched braces, add them
            if i == len(lines) - 1:
                while brace_count > 0:
                    lines.append('  ' * (len(line) - len(line.lstrip())) + '}')
                    brace_count -= 1
                while paren_count > 0:
                    lines.append('  ' * (len(line) - len(line.lstrip())) + ')')
                    paren_count -= 1
                while bracket_count > 0:
                    lines.append('  ' * (len(line) - len(line.lstrip())) + ']')
                    bracket_count -= 1
        
        content = '\n'.join(lines)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other non-source files
            if 'node_modules' in file_path or 'dist' in file_path:
                continue
                
            total_files += 1
            if fix_syntax_errors(file_path):
                fixed_count += 1
    
    print(f"\nFixed syntax errors in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()