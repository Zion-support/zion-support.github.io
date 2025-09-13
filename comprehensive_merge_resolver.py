#!/usr/bin/env python3

import subprocess
import os
import sys
import json
import time

class GitMergeResolver:
    def __init__(self, repo_path="/workspace"):
        self.repo_path = repo_path
        self.timeout = 60  # Reduced timeout for faster operations
        
    def run_command(self, cmd):
        """Run a git command with error handling"""
        try:
            result = subprocess.run(
                cmd, 
                shell=True, 
                capture_output=True, 
                text=True, 
                timeout=self.timeout,
                cwd=self.repo_path
            )
            return result.returncode == 0, result.stdout, result.stderr
        except subprocess.TimeoutExpired:
            print(f"⏰ Command timed out: {cmd}")
            return False, "", "Timeout"
        except Exception as e:
            print(f"❌ Error running command: {cmd} - {e}")
            return False, "", str(e)
    
    def get_current_branch(self):
        """Get current branch name"""
        success, stdout, stderr = self.run_command("git branch --show-current")
        if success:
            return stdout.strip()
        return None
    
    def get_git_status(self):
        """Get git status"""
        success, stdout, stderr = self.run_command("git status --porcelain")
        if success:
            return stdout.strip()
        return ""
    
    def is_in_merge_state(self):
        """Check if we're in a merge state"""
        return os.path.exists(os.path.join(self.repo_path, ".git/MERGE_HEAD"))
    
    def resolve_conflicts_auto(self):
        """Automatically resolve merge conflicts"""
        print("🔧 Resolving merge conflicts...")
        
        if not self.is_in_merge_state():
            print("✅ Not in merge state")
            return True
        
        # Get conflicted files
        success, stdout, stderr = self.run_command("git diff --name-only --diff-filter=U")
        if not success:
            print(f"❌ Error getting conflicted files: {stderr}")
            return False
        
        conflicted_files = [f.strip() for f in stdout.split('\n') if f.strip()]
        
        if not conflicted_files:
            print("✅ No conflicted files found")
            # Try to commit the merge
            success, stdout, stderr = self.run_command("git commit -m 'Merge completed'")
            if success:
                print("✅ Merge completed successfully")
                return True
            else:
                print(f"❌ Error completing merge: {stderr}")
                return False
        
        print(f"🔍 Found {len(conflicted_files)} conflicted files")
        
        # Resolve each conflict
        for file in conflicted_files:
            print(f"🔧 Resolving: {file}")
            
            # For most conflicts, accept the main branch version (theirs)
            success, stdout, stderr = self.run_command(f"git checkout --theirs '{file}'")
            if success:
                success, stdout, stderr = self.run_command(f"git add '{file}'")
                if success:
                    print(f"✅ Resolved: {file}")
                else:
                    print(f"❌ Error adding {file}: {stderr}")
            else:
                print(f"❌ Error resolving {file}: {stderr}")
        
        # Commit the resolved conflicts
        success, stdout, stderr = self.run_command("git commit -m 'Resolved merge conflicts automatically'")
        if success:
            print("✅ Successfully resolved all merge conflicts")
            return True
        else:
            print(f"❌ Error committing resolved conflicts: {stderr}")
            return False
    
    def switch_to_main(self):
        """Switch to main branch"""
        print("🔄 Switching to main branch...")
        
        # Try to checkout main
        success, stdout, stderr = self.run_command("git checkout main")
        if not success:
            print("🆕 Creating main branch...")
            success, stdout, stderr = self.run_command("git checkout -b main")
            if not success:
                print(f"❌ Error creating main branch: {stderr}")
                return False
        
        # Pull latest changes
        self.run_command("git pull origin main")
        print("✅ Switched to main branch")
        return True
    
    def merge_branch(self, branch_name):
        """Merge a branch into main"""
        print(f"🔄 Merging {branch_name} into main...")
        
        success, stdout, stderr = self.run_command(f"git merge {branch_name}")
        if success:
            print(f"✅ Successfully merged {branch_name}")
            return True
        else:
            print(f"⚠️ Merge conflict with {branch_name}, resolving...")
            if self.resolve_conflicts_auto():
                print(f"✅ Resolved conflicts and merged {branch_name}")
                return True
            else:
                print(f"❌ Failed to resolve conflicts for {branch_name}")
                return False
    
    def get_remote_branches(self):
        """Get list of remote branches"""
        print("📡 Fetching remote branches...")
        self.run_command("git fetch origin")
        
        success, stdout, stderr = self.run_command("git branch -r")
        if not success:
            print(f"❌ Error fetching remote branches: {stderr}")
            return []
        
        branches = []
        for line in stdout.split('\n'):
            line = line.strip()
            if line and 'origin/main' not in line and 'origin/cursor' in line:
                branch = line.replace('origin/', '')
                branches.append(branch)
        
        print(f"📋 Found {len(branches)} remote branches to process")
        return branches
    
    def checkout_branch(self, branch_name):
        """Checkout a specific branch"""
        print(f"🔄 Checking out {branch_name}...")
        
        # Try to checkout existing branch
        success, stdout, stderr = self.run_command(f"git checkout {branch_name}")
        if not success:
            # Try to create and checkout from remote
            success, stdout, stderr = self.run_command(f"git checkout -b {branch_name} origin/{branch_name}")
            if not success:
                print(f"❌ Error checking out {branch_name}: {stderr}")
                return False
        
        print(f"✅ Checked out {branch_name}")
        return True
    
    def process_all_branches(self):
        """Process all remote branches and merge them"""
        print("🚀 Processing all branches...")
        
        # First, handle current branch
        current_branch = self.get_current_branch()
        if current_branch and current_branch != "main":
            print(f"📌 Processing current branch: {current_branch}")
            
            # Switch to main
            if not self.switch_to_main():
                return False
            
            # Merge current branch
            self.merge_branch(current_branch)
        
        # Get remote branches
        remote_branches = self.get_remote_branches()
        
        # Process each remote branch
        for branch in remote_branches[:10]:  # Limit to first 10 branches
            print(f"\n🔄 Processing branch: {branch}")
            
            # Checkout the branch
            if not self.checkout_branch(branch):
                continue
            
            # Switch back to main
            if not self.switch_to_main():
                continue
            
            # Merge the branch
            self.merge_branch(branch)
            
            # Small delay to prevent overwhelming the system
            time.sleep(1)
    
    def push_to_remote(self):
        """Push changes to remote repository"""
        print("📤 Pushing changes to remote...")
        
        success, stdout, stderr = self.run_command("git push origin main")
        if success:
            print("✅ Successfully pushed to remote")
            return True
        else:
            print(f"⚠️ Push failed: {stderr}")
            return False
    
    def run_comprehensive_merge(self):
        """Run the complete merge process"""
        print("🎯 Starting comprehensive merge process...")
        
        # Check if we're in a git repository
        if not os.path.exists(os.path.join(self.repo_path, ".git")):
            print("❌ Not in a git repository!")
            return False
        
        # Show initial status
        print(f"\n📊 Initial Status:")
        print(f"Current branch: {self.get_current_branch()}")
        print(f"Git status: {self.get_git_status()}")
        
        # Resolve any current conflicts
        if self.is_in_merge_state():
            self.resolve_conflicts_auto()
        
        # Process all branches
        self.process_all_branches()
        
        # Push to remote
        self.push_to_remote()
        
        # Show final status
        print(f"\n📊 Final Status:")
        print(f"Current branch: {self.get_current_branch()}")
        print(f"Git status: {self.get_git_status()}")
        
        print("🎉 Comprehensive merge process completed!")
        return True

def main():
    """Main execution function"""
    print("🚀 Git Merge Conflict Resolver")
    print("=" * 50)
    
    resolver = GitMergeResolver()
    resolver.run_comprehensive_merge()

if __name__ == "__main__":
    main()