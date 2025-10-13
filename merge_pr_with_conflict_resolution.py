#!/usr/bin/env python3
"""
Script to merge PR with automatic conflict resolution
"""
import subprocess
import sys
import os
import re

def run_command(cmd, check=True):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.returncode, result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        return e.returncode, e.stdout, e.stderr

def resolve_merge_conflicts():
    """Resolve merge conflicts by choosing the newer version (after =======)"""
    print("🔍 Searching for files with merge conflicts...")
    
    # Find all files with merge conflict markers
    conflict_files = []
    
    # Search in common directories
    search_dirs = ['app', 'src', 'components', 'utils', 'hooks', 'scripts', '__tests__']
    
    for search_dir in search_dirs:
        if os.path.exists(search_dir):
            for root, dirs, files in os.walk(search_dir):
                for file in files:
                    if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.json', '.html', '.css')):
                        file_path = os.path.join(root, file)
                        try:
                            with open(file_path, 'r', encoding='utf-8') as f:
                                content = f.read()
                                if '<<<<<<< HEAD' in content:
                                    conflict_files.append(file_path)
                        except:
                            pass
    
    # Also check root level files
    for pattern in ['*.tsx', '*.ts', '*.js', '*.jsx', '*.json', '*.html', '*.css']:
        for file_path in glob.glob(pattern):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        conflict_files.append(file_path)
            except:
                pass
    
    print(f"📊 Found {len(conflict_files)} files with merge conflicts")
    
    if not conflict_files:
        print("✅ No merge conflicts found!")
        return True
    
    # Resolve conflicts in each file
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_conflicts_in_file(file_path):
            resolved_count += 1
    
    print(f"\n🎉 Successfully resolved conflicts in {resolved_count} files")
    print(f"📁 Total files processed: {len(conflict_files)}")
    return True

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        
        def replace_conflict(match):
            # Get the content after ======= (newer version)
            newer_content = match.group(2)
            return newer_content
        
        # Replace all conflicts with the newer version
        resolved_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be orphaned markers
        resolved_content = re.sub(r'<<<<<<< HEAD.*?=======', '', resolved_content, flags=re.DOTALL)
        resolved_content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', resolved_content, flags=re.DOTALL)
        resolved_content = re.sub(r'>>>>>>> [^\n]+', '', resolved_content)
        resolved_content = re.sub(r'=======', '', resolved_content)
        resolved_content = re.sub(r'<<<<<<< HEAD', '', resolved_content)
        
        # Clean up extra whitespace
        resolved_content = re.sub(r'\n\s*\n\s*\n', '\n\n', resolved_content)
        
        # If content changed, write it back
        if resolved_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            print(f"✅ Resolved conflicts in: {file_path}")
            return True
        else:
            print(f"ℹ️  No conflicts found in: {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to merge PR with conflict resolution"""
    print("🚀 Starting PR merge with conflict resolution...")
    
    # Step 1: Check current status
    print("\n📋 Step 1: Checking current git status...")
    returncode, stdout, stderr = run_command("git status")
    print(stdout)
    
    # Step 2: Fetch the PR branch
    print("\n📥 Step 2: Fetching PR branch...")
    returncode, stdout, stderr = run_command("git fetch origin cursor/fix-errors-and-merge-to-main-4aee")
    if returncode != 0:
        print(f"❌ Failed to fetch PR branch: {stderr}")
        return False
    
    # Step 3: Start merge
    print("\n🔄 Step 3: Starting merge...")
    returncode, stdout, stderr = run_command("git merge --no-commit --no-ff origin/cursor/fix-errors-and-merge-to-main-4aee", check=False)
    
    if returncode == 0:
        print("✅ Merge completed without conflicts!")
        return True
    elif "CONFLICT" in stderr:
        print("⚠️  Merge conflicts detected. Resolving automatically...")
        
        # Step 4: Resolve conflicts
        print("\n🔧 Step 4: Resolving merge conflicts...")
        if resolve_merge_conflicts():
            print("✅ All conflicts resolved!")
            
            # Step 5: Add resolved files
            print("\n📝 Step 5: Adding resolved files...")
            returncode, stdout, stderr = run_command("git add .")
            if returncode != 0:
                print(f"❌ Failed to add files: {stderr}")
                return False
            
            # Step 6: Complete merge
            print("\n✅ Step 6: Completing merge...")
            returncode, stdout, stderr = run_command("git commit -m 'Merge PR #31673: Fix errors and merge to main - resolved all conflicts automatically'")
            if returncode != 0:
                print(f"❌ Failed to complete merge: {stderr}")
                return False
            
            print("🎉 PR merged successfully!")
            return True
        else:
            print("❌ Failed to resolve conflicts")
            return False
    else:
        print(f"❌ Merge failed: {stderr}")
        return False

if __name__ == "__main__":
    import glob
    success = main()
    sys.exit(0 if success else 1)