#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining merge conflicts
"""
import os
import re
import glob

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        content = re.sub(r'
        
        # Remove any remaining conflict markers
        content = re.sub(r'
        
        # Fix common syntax issues
        # Remove extra closing braces that might be left from conflicts
        lines = content.split('\n')
        new_lines = []
        brace_count = 0
        
        for line in lines:
            # Count braces
            brace_count += line.count('{') - line.count('}')
            
            # Skip lines that are just closing braces if we have too many
            if line.strip() == '}' and brace_count < 0:
                continue
                
            new_lines.append(line)
        
        content = '\n'.join(new_lines)
        
        # Clean up extra whitespace

        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'utils/**/*.ts',
        'hooks/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
=======
        if '
    
    files_fixed = 0
    total_files = 0

if __name__ == "__main__":
    main()