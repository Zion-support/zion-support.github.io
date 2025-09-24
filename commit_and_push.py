#!/usr/bin/env python3

import subprocess
import sys
import os

def run_command(command, cwd='/workspace'):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(command, shell=True, cwd=cwd, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def main():
    print("🚀 Committing and pushing resolved merge conflicts...")
    
    # Add all changes
    print("📝 Adding all resolved files...")
    success, stdout, stderr = run_command("git add .")
    if not success:
        print(f"❌ Failed to add files: {stderr}")
        return False
    
    # Commit changes
    print("💾 Committing resolved conflicts...")
    commit_message = """Resolve merge conflicts and integrate improvements

- Resolved merge conflicts across component files
- Fixed CSS and configuration file conflicts  
- Cleaned up Next.js configuration
- Resolved conflicts in SEO and analytics components
- Maintained code quality and functionality
- All main application conflicts resolved successfully"""
    
    success, stdout, stderr = run_command(f'git commit -m "{commit_message}"')
    if not success:
        print(f"❌ Failed to commit: {stderr}")
        return False
    
    print("✅ Changes committed successfully!")
    
    # Push to main
    print("🚀 Pushing to main branch...")
    success, stdout, stderr = run_command("git push origin main")
    if not success:
        print(f"❌ Failed to push: {stderr}")
        return False
    
    print("✅ Changes pushed to main successfully!")
    print("🎉 All merge conflicts resolved and changes integrated!")
    
    return True

if __name__ == "__main__":
    main()