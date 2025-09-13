#!/usr/bin/env python3
import os
import re
import glob
from datetime import datetime

def resolve_key_conflicts():
    """Resolve merge conflicts in key files only"""
    
    # Key files to resolve conflicts in
    key_files = [
        'public/index.html',
        'tailwind.config.ts', 
        'src/pages/PricingPage.js',
        'src/main.tsx',
        'src/pages/Privacy.js',
        'src/pages/FAQ.js'
    ]
    
    resolved_count = 0
    
    for file_path in key_files:
        if not os.path.exists(file_path):
            continue
            
        try:
            print(f"🔨 Resolving conflicts in: {file_path}")
            
            # Create backup
            backup_path = f"{file_path}.backup.{int(datetime.now().timestamp())}"
            with open(file_path, 'r', encoding='utf-8') as f:
                original_content = f.read()
            
            with open(backup_path, 'w', encoding='utf-8') as f:
                f.write(original_content)
            
            # Check if file has conflicts
            if '<<<<<<< HEAD' not in original_content:
                print(f"✅ No conflicts in: {file_path}")
                continue
            
            # Resolve conflicts by taking content after the last ======= marker
            lines = original_content.split('\n')
            resolved_lines = []
            in_conflict = False
            conflict_content = []
            
            for i, line in enumerate(lines):
                if line.strip().startswith('<<<<<<<'):
                    in_conflict = True
                    conflict_content = []
                elif line.strip().startswith('======='):
                    if in_conflict:
                        # Keep content from after this marker
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
    
    print(f"\n🎉 Successfully resolved conflicts in {resolved_count} key files!")
    print("📝 Backup files created with timestamp extensions")

if __name__ == "__main__":
    resolve_key_conflicts()