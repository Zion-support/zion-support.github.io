
import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {
  Search,
  Filter,
  X,
  SortAsc,
  SortDesc,
  GridIcon,
  List,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Badge } from '@/components / ui / badge';
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components / ui / select';
import { Checkbox } from '@/components / ui / checkbox';
import { Slider } from '@/components / ui / slider';
import { Separator } from '@/components / ui / separator';
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components / ui / sheet';
import { EnhancedSearchInput } from './EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data / marketplace_data';
import { logErrorToProduction, log_info } from '@/utils / production_logger';
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

  date?: string;

interface SearchFilters {;

  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;

  sort: string;

interface SearchResponse {;

  results: SearchResult[];
  totalCount: number;
  page: number;
  limit: number;
  query: string;

const HighlightText: React.FC<{
  text: string
  searchTerm: string
  className?: string
}> = ({ text, searchTerm, className = '' }) => {  if (!searchTerm.trim()) {
    return <span className={className}>{text}</span>
=======
  }
  const parts = text.split(
    new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  )
  return (
    <span className={className}>
      {parts.map((part, index) =>        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index} className='bg-yellow-200 text-black px-1 rounded'>
import React, { useState, useEffect, useMemo } from 'react',;
import { useRouter } from 'next/router',;
import { Search, Filter, X, SortAsc, SortDesc, GridIcon, List, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Badge } from '@/components/ui/badge',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',;
import { Checkbox } from '@/components/ui/checkbox',;
import { Slider } from '@/components/ui/slider',;
import { Separator } from '@/components/ui/separator',;
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet',;
import { EnhancedSearchInput } from './EnhancedSearchInput',;
import { generateSearchSuggestions } from '@/data/marketplaceData',;
import { logErrorToProduction, logInfo } from '@/utils/productionLogger',;
interface SearchResult {;
  id: string,;
  title: string,;
  description: string,;
  type: 'product' | 'talent' | 'blog' | 'service',;
  category?: string,;
  url?: string,;
  image?: string,;
  price?: number,;
  currency?: string,;
  rating?: number,;
  tags?: string[],;
  date?: string;
}
;
interface SearchFilters {;
  types: string[],;
  category: string,;
  minPrice: number,;
  maxPrice: number,;
  minRating: number,;
  sort: string;
}
;
interface SearchResponse {;
  results: SearchResult[],;
  totalCount: number,;
  page: number,;
  limit: number,;
  query: string,;
  hasMore: boolean;
}
;
// Highlight search terms in text;
const HighlightText: React.FC<{ text: string, searchTerm: string, className?: string }> = ({;
  text,;
  searchTerm,;
  className = '';
}) => {;
  if (!searchTerm.trim()) {;
    return <span className={className}>{text}</span>;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
  const parts = text.split(
    new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  )
  return (
    <span className={className}>
      {parts.map((part, index) =>        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index} className='bg-yellow-200 text-black px-1 rounded'>


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

            {part}
          </mark>
        ) : (
          part
        )
      )}

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


  return (
    <div onClick={handleClick} className={cardClass}>
      {result.image && (
        <div className={viewMode === 'grid' ? 'mb-3' : 'flex-shrink-0'}>
          <img
            src={result.image}
            alt={result.title}
            className={
              viewMode === 'grid'
                ? 'w-full h-48 object-cover rounded'
                : 'w-20 h-20 object-cover rounded'
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
      )}



    </span>;
  );
},;
// Search Result Card Component;
const SearchResultCard: React.FC<{;
  result: SearchResult,;
  searchTerm: string,;
  viewMode: 'grid' | 'list';
}> = ({ result, searchTerm, viewMode }) => {;
  const router = useRouter(),;
  const handleClick = () => {;
    if (result.url) {;
      router.push(result.url);
    }
  },

  const cardClass = viewMode === 'grid' 
    ? "bg-card border rounded-lg p-4 hover: shadow-lg transition-shadow cursor-pointer"
    : "bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4",

  return (
    <div onClick={handleClick} className={cardClass}>
      {result.image && (
        <div className={viewMode === 'grid' ? "mb-3" : "flex-shrink-0"}>
          <img 
            src={result.image} 
            alt={result.title}
            className={viewMode === 'grid' ? "w-full h-48 object-cover rounded" : "w-20 h-20 object-cover rounded"}
          />
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                {result.category}
              </Badge>
            )}

              </Badge>)}
            {result.tags?.slice (0, 3).map ((tag, index) => (
              <Badge key={index} variant='outline' className='text - xs'>                <HighlightText text={tag} search_term={search_term} />;
              </Badge>))}
          </div>;

          {result.rating && (
            <div className='flex items - center gap - 1'>;
              <span className='text - yellow - 500'>★</span>;
              <span className='text - sm'>{result.rating.to_fixed (1)}</span>;
            </div>)}
        </div>;
      </div>;
    </div>);
}
// Filter Sidebar Component;
const FilterSidebar: React.FC<{

  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  available_categories: string[];
}> = ({ filters, onFiltersChange, available_categories }) => {  const type_options = [;
    { id: 'product', label: 'Products' },
    { id: 'talent', label: 'Talent' },
    { id: 'service', label: 'Services' },
    { id: 'blog', label: 'Blog Posts' },
  ];
  const handleTypeChange = (type_id: string, checked: boolean) =>: any {
    const new_types = checked      ? [...filters.types, type_id];
      : filters.types.filter (t => t !== type_id);
    onFiltersChange ({ ...filters, types: new_types });
  }
  const handlePriceChange = (values: number[]) =>: any {
    onFiltersChange ({
      ...filters,
      min_price: values[0] ?? 0,
      max_price: values[1] ?? 10000,
    });

  }
          </div>;

          {result && result.rating && (;
            <div className='flex items-center gap-1'>;
              <span className='text-yellow-500'>★</span>;
              <span className='text-sm'>{result && result.rating.toFixed(1)}</span>;
            </div>;
          )}
            {result.tags?.slice(0, 3).map((tag, index) => (
=======
              <Badge key={index} variant='outline' className='text-xs'>                <HighlightText text={tag} searchTerm={searchTerm} />
              </Badge>
            ))}
          </div>
              <Badge key={index} variant="outline" className="text-xs">
                <HighlightText text={tag} searchTerm={searchTerm} />
              </Badge>
            ))}
          </div>
          

