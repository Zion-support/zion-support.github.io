#!/usr/bin/env python3
"""
Comprehensive Merge Conflict Resolver and PR Merger
This script resolves all merge conflicts and merges all open PRs into main branch
Comprehensive Merge Conflict Resolver
This script will resolve all merge conflicts and merge all open PRs into main branch
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
        if '            return True
        
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
            elif line.startswith('                conflict_marker = 'theirs'
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
import time
from datetime import datetime

class MergeConflictResolver:
    def __init__(self):
        self.repo_path = "/workspace"
        self.success_count = 0
        self.failure_count = 0
        self.processed_prs = []
        
    def log(self, message):
        """Log with timestamp"""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{timestamp}] {message}")
        
    def run_command(self, command, cwd=None):
        """Run a shell command and return the result"""
        try:
            result = subprocess.run(
                command, 
                shell=True, 
                cwd=cwd or self.repo_path,
                capture_output=True, 
                text=True, 
                timeout=300
            )
            return result.returncode == 0, result.stdout, result.stderr
        except subprocess.TimeoutExpired:
            self.log(f"⚠️  Command timed out: {command}")
            return False, "", "Command timed out"
        except Exception as e:
            self.log(f"❌ Error running command: {command} - {str(e)}")
            return False, "", str(e)
    
    def check_git_repo(self):
        """Check if we're in a git repository"""
        if not os.path.exists(os.path.join(self.repo_path, ".git")):
            self.log("❌ Not in a git repository. Exiting.")
            return False
        self.log("✅ Git repository detected")
        return True
    
    def fetch_latest(self):
        """Fetch latest changes from remote"""
        self.log("📥 Fetching latest changes from remote...")
        success, stdout, stderr = self.run_command("git fetch origin --all --prune")
        if success:
            self.log("✅ Latest changes fetched")
            return True
        else:
            self.log(f"❌ Failed to fetch latest changes: {stderr}")
            return False
    
    def checkout_main(self):
        """Checkout and update main branch"""
        self.log("🔄 Switching to main branch...")
        
        # Check current branch
        success, stdout, stderr = self.run_command("git branch --show-current")
        if success and stdout.strip() != "main":
            # Switch to main
            success, stdout, stderr = self.run_command("git checkout main")
            if not success:
                self.log(f"❌ Failed to checkout main: {stderr}")
                return False
        
        # Pull latest changes
        success, stdout, stderr = self.run_command("git pull origin main")
        if not success:
            self.log(f"⚠️  Failed to pull latest changes: {stderr}")
            # Try to continue anyway
        
        self.log("✅ On main branch with latest changes")
        return True
    
    def get_open_prs(self):
        """Get list of open PRs from _open_prs.json"""
        pr_file = os.path.join(self.repo_path, "_open_prs.json")
        
        if not os.path.exists(pr_file):
            self.log("❌ _open_prs.json not found")
            return []
        
        try:
            with open(pr_file, 'r') as f:
                data = json.load(f)
            
            pr_numbers = []
            for pr in data:
                if pr.get('state') == 'open':
                    pr_numbers.append(pr.get('number'))
            
            self.log(f"📋 Found {len(pr_numbers)} open PRs: {pr_numbers}")
            return pr_numbers
            
        except Exception as e:
            self.log(f"❌ Error reading _open_prs.json: {str(e)}")
            return []
    
    def resolve_conflicts_in_file(self, file_path):
        """Resolve conflicts in a specific file"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check for conflict markers
            if '<<<<<<< ' not in content:
                return True, "No conflicts found"
            
            self.log(f"🔧 Resolving conflicts in {file_path}")
            
            # For TypeScript/JavaScript files, try to merge both versions
            if file_path.endswith(('.tsx', '.ts', '.jsx', '.js')):
                # Remove conflict markers and keep both versions where possible
                lines = content.split('\n')
                resolved_lines = []
                in_conflict = False
                ours_lines = []
                theirs_lines = []
                
                for line in lines:
                    if line.startswith('<<<<<<< '):
                        in_conflict = True
                        ours_lines = []
                    elif line.startswith('                        # Switch to collecting their lines
                        pass
                    elif line.startswith('                        in_conflict = False
                        # Merge the two versions intelligently
                        resolved_lines.extend(self.merge_ts_js_content(ours_lines, theirs_lines))
                        ours_lines = []
                        theirs_lines = []
                    elif in_conflict:
                        if not line.startswith('                            if not line.startswith('                                if len(theirs_lines) == 0:
                                    ours_lines.append(line)
                                else:
                                    theirs_lines.append(line)
                        else:
                            # Switch to their version
                            pass
                    else:
                        resolved_lines.append(line)
                
                resolved_content = '\n'.join(resolved_lines)
            else:
                # For other files, prefer the incoming version (theirs)
                resolved_content = re.sub(r'<<<<<<< .*\n.*\n                resolved_content = re.sub(r'<<<<<<< .*\n(.*?)\n            
            # Write resolved content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            
            return True, "Conflicts resolved"
            
        except Exception as e:
            return False, f"Error resolving conflicts: {str(e)}"
    
    def merge_ts_js_content(self, ours_lines, theirs_lines):
        """Intelligently merge TypeScript/JavaScript content"""
        # Simple strategy: combine both versions, removing duplicates
        merged = []
        seen_imports = set()
        seen_exports = set()
        
        # Process our lines first
        for line in ours_lines:
            if line.strip().startswith('import ') and line not in seen_imports:
                merged.append(line)
                seen_imports.add(line)
            elif line.strip().startswith('export ') and line not in seen_exports:
                merged.append(line)
                seen_exports.add(line)
            elif line.strip() and not line.strip().startswith('//'):
                merged.append(line)
        
        # Add their lines that we don't already have
        for line in theirs_lines:
            if line.strip().startswith('import ') and line not in seen_imports:
                merged.append(line)
                seen_imports.add(line)
            elif line.strip().startswith('export ') and line not in seen_exports:
                merged.append(line)
                seen_exports.add(line)
            elif line.strip() and not line.strip().startswith('//') and line not in merged:
                merged.append(line)
        
        return merged
    
    def merge_pr(self, pr_number):
        """Merge a specific PR"""
        self.log(f"🔄 Processing PR #{pr_number}")
        
        # Fetch the PR
        success, stdout, stderr = self.run_command(f"git fetch origin pull/{pr_number}/head:pr-{pr_number}")
        if not success:
            self.log(f"❌ Failed to fetch PR #{pr_number}: {stderr}")
            return False
        
        # Try to merge
        success, stdout, stderr = self.run_command(f"git merge pr-{pr_number} --no-ff -m 'Merge PR #{pr_number}'")
        if success:
            self.log(f"✅ Successfully merged PR #{pr_number}")
            return True
        
        # Handle merge conflicts
        self.log(f"⚠️  Merge conflict detected for PR #{pr_number}, attempting resolution...")
        
        # Get list of conflicted files
        success, stdout, stderr = self.run_command("git diff --name-only --diff-filter=U")
        if not success or not stdout.strip():
            self.log(f"❌ No conflicted files found for PR #{pr_number}")
            self.run_command("git merge --abort")
            return False
        
        conflicted_files = stdout.strip().split('\n')
        self.log(f"📄 Conflicted files: {conflicted_files}")
        
        # Resolve conflicts in each file
        all_resolved = True
        for file_path in conflicted_files:
            if not file_path.strip():
                continue
                
            full_path = os.path.join(self.repo_path, file_path)
            if os.path.exists(full_path):
                success, message = self.resolve_conflicts_in_file(full_path)
                if success:
                    self.log(f"✅ Resolved conflicts in {file_path}")
                else:
                    self.log(f"❌ Failed to resolve conflicts in {file_path}: {message}")
                    all_resolved = False
            else:
                self.log(f"⚠️  File not found: {file_path}")
        
        if all_resolved:
            # Add resolved files
            self.run_command("git add .")
            
            # Complete the merge
            success, stdout, stderr = self.run_command("git commit --no-edit")
            if success:
                self.log(f"✅ Successfully resolved and merged PR #{pr_number}")
                return True
            else:
                self.log(f"❌ Failed to complete merge for PR #{pr_number}: {stderr}")
                self.run_command("git merge --abort")
                return False
        else:
            self.log(f"❌ Could not resolve all conflicts for PR #{pr_number}")
            self.run_command("git merge --abort")
            return False
    
    def cleanup_branches(self):
        """Clean up merged branches"""
        self.log("🧹 Cleaning up merged branches...")
        self.run_command("git branch --merged main | grep -v main | xargs -r git branch -d")
        self.log("✅ Cleanup completed")
    
    def push_changes(self):
        """Push changes to remote"""
        self.log("📤 Pushing changes to remote...")
        success, stdout, stderr = self.run_command("git push origin main")
        if success:
            self.log("✅ Successfully pushed changes to remote")
            return True
        else:
            self.log(f"❌ Failed to push changes to remote: {stderr}")
            return False
    
    def run(self):
        """Main execution function"""
        self.log("🎯 Starting comprehensive merge conflict resolution process...")
        
        # Check prerequisites
        if not self.check_git_repo():
            return False
        
        if not self.fetch_latest():
            return False
        
        if not self.checkout_main():
            return False
        
        # Get list of open PRs
        pr_numbers = self.get_open_prs()
        if not pr_numbers:
            self.log("ℹ️  No open PRs found")
            return True
        
        # Process each PR
        for pr_number in pr_numbers:
            if self.merge_pr(pr_number):
                self.success_count += 1
                self.processed_prs.append(f"PR #{pr_number} - SUCCESS")
            else:
                self.failure_count += 1
                self.processed_prs.append(f"PR #{pr_number} - FAILED")
            
            # Small delay to avoid overwhelming the system
            time.sleep(2)
        
        # Cleanup and push
        self.cleanup_branches()
        
        if self.success_count > 0:
            self.push_changes()
        
        # Summary
        self.log("📊 Merge resolution summary:")
        self.log(f"   ✅ Successful merges: {self.success_count}")
        self.log(f"   ❌ Failed merges: {self.failure_count}")
        self.log(f"   📋 Total PRs processed: {self.success_count + self.failure_count}")
        
        for pr_status in self.processed_prs:
            self.log(f"   {pr_status}")
        
        if self.failure_count == 0:
            self.log("🎉 All PRs merged successfully!")
            return True
        else:
            self.log("⚠️  Some PRs failed to merge. Check logs for details.")
            return False

if __name__ == "__main__":
    resolver = MergeConflictResolver()
    success = resolver.run()
    sys.exit(0 if success else 1)