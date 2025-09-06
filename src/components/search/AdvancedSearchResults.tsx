
<<<<<<< HEAD
import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import {
  Search
  Filter
  X
  SortAsc
  SortDesc
  GridIcon
  List
  Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
  Sheet
  SheetContent
  SheetHeader
  SheetTitle
  SheetTrigger
} from '@/components/ui/sheet'
import { EnhancedSearchInput } from './EnhancedSearchInput'
import { generateSearchSuggestions } from '@/data/marketplaceData'
import { logErrorToProduction, logInfo } from '@/utils/productionLogger'

interface SearchResult {
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
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
import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import {;
  Search,;
  Filter,;
  X,;
  SortAsc,;
  SortDesc,;
  GridIcon,;
  List,;
  Loader2,;
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import {;
  Sheet,;
  SheetContent,;
  SheetHeader,;
  SheetTitle,;
  SheetTrigger,;
} from '@/components/ui/sheet';
import { EnhancedSearchInput } from './EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data/marketplaceData';
import { logErrorToProduction, logInfo } from '@/utils/productionLogger';
interface SearchResult {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
  date?: string
interface SearchFilters {
=======
  date?: string;

interface SearchFilters {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
<<<<<<< HEAD
  sort: string
interface SearchResponse {
=======
  sort: string;

interface SearchResponse {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  results: SearchResult[];
  totalCount: number;
  page: number;
  limit: number;
  query: string;
<<<<<<< HEAD
  hasMore: boolean
// Highlight search terms in text

const HighlightText: React.FC<{
  text: string
  searchTerm: string
  className?: string
}> = ({ text, searchTerm, className = '' }) => {  if (!searchTerm.trim()) {
    return <span className={className}>{text}</span>
  }
  const parts = text.split(
    new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  )
=======
  hasMore: boolean;

// Highlight search terms in text;
const HighlightText: React.FC<{;
  text: string;
  searchTerm: string;
  className?: string;
}> = ({ text, searchTerm, className = '' }) => {  if (!searchTerm && searchTerm.trim()) {;
    return <span className={className}>{text}</span>;
  }

  const parts = text && text.split(;
    new RegExp(`(${searchTerm && searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  );

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <span className={className}>;
      {parts && parts.map((part, index) =>        part && part.toLowerCase() === searchTerm && searchTerm.toLowerCase() ? (;
          <mark key={index} className='bg-yellow-200 text-black px-1 rounded'>;
            {part}
          </mark>;
        ) : (;
          part;
        );
      )}
<<<<<<< HEAD
    </span>
  )
}
// Search Result Card Component
const SearchResultCard: React.FC<{
  result: SearchResult
  searchTerm: string
  viewMode: 'grid' | 'list'
}> = ({ result, searchTerm, viewMode }) => {
  const router = useRouter()
  const handleClick = () => {
    if (result.url) {
      router.push(result.url)
    }
  }
  const cardClass =
    viewMode === 'grid'
      ? 'bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer'
      : 'bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4'
=======
    </span>;
  );
};

// Search Result Card Component;
const SearchResultCard: React.FC<{;
  result: SearchResult;
  searchTerm: string;
  viewMode: 'grid' | 'list';
}> = ({ result, searchTerm, viewMode }) => {;
  const router = useRouter();
  const handleClick = () => {;
    if (result && result.url) {;
      router && router.push(result && result.url);
    }
  };

  const cardClass =;
    viewMode === 'grid';
      ? 'bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer';
      : 'bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4';

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div onClick={handleClick} className={cardClass}>;
      {result && result.image && (;
        <div className={viewMode === 'grid' ? 'mb-3' : 'flex-shrink-0'}>;
          <img
            src={result && result.image}
            alt={result && result.title}
            className={
              viewMode === 'grid'
                ? 'w-full h-48 object-cover rounded'
                : 'w-20 h-20 object-cover rounded'
            }          />;
        </div>;
      )}
<<<<<<< HEAD
      <div className='flex-1'>
        <div className='flex items-start justify-between mb-2'>
          <div>
            <h3 className='font-semibold text-lg mb-1'>
              <HighlightText text={result.title} searchTerm={searchTerm} />
            </h3>
            <Badge variant='secondary' className='text-xs'>
              {result.type}
            </Badge>
          </div>
          {result.price && (
            <div className='text-right'>
              <span className='font-bold text-primary'>
                {result.currency === 'USD' ? '$' : ''}
                {result.price}
              </span>
              {result.type === 'talent' && (
                <span className='text-sm text-muted-foreground'>/hr</span>
=======

      <div className='flex-1'>;
        <div className='flex items-start justify-between mb-2'>;
          <div>;
            <h3 className='font-semibold text-lg mb-1'>;
              <HighlightText text={result && result.title} searchTerm={searchTerm} />;
            </h3>;
            <Badge variant='secondary' className='text-xs'>;
              {result && result.type}
            </Badge>;
          </div>;
          {result && result.price && (;
            <div className='text-right'>;
              <span className='font-bold text-primary'>;
                {result && result.currency === 'USD' ? '$' : ''}
                {result && result.price}
              </span>;
              {result && result.type === 'talent' && (;
                <span className='text-sm text-muted-foreground'>/hr</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              )}
            </div>;
          )}
<<<<<<< HEAD
        </div>
        <p className='text-muted-foreground mb-3 line-clamp-2'>
          <HighlightText text={result.description} searchTerm={searchTerm} />
        </p>
        <div className='flex items-center justify-between'>
          <div className='flex gap-2 flex-wrap'>
            {result.category && (
              <Badge variant='outline' className='text-xs'>
                {result.category}
              </Badge>
=======
        </div>;

        <p className='text-muted-foreground mb-3 line-clamp-2'>;
          <HighlightText text={result && result.description} searchTerm={searchTerm} />;
        </p>;

        <div className='flex items-center justify-between'>;
          <div className='flex gap-2 flex-wrap'>;
            {result && result.category && (;
              <Badge variant='outline' className='text-xs'>;
                {result && result.category}
              </Badge>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            )}
            {result && result.tags?.slice(0, 3).map((tag, index) => (;
              <Badge key={index} variant='outline' className='text-xs'>                <HighlightText text={tag} searchTerm={searchTerm} />;
              </Badge>;
            ))}
<<<<<<< HEAD
          </div>
          {result.rating && (
            <div className='flex items-center gap-1'>
              <span className='text-yellow-500'>★</span>
              <span className='text-sm'>{result.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
// Filter Sidebar Component
const FilterSidebar: React.FC<{
  filters: SearchFilters
  onFiltersChange: (filters: SearchFilters) => void
  availableCategories: string[]
}> = ({ filters, onFiltersChange, availableCategories }) => {  const typeOptions = [
    { id: 'product', label: 'Products' }
    { id: 'talent', label: 'Talent' }
    { id: 'service', label: 'Services' }
    { id: 'blog', label: 'Blog Posts' }
  ]
  const handleTypeChange = (typeId: string, checked: boolean) => {
    const newTypes = checked      ? [...filters.types, typeId]
      : filters.types.filter(t => t !== typeId)
    onFiltersChange({ ...filters, types: newTypes })
  }
  const handlePriceChange = (values: number[]) => {
    onFiltersChange({
      ...filters
      minPrice: values[0] ?? 0
      maxPrice: values[1] ?? 10000
    })
  }
=======
          </div>;

          {result && result.rating && (;
            <div className='flex items-center gap-1'>;
              <span className='text-yellow-500'>★</span>;
              <span className='text-sm'>{result && result.rating.toFixed(1)}</span>;
            </div>;
          )}
        </div>;
      </div>;
    </div>;
  );
};

// Filter Sidebar Component;
const FilterSidebar: React.FC<{;
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  availableCategories: string[];
}> = ({ filters, onFiltersChange, availableCategories }) => {  const typeOptions = [;
    { id: 'product', label: 'Products' },;
    { id: 'talent', label: 'Talent' },;
    { id: 'service', label: 'Services' },;
    { id: 'blog', label: 'Blog Posts' },;
  ];

  const handleTypeChange = (typeId: string, checked: boolean) => {;
    const newTypes = checked      ? [...filters && filters.types, typeId];
      : filters && filters.types.filter(t => t !== typeId);

    onFiltersChange({ ...filters, types: newTypes });
  };

  const handlePriceChange = (values: number[]) => {;
    onFiltersChange({;
      ...filters,;
      minPrice: values[0] ?? 0,;
      maxPrice: values[1] ?? 10000,;
    });
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='space-y-6'>;
      <div>;
        <h3 className='font-semibold mb-3'>Content Type</h3>;
        <div className='space-y-2'>;
          {typeOptions && typeOptions.map(option => (;
            <div key={option && option.id} className='flex items-center space-x-2'>;
              <Checkbox
                id={option && option.id}
                checked={filters && filters.types.includes(option && option.id)}
                onCheckedChange={checked =>;
                  handleTypeChange(option && option.id, !!checked);
                }              />;
              <label htmlFor={option && option.id} className='text-sm'>;
                {option && option.label}
              </label>;
            </div>;
          ))}
<<<<<<< HEAD
        </div>
      </div>
      <Separator />
      <div>
        <h3 className='font-semibold mb-3'>Category</h3>
        <Select
          value={filters.category}
          onValueChange={value =>
            onFiltersChange({
              ...filters
              category: value === 'all' ? '' : value
            })
=======
        </div>;
      </div>;

      <Separator />;

      <div>;
        <h3 className='font-semibold mb-3'>Category</h3>;
        <Select
          value={filters && filters.category}
          onValueChange={value =>;
            onFiltersChange({;
              ...filters,;
              category: value === 'all' ? '' : value,;
            });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          }
        >          <SelectTrigger>;
            <SelectValue placeholder='All Categories' />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value='all'>All Categories</SelectItem>;
            {availableCategories && availableCategories.map(category => (;
              <SelectItem key={category} value={category}>;
                {category}
              </SelectItem>;
            ))}
<<<<<<< HEAD
          </SelectContent>
        </Select>
      </div>
      <Separator />
      <div>
        <h3 className='font-semibold mb-3'>Price Range</h3>
        <div className='px-2'>
=======
          </SelectContent>;
        </Select>;
      </div>;

      <Separator />;

      <div>;
        <h3 className='font-semibold mb-3'>Price Range</h3>;
        <div className='px-2'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <Slider
            value={[filters && filters.minPrice, filters && filters.maxPrice]}
            onValueChange={handlePriceChange}
            min={0}
            max={10000}
            step={50}
<<<<<<< HEAD
            className='mb-2'          />
          <div className='flex justify-between text-sm text-muted-foreground'>
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className='font-semibold mb-3'>Minimum Rating</h3>
=======
            className='mb-2'          />;
          <div className='flex justify-between text-sm text-muted-foreground'>;
            <span>${filters && filters.minPrice}</span>;
            <span>${filters && filters.maxPrice}</span>;
          </div>;
        </div>;
      </div>;

      <Separator />;

      <div>;
        <h3 className='font-semibold mb-3'>Minimum Rating</h3>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <Select
          value={filters && filters.minRating.toString()}
          onValueChange={value =>;
            onFiltersChange({ ...filters, minRating: parseFloat(value) });
          }
<<<<<<< HEAD
        >          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='0'>Any Rating</SelectItem>
            <SelectItem value='1'>1+ Stars</SelectItem>
            <SelectItem value='2'>2+ Stars</SelectItem>
            <SelectItem value='3'>3+ Stars</SelectItem>
            <SelectItem value='4'>4+ Stars</SelectItem>
            <SelectItem value='4.5'>4.5+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
// No Results Component
const NoResultsState: React.FC<{
  searchTerm: string
  onNewSearch: (term: string) => void
}> = ({ searchTerm, onNewSearch }) => {  const suggestions = [
    'AI & Machine Learning'
    'Web Development'
    'Mobile App Development'
    'Data Analysis'
    'UI/UX Design'
    'Blockchain Development'
  ]
  return (
    <div className='text-center py-12'>
      <div className='mb-6'>
        <Search className='mx-auto h-16 w-16 text-muted-foreground mb-4' />
        <h2 className='text-2xl font-semibold mb-2'>No results found</h2>
        <p className='text-muted-foreground mb-6'>
          We couldn't find anything matching "{searchTerm}". Try adjusting your
          search or filters.
        </p>
      </div>
      <div className='max-w-md mx-auto space-y-4'>
        <div>
          <h3 className='font-semibold mb-3'>Search Suggestions:</h3>
          <div className='flex flex-wrap gap-2 justify-center'>
            {suggestions.map((suggestion, index) => (
=======
        >          <SelectTrigger>;
            <SelectValue />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value='0'>Any Rating</SelectItem>;
            <SelectItem value='1'>1+ Stars</SelectItem>;
            <SelectItem value='2'>2+ Stars</SelectItem>;
            <SelectItem value='3'>3+ Stars</SelectItem>;
            <SelectItem value='4'>4+ Stars</SelectItem>;
            <SelectItem value='4 && 4.5'>4 && 4.5+ Stars</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
    </div>;
  );
};

// No Results Component;
const NoResultsState: React.FC<{;
  searchTerm: string;
  onNewSearch: (term: string) => void;
}> = ({ searchTerm, onNewSearch }) => {  const suggestions = [;
    'AI & Machine Learning',;
    'Web Development',;
    'Mobile App Development',;
    'Data Analysis',;
    'UI/UX Design',;
    'Blockchain Development',;
  ];

  return (
    <div className='text-center py-12'>;
      <div className='mb-6'>;
        <Search className='mx-auto h-16 w-16 text-muted-foreground mb-4' />;
        <h2 className='text-2xl font-semibold mb-2'>No results found</h2>;
        <p className='text-muted-foreground mb-6'>;
          We couldn't find anything matching "{searchTerm}". Try adjusting your;
          search or filters.;
        </p>;
      </div>;

      <div className='max-w-md mx-auto space-y-4'>;
        <div>;
          <h3 className='font-semibold mb-3'>Search Suggestions:</h3>;
          <div className='flex flex-wrap gap-2 justify-center'>;
            {suggestions && suggestions.map((suggestion, index) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Button
                key={index}
                variant='outline'
                size='sm'
                onClick={() => onNewSearch(suggestion)}              >;
                {suggestion}
              </Button>;
            ))}
<<<<<<< HEAD
          </div>
        </div>
        <div className='text-sm text-muted-foreground'>
          <p>Tips for better results:</p>
          <ul className='mt-2 space-y-1'>
            <li>• Try different keywords</li>
            <li>• Check your spelling</li>
            <li>• Use fewer filters</li>
            <li>• Search for broader terms</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
// Main Search Results Page Component
export const AdvancedSearchResults: React.FC = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({
    types: []
    category: ''
    minPrice: 0
    maxPrice: 10000
    minRating: 0
    sort: 'relevance'
  })
  const suggestions = generateSearchSuggestions()
  // Extract available categories from results for filter
  const availableCategories = useMemo(() => {
    const categories = new Set<string>();    results.forEach(result => {
      if (result.category) categories.add(result.category)
    })
    return Array.from(categories).sort()
  }, [results])
  // Sync search term with URL
  useEffect((,) => {
    if (router.isReady && router.query.q) {
      const urlTerm = router.query.q as string
      setSearchTerm(urlTerm)
    }
  }, [router.isReady, router.query.q])
  // Search function
  const performSearch = async (
    term: string
    page: number = 1
    newFilters?: SearchFilters
  ) => {    if (!term.trim()) {
      setResults([])
      setTotalCount(0)
      return
    }
    setLoading(true)
    try {
      const searchFilters = newFilters |filters
      const params = new URLSearchParams({
        query: term
        page: page.toString()
        limit: '20'
      })
      if (searchFilters.types.length > 0) {
        params.append('type', searchFilters.types.join(','))
      }
      if (searchFilters.category) {
        params.append('category', searchFilters.category)
      }
      if (searchFilters.minPrice > 0) {
        params.append('minPrice', searchFilters.minPrice.toString())
      }
      if (searchFilters.maxPrice < 10000) {
        params.append('maxPrice', searchFilters.maxPrice.toString())
      }
      if (searchFilters.minRating > 0) {
        params.append('minRating', searchFilters.minRating.toString())
      }
      if (searchFilters.sort !== 'relevance') {
        params.append('sort', searchFilters.sort)
      }
      const response = await fetch(`/api/search?${params}`)
      const data: SearchResponse = await response.json()
      if (page === 1) {
        setResults(data.results)
      } else {
        setResults(prev => [...prev, ...data.results])
      }
      setTotalCount(data.totalCount)
      setCurrentPage(data.page)
      setHasMore(data.hasMore)
      logInfo('Search completed', {
        term
        resultCount: data.results.length
        totalCount: data.totalCount
      })
    } catch (error) {
      logErrorToProduction('Search failed', { data: error })
      setResults([])
      setTotalCount(0)
    } finally {
      setLoading(false)
    }
  }
  // Search when term or filters change
  useEffect((,) => {
    if (searchTerm.trim()) {
      performSearch(searchTerm, 1, filters)
      setCurrentPage(1)
    }
  }, [searchTerm, filters])
  // Handle search input
  const handleSearch = (term: string) => {
    setSearchTerm(term)
    router.push(`/search?q=${encodeURIComponent(term)}`, undefined, {
      shallow: true
    })
  }
  // Handle filter changes
  const handleFiltersChange = (newFilters: SearchFilters) => {
    setFilters(newFilters)
  }
  // Load more results
  const loadMore = () => {
    if (hasMore && !loading) {
      performSearch(searchTerm, currentPage + 1)
    }
  }
  // Active filters count
  const activeFiltersCount =
    filters.types.length +
    (filters.category ? 1 : 0) +
    (filters.minPrice > 0 |filters.maxPrice < 10000 ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0)
=======
          </div>;
        </div>;

        <div className='text-sm text-muted-foreground'>;
          <p>Tips for better results:</p>;
          <ul className='mt-2 space-y-1'>;
            <li>• Try different keywords</li>;
            <li>• Check your spelling</li>;
            <li>• Use fewer filters</li>;
            <li>• Search for broader terms</li>;
          </ul>;
        </div>;
      </div>;
    </div>;
  );
};

// Main Search Results Page Component;
export const AdvancedSearchResults: React.FC = () => {;
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState<SearchFilters>({;
    types: [],;
    category: '',;
    minPrice: 0,;
    maxPrice: 10000,;
    minRating: 0,;
    sort: 'relevance',;
  });

  const suggestions = generateSearchSuggestions();

  // Extract available categories from results for filter;
  const availableCategories = useMemo(() => {;
    const categories = new Set<string>();    results && results.forEach(result => {;
      if (result && result.category) categories && categories.add(result && result.category);
    });
    return Array && Array.from(categories).sort();
  }, [results]);

  // Sync search term with URL;
  useEffect((,) => {;
    if (router && router.isReady && router && router.query.q) {;
      const urlTerm = router && router.query.q as string;
      setSearchTerm(urlTerm);
    }
  }, [router && router.isReady, router && router.query.q]);

  // Search function;
  const performSearch = async (;
    term: string,;
    page: number = 1,;
    newFilters?: SearchFilters;
  ) => {    if (!term && term.trim()) {;
      setResults([]);
      setTotalCount(0);
      return;
    }

    setLoading(true);
    try {;
      const searchFilters = newFilters || filters;
      const params = new URLSearchParams({;
        query: term,;
        page: page && page.toString(),;
        limit: '20',;
      });

      if (searchFilters && searchFilters.types.length > 0) {;
        params && params.append('type', searchFilters && searchFilters.types.join(','));
      }
      if (searchFilters && searchFilters.category) {;
        params && params.append('category', searchFilters && searchFilters.category);
      }
      if (searchFilters && searchFilters.minPrice > 0) {;
        params && params.append('minPrice', searchFilters && searchFilters.minPrice.toString());
      }
      if (searchFilters && searchFilters.maxPrice < 10000) {;
        params && params.append('maxPrice', searchFilters && searchFilters.maxPrice.toString());
      }
      if (searchFilters && searchFilters.minRating > 0) {;
        params && params.append('minRating', searchFilters && searchFilters.minRating.toString());
      }
      if (searchFilters && searchFilters.sort !== 'relevance') {;
        params && params.append('sort', searchFilters && searchFilters.sort);
      }

      const response = await fetch(`/api/search?${params}`);
      const data: SearchResponse = await response && response.json();

      if (page === 1) {;
        setResults(data && data.results);
      } else {;
        setResults(prev => [...prev, ...data && data.results]);
      }

      setTotalCount(data && data.totalCount);
      setCurrentPage(data && data.page);
      setHasMore(data && data.hasMore);

      logInfo('Search completed', {;
        term,;
        resultCount: data && data.results.length,;
        totalCount: data && data.totalCount,;
      });
    } catch (error) {;
      logErrorToProduction('Search failed', { data: error });
      setResults([]);
      setTotalCount(0);
    } finally {;
      setLoading(false);
    }
  };

  // Search when term or filters change;
  useEffect((,) => {;
    if (searchTerm && searchTerm.trim()) {;
      performSearch(searchTerm, 1, filters);
      setCurrentPage(1);
    }
  }, [searchTerm, filters]);

  // Handle search input;
  const handleSearch = (term: string) => {;
    setSearchTerm(term);
    router && router.push(`/search?q=${encodeURIComponent(term)}`, undefined, {;
      shallow: true,;
    });
  };

  // Handle filter changes;
  const handleFiltersChange = (newFilters: SearchFilters) => {;
    setFilters(newFilters);
  };
  // Load more results;
  const loadMore = () => {;
    if (hasMore && !loading) {;
      performSearch(searchTerm, currentPage + 1);
    }
  };

  // Active filters count;
  const activeFiltersCount =;
    filters && filters.types.length +;
    (filters && filters.category ? 1 : 0) +;
    (filters && filters.minPrice > 0 || filters && filters.maxPrice < 10000 ? 1 : 0) +;
    (filters && filters.minRating > 0 ? 1 : 0);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='container mx-auto px-4 py-6'>;
      {/* Search Header */}
      <div className='mb-6'>;
        <div className='flex gap-4 mb-4'>;
          <div className='flex-1'>;
            <EnhancedSearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              onSelectSuggestion={suggestion => handleSearch(suggestion && suggestion.text)}
              searchSuggestions={suggestions}
              placeholder='Search products, talent, services, and more...'            />;
          </div>;
          <Button
            onClick={() => handleSearch(searchTerm)}
<<<<<<< HEAD
            disabled={!searchTerm.trim()}
          >
            <Search className='h-4 w-4' />
          </Button>
        </div>
        {searchTerm && (
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-bold'>Search Results</h1>
              <p className='text-muted-foreground'>
                {loading
                  ? 'Searching...'
                  : `${totalCount} results for "${searchTerm}"`}
              </p>
            </div>
            <div className='flex items-center gap-2'>
=======
            disabled={!searchTerm && searchTerm.trim()}
          >;
            <Search className='h-4 w-4' />;
          </Button>;
        </div>;

        {searchTerm && (;
          <div className='flex items-center justify-between'>;
            <div>;
              <h1 className='text-2xl font-bold'>Search Results</h1>;
              <p className='text-muted-foreground'>;
                {loading;
                  ? 'Searching...';
                  : `${totalCount} results for "${searchTerm}"`}
              </p>;
            </div>;

            <div className='flex items-center gap-2'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              {/* Sort Options */}
              <Select
                value={filters && filters.sort}
                onValueChange={value => setFilters({ ...filters, sort: value })}
<<<<<<< HEAD
              >
                <SelectTrigger className='w-40'>                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='relevance'>Relevance</SelectItem>
                  <SelectItem value='price_asc'>Price: Low to High</SelectItem>
                  <SelectItem value='price_desc'>Price: High to Low</SelectItem>
                  <SelectItem value='rating'>Highest Rated</SelectItem>
                </SelectContent>
              </Select>
=======
              >;
                <SelectTrigger className='w-40'>                  <SelectValue />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value='relevance'>Relevance</SelectItem>;
                  <SelectItem value='price_asc'>Price: Low to High</SelectItem>;
                  <SelectItem value='price_desc'>Price: High to Low</SelectItem>;
                  <SelectItem value='rating'>Highest Rated</SelectItem>;
                </SelectContent>;
              </Select>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              {/* View Mode Toggle */}
              <div className='flex border rounded-md'>;
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size='sm'
                  onClick={() => setViewMode('grid')}                >;
                  <GridIcon className='h-4 w-4' />;
                </Button>;
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size='sm'
<<<<<<< HEAD
                  onClick={() => setViewMode('list')}                >
                  <List className='h-4 w-4' />
                </Button>
              </div>
=======
                  onClick={() => setViewMode('list')}                >;
                  <List className='h-4 w-4' />;
                </Button>;
              </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              {/* Mobile Filter Toggle */}
              <Sheet open={showFilters} onOpenChange={setShowFilters}>;
                <SheetTrigger asChild>;
                  <Button variant='outline' className='lg:hidden'>;
                    <Filter className='h-4 w-4 mr-2' />;
                    Filters{' '}
                    {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                  </Button>;
                </SheetTrigger>;
                <SheetContent side='left' className='w-80'>;
                  <SheetHeader>;
                    <SheetTitle>Search Filters</SheetTitle>;
                  </SheetHeader>;
                  <div className='mt-6'>;
                    <FilterSidebar
                      filters = {filters,}
                      onFiltersChange = {handleFiltersChange,}
                      availableCategories = {availableCategories,}
                    />;
                  </div>;
                </SheetContent>;
              </Sheet>;
            </div>;
          </div>;
        )}
<<<<<<< HEAD
      </div>
      {searchTerm && (
        <div className='flex gap-6'>
=======
      </div>;

      {searchTerm && (;
        <div className='flex gap-6'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          {/* Desktop Filters Sidebar */}
          <div className='hidden lg:block w-64 flex-shrink-0'>;
            <div className='bg-card border rounded-lg p-4 sticky top-4'>;
              <div className='flex items-center justify-between mb-4'>;
                <h2 className='font-semibold'>Filters</h2>;
                {activeFiltersCount > 0 && (;
                  <Button
                    variant='ghost'
                    size='sm'
<<<<<<< HEAD
                    onClick={() =>
                      setFilters({
                        types: []
                        category: ''
                        minPrice: 0
                        maxPrice: 10000
                        minRating: 0
                        sort: 'relevance'
                      })
                    }                  >
                    Clear All
                  </Button>
=======
                    onClick={() =>;
                      setFilters({;
                        types: [],;
                        category: '',;
                        minPrice: 0,;
                        maxPrice: 10000,;
                        minRating: 0,;
                        sort: 'relevance',;
                      });
                    }                  >;
                    Clear All;
                  </Button>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                )}
              </div>;
              <FilterSidebar
                filters = {filters,}
                onFiltersChange = {handleFiltersChange,}
                availableCategories = {availableCategories,}
<<<<<<< HEAD
              />
            </div>
          </div>
=======
              />;
            </div>;
          </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          {/* Main Content */}
          <div className='flex-1'>;
            {loading && results && results.length === 0 ? (;
              <div className='flex justify-center py-12'>;
                <Loader2 className='h-8 w-8 animate-spin' />;
              </div>;
            ) : results && results.length === 0 && searchTerm ? (;
              <NoResultsState
                searchTerm={searchTerm}
                onNewSearch={handleSearch}              />;
            ) : (;
              <>;
                {/* Results Grid/List */}
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6'
                      : 'space-y-4 mb-6'
                  }>;
                  {results && results.map(result => (                    <SearchResultCard
                      key={`${result && result.type}-${result && result.id}`}
                      result = {result,}
                      searchTerm = {searchTerm,}
                      viewMode = {viewMode,}
                    />;
                  ))}
<<<<<<< HEAD
                </div>
=======
                </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                {/* Load More Button */}
                {hasMore && (;
                  <div className='text-center'>;
                    <Button
                      onClick={loadMore}
                      disabled={loading}
                      variant='outline'>;
                      {loading ? (;
                        <>;
                          <Loader2 className='h-4 w-4 mr-2 animate-spin' />;
                          Loading...;
                        </>;
                      ) : (;
                        'Load More Results';
                      )}
                    </Button>;
                  </div>;
                )}
              </>;
            )}
          </div>;
        </div>;
      )}
<<<<<<< HEAD
    </div>
  )
}
export default AdvancedSearchResults
  suggestion
}</Button>) )
}</div> </div> <li>• Try different keywords</li> <li>• Check your spelling</li> <li>• Use fewer filters</li> <li>• Search for broader terms</li> </ul> </div> </div> </div>)
}
//Main Search Results Page Component setTotalCount (data.totalCount)
setCurrentPage (data.page)
setHasMore (data.hasMore)
//Active filters count const activeFiltersCount = filters.types.length + (filters.category ? 1 : 0) + (filters.minPrice > 0 |filters.maxPrice < 10000 ? 1 : 0) + (filters.minRating > 0 ? 1 : 0);"
}> <SelectTrigger className="w-40" > <SelectValue /> </SelectTrigger> <SelectContent> <SelectItem value="relevance" >Relevance</SelectItem> <SelectItem value="price asc" >Price: Low to High</SelectItem> <SelectItem value="price desc" >Price: High to Low</SelectItem> <SelectItem value="rating" >Highest Rated</SelectItem> </SelectContent> </Select> > <GridIcon className="h-4 w-4" /> </Button> <Button > <List className="h-4 w-4" /> </Button> </div> {
  /* Mobile Filter Toggle */
}<Sheet open= {
  showFilters
}onOpenChange= {
  setShowFilters "
}> <SheetTrigger asChild> </Button> </SheetTrigger> <SheetContent side="left" className="w-80" > <SheetHeader> <SheetTitle>Search Filters</SheetTitle> </SheetHeader> <div className="mt-6" > <FilterSidebar filters= {
  filters
}onFiltersChange= {
  handleFiltersChange
}availableCategories= {
  availableCategories
}/> </div> </SheetContent> </Sheet> </div> </div>) "
}</div> <Button variant="ghost" size="sm" onClick={
  () => setFilters ({'
  types: [], category: '', minPrice: 0, maxPrice: 10000,  minRating: 0, sort: 'relevance'
})
}> Clear All </Button>)
}</div> <FilterSidebar filters= {
  filters
}onFiltersChange= {
  handleFiltersChange
}availableCategories= {
  availableCategories
}/> </div> </div> </div>) : results.length === 0 && searchTerm ? (<NoResultsState searchTerm= {
  searchTerm
}onNewSearch= {
  handleSearch
}/> <SearchResultCard key= {
  `$ {
  result.type
}-$ {
  result.id
}`
}result= {
  result
}searchTerm= {
  searchTerm
}viewMode= {
  viewMode
}/>) )
}</div> > {'"
  loading ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Loading... </>) : ('Load More Results')
}</Button> </div>)
}</>)
}</div> </div>)
}</div>)
}
export default AdvancedSearchResults
'"
export default AdvancedSearchResults
export default AdvancedSearchResults

=======
    </div>;
  );
};

export default AdvancedSearchResults;
  suggestion ;
}</Button>) ) ;
}</div> </div> <li>• Try different keywords</li> <li>• Check your spelling</li> <li>• Use fewer filters</li> <li>• Search for broader terms</li> </ul> </div> </div> </div>) ;
};
//Main Search Results Page Component setTotalCount (data && data.totalCount);
setCurrentPage (data && data.page);
setHasMore (data && data.hasMore);
//Active filters count const activeFiltersCount = filters && filters.types.length + (filters && filters.category ? 1 : 0) + (filters && filters.minPrice > 0 || filters && filters.maxPrice < 10000 ? 1 : 0) + (filters && filters.minRating > 0 ? 1 : 0);";
}> <SelectTrigger className="w-40" > <SelectValue /> </SelectTrigger> <SelectContent> <SelectItem value="relevance" >Relevance</SelectItem> <SelectItem value="price asc" >Price: Low to High</SelectItem> <SelectItem value="price desc" >Price: High to Low</SelectItem> <SelectItem value="rating" >Highest Rated</SelectItem> </SelectContent> </Select> > <GridIcon className="h-4 w-4" /> </Button> <Button > <List className="h-4 w-4" /> </Button> </div> {;
  /* Mobile Filter Toggle */ ;
}<Sheetopen= {
  showFilters 
}onOpenChange= {
  setShowFilters "
}> <SheetTrigger asChild> </Button> </SheetTrigger> <SheetContent side="left" className="w-80" > <SheetHeader> <SheetTitle>Search Filters</SheetTitle> </SheetHeader> <div className="mt-6" > <FilterSidebarfilters= {
  filters 
}onFiltersChange= {
  handleFiltersChange 
}availableCategories= {
  availableCategories 
}/> </div> </SheetContent> </Sheet> </div> </div>) ";
}</div> <Buttonvariant="ghost" size="sm" onClick={
  () => setFilters ({';
  types: [], category: '', minPrice: 0, maxPrice: 10000,  minRating: 0, sort: 'relevance' ;
}) ;
}> Clear All </Button>) ;
}</div> <FilterSidebarfilters= {
  filters 
}onFiltersChange= {
  handleFiltersChange 
}availableCategories= {
  availableCategories 
}/> </div> </div> </div>) : results && results.length === 0 && searchTerm ? (<NoResultsStatesearchTerm= {
  searchTerm 
}onNewSearch= {
  handleSearch 
}/> <SearchResultCardkey= {
  `$ {
  result && result.type 
}-$ {
  result && result.id 
}` 
}result= {
  result 
}searchTerm= {
  searchTerm 
}viewMode= {
  viewMode 
}/>) ) ;
}</div> > {'";
  loading ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Loading... </>) : ('Load More Results') ;
}</Button> </div>) ;
}</>) ;
}</div> </div>) ;
}</div>) ;
};
export default AdvancedSearchResults;
'";
export default AdvancedSearchResults, ;
export default AdvancedSearchResults, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
