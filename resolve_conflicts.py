#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts
"""

import os
import subprocess
import sys

def run_command(cmd, check=True):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        return False, e.stdout, e.stderr

def resolve_conflicts():
    """Resolve merge conflicts by choosing the appropriate version"""
    print("🔧 Resolving merge conflicts...")
    
    # Get list of files with conflicts
    success, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
    if not success:
        print(f"❌ Error getting conflicted files: {stderr}")
        return False
    
    conflicted_files = stdout.strip().split('\n')
    if not conflicted_files or conflicted_files == ['']:
        print("✅ No merge conflicts found!")
        return True
    
    print(f"📋 Found {len(conflicted_files)} files with conflicts")
    
    for file_path in conflicted_files:
        if not file_path.strip():
            continue
            
        print(f"🔧 Resolving conflicts in: {file_path}")
        
        # For most conflicts, we'll accept the incoming version (theirs)
        # This is typically what we want when merging PRs
        success, stdout, stderr = run_command(f"git checkout --theirs '{file_path}'")
        if success:
            print(f"   ✅ Resolved conflicts in {file_path}")
        else:
            print(f"   ⚠️  Warning resolving {file_path}: {stderr}")
        
        # Add the resolved file
        run_command(f"git add '{file_path}'")
    
    return True

def main():
    print("🚀 Starting conflict resolution process...")
    
    # Resolve conflicts
    if not resolve_conflicts():
        print("❌ Failed to resolve conflicts")
        return 1
    
    # Commit the merge
    print("\n💾 Committing the merge...")
    success, stdout, stderr = run_command("git commit -m 'Merge all open PRs - resolved conflicts automatically'")
    if success:
        print("✅ Successfully committed merge!")
    else:
        print(f"❌ Failed to commit merge: {stderr}")
        return 1
    
    # Push changes
    print("\n🚀 Pushing changes to remote...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        print("✅ Successfully pushed changes to remote!")
    else:
        print(f"❌ Failed to push changes: {stderr}")
        return 1
    
    print("\n🎉 All conflicts resolved and changes pushed successfully!")
    return 0

if __name__ == "__main__":
    sys.exit(main())