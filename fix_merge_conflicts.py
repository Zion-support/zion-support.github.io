#!/usr/bin/env python3
import os
import re
import sys
from pathlib import Path

def fix_merge_conflicts(file_path):
    """Fix merge conflict markers in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and everything between them