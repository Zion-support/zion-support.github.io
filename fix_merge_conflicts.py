#!/usr/bin/env python3
"""
Script to fix merge conflict markers in TypeScript/JavaScript files
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflict markers
        if '<<<<<<<' not in content:
            return False
            
        # Split by merge conflict markers
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        conflict_section = []
        
        for line in lines:
            if line.strip().startswith('<<<<<<<'):
                in_conflict = True
                conflict_section = []
            elif line.strip().startswith('======='):
                # Middle of conflict - continue collecting
                continue
            elif line.strip().startswith('>>>>>>>'):
                # End of conflict - choose the best content
                if conflict_section:
                    # Remove empty lines and keep the content
                    clean_content = [l for l in conflict_section if l.strip()]
                    if clean_content:
                        fixed_lines.extend(clean_content)
                in_conflict = False
                conflict_section = []
            elif in_conflict:
                conflict_section.append(line)
            else:
                fixed_lines.append(line)
        
        # Write the fixed content back
        fixed_content = '\n'.join(fixed_lines)
        
        # Clean up any remaining issues
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'^<<<<<<<.*$', '', fixed_content, flags=re.MULTILINE)
        fixed_content = re.sub(r'^=======.*$', '', fixed_content, flags=re.MULTILINE)
        fixed_content = re.sub(r'^>>>>>>>.*$', '', fixed_content, flags=re.MULTILINE)
        
        # Remove multiple empty lines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'utils/**/*.tsx',
        'lib/**/*.ts',
        'lib/**/*.tsx',
        'hooks/**/*.ts',
        'hooks/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.tsx',
        '*.tsx',
        '*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
                    print(f"Fixed: {file_path}")
    
    print(f"\nFixed {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()