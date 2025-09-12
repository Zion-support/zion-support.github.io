#!/usr/bin/env python3
"""
Comprehensive PR merge script for zion.app
Fetches open PRs from GitHub and merges them into main branch
"""

import subprocess
import json
import requests
import sys
import os
from typing import List, Dict, Tuple

class PRMerger:
    def __init__(self, repo_owner: str, repo_name: str):
        self.repo_owner = repo_owner
        self.repo_name = repo_name
        self.github_api = f"https://api.github.com/repos/{repo_owner}/{repo_name}"
        self.main_branch = "main"
        
    def run_git_command(self, command: List[str]) -> Tuple[bool, str]:
        """Run a git command and return success status and output"""
        try:
            result = subprocess.run(
                command, 
                capture_output=True, 
                text=True, 
                check=True
            )
            return True, result.stdout
        except subprocess.CalledProcessError as e:
            return False, e.stderr
    
    def ensure_main_branch(self) -> bool:
        """Ensure we're on main branch and synced"""
        print("🔄 Ensuring we're on main branch...")
        
        # Check current branch
        success, output = self.run_git_command(["git", "rev-parse", "--abbrev-ref", "HEAD"])
        if not success:
            print(f"❌ Error checking current branch: {output}")
            return False
            
        current_branch = output.strip()
        if current_branch != self.main_branch:
            print(f"🔄 Switching from {current_branch} to {self.main_branch}")
            success, output = self.run_git_command(["git", "checkout", self.main_branch])
            if not success:
                print(f"❌ Error switching to main: {output}")
                return False
        
        # Sync with origin
        print("🔄 Syncing with origin...")
        success, output = self.run_git_command(["git", "pull", "origin", self.main_branch])
        if not success:
            print(f"❌ Error syncing with origin: {output}")
            return False
            
        print("✅ Main branch synced successfully")
        return True
    
    def fetch_pr_refs(self) -> bool:
        """Fetch all PR references from GitHub"""
        print("🔄 Fetching PR references...")
        success, output = self.run_git_command([
            "git", "fetch", "origin", "+refs/pull/*/head:refs/remotes/origin/pr/*"
        ])
        if not success:
            print(f"❌ Error fetching PR refs: {output}")
            return False
        print("✅ PR references fetched")
        return True
    
    def get_open_prs(self) -> List[Dict]:
        """Get open PRs from GitHub API"""
        print("🔄 Fetching open PRs from GitHub...")
        
        try:
            response = requests.get(
                f"{self.github_api}/pulls",
                params={"state": "open", "per_page": 100, "sort": "created", "direction": "desc"},
                headers={"Accept": "application/vnd.github+json"}
            )
            response.raise_for_status()
            prs = response.json()
            print(f"✅ Found {len(prs)} open PRs")
            return prs
        except requests.RequestException as e:
            print(f"❌ Error fetching PRs from GitHub: {e}")
            return []
    
    def merge_pr(self, pr_number: int, pr_title: str) -> bool:
        """Merge a single PR into main"""
        print(f"🔄 Processing PR #{pr_number}: {pr_title}")
        
        # Check if PR ref exists
        success, _ = self.run_git_command(["git", "show-ref", "--verify", f"refs/remotes/origin/pr/{pr_number}"])
        if not success:
            print(f"⚠️  PR #{pr_number} ref not found locally, skipping...")
            return False
        
        # Create merge branch
        merge_branch = f"merge-pr-{pr_number}"
        success, output = self.run_git_command(["git", "checkout", "-B", merge_branch, self.main_branch])
        if not success:
            print(f"❌ Error creating merge branch: {output}")
            return False
        
        # Attempt merge with conflict resolution
        success, output = self.run_git_command([
            "git", "merge", "-m", f"Merge PR #{pr_number}: {pr_title}", 
            "-X", "theirs", f"origin/pr/{pr_number}"
        ])
        
        if not success:
            print(f"⚠️  Conflicts detected in PR #{pr_number}, attempting auto-resolution...")
            
            # Auto-resolve common conflicts
            auto_resolve_commands = [
                ["git", "checkout", "--ours", "--", "package-lock.json"],
                ["git", "checkout", "--ours", "--", "yarn.lock"],
                ["git", "checkout", "--ours", "--", "pnpm-lock.yaml"],
                ["git", "checkout", "--theirs", "--", "dist/**"],
                ["git", "checkout", "--theirs", "--", "build/**"],
                ["git", "checkout", "--theirs", "--", "out/**"],
            ]
            
            for cmd in auto_resolve_commands:
                self.run_git_command(cmd)  # Ignore errors for optional files
            
            # Stage all changes
            success, output = self.run_git_command(["git", "add", "-A"])
            if not success:
                print(f"❌ Error staging changes: {output}")
                self.run_git_command(["git", "checkout", self.main_branch])
                self.run_git_command(["git", "branch", "-D", merge_branch])
                return False
            
            # Commit the merge
            success, output = self.run_git_command([
                "git", "commit", "-m", f"Auto-resolve conflicts for PR #{pr_number}: {pr_title}"
            ])
            if not success:
                print(f"❌ Could not auto-resolve conflicts for PR #{pr_number}: {output}")
                self.run_git_command(["git", "checkout", self.main_branch])
                self.run_git_command(["git", "branch", "-D", merge_branch])
                return False
        
        # Merge into main
        success, output = self.run_git_command(["git", "checkout", self.main_branch])
        if not success:
            print(f"❌ Error switching to main: {output}")
            return False
        
        success, output = self.run_git_command([
            "git", "merge", "--no-ff", "-m", f"Merge PR #{pr_number}: {pr_title}", merge_branch
        ])
        if not success:
            print(f"❌ Error merging into main: {output}")
            self.run_git_command(["git", "branch", "-D", merge_branch])
            return False
        
        # Push to origin
        success, output = self.run_git_command(["git", "push", "origin", self.main_branch])
        if not success:
            print(f"❌ Error pushing to origin: {output}")
            self.run_git_command(["git", "branch", "-D", merge_branch])
            return False
        
        # Clean up
        self.run_git_command(["git", "branch", "-D", merge_branch])
        
        print(f"✅ Successfully merged and pushed PR #{pr_number}")
        return True
    
    def process_all_prs(self) -> None:
        """Process all open PRs"""
        print("🚀 Starting comprehensive PR merge process")
        
        # Pre-flight checks
        if not self.ensure_main_branch():
            sys.exit(1)
        
        if not self.fetch_pr_refs():
            sys.exit(1)
        
        # Get open PRs
        prs = self.get_open_prs()
        if not prs:
            print("ℹ️  No open PRs found")
            return
        
        # Process each PR
        success_count = 0
        failed_prs = []
        
        for pr in prs:
            pr_number = pr["number"]
            pr_title = pr["title"]
            
            if self.merge_pr(pr_number, pr_title):
                success_count += 1
            else:
                failed_prs.append(pr_number)
        
        # Summary
        print("\n" + "="*50)
        print("📊 MERGE SUMMARY")
        print("="*50)
        print(f"✅ Successfully merged: {success_count} PRs")
        if failed_prs:
            print(f"❌ Failed to merge: {len(failed_prs)} PRs")
            print(f"Failed PRs: {', '.join(map(str, failed_prs))}")
        print(f"📈 Total processed: {len(prs)} PRs")
        print("="*50)

def main():
    """Main entry point"""
    repo_owner = "Zion-Holdings"
    repo_name = "zion.app"
    
    merger = PRMerger(repo_owner, repo_name)
    merger.process_all_prs()

if __name__ == "__main__":
    main()