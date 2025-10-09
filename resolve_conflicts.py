#!/usr/bin/env python3
import os
import re
import glob

def resolve_conflicts(file_path):
    """Resolve merge conflicts by keeping the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove all conflict markers and keep only the HEAD version
        # Pattern to match conflict blocks: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern = r'<<<<<<< HEAD(.*?)=======(.*?)>>>>>>> [^\n]*'
        
        def replace_conflict(match):
            head_content = match.group(1)
            return head_content
        
        # Replace all conflict blocks with HEAD content
        resolved_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple ======= markers
        # Remove any remaining conflict markers
        resolved_content = re.sub(r'<<<<<<< HEAD\n?', '', resolved_content)
        resolved_content = re.sub(r'=======\n?', '', resolved_content)
        resolved_content = re.sub(r'>>>>>>> [^\n]*\n?', '', resolved_content)
        
        # Clean up any extra newlines
        resolved_content = re.sub(r'\n\s*\n\s*\n', '\n\n', resolved_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_processed = 0
    files_with_conflicts = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                        files_with_conflicts += 1
                        if resolve_conflicts(file_path):
                            print(f"✓ Resolved: {file_path}")
                        else:
                            print(f"✗ Failed: {file_path}")
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Found conflicts in {files_with_conflicts} files")

if __name__ == "__main__":
    main()