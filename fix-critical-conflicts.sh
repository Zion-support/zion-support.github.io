#!/bin/bash

echo "🔧 Fixing critical merge conflicts in app files..."

# Fix app/blog/page.tsx
echo "Fixing app/blog/page.tsx..."
sed -i '/<<<<<<< HEAD/,/>>>>>>> /d' app/blog/page.tsx 2>/dev/null || true
sed -i '/=======/d' app/blog/page.tsx 2>/dev/null || true

# Fix app/case-studies/page.tsx
echo "Fixing app/case-studies/page.tsx..."
sed -i '/<<<<<<< HEAD/,/>>>>>>> /d' app/case-studies/page.tsx 2>/dev/null || true
sed -i '/=======/d' app/case-studies/page.tsx 2>/dev/null || true

# Fix app/content-hub/page.tsx
echo "Fixing app/content-hub/page.tsx..."
sed -i '/<<<<<<< HEAD/,/>>>>>>> /d' app/content-hub/page.tsx 2>/dev/null || true
sed -i '/=======/d' app/content-hub/page.tsx 2>/dev/null || true

# Fix app/layout.tsx
echo "Fixing app/layout.tsx..."
sed -i '/<<<<<<< HEAD/,/>>>>>>> /d' app/layout.tsx 2>/dev/null || true
sed -i '/=======/d' app/layout.tsx 2>/dev/null || true

echo "✅ Critical conflicts fixed!"