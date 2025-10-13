#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the latest version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+'
        
        # Replace conflicts with the version after ======= (latest version)
        def replace_conflict(match):
            conflict_text = match.group(0)
            # Split by ======= and take the second part (after =======)
            parts = conflict_text.split('=======')
            if len(parts) > 1:
                # Remove the >>>>>>> line and return the content
                after_equals = parts[1]
                # Remove the >>>>>>> line
                lines = after_equals.split('\n')
                # Find the line with >>>>>>> and remove it and everything after
                result_lines = []
                for line in lines:
                    if line.strip().startswith('>>>>>>>'):
                        break
                    result_lines.append(line)
                return '\n'.join(result_lines).strip()
            return conflict_text
        
        # Apply the replacement
        new_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle simple cases where we just have <<<<<<< HEAD without proper structure
        new_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'=======.*?', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'>>>>>>> [^\n]+.*?', '', new_content, flags=re.DOTALL)
        
        # Clean up extra whitespace
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed conflicts in: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx',
        '**/*.json',
        '**/*.md'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            total_files += 1
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nProcessed {total_files} files")
    print(f"Fixed conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()