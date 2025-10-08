#!/usr/bin/env python3
"""
Smart PR Merger - Intelligently merges PRs with conflict resolution
"""

import json
import subprocess
import sys
from datetime import datetime

class PRMerger:
    def __init__(self):
        self.log_file = f"smart_merge_log_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
        self.results = {
            'successful': [],
            'conflicts_resolved': [],
            'failed': [],
            'skipped': []
        }
        
    def log(self, message):
        """Log message to both console and file"""
        print(message)
        with open(self.log_file, 'a') as f:
            f.write(message + '\n')
    
    def run_command(self, cmd, capture=True):
        """Run a shell command"""
        try:
            if capture:
                result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
                return result.returncode == 0, result.stdout + result.stderr
            else:
                result = subprocess.run(cmd, shell=True)
                return result.returncode == 0, ""
        except Exception as e:
            return False, str(e)
    
    def get_prs(self):
        """Load PRs from JSON file"""
        try:
            with open('open_prs.json', 'r') as f:
                data = json.load(f)
            return data
        except Exception as e:
            self.log(f"Error loading PRs: {e}")
            return []
    
    def merge_pr(self, pr_number, branch_name):
        """Attempt to merge a single PR"""
        self.log(f"\n{'='*60}")
        self.log(f"Processing PR #{pr_number}: {branch_name}")
        self.log(f"{'='*60}")
        
        # Fetch the branch
        self.log(f"Fetching branch {branch_name}...")
        success, output = self.run_command(f"git fetch origin {branch_name}:{branch_name}")
        if not success:
            self.log(f"✗ Failed to fetch branch: {output}")
            self.results['failed'].append({'pr': pr_number, 'branch': branch_name, 'reason': 'fetch_failed'})
            return False
        
        # Try to merge
        self.log(f"Attempting merge...")
        success, output = self.run_command(f'git merge {branch_name} --no-edit -m "Merge PR #{pr_number}: {branch_name}"')
        
        if success:
            self.log(f"✓ Successfully merged PR #{pr_number}")
            self.results['successful'].append({'pr': pr_number, 'branch': branch_name})
            return True
        
        # Check for conflicts
        success, status = self.run_command("git status")
        if "both modified" in status or "both added" in status or "Unmerged paths" in status:
            self.log(f"⚠ Merge conflicts detected, attempting auto-resolution...")
            
            # Strategy 1: Accept incoming changes (theirs)
            self.log("  Strategy: Accepting incoming changes...")
            self.run_command("git checkout --theirs .")
            self.run_command("git add -A")
            
            success, output = self.run_command(f'git commit --no-edit -m "Merge PR #{pr_number}: {branch_name} (auto-resolved)"')
            
            if success:
                self.log(f"✓ Merged PR #{pr_number} with conflict resolution")
                self.results['conflicts_resolved'].append({'pr': pr_number, 'branch': branch_name})
                return True
            else:
                self.log(f"✗ Failed to commit after conflict resolution")
                self.run_command("git merge --abort")
                self.results['failed'].append({'pr': pr_number, 'branch': branch_name, 'reason': 'conflict_resolution_failed'})
                return False
        else:
            self.log(f"✗ Merge failed (non-conflict error): {output}")
            self.run_command("git merge --abort")
            self.results['failed'].append({'pr': pr_number, 'branch': branch_name, 'reason': 'merge_error'})
            return False
    
    def run(self, test_mode=False, limit=None):
        """Run the merge process"""
        self.log("Smart PR Merger Started")
        self.log(f"Timestamp: {datetime.now().isoformat()}")
        self.log(f"Mode: {'TEST' if test_mode else 'FULL'}")
        
        # Get PRs
        prs = self.get_prs()
        if not prs:
            self.log("No PRs found to merge")
            return
        
        total_prs = len(prs)
        if limit:
            prs = prs[:limit]
            self.log(f"Limited to first {limit} PRs (out of {total_prs})")
        else:
            self.log(f"Total PRs to process: {total_prs}")
        
        # Ensure we're on main
        self.log("\nChecking out main branch...")
        success, output = self.run_command("git checkout main")
        if not success:
            self.log(f"Failed to checkout main: {output}")
            return
        
        # Process each PR
        for i, pr in enumerate(prs, 1):
            pr_number = pr.get('number', 'unknown')
            branch_name = pr.get('head', {}).get('ref', '')
            
            if not branch_name:
                self.log(f"Skipping PR #{pr_number}: No branch name")
                self.results['skipped'].append({'pr': pr_number, 'reason': 'no_branch_name'})
                continue
            
            self.log(f"\nProgress: {i}/{len(prs)}")
            
            if test_mode and i > 5:
                self.log("\nTest mode: Stopping after 5 PRs")
                break
            
            self.merge_pr(pr_number, branch_name)
        
        # Print summary
        self.print_summary()
        
        # Save results
        with open(f"merge_results_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json", 'w') as f:
            json.dump(self.results, f, indent=2)
    
    def print_summary(self):
        """Print merge summary"""
        self.log(f"\n{'='*60}")
        self.log("MERGE SUMMARY")
        self.log(f"{'='*60}")
        self.log(f"Successful merges:      {len(self.results['successful'])}")
        self.log(f"Conflicts resolved:     {len(self.results['conflicts_resolved'])}")
        self.log(f"Failed merges:          {len(self.results['failed'])}")
        self.log(f"Skipped:                {len(self.results['skipped'])}")
        self.log(f"{'='*60}")
        
        if self.results['failed']:
            self.log("\nFailed PRs:")
            for item in self.results['failed']:
                self.log(f"  - PR #{item['pr']}: {item['branch']} (Reason: {item['reason']})")
        
        self.log(f"\nLog saved to: {self.log_file}")

if __name__ == "__main__":
    merger = PRMerger()
    
    # Check if test mode
    test_mode = "--test" in sys.argv
    
    # Check if limit specified
    limit = None
    for arg in sys.argv:
        if arg.startswith("--limit="):
            try:
                limit = int(arg.split("=")[1])
            except:
                pass
    
    merger.run(test_mode=test_mode, limit=limit)