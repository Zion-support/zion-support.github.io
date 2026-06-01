#!/usr/bin/env python3
with open('/Users/klebergarciaalcatrao/app/services/[id]/page.tsx', 'r') as f:
    lines = f.readlines()

# Find line 281 (0-indexed 280) and replace
if len(lines) > 280:
    line = lines[280]
    # Replace "                  ))}" with "                  )}"
    if "                  ))}" in line:
        lines[280] = line.replace("                  ))}", "                  )}")
        print("Fixed line 281")

with open('/Users/klebergarciaalcatrao/app/services/[id]/page.tsx', 'w') as f:
    f.writelines(lines)