#!/usr/bin/env python3
"""
Resolve Remaining Merge Conflicts
This script resolves any remaining merge conflicts and commits the changes
"""

import os
import subprocess
import re
from typing import List

class RemainingConflictResolver:
    def __init__(self):
        self.resolved_files = []
        self.failed_files = []
        
    def print_status(self, msg: str):
        print(f"\033[0;34m[INFO]\033[0m {msg}")

    def print_success(self, msg: str):
        print(f"\033[0;32m[SUCCESS]\033[0m {msg}")

    def print_warning(self, msg: str):
        print(f"\033[1;33m[WARNING]\033[0m {msg}")

    def print_error(self, msg: str):
        print(f"\033[0;31m[ERROR]\033[0m {msg}")

    def find_remaining_conflicts(self) -> List[str]:
        """Find files with remaining merge conflicts"""
        self.print_status("Finding remaining merge conflicts...")
        
        conflict_files = []
        for root, dirs, files in os.walk('.'):
            # Skip certain directories
            if any(skip in root for skip in ['.git', 'node_modules', 'backup', 'temp_', 'out', 'dist', 'build']):
                continue
                
            for file in files:
                if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.json', '.md', '.css')):
                    file_path = os.path.join(root, file)
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            content = f.read()
                            if '                                conflict_files.append(file_path)
                    except Exception:
                        continue
        
        self.print_status(f"Found {len(conflict_files)} files with remaining conflicts")
        return conflict_files

    def resolve_conflicts_in_file(self, file_path: str) -> bool:
        """Resolve conflicts in a single file"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            self.print_warning(f"Could not read {file_path}: {e}")
            return False
        
        # Check if file has conflict markers
        if '            return True
        
        self.print_status(f"Resolving conflicts in {file_path}...")
        
        # Simple conflict resolution - prefer incoming changes (theirs)
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        conflict_marker = None
        conflict_count = 0
        
        for i, line in enumerate(lines):
            if line.startswith('<<<<<<<'):
                in_conflict = True
                conflict_marker = 'ours'
                conflict_count += 1
                continue
            elif line.startswith('                conflict_marker = 'theirs'
                continue
            elif line.startswith('>>>>>>>'):
                in_conflict = False
                conflict_marker = None
                continue
            elif in_conflict:
                # In conflict section - prefer incoming changes
                if conflict_marker == 'theirs':
                    resolved_lines.append(line)
                # Skip 'ours' lines
            else:
                resolved_lines.append(line)
        
        # Write resolved content
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(resolved_lines))
            self.print_success(f"Resolved {conflict_count} conflicts in {file_path}")
            return True
        except Exception as e:
            self.print_error(f"Could not write to {file_path}: {e}")
            return False

    def commit_resolved_conflicts(self) -> bool:
        """Commit the resolved conflicts"""
        self.print_status("Committing resolved conflicts...")
        
        try:
            # Add all resolved files
            subprocess.run(['git', 'add', '.'], check=True)
            
            # Commit the changes
            subprocess.run(['git', 'commit', '-m', 'Resolve remaining merge conflicts automatically'], check=True)
            
            self.print_success("Successfully committed resolved conflicts")
            return True
        except subprocess.CalledProcessError as e:
            self.print_error(f"Failed to commit resolved conflicts: {e}")
            return False

    def run(self):
        """Main execution function"""
        self.print_status("🚀 Starting remaining merge conflict resolution...")
        
        # Find remaining conflicts
        conflict_files = self.find_remaining_conflicts()
        
        if not conflict_files:
            self.print_success("No remaining conflicts found!")
            return True
        
        # Resolve conflicts in each file
        for file_path in conflict_files:
            if self.resolve_conflicts_in_file(file_path):
                self.resolved_files.append(file_path)
            else:
                self.failed_files.append(file_path)
        
        # Commit the resolved conflicts
        if self.commit_resolved_conflicts():
            self.print_success("🎉 Successfully resolved and committed remaining conflicts")
        else:
            self.print_warning("Could not commit resolved conflicts")
        
        # Print summary
        self.print_status(f"Resolved {len(self.resolved_files)} files")
        if self.failed_files:
            self.print_warning(f"Failed to resolve {len(self.failed_files)} files:")
            for file in self.failed_files[:10]:  # Show first 10
                self.print_warning(f"  - {file}")
        
        return len(self.failed_files) == 0

if __name__ == "__main__":
    resolver = RemainingConflictResolver()
    success = resolver.run()
    exit(0 if success else 1)