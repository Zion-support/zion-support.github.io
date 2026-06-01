#!/usr/bin/env python3
import re

with open('app/data/servicesData.ts', 'r') as f:
    content = f.read()

# Replace all occurrences of a comma followed by a backslash followed by a newline
# with just a comma followed by a newline.
# We use re.DOTALL? Actually we want to match across lines? The pattern is comma, backslash, newline.
# We'll do:
new_content = re.sub(r',\\\\n', ',\n', content)

with open('app/data/servicesData.ts', 'w') as f:
    f.write(new_content)

print("Fixed comma-backslash-newline patterns.")