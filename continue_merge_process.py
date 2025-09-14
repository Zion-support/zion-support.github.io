#!/usr/bin/env python3
"""
Continue merging remaining branches with improved conflict resolution
"""

import subprocess
import sys
import os
import re
from typing import List, Dict, Tuple

class ContinueMerger:
    def __init__(self):
        self.main_branch = "main"
        self.merges_completed = 0
        self.failed_merges = 0
        self.processed_branches = set()
        
    def run_command(self, command: str, check: bool = True) -> Tuple[bool, str]:
        """Run a git command and return success status and output"""
        try:
            result = subprocess.run(
                command.split(), 
                capture_output=True, 
                text=True, 
                check=check
            )
            return True, result.stdout
        except subprocess.CalledProcessError as e:
            return False, e.stderr
    
    def get_remaining_branches(self, limit: int = 200) -> List[str]:
        """Get remaining branches that haven't been processed yet"""
        success, output = self.run_command("git branch -r --sort=-committerdate")
        if not success:
            print(f"Error getting branches: {output}")
            return []
        
        branches = []
        for line in output.split('\n'):
            line = line.strip()
            if (line and 
                not line.startswith('origin/HEAD') and 
                not line.startswith('origin/main') and
                'cursor/create-and-deploy-new-content' in line):
                branch_name = line.replace('origin/', '')
                if branch_name not in self.processed_branches:
                    branches.append(branch_name)
                if len(branches) >= limit:
                    break
        
        return branches
    
    def resolve_conflicts_advanced(self) -> bool:
        """Advanced conflict resolution strategy"""
        # Get conflicted files
        success, output = self.run_command("git status --porcelain")
        if not success:
            return False
        
        conflicted_files = []
        for line in output.split('\n'):
            if line.strip().startswith(('UU', 'AA', 'DD', 'AU', 'UA', 'DU', 'UD')):
                file_path = line.split()[1] if len(line.split()) > 1 else line[3:]
                if os.path.exists(file_path):
                    conflicted_files.append(file_path)
        
        if not conflicted_files:
            return True
        
        print(f"Resolving conflicts in {len(conflicted_files)} files...")
        
        # Strategy: Accept our changes for most files, but be smart about it
        for file_path in conflicted_files:
            try:
                # For content files, prefer our version
                if any(ext in file_path for ext in ['.md', '.yaml', '.yml', '.json']):
                    self.run_command(f"git checkout --ours {file_path}")
                # For component files, prefer our version
                elif 'components' in file_path or 'app' in file_path:
                    self.run_command(f"git checkout --ours {file_path}")
                # For other files, try to merge intelligently
                else:
                    # First try to resolve automatically
                    success, _ = self.run_command(f"git checkout --ours {file_path}")
                    if not success:
                        # If that fails, try the other side
                        self.run_command(f"git checkout --theirs {file_path}")
                
                self.run_command(f"git add {file_path}")
                
            except Exception as e:
                print(f"Warning: Error resolving {file_path}: {e}")
                # Fallback to our version
                self.run_command(f"git checkout --ours {file_path}")
                self.run_command(f"git add {file_path}")
        
        # Commit the resolution
        success, _ = self.run_command("git commit -m 'Auto-resolve merge conflicts with advanced strategy'", check=False)
        return success
    
    def merge_branch_safe(self, branch: str) -> bool:
        """Safely merge a single branch with comprehensive error handling"""
        print(f"Processing branch: {branch}")
        
        try:
            # Switch to main
            success, _ = self.run_command(f"git checkout {self.main_branch}")
            if not success:
                print(f"Failed to checkout main")
                return False
            
            # Create local branch if it doesn't exist
            success, _ = self.run_command(f"git checkout {branch}", check=False)
            if not success:
                success, _ = self.run_command(f"git checkout -b {branch} origin/{branch}")
                if not success:
                    print(f"Failed to create local branch {branch}")
                    return False
            
            # Switch back to main
            success, _ = self.run_command(f"git checkout {self.main_branch}")
            if not success:
                return False
            
            # Try to merge
            success, output = self.run_command(f"git merge {branch}", check=False)
            if success:
                print(f"✓ Successfully merged {branch}")
                self.merges_completed += 1
                self.processed_branches.add(branch)
                return True
            else:
                if "CONFLICT" in output:
                    print(f"⚠ Conflicts detected in {branch}, resolving...")
                    if self.resolve_conflicts_advanced():
                        # Try merge again
                        success, output = self.run_command(f"git merge {branch}", check=False)
                        if success:
                            print(f"✓ Successfully merged {branch} after conflict resolution")
                            self.merges_completed += 1
                            self.processed_branches.add(branch)
                            return True
                        else:
                            print(f"✗ Still failed to merge {branch}: {output}")
                            self.failed_merges += 1
                            return False
                    else:
                        print(f"✗ Failed to resolve conflicts for {branch}")
                        self.failed_merges += 1
                        return False
                else:
                    print(f"✗ Failed to merge {branch}: {output}")
                    self.failed_merges += 1
                    return False
                    
        except Exception as e:
            print(f"✗ Error processing {branch}: {e}")
            self.failed_merges += 1
            return False
    
    def process_remaining_branches(self, batch_size: int = 10):
        """Process remaining branches in batches"""
        print("Continuing merge process for remaining branches...")
        
        # Ensure we're on main and up to date
        success, _ = self.run_command(f"git checkout {self.main_branch}")
        if not success:
            print("Failed to checkout main branch")
            return
        
        success, _ = self.run_command("git pull origin main")
        if not success:
            print("Failed to pull latest main")
            return
        
        # Get remaining branches
        branches = self.get_remaining_branches(limit=500)
        print(f"Found {len(branches)} remaining branches to process")
        
        # Process in batches
        for i in range(0, len(branches), batch_size):
            batch = branches[i:i + batch_size]
            print(f"\n--- Processing batch {i//batch_size + 1} ({len(batch)} branches) ---")
            
            for branch in batch:
                self.merge_branch_safe(branch)
            
            # Push changes after each batch
            print("Pushing changes...")
            success, output = self.run_command("git push origin main")
            if success:
                print("✓ Successfully pushed changes")
            else:
                print(f"⚠ Failed to push changes: {output}")
                # Try to pull and rebase
                print("Attempting to pull and rebase...")
                success, _ = self.run_command("git pull origin main --rebase")
                if success:
                    success, _ = self.run_command("git push origin main")
                    if success:
                        print("✓ Successfully pushed after rebase")
                    else:
                        print("✗ Still failed to push after rebase")
                else:
                    print("✗ Failed to pull and rebase")
        
        # Print final summary
        print(f"\n=== FINAL SUMMARY ===")
        print(f"✓ Merges completed: {self.merges_completed}")
        print(f"✗ Failed merges: {self.failed_merges}")
        print(f"Total branches processed: {len(self.processed_branches)}")

def main():
    merger = ContinueMerger()
    merger.process_remaining_branches(batch_size=5)

if __name__ == "__main__":
    main()