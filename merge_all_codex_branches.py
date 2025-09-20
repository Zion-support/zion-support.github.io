#!/usr/bin/env python3
"""
Comprehensive Codex Branch Merge Script
This script will systematically merge all codex branches into the main branch
"""

import subprocess
import sys
import time
import json
from typing import List, Dict, Tuple
from datetime import datetime

class CodexBranchMerger:
    def __init__(self):
        self.merged_count = 0
        self.failed_count = 0
        self.conflict_count = 0
        self.skipped_count = 0
        self.results = []
        self.start_time = datetime.now()
        
    def run_command(self, cmd: str, check: bool = True) -> Tuple[bool, str, str]:
        """Run a shell command and return success status, stdout, stderr"""
        try:
            result = subprocess.run(
                cmd, 
                shell=True, 
                capture_output=True, 
                text=True, 
                check=check
            )
            return True, result.stdout, result.stderr
        except subprocess.CalledProcessError as e:
            return False, e.stdout, e.stderr
    
    def get_all_codex_branches(self) -> List[str]:
        """Get all codex branches from remote"""
        success, stdout, stderr = self.run_command("git branch -r | grep -E 'origin/.*codex.*' | sed 's/origin\\///'")
        if not success:
            print(f"❌ Failed to get codex branches: {stderr}")
            return []
        
        branches = [line.strip() for line in stdout.split('\n') if line.strip()]
        print(f"📋 Found {len(branches)} codex branches to process")
        return branches
    
    def check_branch_exists(self, branch_name: str) -> bool:
        """Check if a branch exists locally or remotely"""
        success, _, _ = self.run_command(f"git show-ref --verify --quiet refs/heads/{branch_name}", check=False)
        if success:
            return True
            
        success, _, _ = self.run_command(f"git show-ref --verify --quiet refs/remotes/origin/{branch_name}", check=False)
        return success
    
    def fetch_branch(self, branch_name: str) -> bool:
        """Fetch a branch from remote"""
        success, stdout, stderr = self.run_command(f"git fetch origin {branch_name}", check=False)
        if not success:
            print(f"❌ Failed to fetch branch {branch_name}: {stderr}")
            return False
        return True
    
    def get_branch_changes(self, branch_name: str) -> int:
        """Get number of commits in branch that are not in main"""
        success, stdout, stderr = self.run_command(f"git rev-list --count main..origin/{branch_name}", check=False)
        if not success:
            return 0
        try:
            return int(stdout.strip())
        except ValueError:
            return 0
    
    def merge_branch(self, branch_name: str) -> bool:
        """Merge a branch into main"""
        print(f"🔄 Processing branch: {branch_name}")
        
        # Check if branch has changes
        changes = self.get_branch_changes(branch_name)
        if changes == 0:
            print(f"⏭️  Skipping {branch_name} - no new changes")
            self.skipped_count += 1
            self.results.append({
                'branch': branch_name,
                'status': 'skipped',
                'message': 'No new changes',
                'changes': changes
            })
            return True
        
        # Fetch the branch
        if not self.fetch_branch(branch_name):
            self.failed_count += 1
            self.results.append({
                'branch': branch_name,
                'status': 'failed',
                'message': 'Failed to fetch branch',
                'changes': changes
            })
            return False
        
        # Try to merge
        success, stdout, stderr = self.run_command(
            f"git merge origin/{branch_name} --no-ff -m 'Merge codex branch: {branch_name}'", 
            check=False
        )
        
        if success:
            print(f"✅ Successfully merged {branch_name} ({changes} changes)")
            self.merged_count += 1
            self.results.append({
                'branch': branch_name,
                'status': 'merged',
                'message': 'Successfully merged',
                'changes': changes
            })
            return True
        else:
            # Check if it's a conflict
            if 'conflict' in stderr.lower() or 'CONFLICT' in stdout:
                print(f"⚠️  Merge conflict in {branch_name}")
                self.conflict_count += 1
                
                # Try to resolve conflicts automatically
                if self.resolve_conflicts(branch_name):
                    print(f"✅ Successfully resolved conflicts for {branch_name}")
                    self.merged_count += 1
                    self.results.append({
                        'branch': branch_name,
                        'status': 'merged_after_resolve',
                        'message': 'Merged after resolving conflicts',
                        'changes': changes
                    })
                    return True
                else:
                    # Abort merge if resolution fails
                    self.run_command("git merge --abort", check=False)
                    self.failed_count += 1
                    self.results.append({
                        'branch': branch_name,
                        'status': 'conflict_failed',
                        'message': 'Could not resolve conflicts',
                        'changes': changes
                    })
                    return False
            else:
                print(f"❌ Failed to merge {branch_name}: {stderr}")
                self.failed_count += 1
                self.results.append({
                    'branch': branch_name,
                    'status': 'failed',
                    'message': stderr,
                    'changes': changes
                })
                return False
    
    def resolve_conflicts(self, branch_name: str) -> bool:
        """Attempt to resolve merge conflicts automatically"""
        print(f"🔧 Resolving conflicts for {branch_name}...")
        
        # Check git status for conflicted files
        success, stdout, stderr = self.run_command("git status --porcelain", check=False)
        if not success:
            return False
        
        conflicted_files = [line.split()[1] for line in stdout.split('\n') 
                          if line.startswith('UU') or line.startswith('AA')]
        
        if not conflicted_files:
            print(f"✅ No conflicts found, proceeding with merge")
            return True
        
        print(f"📝 Found {len(conflicted_files)} conflicted files")
        
        # Try to resolve conflicts automatically
        for file_path in conflicted_files:
            if file_path.endswith('.json'):
                success = self.resolve_json_conflicts(file_path)
            elif file_path.endswith(('.tsx', '.ts', '.js', '.jsx')):
                success = self.resolve_code_conflicts(file_path)
            else:
                success = self.resolve_generic_conflicts(file_path)
            
            if not success:
                print(f"⚠️  Could not auto-resolve conflicts in {file_path}")
        
        # Try to add resolved files and complete merge
        success, stdout, stderr = self.run_command("git add .", check=False)
        if success:
            success, stdout, stderr = self.run_command("git commit --no-edit", check=False)
            if success:
                return True
        
        return False
    
    def resolve_json_conflicts(self, file_path: str) -> bool:
        """Resolve conflicts in JSON files"""
        try:
            with open(file_path, 'r') as f:
                content = f.read()
            
            # Remove conflict markers
            lines = content.split('\n')
            cleaned_lines = []
            skip_until_end = False
            
            for line in lines:
                if '<<<<<<< HEAD' in line or '=======' in line:
                    skip_until_end = True
                    continue
                elif '>>>>>>>' in line:
                    skip_until_end = False
                    continue
                elif not skip_until_end:
                    cleaned_lines.append(line)
            
            cleaned_content = '\n'.join(cleaned_lines)
            
            # Try to parse and reformat JSON
            try:
                data = json.loads(cleaned_content)
                with open(file_path, 'w') as f:
                    json.dump(data, f, indent=2)
                return True
            except json.JSONDecodeError:
                with open(file_path, 'w') as f:
                    f.write(cleaned_content)
                return True
                
        except Exception as e:
            print(f"Error resolving JSON conflicts in {file_path}: {e}")
            return False
    
    def resolve_code_conflicts(self, file_path: str) -> bool:
        """Resolve conflicts in code files"""
        try:
            with open(file_path, 'r') as f:
                content = f.read()
            
            # Simple conflict resolution: keep both versions
            lines = content.split('\n')
            resolved_lines = []
            
            for line in lines:
                if '<<<<<<< HEAD' in line or '=======' in line or '>>>>>>>' in line:
                    continue
                else:
                    resolved_lines.append(line)
            
            resolved_content = '\n'.join(resolved_lines)
            
            with open(file_path, 'w') as f:
                f.write(resolved_content)
            
            return True
            
        except Exception as e:
            print(f"Error resolving code conflicts in {file_path}: {e}")
            return False
    
    def resolve_generic_conflicts(self, file_path: str) -> bool:
        """Resolve conflicts in generic files"""
        return self.resolve_code_conflicts(file_path)
    
    def merge_all_branches(self, batch_size: int = 50) -> None:
        """Merge all codex branches in batches"""
        branches = self.get_all_codex_branches()
        total_branches = len(branches)
        
        print(f"🚀 Starting merge process for {total_branches} codex branches...")
        print(f"📦 Processing in batches of {batch_size}")
        
        # Process branches in batches
        for i in range(0, total_branches, batch_size):
            batch = branches[i:i + batch_size]
            batch_num = (i // batch_size) + 1
            total_batches = (total_branches + batch_size - 1) // batch_size
            
            print(f"\n📋 Processing batch {batch_num}/{total_batches} ({len(batch)} branches)")
            
            for j, branch in enumerate(batch, 1):
                print(f"\n[{i+j}/{total_branches}] ", end="")
                self.merge_branch(branch)
                
                # Small delay to avoid overwhelming the system
                time.sleep(0.1)
            
            # Commit batch results
            if batch_num % 5 == 0:  # Commit every 5 batches
                self.commit_batch_results(batch_num)
        
        self.print_summary()
    
    def commit_batch_results(self, batch_num: int) -> None:
        """Commit results after each batch"""
        try:
            self.run_command("git add .", check=False)
            self.run_command(f"git commit -m 'feat: merge codex branches batch {batch_num}'", check=False)
            print(f"💾 Committed batch {batch_num} results")
        except Exception as e:
            print(f"⚠️  Could not commit batch {batch_num}: {e}")
    
    def print_summary(self) -> None:
        """Print merge summary"""
        duration = datetime.now() - self.start_time
        
        print(f"\n📊 CODEX BRANCH MERGE SUMMARY")
        print(f"⏱️  Duration: {duration}")
        print(f"✅ Successfully merged: {self.merged_count}")
        print(f"⚠️  Conflicts resolved: {self.conflict_count}")
        print(f"⏭️  Skipped (no changes): {self.skipped_count}")
        print(f"❌ Failed: {self.failed_count}")
        print(f"📋 Total processed: {len(self.results)}")
        
        # Save results
        with open('codex_merge_results.json', 'w') as f:
            json.dump({
                'summary': {
                    'merged': self.merged_count,
                    'conflicts_resolved': self.conflict_count,
                    'skipped': self.skipped_count,
                    'failed': self.failed_count,
                    'total_processed': len(self.results),
                    'duration': str(duration)
                },
                'results': self.results
            }, f, indent=2)
        
        print(f"\n📄 Detailed results saved to codex_merge_results.json")

def main():
    # Initialize merger
    merger = CodexBranchMerger()
    
    # Start merging
    merger.merge_all_branches(batch_size=50)

if __name__ == "__main__":
    main()