#!/usr/bin/env python3

import subprocess
import sys
import os
from datetime import datetime

class SimpleMergeResolver:
    def __init__(self):
        self.log_file = f"merge_log_{datetime.now().strftime('%Y%m%d_%H%M%S')}.log"
        
    def log(self, message):
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        log_message = f"[{timestamp}] {message}"
        print(log_message)
        
        with open(self.log_file, 'a') as f:
            f.write(log_message + '\n')
    
    def run_command(self, cmd, check=True):
        try:
            self.log(f"Executing: {cmd}")
            result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
            return result.stdout.strip(), result.stderr.strip()
        except subprocess.CalledProcessError as e:
            self.log(f"Command failed: {cmd}")
            self.log(f"Error: {e.stderr}")
            return e.stdout.strip(), e.stderr.strip()
    
    def resolve_merge_conflicts(self):
        self.log("🔧 Resolving merge conflicts...")
        
        # Get conflicted files
        stdout, stderr = self.run_command("git diff --name-only --diff-filter=U", check=False)
        
        if stdout:
            conflicted_files = stdout.split('\n')
            self.log(f"Found conflicts in: {conflicted_files}")
            
            # Resolve each conflicted file
            for file in conflicted_files:
                if file.strip():
                    self.log(f"Resolving: {file}")
                    # Take our version
                    self.run_command(f"git checkout --ours '{file}'", check=False)
                    self.run_command(f"git add '{file}'", check=False)
            
            # Commit resolved conflicts
            self.run_command("git commit -m 'Auto-resolve merge conflicts'", check=False)
            self.log("✅ Conflicts resolved")
    
    def merge_branches(self):
        self.log("🔄 Starting branch merge process...")
        
        # Switch to main and pull latest
        self.run_command("git checkout main")
        self.run_command("git pull origin main")
        
        # Get cursor branches
        stdout, stderr = self.run_command("git branch -r | grep 'origin/cursor/' | head -10")
        branches = stdout.split('\n')
        
        self.log(f"Found {len(branches)} branches to process")
        
        # Process each branch
        for branch in branches:
            if branch.strip():
                clean_branch = branch.strip().replace('origin/', '')
                self.log(f"🔄 Merging: {clean_branch}")
                
                # Try to merge
                stdout, stderr = self.run_command(f"git merge {branch.strip()} --no-edit", check=False)
                
                if "CONFLICT" in stderr or "conflict" in stderr:
                    self.log(f"⚠️  Conflicts in {clean_branch}")
                    self.resolve_merge_conflicts()
                else:
                    self.log(f"✅ Successfully merged {clean_branch}")
        
        # Push changes
        self.log("📤 Pushing changes...")
        self.run_command("git push origin main")
        
        self.log("🎉 Merge process completed!")
    
    def run(self):
        self.log("🚀 Starting Simple Merge Resolver...")
        
        if not os.path.exists(".git"):
            self.log("❌ Not in a git repository")
            sys.exit(1)
        
        self.merge_branches()
        self.log(f"📋 Log saved to: {self.log_file}")

if __name__ == "__main__":
    resolver = SimpleMergeResolver()
    resolver.run()