#!/usr/bin/env python3

import os
import re
import subprocess

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflict markers
        if '            return False
            
        print(f"Resolving conflicts in: {file_path}")
        
        # Simple resolution: keep the first version (HEAD) and remove conflict markers
        lines = content.split('\n')
        resolved_lines = []
        skip_until = None
        
        for line in lines:
            if skip_until:
                if line.strip().startswith(skip_until):
                    skip_until = None
                continue
            
            if line.strip().startswith('                skip_until = '                continue
            elif line.strip().startswith('                skip_until = '>>>>>>>'
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until = None
                continue
            else:
                resolved_lines.append(line)
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        
        print(f"✅ Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error resolving conflicts in {file_path}: {e}")
        return False

def find_conflict_files():
    """Find all files with merge conflicts"""
    conflict_files = []
    
    # Walk through all files in the workspace
    for root, dirs, files in os.walk('/workspace'):
        # Skip certain directories
        skip_dirs = ['.git', 'node_modules', '.next', 'dist', 'build']
        dirs[:] = [d for d in dirs if d not in skip_dirs]
        
        for file in files:
            if file.endswith(('.tsx', '.ts', '.jsx', '.js', '.json', '.md', '.py', '.sh')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
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
    
    print(f"📋 Found {len(conflict_files)} files with conflicts:")
    for file_path in conflict_files:
        print(f"  - {file_path}")
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
    
    print("\n🔧 Resolving conflicts...")
    resolved_count = 0
    
    for file_path in conflict_files:
        if resolve_conflicts_in_file(file_path):
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
            if '                print(f"✅ No conflicts in: {file_path}")
                continue
            
            # Resolve conflicts by taking content after the last             lines = original_content.split('\n')
            resolved_lines = []
            in_conflict = False
            conflict_content = []
            
            for i, line in enumerate(lines):
                if line.strip().startswith('<<<<<<<'):
                    in_conflict = True
                    conflict_content = []
                elif line.strip().startswith('                    if in_conflict:
                        # Keep content from after this marker
                        conflict_content = []
                elif line.strip().startswith('>>>>>>>'):
                    if in_conflict:
                        # Add the conflict content (the version after                         resolved_lines.extend(conflict_content)
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
    
    print(f"\n📊 Summary:")
    print(f"  ✅ Resolved: {resolved_count}")
    print(f"  ❌ Failed: {len(conflict_files) - resolved_count}")
    print(f"  📁 Total: {len(conflict_files)}")
    
    if resolved_count > 0:
        print("\n💾 Committing resolved changes...")
        try:
            subprocess.run(['git', 'add', '.'], cwd='/workspace', check=True)
            subprocess.run(['git', 'commit', '-m', 'Resolve merge conflicts automatically'], cwd='/workspace', check=True)
            print("✅ Changes committed successfully!")
        except subprocess.CalledProcessError as e:
            print(f"❌ Failed to commit changes: {e}")

if __name__ == "__main__":
    main()
    print(f"\n🎉 Successfully resolved conflicts in {resolved_count} key files!")
    print("📝 Backup files created with timestamp extensions")

if __name__ == "__main__":
    resolve_key_conflicts()
