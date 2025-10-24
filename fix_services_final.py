#!/usr/bin/env python3

import re

# Read the file
with open('/workspace/app/data/services.ts', 'r') as f:
    content = f.read()

# Count patterns before fixing
pattern1_count = len(re.findall(r"users: [^,]+,\}freeTrial: [^,]+,\},", content))
pattern2_count = len(re.findall(r"users: [^,]+,\}freeTrial: [^,]+,\}", content))

print(f"Found {pattern1_count} matches for pattern 1")
print(f"Found {pattern2_count} matches for pattern 2")

# Fix the malformed object syntax
# Pattern: users: 'X',}freeTrial: 'Y',},
content = re.sub(r"users: ([^,]+),\}freeTrial: ([^,]+),\},", r"users: \1,\n    freeTrial: \2\n  },", content)

# Pattern: users: 'X',}freeTrial: 'Y',}
content = re.sub(r"users: ([^,]+),\}freeTrial: ([^,]+),\}", r"users: \1,\n    freeTrial: \2\n  }", content)

# Write the fixed content back
with open('/workspace/app/data/services.ts', 'w') as f:
    f.write(content)

print("Fixed services.ts file with correct patterns")