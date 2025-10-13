#!/usr/bin/env python3
"""
Comprehensive script to resolve all merge conflicts in the project
"""
import os
import re
import glob
import subprocess
import sys

def find_files_with_conflicts():
    """Find all files with merge conflicts"""
    files_with_conflicts = []
    
    # Search for files with conflict markers
    for root, dirs, files in os.walk('.'):
        # Skip node_modules and .git directories
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'backup', 'backup-problematic', 'recovered-branches']]
        
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.css')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            files_with_conflicts.append(file_path)
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")
    
    return files_with_conflicts

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file"""
    print(f"Resolving conflicts in: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove all conflict markers and keep only the HEAD version
        # This is a simple approach - keep everything between <<<<<<< HEAD and =======
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        keep_head = True
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_head = True
                continue
            elif line.strip() == '=======':
                keep_head = False
                continue
            elif line.strip() == '>>>>>>> ' or line.strip().startswith('>>>>>>> '):
                in_conflict = False
                continue
            elif in_conflict and not keep_head:
                # Skip lines in the other branch
                continue
            else:
                resolved_lines.append(line)
        
        # Write the resolved content back
        resolved_content = '\n'.join(resolved_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"✓ Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"✗ Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    print("🔍 Finding files with merge conflicts...")
    files_with_conflicts = find_files_with_conflicts()
    
    if not files_with_conflicts:
        print("✅ No merge conflicts found!")
        return
    
    print(f"Found {len(files_with_conflicts)} files with conflicts:")
    for file in files_with_conflicts:
        print(f"  - {file}")
    
    print("\n🔧 Resolving conflicts...")
    success_count = 0
    
    for file_path in files_with_conflicts:
        if resolve_conflicts_in_file(file_path):
            success_count += 1
    
    print(f"\n✅ Successfully resolved conflicts in {success_count}/{len(files_with_conflicts)} files")
    
    # Verify no more conflicts
    print("\n🔍 Verifying no remaining conflicts...")
    remaining_conflicts = find_files_with_conflicts()
    
    if remaining_conflicts:
        print(f"⚠️  Still {len(remaining_conflicts)} files with conflicts:")
        for file in remaining_conflicts:
            print(f"  - {file}")
    else:
        print("✅ All conflicts resolved!")

if __name__ == "__main__":
    main()