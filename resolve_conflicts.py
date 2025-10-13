#!/usr/bin/env python3
import os
import re
import glob

def resolve_merge_conflicts(file_path):
<<<<<<< HEAD
    """Resolve merge conflicts by keeping the HEAD version"""
=======
    """Resolve merge conflicts in a file by keeping the newer version (after =======)"""
>>>>>>> cursor/analyze-improve-and-deploy-application-e447
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
        
        # Replace conflicts with HEAD version
        resolved_content = re.sub(conflict_pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers in one block
        conflict_pattern2 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        resolved_content = re.sub(conflict_pattern2, r'\1', resolved_content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        resolved_content = re.sub(r'<<<<<<< HEAD\n', '', resolved_content)
        resolved_content = re.sub(r'=======\n', '', resolved_content)
        resolved_content = re.sub(r'>>>>>>> [^\n]+\n', '', resolved_content)
        
        if content != resolved_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            print(f"Resolved conflicts in {file_path}")
            return True
        return False
=======
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split by merge conflict markers
        lines = content.split('\n')
        resolved_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            if line.strip() == '<<<<<<< HEAD':
                # Skip until we find =======
                while i < len(lines) and lines[i].strip() != '=======':
                    i += 1
                # Skip the ======= line
                if i < len(lines):
                    i += 1
                # Keep everything until >>>>>>> 
                while i < len(lines) and not lines[i].strip().startswith('>>>>>>> '):
                    resolved_lines.append(lines[i])
                    i += 1
                # Skip the >>>>>>> line
                if i < len(lines):
                    i += 1
            else:
                resolved_lines.append(line)
                i += 1
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        
        print(f"Resolved conflicts in {file_path}")
        return True
        
>>>>>>> cursor/analyze-improve-and-deploy-application-e447
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    # Find all TypeScript and JavaScript files
=======
    # Find all TypeScript/JavaScript files with merge conflicts
>>>>>>> cursor/analyze-improve-and-deploy-application-e447
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
<<<<<<< HEAD
    files_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and dist directories
            if 'node_modules' in file_path or 'dist' in file_path:
=======
    conflicts_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
>>>>>>> cursor/analyze-improve-and-deploy-application-e447
                continue
                
            files_processed += 1
            if resolve_merge_conflicts(file_path):
<<<<<<< HEAD
                files_resolved += 1
    
    print(f"Processed {files_processed} files, resolved conflicts in {files_resolved} files")
=======
                conflicts_resolved += 1
    
    print(f"Processed {files_processed} files")
    print(f"Resolved conflicts in {conflicts_resolved} files")
>>>>>>> cursor/analyze-improve-and-deploy-application-e447

if __name__ == "__main__":
    main()