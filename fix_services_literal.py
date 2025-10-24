#!/usr/bin/env python3

# Read the file
with open('/workspace/app/data/services.ts', 'r') as f:
    content = f.read()

# Count how many patterns we need to fix
count1 = content.count("users: '")
count2 = content.count(",}freeTrial:")
print(f"Found {count1} 'users:' patterns")
print(f"Found {count2} ',}}freeTrial:' patterns")

# Fix the malformed object syntax by replacing the problematic pattern
# Replace users: 'X',}freeTrial: 'Y',}, with proper syntax
import re

# Pattern: users: 'X',}freeTrial: 'Y',},
content = re.sub(r"users: '([^']+)',\}freeTrial: '([^']+)',\},", r"users: '\1',\n    freeTrial: '\2'\n  },", content)

# Pattern: users: 'X',}freeTrial: 'Y',}
content = re.sub(r"users: '([^']+)',\}freeTrial: '([^']+)',\}", r"users: '\1',\n    freeTrial: '\2'\n  }", content)

# Write the fixed content back
with open('/workspace/app/data/services.ts', 'w') as f:
    f.write(content)

print("Fixed services.ts file with literal patterns")