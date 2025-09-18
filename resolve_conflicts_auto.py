#!/usr/bin/env python3
"""
Automatic Conflict Resolver
Resolves merge conflicts by accepting our changes (HEAD)
"""

import subprocess
import os
from datetime import datetime

def log(message):
    """Log with timestamp"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] {message}")

def run_command(command, check=False):
    """Run a command safely"""
    try:
        result = subprocess.run(
            command,
            shell=True,
            capture_output=True,
            text=True,
            timeout=60
        )
        return result
    except subprocess.TimeoutExpired:
        log(f"⏰ Command timed out: {command}")
        return None
    except Exception as e:
        log(f"❌ Command failed: {command} - {e}")
        return None

def get_conflicted_files():
    """Get list of files with conflicts"""
    result = run_command("git diff --name-only --diff-filter=U")
    if result and result.returncode == 0:
        files = result.stdout.strip().split('\n') if result.stdout.strip() else []
        return [f for f in files if f]
    return []

def resolve_conflicts():
    """Resolve all conflicts by accepting our changes"""
    log("🔧 Starting automatic conflict resolution...")
    
    # Get conflicted files
    conflicted_files = get_conflicted_files()
    log(f"📋 Found {len(conflicted_files)} files with conflicts")
    
    if not conflicted_files:
        log("✅ No conflicts found")
        return True
    
    # Resolve each conflict by accepting our version (HEAD)
    resolved_count = 0
    for file_path in conflicted_files:
        log(f"🔧 Resolving conflict in: {file_path}")
        
        # Accept our version (HEAD)
        result = run_command(f"git checkout --ours '{file_path}'")
        if result and result.returncode == 0:
            # Add the resolved file
            run_command(f"git add '{file_path}'")
            resolved_count += 1
            log(f"✅ Resolved: {file_path}")
        else:
            log(f"⚠️ Failed to resolve: {file_path}")
    
    log(f"📊 Resolved {resolved_count}/{len(conflicted_files)} conflicts")
    return resolved_count == len(conflicted_files)

def handle_deleted_files():
    """Handle files that were deleted in remote but modified locally"""
    log("🗑️ Handling deleted files...")
    
    # Get status to find deleted files
    result = run_command("git status --porcelain")
    if not result or result.returncode != 0:
        return
    
    lines = result.stdout.strip().split('\n')
    deleted_files = []
    
    for line in lines:
        if line.startswith('DU ') or line.startswith('UD '):
            # File deleted by us or them
            file_path = line[3:].strip()
            deleted_files.append(file_path)
    
    if deleted_files:
        log(f"📋 Found {len(deleted_files)} deleted files to handle")
        
        for file_path in deleted_files:
            log(f"🗑️ Handling deleted file: {file_path}")
            # Keep our version (add the file)
            run_command(f"git add '{file_path}'")
    
    return True

def commit_resolution():
    """Commit the conflict resolution"""
    log("💾 Committing conflict resolution...")
    
    commit_message = f"chore: Resolve merge conflicts automatically - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
    result = run_command(f'git commit -m "{commit_message}"')
    
    if result and result.returncode == 0:
        log("✅ Conflicts resolved and committed")
        return True
    else:
        log("⚠️ Commit may have failed")
        return False

def main():
    """Main function"""
    log("🚀 Starting Automatic Conflict Resolver...")
    
    if not os.path.exists(".git"):
        log("❌ Not in a git repository")
        return False
    
    # Step 1: Resolve conflicts
    if not resolve_conflicts():
        log("❌ Failed to resolve all conflicts")
        return False
    
    # Step 2: Handle deleted files
    handle_deleted_files()
    
    # Step 3: Commit the resolution
    if not commit_resolution():
        log("❌ Failed to commit resolution")
        return False
    
    log("🎉 Automatic conflict resolution completed!")
    return True

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)