import React, { useState, useEffect, useMemo } from 'react';
import { useRouter  } from 'next/router';
import { Search, Filter, X, SortAsc, SortDesc, GridIcon, List, Loader2 } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Badge  } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';
import { Checkbox  } from '@/components/ui/checkbox';
import { Slider  } from '@/components/ui/slider';
import { Separator  } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger  } from '@/components/ui/sheet';
import { EnhancedSearchInput  } from './EnhancedSearchInput';
import { generateSearchSuggestions  } from '@/data/marketplaceData';
import { logErrorToProduction, logInfo } from '@/utils/productionLogger';
interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'talent' | 'blog' | 'service';
  category?: string;
  url?: string;
  image?: string;
  price?: number;
  currency?: string;
  rating?: number;
  tags?: string[];
  date?: string
}

interface SearchFilters {
  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: string
}

interface SearchResponse {
  results: SearchResult[];
  totalCount: number;
  page: number;
  limit: number;
  query: string;
  hasMore: boolean
}

// Highlight search terms in text
const HighlightText: React.FC<{ text: string, searchTerm: string, className?: string }> = ({ 
  text;
  searchTerm;
  className;