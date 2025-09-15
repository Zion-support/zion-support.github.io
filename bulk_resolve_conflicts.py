#!/usr/bin/env python3

import os
import re
import subprocess
import time

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        # Skip backup files and temporary files
        if any(skip in file_path for skip in ['.backup', '.tmp', '.temp', 'zion-os.disabled']):
            return False
            
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Check if file has conflict markers
        if '            return False
            
        print(f"Resolving conflicts in: {file_path}")
        
        # Create backup
        backup_path = f"{file_path}.backup.{int(time.time())}"
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        # Resolution strategy based on file type
        if file_path.endswith(('.json', '.lock')):
            # For JSON files, prefer the incoming version (theirs)
            resolved_content = resolve_json_conflicts(content)
        elif file_path.endswith(('.tsx', '.ts', '.jsx', '.js')):
            # For code files, prefer the incoming version (theirs)
            resolved_content = resolve_code_conflicts(content)
        elif file_path.endswith(('.md', '.txt')):
            # For documentation, merge both versions
            resolved_content = resolve_doc_conflicts(content)
        else:
            # Default: prefer incoming version
            resolved_content = resolve_default_conflicts(content)
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"✅ Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error resolving conflicts in {file_path}: {e}")
        return False

def resolve_json_conflicts(content):
    """Resolve conflicts in JSON files by preferring incoming version"""
    lines = content.split('\n')
    resolved_lines = []
    skip_until = None
    
    for line in lines:
        if skip_until:
            if line.strip().startswith(skip_until):
                skip_until = None
            continue
        
        if line.strip().startswith('            skip_until = '            continue
        elif line.strip().startswith('            skip_until = '>>>>>>>'
            continue
        elif line.strip().startswith('>>>>>>>'):
            skip_until = None
            continue
        else:
            resolved_lines.append(line)
    
    return '\n'.join(resolved_lines)

def resolve_code_conflicts(content):
    """Resolve conflicts in code files by preferring incoming version"""
    lines = content.split('\n')
    resolved_lines = []
    skip_until = None
    
    for line in lines:
        if skip_until:
            if line.strip().startswith(skip_until):
                skip_until = None
            continue
        
        if line.strip().startswith('            skip_until = '            continue
        elif line.strip().startswith('            skip_until = '>>>>>>>'
            continue
        elif line.strip().startswith('>>>>>>>'):
            skip_until = None
            continue
        else:
            resolved_lines.append(line)
    
    return '\n'.join(resolved_lines)

def resolve_doc_conflicts(content):
    """Resolve conflicts in documentation by merging both versions"""
    lines = content.split('\n')
    resolved_lines = []
    skip_until = None
    in_conflict = False
    
    for line in lines:
        if skip_until:
            if line.strip().startswith(skip_until):
                skip_until = None
                in_conflict = False
            continue
        
        if line.strip().startswith('            skip_until = '            in_conflict = True
            continue
        elif line.strip().startswith('            skip_until = '>>>>>>>'
            continue
        elif line.strip().startswith('>>>>>>>'):
            skip_until = None
            in_conflict = False
            continue
        else:
            resolved_lines.append(line)
    
    return '\n'.join(resolved_lines)

def resolve_default_conflicts(content):
    """Default conflict resolution - prefer incoming version"""
    lines = content.split('\n')
    resolved_lines = []
    skip_until = None
    
    for line in lines:
        if skip_until:
            if line.strip().startswith(skip_until):
                skip_until = None
            continue
        
        if line.strip().startswith('            skip_until = '            continue
        elif line.strip().startswith('            skip_until = '>>>>>>>'
            continue
        elif line.strip().startswith('>>>>>>>'):
            skip_until = None
            continue
        else:
            resolved_lines.append(line)
    
    return '\n'.join(resolved_lines)

def find_conflict_files():
    """Find all files with merge conflicts"""
    conflict_files = []
    
    # Walk through all files in the workspace
    for root, dirs, files in os.walk('/workspace'):
        # Skip certain directories
        skip_dirs = ['.git', 'node_modules', '.next', 'dist', 'build', 'zion-os.disabled', 'temp_disabled', 'temp_backup']
        dirs[:] = [d for d in dirs if d not in skip_dirs]
        
        for file in files:
            if file.endswith(('.tsx', '.ts', '.jsx', '.js', '.json', '.md', '.py', '.sh', '.html', '.xml')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                        if '                            conflict_files.append(file_path)
                except:
                    pass
    
    return conflict_files

def main():
    print("🔍 Finding files with merge conflicts...")
    conflict_files = find_conflict_files()
    
    if not conflict_files:
        print("✅ No files with merge conflicts found!")
        return
    
    print(f"📋 Found {len(conflict_files)} files with conflicts")
    
    print("\n🔧 Resolving conflicts...")
    resolved_count = 0
    
    for i, file_path in enumerate(conflict_files):
        if resolve_conflicts_in_file(file_path):
            resolved_count += 1
        
        # Progress indicator
        if (i + 1) % 100 == 0:
            print(f"Progress: {i + 1}/{len(conflict_files)} files processed")
    
    print(f"\n📊 Summary:")
    print(f"  ✅ Resolved: {resolved_count}")
    print(f"  ❌ Failed: {len(conflict_files) - resolved_count}")
    print(f"  📁 Total: {len(conflict_files)}")
    
    if resolved_count > 0:
        print("\n💾 Committing resolved changes...")
        try:
            subprocess.run(['git', 'add', '.'], cwd='/workspace', check=True)
            subprocess.run(['git', 'commit', '-m', 'Bulk resolve merge conflicts automatically'], cwd='/workspace', check=True)
            print("✅ Changes committed successfully!")
            
            print("\n🚀 Pushing to main...")
            subprocess.run(['git', 'push', 'origin', 'main'], cwd='/workspace', check=True)
            print("✅ Changes pushed to main successfully!")
            
        except subprocess.CalledProcessError as e:
            print(f"❌ Failed to commit/push changes: {e}")

if __name__ == "__main__":
    main()