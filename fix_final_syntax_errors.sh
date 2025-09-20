#!/bin/bash

echo "Fixing final syntax errors..."

# Fix AllCategoriesPage.tsx - replace semicolons with commas in remaining objects
sed -i "s/href: '\/services\/blockchain'\n  };/href: '\/services\/blockchain'\n  },/g" src/pages/AllCategoriesPage.tsx

# Fix Blog.tsx - replace semicolons with commas in object properties
sed -i 's/category: '\''AI'\'';/category: '\''AI'\'',/g' src/pages/Blog.tsx
sed -i 's/href: '\''\/blog\/ai-2025-predictions'\'';/href: '\''\/blog\/ai-2025-predictions'\'',/g' src/pages/Blog.tsx
sed -i 's/image: '\''🤖'\'';/image: '\''🤖'\'',/g' src/pages/Blog.tsx

# Fix BlogPost.tsx - remove JsonLd import since it doesn't exist
sed -i 's/import { JsonLd } from '\''@\/components\/JsonLd'\'';//g' src/pages/BlogPost.tsx
sed -i 's/<JsonLd data={articleLd} \/>//g' src/pages/BlogPost.tsx

# Fix DeveloperPortal.tsx - fix JSX structure
sed -i 's/return (/  return (/' src/pages/DeveloperPortal.tsx
sed -i 's/<div className="min-h-screen bg-zion-blue">/    <div className="min-h-screen bg-zion-blue">/' src/pages/DeveloperPortal.tsx
sed -i 's/<div className="container mx-auto px-4 py-8">/      <div className="container mx-auto px-4 py-8">/' src/pages/DeveloperPortal.tsx

# Fix EquipmentPage.tsx - fix import statements
sed -i 's/import { generateDatacenterEquipment,, getEquipmentMarketStats,, getRecommendedEquipment,, ,  } from '\''@\/utils\/equipmentAutoFeedAlgorithm'\'';/import { generateDatacenterEquipment, getEquipmentMarketStats, getRecommendedEquipment } from '\''@\/utils\/equipmentAutoFeedAlgorithm'\'';/g' src/pages/EquipmentPage.tsx
sed -i 's/import { ProductListing,, ,  } from '\''@\/types\/listings'\'';/import { ProductListing } from '\''@\/types\/listings'\'';/g' src/pages/EquipmentPage.tsx
sed -i 's/import { SkeletonCard,, ,  } from '\''@\/components\/ui\/skeleton'\'';/import { SkeletonCard } from '\''@\/components\/ui\/skeleton'\'';/g' src/pages/EquipmentPage.tsx
sed -i 's/import { Button,, ,  } from '\''@\/components\/ui\/button'\'';/import { Button } from '\''@\/components\/ui\/button'\'';/g' src/pages/EquipmentPage.tsx

echo "Final syntax error fixes completed!"