#!/usr/bin/env python3
"""
Comprehensive Merge Conflict Resolver and PR Merger
This script resolves all merge conflicts and merges all open PRs into main branch
"""

import json
import subprocess
import sys
import os
import re
from typing import List, Dict, Any, Tuple

class MergeConflictResolver:
    def __init__(self, repo_owner: str = "Zion-Holdings", repo_name: str = "zion.app"):
        self.repo_owner = repo_owner
        self.repo_name = repo_name
        self.repo_full = f"{repo_owner}/{repo_name}"
        
    def run_command(self, cmd: str, check: bool = True) -> Tuple[int, str, str]:
        """Run a command and return the result"""
        try:
            result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
            return result.returncode, result.stdout, result.stderr
        except subprocess.CalledProcessError as e:
            return e.returncode, e.stdout, e.stderr

    def print_status(self, msg: str):
        print(f"\033[0;34m[INFO]\033[0m {msg}")

    def print_success(self, msg: str):
        print(f"\033[0;32m[SUCCESS]\033[0m {msg}")

    def print_warning(self, msg: str):
        print(f"\033[1;33m[WARNING]\033[0m {msg}")

    def print_error(self, msg: str):
        print(f"\033[0;31m[ERROR]\033[0m {msg}")

    def check_prerequisites(self) -> bool:
        """Check if required tools are available"""
        self.print_status("Checking prerequisites...")
        
        # Check git
        returncode, _, _ = self.run_command("git --version", check=False)
        if returncode != 0:
            self.print_error("Git is not installed. Please install git first.")
            return False
        
        # Check gh CLI
        returncode, _, _ = self.run_command("gh --version", check=False)
        if returncode != 0:
            self.print_warning("GitHub CLI (gh) is not installed. Please install it first.")
            return False
        
        # Check authentication
        returncode, _, _ = self.run_command("gh auth status", check=False)
        if returncode != 0:
            self.print_warning("Not authenticated with GitHub. Please run 'gh auth login' first.")
            return False
        
        return True

    def get_open_prs(self) -> List[Dict[str, Any]]:
        """Get all open pull requests"""
        self.print_status("Fetching open pull requests...")
        
        cmd = f"gh pr list --repo {self.repo_full} --state open --json number,title,headRefName,baseRefName,mergeable,mergeableState,url"
        returncode, stdout, stderr = self.run_command(cmd)
        
        if returncode != 0:
            self.print_error(f"Failed to fetch PRs: {stderr}")
            return []
        
        try:
            prs = json.loads(stdout)
            self.print_status(f"Found {len(prs)} open pull requests")
            return prs
        except json.JSONDecodeError as e:
            self.print_error(f"Failed to parse PR data: {e}")
            return []

    def resolve_conflicts_in_file(self, file_path: str) -> bool:
        """Resolve conflicts in a single file"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            self.print_warning(f"Could not read {file_path}: {e}")
            return False
        
        # Check if file has conflict markers
        if '<<<<<<< HEAD' not in content:
            return True
        
        self.print_status(f"Resolving conflicts in {file_path}...")
        
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        conflict_marker = None
        conflict_count = 0
        
        for i, line in enumerate(lines):
            if line.startswith('<<<<<<<'):
                in_conflict = True
                conflict_marker = 'ours'
                conflict_count += 1
                continue
            elif line.startswith('======='):
                conflict_marker = 'theirs'
                continue
            elif line.startswith('>>>>>>>'):
                in_conflict = False
                conflict_marker = None
                continue
            elif in_conflict:
                # In conflict section - choose strategy
                if conflict_marker == 'theirs':
                    # Keep the incoming changes (theirs)
                    resolved_lines.append(line)
                # Skip 'ours' lines
            else:
                resolved_lines.append(line)
        
        # Write resolved content
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(resolved_lines))
            self.print_success(f"Resolved {conflict_count} conflicts in {file_path}")
            return True
        except Exception as e:
            self.print_error(f"Could not write to {file_path}: {e}")
            return False

    def resolve_merge_conflicts(self, branch_name: str) -> bool:
        """Resolve merge conflicts in a branch"""
        self.print_status(f"Resolving merge conflicts in {branch_name}...")
        
        # Try to merge main into the branch
        returncode, stdout, stderr = self.run_command(f"git merge origin/main", check=False)
        
        if returncode == 0:
            self.print_success(f"No conflicts found in {branch_name}")
            return True
        
        # Check for conflicted files
        returncode, stdout, stderr = self.run_command("git status --porcelain")
        if returncode != 0:
            self.print_error(f"Could not check git status: {stderr}")
            return False
        
        conflicted_files = []
        for line in stdout.split('\n'):
            if line.startswith('UU') or line.startswith('AA') or line.startswith('DD'):
                file_path = line.split()[1]
                conflicted_files.append(file_path)
        
        if not conflicted_files:
            self.print_warning(f"No conflicted files found, but merge failed: {stderr}")
            return False
        
        self.print_status(f"Found {len(conflicted_files)} conflicted files")
        
        # Resolve conflicts in each file
        success = True
        for file_path in conflicted_files:
            if not self.resolve_conflicts_in_file(file_path):
                success = False
        
        if not success:
            return False
        
        # Add resolved files
        returncode, stdout, stderr = self.run_command("git add .")
        if returncode != 0:
            self.print_error(f"Failed to add resolved files: {stderr}")
            return False
        
        # Commit the merge
        returncode, stdout, stderr = self.run_command("git commit -m 'Resolve merge conflicts automatically'", check=False)
        if returncode != 0:
            self.print_error(f"Failed to commit merge resolution: {stderr}")
            return False
        
        self.print_success(f"Successfully resolved conflicts in {branch_name}")
        return True

    def merge_pr(self, pr_number: int, pr_title: str) -> bool:
        """Merge a single PR"""
        self.print_status(f"Merging PR #{pr_number}: {pr_title}")
        
        # Try different merge strategies
        merge_strategies = [
            f"gh pr merge {pr_number} --merge --delete-branch",
            f"gh pr merge {pr_number} --squash --delete-branch",
            f"gh pr merge {pr_number} --rebase --delete-branch"
        ]
        
        for strategy in merge_strategies:
            returncode, stdout, stderr = self.run_command(strategy, check=False)
            if returncode == 0:
                self.print_success(f"Successfully merged PR #{pr_number} using {strategy.split()[2]}")
                return True
            else:
                self.print_warning(f"Merge strategy {strategy.split()[2]} failed: {stderr}")
        
        self.print_error(f"Failed to merge PR #{pr_number} with any strategy")
        return False

    def process_pr(self, pr: Dict[str, Any]) -> bool:
        """Process a single PR"""
        pr_number = pr['number']
        pr_title = pr['title']
        head_ref = pr['headRefName']
        base_ref = pr['baseRefName']
        mergeable_state = pr.get('mergeableState', 'UNKNOWN')
        
        self.print_status(f"Processing PR #{pr_number}: {pr_title}")
        self.print_status(f"  Head: {head_ref}, Base: {base_ref}, State: {mergeable_state}")
        
        # Skip if already merged or in draft
        if mergeable_state == 'MERGED':
            self.print_warning(f"PR #{pr_number} is already merged, skipping...")
            return True
        
        if mergeable_state == 'DRAFT':
            self.print_warning(f"PR #{pr_number} is in draft state, skipping...")
            return True
        
        # Fetch and checkout the branch
        returncode, stdout, stderr = self.run_command(f"git fetch origin {head_ref}")
        if returncode != 0:
            self.print_error(f"Failed to fetch branch {head_ref}: {stderr}")
            return False
        
        returncode, stdout, stderr = self.run_command(f"git checkout {head_ref}")
        if returncode != 0:
            self.print_error(f"Failed to checkout branch {head_ref}: {stderr}")
            return False
        
        # Resolve conflicts if any
        if not self.resolve_merge_conflicts(head_ref):
            self.print_error(f"Failed to resolve conflicts in PR #{pr_number}")
            return False
        
        # Push resolved branch
        returncode, stdout, stderr = self.run_command(f"git push origin {head_ref}")
        if returncode != 0:
            self.print_error(f"Failed to push resolved branch: {stderr}")
            return False
        
        # Merge the PR
        return self.merge_pr(pr_number, pr_title)

    def run(self):
        """Main execution function"""
        self.print_status("🚀 Starting comprehensive merge conflict resolution and PR merging...")
        
        # Check prerequisites
        if not self.check_prerequisites():
            return False
        
        # Create backup
        self.print_status("Creating backup...")
        backup_dir = f"backup-{int(__import__('time').time())}"
        returncode, stdout, stderr = self.run_command(f"mkdir -p {backup_dir} && cp -r . {backup_dir}/", check=False)
        if returncode == 0:
            self.print_success(f"Backup created in {backup_dir}")
        
        # Ensure we're on main and up to date
        self.print_status("Updating main branch...")
        returncode, stdout, stderr = self.run_command("git checkout main")
        if returncode != 0:
            self.print_error(f"Failed to checkout main: {stderr}")
            return False
        
        returncode, stdout, stderr = self.run_command("git pull origin main")
        if returncode != 0:
            self.print_error(f"Failed to pull main: {stderr}")
            return False
        
        # Get and process PRs
        prs = self.get_open_prs()
        if not prs:
            self.print_warning("No open PRs found")
            return True
        
        success_count = 0
        for pr in prs:
            if self.process_pr(pr):
                success_count += 1
        
        # Final update
        self.print_status("Updating main branch after merges...")
        returncode, stdout, stderr = self.run_command("git checkout main && git pull origin main")
        
        self.print_success(f"🎉 Processed {len(prs)} PRs, {success_count} successful")
        return success_count == len(prs)

if __name__ == "__main__":
    resolver = MergeConflictResolver()
    success = resolver.run()
    sys.exit(0 if success else 1)