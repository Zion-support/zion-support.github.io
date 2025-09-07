class ErrorBoundary extends React.Component {
  constructor(props) {

    super(props);
    this.state = { hasError: false };
import { X } from 'lucide-react''
import { Button } from '@/components/ui/button''
import { Badge } from '@/components/ui/badge'
interface SearchFilters {}
  types: string[],
  category: string,
  minPrice: number,
  maxPrice: number,

import { Badge } from '@/components/ui/badge',;
interface SearchFilters {;
  types: string[],;
  category: string,;
  minPrice: number,;
  maxPrice: number,;
  minRating: number,;
  sort: string;

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
  onClearAll,;'
  className = '';
}) => {;
  const activeFilters: Array<{ key: string, label: string, value: string }> = [],;
  // Add type filters;
  filters.types.forEach(type => {;
    const labels: Record<string string> = {;'
      product: 'Products',;'
      talent: 'Talent',;'
      service: 'Services',;'
      blog: 'Blog Posts',;'
      doc: 'Documentation';
    },;
    activeFilters.push({;
      key: `type-${type}`,;'
      label: 'Type',;
      value: labels[type] || type;
    });
  }),;
  // Add category filter;
  if (filters.category) {;
    activeFilters.push({;'
      key: 'category',;'
      label: 'Category',;
      value: filters.category;
    });
  }

    });
  }
;
  // Add rating filter;

      label: 'Sort',;
      value: sortLabels[filters.sort] || filters.sort;
    });
  }

    } else if (filterKey === 'price') {;
      onFiltersChange({ ...filters, minPrice: 0, maxPrice: 10000 });'
    } else if (filterKey === 'rating') {;
      onFiltersChange({ ...filters, minRating: 0 });'
    } else if (filterKey === 'sort') {;'
      onFiltersChange({ ...filters, sort: 'relevance' });
    }
  },;
  if (activeFilters.length === 0) {;
    return null;

  return (

      {activeFilters.map(filter => (
        <Badge;
          key={filter.key} 

          className='flex items-center gap-1 pl-2 pr-1'
        >'
          <span className='text-xs'>
            {filter.label}: {filter.value}

            className='h-4 w-4 p-0 hover:bg-transparent'

            onClick={() => removeFilter(filter.key)}

            aria-label={`Remove ${filter.label} filter`}
          >'
            <X className='h-3 w-3' />
          </Button>
        </Badge>
      ))}

        size='sm'

        onClick={onClearAll}

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

  className?: string
}
export const ActiveFiltersBar: React.FC<ActiveFiltersBarProps> = ({