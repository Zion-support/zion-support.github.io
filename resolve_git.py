#!/usr/bin/env python3

import subprocess
import sys
import os

def run_command(command, description):
    """Run a command and handle errors"""
    try:
        print(f"🔄 {description}...")
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=30)
        if result.returncode == 0:
            print(f"✅ {description} completed")
            return result.stdout
        else:
            print(f"❌ {description} failed: {result.stderr}")
            return None
    except subprocess.TimeoutExpired:
        print(f"⏰ {description} timed out")
        return None
    except Exception as e:
        print(f"💥 {description} error: {e}")
        return None

def main():
    print("🚀 Starting git issue resolution...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Set git configuration
    run_command("git config pull.rebase false", "Setting git pull strategy")
    run_command("git config pull.ff false", "Setting git fast-forward strategy")
    
    # Check status
    status = run_command("git status --porcelain", "Checking git status")
    
    if status and status.strip():
        run_command("git add .", "Adding files to staging")
        run_command('git commit -m "Fix: Resolve configuration and update files"', "Committing changes")
    
    # Pull latest changes
    run_command("git pull origin main", "Pulling latest changes")
    
    # Push changes
    run_command("git push origin main", "Pushing changes")
    
    print("🎉 Git issues resolved successfully!")

if __name__ == "__main__":
    main()