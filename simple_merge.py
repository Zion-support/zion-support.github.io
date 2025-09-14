#!/usr/bin/env python3
import subprocess
import sys

def run_cmd(cmd):
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=60)
        return result.returncode, result.stdout, result.stderr
    except:
        return -1, "", "Timeout"

# Check current branch
code, stdout, stderr = run_cmd("git branch --show-current")
if code == 0:
    print(f"Current branch: {stdout.strip()}")
else:
    print(f"Error: {stderr}")

# Check status
code, stdout, stderr = run_cmd("git status --porcelain")
if code == 0:
    if stdout.strip():
        print("Uncommitted changes found")
        print(stdout)
    else:
        print("Working directory is clean")

# Try to merge
print("Attempting to merge main...")
code, stdout, stderr = run_cmd("git merge origin/main")
if code == 0:
    print("Merge successful")
else:
    print(f"Merge failed: {stderr}")

print("Done")