#!/usr/bin/env python3

import subprocess
import os
import sys
import re
from pathlib import Path

def run_command(command, allow_failure=False):
    """Run a git command and return the result"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=60)
        if result.returncode != 0 and not allow_failure:
            print(f"❌ Command failed: {command}")
            print(f"Error: {result.stderr}")
            return None
        return result
    except subprocess.TimeoutExpired:
        print(f"⏰ Command timed out: {command}")
        return None
    except Exception as e:
        print(f"❌ Error running command: {e}")
        return None

def resolve_conflicts():
    """Resolve merge conflicts intelligently"""
    print("🔧 Resolving merge conflicts...")
    
    # Get conflicted files
    result = run_command("git diff --name-only --diff-filter=U", allow_failure=True)
    if not result or not result.stdout.strip():
        print("✅ No conflicts found")
        return True
    
    files = result.stdout.strip().split('\n')
    print(f"📋 Found {len(files)} conflicted files: {', '.join(files)}")
    
    for file in files:
        if not os.path.exists(file):
            continue
            
        print(f"🔧 Resolving conflicts in {file}...")
        
        # Different resolution strategies based on file type
        if 'package.json' in file or 'package-lock.json' in file:
            print("📦 Package file - keeping main version")
            run_command(f'git checkout --ours "{file}"')
        elif any(config in file for config in ['next.config', 'tsconfig', 'tailwind.config', 'netlify.toml']):
            print("⚙️  Config file - keeping main version")
            run_command(f'git checkout --ours "{file}"')
        elif any(ext in file for ext in ['.tsx', '.ts', '.jsx', '.js']):
            print("💻 Component file - preferring incoming changes")
            run_command(f'git checkout --theirs "{file}"')
        elif any(ext in file for ext in ['.md', '.txt']):
            print("📝 Documentation file - preferring incoming changes")
            run_command(f'git checkout --theirs "{file}"')
        else:
            print("📄 Generic file - using intelligent merge")
            # Try to resolve by removing conflict markers
            try:
                with open(file, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Remove conflict markers
                content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
                
                with open(file, 'w', encoding='utf-8') as f:
                    f.write(content)
            except Exception as e:
                print(f"❌ Error processing {file}: {e}")
                run_command(f'git checkout --theirs "{file}"')
    
    # Add all resolved files
    run_command("git add .")
    return True

def merge_branch(branch):
    """Merge a single branch with conflict resolution"""
    print(f"🔄 Attempting to merge {branch}...")
    
    try:
        # Fetch the branch
        result = run_command(f"git fetch origin {branch}")
        if not result:
            return False
        
        # Try to merge
        result = run_command(f"git merge --no-commit --no-ff origin/{branch}", allow_failure=True)
        if result and result.returncode == 0:
            print(f"✅ Successfully merged {branch}")
            run_command(f'git commit -m "Merge {branch} into main"')
            return True
        else:
            print(f"⚠️  Merge conflicts detected in {branch}")
            
            if resolve_conflicts():
                result = run_command(f'git commit -m "Resolve merge conflicts for {branch}"', allow_failure=True)
                if result and result.returncode == 0:
                    print(f"✅ Successfully resolved conflicts and merged {branch}")
                    return True
                else:
                    print(f"❌ Failed to commit resolved conflicts for {branch}")
                    run_command("git merge --abort")
                    return False
            else:
                print(f"❌ Failed to resolve conflicts for {branch}")
                run_command("git merge --abort")
                return False
                
    except Exception as e:
        print(f"❌ Error merging {branch}: {e}")
        return False

def main():
    """Main execution function"""
    print("🚀 Starting comprehensive merge resolution...")
    
    try:
        # Ensure we're on main branch
        print("🔄 Switching to main branch...")
        run_command("git checkout main")
        run_command("git pull origin main")
        
        # Get all cursor branches
        print("📊 Getting all cursor branches...")
        result = run_command('git branch -r | grep "origin/cursor/" | sed "s/origin\\///"')
        if not result:
            print("❌ Failed to get branches")
            return
        
        branches = [b.strip() for b in result.stdout.strip().split('\n') if b.strip()]
        print(f"📋 Found {len(branches)} cursor branches to process")
        
        successful_merges = 0
        failed_merges = 0
        
        # Process each branch (limit to first 10 to avoid timeout)
        for i, branch in enumerate(branches[:10]):
            print(f"\n📋 [{i + 1}/10] Processing: {branch}")
            
            if merge_branch(branch):
                successful_merges += 1
            else:
                failed_merges += 1
        
        # Push changes
        print("\n💾 Pushing changes to remote...")
        run_command("git push origin main")
        
        # Summary
        print("\n🎉 Merge resolution completed!")
        print(f"📊 Summary:")
        print(f"   ✅ Successful merges: {successful_merges}")
        print(f"   ❌ Failed merges: {failed_merges}")
        print(f"   📈 Total processed: {successful_merges + failed_merges}")
        
    except Exception as e:
        print(f"❌ Fatal error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()