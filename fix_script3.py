#!/usr/bin/env python3
import ast
import sys

# Read the backup file
with open('scripts/add_25_new_services.py.backup', 'r') as f:
    content = f.read()

# We want to find the NEW_ENTRIES list and add an industry field to each dictionary in it.
# We'll use ast to parse the entire script, find the NEW_ENTRIES assignment, and modify it.

tree = ast.parse(content)

# Find the assignment to NEW_ENTRIES
for node in ast.walk(tree):
    if isinstance(node, ast.Assign):
        for target in node.targets:
            if target.id == 'NEW_ENTRIES':
                # We found the assignment
                # node.value is the list
                # We want to modify each dictionary in the list
                if isinstance(node.value, ast.List):
                    for item in node.value.elts:
                        if isinstance(item, ast.Dict):
                            # Add the industry key if it doesn't exist
                            keys = [k.value if isinstance(k, ast.Str) else None for k in item.keys]
                            if 'industry' not in keys:
                                # We'll add the industry key with value "General"
                                item.keys.append(ast.Constant(value='industry'))
                                item.values.append(ast.Constant(value='General'))
                break

# Convert the tree back to code
new_content = ast.unparse(tree)

# Write back
with open('scripts/add_25_new_services.py', 'w') as f:
    f.write(new_content)

print("Fixed the script to include industry field using AST.")