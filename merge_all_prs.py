#!/usr/bin/env python3
"""
Comprehensive PR Merge Script
This script will systematically merge all open PRs into the main branch,
resolving conflicts and ensuring a clean merge process.
"""

import subprocess
import json
import sys
import os
from typing import List, Dict, Any

class PRMerger:
    def __init__(self):
        self.workspace_path = "/workspace"
        self.main_branch = "main"
        self.conflict_count = 0
        self.merged_count = 0
        self.failed_count = 0
        
    def run_command(self, command: str, cwd: str = None) -> tuple:
        """Run a shell command and return (success, output, error)"""
        try:
            result = subprocess.run(
                command,
                shell=True,
                cwd=cwd or self.workspace_path,
                capture_output=True,
                text=True,
                timeout=300
            )
            return result.returncode == 0, result.stdout, result.stderr
        except subprocess.TimeoutExpired:
            return False, "", "Command timed out"
        except Exception as e:
            return False, "", str(e)
    
    def get_open_prs(self) -> List[Dict[str, Any]]:
        """Get list of open PRs from the JSON file"""
        try:
            with open(f"{self.workspace_path}/_open_prs.json", 'r') as f:
                data = json.load(f)
            
            open_prs = []
            for pr in data:
                if pr.get('state') == 'open':
                    open_prs.append({
                        'number': pr.get('number'),
                        'title': pr.get('title', ''),
                        'head': pr.get('head', {}).get('ref', ''),
                        'base': pr.get('base', {}).get('ref', 'main')
                    })
            
            return open_prs
        except Exception as e:
            print(f"Error reading PR data: {e}")
            return []
    
    def checkout_branch(self, branch_name: str) -> bool:
        """Checkout a specific branch"""
        success, output, error = self.run_command(f"git checkout {branch_name}")
        if not success:
            print(f"Failed to checkout {branch_name}: {error}")
        return success
    
    def pull_latest_main(self) -> bool:
        """Pull the latest changes from main branch"""
        print("Pulling latest changes from main...")
        success, output, error = self.run_command("git checkout main")
        if not success:
            return False
        
        success, output, error = self.run_command("git pull origin main")
        if not success:
            print(f"Failed to pull main: {error}")
        return success
    
    def merge_branch(self, branch_name: str) -> bool:
        """Merge a branch into main"""
        print(f"Attempting to merge {branch_name}...")
        
        # First, try to merge without conflicts
        success, output, error = self.run_command(f"git merge origin/{branch_name}")
        
        if success:
            print(f"✅ Successfully merged {branch_name}")
            self.merged_count += 1
            return True
        else:
            # Check if it's a conflict
            if "CONFLICT" in output or "conflict" in error.lower():
                print(f"⚠️  Merge conflict in {branch_name}")
                return self.resolve_conflicts(branch_name)
            else:
                print(f"❌ Failed to merge {branch_name}: {error}")
                self.failed_count += 1
                return False
    
    def resolve_conflicts(self, branch_name: str) -> bool:
        """Resolve merge conflicts for a branch"""
        print(f"Resolving conflicts for {branch_name}...")
        self.conflict_count += 1
        
        # Get list of conflicted files
        success, output, error = self.run_command("git status --porcelain")
        if not success:
            print(f"Failed to get git status: {error}")
            return False
        
        conflicted_files = []
        for line in output.split('\n'):
            if line.startswith('UU') or line.startswith('AA') or line.startswith('DD'):
                file_path = line[3:].strip()
                conflicted_files.append(file_path)
        
        print(f"Found {len(conflicted_files)} conflicted files")
        
        # Resolve conflicts by accepting incoming changes for most files
        for file_path in conflicted_files:
            if file_path:
                print(f"Resolving conflict in {file_path}")
                
                # Try to resolve automatically
                success, output, error = self.run_command(f"git checkout --theirs {file_path}")
                if success:
                    self.run_command(f"git add {file_path}")
                else:
                    # If automatic resolution fails, try manual resolution
                    print(f"Manual resolution needed for {file_path}")
                    # For now, accept the current version
                    success, output, error = self.run_command(f"git checkout --ours {file_path}")
                    if success:
                        self.run_command(f"git add {file_path}")
        
        # Commit the resolved conflicts
        success, output, error = self.run_command(
            f"git commit -m 'resolve: Merge conflicts resolved for {branch_name}'"
        )
        
        if success:
            print(f"✅ Successfully resolved conflicts for {branch_name}")
            self.merged_count += 1
            return True
        else:
            print(f"❌ Failed to resolve conflicts for {branch_name}: {error}")
            self.failed_count += 1
            return False
    
    def cleanup_branch(self, branch_name: str):
        """Clean up a merged branch"""
        print(f"Cleaning up branch {branch_name}...")
        self.run_command(f"git branch -d {branch_name}")
        self.run_command(f"git push origin --delete {branch_name}")
    
    def merge_all_prs(self):
        """Main function to merge all open PRs"""
        print("🚀 Starting comprehensive PR merge process...")
        
        # Pull latest main first
        if not self.pull_latest_main():
            print("❌ Failed to pull latest main. Aborting.")
            return False
        
        # Get open PRs
        open_prs = self.get_open_prs()
        print(f"Found {len(open_prs)} open PRs to merge")
        
        if not open_prs:
            print("No open PRs found.")
            return True
        
        # Sort PRs by number (oldest first)
        open_prs.sort(key=lambda x: x['number'])
        
        # Process each PR
        for i, pr in enumerate(open_prs, 1):
            print(f"\n📋 Processing PR #{pr['number']}: {pr['title']} ({i}/{len(open_prs)})")
            print(f"Branch: {pr['head']}")
            
            # Ensure we're on main
            if not self.checkout_branch("main"):
                print("❌ Failed to checkout main. Skipping this PR.")
                continue
            
            # Merge the branch
            if self.merge_branch(pr['head']):
                print(f"✅ Successfully processed PR #{pr['number']}")
            else:
                print(f"❌ Failed to process PR #{pr['number']}")
        
        # Push all changes
        print("\n📤 Pushing all changes to main...")
        success, output, error = self.run_command("git push origin main")
        if success:
            print("✅ Successfully pushed all changes")
        else:
            print(f"❌ Failed to push changes: {error}")
        
        # Print summary
        print(f"\n📊 Merge Summary:")
        print(f"   Total PRs processed: {len(open_prs)}")
        print(f"   Successfully merged: {self.merged_count}")
        print(f"   Conflicts resolved: {self.conflict_count}")
        print(f"   Failed merges: {self.failed_count}")
        
        return self.failed_count == 0

def main():
    """Main entry point"""
    merger = PRMerger()
    
    try:
        success = merger.merge_all_prs()
        if success:
            print("\n🎉 All PRs successfully merged!")
            sys.exit(0)
        else:
            print("\n⚠️  Some PRs failed to merge. Check the logs above.")
            sys.exit(1)
    except KeyboardInterrupt:
        print("\n⏹️  Process interrupted by user.")
        sys.exit(1)
    except Exception as e:
        print(f"\n💥 Unexpected error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()