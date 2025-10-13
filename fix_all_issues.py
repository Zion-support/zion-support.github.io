#!/usr/bin/env python3
import os
import re
import glob

def fix_file_issues(file_path):
    """Fix common issues in React/TypeScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix duplicate default exports
        if content.count('export default') > 1:
            # Keep only the first export default
            lines = content.split('\n')
            export_default_count = 0
            new_lines = []
            
            for line in lines:
                if line.strip().startswith('export default') and export_default_count > 0:
                    # Skip duplicate export default lines
                    continue
                elif line.strip().startswith('export default'):
                    export_default_count += 1
                    new_lines.append(line)
                else:
                    new_lines.append(line)
            
            content = '\n'.join(new_lines)
        
        # Fix missing imports for common components
        if 'Helmet' in content and 'react-helmet-async' not in content:
            if 'import { Helmet }' not in content:
                # Add Helmet import
                import_line = "import { Helmet } from 'react-helmet-async'"
                if 'import React' in content:
                    content = content.replace('import React', f'import React\n{import_line}')
                else:
                    content = f"{import_line}\n{content}"
        
        if 'Link' in content and 'react-router-dom' not in content:
            if 'import { Link }' not in content:
                # Add Link import
                import_line = "import { Link } from 'react-router-dom'"
                if 'import React' in content:
                    content = content.replace('import React', f'import React\n{import_line}')
                else:
                    content = f"{import_line}\n{content}"
        
        # Remove any remaining merge conflict markers

        # Clean up multiple empty lines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Remove trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed issues in: {file_path}")
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    fixed_count = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_file_issues(file_path):
                fixed_count += 1
    
    print(f"Fixed issues in {fixed_count} files")

if __name__ == "__main__":
    main()