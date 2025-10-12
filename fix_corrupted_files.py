#!/usr/bin/env python3
"""
Script to fix corrupted files with malformed JSX and syntax errors
"""
import os
import re
import glob

def fix_corrupted_file(file_path):
    """Fix a single corrupted file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if file is too small or doesn't look like a React component
        if len(content) < 50 or not ('import' in content and 'React' in content):
            return False
        
        # Fix common issues
        fixes_applied = False
        
        # Fix missing function declaration
        if 'return (' in content and 'function ' not in content and 'export default' not in content:
            # Try to determine the component name from the file path
            component_name = os.path.basename(file_path).replace('.tsx', '').replace('.ts', '')
            component_name = ''.join(word.capitalize() for word in component_name.split('-'))
            
            # Add function declaration before return
            content = f"import React from 'react';\nimport {{ Helmet }} from 'react-helmet-async';\nimport {{ Link }} from 'react-router-dom';\nimport {{ ArrowRight }} from 'lucide-react';\n\nexport default function {component_name}() {{\n  {content}"
            fixes_applied = True
        
        # Fix malformed JSX - remove duplicate closing tags
        content = re.sub(r'</div>\s*</div>\s*</div>\s*</div>\s*</div>', '</div>', content)
        
        # Fix malformed JSX - remove orphaned closing tags
        content = re.sub(r'^\s*</[^>]+>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix malformed JSX - remove orphaned opening tags
        content = re.sub(r'^\s*<[^>]+>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix missing closing brace for function
        if 'return (' in content and not content.strip().endswith('}'):
            content = content.rstrip() + '\n}'
            fixes_applied = True
        
        # Fix malformed style attributes
        content = re.sub(r'style=\{\{\s*([^}]+)\s*\}\}', r'style={{\1}}', content)
        
        # Fix malformed className attributes
        content = re.sub(r'className="([^"]*)\s+([^"]*)"', r'className="\1 \2"', content)
        
        # Remove any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> [^\n]*\n?', '', content, flags=re.DOTALL)
        
        # Write back if changes were made
        if fixes_applied or content != open(file_path, 'r', encoding='utf-8').read():
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix corrupted files"""
    # File patterns to process
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    total_files = 0
    fixed_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other irrelevant directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            total_files += 1
            if fix_corrupted_file(file_path):
                fixed_files += 1
                print(f"Fixed {file_path}")
    
    print(f"\nSummary:")
    print(f"Files processed: {total_files}")
    print(f"Files fixed: {fixed_files}")

if __name__ == "__main__":
    main()