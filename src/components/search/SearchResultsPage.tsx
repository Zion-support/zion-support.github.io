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
  
  return (_<span className={_className}>
      {_parts.map((part, _index) => 
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index} className="bg-yellow-200 text-black px-1 rounded">
            {_part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
};

// Search Result Card Component
const SearchResultCard: React.FC<{_result: SearchResult; 
  searchTerm: string; 
  viewMode: 'grid' | 'list'}> = (_{_result, _searchTerm, _viewMode}) => {_const _router = useRouter();

  const _handleClick = () => {
    if (result.url) {
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
          />
        </div>
      )}
      
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
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
            </div>
          )}
        </div>

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
              </Badge>
            ))}
          </div>
          
          {_result.rating && (
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm">{result.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Filter Sidebar Component
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

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Content Type</h3>
        <div className="space-y-2">
          {_typeOptions.map(option => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={_option.id}
                checked={_filters.types.includes(option.id)}
                onCheckedChange={_(_checked) => handleTypeChange(option.id, _!!checked)}
              />
              <label htmlFor={_option.id} className="text-sm">
                {_option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <Select value={_filters.category} onValueChange={_(_value) => 
          onFiltersChange({ ...filters, _category: value === 'all' ? '' : value})
        }>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {_availableCategories.map(category => (
              <SelectItem key={category} value={_category}>
                {_category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
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
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Minimum Rating</h3>
        <Select value={_filters.minRating.toString()} onValueChange={_(_value) => 
          onFiltersChange({ ...filters, _minRating: parseFloat(value)})
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
  );
};

// No Results Component
const NoResultsState: React.FC<{_searchTerm: string; onNewSearch: (_term: string) => void}> = (_{_searchTerm, _onNewSearch}) => {_const _suggestions = [
    "AI & Machine Learning", _"Web Development", _"Mobile App Development", _"Data Analysis", _"UI/UX Design", _"Blockchain Development"
  ];

  return (_<div className="text-center py-12">
      <div className="mb-6">
        <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">No results found</h2>
        <p className="text-muted-foreground mb-6">
          We couldn't find anything matching "{searchTerm}". Try adjusting your search or filters.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <div>
          <h3 className="font-semibold mb-3">Search Suggestions:</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {_suggestions.map((suggestion, _index) => (_<Button
                key={index}
                variant="outline"
                size="sm"
                onClick={_() => onNewSearch(suggestion)}
              >
                {_suggestion}
              </Button>
            ))}
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Tips for better results:</p>
          <ul className="mt-2 space-y-1">
            <li>• Try different keywords</li>
            <li>• Check your spelling</li>
            <li>• Use fewer filters</li>
            <li>• Search for broader terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Main Search Results Page Component
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
      
      setTotalCount(data.totalCount);
      setCurrentPage(data.page);
      setHasMore(data.hasMore);

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

  // Active filters count
  const _activeFiltersCount = filters.types.length + 
    (filters.category ? 1 : 0) + 
    (filters.minPrice > 0 || filters.maxPrice < 10000 ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0);

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
              }>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price_asc">Price: Low to High</SelectItem>
                  <SelectItem value="price_desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              {_/* View Mode Toggle */}
              <div className="flex border rounded-md">
                <Button
                  variant={_viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={_() => setViewMode('grid')}
                >
                  <GridIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant={_viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={_() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {_/* Mobile Filter Toggle */}
              <Sheet open={_showFilters} onOpenChange={_setShowFilters}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters {_activeFiltersCount > 0 && `(${activeFiltersCount})`}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Search Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
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

      {_searchTerm && (_<div className="flex gap-6">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-card border rounded-lg p-4 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Filters</h2>
                {_activeFiltersCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
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

          {_/* Main Content */}
          <div className="flex-1">
            {_loading && results.length === 0 ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : results.length === 0 && searchTerm ? (
              <NoResultsState 
                searchTerm={searchTerm} 
                onNewSearch={_handleSearch}
              />
            ) : (_<>
                {_/* Results Grid/List */}
                <div className={_viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6"
                  : "space-y-4 mb-6"}>
                  {_results.map((result) => (
                    <SearchResultCard
                      key={`${result.type}-${_result.id}`}
                      result={_result}
                      searchTerm={_searchTerm}
                      viewMode={_viewMode}
                    />
                  ))}
                </div>

                {_/* Load More Button */}
                {_hasMore && (
                  <div className="text-center">
                    <Button 
                      onClick={loadMore} 
                      disabled={_loading}
                      variant="outline"
                    >
                      {_loading ? (
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
  );
};

export default SearchResultsPage; 