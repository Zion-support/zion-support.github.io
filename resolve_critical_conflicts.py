#!/usr/bin/env python3
"""
Resolve Critical Merge Conflicts
This script focuses on resolving the most critical merge conflicts first
"""

import os
import re
import subprocess
from typing import List, Dict, Any

class CriticalConflictResolver:
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

    def find_conflict_files(self) -> List[str]:
        """Find files with merge conflicts"""
        self.print_status("Finding files with merge conflicts...")
        
        conflict_files = []
        for root, dirs, files in os.walk('.'):
            # Skip certain directories
            if any(skip in root for skip in ['.git', 'node_modules', 'backup', 'temp_']):
                continue
                
            for file in files:
                if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.json', '.md')):
                    file_path = os.path.join(root, file)
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            content = f.read()
                            if '                                conflict_files.append(file_path)
                    except Exception:
                        continue
        
        self.print_status(f"Found {len(conflict_files)} files with conflicts")
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
        
        # Split content into lines
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
                # In conflict section - choose strategy based on file type
                if self.should_keep_line(file_path, line, conflict_marker):
                    resolved_lines.append(line)
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

    def should_keep_line(self, file_path: str, line: str, conflict_marker: str) -> bool:
        """Determine whether to keep a line during conflict resolution"""
        
        # For TypeScript/JavaScript files, prefer the incoming changes (theirs)
        if file_path.endswith(('.ts', '.tsx', '.js', '.jsx')):
            return conflict_marker == 'theirs'
        
        # For JSON files, prefer the incoming changes
        if file_path.endswith('.json'):
            return conflict_marker == 'theirs'
        
        # For markdown files, prefer the incoming changes
        if file_path.endswith('.md'):
            return conflict_marker == 'theirs'
        
        # Default: prefer incoming changes
        return conflict_marker == 'theirs'

    def resolve_critical_files(self) -> bool:
        """Resolve conflicts in critical files first"""
        critical_files = [
            'app/page.tsx',
            'app/layout.tsx',
            'package.json',
            'next.config.js',
            'tailwind.config.ts',
            'tsconfig.json'
        ]
        
        self.print_status("Resolving conflicts in critical files...")
        
        for file_path in critical_files:
            if os.path.exists(file_path):
                if self.resolve_conflicts_in_file(file_path):
                    self.resolved_files.append(file_path)
                else:
                    self.failed_files.append(file_path)
        
        return len(self.failed_files) == 0

    def resolve_all_conflicts(self) -> bool:
        """Resolve all merge conflicts"""
        conflict_files = self.find_conflict_files()
        
        # Prioritize critical files
        critical_files = [f for f in conflict_files if any(cf in f for cf in ['app/page.tsx', 'app/layout.tsx', 'package.json'])]
        other_files = [f for f in conflict_files if f not in critical_files]
        
        all_files = critical_files + other_files
        
        self.print_status(f"Resolving conflicts in {len(all_files)} files...")
        
        for file_path in all_files:
            if self.resolve_conflicts_in_file(file_path):
                self.resolved_files.append(file_path)
            else:
                self.failed_files.append(file_path)
        
        return len(self.failed_files) == 0

    def commit_resolved_conflicts(self) -> bool:
        """Commit the resolved conflicts"""
        self.print_status("Committing resolved conflicts...")
        
        try:
            # Add all resolved files
            subprocess.run(['git', 'add', '.'], check=True)
            
            # Commit the changes
            subprocess.run(['git', 'commit', '-m', 'Resolve merge conflicts automatically'], check=True)
            
            self.print_success("Successfully committed resolved conflicts")
            return True
        except subprocess.CalledProcessError as e:
            self.print_error(f"Failed to commit resolved conflicts: {e}")
            return False

    def run(self):
        """Main execution function"""
        self.print_status("🚀 Starting critical merge conflict resolution...")
        
        # Resolve critical files first
        if not self.resolve_critical_files():
            self.print_warning("Some critical files had issues, but continuing...")
        
        # Resolve all other conflicts
        if not self.resolve_all_conflicts():
            self.print_warning("Some files had issues, but continuing...")
        
        # Commit the resolved conflicts
        if self.commit_resolved_conflicts():
            self.print_success("🎉 Successfully resolved and committed merge conflicts")
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
    resolver = CriticalConflictResolver()
    success = resolver.run()
    exit(0 if success else 1)