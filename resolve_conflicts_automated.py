#!/usr/bin/env python3
"""
Automated merge conflict resolver for GitHub PRs
This script resolves merge conflicts by accepting the main branch version
and removing deleted files that conflict with main.
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

def resolve_conflicts():
    """Resolve all merge conflicts automatically"""
    print("🔧 Starting automated conflict resolution...")
    
    # Get list of conflicted files
    stdout, stderr = run_command("git status --porcelain | grep '^UU\\|^AU\\|^UA\\|^DD\\|^DU\\|^UD'")
    if not stdout:
        print("✅ No conflicts found!")
        return True
    
    conflicted_files = stdout.strip().split('\n')
    print(f"📋 Found {len(conflicted_files)} conflicted files")
    
    # Resolve each conflict
    for line in conflicted_files:
        if not line.strip():
            continue
            
        status = line[:2]
        filename = line[3:].strip()
        
        print(f"🔨 Resolving: {filename} (status: {status})")
        
        if status in ['DD', 'DU', 'UD']:
            # File was deleted in one branch, remove it
            if os.path.exists(filename):
                run_command(f"git rm '{filename}'")
                print(f"  ✅ Removed deleted file: {filename}")
        elif status in ['UU', 'AU', 'UA']:
            # Content conflict, resolve by accepting main branch version
            if os.path.exists(filename):
                # Check if file has conflict markers
                with open(filename, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if '<<<<<<< HEAD' in content:
                    # Resolve conflict by keeping main branch version (after =======)
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
                    with open(filename, 'w', encoding='utf-8') as f:
                        f.write('\n'.join(resolved_lines))
                    
                    print(f"  ✅ Resolved content conflict: {filename}")
                
                # Add the resolved file
                run_command(f"git add '{filename}'")
    
    # Check if there are any remaining conflicts
    stdout, stderr = run_command("git status --porcelain | grep '^UU\\|^AU\\|^UA\\|^DD\\|^DU\\|^UD'")
    if stdout:
        print("⚠️  Some conflicts remain unresolved:")
        print(stdout)
        return False
    
    print("✅ All conflicts resolved!")
    return True

def main():
    """Main function"""
    print("🚀 Automated Merge Conflict Resolver")
    print("=" * 50)
    
    # Check if we're in a git repository
    if not os.path.exists('.git'):
        print("❌ Not in a git repository!")
        sys.exit(1)
    
    # Check if we're in a merge state
    stdout, stderr = run_command("git status --porcelain | grep '^UU\\|^AU\\|^UA\\|^DD\\|^DU\\|^UD'")
    if not stdout:
        print("✅ No merge conflicts detected!")
        return
    
    # Resolve conflicts
    if resolve_conflicts():
        print("\n🎉 All conflicts resolved successfully!")
        print("💡 You can now commit the merge with: git commit")
    else:
        print("\n❌ Some conflicts could not be automatically resolved.")
        print("💡 Please resolve them manually and then commit.")

if __name__ == "__main__":
    main()