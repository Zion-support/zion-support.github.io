#!/usr/bin/env python3
"""
Fix all merge conflicts in the repository
This script will resolve all merge conflicts by accepting the main branch version
"""

import os
import subprocess
import sys
from pathlib import Path

def run_command(cmd, check=True):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        print(f"Command failed: {cmd}")
        print(f"Error: {e.stderr}")
        return None, e.stderr

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file"""
    if not os.path.exists(file_path):
        return False
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return True  # No conflicts
        
        print(f"🔧 Fixing conflicts in: {file_path}")
        
        lines = content.split('\n')
        resolved_lines = []
        skip_until = None
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until = '======='
                continue
            elif line.strip() == '=======':
                skip_until = '>>>>>>>'
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until = None
                continue
            elif skip_until is None:
                resolved_lines.append(line)
            elif skip_until == '>>>>>>>':
                resolved_lines.append(line)
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        
        print(f"  ✅ Fixed conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"  ❌ Error fixing {file_path}: {e}")
        return False

def find_files_with_conflicts():
    """Find all files with merge conflicts"""
    stdout, stderr = run_command("find . -name '*.tsx' -o -name '*.ts' -o -name '*.js' | grep -v node_modules | grep -v .next | xargs grep -l '<<<<<<< HEAD' 2>/dev/null || true")
    if not stdout:
        return []
    
    files = [f.strip() for f in stdout.split('\n') if f.strip()]
    return files

def main():
    """Main function"""
    print("🚀 Merge Conflict Fixer")
    print("=" * 50)
    
    # Find files with conflicts
    conflicted_files = find_files_with_conflicts()
    if not conflicted_files:
        print("✅ No merge conflicts found!")
        return
    
    print(f"📋 Found {len(conflicted_files)} files with conflicts")
    
    # Fix each file
    successful = 0
    failed = 0
    
    for file_path in conflicted_files:
        if fix_merge_conflicts_in_file(file_path):
            successful += 1
        else:
            failed += 1
    
    print(f"\n🎉 Conflict resolution completed!")
    print(f"✅ Successful: {successful}")
    print(f"❌ Failed: {failed}")
    
    # Check if there are still conflicts
    remaining_conflicts = find_files_with_conflicts()
    if remaining_conflicts:
        print(f"\n⚠️  {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts[:5]:  # Show first 5
            print(f"  - {file_path}")
        if len(remaining_conflicts) > 5:
            print(f"  ... and {len(remaining_conflicts) - 5} more")
    else:
        print("\n✅ All conflicts resolved!")

if __name__ == "__main__":
    main()