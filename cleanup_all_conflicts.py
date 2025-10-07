#!/usr/bin/env python3
"""
Comprehensive script to clean up all remaining merge conflicts
"""
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflicts from a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Check if file has merge conflict markers
        if '
            return False
        
        # Remove all merge conflict markers and their content
        # Pattern to match complete conflict blocks
        conflict_pattern = r'
        cleaned_content = re.sub(conflict_pattern, '', content, flags=re.DOTALL)
        
        # Remove any remaining individual markers
        cleaned_content = re.sub(r'
        
        # Clean up extra whitespace
        cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
        
        # Write cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to clean all merge conflicts"""
    # Find all files with merge conflict markers
    conflict_files = []
    
    # Search for files with merge conflict markers
    for root, dirs, files in os.walk('.'):
        # Skip certain directories
        if any(skip in root for skip in ['node_modules', '.git', 'dist', '.next', '__pycache__']):
            continue
            
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.json', '.md', '.txt', '.py', '.cjs', '.sh')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                        if any(marker in content for marker in ['
                            conflict_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(conflict_files)} files with merge conflicts")
    
    cleaned_count = 0
    for file_path in conflict_files:
        if clean_merge_conflicts(file_path):
            cleaned_count += 1
            print(f"Cleaned conflicts in: {file_path}")
    
    print(f"Successfully cleaned conflicts in {cleaned_count} files")

if __name__ == "__main__":
    main()