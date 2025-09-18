#!/usr/bin/env python3

import os
import re
import subprocess

def resolve_conflicts_in_file(file_path):
    """Remove conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        if '            return False
        
        print(f"Resolving conflicts in: {file_path}")
        
        # Remove all conflict markers and keep the content
        content = re.sub(r'        content = re.sub(r'        content = re.sub(r'        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Resolved: {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error resolving {file_path}: {e}")
        return False

def find_and_resolve_conflicts():
    """Find and resolve all conflicts"""
    print("🔍 Finding files with conflicts...")
    
    conflict_files = []
    for root, dirs, files in os.walk('.'):
        if any(skip in root for skip in ['.git', 'node_modules', 'out', 'build', 'dist', 'backup', 'temp']):
            continue
            
        for file in files:
            if file.endswith(('.tsx', '.ts', '.jsx', '.js', '.json', '.md', '.sh', '.py', '.css', '.html')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                        if '                            conflict_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(conflict_files)} files with conflicts")
    
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_conflicts_in_file(file_path):
            resolved_count += 1
    
    print(f"✅ Resolved conflicts in {resolved_count} files")
    return resolved_count

def commit_and_push():
    """Commit and push changes"""
    try:
        print("💾 Adding all changes...")
        subprocess.run(['git', 'add', '.'], check=True, timeout=30)
        
        print("📝 Committing changes...")
        subprocess.run(['git', 'commit', '-m', 'Resolve all merge conflicts and consolidate changes'], check=True, timeout=30)
        
        print("📤 Pushing changes...")
        subprocess.run(['git', 'push', 'origin', 'main'], check=True, timeout=60)
        
        print("✅ Successfully pushed changes")
        return True
        
    except subprocess.TimeoutExpired:
        print("⚠️ Git operations timed out")
        return False
    except subprocess.CalledProcessError as e:
        print(f"⚠️ Git operation failed: {e}")
        return False
    except Exception as e:
        print(f"⚠️ Error: {e}")
        return False

def main():
    print("🚀 Simple Conflict Resolution")
    print("=" * 40)
    
    # Resolve conflicts
    resolved = find_and_resolve_conflicts()
    
    if resolved > 0:
        # Commit and push
        if commit_and_push():
            print("🎉 All conflicts resolved and changes pushed!")
        else:
            print("⚠️ Conflicts resolved but failed to push")
    else:
        print("✅ No conflicts found")

if __name__ == "__main__":
    main()