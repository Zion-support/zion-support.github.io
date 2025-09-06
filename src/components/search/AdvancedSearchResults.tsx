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
import React, { useState, useEffect, useMemo } from 'react';
import { use_router } from 'next / router';


import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

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
  }

  const parts = text && text.split(;
    new RegExp(`(${searchTerm && searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  );


  return (

    <span className={className}>
      {parts.map((part, index) => 
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index} className="bg-yellow-200 text-black px-1 rounded">


    sort: 'relevance',
  });
  const suggestions = generateSearchSuggestions ();
  // Extract available categories from results for filter;

  const availableCategories = useMemo(() => {;
    const categories = new Set<string>();    results.forEach(result => {
      if (result.category) categories.add(result.category)
    })
    return Array.from(categories).sort()
  }, [results])
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
      const urlTerm = router.query.q as string
      setSearchTerm(urlTerm)

    }
  }, [router.is_ready, router.query.q]);
  // Search function;
  const perform_search = async (
    term: string,
    page: number = 1,
    new_filters?: SearchFilters) => {    if () {) {
  $2
}
      set_results ([]);
      setTotalCount (0);
      return;
    }
    set_loading (true);
    try {
      const search_filters = new_filters || filters;
      const params = new URLSearchParams ({
        query: term,
        page: page.to_string (),
        limit: '20',
      });
      // Check condition
if ( {) {
  $2
}
        params.append ('type', search_filters.types.join (', '));

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

      const response = await fetch (`/api / search?${params}`);
      const data: SearchResponse = await response.json ();
      // Check condition
if ( {) {
  $2
}
        set_results (data.results);

      } else {
        setResults(prev => [...prev, ...data.results])
      }

      setTotalCount (data.total_count);
      setCurrentPage (data.page);
      setHasMore (data.has_more);
      log_info ('Search completed', {
        term,
        result_count: data.results.length,
        total_count: data.total_count,
      });

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

  }, [search_term, filters]);
  // Handle search input;
  const handle_search = (term: string) =>: any {
    setSearchTerm (term);
    router.push (`/search?q=${encodeURIComponent (term)}`, undefined, {
      shallow: true,
    });

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

  const activeFiltersCount = null;
    filters.types.length +
    (filters.category ? 1 : 0) +
    (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) +


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



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


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


                  ))}
                </div>
                {/* Load More Button */}
                {hasMore && (
                  <div className='text-center'>
                    <Button
                      onClick={loadMore}
                      disabled={loading}
                      variant='outline'                    >
                  <div className="text-center">
                    <Button 
                      onClick={loadMore} 
                      disabled={loading}
                      variant="outline"
                    >

<<<<<<< HEAD


                      {loading ? (
                        <>
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


export default AdvancedSearchResults, ;
export default AdvancedSearchResults;


    </div>;
  );
};
export default AdvancedSearchResults;

<<<<<<< HEAD



          </div>)}
      </div>;
      {search_term && (
        <div className='flex gap - 6'>;
          {/* Desktop Filters Sidebar */}
          <div className='hidden lg:block w - 64 flex - shrink - 0'>;
            <div className='bg - card border rounded - lg p - 4 sticky top - 4'>;
              <div className='flex items - center justify - between mb - 4'>;
                <h2 className='font - semibold'>Filters</h2>;
                {activeFiltersCount > 0 && (
                  <Button;
                    variant='ghost';
                    size='sm';
                    on_click={() =>;
                      set_filters ({
                        types: [],
                        category: '',
                        min_price: 0,
                        max_price: 10000,
                        min_rating: 0,
                        sort: 'relevance',
                      });
                    }                  >;
                    Clear All;
                  </Button>)}
              </div>;
              <FilterSidebar;
                filters = {filters, }
                onFiltersChange = {handleFiltersChange, }
                available_categories = {available_categories, }
              />;
            </div>;
          </div>;
          {/* Main Content */}
          <div className='flex - 1'>;
            {loading && results.length === 0 ? (
              <div className='flex justify - center py - 12'>;
                <Loader2 className='h - 8 w - 8 animate - spin' />;
              </div>) : results.length === 0 && search_term ? (
              <NoResultsState;
                search_term={search_term}
                onNewSearch={handle_search}              />) : (
              <>;
                {/* Results Grid / List */}
                <div;
                  className={
                    view_mode === 'grid';
                      ? 'grid grid - cols - 1 md:grid - cols - 2 xl:grid - cols - 3 gap - 4 mb - 6';
                      : 'space - y-4 mb - 6';
                  }
                >;
                  {results.map (result => (                    <SearchResultCard;
                      key={`${result.type}-${result.id}`}
                      result = {result, }
                      search_term = {search_term, }
                      view_mode = {view_mode, }
                    />))}
                </div>;
                {/* Load More Button */}
                {has_more && (
                  <div className='text - center'>;
                    <Button;
                      on_click={load_more}
                      disabled={loading}
                      variant='outline'                    >;
                      {loading ? (
                        <>;
                          <Loader2 className='h - 4 w - 4 mr - 2 animate - spin' />;
                          Loading...;
                        </>) : (
                        'Load More Results')}
                    </Button>;
                  </div>)}
              </>)}
          </div>;
        </div>)}
    </div>);
}
export default AdvancedSearchResults;
  suggestion;
}</Button>) );
}</div> </div> <li>• Try different keywords</li> <li>• Check your spelling</li> <li>• Use fewer filters</li> <li>• Search for broader terms</li> </ul> </div> </div> </div>);
}
//Main Search Results Page Component setTotalCount (data.total_count);
setCurrentPage (data.page);
setHasMore (data.has_more);
//Active filters count const activeFiltersCount = filters.types.length + (filters.category ? 1 : 0) + (filters.min_price > 0 || filters.max_price < 10000 ? 1 : 0) + (filters.min_rating > 0 ? 1 : 0);";
}> <SelectTrigger className="w - 40" > <SelectValue /> </SelectTrigger> <SelectContent> <SelectItem value="relevance" >Relevance</SelectItem> <SelectItem value="price asc" >Price: Low to High</SelectItem> <SelectItem value="price desc" >Price: High to Low</SelectItem> <SelectItem value="rating" >Highest Rated</SelectItem> </SelectContent> </Select> > <GridIcon className="h - 4 w - 4" /> </Button> <Button > <List className="h - 4 w - 4" /> </Button> </div> {
  /* Mobile Filter Toggle */;
}<Sheet open= {
  show_filters;
}onOpenChange= {
  setShowFilters ";
}> <SheetTrigger as_child> </Button> </SheetTrigger> <SheetContent side="left" className="w - 80" > <SheetHeader> <SheetTitle > Search Filters</SheetTitle> </SheetHeader> <div className="mt - 6" > <FilterSidebar filters= {
  filters;
}onFiltersChange= {
  handleFiltersChange;
}available_categories= {
  available_categories;
}/> </div> </SheetContent> </Sheet> </div> </div>) ";
}</div> <Button variant="ghost" size="sm" on_click={
  () => set_filters ({';
  types: [], category: '', min_price: 0, max_price: 10000,  min_rating: 0, sort: 'relevance';
});
}> Clear All </Button>);
}</div> <FilterSidebar filters= {
  filters;
}onFiltersChange= {
  handleFiltersChange;
}available_categories= {
  available_categories;
}/> </div> </div> </div>) : results.length === 0 && search_term ? (<NoResultsState search_term= {
  search_term;
}onNewSearch= {
  handle_search;
}/> <SearchResultCard key= {
  `$ {
  result.type;
}-$ {
  result.id;
}`;
}result= {
  result;
}search_term= {
  search_term;
}view_mode= {
  view_mode;
}/>) );
}</div> > {'";
  loading ? (<> <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" /> Loading... </>) : ('Load More Results');
}</Button> </div>);
}</>);
}</div> </div>);
}</div>);
}
export default AdvancedSearchResults;
'";
export default AdvancedSearchResults,
export default AdvancedSearchResults,