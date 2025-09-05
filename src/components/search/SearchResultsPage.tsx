<<<<<<< HEAD
import React, { useState, useEffect, useMemo } from 'react',
import { useRouter } from 'next/router',
import { Search, Filter, X, SortAsc, SortDesc, GridIcon, List, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Badge } from '@/components/ui/badge',
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',
import { Checkbox } from '@/components/ui/checkbox',
import { Slider } from '@/components/ui/slider',
import { Separator } from '@/components/ui/separator',
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet',
import { EnhancedSearchInput } from './EnhancedSearchInput',
import { generateSearchSuggestions } from '@/data/marketplaceData',
import { logErrorToProduction, logInfo } from '@/utils/productionLogger',

interface SearchResult {
  id: string,
  title: string,
  description: string,
  type: 'product' | 'talent' | 'blog' | 'service',
  category?: string,
  url?: string,
  image?: string,
  price?: number,
  currency?: string,
  rating?: number,
  tags?: string[],
  date?: string
}

interface SearchFilters {
  types: string[],
  category: string,
  minPrice: number,
  maxPrice: number,
  minRating: number,
  sort: string
}

interface SearchResponse {
  results: SearchResult[],
  totalCount: number,
  page: number,
  limit: number,
  query: string,
  hasMore: boolean
}

