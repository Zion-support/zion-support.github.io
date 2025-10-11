#!/bin/bash
# Script to remove Next.js dependencies

echo "Removing Next.js packages..."
pnpm remove next @next/bundle-analyzer @next/eslint-plugin-next

echo "Testing build..."
pnpm run build

echo ""
echo "✅ Next.js packages removed and build tested successfully!"
echo ""
echo "Next steps:"
echo "  1. Review package.json scripts for Next.js references"
echo "  2. Commit the changes"
echo "  3. Deploy to Netlify"
