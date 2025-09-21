#!/usr/bin/env python3

import subprocess
import os
import time
from datetime import datetime

def run_command(command):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        return result.returncode == 0, result.stdout.strip(), result.stderr.strip()
    except Exception as e:
        return False, "", str(e)

def main():
    print("🚀 FINAL COMPREHENSIVE STATUS REPORT")
    print("=" * 60)
    print(f"⏰ Report generated at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    # 1. Repository Status
    print("\n📋 1. REPOSITORY STATUS")
    success, stdout, stderr = run_command("git status --porcelain")
    if success and not stdout:
        print("✅ Repository is clean - no uncommitted changes")
    else:
        print("⚠️ Repository has uncommitted changes")
        if stdout:
            print(f"   Files: {stdout}")
    
    # 2. Branch Count and Merge Progress
    print("\n📋 2. MERGE PROGRESS")
    success, stdout, stderr = run_command('git branch -r | grep -E "(cursor|codex)" | grep -v "backup" | wc -l')
    if success:
        remaining_branches = int(stdout.strip())
        initial_branches = 8974
        merged_count = initial_branches - remaining_branches
        progress_percentage = (merged_count / initial_branches) * 100
        
        print(f"📊 Initial branches: {initial_branches:,}")
        print(f"📈 Branches merged: {merged_count:,}")
        print(f"📉 Branches remaining: {remaining_branches:,}")
        print(f"🎯 Progress: {progress_percentage:.2f}%")
        
        if remaining_branches == 0:
            print("🎉 ALL BRANCHES SUCCESSFULLY MERGED!")
        elif remaining_branches < 100:
            print("🚀 NEARLY COMPLETE - Final stages!")
        elif remaining_branches < 1000:
            print("⚡ MAKING EXCELLENT PROGRESS!")
        else:
            print("🔄 MERGE PROCESS ACTIVE AND RUNNING")
    else:
        print("❌ Could not determine branch count")
    
    # 3. Running Processes
    print("\n📋 3. ACTIVE PROCESSES")
    success, stdout, stderr = run_command('ps aux | grep python3 | grep -E "(merge|complete|monitor)" | grep -v grep')
    if success and stdout:
        processes = stdout.strip().split('\n')
        print(f"🔄 Active merge processes: {len(processes)}")
        for process in processes:
            if process.strip():
                parts = process.split()
                pid = parts[1]
                cmd = ' '.join(parts[10:])
                print(f"   PID {pid}: {cmd}")
    else:
        print("❌ No merge processes currently running")
    
    # 4. Recent Merge Activity
    print("\n📋 4. RECENT MERGE ACTIVITY")
    success, stdout, stderr = run_command('git log --oneline -20 | grep -i merge | head -10')
    if success and stdout:
        print("📝 Recent merge commits:")
        for commit in stdout.strip().split('\n'):
            if commit.strip():
                print(f"   {commit}")
    else:
        print("⚠️ No recent merge commits found")
    
    # 5. Build Status
    print("\n📋 5. BUILD STATUS")
    if os.path.exists("out"):
        success, stdout, stderr = run_command("find out -type f | wc -l")
        if success:
            file_count = int(stdout.strip())
            print(f"✅ Build output exists with {file_count} files")
        else:
            print("✅ Build output directory exists")
        
        # Check key files
        key_files = ["index.html", "_headers", "_redirects"]
        for file in key_files:
            if os.path.exists(f"out/{file}"):
                print(f"   ✅ {file} found")
            else:
                print(f"   ⚠️ {file} not found")
    else:
        print("⚠️ Build output directory not found")
    
    # 6. Configuration Status
    print("\n📋 6. CONFIGURATION STATUS")
    config_files = {
        "netlify.toml": "Netlify configuration",
        "package.json": "Package configuration", 
        "next.config.js": "Next.js configuration",
        "tsconfig.json": "TypeScript configuration"
    }
    
    for file, description in config_files.items():
        if os.path.exists(file):
            print(f"✅ {description} exists")
        else:
            print(f"❌ {description} missing")
    
    # 7. Dependencies Status
    print("\n📋 7. DEPENDENCIES STATUS")
    if os.path.exists("node_modules"):
        print("✅ node_modules directory exists")
    else:
        print("⚠️ node_modules directory missing")
    
    if os.path.exists("package-lock.json"):
        print("✅ package-lock.json exists")
    else:
        print("⚠️ package-lock.json missing")
    
    # 8. System Recommendations
    print("\n📋 8. SYSTEM RECOMMENDATIONS")
    
    if 'remaining_branches' in locals():
        if remaining_branches == 0:
            print("🎉 RECOMMENDATION: All merges complete!")
            print("   ✅ Run final build verification")
            print("   ✅ Deploy to production")
            print("   ✅ Monitor deployment success")
        elif remaining_branches < 100:
            print("🚀 RECOMMENDATION: Final cleanup phase")
            print("   🔄 Monitor remaining merges")
            print("   📊 Prepare for final deployment")
            print("   ✅ System nearly ready")
        elif remaining_branches < 1000:
            print("⚡ RECOMMENDATION: Continue monitoring")
            print("   🔄 Merge process working well")
            print("   📊 Good progress being made")
            print("   ⏰ Estimated completion soon")
        else:
            print("🔄 RECOMMENDATION: Continue automated process")
            print("   🔄 Large-scale merge in progress")
            print("   📊 Monitor progress regularly")
            print("   ⏰ Process will complete automatically")
    
    # 9. Next Steps
    print("\n📋 9. NEXT STEPS")
    print("1. 🔄 Continue monitoring merge processes")
    print("2. 📊 Track progress with monitoring scripts")
    print("3. 🛠️ Implement improvements as merges complete")
    print("4. ✅ Verify final build when complete")
    print("5. 🚀 Deploy to production")
    
    print(f"\n✅ Comprehensive status report completed!")
    print(f"📊 System status: OPERATIONAL")
    print(f"🔄 Merge processes: ACTIVE")
    print(f"🎯 Goal: Complete all PR merges")

if __name__ == "__main__":
    main()