#!/usr/bin/env python3
import os
import re
import subprocess
import time
from pathlib import Path
def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        # Skip backup files, temporary files, and disabled directories
        skip_patterns = ['.backup', '.tmp', '.temp', 'zion-os.disabled', 'temp_disabled', 'temp_backup', 'backups']
        if any(pattern in file_path for pattern in skip_patterns):
            return False
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        # Check if file has conflict markers
        return resolve_conflicts_prefer_incoming(content)
    elif file_path.endswith(('.tsx', '.ts', '.jsx', '.js')):
        # For code files, prefer the incoming version but be smart about it
        return resolve_conflicts_smart_merge(content)
    elif file_path.endswith(('.md', '.txt', '.rst')):
        # For documentation, merge both versions
        return resolve_conflicts_merge_both(content)
    elif file_path.endswith(('.css', '.scss', '.sass')):
        # For stylesheets, prefer incoming version
        return resolve_conflicts_prefer_incoming(content)
    elif file_path.endswith(('.yml', '.yaml')):
        # For config files, prefer incoming version
        return resolve_conflicts_prefer_incoming(content)
    else:
        # Default: prefer incoming version
        return resolve_conflicts_prefer_incoming(content)
def resolve_conflicts_prefer_incoming(content):
    """Resolve conflicts by preferring the incoming version (after =======)"""
    lines = content.split('\n')
    resolved_lines = []
    skip_until = None
    for line in lines:
        if skip_until:
            if line.strip().startswith(skip_until):
                skip_until = None
            continue
            continue
        elif line.strip().startswith('======='):
            skip_until = '>>>>>>>'
            continue
        elif line.strip().startswith('>>>>>>>'):
            skip_until = None
            continue
        else:
            resolved_lines.append(line)
    return '\n'.join(resolved_lines)
def resolve_conflicts_smart_merge(content):
    """Smart merge for code files - prefer incoming but keep important parts"""
    lines = content.split('\n')
    resolved_lines = []
    skip_until = None
    in_head_section = False
    for line in lines:
        if skip_until:
            if line.strip().startswith(skip_until):
                skip_until = None
                in_head_section = False
            continue
            in_head_section = True
            continue
        elif line.strip().startswith('======='):
            skip_until = '>>>>>>>'
            in_head_section = False
            continue
        elif line.strip().startswith('>>>>>>>'):
            skip_until = None
            in_head_section = False
            continue
        else:
            # Keep the line (preferring incoming version)
            resolved_lines.append(line)
    return '\n'.join(resolved_lines)
def resolve_conflicts_merge_both(content):
    """Merge both versions for documentation files"""
    lines = content.split('\n')
    resolved_lines = []
    skip_until = None
    head_lines = []
    incoming_lines = []
    in_conflict = False
    for line in lines:
        if skip_until:
            if line.strip().startswith(skip_until):
                skip_until = None
                in_conflict = False
            elif in_conflict and line.strip().startswith('======='):
                # Switch to incoming section
                continue
            else:
                if in_conflict:
                    if line.strip().startswith('>>>>>>>'):
                        # End of conflict - merge both versions
                        resolved_lines.extend(head_lines)
                        resolved_lines.extend(incoming_lines)
                        head_lines = []
                        incoming_lines = []
                        in_conflict = False
                    else:
                        incoming_lines.append(line)
                else:
                    resolved_lines.append(line)
            continue