          {result.rating && (
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm">{result.rating.toFixed(1)}</span>
            </div>
          )}

        </div>;
      </div>;
    </div>;
  );
},;
// Filter Sidebar Component;
const FilterSidebar: React.FC<{;
  filters: SearchFilters,;
  onFiltersChange: (filters: SearchFilters) => void,;
  availableCategories: string[];
}> = ({ filters, onFiltersChange, availableCategories }) => {;
  const typeOptions = [;
    { id: 'product', label: 'Products' },;
    { id: 'talent', label: 'Talent' },;
    { id: 'service', label: 'Services' },;
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




  return (

                id={option.id}
                checked={filters.types.includes(option.id)}
                onCheckedChange={checked =>
                  handleTypeChange(option.id, !!checked)
                }              />
              <label htmlFor={option.id} className='text-sm'>
                onCheckedChange={(checked) => handleTypeChange(option.id, !!checked)}
              />
              <label htmlFor={option.id} className="text-sm">
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {availableCategories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}

          </SelectContent>;
        </Select>;
      </div>;

      <Separator />;

      <div>;
        <h3 className='font-semibold mb-3'>Price Range</h3>;
        <div className='px-2'>;

          <Slider
            value={[filters && filters.minPrice, filters && filters.maxPrice]}
            {available_categories.map (category => (
              <SelectItem key={category} value={category}>;
                {category}
              </SelectItem>))}
          </SelectContent>;
        </Select>;
      </div>;
      <Separator />;
      <div>;
        <h3 className='font - semibold mb - 3'>Price Range</h3>;
        <div className='px - 2'>;
          <Slider;
            value={[filters.min_price, filters.max_price]}
            onValueChange={handlePriceChange}
            min={0}
            max={10000}
            step={50}
=======
            className='mb-2'          />
          <div className='flex justify-between text-sm text-muted-foreground'>
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">


            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className='font-semibold mb-3'>Minimum Rating</h3>
        <Select
          value={filters && filters.minRating.toString()}
          onValueChange={value =>;
            onFiltersChange({ ...filters, minRating: parseFloat(value) });
          }
        >          <SelectTrigger>
        <h3 className="font-semibold mb-3">Minimum Rating</h3>
        <Select value={filters.minRating.toString()} onValueChange={(value) => 
          onFiltersChange({ ...filters, minRating: parseFloat(value) })
        }>
          <SelectTrigger>


            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Any Rating</SelectItem>
            <SelectItem value="1">1+ Stars</SelectItem>
            <SelectItem value="2">2+ Stars</SelectItem>
            <SelectItem value="3">3+ Stars</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="4.5">4.5+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
// No Results Component;
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
},

// No Results Component
const NoResultsState: React.FC<{ searchTerm: string, onNewSearch: (term: string) => void }> = ({ 
  searchTerm, 
  onNewSearch 
}) => {
  const suggestions = [
    "AI & Machine Learning",
    "Web Development",
    "Mobile App Development",
    "Data Analysis",
    "UI/UX Design",
    "Blockchain Development"
  ],


>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

  return (
    <div className="text-center py-12">
      <div className="mb-6">
        <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">No results found</h2>
        <p className="text-muted-foreground mb-6">
          We couldn't find anything matching "{searchTerm}". Try adjusting your search or filters.
        </p>
      </div>

                {suggestion}
              </Button>;
            ))}
          </div>
        </div>
=======
        <div className='text-sm text-muted-foreground'>
          <p>Tips for better results:</p>
          <ul className='mt-2 space-y-1'>

        <div className="text-sm text-muted-foreground">
          <p>Tips for better results: </p>
          <ul className="mt-2 space-y-1">


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
// Main Search Results Page Component;
export const AdvancedSearchResults: React.FC = () => {



>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
},

// Main Search Results Page Component
export const AdvancedSearchResults: React.FC = () => {
  const router = useRouter(),
  const [searchTerm, setSearchTerm] = useState(''),
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState(false),
  const [totalCount, setTotalCount] = useState(0),
  const [currentPage, setCurrentPage] = useState(1),
  const [hasMore, setHasMore] = useState(false),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [showFilters, setShowFilters] = useState(false),
  

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    (filters.minRating > 0 ? 1 : 0)
          </div>;
        </div>;
        <div className="text-sm text-muted-foreground">;
          <p>Tips for better results: </p>;
          <ul className="mt-2 space-y-1">;
            <li>• Try different keywords</li>;
            <li>• Check your spelling</li>;
            <li>• Use fewer filters</li>;
            <li>• Search for broader terms</li>;
          </ul>;
        </div>;
      </div>;
    </div>;
  );
},;
// Main Search Results Page Component;
export const AdvancedSearchResults: React.FC = () => {;
  const router = useRouter(),;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [results, setResults] = useState<SearchResult[]>([]),;
  const [loading, setLoading] = useState(false),;
  const [totalCount, setTotalCount] = useState(0),;
  const [currentPage, setCurrentPage] = useState(1),;
  const [hasMore, setHasMore] = useState(false),;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),;
  const [showFilters, setShowFilters] = useState(false),;
  const [filters, setFilters] = useState<SearchFilters>({;
    types: [],;
    category: '',;
    minPrice: 0,;
    maxPrice: 10000,;
    minRating: 0,;
    sort: 'relevance';
  }),;
  const suggestions = generateSearchSuggestions(),;
  // Extract available categories from results for filter;
  const availableCategories = useMemo(() => {;
    const categories = new Set<string>(),;
    results.forEach(result => {;
      if (result.category) categories.add(result.category);
    }),;
    return Array.from(categories).sort();
  }, [results]),;
  // Sync search term with URL;
  useEffect(() => {;
    if (router.isReady && router.query.q) {;
      const urlTerm = router.query.q as string,;
      setSearchTerm(urlTerm);
    }
  }, [router.isReady, router.query.q]),;
  // Search function;
  const performSearch = async (term: string, page: number = 1, newFilters?: SearchFilters) => {;
    if (!term.trim()) {;
      setResults([]),;
      setTotalCount(0),;
      return;
    }
;
    setLoading(true),;
    try {;
      const searchFilters = newFilters || filters,;
      const params = new URLSearchParams({;
        query: term,;
        page: page.toString(),;
        limit: '20';
      }),;
      if (searchFilters.types.length > 0) {;
        params.append('type', searchFilters.types.join());
      }
      if (searchFilters.category) {;
        params.append('category', searchFilters.category);
      }
      if (searchFilters.minPrice > 0) {;
        params.append('minPrice', searchFilters.minPrice.toString());
      }
      if (searchFilters.maxPrice < 10000) {;
        params.append('maxPrice', searchFilters.maxPrice.toString());
      }
      if (searchFilters.minRating > 0) {;
        params.append('minRating', searchFilters.minRating.toString());
      }
      if (searchFilters.sort !== 'relevance') {;
        params.append('sort', searchFilters.sort);
      }
;
      const response = await fetch(`/api/search?${params}`),;
      const data: SearchResponse = await response.json(),;
      if (page === 1) {;
        setResults(data.results);
      } else {;
        setResults(prev => [...prev, ...data.results]);
      }
;
      setTotalCount(data.totalCount),;
      setCurrentPage(data.page),;
      setHasMore(data.hasMore),;
      logInfo('Search completed', {;
        term,;
        resultCount: data.results.length,;
        totalCount: data.totalCount;
      });
    } catch (error) {;
      logErrorToProduction('Search failed', { data: error }),;
      setResults([]),;
      setTotalCount(0);
    } finally {;
      setLoading(false);
    }
  },;
  // Search when term or filters change;
  useEffect(() => {;
    if (searchTerm.trim()) {;
      performSearch(searchTerm, 1, filters),;
      setCurrentPage(1);
    }
  }, [searchTerm, filters]),;
  // Handle search input;
  const handleSearch = (term: string) => {;
    setSearchTerm(term),;
    router.push(`/search?q=${encodeURIComponent(term)}`, undefined, { shallow: true });
  },;
  // Handle filter changes;
  const handleFiltersChange = (newFilters: SearchFilters) => {;
    setFilters(newFilters);
  },;
  // Load more results;
  const loadMore = () => {;
    if (hasMore && !loading) {;
      performSearch(searchTerm, currentPage + 1);
    }
  },

  // Active filters count
  const activeFiltersCount = filters.types.length + 
    (filters.category ? 1 : 0) + 
    (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0),

