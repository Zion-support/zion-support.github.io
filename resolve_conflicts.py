#!/usr/bin/env python3
import os
import re
import subprocess

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a file by keeping the latest version"""
    try:
        result = subprocess.run(['git', 'grep', '-l', '<<<<<<< HEAD'], 
                              capture_output=True, text=True, cwd='/workspace')
        if result.returncode != 0:
            print("No merge conflicts found")
            return
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove all merge conflict markers and keep the latest version
        # Pattern 1: Remove everything from <<<<<<< HEAD to ======= (keep nothing from HEAD)
        content = re.sub(r'<<<<<<< HEAD.*?=======\s*\n', '', content, flags=re.DOTALL)
        
        # Pattern 2: Remove everything from ======= to >>>>>>> (keep the latest version)
        content = re.sub(r'=======.*?>>>>>>>.*?\n', '', content, flags=re.DOTALL)
        
        # Pattern 3: Remove any remaining <<<<<<< HEAD lines
        content = re.sub(r'^<<<<<<< HEAD.*?\n', '', content, flags=re.MULTILINE)
        
        # Pattern 4: Remove any remaining ======= lines
        content = re.sub(r'^=======.*?\n', '', content, flags=re.MULTILINE)
        
        # Pattern 5: Remove any remaining >>>>>>> lines
        content = re.sub(r'^>>>>>>>.*?\n', '', content, flags=re.MULTILINE)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    print("🔍 Searching for files with merge conflicts...")
    
    # Find all files with merge conflicts
    files_with_conflicts = []
    
    # Search in common directories
    search_patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.js',
        '**/*.jsx',
        '**/*.css',
        '**/*.json',
        '**/*.md'
    ]
    
    for pattern in search_patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules, .git, and other irrelevant directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        files_with_conflicts.append(file_path)
            except:
                continue
    
    print(f"📁 Found {len(files_with_conflicts)} files with merge conflicts")
    
    # Resolve conflicts in each file
    resolved_count = 0
    for file_path in files_with_conflicts:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
    
    print(f"✅ Successfully resolved conflicts in {resolved_count} files")
    
    # Verify no conflicts remain
    remaining_conflicts = []
    for file_path in files_with_conflicts:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content:
                    remaining_conflicts.append(file_path)
        except:
            continue
    
    if remaining_conflicts:
        print(f"⚠️  {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts:
            print(f"   - {file_path}")
    else:
        print("🎉 All merge conflicts have been resolved!")

if __name__ == "__main__":
    resolve_merge_conflicts()