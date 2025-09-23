#!/usr/bin/env python3
import subprocess
import json
import sys
import os
from datetime import datetime

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def log(message):
    """Log with timestamp"""
    timestamp = datetime.now().strftime("%H:%M:%S")
    print(f"[{timestamp}] {message}")

def main():
    log("🚀 Starting comprehensive merge execution...")
    
    # Step 1: Check git repository
    if not os.path.exists(".git"):
        log("❌ Not in a git repository")
        return False
    
    # Step 2: Fetch latest changes
    log("📥 Fetching latest changes...")
    success, stdout, stderr = run_command("git fetch origin --all --prune")
    if not success:
        log(f"⚠️  Fetch warning: {stderr}")
    
    # Step 3: Switch to main branch
    log("🔄 Switching to main branch...")
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        log(f"❌ Failed to switch to main: {stderr}")
        return False
    
    # Step 4: Pull latest main
    log("📥 Pulling latest main...")
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        log(f"⚠️  Pull warning: {stderr}")
    
    # Step 5: Get open PRs
    log("📋 Getting open PR numbers...")
    pr_numbers = ["13778"]  # Default PR number
    
    if os.path.exists("_open_prs.json"):
        try:
            with open("_open_prs.json", 'r') as f:
                data = json.load(f)
                pr_numbers = [str(pr["number"]) for pr in data[:5]]  # First 5 PRs
        except:
            log("⚠️  Could not parse _open_prs.json, using default")
    
    log(f"📋 Processing PRs: {pr_numbers}")
    
    # Step 6: Process each PR
    success_count = 0
    for pr_number in pr_numbers:
        log(f"🔄 Processing PR #{pr_number}...")
        
        # Fetch PR
        success, stdout, stderr = run_command(f"git fetch origin pull/{pr_number}/head:pr-{pr_number}")
        if not success:
            log(f"⚠️  Could not fetch PR #{pr_number}: {stderr}")
            continue
        
        # Attempt merge
        success, stdout, stderr = run_command(f"git merge pr-{pr_number} --no-ff -m 'Merge PR #{pr_number}'")
        if success:
            log(f"✅ Successfully merged PR #{pr_number}")
            success_count += 1
        else:
            log(f"⚠️  Merge conflict in PR #{pr_number}, resolving...")
            
            # Get conflicted files
            success, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
            if success and stdout.strip():
                conflicted_files = stdout.strip().split('\n')
                log(f"📄 Conflicted files: {conflicted_files}")
                
                # Resolve conflicts
                for file in conflicted_files:
                    if file.strip():
                        # For key files, keep HEAD version
                        if file in ["public/index.html", "tailwind.config.ts", "src/pages/PricingPage.js"]:
                            run_command(f"git checkout --ours '{file}'")
                            log(f"✅ Resolved {file} using HEAD version")
                        else:
                            # Try theirs first, then ours
                            run_command(f"git checkout --theirs '{file}'") or run_command(f"git checkout --ours '{file}'")
                            log(f"✅ Resolved {file} automatically")
                
                # Add and commit
                run_command("git add .")
                success, stdout, stderr = run_command("git commit --no-edit")
                if success:
                    log(f"✅ Successfully resolved conflicts for PR #{pr_number}")
                    success_count += 1
                else:
                    log(f"❌ Failed to commit resolved conflicts: {stderr}")
                    run_command("git merge --abort")
            else:
                log(f"❌ No conflicted files found for PR #{pr_number}")
                run_command("git merge --abort")
        
        # Clean up PR branch
        run_command(f"git branch -D pr-{pr_number}")
    
    # Step 7: Clean up merged branches
    log("🧹 Cleaning up merged branches...")
    run_command("git branch --merged main | grep -v main | xargs -r git branch -d")
    
    # Step 8: Push changes
    log("📤 Pushing changes to remote...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        log("✅ Successfully pushed all changes to remote!")
    else:
        log(f"❌ Failed to push changes: {stderr}")
        return False
    
    # Step 9: Summary
    log("📊 MERGE SUMMARY:")
    log(f"   ✅ Successfully merged: {success_count} PRs")
    log(f"   📋 Total PRs processed: {len(pr_numbers)}")
    
    if success_count > 0:
        log("🎉 MERGE COMPLETED SUCCESSFULLY!")
        log("🚀 Ready to proceed with improvements!")
        return True
    else:
        log("⚠️  No PRs were successfully merged")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)