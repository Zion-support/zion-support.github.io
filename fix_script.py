#!/usr/bin/env python3
import sys

# Read the script
with open('scripts/add_25_new_services.py', 'r') as f:
    lines = f.readlines()

# Find the line where we want to insert the industry field
# We want to insert after the "popular": False, line for each service in the NEW_ENTRIES
# However, note that the NEW_ENTRIES are defined as a list of dictionaries.
# We can change the dictionary to include the industry field.

# Instead, let's change the way the service is built in the script.
# We can see that the script builds a string for each service.
# We can change the string to include the industry field.

# We'll look for the line that contains: '        \"popular\": False,'
# and then we'll insert after it: '        \"industry\": \"General\",'

new_lines = []
for line in lines:
    new_lines.append(line)
    if '"popular": False,' in line:
        # Insert the industry field after this line
        new_lines.append('        \"industry\": \"General\",\\n')

# Write back
with open('scripts/add_25_new_services.py', 'w') as f:
    f.writelines(new_lines)

print("Fixed the script to include industry field.")