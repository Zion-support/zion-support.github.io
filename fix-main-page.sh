#!/bin/bash

echo "Fixing main page.tsx..."

# Fix the main page.tsx file
sed -i 's/className="[^"]*">"/className="[^"]*">/g' /workspace/app/page.tsx
sed -i 's/content="[^"]*">"/content="[^"]*">/g' /workspace/app/page.tsx
sed -i 's/className="[^"]*">$/className="[^"]*">/g' /workspace/app/page.tsx
sed -i 's/className="[^"]*">$/className="[^"]*">/g' /workspace/app/page.tsx

# Fix missing closing tags
sed -i 's/<span className="[^"]*">$/&>/g' /workspace/app/page.tsx
sed -i 's/<div className="[^"]*">$/&>/g' /workspace/app/page.tsx
sed -i 's/<section className="[^"]*">$/&>/g' /workspace/app/page.tsx
sed -i 's/<button className="[^"]*">$/&>/g' /workspace/app/page.tsx
sed -i 's/<h[1-6] className="[^"]*">$/&>/g' /workspace/app/page.tsx
sed -i 's/<p className="[^"]*">$/&>/g' /workspace/app/page.tsx

# Fix missing closing brackets
sed -i 's/className="[^"]*">$/&>/g' /workspace/app/page.tsx

echo "Main page fixes completed!"