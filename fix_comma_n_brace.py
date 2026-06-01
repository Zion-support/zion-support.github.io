#!/usr/bin/env python3
with open('app/data/servicesData.ts', 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if ',n  }' in line:
        line = line.replace(',n  }', ',  }')
    new_lines.append(line)

with open('app/data/servicesData.ts', 'w') as f:
    f.writelines(new_lines)

print("Fixed all ',n  }' patterns.")