#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by removing conflict markers
and keeping the code between conflict sections intelligently.
"""
import re
import sys
from pathlib import Path

def clean_merge_conflicts(file_path):
    """Remove merge conflict markers from a file."""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if not any(marker in content for marker in ['<<<<<<<', '=======', '>>>>>>>']):
            return False
        
        lines = content.split('\n')
        cleaned_lines = []
        in_conflict = False
        conflict_section = []
        keeping_ours = True
        
        i = 0
        while i < len(lines):
            line = lines[i]
            
            # Start of conflict
            if line.startswith('<<<<<<<'):
                in_conflict = True
                conflict_section = []
                keeping_ours = True
            # Middle of conflict
            elif line.startswith('=======') and in_conflict:
                keeping_ours = False
            # End of conflict
            elif line.startswith('>>>>>>>') and in_conflict:
                in_conflict = False
                # If we collected any valid code, keep it
                if conflict_section:
                    cleaned_lines.extend(conflict_section)
                conflict_section = []
            # Regular line
            elif in_conflict:
                # Only keep non-empty, non-marker lines from the first section
                if keeping_ours and line.strip() and not line.strip().startswith(('<<<', '===', '>>>')):
                    conflict_section.append(line)
            else:
                # Not in conflict, keep the line
                cleaned_lines.append(line)
            
            i += 1
        
        # Write back the cleaned content
        cleaned_content = '\n'.join(cleaned_lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}", file=sys.stderr)
        return False

def main():
    """Main function to clean merge conflicts in priority files."""
    priority_files = [
        'api/onsite-request.js',
        'api/shipping-rates.js',
        'api/subscribe.js',
        'app/about/page.tsx',
        'app/components/ErrorBoundary.tsx',
        'app/contact/page.tsx',
        'app/enterprise/page.tsx',
        'app/not-found.tsx',
        'app/setupTests.tsx',
        'app/utils/enhancedErrorHandler.ts',
        'components/LoadingComponents.tsx',
        'src/components/PerformanceMonitor.tsx',
        'src/hooks/usePerformance.ts',
        'src/utils/analytics.ts',
        'src/utils/errorHandler.ts',
    ]
    
    workspace = Path('/workspace')
    cleaned_count = 0
    
    for file_rel in priority_files:
        file_path = workspace / file_rel
        if file_path.exists():
            if clean_merge_conflicts(file_path):
                print(f"Cleaned: {file_rel}")
                cleaned_count += 1
        else:
            print(f"Not found: {file_rel}", file=sys.stderr)
    
    print(f"\nTotal files cleaned: {cleaned_count}")

if __name__ == '__main__':
    main()