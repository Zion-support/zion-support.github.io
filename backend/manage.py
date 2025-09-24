#!/usr/bin/env python
import os
import sys

if __name__ == '__main__':
    # Ensure parent directory is on sys.path so 'backend.*' imports work
    project_root = os.path.dirname(os.path.abspath(__file__))
    parent_dir = os.path.dirname(project_root)
    if parent_dir not in sys.path:
        sys.path.insert(0, parent_dir)
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_backend.settings')
    from django.core.management import execute_from_command_line
    execute_from_command_line(sys.argv)
