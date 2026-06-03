#!/usr/bin/env python3
import ast
import sys

# Read the backup file
with open('scripts/add_25_new_services.py.backup', 'r') as f:
    content = f.read()

# We want to find the NEW_ENTRIES list and add an industry field to each dictionary in it.
# We can do this by parsing the file as Python, but note that the file is a script.
# Instead, we can use a simple approach: find the NEW_ENTRIES list and then modify it.

# However, note that the file is not just the list, it's a whole script.
# We can try to extract the list, but it's easier to just modify the text.

# We know that each service in NEW_ENTRIES is a dictionary that ends with a comma and then a newline and then either another dictionary or the closing bracket.
# We can look for the pattern: 
#       \"popular\": False,
# and then after that, we want to add a line for industry.

# But note: we must be careful not to add it multiple times.

# We'll do a line-by-line modification.

lines = content.splitlines(keepends=True)
new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    new_lines.append(line)
    # Check if this line contains the popular field for a service in NEW_ENTRIES
    if '"popular": False,' in line:
        # We are inside a service dictionary. We want to add the industry field after this line.
        # But we must check that we are not already in the middle of adding it.
        # We'll look ahead to see if the next line is already an industry line.
        # However, we are building new_lines, so we can just add and then skip if we see we already added.
        # For simplicity, we'll add the industry line and then continue.
        # We must indent it the same as the popular line.
        indent = len(line) - len(line.lstrip())
        new_lines.append(' ' * indent + '"industry": "General",\\n')
    i += 1

# Write back
with open('scripts/add_25_new_services.py', 'w') as f:
    f.writelines(new_lines)

print("Fixed the script to include industry field.")