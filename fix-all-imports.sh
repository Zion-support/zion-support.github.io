#!/bin/bash

# Fix all @/ imports to relative imports
<<<<<<< HEAD
echo "Fixing all @/ imports..."

# Find all files with @/ imports and fix them
find /workspace/src -name "*.jsx" -o -name "*.tsx" | while read file; do
    # Get the directory depth to determine the relative path
    dir=$(dirname "$file")
    depth=$(echo "$dir" | grep -o "/" | wc -l)
    
    # Calculate the relative path back to src
    relative_path=""
    for ((i=3; i<=depth; i++)); do
        relative_path="../$relative_path"
    done
    
    # Replace various @/ imports with the relative path
    if grep -q 'from "@/' "$file"; then
        echo "Fixing imports in: $file"
        # Fix @/components, @/pages, @/utils, @/hooks, @/types, @/assets, @/styles, @/data, @/services, @/context, @/constants
        sed -i "s|from \"@/components|from \"${relative_path}components|g" "$file"
        sed -i "s|from \"@/pages|from \"${relative_path}pages|g" "$file"
        sed -i "s|from \"@/utils|from \"${relative_path}utils|g" "$file"
        sed -i "s|from \"@/hooks|from \"${relative_path}hooks|g" "$file"
        sed -i "s|from \"@/types|from \"${relative_path}types|g" "$file"
        sed -i "s|from \"@/assets|from \"${relative_path}assets|g" "$file"
        sed -i "s|from \"@/styles|from \"${relative_path}styles|g" "$file"
        sed -i "s|from \"@/data|from \"${relative_path}data|g" "$file"
        sed -i "s|from \"@/services|from \"${relative_path}services|g" "$file"
        sed -i "s|from \"@/context|from \"${relative_path}context|g" "$file"
        sed -i "s|from \"@/constants|from \"${relative_path}constants|g" "$file"
        sed -i "s|from \"@/layout|from \"${relative_path}layout|g" "$file"
        
        # Also fix single quotes
        sed -i "s|from '@/components|from \"${relative_path}components|g" "$file"
        sed -i "s|from '@/pages|from \"${relative_path}pages|g" "$file"
        sed -i "s|from '@/utils|from \"${relative_path}utils|g" "$file"
        sed -i "s|from '@/hooks|from \"${relative_path}hooks|g" "$file"
        sed -i "s|from '@/types|from \"${relative_path}types|g" "$file"
        sed -i "s|from '@/assets|from \"${relative_path}assets|g" "$file"
        sed -i "s|from '@/styles|from \"${relative_path}styles|g" "$file"
        sed -i "s|from '@/data|from \"${relative_path}data|g" "$file"
        sed -i "s|from '@/services|from \"${relative_path}services|g" "$file"
        sed -i "s|from '@/context|from \"${relative_path}context|g" "$file"
        sed -i "s|from '@/constants|from \"${relative_path}constants|g" "$file"
        sed -i "s|from '@/layout|from \"${relative_path}layout|g" "$file"
    fi
done

echo "All import fixes completed!"
=======
find src -name "*.jsx" -o -name "*.tsx" | while read file; do
  echo "Fixing imports in $file"
  
  # Fix SEO imports
  sed -i "s|import { SEO } from '@/components/SEO';|import { SEO } from '../components/SEO.jsx';|g" "$file"
  sed -i "s|import SEO from '@/components/SEO';|import { SEO } from '../components/SEO.jsx';|g" "$file"
  
  # Fix Header imports
  sed -i "s|import { Header } from '@/components/Header';|import { Header } from '../components/Header';|g" "$file"
  sed -i "s|import Header from '@/components/Header';|import { Header } from '../components/Header';|g" "$file"
  
  # Fix Footer imports
  sed -i "s|import { Footer } from '@/components/Footer';|import { Footer } from '../components/Footer';|g" "$file"
  sed -i "s|import Footer from '@/components/Footer';|import { Footer } from '../components/Footer';|g" "$file"
  
  # Fix GradientHeading imports
  sed -i "s|import { GradientHeading } from '@/components/GradientHeading';|import { GradientHeading } from '../components/GradientHeading';|g" "$file"
  
  # Fix UI component imports
  sed -i "s|import { Button } from '@/components/ui/button';|import { Button } from '../components/ui/button';|g" "$file"
  sed -i "s|import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';|import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';|g" "$file"
  sed -i "s|import { Badge } from '@/components/ui/badge';|import { Badge } from '../components/ui/badge';|g" "$file"
  
  # Fix data imports
  sed -i "s|import { servicesCatalog } from '@/data/servicesCatalog';|import { servicesCatalog } from '../data/servicesCatalog';|g" "$file"
  sed -i "s|import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from '@/data/microSaasServices';|import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from '../data/microSaasServices';|g" "$file"
done

echo "All imports fixed!"
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-ca65
