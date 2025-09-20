#!/bin/bash

echo "🔧 Fixing JSX syntax errors in app directory..."

# Fix JSX component syntax - remove commas after component names
find app -name "*.tsx" -type f -exec sed -i 's/<SEO,/<SEO/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<ErrorBoundary,/<ErrorBoundary/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<div,/</div>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<h1,/<h1/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<h2,/<h2/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<h3,/<h3/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<p,/<p/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<span,/<span/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<section,/<section/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<article,/<article/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<header,/<header/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<footer,/<footer/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<main,/<main/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<nav,/<nav/g' {} \;

# Fix closing JSX syntax - remove commas before closing tags
find app -name "*.tsx" -type f -exec sed -i 's/,<\/div>/<\/div>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/,<\/h1>/<\/h1>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/,<\/h2>/<\/h2>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/,<\/h3>/<\/h3>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/,<\/p>/<\/p>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/,<\/span>/<\/span>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/,<\/section>/<\/section>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/,<\/article>/<\/article>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/,<\/header>/<\/header>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/,<\/footer>/<\/footer>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/,<\/main>/<\/main>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/,<\/nav>/<\/nav>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/,<\/SEO>/<\/SEO>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/,<\/ErrorBoundary>/<\/ErrorBoundary>/g' {} \;

# Fix malformed return statements with commas
find app -name "*.tsx" -type f -exec sed -i 's/return (;/return (/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/    <\/div>,/    <\/div>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/  <\/div>,/  <\/div>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<\/div>,/<\/div>/g' {} \;

# Fix trailing commas in JSX attributes
find app -name "*.tsx" -type f -exec sed -i 's/title="[^"]*",/title="[^"]*"/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/description="[^"]*",/description="[^"]*"/g' {} \;

echo "✅ JSX syntax fixes completed!"