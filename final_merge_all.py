#!/usr/bin/env python3
"""
Final comprehensive script to merge all remaining branches
"""

import subprocess
import sys
import os
import re
from typing import List, Dict, Tuple

class FinalMerger:
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
    
    def get_all_remaining_branches(self) -> List[str]:
        """Get all remaining branches that haven't been processed"""
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
                branches.append(branch_name)
        
        return branches
    
    def resolve_conflicts_final(self) -> bool:
        """Final conflict resolution strategy - accept our changes"""
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
        
        # Accept our changes for all conflicted files
        for file_path in conflicted_files:
            try:
                self.run_command(f"git checkout --ours {file_path}")
                self.run_command(f"git add {file_path}")
            except Exception as e:
                print(f"Warning: Error resolving {file_path}: {e}")
        
        # Commit the resolution
        success, _ = self.run_command("git commit -m 'Final auto-resolve merge conflicts'", check=False)
        return success
    
    def merge_branch_final(self, branch: str) -> bool:
        """Final merge attempt for a single branch"""
        print(f"Processing branch: {branch}")
        
        try:
            # Ensure we're on main
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
                    if self.resolve_conflicts_final():
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
    
    def process_all_remaining(self, batch_size: int = 20):
        """Process all remaining branches in large batches"""
        print("Starting final comprehensive merge process...")
        
        # Ensure we're on main and up to date
        success, _ = self.run_command(f"git checkout {self.main_branch}")
        if not success:
            print("Failed to checkout main branch")
            return
        
        success, _ = self.run_command("git pull origin main")
        if not success:
            print("Failed to pull latest main")
            return
        
        # Get all remaining branches
        branches = self.get_all_remaining_branches()
        print(f"Found {len(branches)} remaining branches to process")
        
        # Process in large batches
        for i in range(0, len(branches), batch_size):
            batch = branches[i:i + batch_size]
            print(f"\n--- Processing batch {i//batch_size + 1} ({len(batch)} branches) ---")
            
            for branch in batch:
                self.merge_branch_final(branch)
            
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
        print(f"\n=== FINAL COMPREHENSIVE SUMMARY ===")
        print(f"✓ Merges completed: {self.merges_completed}")
        print(f"✗ Failed merges: {self.failed_merges}")
        print(f"Total branches processed: {len(self.processed_branches)}")
        print(f"Success rate: {(self.merges_completed / max(len(self.processed_branches), 1)) * 100:.1f}%")

def main():
    merger = FinalMerger()
    merger.process_all_remaining(batch_size=20)

if __name__ == "__main__":
    main()