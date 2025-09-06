import React from 'react';
import { X } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
interface SearchFilters {
  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: string
}

interface ActiveFiltersBarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onClearAll: () => void;
  className?: string
}

export const ActiveFiltersBar: React.FC<ActiveFiltersBarProps> = ({
  filters;
  onFiltersChange;
  onClearAll;
  className;
