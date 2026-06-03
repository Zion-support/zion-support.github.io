#!/usr/bin/env python3
with open('/Users/klebergarciaalcatrao/app/services/[id]/page.tsx', 'r') as f:
    lines = f.readlines()

# Find the line that contains the extra closing brace and parenthesis
for i, line in enumerate(lines):
    if "                  ))}" in line:
        # Replace with the correct closing
        lines[i] = line.replace("                  ))}", "                  )}")
        break

with open('/Users/klebergarciaalcatrao/app/services/[id]/page.tsx', 'w') as f:
    f.writelines(lines)

print("Fixed the extra closing brace and parenthesis in Deployment Roadmap.")