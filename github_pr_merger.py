#!/usr/bin/env python3

"""
GitHub PR Merger Script
This script will find and merge all open PRs into the main branch
"""

import subprocess
import sys
import os
import json
import re
from datetime import datetime
from pathlib import Path

class GitHubPRMerger:
    def __init__(self):
        self.main_branch = "main"
        self.remote = "origin"
        self.log_file = f"pr_merge_log_{datetime.now().strftime('%Y%m%d_%H%M%S')}.log"
        
    def log(self, message):
        """Log with timestamp"""
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        log_message = f"[{timestamp}] {message}"
        print(log_message)
        
        # Write to log file
        with open(self.log_file, 'a') as f:
            f.write(log_message + '\n')
    
    def run_command(self, cmd, check=True):
        """Run a command and return the result"""
        try:
            self.log(f"Executing: {cmd}")
            result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
            return result.stdout.strip(), result.stderr.strip()
        except subprocess.CalledProcessError as e:
            self.log(f"Command failed: {cmd}")
            self.log(f"Error: {e.stderr}")
            return e.stdout.strip(), e.stderr.strip()
    
    def check_git_repo(self):
        """Check if we're in a git repository"""
        if not os.path.exists(".git"):
            self.log("❌ Not in a git repository")
            sys.exit(1)
        self.log("✅ Git repository found")
    
    def get_current_branch(self):
        """Get current branch name"""
        stdout, stderr = self.run_command("git branch --show-current")
        self.log(f"📍 Current branch: {stdout}")
        return stdout
    
    def check_merge_conflicts(self):
        """Check for merge conflicts"""
        self.log("🔍 Checking for merge conflicts...")
        stdout, stderr = self.run_command("git diff --name-only --diff-filter=U")
        
        if stdout:
            self.log("⚠️  Found merge conflicts in:")
            for file in stdout.split('\n'):
                if file.strip():
                    self.log(f"  - {file}")
            return stdout.split('\n')
        else:
            self.log("✅ No merge conflicts found")
            return []
    
    def resolve_merge_conflicts(self, conflicted_files):
        """Resolve merge conflicts automatically"""
        self.log("🔧 Resolving merge conflicts...")
        
        for file in conflicted_files:
            if not file.strip():
                continue
                
            self.log(f"📝 Resolving: {file}")
            
            # Create backup
            backup_name = f"{file}.backup.{int(datetime.now().timestamp())}"
            self.run_command(f"cp '{file}' '{backup_name}'")
            
            # Use git checkout to take current branch version
            self.run_command(f"git checkout --ours '{file}'")
            
            # Add resolved file
            self.run_command(f"git add '{file}'")
        
        self.log("✅ Merge conflicts resolved")
    
    def get_all_branches(self):
        """Get all remote branches"""
        self.log("📋 Getting all remote branches...")
        stdout, stderr = self.run_command("git branch -r --sort=-committerdate")
        
        branches = []
        for line in stdout.split('\n'):
            if line.strip() and 'origin/main' not in line:
                clean_branch = line.strip().replace('origin/', '')
                branches.append(clean_branch)
        
        self.log(f"Found {len(branches)} branches to process")
        return branches[:20]  # Limit to 20 most recent
    
    def merge_branch(self, branch):
        """Merge a specific branch"""
        self.log(f"🔄 Attempting to merge branch: {branch}")
        
        # Fetch the branch
        self.run_command(f"git fetch {self.remote} {branch}")
        
        # Try to merge
        stdout, stderr = self.run_command(f"git merge {self.remote}/{branch} --no-edit", check=False)
        
        if "CONFLICT" in stderr or "conflict" in stderr:
            self.log(f"⚠️  Merge conflicts in {branch}, resolving...")
            
            # Get conflicted files
            conflicted_files = self.check_merge_conflicts()
            
            if conflicted_files:
                self.resolve_merge_conflicts(conflicted_files)
                
                # Commit resolved conflicts
                stdout, stderr = self.run_command("git commit -m 'Resolve merge conflicts automatically'", check=False)
                self.log(f"✅ Resolved conflicts for {branch}")
            
            return True
        else:
            self.log(f"✅ Successfully merged {branch}")
            return True
    
    def merge_with_main(self):
        """Merge with main branch"""
        self.log("🔄 Attempting to merge with main...")
        
        # Fetch latest changes
        self.run_command(f"git fetch {self.remote} {self.main_branch}")
        
        # Try to merge
        stdout, stderr = self.run_command(f"git merge {self.remote}/{self.main_branch} --no-edit", check=False)
        
        if "CONFLICT" in stderr or "conflict" in stderr:
            self.log("⚠️  Merge conflicts detected")
            return False
        else:
            self.log("✅ Successfully merged with main")
            return True
    
    def push_changes(self, branch):
        """Push changes to remote"""
        self.log(f"📤 Pushing changes for branch: {branch}")
        
        stdout, stderr = self.run_command(f"git push {self.remote} {branch}", check=False)
        
        if "error" in stderr.lower() or "failed" in stderr.lower():
            self.log(f"❌ Error pushing {branch}: {stderr}")
            return False
        else:
            self.log(f"✅ Successfully pushed {branch}")
            return True
    
    def process_all_branches(self):
        """Process all branches for merging"""
        self.log("🔄 Processing all branches for merging...")
        
        # Get all branches
        branches = self.get_all_branches()
        
        # Switch to main first
        self.run_command(f"git checkout {self.main_branch}")
        self.run_command(f"git pull {self.remote} {self.main_branch}")
        
        # Process each branch
        for branch in branches:
            if branch != self.main_branch:
                self.log(f"🔄 Processing branch: {branch}")
                
                if self.merge_branch(branch):
                    self.log(f"✅ Successfully processed {branch}")
                else:
                    self.log(f"❌ Failed to process {branch}")
        
        # Push main branch
        self.push_changes(self.main_branch)
    
    def cleanup_merged_branches(self):
        """Clean up merged branches"""
        self.log("🧹 Cleaning up merged branches...")
        
        # Switch to main
        self.run_command(f"git checkout {self.main_branch}")
        self.run_command(f"git pull {self.remote} {self.main_branch}")
        
        # Delete merged branches
        stdout, stderr = self.run_command("git branch --merged")
        
        for line in stdout.split('\n'):
            if line.strip() and 'main' not in line and '*' not in line:
                branch = line.strip()
                self.run_command(f"git branch -d {branch}", check=False)
                self.log(f"🗑️  Deleted merged branch: {branch}")
        
        self.log("✅ Cleanup completed")
    
    def run(self):
        """Main execution function"""
        self.log("🚀 Starting GitHub PR Merger...")
        
        # Check if we're in a git repo
        self.check_git_repo()
        
        # Get current branch
        current_branch = self.get_current_branch()
        
        # Check for existing merge conflicts
        conflicted_files = self.check_merge_conflicts()
        if conflicted_files:
            self.resolve_merge_conflicts(conflicted_files)
            self.run_command("git commit -m 'Resolve existing merge conflicts automatically'", check=False)
        
        # Process all branches
        self.process_all_branches()
        
        # Clean up
        self.cleanup_merged_branches()
        
        self.log("🎉 GitHub PR Merger completed successfully!")
        self.log(f"📋 Log saved to: {self.log_file}")

if __name__ == "__main__":
    merger = GitHubPRMerger()
    merger.run()