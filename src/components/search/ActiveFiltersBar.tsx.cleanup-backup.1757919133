import React from 'react';
<<<<<<< HEAD
import { X } from 'lucide-react';

interface Filter {
  key: string;
  value: string;
  label: string;
}

interface ActiveFiltersBarProps {
  filters: Filter[];
  onRemoveFilter: (key: string) => void;
  onClearAll: () => void;
}

export function ActiveFiltersBar({ filters, onRemoveFilter, onClearAll }: ActiveFiltersBarProps) {
  if (filters.length === 0) {
=======
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SearchFilters {
  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: string;
}

interface ActiveFiltersBarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onClearAll: () => void;
  className?: string;
}

export const ActiveFiltersBar: React.FC<ActiveFiltersBarProps> = ({
  filters,
  onFiltersChange,
  onClearAll,
  className = ''
}) => {
  const activeFilters: Array<{ key: string; label: string; value: string }> = [];

  // Add type filters
  filters.types.forEach(type => {
    const labels: Record<string, string> = {
      product: 'Products',
      talent: 'Talent',
      service: 'Services',
      blog: 'Blog Posts',
      doc: 'Documentation'
    };
    activeFilters.push({
      key: `type-${type}`,
      label: 'Type',
      value: labels[type] || type
    });
  });

  // Add category filter
  if (filters.category) {
    activeFilters.push({
      key: 'category',
      label: 'Category',
      value: filters.category
    });
  }

  // Add price filter
  if (filters.minPrice > 0 || filters.maxPrice < 10000) {
    activeFilters.push({
      key: 'price',
      label: 'Price',
      value: `$${filters.minPrice} - $${filters.maxPrice}`
    });
  }

  // Add rating filter
  if (filters.minRating > 0) {
    activeFilters.push({
      key: 'rating',
      label: 'Rating',
      value: `${filters.minRating}+ stars`
    });
  }

  // Add sort filter (only if not default)
  if (filters.sort !== 'relevance') {
    const sortLabels: Record<string, string> = {
      price_asc: 'Price: Low to High',
      price_desc: 'Price: High to Low',
      rating: 'Highest Rated'
    };
    activeFilters.push({
      key: 'sort',
      label: 'Sort',
      value: sortLabels[filters.sort] || filters.sort
    });
  }

  const removeFilter = (filterKey: string) => {
    if (filterKey.startsWith('type-')) {
      const typeToRemove = filterKey.replace('type-', '');
      const newTypes = filters.types.filter(t => t !== typeToRemove);
      onFiltersChange({ ...filters, types: newTypes });
    } else if (filterKey === 'category') {
      onFiltersChange({ ...filters, category: '' });
    } else if (filterKey === 'price') {
      onFiltersChange({ ...filters, minPrice: 0, maxPrice: 10000 });
    } else if (filterKey === 'rating') {
      onFiltersChange({ ...filters, minRating: 0 });
    } else if (filterKey === 'sort') {
      onFiltersChange({ ...filters, sort: 'relevance' });
    }
  };

  if (activeFilters.length === 0) {
>>>>>>> origin/auto/autonomy-17186719616
    return null;
  }

  return (
<<<<<<< HEAD
    <div className="flex flex-wrap items-center gap-2 p-4 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light/20">
      <span className="text-sm text-zion-slate-light mr-2">Active filters:</span>

      {filters.map((filter) => (
        <div
          key={filter.key}
          className="inline-flex items-center gap-2 px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30"
        >
          <span>{filter.label}: {filter.value}</span>
          <button
            onClick={() => onRemoveFilter(filter.key)}
            className="hover:bg-zion-cyan/30 rounded-full p-1 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}

      <button
        onClick={onClearAll}
        className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors underline"
      >
        Clear all
      </button>
    </div>
  );
}
=======
    <div className={`flex items-center gap-2 flex-wrap ${className}`}>
      <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
      
      {activeFilters.map(filter => (
        <Badge 
          key={filter.key} 
          variant="secondary" 
          className="flex items-center gap-1 pl-2 pr-1"
        >
          <span className="text-xs">
            {filter.label}: {filter.value}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="h-4 w-4 p-0 hover:bg-transparent"
            onClick={() => removeFilter(filter.key)}
            aria-label={`Remove ${filter.label} filter`}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      ))}

      <Button
        variant="ghost"
        size="sm"
        onClick={onClearAll}
        className="text-xs h-6 px-2"
      >
        Clear all
      </Button>
    </div>
  );
};

export default ActiveFiltersBar;
>>>>>>> origin/auto/autonomy-17186719616
