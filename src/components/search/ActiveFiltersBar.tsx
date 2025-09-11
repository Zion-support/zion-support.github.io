<<<<<<< HEAD
<<<<<<< HEAD


export default ActiveFiltersBar; import React from 'react'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

import React from 'react',;
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
interface SearchFilters {;
  types: string[],;
  category: string,;
  minPrice: number,;
  maxPrice: number,;
  minRating: number,;
  sort: string;
<<<<<<< HEAD
<<<<<<< HEAD
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
;
  // Add price filter;
  if (filters.minPrice > 0 || filters.maxPrice < 10000) {;
    activeFilters.push({;
      key: 'price',;
      label: 'Price',;
      value: `$${filters.minPrice} - $${filters.maxPrice}`;
    });
  }
;
  // Add rating filter;
  if (filters.minRating > 0) {;
    activeFilters.push({;
      key: 'rating',;
      label: 'Rating',;
      value: `${filters.minRating}+ stars`;
    });
  }
;
  // Add sort filter (only if not default);
  if (filters.sort !== 'relevance') {;
    const sortLabels: Record<string string> = {;
      price_asc: 'Price: Low to High',;
      price_desc: 'Price: High to Low',;
      rating: 'Highest Rated';
    },;
    activeFilters.push({;
      key: 'sort',;
      label: 'Sort',;
      value: sortLabels[filters.sort] || filters.sort;
    });
  }
;
  const removeFilter = (filterKey: string) => {;
    if (filterKey.startsWith('type-')) {;
      const typeToRemove = filterKey.replace('type-', ''),;
      const newTypes = filters.types.filter(t => t !== typeToRemove),;
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
  if (activeFilters.length === 0) {;
    return null;
  }
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { X } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

<<<<<<< HEAD
<<<<<<< HEAD
export default ActiveFiltersBar; import React from 'react'

import { X } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
interface SearchFilters {

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }
  return (


        <Badge 
          key = {filter.key,}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      {activeFilters.map(filter => (
        <Badge 
          key={filter.key} 
<<<<<<< HEAD
<<<<<<< HEAD

          variant="secondary" 

        <Badge
          key = {filter.key,}
          variant="secondary"
      {activeFilters.map(filter => (
        <Badge
          key = {filter.key,}
          variant="secondary"
        <Badge 
          key = {filter.key,}
      
      {activeFilters.map(filter => (
        <Badge 
          key={filter.key} 
          variant="secondary" 
          variant="secondary" 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



          variant="secondary" 
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          className="flex items-center gap-1 pl-2 pr-1"
=======
          className="flex items-center gap-1 pl-2 pr-1"
        >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            onClick = {(,) => removeFilter(filter.key),}
            onClick = {(,) => removeFilter(filter.key),}
            onClick={() => removeFilter(filter.key)}
=======


            onClick={() => removeFilter(filter.key)}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            onClick = {(,) => removeFilter(filter.key),}
            onClick={() => removeFilter(filter.key)}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            aria-label={`Remove ${filter.label} filter`}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      ))}
      <Button
        variant="ghost"
        size="sm"
<<<<<<< HEAD
<<<<<<< HEAD
        onClick = {onClearAll,}
ursor/fix-website-loading-errors-and-merge-6662
        onClick = {onClearAll,}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        onClick = {onClearAll,}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        onClick={onClearAll}


        className="text-xs h-6 px-2"
<<<<<<< HEAD
=======
      >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        Clear all
      </Button>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export default ActiveFiltersBar; import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
interface SearchFilters {
  types: string[],
  category: string,
  min_price: number,
  max_price: number,
  min_rating: number,
  sort: string;
=======

export default ActiveFiltersBar,
interface Filter {
  key: string
  value: string
  label: string
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
interface ActiveFiltersBarProps {
  filters: SearchFilters,
  onFiltersChange: (filters: SearchFilters, ) => void,
  onClearAll: () => void,
  class_name?: string;
}
export const ActiveFiltersBar: React.FC < ActiveFiltersBarProps> = ({
  filters,
  onFiltersChange,
  onClearAll,
  class_name = '';
}, ) => {
  const active_filters: Array<{ key: string, label: string, value: string }> = [],
  // Add type filters;
  filters.types.for_each (type => {
    const labels: Record < string, string> = {
      product: 'Products',
      talent: 'Talent',
      service: 'Services',
      blog: 'Blog Posts',
      doc: 'Documentation';
    },
    active_filters.push ({
      key: `type-${type}`,
      label: 'Type',
      value: labels[type] || type;
    });
  }),
  // Add category filter;
  // Check condition
if ( {) {
  $2
}
    active_filters.push ({
      key: 'category',
      label: 'Category',
      value: filters.category;
    });
  }
  // Add price filter;
  // Check condition
if ( {) {
  $2
}
    active_filters.push ({
      key: 'price',
      label: 'Price',
      value: `$${filters.min_price} - $${filters.max_price}`;
    });
  }
  // Add rating filter;
  // Check condition
if ( {) {
  $2
}
    active_filters.push ({
      key: 'rating',
      label: 'Rating',
      value: `${filters.min_rating}+ stars`;
    });
  }
  // Add sort filter (only if not default);
  // Check condition
if ( {) {
  $2
}
    const sort_labels: Record < string, string> = {
      price_asc: 'Price: Low to High',
      price_desc: 'Price: High to Low',
      rating: 'Highest Rated';
    },
    active_filters.push ({
      key: 'sort',
      label: 'Sort',
      value: sort_labels[filters.sort] || filters.sort;
    });
  }
  const remove_filter = (filter_key: string, ) =>: any {
    if () {) {
  $2
}
      const typeToRemove = filter_key.replace ('type-', ''),
      const new_types = filters.types.filter (t => t !== typeToRemove),
      onFiltersChange ({ ...filters, types: new_types });
    } else // Check condition
if ( {) {
  $2
}
      onFiltersChange ({ ...filters, category: '' });
    } else // Check condition
if ( {) {
  $2
}
      onFiltersChange ({ ...filters, min_price: 0, max_price: 10000 });
    } else // Check condition
if ( {) {
  $2
}
      onFiltersChange ({ ...filters, min_rating: 0 });
    } else // Check condition
if ( {) {
  $2
}
      onFiltersChange ({ ...filters, sort: 'relevance' });
    }
  },
  // Check condition
if ( {) {
  $2
}
    return null;
  }
  return (
    <div className={`flex items - center gap - 2 flex - wrap ${class_name}`}>;
      <span className="text - sm font - medium text - muted - foreground">Active filters:</span>;
      {active_filters.map (filter => (
        <Badge;
          key = {filter.key, }
          variant="secondary";
          className="flex items - center gap - 1 pl - 2 pr - 1";
        >;
          <span className="text - xs">;
            {filter.label}: {filter.value}
          </span>;
          <Button;
            variant="ghost";
            size="sm";
            className="h - 4 w - 4 p - 0 hover:bg - transparent";
            on_click = {(, ) => remove_filter (filter.key), }
            aria - label={`Remove ${filter.label} filter`}
          >;
            <X className="h - 3 w - 3" />;
          </Button>;
        </Badge>))}
      <Button;
        variant="ghost";
        size="sm";
        on_click = {onClearAll, }
        className="text - xs h - 6 px - 2";
      >;
        Clear all;
      </Button>;
    </div>);


},
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default ActiveFiltersBar,

        className="text-xs h-6 px-2">;
        Clear all;
      </Button>;
    </div>;
  );
},;

export default ActiveFiltersBar,;
interface Filter {;
  key: string;
  value: string;
  label: string;
}
<<<<<<< HEAD
export default ActiveFiltersBar
},

<<<<<<< HEAD
export default ActiveFiltersBar,
interface Filter {
  key: string
  value: string
  label: string
}
interface ActiveFiltersBarProps extends React.PropsWithChildren<{}> {
  filters: Filter[]
  onRemoveFilter: key: string void
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ActiveFiltersBarProps extends React && React.PropsWithChildren<{}> {;

  filters: Filter[];
  onRemoveFilter: key: string void;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  onClearAll: : unknown void}
        className="text-sm text-zion-slate-light hover: text-zion-cyan transition-colors underline"
      >
        Clear all
      </button>
    </div>
  )}
'"

<<<<<<< HEAD
<<<<<<< HEAD
export default ActiveFiltersBar,
      </button>;
    </div>;
  )};
'";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  filters: Filter[];
  onRemoveFilter: key: string void;
  onClearAll: : unknown void}
        className="text - sm text - zion - slate - light hover: text - zion - cyan transition - colors underline";
      >;
        Clear all;
      </button>;
    </div>)}
<<<<<<< HEAD
<<<<<<< HEAD
'";
=======
'";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
'";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
