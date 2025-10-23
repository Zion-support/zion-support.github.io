#!/usr/bin/env python3

import re

# Read the file
with open('/workspace/app/data/services.ts', 'r') as f:
    content = f.read()

# Fix the malformed object syntax
# Pattern: users: 'X',}freeTrial: 'Y',},
content = re.sub(r"users: ([^,]+),}freeTrial: ([^,]+),},", r"users: \1,\n    freeTrial: \2\n  },", content)

# Pattern: users: 'X',}freeTrial: 'Y',}
content = re.sub(r"users: ([^,]+),}freeTrial: ([^,]+),}", r"users: \1,\n    freeTrial: \2\n  }", content)

# Write the fixed content back
with open('/workspace/app/data/services.ts', 'w') as f:
    f.write(content)

print("Fixed services.ts file with Python")