<<<<<<< HEAD

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search Header */}
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <EnhancedSearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              onSelectSuggestion={suggestion => handleSearch(suggestion.text)}
              searchSuggestions={suggestions}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          </div>
          <Button onClick={() => handleSearch(searchTerm)} disabled={!searchTerm.trim()}>
            <Search className="h-4 w-4" />
          </Button>
        </div>
        {searchTerm && (
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Search Results</h1>
              <p className="text-muted-foreground">
                {loading ? 'Searching...' : `${totalCount} results for "${searchTerm}"`}
              </p>
            </div>

<<<<<<< HEAD


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price_asc">Price: Low to High</SelectItem>
                  <SelectItem value="price_desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          <div className="flex-1">
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

            {loading && results.length === 0 ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : results.length === 0 && searchTerm ? (
              <NoResultsState
                searchTerm={searchTerm}
                onNewSearch={handleSearch}              />
            ) : (
              <>
                {/* Results Grid/List */}
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6'
                      : 'space-y-4 mb-6'
                  }
                >
                  {results.map(result => (                    <SearchResultCard
                      key={`${result.type}-${result.id}`}
                      result = {result,}
                      searchTerm = {searchTerm,}
                      viewMode = {viewMode,}
                    />
              <NoResultsState 
                searchTerm={searchTerm} 
                onNewSearch={handleSearch}
              />;
            ) : (;
              <>;
                {/* Results Grid/List */}
                <div className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6"
                  : "space-y-4 mb-6"
                }>
                  {results.map((result) => (
                    <SearchResultCard
                      key={`${result.type}-${result.id}`}
                      result={result}
                      searchTerm={searchTerm}
                      viewMode={viewMode}
                    />;
<<<<<<< HEAD

                      {loading ? (
                        <>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
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
setCurrentPage (data.page);
setHasMore (data.hasMore);
//Active filters count const activeFiltersCount = filters.types.length + (filters.category ? 1 : 0) + (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) + (filters.minRating > 0 ? 1 : 0);"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export default AdvancedSearchResults, ;
export default AdvancedSearchResults;


    </div>;
  );
};
export default AdvancedSearchResults;
<<<<<<< HEAD