// Highlight search terms in text
const HighlightText: React.FC<{ text: string, searchTerm: string, className?: string }> = ({ 
  text, 
  searchTerm, 
  className = '' 
}) => {
  if (!searchTerm.trim()) {
    return <span className={className}>{text}</span>
  }

  const parts = text.split(new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')),
=======
import React, {_useState, _useEffect, _useMemo} from 'react';

interface SearchResult {_id: string;
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
  date?: string;}

interface SearchFilters {_types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: string;}

interface SearchResponse {_results: SearchResult[];
  totalCount: number;
  page: number;
  limit: number;
  query: string;
  hasMore: boolean;}

// Highlight search terms in text
const HighlightText: React.FC<{_text: string; searchTerm: string; className?: string}> = (_{_text, _searchTerm, _className = ''}) => {_if (!searchTerm.trim()) {
    return <span className={className}>{_text}</span>;
  }

  const _parts = text.split(new RegExp(`(${_searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (_<span className={_className}>
      {_parts.map((part, _index) => 
        part.toLowerCase() === searchTerm.toLowerCase() ? (
<<<<<<< HEAD
          <mark key={index} className=&quot;bg-yellow-200 text-black px-1 rounded&quot;>
            {part}
=======
          <mark key={index} className="bg-yellow-200 text-black px-1 rounded">
            {_part}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </mark>
        ) : (
          part
        )
      )}
    </span>
  )
},

// Search Result Card Component
<<<<<<< HEAD
const SearchResultCard: React.FC<{ 
  result: SearchResult, 
  searchTerm: string, 
  viewMode: 'grid' | 'list' 
}> = ({ result, searchTerm, viewMode }) => {
  const router = useRouter(),
=======
const SearchResultCard: React.FC<{_result: SearchResult; 
  searchTerm: string; 
  viewMode: 'grid' | 'list'}> = (_{_result, _searchTerm, _viewMode}) => {_const _router = useRouter();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleClick = () => {
    if (result.url) {
<<<<<<< HEAD
      router.push(result.url)
    }
  },

  const cardClass = viewMode === 'grid' 
<<<<<<< HEAD
    ? "bg-card border rounded-lg p-4 hover: shadow-lg transition-shadow cursor-pointer"
    : "bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4",
=======
    ? &quot;bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer&quot;
    : &quot;bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div onClick={handleClick} className={cardClass}>
      {result.image && (
        <div className={viewMode === 'grid' ? &quot;mb-3&quot; : &quot;flex-shrink-0&quot;}>
          <img 
            src={result.image} 
            alt={result.title}
            className={viewMode === 'grid' ? &quot;w-full h-48 object-cover rounded&quot; : &quot;w-20 h-20 object-cover rounded&quot;}
=======
      router.push(result.url);}
  };

  const _cardClass = viewMode === 'grid' 
    ? "bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
    : "bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4";

  return (
    <div onClick={_handleClick} className={_cardClass}>
      {_result.image && (
        <div className={viewMode === 'grid' ? "mb-3" : "flex-shrink-0"}>
          <img 
            src={_result.image} 
            alt={_result.title}
            className={_viewMode === 'grid' ? "w-full h-48 object-cover rounded" : "w-20 h-20 object-cover rounded"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </div>
      )}
      
      <div className=&quot;flex-1&quot;>
        <div className=&quot;flex items-start justify-between mb-2&quot;>
          <div>
<<<<<<< HEAD
            <h3 className=&quot;font-semibold text-lg mb-1&quot;>
              <HighlightText text={result.title} searchTerm={searchTerm} />
            </h3>
            <Badge variant=&quot;secondary&quot; className=&quot;text-xs&quot;>
              {result.type}
            </Badge>
          </div>
          {result.price && (
            <div className=&quot;text-right&quot;>
              <span className=&quot;font-bold text-primary&quot;>
                {result.currency === 'USD' ? '$' : ''}{result.price}
              </span>
              {result.type === 'talent' && <span className=&quot;text-sm text-muted-foreground&quot;>/hr</span>}
=======
            <h3 className="font-semibold text-lg mb-1">
              <HighlightText text={_result.title} searchTerm={_searchTerm} />
            </h3>
            <Badge variant="secondary" className="text-xs">
              {_result.type}
            </Badge>
          </div>
          {_result.price && (
            <div className="text-right">
              <span className="font-bold text-primary">
                {result.currency === 'USD' ? '$' : ''}{_result.price}
              </span>
              {_result.type === 'talent' && <span className="text-sm text-muted-foreground">/hr</span>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          )}
        </div>

<<<<<<< HEAD
        <p className=&quot;text-muted-foreground mb-3 line-clamp-2&quot;>
          <HighlightText text={result.description} searchTerm={searchTerm} />
        </p>

        <div className=&quot;flex items-center justify-between&quot;>
          <div className=&quot;flex gap-2 flex-wrap&quot;>
            {result.category && (
              <Badge variant=&quot;outline&quot; className=&quot;text-xs&quot;>
                {result.category}
              </Badge>
            )}
            {result.tags?.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant=&quot;outline&quot; className=&quot;text-xs&quot;>
                <HighlightText text={tag} searchTerm={searchTerm} />
=======
        <p className="text-muted-foreground mb-3 line-clamp-2">
          <HighlightText text={_result.description} searchTerm={_searchTerm} />
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {_result.category && (
              <Badge variant="outline" className="text-xs">
                {result.category}
              </Badge>
            )}
            {_result.tags?.slice(0, _3).map(_(tag, _index) => (
              <Badge key={index} variant="outline" className="text-xs">
                <HighlightText text={_tag} searchTerm={_searchTerm} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Badge>
            ))}
          </div>
          
<<<<<<< HEAD
          {result.rating && (
            <div className=&quot;flex items-center gap-1&quot;>
              <span className=&quot;text-yellow-500&quot;>★</span>
              <span className=&quot;text-sm&quot;>{result.rating.toFixed(1)}</span>
=======
          {_result.rating && (
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm">{result.rating.toFixed(1)}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          )}
        </div>
      </div>
    </div>
  )
},

// Filter Sidebar Component
<<<<<<< HEAD
const FilterSidebar: React.FC<{
  filters: SearchFilters,
  onFiltersChange: (filters: SearchFilters) => void,
  availableCategories: string[]
}> = ({ filters, onFiltersChange, availableCategories }) => {
  const typeOptions = [
    { id: 'product', label: 'Products' },
    { id: 'talent', label: 'Talent' },
    { id: 'service', label: 'Services' },
    { id: 'blog', label: 'Blog Posts' }
  ],

  const handleTypeChange = (typeId: string, checked: boolean) => {
    const newTypes = checked 
      ? [...filters.types, typeId]
      : filters.types.filter(t => t !== typeId),
    
    onFiltersChange({ ...filters, types: newTypes })
  },

  const handlePriceChange = (values: number[]) => {
    onFiltersChange({ 
      ...filters,
      minPrice: values[0] ?? 0,
      maxPrice: values[1] ?? 10000 
    })
  },
=======
const FilterSidebar: React.FC<{_filters: SearchFilters;
  onFiltersChange: (_filters: SearchFilters) => void;
  availableCategories: string[];}> = (_{_filters, _onFiltersChange, _availableCategories}) => {_const _typeOptions = [
    { id: 'product', _label: 'Products'},
    {_id: 'talent', _label: 'Talent'},
    {_id: 'service', _label: 'Services'},
    {_id: 'blog', _label: 'Blog Posts'}
  ];

  const _handleTypeChange = (_typeId: string, _checked: boolean) => {_const _newTypes = checked 
      ? [...filters.types, _typeId]
      : filters.types.filter(t => t !== typeId);
    
    onFiltersChange({ ...filters, _types: newTypes});
  };

  const _handlePriceChange = (_values: number[]) => {_onFiltersChange({ 
      ...filters, _minPrice: values[0] ?? 0, _maxPrice: values[1] ?? 10000});
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;space-y-6&quot;>
      <div>
<<<<<<< HEAD
        <h3 className=&quot;font-semibold mb-3&quot;>Content Type</h3>
        <div className=&quot;space-y-2&quot;>
          {typeOptions.map(option => (
            <div key={option.id} className=&quot;flex items-center space-x-2&quot;>
=======
        <h3 className="font-semibold mb-3">Content Type</h3>
        <div className="space-y-2">
          {_typeOptions.map(option => (
            <div key={option.id} className="flex items-center space-x-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Checkbox
                id={_option.id}
                checked={_filters.types.includes(option.id)}
                onCheckedChange={_(_checked) => handleTypeChange(option.id, _!!checked)}
              />
<<<<<<< HEAD
              <label htmlFor={option.id} className=&quot;text-sm&quot;>
                {option.label}
=======
              <label htmlFor={_option.id} className="text-sm">
                {_option.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
<<<<<<< HEAD
        <h3 className=&quot;font-semibold mb-3&quot;>Category</h3>
        <Select value={filters.category} onValueChange={(value) => 
          onFiltersChange({ ...filters, category: value === 'all' ? '' : value })
=======
        <h3 className="font-semibold mb-3">Category</h3>
        <Select value={_filters.category} onValueChange={_(_value) => 
          onFiltersChange({ ...filters, _category: value === 'all' ? '' : value})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }>
          <SelectTrigger>
            <SelectValue placeholder=&quot;All Categories&quot; />
          </SelectTrigger>
          <SelectContent>
<<<<<<< HEAD
            <SelectItem value=&quot;all&quot;>All Categories</SelectItem>
            {availableCategories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
=======
            <SelectItem value="all">All Categories</SelectItem>
            {_availableCategories.map(category => (
              <SelectItem key={category} value={_category}>
                {_category}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div>
        <h3 className=&quot;font-semibold mb-3&quot;>Price Range</h3>
        <div className=&quot;px-2&quot;>
          <Slider
<<<<<<< HEAD
            value={[filters.minPrice, filters.maxPrice]}
            onValueChange={handlePriceChange}
            min={0}
            max={10000}
            step={50}
            className=&quot;mb-2&quot;
          />
          <div className=&quot;flex justify-between text-sm text-muted-foreground&quot;>
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
=======
            value={_[filters.minPrice, _filters.maxPrice]}
            onValueChange={_handlePriceChange}
            min={_0}
            max={_10000}
            step={_50}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${_filters.minPrice}</span>
            <span>${_filters.maxPrice}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </div>
      </div>

      <Separator />

      <div>
<<<<<<< HEAD
        <h3 className=&quot;font-semibold mb-3&quot;>Minimum Rating</h3>
        <Select value={filters.minRating.toString()} onValueChange={(value) => 
          onFiltersChange({ ...filters, minRating: parseFloat(value) })
=======
        <h3 className="font-semibold mb-3">Minimum Rating</h3>
        <Select value={_filters.minRating.toString()} onValueChange={_(_value) => 
          onFiltersChange({ ...filters, _minRating: parseFloat(value)})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=&quot;0&quot;>Any Rating</SelectItem>
            <SelectItem value=&quot;1&quot;>1+ Stars</SelectItem>
            <SelectItem value=&quot;2&quot;>2+ Stars</SelectItem>
            <SelectItem value=&quot;3&quot;>3+ Stars</SelectItem>
            <SelectItem value=&quot;4&quot;>4+ Stars</SelectItem>
            <SelectItem value=&quot;4.5&quot;>4.5+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
},

// No Results Component
<<<<<<< HEAD
const NoResultsState: React.FC<{ searchTerm: string, onNewSearch: (term: string) => void }> = ({ 
  searchTerm, 
  onNewSearch 
}) => {
  const suggestions = [
<<<<<<< HEAD
    "AI & Machine Learning",
    "Web Development",
    "Mobile App Development",
    "Data Analysis",
    "UI/UX Design",
    "Blockchain Development"
  ],
=======
    &quot;AI & Machine Learning&quot;,
    &quot;Web Development&quot;,
    &quot;Mobile App Development&quot;,
    &quot;Data Analysis&quot;,
    &quot;UI/UX Design&quot;,
    &quot;Blockchain Development&quot;
=======
const NoResultsState: React.FC<{_searchTerm: string; onNewSearch: (_term: string) => void}> = (_{_searchTerm, _onNewSearch}) => {_const _suggestions = [
    "AI & Machine Learning", _"Web Development", _"Mobile App Development", _"Data Analysis", _"UI/UX Design", _"Blockchain Development"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  return (
    <div className=&quot;text-center py-12&quot;>
      <div className=&quot;mb-6&quot;>
        <Search className=&quot;mx-auto h-16 w-16 text-muted-foreground mb-4&quot; />
        <h2 className=&quot;text-2xl font-semibold mb-2&quot;>No results found</h2>
        <p className=&quot;text-muted-foreground mb-6&quot;>
          We couldn't find anything matching &quot;{searchTerm}&quot;. Try adjusting your search or filters.
=======
  return (_<div className="text-center py-12">
      <div className="mb-6">
        <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">No results found</h2>
        <p className="text-muted-foreground mb-6">
          We couldn't find anything matching "{searchTerm}". Try adjusting your search or filters.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </p>
      </div>

      <div className=&quot;max-w-md mx-auto space-y-4&quot;>
        <div>
<<<<<<< HEAD
          <h3 className=&quot;font-semibold mb-3&quot;>Search Suggestions:</h3>
          <div className=&quot;flex flex-wrap gap-2 justify-center&quot;>
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant=&quot;outline&quot;
                size=&quot;sm&quot;
                onClick={() => onNewSearch(suggestion)}
=======
          <h3 className="font-semibold mb-3">Search Suggestions:</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {_suggestions.map((suggestion, _index) => (_<Button
                key={index}
                variant="outline"
                size="sm"
                onClick={_() => onNewSearch(suggestion)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                {_suggestion}
              </Button>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        <div className="text-sm text-muted-foreground">
          <p>Tips for better results: </p>
          <ul className="mt-2 space-y-1">
=======
        <div className=&quot;text-sm text-muted-foreground&quot;>
          <p>Tips for better results:</p>
          <ul className=&quot;mt-2 space-y-1&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <li>• Try different keywords</li>
            <li>• Check your spelling</li>
            <li>• Use fewer filters</li>
            <li>• Search for broader terms</li>
          </ul>
        </div>
      </div>
    </div>
  )
},

// Main Search Results Page Component
<<<<<<< HEAD
export const SearchResultsPage: React.FC = () => {
  const router = useRouter(),
  const [searchTerm, setSearchTerm] = useState(''),
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState(false),
  const [totalCount, setTotalCount] = useState(0),
  const [currentPage, setCurrentPage] = useState(1),
  const [hasMore, setHasMore] = useState(false),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [showFilters, setShowFilters] = useState(false),
  
  const [filters, setFilters] = useState<SearchFilters>({
    types: [],
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    sort: 'relevance'
  }),

  const suggestions = generateSearchSuggestions(),

  // Extract available categories from results for filter
  const availableCategories = useMemo(() => {
    const categories = new Set<string>(),
    results.forEach(result => {
      if (result.category) categories.add(result.category)
    }),
    return Array.from(categories).sort()
  }, [results]),

  // Sync search term with URL
  useEffect(() => {
    if (router.isReady && router.query.q) {
      const urlTerm = router.query.q as string,
      setSearchTerm(urlTerm)
    }
  }, [router.isReady, router.query.q]),

  // Search function
  const performSearch = async (term: string, page: number = 1, newFilters?: SearchFilters) => {
    if (!term.trim()) {
      setResults([]),
      setTotalCount(0),
      return
    }

    setLoading(true),
    try {
      const searchFilters = newFilters || filters,
      const params = new URLSearchParams({
        query: term,
        page: page.toString(),
        limit: '20'
      }),

      if (searchFilters.types.length > 0) {
        params.append('type', searchFilters.types.join())
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

      const response = await fetch(`/api/search?${params}`),
      const data: SearchResponse = await response.json(),

      if (page === 1) {
        setResults(data.results)
      } else {
        setResults(prev => [...prev, ...data.results])
      }
=======
export const SearchResultsPage: React.FC = () => {_const _router = useRouter();
  const [searchTerm, _setSearchTerm] = useState('');
  const [results, _setResults] = useState<SearchResult[]>([]);
  const [loading, _setLoading] = useState(false);
  const [totalCount, _setTotalCount] = useState(0);
  const [currentPage, _setCurrentPage] = useState(1);
  const [hasMore, _setHasMore] = useState(false);
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, _setShowFilters] = useState(false);
  
  const [filters, _setFilters] = useState<SearchFilters>({
    types: [], _category: '', _minPrice: 0, _maxPrice: 10000, _minRating: 0, _sort: 'relevance'});

  const _suggestions = generateSearchSuggestions();

  // Extract available categories from results for filter
  const _availableCategories = useMemo__(() => {_const _categories = new Set<string>();
    results.forEach(result => {
      if (result.category) categories.add(result.category);});
    return Array.from(categories).sort();
  }, [results]);

  // Sync search term with window.URL
  useEffect__(() => {_if (router.isReady && router.query.q) {
      const _urlTerm = router.query.q as string;
      setSearchTerm(urlTerm);}
  }, [router.isReady, router.query.q]);

  // Search function
  const _performSearch = async (_term: string, _page: number = 1, _newFilters?: SearchFilters) => {_if (!term.trim()) {
      setResults([]);
      setTotalCount(0);
      return;}

    setLoading(true);
    try {_const _searchFilters = newFilters || filters;
      const _params = new URLSearchParams({
        query: term, _page: page.toString(), _limit: '20'});

      if (searchFilters.types.length > 0) {_params.append('type', _searchFilters.types.join(', _'));}
      if (searchFilters.category) {_params.append('category', _searchFilters.category);}
      if (searchFilters.minPrice > 0) {_params.append('minPrice', _searchFilters.minPrice.toString());}
      if (searchFilters.maxPrice < 10000) {_params.append('maxPrice', _searchFilters.maxPrice.toString());}
      if (searchFilters.minRating > 0) {_params.append('minRating', _searchFilters.minRating.toString());}
      if (searchFilters.sort !== 'relevance') {_params.append('sort', _searchFilters.sort);}

      const _response = await fetch(`/api/search?${_params}`);
      const data: SearchResponse = await response.json();

      if (page === 1) {_setResults(data.results);} else {_setResults(prev => [...prev, _...data.results]);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      setTotalCount(data.totalCount),
      setCurrentPage(data.page),
      setHasMore(data.hasMore),

<<<<<<< HEAD
      logInfo('Search completed', { 
        term,
        resultCount: data.results.length,
        totalCount: data.totalCount 
      })
    } catch (error) {
      logErrorToProduction('Search failed', { data: error }),
      setResults([]),
      setTotalCount(0)
    } finally {
      setLoading(false)
    }
  },

  // Search when term or filters change
  useEffect(() => {
    if (searchTerm.trim()) {
      performSearch(searchTerm, 1, filters),
      setCurrentPage(1)
    }
  }, [searchTerm, filters]),

  // Handle search input
  const handleSearch = (term: string) => {
    setSearchTerm(term),
    router.push(`/search?q=${encodeURIComponent(term)}`, undefined, { shallow: true })
  },

  // Handle filter changes
  const handleFiltersChange = (newFilters: SearchFilters) => {
    setFilters(newFilters)
  },

  // Load more results
  const loadMore = () => {
    if (hasMore && !loading) {
      performSearch(searchTerm, currentPage + 1)
    }
  },
=======
      logInfo('Search completed', {_term, _resultCount: data.results.length, _totalCount: data.totalCount});
    } catch (error) {_logErrorToProduction('Search failed', _{ data: error});
      setResults([]);
      setTotalCount(0);
    } finally {_setLoading(false);}
  };

  // Search when term or filters change
  useEffect__(() => {_if (searchTerm.trim()) {
      performSearch(searchTerm, _1, _filters);
      setCurrentPage(1);}
  }, [searchTerm, filters]);

  // Handle search input
  const _handleSearch = (_term: string) => {_setSearchTerm(term);
    router.push(`/search?q=${encodeURIComponent(term)}`, undefined, {_shallow: true});
  };

  // Handle filter changes
  const _handleFiltersChange = (_newFilters: SearchFilters) => {_setFilters(newFilters);};

  // Load more results
  const _loadMore = () => {_if (hasMore && !loading) {
      performSearch(searchTerm, _currentPage + 1);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Active filters count
  const _activeFiltersCount = filters.types.length + 
    (filters.category ? 1 : 0) + 
    (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0),

<<<<<<< HEAD
  return (
    <div className=&quot;container mx-auto px-4 py-6&quot;>
      {/* Search Header */}
      <div className=&quot;mb-6&quot;>
        <div className=&quot;flex gap-4 mb-4&quot;>
          <div className=&quot;flex-1&quot;>
            <EnhancedSearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              onSelectSuggestion={(suggestion) => handleSearch(suggestion.text)}
              searchSuggestions={suggestions}
              placeholder=&quot;Search products, talent, services, and more...&quot;
            />
          </div>
          <Button onClick={() => handleSearch(searchTerm)} disabled={!searchTerm.trim()}>
            <Search className=&quot;h-4 w-4&quot; />
          </Button>
        </div>

        {searchTerm && (
          <div className=&quot;flex items-center justify-between&quot;>
            <div>
              <h1 className=&quot;text-2xl font-bold&quot;>Search Results</h1>
              <p className=&quot;text-muted-foreground&quot;>
                {loading ? 'Searching...' : `${totalCount} results for &quot;${searchTerm}&quot;`}
              </p>
            </div>

            <div className=&quot;flex items-center gap-2&quot;>
              {/* Sort Options */}
              <Select value={filters.sort} onValueChange={(value) => 
                setFilters({ ...filters, sort: value })
=======
  return (_<div className="container mx-auto px-4 py-6">
      {_/* Search Header */}
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <EnhancedSearchInput
              value={_searchTerm}
              onChange={_setSearchTerm}
              onSelectSuggestion={_(suggestion) => handleSearch(suggestion.text)}
              searchSuggestions={_suggestions}
              placeholder="Search products, talent, services, and more..."
            />
          </div>
          <Button onClick={_() => handleSearch(searchTerm)} disabled={_!searchTerm.trim()}>
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {_searchTerm && (_<div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Search Results</h1>
              <p className="text-muted-foreground">
                {loading ? 'Searching...' : `${totalCount} results for "${_searchTerm}"`}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {_/* Sort Options */}
              <Select value={_filters.sort} onValueChange={_(value) => 
                setFilters({ ...filters, _sort: value})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              }>
                <SelectTrigger className=&quot;w-40&quot;>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=&quot;relevance&quot;>Relevance</SelectItem>
                  <SelectItem value=&quot;price_asc&quot;>Price: Low to High</SelectItem>
                  <SelectItem value=&quot;price_desc&quot;>Price: High to Low</SelectItem>
                  <SelectItem value=&quot;rating&quot;>Highest Rated</SelectItem>
                </SelectContent>
              </Select>

<<<<<<< HEAD
              {/* View Mode Toggle */}
              <div className=&quot;flex border rounded-md&quot;>
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size=&quot;sm&quot;
                  onClick={() => setViewMode('grid')}
=======
              {_/* View Mode Toggle */}
              <div className="flex border rounded-md">
                <Button
                  variant={_viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={_() => setViewMode('grid')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <GridIcon className=&quot;h-4 w-4&quot; />
                </Button>
                <Button
<<<<<<< HEAD
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size=&quot;sm&quot;
                  onClick={() => setViewMode('list')}
=======
                  variant={_viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={_() => setViewMode('list')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <List className=&quot;h-4 w-4&quot; />
                </Button>
              </div>

              {_/* Mobile Filter Toggle */}
              <Sheet open={_showFilters} onOpenChange={_setShowFilters}>
                <SheetTrigger asChild>
<<<<<<< HEAD
                  <Button variant=&quot;outline&quot; className=&quot;lg:hidden&quot;>
                    <Filter className=&quot;h-4 w-4 mr-2&quot; />
                    Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
=======
                  <Button variant="outline" className="lg:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters {_activeFiltersCount > 0 && `(${activeFiltersCount})`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </Button>
                </SheetTrigger>
                <SheetContent side=&quot;left&quot; className=&quot;w-80&quot;>
                  <SheetHeader>
                    <SheetTitle>Search Filters</SheetTitle>
                  </SheetHeader>
                  <div className=&quot;mt-6&quot;>
                    <FilterSidebar
                      filters={_filters}
                      onFiltersChange={_handleFiltersChange}
                      availableCategories={_availableCategories}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        )}
      </div>

<<<<<<< HEAD
      {searchTerm && (
        <div className=&quot;flex gap-6&quot;>
          {/* Desktop Filters Sidebar */}
          <div className=&quot;hidden lg:block w-64 flex-shrink-0&quot;>
            <div className=&quot;bg-card border rounded-lg p-4 sticky top-4&quot;>
              <div className=&quot;flex items-center justify-between mb-4&quot;>
                <h2 className=&quot;font-semibold&quot;>Filters</h2>
                {activeFiltersCount > 0 && (
=======
      {_searchTerm && (_<div className="flex gap-6">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg: block w-64 flex-shrink-0">
            <div className="bg-card border rounded-lg p-4 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Filters</h2>
                {_activeFiltersCount > 0 && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <Button
                    variant=&quot;ghost&quot;
                    size=&quot;sm&quot;
                    onClick={() => setFilters({
                      types: [], _category: '', _minPrice: 0, _maxPrice: 10000, _minRating: 0, _sort: 'relevance'})}
                  >
                    Clear All
                  </Button>
                )}
              </div>
              <FilterSidebar
                filters={_filters}
                onFiltersChange={_handleFiltersChange}
                availableCategories={_availableCategories}
              />
            </div>
          </div>

<<<<<<< HEAD
          {/* Main Content */}
          <div className=&quot;flex-1&quot;>
            {loading && results.length === 0 ? (
              <div className=&quot;flex justify-center py-12&quot;>
                <Loader2 className=&quot;h-8 w-8 animate-spin&quot; />
=======
          {_/* Main Content */}
          <div className="flex-1">
            {_loading && results.length === 0 ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            ) : results.length === 0 && searchTerm ? (
              <NoResultsState 
                searchTerm={searchTerm} 
                onNewSearch={_handleSearch}
              />
<<<<<<< HEAD
            ) : (
              <>
                {/* Results Grid/List */}
                <div className={viewMode === 'grid' 
                  ? &quot;grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6&quot;
                  : &quot;space-y-4 mb-6&quot;
                }>
                  {results.map((result) => (
=======
            ) : (_<>
                {_/* Results Grid/List */}
                <div className={_viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6"
                  : "space-y-4 mb-6"}>
                  {_results.map((result) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <SearchResultCard
                      key={`${result.type}-${_result.id}`}
                      result={_result}
                      searchTerm={_searchTerm}
                      viewMode={_viewMode}
                    />
                  ))}
                </div>

<<<<<<< HEAD
                {/* Load More Button */}
                {hasMore && (
                  <div className=&quot;text-center&quot;>
                    <Button 
                      onClick={loadMore} 
                      disabled={loading}
                      variant=&quot;outline&quot;
=======
                {_/* Load More Button */}
                {_hasMore && (
                  <div className="text-center">
                    <Button 
                      onClick={loadMore} 
                      disabled={_loading}
                      variant="outline"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      {_loading ? (
                        <>
                          <Loader2 className=&quot;h-4 w-4 mr-2 animate-spin&quot; />
                          Loading...
                        </>
                      ) : (
                        'Load More Results'
                      )}
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
},

export default SearchResultsPage, 