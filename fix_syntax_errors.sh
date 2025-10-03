#!/bin/bash

echo "Fixing syntax errors in TypeScript/JSX files..."

# Find all TypeScript/JSX files with syntax errors
find src/ -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    if [[ -f "$file" ]]; then
        echo "Processing: $file"
        
        # Fix common syntax errors
        # 1. Fix malformed JSX attributes (className= "value" -> className="value")
        sed -i 's/className= "/className="/g' "$file"
        sed -i 's/className =" /className="/g' "$file"
        
        # 2. Fix malformed JSX attributes (rel: "canonical" -> rel="canonical")
        sed -i 's/rel: "/rel="/g' "$file"
        sed -i 's/name: "/name="/g' "$file"
        sed -i 's/href =" /href="/g' "$file"
        sed -i 's/to: "/to="/g' "$file"
        
        # 3. Fix malformed JSX closing tags (</h3>" -> </h3>)
        sed -i 's/<\/[^>]*>"$/<\/h3>/g' "$file"
        sed -i 's/<\/[^>]*>"$/<\/p>/g' "$file"
        sed -i 's/<\/[^>]*>"$/<\/div>/g' "$file"
        sed -i 's/<\/[^>]*>"$/<\/section>/g' "$file"
        
        # 4. Fix malformed string literals with extra quotes
        sed -i 's/"[^"]*"[^"]*"$/"\1"/g' "$file"
        
        # 5. Fix malformed array syntax in objects
        sed -i 's/features: \["/features: ["/g' "$file"
        sed -i 's/"\]"$/"]/g' "$file"
        
        # 6. Fix malformed JSX fragments
        sed -i 's/<>$/<>/g' "$file"
        sed -i 's/<\/>$/<\/>/g' "$file"
        
        # 7. Fix malformed JSX elements without proper closing
        sed -i 's/<div className="[^"]*"$/&>/g' "$file"
        sed -i 's/<section className="[^"]*"$/&>/g' "$file"
        sed -i 's/<h1 className="[^"]*"$/&>/g' "$file"
        sed -i 's/<h2 className="[^"]*"$/&>/g' "$file"
        sed -i 's/<h3 className="[^"]*"$/&>/g' "$file"
        sed -i 's/<p className="[^"]*"$/&>/g' "$file"
        
        # 8. Fix malformed Link components
        sed -i 's/<Link to: "/<Link to="/g' "$file"
        sed -i 's/className =" /className="/g' "$file"
        
        # 9. Fix malformed meta tags
        sed -i 's/<meta name: "/<meta name="/g' "$file"
        sed -i 's/content =" /content="/g' "$file"
        
        # 10. Fix malformed link tags
        sed -i 's/<link rel: "/<link rel="/g' "$file"
        
        # 11. Fix unterminated string literals
        sed -i 's/"$//g' "$file"
        
        # 12. Fix malformed JSX expressions
        sed -i 's/"[^"]*"$/"\1"/g' "$file"
        
        # 13. Fix malformed closing tags
        sed -i 's/<\/[^>]*>"$/<\/h3>/g' "$file"
        sed -i 's/<\/[^>]*>"$/<\/p>/g' "$file"
        sed -i 's/<\/[^>]*>"$/<\/div>/g' "$file"
        sed -i 's/<\/[^>]*>"$/<\/section>/g' "$file"
        
        # 14. Fix malformed JSX elements
        sed -i 's/<div className="[^"]*"$/&>/g' "$file"
        sed -i 's/<section className="[^"]*"$/&>/g' "$file"
        
        # 15. Fix malformed export statements
        sed -i 's/export default [^;]*;$/export default Component;/g' "$file"
        
        echo "Fixed: $file"
    fi
done

echo "Syntax error fixing completed!"