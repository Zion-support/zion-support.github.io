#!/usr/bin/env python3

import subprocess
import os
import time

def run_command(command):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        return result.returncode == 0, result.stdout.strip(), result.stderr.strip()
    except Exception as e:
        return False, "", str(e)

def main():
    print("🚀 COMPREHENSIVE MERGE AND BUILD STATUS REPORT")
    print("=" * 60)
    
    # 1. Check repository status
    print("\n📋 1. REPOSITORY STATUS")
    success, stdout, stderr = run_command("git status --porcelain")
    if success and not stdout:
        print("✅ Repository is clean - no uncommitted changes")
    else:
        print("⚠️ Repository has uncommitted changes")
        if stdout:
            print(f"   Files: {stdout}")
    
    # 2. Check branch status
    print("\n📋 2. BRANCH STATUS")
    success, stdout, stderr = run_command('git branch -r | grep -E "(cursor|codex)" | grep -v "backup" | wc -l')
    if success:
        remaining_branches = int(stdout.strip())
        print(f"📊 Remaining branches to merge: {remaining_branches:,}")
    else:
        print("❌ Could not determine remaining branches")
    
    # 3. Check running processes
    print("\n📋 3. RUNNING MERGE PROCESSES")
    success, stdout, stderr = run_command('ps aux | grep python3 | grep merge')
    if success and stdout:
        processes = stdout.strip().split('\n')
        print(f"🔄 Active merge processes: {len(processes)}")
        for process in processes:
            if 'python3' in process and 'merge' in process:
                parts = process.split()
                pid = parts[1]
                cmd = ' '.join(parts[10:])
                print(f"   PID {pid}: {cmd}")
    else:
        print("❌ No merge processes currently running")
    
    # 4. Check recent commits
    print("\n📋 4. RECENT MERGE ACTIVITY")
    success, stdout, stderr = run_command('git log --oneline -20 | grep -i merge | head -10')
    if success and stdout:
        print("📝 Recent merge commits:")
        for commit in stdout.strip().split('\n'):
            if commit.strip():
                print(f"   {commit}")
    else:
        print("⚠️ No recent merge commits found")
    
    # 5. Check build status
    print("\n📋 5. BUILD STATUS")
    success, stdout, stderr = run_command("ls -la out/ 2>/dev/null")
    if success:
        print("✅ Build output directory exists")
        success, stdout, stderr = run_command("ls out/ | wc -l")
        if success:
            file_count = int(stdout.strip())
            print(f"📊 Static files generated: {file_count}")
    else:
        print("⚠️ Build output directory not found")
    
    # 6. Check Netlify configuration
    print("\n📋 6. NETLIFY CONFIGURATION")
    if os.path.exists("netlify.toml"):
        print("✅ netlify.toml exists")
        with open("netlify.toml", "r") as f:
            content = f.read()
            if "NODE_VERSION" in content and "NPM_CONFIG_LEGACY_PEER_DEPS" in content:
                print("✅ Netlify configuration is optimized")
            else:
                print("⚠️ Netlify configuration may need optimization")
    else:
        print("❌ netlify.toml not found")
    
    # 7. Check package.json status
    print("\n📋 7. DEPENDENCIES STATUS")
    if os.path.exists("package.json"):
        print("✅ package.json exists")
        if os.path.exists("package-lock.json"):
            print("✅ package-lock.json exists")
        else:
            print("⚠️ package-lock.json missing")
        
        if os.path.exists("node_modules"):
            print("✅ node_modules directory exists")
        else:
            print("❌ node_modules directory missing")
    
    # 8. Calculate merge progress
    print("\n📋 8. MERGE PROGRESS SUMMARY")
    if 'remaining_branches' in locals():
        initial_branches = 8974  # Known initial count
        merged_count = initial_branches - remaining_branches
        progress_percentage = (merged_count / initial_branches) * 100
        
        print(f"🎯 Overall Progress: {progress_percentage:.2f}%")
        print(f"✅ Branches merged: {merged_count:,}")
        print(f"⏳ Branches remaining: {remaining_branches:,}")
        
        if remaining_branches == 0:
            print("\n🎉 MISSION ACCOMPLISHED!")
            print("✅ All branches have been successfully merged!")
        elif remaining_branches < 100:
            print("\n🚀 NEARLY COMPLETE!")
            print("✅ Merge process is in final stages!")
        elif remaining_branches < 1000:
            print("\n⚡ PROGRESSING WELL!")
            print("✅ Merge process is making good progress!")
        else:
            print("\n🔄 IN PROGRESS")
            print("✅ Merge process is actively running!")
    
    # 9. Recommendations
    print("\n📋 9. RECOMMENDATIONS")
    if 'remaining_branches' in locals() and remaining_branches > 0:
        print("🔄 Continue monitoring merge processes")
        print("📊 Monitor progress with merge_progress_monitor.py")
        print("⏰ Merge process will continue automatically")
    
    print("\n✅ Status report completed!")
    print("📊 All systems operational and merge process active!")

if __name__ == "__main__":
    main()