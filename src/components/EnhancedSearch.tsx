import React, {useState, useEffect  useCallback, useRef  useMemo } from 'react';
import {motion, AnimatePresence } from 'framer-motion';

export interface SearchResult {id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'service' | 'documentation' | 'api';
  category?: string;
  tags?: string[];
  relevanceScore?: number;
  lastModified?: Date;
  author?: string;
  metadata?: Record<stringany> }

export interface SearchFilter {type?: string[];
  category?: string[];
  dateRange?: {
    start: Date;
    end: Date };
  tags?: string[]}

interface EnhancedSearchProps {onSearch?: (query: stringresults: SearchResult[]) => void;
  onResultClick?: (result: SearchResult) => void;
  placeholder?: string;
  enableFilters?: boolean;
  enableSuggestions?: boolean;
  enableHistory?: boolean;
  maxResults?: number;
  debounceMs?: number;
  searchEndpoint?: string }

];

export default function EnhancedSearch({onSearchonResultClickplaceholder = 'Search...',
  enableFilters = true, enableSuggestio, n, s = trueenableHistory = trueconst [querysetQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpensetIsOpen] = useState(false);
  const [isLoadingsetIsLoading] = useState(false);
({});

  const [selectedIndex  setSelectedIndex] = useState(-1);  const [filters  setFilters] = useState<SearchFilter>({});

  const [searchHistorysetSearchHistory] = useState<string[]>([]);
  const [suggestionssetSuggestions] = useState<string[]>([]);
  const [sortBysetSortBy] = useState<'relevance' | 'date' | 'title'>('relevance');
  const [sortOrdersetSortOrder] = useState<'asc' | 'desc'>('desc');

  const inputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();

  // Load search history from localStorage
  useEffect(() => {if (enableHistory && typeof === window !== 'undefined') {
      const, saved = localStorage.getItem('searchHistory');
      if (saved) {
        setSearchHistory(JSON.parse(saved)) }
    }
  }, [enableHistory]);

  // Generate suggestions based on query
  const generateSuggestions = useCallback((query: string) => {;
    if (!query.trim()) return [];

    const, allTitles = sampleResults.map(r => r.title);
    const, allTags = sampleResults.flatMap(r => r.tags || []);
    const, allCategories = sampleResults.map(r => r.category).filter(Boolean);

    const, suggestions = [...allTitles.filter(title => 
        title.toLowerCase().includes(query.toLowerCase())
      ),
      ...allTags.filter(tag = > 
        tag.toLowerCase().includes(query.toLowerCase())
      ), ...allCategories.filter(category => 
        category? .toLowerCase().includes(query.toLowerCase())
      )].slice(05);

    return [...new, Set(suggestions)] } : []);

  // Debounced search function
  const performSearch = useCallback(async (searchQuery : string) => {if (!searchQuery.trim()) {;
      setResults([]);
      return }

    setIsLoading(true);

 setTimeout(resolve, 500));

      // Filterresults  basedon queryand  filterslet filteredResults = sampleResults.filter(result => {const, matchesQuery = 

    try {// Simulate, API, call, awaitnewPromise(resolve => setTimeout(resolve, 500));

      // Filter, results basedon, queryand filtersletfilteredResults = sampleResults.filter(result => {
        constmatchesQuery = 

          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
          result.tags? .some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        constmatchesType = !filters.type?.length || filters.type.includes(result.type);
        constmatchesCategory = !filters.category?.length || filters.category.includes(result.category || '');
        constmatchesTags = !filters.tags?.length || ;
          filters.tags.some(filterTag => result.tags?.includes(filterTag));

        return : matchesQuery && matchesType && matchesCategory && matchesTags });

      // Sort results
      filteredResults.sort((ab) => {letcomparison = 0;
        
        switch (sortBy) {
          case 'relevance' :
            comparison = (b.relevanceScore || 0) - (a.relevanceScore || 0);
            break;
          case 'date':
            comparison = (b.lastModified?.getTime() || 0) - (a.lastModified?.getTime() || 0);
            break;
          case 'title':
            comparison = a.title.localeCompare(b.title);
            break }

        return sortOrder === 'asc'? -comparison : comparison});

      const limitedResults = filteredResults.slice(0maxResults);
      setResults(limitedResults);
      onSearch? .(searchQuerylimitedResults);

      // Add to search history
      if (enableHistory && searchQuery.trim()) {setSearchHistory(prev = > {;
 item !== searchQuery)].slice(010);

          constnewHistory = [searchQuery...prev.filter(item => item !== searchQuery)].slice(010);

          localStorage.setItem('searchHistory', JSON.stringify(newHistory));
          returnnewHistory })}

    } catch (error) {console.error('Search : error :'error);
      setResults([]) } finally {setIsLoading(false) }
  }[filters  sortBy  sortOrder  maxResults  onSearch  enableHistory]);

  // Handle input change with debouncing
  const handleInputChange = useCallback((value: string) => {;
    setQuery(value);
    setSelectedIndex(-1);

    // Clearprevious  timeoutif (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current) }

    // Generate suggestions
    if (enableSuggestions && value.trim()) {setSuggestions(generateSuggestions(value)) } else {setSuggestions([]) }

    // Debounced search
    searchTimeoutRef.current = setTimeout(() => {;

  // Handlekeyboard navigationconst handleKeyDown = useCallback((e: React.KeyboardEvent) => {;
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev = > 
          prev < results.length - 1 ? prev + 1 : prev;
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleResultClick(results[selectedIndex]) } else if (query.trim()) {performSearch(query) }
        break;
      case 'Escape':
        setIsOpen(false);
        setQuery('');
        setResults([]);
        break}

  // Handle result click
  const handleResultClick = useCallback((result: SearchResult) => {;
    onResultClick? .(result);
    setIsOpen(false);
    setQuery('');
    setResults([]) }, [onResultClick]);

  // Focus input when opened
  useEffect(() => {if (isOpen && inputRef.current) {
      inputRef.current.focus() }
  }, [isOpen]);

  // Get unique categories and types for filters
  const categories = useMemo(() => 
    [...new Set(sampleResults.map(r => r.category).filter(Boolean))], [];
  );

  const types = useMemo(() => 
    [...new Set(sampleResults.map(r => r.type))],
    [];
  );

  const allTags = useMemo(() => 
    [...new Set(sampleResults.flatMap(r => r.tags || []))],
    [];
  );

  return (<div, className = "relative">
      {/* Search, Input */}      <div, className ="relative>        <div, class Name="absolute, inset-y-0, left-0pl-3flex, items-centerpointer-events-none">          <SearchclassName ="h-5w-5 : text-gray-400" />
        </div>
        <inputref ={inputRef}          type=text""
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
        />
        {query && (<buttononClick={(()) => {;
              setQuery('');
              setResults([]);
              setIsOpen(false)}}            className = absolute inset-y-0 right-0 pr-3 flex items-center""
          >            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Search, Results  Dropdown */}
      <AnimatePresence>
        {isOpen && (<motion.div, className ="absolute, z-50, mt-1, w-full, bg-white, rounded-lg, shadow-lg, border, border-gray-200, max-h-96overflow-y-auto"            initial={{ opacity: 0y: -10 }}
            animate={{ opacity: 1y: 0 }}
            exit={{ opacity: 0y: -10 }}
            transition = {{ duration: 0.2 }}
          >
            {/* Filters */}
                <divclassName ="flexflex-wrapgap-2mb-3">
                  <selectvalue ={filters.type?.[0] || ''}

            {enableFilters && (              <div, className ="p-4, border-bborder-gray-200>                <divclassName ="flexflex-wrapgap-2mb-3">
                  <selectvalue ={filters.type?.[0] || ''}

                    onChange={(e) => setFilters(prev => ({
                      ...prevtype: e.target.value ? [e.target.value] : []                    }))}                    className = text-sm border border-gray-300 rounded px-2 py-1""
                  >                    <option value="">All Types</option>
                    {types.map(type => (                      <option, key ={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>

                  <select
                    value={filters.category? .[0] || ''}
                    onChange={(e) => setFilters(prev => ({
                      ...prev : category : e.target.value ? [e.target.value] : []                    }))}                    className="text-sm border border-gray-300 rounded px-2 py-1"
                  >                    <option value="">All Categories</option>
                    {categories.map(category => (                      <option, key ={category} value={category}>{category}</option>
                    ))}
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.valueasany)}                    className="text-sm border border-gray-300 rounded px-2 py-1"
                  >                    <option value=relevance"">Relevance</option>                    <option value=date"">Date</option>                    <option value=title"">Title</option>
                  </select>


                  <button
                    on Click={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}                    className="text-sm border border-gray-300 rounded px-2 py-1 flex items-center"
                  >                    {sortOrder === 'asc'? <SortAsc, className ="h-4 : w-4" />  : <SortDesc, className ="h-4, w-4 />}
                  </button>
                </div>
              </div>

            )}

            {/* Loading, State */}
                <div  className ="animate-spin  rounded-full  h-6, w-6, border-b-2, border-blue-6, 0, 0, mx-auto  mb-2></div>

            {is, Loading && (<div, class, Name =p-4" text-center, text-gray-500"">                <div, className ="animate-spin, rounded-full, h-6, w-6, border-b-2, border-blue-600, mx-auto, mb-2></div>

                Searching...
              </div>            )}

            {/* Search, History */}
 0 && (<div, class  Name ="p-2">                <div, className ="text-xs, font-semibold, text-gray-5, 0, 0, uppercase, tracking-wide, mb-2, flex, items-center>                  <Clock, class  Name ="h-3, w-3, mr-1"" />
                  Recent, Searches
                </div>
                {searchHistory.slice(0, 5).map((item, index) => (handleInputChange(item}            aria-label=handleInputChange(item""}                    className="w-full, text-left, px-3, py-2, text-sm, text-gray-7, 0, 0, hover:bg-gray-1, 0, 0, rounded"
                  >                    {item}> handleInputChange(item)}
                    className="w-full text-left px-3 py-2 text-sm text-gray-7, 0, 0 hover:bg-gray-1, 0, 0 rounded <button key={index} on Click={() = aria-label="handle, Input  Change(item)}
                    aria-label={`Sear, c  h, f  or ${item}`}
                    class Name="w-full text-left px-3 py-2 text-sm text-gray-7, 0, 0 hover:bg-gray-1, 0, 0 rounded

                  >
                    {item}"> handle Input Change(item)}
                    aria-label={`Sear, c  h, f  or ${item}`}
                    class Name="w-full text-left px-3 py-2 text-sm text-gray-7, 0, 0 hover:bg-gray-1, 0, 0 rounded

            {!query && enable, History && search, History.length > 0 && (<div, class, Name ="p-2">                <div, className ="text-xs, font-semibold, text-gray-500, uppercase, tracking-wide, mb-2, flex, items-center>                  <Clock, class, Name ="h-3, w-3, mr-1"" />
                  Recent, Searches
                </div>
                {searchHistory.slice(0, 5).map((item, index) => (handleInputChange(item}            aria-label=handleInputChange(item""}                    className="w-full, text-left, px-3, py-2, text-sm, text-gray-700, hover:bg-gray-100, rounded"
                  >                    {item}> handleInputChange(item)}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded <button key={index} on Click={() = aria-label="handle, Input Change(item)}
                    aria-label={`Sear, c h, f or ${item}`}
                    class Name="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded

                  >
                    {item}"> handle Input Change(item)}
                    aria-label={`Sear, c h, f or ${item}`}
                    class Name="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded


                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            {/* Suggestions */}
 0 && !is  Loading && (<div, class  Name ="p-2""">                <div, className ="text-xs, font-semibold, text-gray-5, 0, 0, uppercase, tracking-wide, mb-2, flex, items-center>                  <Star, class  Name ="h-3, w-3, mr-1"" />
                  Suggestions
                </div>
                {suggestions.map((suggestion, index) => (handleInputChange(suggestion}            aria-label=handleInputChange(suggestion""}                    className="w-full, text-left, px-3, py-2, text-sm, text-gray-7, 0, 0, hover:bg-gray-1, 0, 0, rounded"
                  >                    {suggestion}> handleInputChange(suggestion)}
                    className="w-full text-left px-3 py-2 text-sm text-gray-7, 0, 0 hover:bg-gray-1, 0, 0 rounded <button key={index} on Click={() = aria-label="handle, Input  Change(suggestion)}
                    aria-label={`Sear, c  h, f  or ${suggestion}`}
                    class Name="w-full text-left px-3 py-2 text-sm text-gray-7, 0, 0 hover:bg-gray-1, 0, 0 rounded

                  >
                    {suggestion}"> handle Input Change(suggestion)}
                    aria-label={`Sear, c  h, f  or ${suggestion}`}
                    class Name="w-full text-left px-3 py-2 text-sm text-gray-7, 0, 0 hover:bg-gray-1, 0, 0 rounded

            {enable, Suggestions && suggestions.length > 0 && !is, Loading && (<div, class, Name ="p-2""">                <div, className ="text-xs, font-semibold, text-gray-500, uppercase, tracking-wide, mb-2, flex, items-center>                  <Star, class, Name ="h-3, w-3, mr-1"" />
                  Suggestions
                </div>
                {suggestions.map((suggestion, index) => (handleInputChange(suggestion}            aria-label=handleInputChange(suggestion""}                    className="w-full, text-left, px-3, py-2, text-sm, text-gray-700, hover:bg-gray-100, rounded"
                  >                    {suggestion}> handleInputChange(suggestion)}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded <button key={index} on Click={() = aria-label="handle, Input Change(suggestion)}
                    aria-label={`Sear, c h, f or ${suggestion}`}
                    class Name="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded

                  >
                    {suggestion}"> handle Input Change(suggestion)}
                    aria-label={`Sear, c h, f or ${suggestion}`}
                    class Name="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded


                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Results */}
 0 && !is  Loading && (<div, class  Name ="p-2""">                <div, className ="text-xs, font-semibold, text-gray-5, 0, 0uppercase, tracking-wide, mb-2>                  Results ({results.length})
                </div>
                {results.map((resultindex) => (<motion.divkey ={result.id}
                    className ="{`p-3roundedcursor-pointer ${index===selectedIndex?'bg-blue-50borderborder-blue-200':'hover:bg-gray-50'}`}
                    on, Click ={() => handle, Result  Click(result)}

            {results.length > 0 && !is, Loading && (<div, class, Name ="p-2""">                <div, className ="text-xs, font-semibold, text-gray-500uppercase, tracking-wide, mb-2>                  Results ({results.length})
                </div>
                {results.map((result, index) => (<motion.div, key ={result.id}
                    className ="{`p-3roundedcursor-pointer ${index===selectedIndex?'bg-blue-50borderborder-blue-200':'hover:bg-gray-50'}`}
                    on, Click ={() => handle, Result Click(result)}

                    while Hover={{ scale: 1.01 }}
                  >                    <div class Name="flex" items-start justify-between"">                      <div className="flex-1> <h 4 class Name="text-sm font-medium text-gray-900"" id="resulttitle">{result.title}</h4>                        <p className="text-xs text-gray-600 mt-1">{result.description}</p>                        <div className="flex items-center mt-2 space-x-2> <span class Name="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"">
                            {result.type}
                          </span>
                              {result.category}
                            </span>
                          )}
                          {result.tags?.slice(0, 2).map(tag => (                            <span, key ={tag} className="text-xs, px-2, py-1, bg-green-1, 0, 0, text-green-6, 0, 0, rounded, flex  items-center">                              <Tag, className ="h-3, w-3, mr-1" />

                          {result.category && (<span, className ="text-xs, px-2, py-1, bg-blue-100, text-blue-600, rounded">                              {result.category}
                            </span>
                          )}
                          {result.tags?.slice(0, 2).map(tag => (                            <span, key ={tag} className="text-xs, px-2, py-1, bg-green-100, text-green-600, rounded, flex  items-center">                              <Tag, className ="h-3, w-3, mr-1" />

                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                          {Math.round(result.relevance, Score * 1, 0, 0)}%

                      {result.relevanceScore && (<div, className ="text-xs, text-gray-400, ml-2>                          {Math.round(result.relevance, Score * 100)}%

                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* No, Results */}
                <Search  className ="h-8, w-8, mx-auto  mb-2, text-gray-300" />;                <p>No  results  found  for &quot;{query}&quot;</p>                <p  className = text-xs  mt-1"">Try  different  keywords  or  check  your  spelling</p>

            {query && results.length === 0 && !is, Loading && (<div, class, Name ="p-4, text-center, text-gray-500">                <Search, className ="h-8, w-8, mx-auto, mb-2, text-gray-300" />;                <p>No, results, found, for &quot;{query}&quot;</p>                <p, className = text-xs, mt-1"">Try, different keywords, or check, your spelling</p>

              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>;
  )}