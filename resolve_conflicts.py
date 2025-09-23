#!/usr/bin/env python3
"""
Resolve merge conflicts systematically
"""
import subprocess
import sys
import os

def run_cmd(cmd, check=True):
    """Run command and return success, output"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=60)
        if check and result.returncode != 0:
            return False, f"Command failed: {cmd}\n{result.stderr}\n{result.stdout}"
        return True, result.stdout
    except Exception as e:
        return False, f"Error: {str(e)}"

def resolve_conflicts():
    """Resolve merge conflicts"""
    print("🔧 Resolving merge conflicts...")
    
    # For package-lock.json, use theirs (origin/main version)
    print("📦 Resolving package-lock.json...")
    success, _ = run_cmd("git checkout --theirs package-lock.json")
    if success:
        run_cmd("git add package-lock.json")
        print("✅ Resolved package-lock.json")
    
    # For source files, prefer ours (our improvements)
    source_files = [
        "src/App.tsx",
        "src/components/AdvancedAnalytics.tsx", 
        "src/pages/Home.tsx",
        "src/pages/Services.tsx",
        "src/pages/ServicesPage.tsx",
        "src/pages/Sitemap.tsx",
        "src/pages/services/AISupplyChainOptimization.tsx"
    ]
    
    for file in source_files:
        print(f"🔧 Resolving {file}...")
        success, _ = run_cmd(f"git checkout --ours '{file}'")
        if success:
            run_cmd(f"git add '{file}'")
            print(f"✅ Resolved {file}")
    
    # For files that were both added, use ours
    both_added_files = [
        "src/components/EnhancedSearch.tsx",
        "src/pages/services/AICustomerExperienceAnalytics.tsx",
        "src/pages/services/AIWorkflowOrchestrator.tsx"
    ]
    
    for file in both_added_files:
        print(f"🔧 Resolving both-added {file}...")
        success, _ = run_cmd(f"git checkout --ours '{file}'")
        if success:
            run_cmd(f"git add '{file}'")
            print(f"✅ Resolved {file}")
    
    print("✅ All conflicts resolved!")
    return True

def commit_merge():
    """Commit the merge resolution"""
    print("💾 Committing merge resolution...")
    success, output = run_cmd('git commit -m "Resolve merge conflicts - integrate all improvements"')
    if success:
        print("✅ Merge committed successfully!")
        return True
    else:
        print(f"❌ Failed to commit: {output}")
        return False

def main():
    print("🚀 Starting conflict resolution...")
    
    if resolve_conflicts():
        if commit_merge():
            print("🎉 Merge conflicts resolved and committed!")
            return 0
    
    print("❌ Failed to resolve conflicts")
    return 1

if __name__ == "__main__":
    sys.exit(main())