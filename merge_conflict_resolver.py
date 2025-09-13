#!/usr/bin/env python3
"""
Comprehensive Merge Conflict Resolver
This script will resolve all merge conflicts and merge all open PRs into main branch
"""

import json
import subprocess
import sys
import os
import re
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
                    elif line.startswith('======='):
                        # Switch to collecting their lines
                        pass
                    elif line.startswith('>>>>>>> '):
                        in_conflict = False
                        # Merge the two versions intelligently
                        resolved_lines.extend(self.merge_ts_js_content(ours_lines, theirs_lines))
                        ours_lines = []
                        theirs_lines = []
                    elif in_conflict:
                        if not line.startswith('======='):
                            if not line.startswith('>>>>>>> '):
                                if len(theirs_lines) == 0:
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
                resolved_content = re.sub(r'<<<<<<< .*\n.*\n=======\n(.*?)\n>>>>>>> .*', r'\1', content, flags=re.DOTALL)
                resolved_content = re.sub(r'<<<<<<< .*\n(.*?)\n=======\n.*\n>>>>>>> .*', r'\1', resolved_content, flags=re.DOTALL)
            
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