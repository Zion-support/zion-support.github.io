#!/usr/bin/env python3

import subprocess
import time
import sys

def run_command(cmd):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=60)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def get_codex_branches():
    """Get all codex branches"""
    success, stdout, stderr = run_command("git branch -r | grep -E '(codex/)' | head -100 | tail -50")
    if not success:
        print(f"Error getting branches: {stderr}")
        return []
    
    branches = [line.strip() for line in stdout.split('\n') if line.strip()]
    return branches

def merge_branch(branch_name):
    """Attempt to merge a branch"""
    print(f"\n🔄 Processing branch: {branch_name}")
    
    # Extract branch name without origin/
    clean_name = branch_name.replace('origin/', '')
    
    # Try to merge the branch
    success, stdout, stderr = run_command(f"git merge {branch_name} --no-edit")
    if success:
        print(f"✅ Successfully merged: {clean_name}")
        return True
    else:
        print(f"⚠️  Merge conflict in: {clean_name}")
        
        # Check if there are conflicts
        success, stdout, stderr = run_command("git status --porcelain | grep -q '^UU\\|^AA\\|^DD'")
        if success and stdout.strip():
            print(f"Resolving conflicts for: {clean_name}")
            
            # Resolve conflicts automatically where possible
            conflicted_files = run_command("git status --porcelain | grep '^UU\\|^AA\\|^DD' | cut -c4-")
            if conflicted_files[0]:
                files = conflicted_files[1].strip().split('\n')
                for file in files:
                    if file.strip():
                        print(f"Resolving conflict in: {file}")
                        
                        # Remove build artifacts
                        if any(artifact in file for artifact in ['tsconfig.tsbuildinfo', '.next/', 'dist/', 'node_modules/']):
                            run_command(f"git rm {file} 2>/dev/null || rm -f {file}")
                            continue
                        
                        # For package files, prefer main branch version
                        if file in ['package-lock.json', 'yarn.lock']:
                            run_command(f"git checkout --ours {file} 2>/dev/null || true")
                            run_command(f"git add {file} 2>/dev/null || true")
                            continue
                        
                        # For config files, prefer main branch version
                        if file in ['netlify.toml', 'next.config.js', 'vite.config.js']:
                            run_command(f"git checkout --ours {file} 2>/dev/null || true")
                            run_command(f"git add {file} 2>/dev/null || true")
                            continue
                        
                        # For other files, try to add
                        run_command(f"git add {file} 2>/dev/null || true")
                
                # Commit the resolved merge
                success, stdout, stderr = run_command("git commit --no-edit")
                if success:
                    print(f"✅ Resolved conflicts and merged: {clean_name}")
                    return True
                else:
                    print(f"❌ Failed to resolve conflicts for: {clean_name}")
                    run_command("git merge --abort 2>/dev/null || true")
                    return False
            else:
                print(f"❌ Failed to merge: {clean_name}")
                run_command("git merge --abort 2>/dev/null || true")
                return False
        else:
            print(f"❌ Failed to merge: {clean_name}")
            run_command("git merge --abort 2>/dev/null || true")
            return False

def main():
    print("🚀 Starting codex branch merge process...")
    
    # Ensure we're on main branch and up to date
    print("📋 Ensuring we're on main branch and up to date...")
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # Get codex branches
    print("📥 Fetching codex branches...")
    branches = get_codex_branches()
    
    if not branches:
        print("✅ No codex branches found!")
        return
    
    print(f"📊 Found {len(branches)} codex branches")
    
    # Process each branch
    merged_count = 0
    failed_count = 0
    
    for branch in branches:
        if merge_branch(branch):
            merged_count += 1
        else:
            failed_count += 1
        
        # Small delay between merges
        time.sleep(1)
    
    print(f"\n🎉 Codex branch merge process completed!")
    print(f"✅ Successfully merged: {merged_count}")
    print(f"❌ Failed to merge: {failed_count}")
    
    # Push all changes
    print("\n🚀 Pushing all changes to origin...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        print("✅ Successfully pushed all changes!")
    else:
        print(f"❌ Failed to push changes: {stderr}")

if __name__ == "__main__":
    main()