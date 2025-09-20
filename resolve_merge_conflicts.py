#!/usr/bin/env python3

import os
import subprocess
import sys

def resolve_merge_conflicts():
    """Resolve merge conflicts by accepting HEAD version for most files"""
    
    print("🔧 Resolving merge conflicts...")
    
    # Get list of conflicted files
    try:
        result = subprocess.run(['git', 'diff', '--name-only', '--diff-filter=U'], 
                              capture_output=True, text=True, check=True)
        conflicted_files = result.stdout.strip().split('\n')
        conflicted_files = [f for f in conflicted_files if f.strip()]
        
        if not conflicted_files:
            print("✅ No merge conflicts found!")
            return True
            
        print(f"📋 Found {len(conflicted_files)} files with conflicts")
        
        # Files to keep from HEAD (our improvements)
        files_to_keep_head = [
            'src/components/EnhancedSEO.tsx',
            'src/components/EnhancedAccessibility.tsx',
            'src/components/OptimizedImage.tsx',
            'src/components/VirtualScroll.tsx',
            'src/components/EnhancedPerformanceMonitor.tsx',
            'src/components/BundleAnalyzer.tsx',
            'src/components/EnhancedContactForm.tsx',
            'src/components/InteractiveDashboard.tsx',
            'src/types/common.ts',
            'src/hooks/useErrorHandler.ts',
            'src/hooks/usePerformance.ts',
            'src/App.tsx'
        ]
        
        # Files to keep from incoming (remote)
        files_to_keep_incoming = [
            'src/utils/sitemapGenerator.ts'
        ]
        
        resolved_count = 0
        
        for file_path in conflicted_files:
            try:
                if file_path in files_to_keep_head:
                    # Keep our version (HEAD)
                    subprocess.run(['git', 'checkout', '--ours', file_path], check=True)
                    subprocess.run(['git', 'add', file_path], check=True)
                    print(f"✅ Kept HEAD version: {file_path}")
                    
                elif file_path in files_to_keep_incoming:
                    # Keep incoming version
                    subprocess.run(['git', 'checkout', '--theirs', file_path], check=True)
                    subprocess.run(['git', 'add', file_path], check=True)
                    print(f"✅ Kept incoming version: {file_path}")
                    
                else:
                    # For most other files, keep our version (HEAD) by default
                    subprocess.run(['git', 'checkout', '--ours', file_path], check=True)
                    subprocess.run(['git', 'add', file_path], check=True)
                    print(f"✅ Kept HEAD version: {file_path}")
                
                resolved_count += 1
                
            except subprocess.CalledProcessError as e:
                print(f"❌ Error resolving {file_path}: {e}")
                continue
        
        print(f"\n🎉 Successfully resolved {resolved_count} merge conflicts!")
        
        # Check if all conflicts are resolved
        result = subprocess.run(['git', 'diff', '--name-only', '--diff-filter=U'], 
                              capture_output=True, text=True)
        remaining_conflicts = result.stdout.strip().split('\n')
        remaining_conflicts = [f for f in remaining_conflicts if f.strip()]
        
        if remaining_conflicts:
            print(f"⚠️  Still {len(remaining_conflicts)} conflicts remaining:")
            for conflict in remaining_conflicts:
                print(f"   - {conflict}")
            return False
        else:
            print("✅ All merge conflicts resolved!")
            return True
            
    except subprocess.CalledProcessError as e:
        print(f"❌ Error checking conflicts: {e}")
        return False

def commit_merge():
    """Commit the resolved merge"""
    try:
        print("\n📝 Committing merge...")
        subprocess.run(['git', 'commit', '-m', 'Merge remote-tracking branch origin/main with improvements'], 
                      check=True)
        print("✅ Merge committed successfully!")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error committing merge: {e}")
        return False

def main():
    """Main function"""
    print("🚀 Starting merge conflict resolution...")
    
    # Check if we're in a merge state
    try:
        result = subprocess.run(['git', 'status', '--porcelain'], 
                              capture_output=True, text=True, check=True)
        if 'UU' not in result.stdout:
            print("✅ No merge conflicts detected!")
            return
            
    except subprocess.CalledProcessError:
        print("❌ Error checking git status")
        return
    
    # Resolve conflicts
    if resolve_merge_conflicts():
        # Commit the merge
        if commit_merge():
            print("\n🎉 All merge conflicts resolved and committed!")
            
            # Push changes
            try:
                print("\n📤 Pushing changes to remote...")
                subprocess.run(['git', 'push', 'origin', 'main'], check=True)
                print("✅ Changes pushed successfully!")
            except subprocess.CalledProcessError as e:
                print(f"⚠️  Push failed: {e}")
                print("You may need to push manually later.")
        else:
            print("❌ Failed to commit merge")
    else:
        print("❌ Failed to resolve all merge conflicts")

if __name__ == "__main__":
    main()