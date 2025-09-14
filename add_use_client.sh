#!/bin/bash

# Script to add 'use client' directive to all components that use React hooks
echo "Adding 'use client' directive to components..."

# Find all .tsx files in components directory that use React hooks
find components/ -name "*.tsx" -exec grep -l "useState\|useEffect\|useRef\|useCallback\|useMemo" {} \; | while read file; do
    # Check if file already has 'use client'
    if ! grep -q "'use client'" "$file"; then
        echo "Adding 'use client' to: $file"
        # Add 'use client' at the beginning of the file
        sed -i '1i\'\''use client\'\'';\n' "$file"
    else
        echo "Already has 'use client': $file"
    fi
done

echo "Done adding 'use client' directives!"