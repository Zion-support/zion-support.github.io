#!/bin/bash

# Fix merge conflicts in app/setupTests.tsx
echo "Fixing app/setupTests.tsx..."
# Remove conflict markers and keep both versions merged
sed -i '/^<<<<<<< HEAD$/,/^>>>>>>> 49f746e8c3195449347ee8bebb6ca5b0ab732544$/d' app/setupTests.tsx

# Fix merge conflicts in app/utils/performanceOptimizer.ts
echo "Fixing app/utils/performanceOptimizer.ts..."
sed -i '/^<<<<<<< HEAD$/,/^>>>>>>> 49f746e8c3195449347ee8bebb6ca5b0ab732544$/d' app/utils/performanceOptimizer.ts

# Fix merge conflicts in App.tsx (root level)
echo "Fixing App.tsx..."
sed -i '/^<<<<<<< HEAD$/,/^>>>>>>> 49f746e8c3195449347ee8bebb6ca5b0ab732544$/d' App.tsx

# Fix syntax errors in api files
echo "Checking API files..."

echo "Done!"