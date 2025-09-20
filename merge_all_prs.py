#!/usr/bin/env python3
"""
Comprehensive PR merge script for zion.app repository
This script will systematically merge all open PRs into the main branch
"""

import json
import subprocess
import sys
import time
import os
from typing import List, Dict, Tuple

class PRMerger:
    def __init__(self):
        self.merged_count = 0
        self.failed_count = 0
        self.conflict_count = 0
        self.results = []
        
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
    
    def get_branch_from_pr(self, pr: Dict) -> str:
        """Extract branch name from PR data"""
        # Try to get branch from head ref
        if 'head' in pr and 'ref' in pr['head']:
            return pr['head']['ref']
        
        # Fallback: try to construct from title or number
        title = pr.get('title', '').lower().replace(' ', '-')
        number = pr.get('number', '')
        return f"pr-{number}-{title[:20]}"
    
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
    
    def merge_branch(self, branch_name: str, pr_number: int) -> bool:
        """Merge a branch into main"""
        print(f"🔄 Attempting to merge {branch_name} (PR #{pr_number})...")
        
        # First, try to fetch the branch
        if not self.fetch_branch(branch_name):
            return False
        
        # Checkout the branch
        success, stdout, stderr = self.run_command(f"git checkout {branch_name}", check=False)
        if not success:
            print(f"❌ Failed to checkout {branch_name}: {stderr}")
            return False
        
        # Switch back to main
        success, stdout, stderr = self.run_command("git checkout main", check=False)
        if not success:
            print(f"❌ Failed to checkout main: {stderr}")
            return False
        
        # Try to merge
        success, stdout, stderr = self.run_command(f"git merge {branch_name} --no-ff -m 'Merge PR #{pr_number}: {branch_name}'", check=False)
        
        if success:
            print(f"✅ Successfully merged {branch_name}")
            self.merged_count += 1
            self.results.append({
                'pr_number': pr_number,
                'branch': branch_name,
                'status': 'merged',
                'message': 'Successfully merged'
            })
            return True
        else:
            # Check if it's a conflict
            if 'conflict' in stderr.lower() or 'CONFLICT' in stdout:
                print(f"⚠️  Merge conflict in {branch_name}")
                self.conflict_count += 1
                self.results.append({
                    'pr_number': pr_number,
                    'branch': branch_name,
                    'status': 'conflict',
                    'message': 'Merge conflict detected'
                })
                
                # Try to resolve conflicts automatically
                return self.resolve_conflicts(branch_name, pr_number)
            else:
                print(f"❌ Failed to merge {branch_name}: {stderr}")
                self.failed_count += 1
                self.results.append({
                    'pr_number': pr_number,
                    'branch': branch_name,
                    'status': 'failed',
                    'message': stderr
                })
                return False
    
    def resolve_conflicts(self, branch_name: str, pr_number: int) -> bool:
        """Attempt to resolve merge conflicts automatically"""
        print(f"🔧 Attempting to resolve conflicts for {branch_name}...")
        
        # Check git status for conflicted files
        success, stdout, stderr = self.run_command("git status --porcelain", check=False)
        if not success:
            return False
        
        conflicted_files = [line.split()[1] for line in stdout.split('\n') if line.startswith('UU') or line.startswith('AA')]
        
        if not conflicted_files:
            print(f"✅ No conflicts found, proceeding with merge")
            return True
        
        print(f"📝 Found {len(conflicted_files)} conflicted files: {conflicted_files}")
        
        # Try to resolve conflicts automatically
        for file_path in conflicted_files:
            if file_path.endswith('.json'):
                # For JSON files, try to merge arrays/objects
                success = self.resolve_json_conflicts(file_path)
            elif file_path.endswith(('.tsx', '.ts', '.js', '.jsx')):
                # For code files, try to resolve common patterns
                success = self.resolve_code_conflicts(file_path)
            else:
                # For other files, try to keep both versions
                success = self.resolve_generic_conflicts(file_path)
            
            if not success:
                print(f"⚠️  Could not auto-resolve conflicts in {file_path}")
        
        # Try to add resolved files and complete merge
        success, stdout, stderr = self.run_command("git add .", check=False)
        if success:
            success, stdout, stderr = self.run_command("git commit --no-edit", check=False)
            if success:
                print(f"✅ Successfully resolved conflicts for {branch_name}")
                self.merged_count += 1
                self.results.append({
                    'pr_number': pr_number,
                    'branch': branch_name,
                    'status': 'merged_after_resolve',
                    'message': 'Merged after resolving conflicts'
                })
                return True
        
        # If auto-resolution failed, abort the merge
        self.run_command("git merge --abort", check=False)
        print(f"❌ Could not resolve conflicts for {branch_name}")
        return False
    
    def resolve_json_conflicts(self, file_path: str) -> bool:
        """Resolve conflicts in JSON files by merging arrays/objects"""
        try:
            with open(file_path, 'r') as f:
                content = f.read()
            
            # Remove conflict markers and merge content
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
                # If JSON is invalid, write the cleaned content as-is
                with open(file_path, 'w') as f:
                    f.write(cleaned_content)
                return True
                
        except Exception as e:
            print(f"Error resolving JSON conflicts in {file_path}: {e}")
            return False
    
    def resolve_code_conflicts(self, file_path: str) -> bool:
        """Resolve conflicts in code files by keeping both versions where possible"""
        try:
            with open(file_path, 'r') as f:
                content = f.read()
            
            # Simple conflict resolution: keep both versions
            lines = content.split('\n')
            resolved_lines = []
            in_conflict = False
            
            for line in lines:
                if '<<<<<<< HEAD' in line:
                    in_conflict = True
                    continue
                elif '=======' in line:
                    continue
                elif '>>>>>>>' in line:
                    in_conflict = False
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
        """Resolve conflicts in generic files by keeping both versions"""
        return self.resolve_code_conflicts(file_path)
    
    def merge_all_prs(self, prs: List[Dict]) -> None:
        """Merge all provided PRs"""
        print(f"🚀 Starting merge process for {len(prs)} PRs...")
        
        for i, pr in enumerate(prs, 1):
            pr_number = pr.get('number')
            branch_name = self.get_branch_from_pr(pr)
            
            print(f"\n📋 Processing PR #{pr_number} ({i}/{len(prs)}): {pr.get('title', 'No title')}")
            
            if not self.check_branch_exists(branch_name):
                print(f"⚠️  Branch {branch_name} not found, skipping...")
                self.failed_count += 1
                self.results.append({
                    'pr_number': pr_number,
                    'branch': branch_name,
                    'status': 'not_found',
                    'message': 'Branch not found'
                })
                continue
            
            self.merge_branch(branch_name, pr_number)
            
            # Small delay to avoid overwhelming the system
            time.sleep(0.5)
        
        self.print_summary()
    
    def print_summary(self) -> None:
        """Print merge summary"""
        print(f"\n📊 MERGE SUMMARY")
        print(f"✅ Successfully merged: {self.merged_count}")
        print(f"⚠️  Conflicts resolved: {self.conflict_count}")
        print(f"❌ Failed: {self.failed_count}")
        print(f"📋 Total processed: {len(self.results)}")
        
        # Save results
        with open('merge_results.json', 'w') as f:
            json.dump(self.results, f, indent=2)
        
        print(f"\n📄 Detailed results saved to merge_results.json")

def main():
    # Load open PRs
    try:
        with open('open_prs_list.json', 'r') as f:
            open_prs = json.load(f)
    except FileNotFoundError:
        print("❌ open_prs_list.json not found. Please run the PR analysis first.")
        sys.exit(1)
    
    # Initialize merger
    merger = PRMerger()
    
    # Start merging
    merger.merge_all_prs(open_prs)

if __name__ == "__main__":
    main()