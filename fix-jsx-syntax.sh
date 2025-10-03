#!/bin/bash

# Fix common JSX syntax errors in TypeScript React files

echo "Fixing JSX syntax errors..."

# Fix className: "..." -> className="..."
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/className: "/className="/g' {} \;

# Fix key: { -> key={
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/key: {/key={/g' {} \;

# Fix href: " -> href="
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/href: "/href="/g' {} \;

# Fix src: " -> src="
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/src: "/src="/g' {} \;

# Fix alt: " -> alt="
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/alt: "/alt="/g' {} \;

# Fix id: " -> id="
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/id: "/id="/g' {} \;

# Fix type: " -> type="
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/type: "/type="/g' {} \;

# Fix placeholder: " -> placeholder="
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/placeholder: "/placeholder="/g' {} \;

# Fix value: { -> value={
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/value: {/value={/g' {} \;

# Fix onClick: { -> onClick={
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/onClick: {/onClick={/g' {} \;

# Fix onChange: { -> onChange={
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/onChange: {/onChange={/g' {} \;

# Fix onSubmit: { -> onSubmit={
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/onSubmit: {/onSubmit={/g' {} \;

# Remove extra quotes and semicolons at the end of JSX attributes
# Fix patterns like className="..." >";,"
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/">";,"/"/g' {} \;
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/"";/"/g' {} \;
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/" >";,"/"/g' {} \;

# Fix malformed closing tags and quotes
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/"";/"/g' {} \;
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/""/"/g' {} \;

# Fix patterns like ">";,"
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/">";,"/"/g' {} \;

echo "JSX syntax fixes completed!"