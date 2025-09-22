
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
import { Search, Filter, Grid, List } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
origin/cursor/automate-test-improve-and-merge-code-2533

import ProductCard from '@/components/ProductCard';
import { TalentCard  } from '@/components/talent/TalentCard';
import { CategoryCard  } from '@/components/CategoryCard';
import { SearchEmptyState  } from '@/components/marketplace/EmptyState';
import { MARKETPLACE_LISTINGS  } from '@/data/listingData';
import { TALENT_PROFILES  } from '@/data/talentData';
import { BLOG_POSTS  } from '@/data/blog-posts';
import { useDebounce  } from '@/hooks/useDebounce';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
interface BaseSearchResult {


interface BaseSearchResult {
  id: string;
  title: string;
  description?: string;
  slug: string;
  image?: string;
  author?: {;
    name: string;
  author?: {
    name: string;

    avatar?: string;
  }
  tags?: string[];
  category?: string;
  date?: string;

;

  author?: {
    name: string;

    avatar?: string
  },
  tags?: string[],
  category?: string;
  date?: string
}


origin/cursor/automate-test-improve-and-merge-code-2533
interface ProductSearchResult extends BaseSearchResult {
  type: 'product' | 'equipment';
  price?: number;


interface BlogSearchResult extends BaseSearchResult {
  type: 'blog';

interface CategorySearchResult extends BaseSearchResult {
  type: 'category';


