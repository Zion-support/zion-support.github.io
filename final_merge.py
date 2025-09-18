#!/usr/bin/env python3

import subprocess
import sys
import os

def run_git_command(cmd):
    """Run a git command and return the result"""
    try:
        result = subprocess.run(
            f"git {cmd}",
            shell=True,
            capture_output=True,
            text=True,
            timeout=30,
            cwd='/workspace'
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"

def main():
    print("Starting final merge process...")
    
    # Check current branch
    success, stdout, stderr = run_git_command("branch --show-current")
    if success:
        current_branch = stdout.strip()
        print(f"Current branch: {current_branch}")
    else:
        print(f"Error getting current branch: {stderr}")
        return 1
    
    # Add all changes
    print("Adding all changes...")
    success, stdout, stderr = run_git_command("add .")
    if not success:
        print(f"Error adding changes: {stderr}")
    
    # Commit changes
    print("Committing changes...")
    success, stdout, stderr = run_git_command('commit -m "feat: Add revolutionary new content and enhanced frontend advertising

- Created NextGenTechRevolution2029 page with transcendent AI and quantum consciousness features
- Added RevolutionaryTechBreakthrough2036 page showcasing reality manipulation technology
- Implemented UltimateTechBanner2036 and RevolutionaryContentBanner2036 components
- Enhanced main App.tsx with new content promotion and advertising banners
- Added new content showcase section highlighting 2029-2036 breakthrough technologies
- Updated hero section with prominent new content announcements
- Added routing for new pages and components
- Improved frontend advertising with animated banners and call-to-action buttons

This update significantly expands the website content and enhances user engagement through prominent advertising of new revolutionary technology features."')
    
    if success:
        print("Commit successful!")
    else:
        print(f"Commit failed: {stderr}")
        # Try a simpler commit message
        success, stdout, stderr = run_git_command('commit -m "Add new revolutionary content and enhanced frontend advertising"')
        if success:
            print("Commit with simple message successful!")
        else:
            print(f"Simple commit also failed: {stderr}")
            return 1
    
    # Push to origin
    print("Pushing to origin...")
    success, stdout, stderr = run_git_command("push origin main")
    if success:
        print("Push successful!")
        print("✅ Merge completed successfully!")
        return 0
    else:
        print(f"Push failed: {stderr}")
        return 1

if __name__ == "__main__":
    sys.exit(main())