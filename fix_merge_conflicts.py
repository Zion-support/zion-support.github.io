#!/usr/bin/env python3
"""Script to automatically resolve merge conflicts in the codebase."""

import re
import os
from pathlib import Path

def remove_conflict_markers(content: str) -> str:
    """Remove merge conflict markers and keep the most appropriate version."""
    lines = content.split('\n')
    result = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this is a conflict marker
        if line.startswith('<<<<<<<'):
            # Found start of conflict
            head_content = []
            i += 1
            
            # Collect HEAD content
            while i < len(lines) and not lines[i].startswith('======='):
                head_content.append(lines[i])
                i += 1
            
            # Skip the ======= line
            if i < len(lines):
                i += 1
            
            # Collect incoming content
            incoming_content = []
            while i < len(lines) and not lines[i].startswith('>>>>>>>'):
                # Check for nested conflict markers
                if lines[i].startswith('>>>>>>>'):
                    break
                incoming_content.append(lines[i])
                i += 1
            
            # Skip the >>>>>>> line
            if i < len(lines):
                i += 1
            
            # Decision logic: prefer incoming (non-HEAD) version if it's not empty
            # Otherwise keep HEAD version
            if incoming_content and any(line.strip() for line in incoming_content):
                # Use incoming content
                result.extend(incoming_content)
            elif head_content:
                # Use HEAD content
                result.extend(head_content)
        else:
            result.append(line)
            i += 1
    
    return '\n'.join(result)

def fix_jsx_syntax_errors(content: str, filename: str) -> str:
    """Fix common JSX syntax errors."""
    
    # Remove any remaining conflict markers
    content = re.sub(r'^<<<<<<< .*$', '', content, flags=re.MULTILINE)
    content = re.sub(r'^=======\s*$', '', content, flags=re.MULTILINE)
    content = re.sub(r'^>>>>>>> .*$', '', content, flags=re.MULTILINE)
    
    # Fix unterminated template literals (add closing backtick if missing)
    # This is a simple heuristic - count backticks and add one if odd number
    if filename.endswith('.ts') or filename.endswith('.tsx'):
        # Count backticks not in strings
        backtick_count = content.count('`')
        # Simple fix: if odd number and file doesn't end with backtick, add one
        if backtick_count % 2 == 1 and not content.rstrip().endswith('`'):
            content = content.rstrip() + '`\n'
    
    return content

def fix_file(filepath: Path) -> bool:
    """Fix merge conflicts in a single file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflict markers
        if '<<<<<<< ' not in content and '=======' not in content and '>>>>>>> ' not in content:
            # Check for other syntax issues
            if filepath.suffix in ['.ts', '.tsx', '.js', '.jsx']:
                fixed_content = fix_jsx_syntax_errors(content, str(filepath))
                if fixed_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(fixed_content)
                    print(f"Fixed syntax in: {filepath}")
                    return True
            return False
        
        original_content = content
        fixed_content = remove_conflict_markers(content)
        fixed_content = fix_jsx_syntax_errors(fixed_content, str(filepath))
        
        if fixed_content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"Fixed conflicts in: {filepath}")
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {filepath}: {e}")
        return False

def find_and_fix_conflicts(root_dir: str) -> int:
    """Find and fix all files with merge conflicts."""
    root_path = Path(root_dir)
    fixed_count = 0
    
    # Files we know have conflicts from type-check
    problem_files = [
        'tsconfig.json',
        'app/App.tsx',
        'app/components/AccessibilityEnhancer.tsx',
        'app/components/ErrorBoundary.tsx',
        'app/components/NewestContent2025Banner.tsx',
        'app/contact/page.tsx',
        'app/enterprise/page.tsx',
        'app/setupTests.tsx',
        'app/utils/accessibilityEnhancer.ts',
        'app/utils/performanceMonitor.ts',
    ]
    
    for rel_path in problem_files:
        filepath = root_path / rel_path
        if filepath.exists():
            if fix_file(filepath):
                fixed_count += 1
    
    return fixed_count

if __name__ == '__main__':
    workspace = '/workspace'
    print("Fixing merge conflicts...")
    fixed = find_and_fix_conflicts(workspace)
    print(f"\nFixed {fixed} files")