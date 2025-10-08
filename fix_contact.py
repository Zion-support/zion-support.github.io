#!/usr/bin/env python3
with open('app/contact/page.tsx', 'r') as f:
    content = f.read()

# Remove the extra closing div on line 39
lines = content.split('\n')
# Line 39 (index 38) should be removed if it's just a closing div
if lines[38].strip() == '</div>':
    lines.pop(38)

with open('app/contact/page.tsx', 'w') as f:
    f.write('\n'.join(lines))
print('Fixed contact page')
