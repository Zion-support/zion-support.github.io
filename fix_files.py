#!/usr/bin/env python3

# Read and fix ErrorBoundary.tsx
with open('/workspace/app/components/ErrorBoundary.tsx', 'r') as f:
    content = f.read()

# Fix all the line breaks
fixes = [
    ('param\neters', 'parameters'),
    ('errorIn\nfo', 'errorInfo'),
    ('bg-gray-50\n">', 'bg-gray-50">'),
    ('text\n-center">', 'text-center">'),
    ('th\ne page', 'the page'),
    ('font-\nsemibold', 'font-semibold'),
    ('h\nover:bg-red-50', 'hover:bg-red-50'),
    ('hover\n:text-gray-700', 'hover:text-gray-700'),
]

for old, new in fixes:
    content = content.replace(old, new)

with open('/workspace/app/components/ErrorBoundary.tsx', 'w') as f:
    f.write(content)

print("Fixed ErrorBoundary.tsx")

# Fix enterprise/page.tsx - add missing closing brace
with open('/workspace/app/enterprise/page.tsx', 'r') as f:
    content = f.read()

# Fix line breaks in enterprise page
enterprise_fixes = [
    ('from-c\nyan-500', 'from-cyan-500'),
    ('p\ny-4', 'py-4'),
    ('tra\nnsform', 'transform'),
    ('h\nover:shadow-2xl', 'hover:shadow-2xl'),
    ('bg-wh\nite/20', 'bg-white/20'),
]

for old, new in enterprise_fixes:
    content = content.replace(old, new)

# Add missing closing brace if needed
if not content.strip().endswith('}'):
    content = content.rstrip() + '\n}\n'

with open('/workspace/app/enterprise/page.tsx', 'w') as f:
    f.write(content)

print("Fixed enterprise/page.tsx")