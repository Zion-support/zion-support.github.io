#!/bin/bash

echo "🔧 Fixing Next.js imports to use react-router-dom..."

# Find all files with Next.js imports and fix them
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import Link from '\''next\/link'\''/import { Link } from '\''react-router-dom'\''/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import { useRouter } from '\''next\/router'\''/import { useNavigate } from '\''react-router-dom'\''/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/useRouter()/useNavigate()/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/\.push(/\(/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import Head from '\''next\/head'\''/import { Helmet } from '\''react-helmet-async'\''/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/<Head>/<Helmet>/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/<\/Head>/<\/Helmet>/g' {} \;

echo "✅ Next.js imports fixed!"