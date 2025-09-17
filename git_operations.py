#!/usr/bin/env python3

import subprocess
import sys
import os

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def main():
    print("Starting git operations...")
    
    # Check git status
    success, stdout, stderr = run_command("git status --porcelain")
    if success:
        print("Git status:")
        print(stdout)
    else:
        print(f"Error checking git status: {stderr}")
    
    # Add all changes
    print("\nAdding changes...")
    success, stdout, stderr = run_command("git add .")
    if not success:
        print(f"Error adding changes: {stderr}")
        return
    
    # Commit changes
    print("\nCommitting changes...")
    commit_msg = """Fix Netlify build issues: add missing dependencies and fix config syntax

- Added missing vite-plugin-compression dependency
- Added missing tailwindcss-animate dependency  
- Fixed tailwind.config.ts syntax errors
- Fixed vite.config.ts path resolution

These changes should resolve the Netlify build failures."""
    
    success, stdout, stderr = run_command(f'git commit -m "{commit_msg}"')
    if not success:
        print(f"Error committing changes: {stderr}")
        return
    
    print("Changes committed successfully!")
    
    # Push to main
    print("\nPushing to main branch...")
    success, stdout, stderr = run_command("git push origin main")
    if not success:
        print(f"Error pushing changes: {stderr}")
        return
    
    print("Changes pushed successfully!")
    print("Netlify should now trigger a new build with the fixes.")

if __name__ == "__main__":
    main()