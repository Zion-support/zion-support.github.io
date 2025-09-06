=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
interface SearchFilters {
  types: string[],
  category: string,
  minPrice: number,
  maxPrice: number,
  minRating: number,
  sort: string


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
;
interface ActiveFiltersBarProps {;
  filters: SearchFilters,;
  onFiltersChange: (filters: SearchFilters) => void,;
  onClearAll: () => void,;
  className?: string;
}
;
export const ActiveFiltersBar: React.FC<ActiveFiltersBarProps> = ({;
  filters,;
  onFiltersChange,;
  onClearAll,;
  className = '';
}) => {;
  const activeFilters: Array<{ key: string, label: string, value: string }> = [],;
  // Add type filters;
  filters.types.forEach(type => {;
    const labels: Record<string string> = {;
      product: 'Products',;
      talent: 'Talent',;
      service: 'Services',;
      blog: 'Blog Posts',;
      doc: 'Documentation';
    },;
    activeFilters.push({;
      key: `type-${type}`,;
      label: 'Type',;
      value: labels[type] || type;
    });
  }),;
  // Add category filter;
  if (filters.category) {;
    activeFilters.push({;
      key: 'category',;
      label: 'Category',;
      value: filters.category;
    });
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import { X } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SearchFilters {;
  types: string[],;
  category: string,;
  minPrice: number,;
  maxPrice: number,;
  minRating: number,;
  sort: string;
}

interface ActiveFiltersBarProps {;
  filters: SearchFilters,;
  onFiltersChange: (filters: SearchFilters,) => void,;
  onClearAll: () => void,;
  className?: string;
}

export const ActiveFiltersBar: React.FC<ActiveFiltersBarProps> = ({;
  filters,;
  onFiltersChange,;
  onClearAll,;
  className = '';
},) => {;
  const activeFilters: Array<{ key: string, label: string, value: string }> = [],;

  // Add type filters;
  filters && filters.types.forEach(type => {;
    const labels: Record<string, string> = {;
      product: 'Products',;
      talent: 'Talent',;
      service: 'Services',;
      blog: 'Blog Posts',;
      doc: 'Documentation';
    },;
    activeFilters && activeFilters.push({;
      key: `type-${type}`,;
      label: 'Type',;
      value: labels[type] || type;
    });
  }),;

  // Add category filter;
  if (filters && filters.category) {;
    activeFilters && activeFilters.push({;
      key: 'category',;
      label: 'Category',;
      value: filters && filters.category;
    });
  }

  // Add price filter;
  if (filters && filters.minPrice > 0 || filters && filters.maxPrice < 10000) {;
    activeFilters && activeFilters.push({;
      key: 'price',;
      label: 'Price',;
      value: `$${filters && filters.minPrice} - $${filters && filters.maxPrice}`;
    });
  }

  // Add rating filter;
  if (filters && filters.minRating > 0) {;
    activeFilters && activeFilters.push({;
      key: 'rating',;
      label: 'Rating',;
      value: `${filters && filters.minRating}+ stars`;
    });
  }

  // Add sort filter (only if not default);
  if (filters && filters.sort !== 'relevance') {;
    const sortLabels: Record<string, string> = {;
      price_asc: 'Price: Low to High',;
      price_desc: 'Price: High to Low',;
      rating: 'Highest Rated';
    },;
    activeFilters && activeFilters.push({;
      key: 'sort',;
      label: 'Sort',;
      value: sortLabels[filters && filters.sort] || filters && filters.sort;
    });
  }

  const removeFilter = (filterKey: string,) => {;
    if (filterKey && filterKey.startsWith('type-')) {;
      const typeToRemove = filterKey && filterKey.replace('type-', ''),;
      const newTypes = filters && filters.types.filter(t => t !== typeToRemove),;
      onFiltersChange({ ...filters, types: newTypes });
    } else if (filterKey === 'category') {;
      onFiltersChange({ ...filters, category: '' });
    } else if (filterKey === 'price') {;
      onFiltersChange({ ...filters, minPrice: 0, maxPrice: 10000 });
    } else if (filterKey === 'rating') {;
      onFiltersChange({ ...filters, minRating: 0 });
    } else if (filterKey === 'sort') {;
      onFiltersChange({ ...filters, sort: 'relevance' });
    }
  },;

  if (activeFilters && activeFilters.length === 0) {;
    return null;
  }

export default ActiveFiltersBar; import React from 'react'

import { X } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
interface SearchFilters {

  types: string[]
  category: string
  minPrice: number
  maxPrice: number
  minRating: number

  sort: string
}
interface ActiveFiltersBarProps {

  filters: SearchFilters
  onFiltersChange: (filters: SearchFilters,) => void
  onClearAll: () => void

  className?: string
}
export const ActiveFiltersBar: React.FC<ActiveFiltersBarProps> = ({

  filters
  onFiltersChange
  onClearAll
  className = ''
},) => {
  const activeFilters: Array<{ key: string, label: string, value: string }> = []
  // Add type filters
  filters.types.forEach(type => {
    const labels: Record<string, string> = {
      product: 'Products'
      talent: 'Talent'
      service: 'Services'
      blog: 'Blog Posts'
      doc: 'Documentation'
    }
    activeFilters.push({
      key: `type-${type}`
      label: 'Type'
      value: labels[type] |type
    })
  })
  // Add category filter
  if (filters.category) {
    activeFilters.push({
      key: 'category'
      label: 'Category'
      value: filters.category
    })
  }
  // Add price filter
  if (filters.minPrice > 0 |filters.maxPrice < 10000) {
    activeFilters.push({
      key: 'price'
      label: 'Price'
      value: `$${filters.minPrice} - $${filters.maxPrice}`
    })
  }
  // Add rating filter
  if (filters.minRating > 0) {
    activeFilters.push({
      key: 'rating'
      label: 'Rating'
      value: `${filters.minRating}+ stars`
    })
  }
  // Add sort filter (only if not default)
  if (filters.sort !== 'relevance') {
    const sortLabels: Record<string, string> = {
      price_asc: 'Price: Low to High'
      price_desc: 'Price: High to Low'
      rating: 'Highest Rated'
    }
    activeFilters.push({
      key: 'sort'
      label: 'Sort'
      value: sortLabels[filters.sort] |filters.sort
    })
  }
  const removeFilter = (filterKey: string,) => {
    if (filterKey.startsWith('type-')) {
      const typeToRemove = filterKey.replace('type-', '')
      const newTypes = filters.types.filter(t => t !== typeToRemove)
      onFiltersChange({ ...filters, types: newTypes })
    } else if (filterKey === 'category') {
      onFiltersChange({ ...filters, category: '' })
    } else if (filterKey === 'price') {
      onFiltersChange({ ...filters, minPrice: 0, maxPrice: 10000 })
    } else if (filterKey === 'rating') {
      onFiltersChange({ ...filters, minRating: 0 })
    } else if (filterKey === 'sort') {
      onFiltersChange({ ...filters, sort: 'relevance' })
    }
  }
  if (activeFilters.length === 0) {
    return null
  }
  return (
    <div className={`flex items-center gap-2 flex-wrap ${className}`}>
      <span className="text-sm font-medium text-muted-foreground">Active filters:</span>

          variant="secondary"

          className="flex items-center gap-1 pl-2 pr-1"
        >
          <span className="text-xs">
            {filter.label}: {filter.value}
          </span>
    <div className={`flex items-center gap-2 flex-wrap ${className}`}>;
      <span className="text-sm font-medium text-muted-foreground">Active filters:</span>;

      {activeFilters && activeFilters.map(filter => (;
        <Badge
          key = {filter && filter.key,}
          variant="secondary" 
          className="flex items-center gap-1 pl-2 pr-1">;
          <span className="text-xs">;
            {filter && filter.label}: {filter && filter.value}
          </span>;
          <Button
            variant="ghost"
            size="sm"
            className="h-4 w-4 p-0 hover:bg-transparent"

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            aria-label={`Remove ${filter.label} filter`}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      ))}
      <Button
        variant="ghost"
        size="sm"
=======
        onClick = {onClearAll,}
        onClick={onClearAll}

        className="text-xs h-6 px-2"
      >
        Clear all
      </Button>
    </div>
  )
}
export default ActiveFiltersBar
},
interface Filter {
  key: string
  value: string
  label: string
interface Filter {
  key: string
  value: string
  label: string
}
interface ActiveFiltersBarProps extends React.PropsWithChildren<{}> {
  filters: Filter[]
  onRemoveFilter: key: string void
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
<<<<<<< HEAD
      </button>
    </div>
  )}
'"

  filters: Filter[];
  onRemoveFilter: key: string void;
  onClearAll: : unknown void}
        className="text - sm text - zion - slate - light hover: text - zion - cyan transition - colors underline";
      >;
        Clear all;
      </button>;
    </div>)}
'";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
