#!/usr/bin/env python3
import os
import re
import glob

def aggressive_cleanup(file_path):
    """Aggressively clean up all merge conflict remnants"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove any remaining branch names and conflict markers
        content = re.sub(r'\s+cursor/[a-zA-Z0-9-]+\s*', ' ', content)
        content = re.sub(r'cursor/[a-zA-Z0-9-]+', '', content)
        
        # Remove any lines that contain only branch names
        lines = content.split('\n')
        cleaned_lines = []
        for line in lines:
            # Skip lines that are just branch names
            if re.match(r'^\s*cursor/[a-zA-Z0-9-]+\s*$', line):
                continue
            # Skip lines that are just whitespace
            if re.match(r'^\s*$', line) and len(cleaned_lines) > 0 and re.match(r'^\s*$', cleaned_lines[-1]):
                continue
            cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        # Clean up extra whitespace
        content = re.sub(r'\n{3,}', '\n\n', content)
        content = re.sub(r'^\s*\n', '', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Cleaned {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    files_to_fix = []
    
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f]
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if 'cursor/' in content:
                if aggressive_cleanup(file_path):
                    fixed_count += 1
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
    
    print(f"Cleaned {fixed_count} files")

if __name__ == "__main__":
    main()