#!/usr/bin/env python3
import re

with open('app/data/servicesData.ts', 'r') as f:
    content = f.read()

# Replace all occurrences of "industry: 'General',\\n" with "industry: 'General',\n"
new_content = re.sub(r"industry: 'General',\\\\n", "industry: 'General',\n", content)

with open('app/data/servicesData.ts', 'w') as f:
    f.write(new_content)

print("Fixed all extra backslashes in industry lines.")