#!/bin/bash

# Fix all @/ imports to relative imports
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
