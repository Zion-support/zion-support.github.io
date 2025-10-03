#!/usr/bin/env python3
"""
Simple script to resolve git merge conflicts automatically
"""
import os
import subprocess
import glob

def find_conflict_files():
    """Find files with merge conflicts"""
    try:
        result = subprocess.run(['git', 'status', '--porcelain'], 
                              capture_output=True, text=True)
        conflict_files = []
        
        for line in result.stdout.split('\n'):
            if line.startswith('UU ') or line.startswith('AA ') or line.startswith('DD '):
                file_path = line.split()[1]
                conflict_files.append(file_path)
        
        return conflict_files
    except Exception as e:
        print(f"Error finding conflict files: {e}")
        return []

def resolve_conflicts_in_file(file_path):
    """Resolve conflicts by accepting incoming changes"""
    print(f"Resolving conflicts in {file_path}")
    
    try:
        # Use git checkout --theirs to accept incoming changes
        result = subprocess.run(['git', 'checkout', '--theirs', file_path], 
                              capture_output=True, text=True)
        
        if result.returncode == 0:
            # Add the resolved file
            subprocess.run(['git', 'add', file_path])
            print(f"✅ Resolved {file_path}")
            return True
        else:
            print(f"❌ Failed to resolve {file_path}: {result.stderr}")
            return False
            
    except Exception as e:
        print(f"❌ Error resolving {file_path}: {e}")
        return False

def resolve_conflicted_data_files():
    """Resolve .conflicted files in data directory"""
    conflicted_files = glob.glob('data/*.conflicted')
    
    for file_path in conflicted_files:
        print(f"Resolving conflicted file: {file_path}")
        
        # Remove .conflicted extension
        new_path = file_path.replace('.conflicted', '')
        
        try:
            # Copy conflicted file to original name
            subprocess.run(['cp', file_path, new_path])
            print(f"✅ Restored {new_path}")
        except Exception as e:
            print(f"❌ Error restoring {new_path}: {e}")

def main():
    """Main function"""
    print("🔧 Starting conflict resolution...")
    
    # Resolve .conflicted files first
    resolve_conflicted_data_files()
    
    # Find and resolve merge conflicts
    conflict_files = find_conflict_files()
    
    if not conflict_files:
        print("✅ No merge conflicts found")
    else:
        print(f"📋 Found {len(conflict_files)} files with conflicts:")
        for f in conflict_files:
            print(f"  - {f}")
        
        # Resolve each conflict
        success_count = 0
        for file_path in conflict_files:
            if resolve_conflicts_in_file(file_path):
                success_count += 1
        
        print(f"\n📊 Resolved {success_count}/{len(conflict_files)} conflicts")
    
    print("✅ Conflict resolution complete!")

if __name__ == "__main__":
    main()