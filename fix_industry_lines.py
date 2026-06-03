#!/usr/bin/env python3
import re

with open('app/data/servicesData.ts', 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Replace the pattern: industry: 'General',\\n  } (with possible spaces)
    # We'll replace the backslash before the newline in the industry line.
    # We'll look for the pattern: industry: 'General',\\ followed by whitespace and then } and then a comma?
    # Actually, the line we saw was: "    industry: 'General',\\n  }," (with the backslash and then newline, then spaces, then }, then comma)
    # But note that the line ends with a newline, so we are looking at the line that has the industry field.
    # We'll do a simpler approach: if the line contains "industry: 'General',\\" then we remove the backslash.
    if "industry: 'General',\\" in line:
        line = line.replace("industry: 'General',\\", "industry: 'General',")
    new_lines.append(line)

with open('app/data/servicesData.ts', 'w') as f:
    f.writelines(new_lines)

print("Fixed industry lines.")