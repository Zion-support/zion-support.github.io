import React from 'react';

interface SearchFilters {_types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: string;}

interface ActiveFiltersBarProps {_filters: SearchFilters;
  onFiltersChange: (_filters: SearchFilters) => void;
  onClearAll: () => void;
  className?: string;}

export const ActiveFiltersBar: React.FC<ActiveFiltersBarProps> = (_{_filters, _onFiltersChange, _onClearAll, _className = ''}) => {_const activeFilters: Array<{ key: string; label: string; value: string}> = [];

  // Add type filters
  filters.types.forEach(type => {_const labels: Record<string, _string> = {
      product: 'Products', _talent: 'Talent', _service: 'Services', _blog: 'Blog Posts', _doc: 'Documentation'};
    activeFilters.push({_key: `type-${type}`,
      label: 'Type',
      value: labels[type] || type
    });
  });

  // Add category filter
  if (filters.category) {_activeFilters.push({
      key: 'category', _label: 'Category', _value: filters.category});
  }

  // Add price filter
  if (filters.minPrice > 0 || filters.maxPrice < 10000) {_activeFilters.push({
      key: 'price', _label: 'Price', _value: `$${filters.minPrice} - $${_filters.maxPrice}`
    });
  }

  // Add rating filter
  if (filters.minRating > 0) {_activeFilters.push({
      key: 'rating', _label: 'Rating', _value: `${filters.minRating}+ stars`
    });
  }

  // Add sort filter (only if not default)
  if (filters.sort !== 'relevance') {_const sortLabels: Record<string, _string> = {
      price_asc: 'Price: Low to High', _price_desc: 'Price: High to Low', _rating: 'Highest Rated'};
    activeFilters.push({_key: 'sort', _label: 'Sort', _value: sortLabels[filters.sort] || filters.sort});
  }

  const _removeFilter = (_filterKey: string) => {_if (filterKey.startsWith('type-')) {
      const _typeToRemove = filterKey.replace('type-', _'');
      const _newTypes = filters.types.filter(t => t !== typeToRemove);
      onFiltersChange({ ...filters, _types: newTypes});
    } else if (filterKey === 'category') {_onFiltersChange({ ...filters, _category: ''});
    } else if (filterKey === 'price') {_onFiltersChange({ ...filters, _minPrice: 0, _maxPrice: 10000});
    } else if (filterKey === 'rating') {_onFiltersChange({ ...filters, _minRating: 0});
    } else if (filterKey === 'sort') {_onFiltersChange({ ...filters, _sort: 'relevance'});
    }
  };

  if (activeFilters.length === 0) {_return null;}

  return (_<div className={_`flex items-center gap-2 flex-wrap ${className}`}>
      <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
      
      {_activeFilters.map(filter => (
        <Badge 
          key={filter.key} 
          variant="secondary" 
          className="flex items-center gap-1 pl-2 pr-1"
        >
          <span className="text-xs">
            {_filter.label}: {_filter.value}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="h-4 w-4 p-0 hover:bg-transparent"
            onClick={_() => removeFilter(filter.key)}
            aria-label={_`Remove ${filter.label} filter`}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      ))}

      <Button
        variant="ghost"
        size="sm"
        onClick={_onClearAll}
        className="text-xs h-6 px-2"
      >
        Clear all
      </Button>
    </div>
  );
};

export default ActiveFiltersBar;
