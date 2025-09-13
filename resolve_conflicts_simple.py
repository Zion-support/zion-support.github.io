#!/usr/bin/env python3
import os
import re
import glob
from datetime import datetime

def resolve_merge_conflicts():
    """Resolve merge conflicts by taking the version after the last ======= marker"""
    
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = ['**/*.tsx', '**/*.ts', '**/*.jsx', '**/*.js']
    conflict_files = []
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path) and 'node_modules' not in file_path and '.backup.' not in file_path:
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            conflict_files.append(file_path)
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")
    
    if not conflict_files:
        print("✅ No merge conflicts found!")
        return
    
    print(f"🔧 Found merge conflicts in {len(conflict_files)} files:")
    for file_path in conflict_files:
        print(f"  - {file_path}")
    
    resolved_count = 0
    
    for file_path in conflict_files:
        try:
            print(f"🔨 Resolving conflicts in: {file_path}")
            
            # Create backup
            backup_path = f"{file_path}.backup.{int(datetime.now().timestamp())}"
            with open(file_path, 'r', encoding='utf-8') as f:
                original_content = f.read()
            
            with open(backup_path, 'w', encoding='utf-8') as f:
                f.write(original_content)
            
            # Resolve conflicts by taking content after the last ======= marker
            lines = original_content.split('\n')
            resolved_lines = []
            in_conflict = False
            conflict_content = []
            last_marker_line = -1
            
            for i, line in enumerate(lines):
                if line.strip().startswith('<<<<<<<'):
                    in_conflict = True
                    conflict_content = []
                    last_marker_line = i
                elif line.strip().startswith('======='):
                    if in_conflict:
                        # Keep content from before this marker
                        conflict_content = []
                elif line.strip().startswith('>>>>>>>'):
                    if in_conflict:
                        # Add the conflict content (the version after =======)
                        resolved_lines.extend(conflict_content)
                        in_conflict = False
                        conflict_content = []
                else:
                    if in_conflict:
                        conflict_content.append(line)
                    else:
                        resolved_lines.append(line)
            
            # Write resolved content
            resolved_content = '\n'.join(resolved_lines)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            
            print(f"✅ Resolved conflicts in: {file_path}")
            resolved_count += 1
            
        except Exception as e:
            print(f"❌ Error resolving {file_path}: {e}")
    
    print(f"\n🎉 Successfully resolved conflicts in {resolved_count}/{len(conflict_files)} files!")
    print("📝 Backup files created with timestamp extensions")

if __name__ == "__main__":
    resolve_merge_conflicts()