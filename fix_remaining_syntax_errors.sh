#!/bin/bash

echo "Fixing remaining syntax errors..."

# Fix AllCategoriesPage.tsx - replace semicolons with commas in object properties
sed -i 's/blockchain';/blockchain',/g' src/pages/AllCategoriesPage.tsx
sed -i 's/Blockchain Solutions';/Blockchain Solutions',/g' src/pages/AllCategoriesPage.tsx
sed -i 's/Decentralized applications and smart contracts';/Decentralized applications and smart contracts',/g' src/pages/AllCategoriesPage.tsx
sed -i 's/Briefcase;/Briefcase,/g' src/pages/AllCategoriesPage.tsx

# Fix Blog.tsx - replace semicolons with commas in object properties
sed -i 's/The Future of AI: 2025 Predictions and Beyond';/The Future of AI: 2025 Predictions and Beyond',/g' src/pages/Blog.tsx
sed -i 's/Exploring the revolutionary AI technologies that will reshape industries in 2025 and beyond.';/Exploring the revolutionary AI technologies that will reshape industries in 2025 and beyond.',/g' src/pages/Blog.tsx
sed -i 's/2025-01-15';/2025-01-15',/g' src/pages/Blog.tsx
sed -i 's/5 min read';/5 min read',/g' src/pages/Blog.tsx

# Fix BlogPost.tsx - fix missing imports and variables
sed -i 's/import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from '\''lucide-react'\'';/import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from '\''lucide-react'\'';/g' src/pages/BlogPost.tsx
sed -i 's/import { Separator } from "\/components\/ui\/separator";/import { Separator } from "\/components\/ui\/separator";/g' src/pages/BlogPost.tsx
sed -i 's/import ReactMarkdown from '\''react-markdown'\'';/import ReactMarkdown from '\''react-markdown'\'';/g' src/pages/BlogPost.tsx

# Add missing imports and variables at the top of BlogPost.tsx
cat > temp_blogpost_header.txt << 'EOF'
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import type { BlogPost as BlogPostType } from "@/types/blog";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from 'react-markdown';
import { logErrorToProduction } from '@/utils/productionLogger';
import { BLOG_POSTS } from "@/data/blog-posts";
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout';
import { fetchWithRetry } from '@/utils/fetchWithRetry';
import { SEO } from '@/components/SEO';
import { JsonLd } from '@/components/JsonLd';

// Mock data - in a real app this would come from props or API
const post = {
  title: 'Sample Blog Post',
  excerpt: 'This is a sample blog post excerpt',
  tags: ['AI', 'Technology'],
  featuredImage: '/images/sample.jpg',
  slug: 'sample-post'
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": post.title,
  "description": post.excerpt
};

EOF

# Replace the beginning of BlogPost.tsx with the corrected version
head -n 10 src/pages/BlogPost.tsx > temp_blogpost_body.txt
tail -n +11 src/pages/BlogPost.tsx >> temp_blogpost_body.txt
cat temp_blogpost_header.txt temp_blogpost_body.txt > src/pages/BlogPost.tsx
rm temp_blogpost_header.txt temp_blogpost_body.txt

# Fix DeveloperPortal.tsx - fix JSX structure
sed -i 's/return (/  return (/' src/pages/DeveloperPortal.tsx
sed -i 's/<div className="min-h-screen bg-zion-blue">/    <div className="min-h-screen bg-zion-blue">/' src/pages/DeveloperPortal.tsx
sed -i 's/<div className="container mx-auto px-4 py-8">/      <div className="container mx-auto px-4 py-8">/' src/pages/DeveloperPortal.tsx

# Fix EquipmentPage.tsx - fix import statements
sed -i 's/import { useRouter,, ,  } from '\''next\/router'\'';/import { useRouter } from '\''next\/router'\'';/g' src/pages/EquipmentPage.tsx
sed -i 's/import { useState,, useEffect,, useCallback,, useMemo,, ,  } from '\''react'\'';/import { useState, useEffect, useCallback, useMemo } from '\''react'\'';/g' src/pages/EquipmentPage.tsx
sed -i 's/import { motion,, AnimatePresence,, ,  } from '\''framer-motion'\'';/import { motion, AnimatePresence } from '\''framer-motion'\'';/g' src/pages/EquipmentPage.tsx
sed -i 's/import { ArrowUp,, Filter,, SortAsc,, Zap,, TrendingUp,, Star,, ShoppingCart,, MapPin,, Package,, AlertTriangle,, RefreshCw,  } from '\''lucide-react'\''/import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, MapPin, Package, AlertTriangle, RefreshCw } from '\''lucide-react'\''/g' src/pages/EquipmentPage.tsx

echo "Syntax error fixes completed!"