#!/usr/bin/env python3
import re

# Read the file
with open('/workspace/app/components/ErrorBoundary.tsx', 'r') as f:
    content = f.read()

# Fix line breaks in className attributes and other broken lines
# Remove line breaks within JSX strings/attributes
content = re.sub(r'bg\s*\n\s*-gray-50', 'bg-gray-50', content)
content = re.sub(r'shadow-lg\s*\n\s*p-8', 'shadow-lg p-8', content)
content = re.sub(r'text\s*\n\s*-center', 'text-center', content)
content = re.sub(r'this\.state\s*\n\s*\.errorInfo', 'this.state.errorInfo', content)
content = re.sub(r'param\s*\n\s*eters', 'parameters', content)
content = re.sub(r'th\s*\n\s*e page', 'the page', content)
content = re.sub(r'font-\s*\n\s*semibold', 'font-semibold', content)
content = re.sub(r'h\s*\n\s*over:bg-red-50', 'hover:bg-red-50', content)
content = re.sub(r'hover\s*\n\s*:text-gray-700', 'hover:text-gray-700', content)

# Write the fixed content
with open('/workspace/app/components/ErrorBoundary.tsx', 'w') as f:
    f.write(content)

print("Fixed ErrorBoundary.tsx")

# Fix enterprise/page.tsx
with open('/workspace/app/enterprise/page.tsx', 'r') as f:
    content = f.read()

# Fix line breaks
content = re.sub(r'from-c\s*\n\s*yan-500', 'from-cyan-500', content)
content = re.sub(r'p\s*\n\s*y-4', 'py-4', content)
content = re.sub(r'tra\s*\n\s*nsform', 'transform', content)
content = re.sub(r'h\s*\n\s*over:shadow-2xl', 'hover:shadow-2xl', content)
content = re.sub(r'bg-wh\s*\n\s*ite/20', 'bg-white/20', content)
content = re.sub(r'tra\s*\n\s*nsform', 'transform', content)

# Ensure the file ends with a closing brace for the function
lines = content.rstrip().split('\n')
if lines[-1].strip() == ');':
    # Add the missing closing brace
    content = content.rstrip() + '\n}\n'

with open('/workspace/app/enterprise/page.tsx', 'w') as f:
    f.write(content)

print("Fixed enterprise/page.tsx")