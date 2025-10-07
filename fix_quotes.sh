#!/bin/bash

# Get list of files with TypeScript errors
files=$(npx tsc --noEmit --maxNodeModuleJsDepth 0 2>&1 | grep -o "app/[^:]*\.tsx" | sort | uniq)

echo "Fixing trailing quotes in ${files}..."

for file in $files; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        # Fix trailing quotes in className, href, and other attributes
        sed -i 's/className="[^"]*",$/className="[^"]*"/g' "$file"
        sed -i 's/href="[^"]*",$/href="[^"]*"/g' "$file"
        sed -i 's/src="[^"]*",$/src="[^"]*"/g' "$file"
        sed -i 's/alt="[^"]*",$/alt="[^"]*"/g' "$file"
        sed -i 's/title="[^"]*",$/title="[^"]*"/g' "$file"
        sed -i 's/id="[^"]*",$/id="[^"]*"/g' "$file"
        sed -i 's/name="[^"]*",$/name="[^"]*"/g' "$file"
        sed -i 's/type="[^"]*",$/type="[^"]*"/g' "$file"
        sed -i 's/rel="[^"]*",$/rel="[^"]*"/g' "$file"
        sed -i 's/method="[^"]*",$/method="[^"]*"/g' "$file"
        sed -i 's/action="[^"]*",$/action="[^"]*"/g' "$file"
        sed -i 's/target="[^"]*",$/target="[^"]*"/g' "$file"
        sed -i 's/placeholder="[^"]*",$/placeholder="[^"]*"/g' "$file"
        sed -i 's/value="[^"]*",$/value="[^"]*"/g' "$file"
        sed -i 's/role="[^"]*",$/role="[^"]*"/g' "$file"
        sed -i 's/aria-label="[^"]*",$/aria-label="[^"]*"/g' "$file"
        sed -i 's/data-testid="[^"]*",$/data-testid="[^"]*"/g' "$file"
        
        # Fix trailing quotes in JSX elements
        sed -i 's/>",$/>/g' "$file"
        sed -i 's/",$//g' "$file"
        sed -i 's/",/>/g' "$file"
        
        # Fix specific patterns
        sed -i 's/className="\([^"]*\)",$/className="\1"/g' "$file"
        sed -i 's/href="\([^"]*\)",$/href="\1"/g' "$file"
    fi
done

echo "Done fixing quotes!"