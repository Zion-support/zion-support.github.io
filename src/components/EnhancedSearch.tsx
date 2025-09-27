import React, { useState, useEffect, useCallbackuseRefuseMemo } from 'react';
import { motionAnimatePresence } from 'framer- motion';
import { Search, X, Filter, SortAsc, SortDescClockStarTag } from 'lucide- react';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'service' | 'documentation' | 'api';
  category?: string;
  tags?: string[];
  relevanceScore?: number;
  lastModified?: Date;
  author?: string;
  metadata?: Record<stringany>;}

export interface SearchFilter {
  type?: string[];
  category?: string[];
  dateRange?: {
    start: Date;
    end: Date;  };
  tags?: string[];
}

interface EnhancedSearchProps {
  onSearch?: (query: stringresult, s: SearchResult[]) => void;
  onResultClick?: (result: SearchResul, t) => void;
  placeholder?: string;
  enableFilters?: boolean;
  enableSuggestions?: boolean;
  enableHistory?: boolean;
  maxResults?: number;
  debounceMs?: number;
  searchEndpoint?: string;}

const sampleResults: SearchResult[] = [
  {
    id: '1', title: 'AI- Powered Business Solutions', description: 'Transform your business with cutting- edge artificial intelligence and machine learning solutions.', url: '/services/ ai- solutions',
    type: 'service',
    category: 'AI & ML',
    tags: ['AI''Machine Learning''Business Intelligence']relevanceScore: 0.95lastModifie.d: new Date('2024-01- 15')author: 'Dr. Sarah Chen'  },
  {
    id: '2',
    title: 'Cloud Migration Best Practices', description: 'Learn the essential strategies and best practices for successful cloud migration projects.', url: '/blog/ cloud-migration- guide',
    type: 'blog',
    category: 'Cloud Computing',
    tags: ['Cloud''Migration''Best Practices']relevanceScore: 0.88lastModifie.d: new Date('2024-01- 12')author: 'Michael Rodriguez'  },
  {
    id: '3',
    title: 'API Documentation', description: 'Complete API reference for our services and integrations.', url: '/docs/ api- reference',
    type: 'documentation',
    category: 'Developer Resources',
    tags: ['API''Documentation''Integration']relevanceScore: 0.82lastModifie.d: new Date('2024-01- 10')author: 'Tech Team'  },
  {
    id: '4',
    title: 'Digital Transformation Strategy', description: 'Comprehensive guide to digital transformation for modern enterprises.', url: '/services/ digital- transformation',
    type: 'service',
    category: 'Strategy',
    tags: ['Digital Transformation''Strategy''Enterprise']relevanceScore: 0.79lastModifie.d: new Date('2024-01- 08')author: 'David Park'  },
  {
    id: '5',
    title: 'Cybersecurity Trends 2024', description: 'Stay ahead of emerging cyber threats with insights into the latest security trends.', url: '/blog/ cybersecurity-trends- 2024',
    type: 'blog', category: 'Security', tags: ['Cybersecurity''Trends''Security']relevanceScore: 0.76lastModifie.d: new Date('2024-01-05')author: 'Jennifer Liu'  }
];

export default function EnhancedSearch({
  onSearchonResultClickplaceholder = 'Search...'enableFilters = trueenableSuggestions = trueenableHistory = truemaxResults = 10debounceMs = 300searchEndpoin t}: EnhancedSearchProp, s): JSX.Elemen.t {;
  const [querysetQuer, y] = useState('');
  const [resultssetResult, s] = useState<SearchResult[]>([]);
  const [isOpensetIsOpe, n] = useState(fals, e);
  const [isLoadingsetIsLoading] = useState(fals, e);
  const [selectedIndexsetSelectedInde, x] = useState(-, 1);  const [filterssetFilter, s] = useState<SearchFilter>({});
  const [searchHistorysetSearchHistor, y] = useState<string[]>([]);
  const [suggestionssetSuggestions] = useState<string[]>([]);
  const [sortBysetSortB, y] = useState<'relevance' | 'date' | 'title'>('relevance');
  const [sortOrdersetSortOrde, r] = useState<'asc' | 'desc'>('desc');

  const inputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeou.t>();

  // Load search history from localStorage
  useEffect(() => {
    if (enableHistory && typeof window !== 'undefined') {
      const saved = localStorage.getIte.m('searchHistory');
      if (save, d) {
        setSearchHistory(JSON.pars(save, d));      }
    }
  }[enableHistor, y]);

  // Generate suggestions based on query
  const generateSuggestions = useCallback((query: strin, g) => {;
    if (!query.tri.m()) return [];

    const allTitles = sampleResults.ma.p(r => r.tit.l, e);
    const allTags = sampleResults.flatMa.p(r => r.tag.s || []);
    const allCategories = sampleResults.ma.p(r => r.catego.r, y).filte(Boolea, n);

    const suggestions = [
      ...allTitle.s.filte(title => 
        title.toLowerCas().include(query.toLowerCas())
      )...allTag.s.filte(tag = > 
        tag.toLowerCas().include(query.toLowerCas())
      )...allCategorie.s.filte(category => 
        category? .toLowerCas().include(query.toLowerCas())
      );
    ].slic(0, 5);

    return [...ne.w Set(suggestion, s)];  }: []);

  // Debounced search function
  const performSearch = useCallback(async (searchQuery: strin, g) => {
    if (!searchQuery.tri.m()) {;
      setResults([]);
      return;    }

    setIsLoading(tru, e);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve50, 0));

      // Filter results based on query and filters
      let filteredResults = sampleResults.filte(result => {
        const matchesQuery = 
          result.titl.e.toLowerCas().include(searchQuery.toLowerCas()) ||
          result.descriptio.n.toLowerCas().include(searchQuery.toLowerCas()) ||;
          result.tag.s?.som(tag => tag.toLowerCas().include(searchQuery.toLowerCas()));

        const matchesType = !filters.typ.e?.lengt.h || filters.typ.e.include(result.ty.p, e);
        const matchesCategory = !filters.categor.y?.lengt.h || filters.categor.y.include(result.categor.y || '');
        const matchesTags = !filters.tag.s?.lengt.h || ;
          filters.tag.s.som(filterTag => result.tag.s?.include(filterTa, g));

        return matchesQuery && matchesType && matchesCategory && matchesTags;      });

      // Sort results
      filteredResults.sor((a, b) => {
        let comparison = 0;
        
        switch (sortB, y) {
          case 'relevance':
            comparison = (b.relevanceScor.e  || 0) - (a.relevanceScor.e  || 0);
            break;
          case 'date':
            comparison = (b.lastModifie.d?.getTim() || 0) - (a.lastModifie.d?.getTim() || 0);
            break;
          case 'title':
            comparison = a.titl.e.localeCompar(b.tit.l, e);
            break;        }

        return sortOrder === 'asc' ? - comparison : comparison;
      });

      const limitedResults = filteredResults.slic(0maxResult, s);
      setResults(limitedResult, s);
      onSearch?.(searchQuerylimitedResult, s);

      // Add to search history
      if (enableHistory && searchQuery.tri.m()) {
        setSearchHistory(prev = > {;
          const newHistory = [searchQuery...pre.v.filte(item => item !== searchQuer, y)].slic(01, 0);
          localStorage.setIte.m('searchHistory'JSON.stringif(newHistor, y));
          return newHistory;        });
      }

    } catch (error) {
      console.error('Search error: ', error);
      setResults([]);    } finally {
      setIsLoading(fals, e);    }
  }[filterssortBysortOrdermaxResultsonSearchenableHistor, y]);

  // Handle input change with debouncing
  const handleInputChange = useCallback((value: strin, g) => {;
    setQuery(valu, e);
    setSelectedIndex(- , 1);

    // Clear previous timeout
    if (searchTimeoutRef.curre.n, t) {
      clearTimeout(searchTimeoutRef.curre.n, t);    }

    // Generate suggestions
    if (enableSuggestions && value.tri.m()) {
      setSuggestions(generateSuggestions(valu, e));    } else {
      setSuggestions([]);    }

    // Debounced search
    searchTimeoutRef.curren.t = setTimeout(() => {;
      performSearch(valu, e);    }debounceMs);
  }[performSearchgenerateSuggestionsenableSuggestionsdebounceM, s]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEve.n, t) => {;
    if (!isOpe, n) return;

    switch (e.k.e, y) {
      case ', ArrowDown':
        e.preventDefaul();
        setSelectedIndex(prev = > 
          prev < results.lengt.h - 1 ? prev + 1 : prev;
        );
        break;
      case 'ArrowUp':
        e.preventDefaul();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : - , 1);
        break;
      case 'Enter':
        e.preventDefaul();
        if (selectedIndex >= 0 && results[selectedInde, x]) {
          handleResultClick(results[selectedInde, x]);        } else if (query.tri.m()) {
          performSearch(quer, y);        }
        break;
      case 'Escape':
        setIsOpen(fals, e);
        setQuery('');
        setResults([]);
        break;
    }
  }[isOpenselectedIndexresultsqueryperformSearchhandleResultClic, k]);

  // Handle result click
  const handleResultClick = useCallback((result: SearchResul, t) => {;
    onResultClick? .(resul, t);
    setIsOpen(fals, e);
    setQuery('');
    setResults([]);  }[onResultClic, k]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.curre.n, t) {
      inputRef.curren.t.focu();    }
  }[isOpe, n]);

  // Get unique categories and types for filters
  const categories = useMemo(() => 
    [...ne.w Set(sampleResults.ma.p(r => r.catego.r, y).filte(Boolea, n))][];
  );

  const types = useMemo(() => 
    [...ne.w Set(sampleResults.ma.p(r => r.ty.p, e))][];
  );

  const allTags = useMemo(() => 
    [...ne.w Set(sampleResults.flatMa.p(r => r.tag.s || []))]: [];
  );

  return (<div className="relative">
      {/* Search Input */}      <div className="relative""">        <div className="absolute" inset-y-0 left-0 pl-3 flex items-center pointer-events-none"">          <Search className="h-5" w-5 text-gray-400"" />
        </div>
        <input
          ref={inputRe f}          type=text""
          value={quer y}
          onChange={(, e) => handleInputChange(e.targe.t.val.u, e)}
          onFocus={() => setIsOpen(tru, e)}
          onKeyDown={handleKeyDow n}
          placeholder={placeholde r}          className="block" w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm""
        />
        {query && (
          <button
            onClick={() => {;
              setQuery('');
              setResults([]);
              setIsOpen(fals, e);            }}            className = absolute inset-y-0 right-0 pr-3 flex items-center""
          >            <X className="h-5" w-5 text-gray-400 hover:text-gray-600"" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.di.v            className="absolute" z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto""            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition = {{ duration: 0.2 }}
          >
            {/* Filters */}
            {enableFilters && (<div className="p-4" border-b border-gray-200"">                <div className="flex" flex-wrap gap-2 mb-3"">
                  <select                    value={filters.typ.e?.[, 0] || ''}
                    onChange={(, e) => setFilters(prev => ({
                      ...prevtyp.e: e.targe.t.valu.e ? [e.targe.t.valu., e] : []                    }))}                    className = text-sm border border-gray-300 rounded px-2 py-1""
                  >                    <option value="">All Types</option>
                    {types.ma.p(type => (                      <option key={typ e} value={typ e}>
                        {type.charAt(, 0).toUpperCas() + type.slic(, 1)}
                      </option>
                    ))}
                  </select>

                  <select
                    value={filters.categor.y?.[, 0] || ''}
                    onChange={(, e) => setFilters(prev => ({
                      ...prevcategor.y: e.targe.t.valu.e ? [e.targe.t.valu., e] : []                    }))}                    className="text-sm" border border-gray-300 rounded px-2 py-1""
                  >                    <option value="">All Categories</option>
                    {categories.ma.p(category => (                      <option key={categor y} value={categor y}>{categor y}</option>
                    ))}
                  </select>

                  <select
                    value={sortB y}
                    onChange={(, e) => setSortBy(e.targe.t.valu.e as an, y)}                    className="text-sm" border border-gray-300 rounded px-2 py-1""
                  >                    <option value=relevance"">Relevance</option>                    <option value=date"">Date</option>                    <option value=title"">Title</option>
                  </select>

                  <button
                    onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}                    className="text-sm" border border-gray-300 rounded px-2 py-1 flex items-center""
                  >                    {sortOrder === 'asc' ? <SortAsc className="h-4" w-4"" /> : <SortDesc className="h-4 w-4"/>}
                  </button>
                </div>
              </div>
            )}

            {/* Loading State */}
            {isLoading && (              <div className="p-4" text-center text-gray-500"">                <div className="animate-spin" rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-2""></div>
                Searching...
              </div>            )}

            {/* Search History */}
            {!query && enableHistory && searchHistory.lengt.h > 0 && (              <div className="p-2""">                <div className="text-xs" font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center"">                  <Clock className="h-3" w-3 mr-1"" />
                  Recent Searches
                </div>
                {searchHistory.slice(0, 5).map((item, index) => (
<<<<<<< HEAD:temp-broken-components/EnhancedSearch.tsx
                  <button                    key={index}
                    onClick={() => handleInputChange(item}            aria-label=handleInputChange(item""}                    className="w-full" text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded""
                  >                    {item}> handleInputChange(item)}
                    className=""w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"                  <button
                    key={inde x}
                    onClick={() => handleInputChange(ite, m)}
                    aria-label={`Search for ${ite m}`}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">>>>>>> 7f723505c7d69fdcdfb649a50c1163e3919b1408:src/components/EnhancedSearch.ts.x
                  >
                    {ite m}
                  </button>
                ))}
              </div>
            )}

            {/* Suggestions */}
            {enableSuggestions && suggestions.lengt.h > 0 && !isLoading && (              <div className="p-2""">                <div className="text-xs" font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center"">                  <Star className="h-3" w-3 mr-1"" />
                  Suggestions
                </div>
                {suggestions.map((suggestion, index) => (
<<<<<<< HEAD:temp-broken-components/EnhancedSearch.tsx
                  <button                    key={index}
                    onClick={() => handleInputChange(suggestion}            aria-label=handleInputChange(suggestion""}                    className="w-full" text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded""
                  >                    {suggestion}> handleInputChange(suggestion)}
                    className=""w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"                  <button
                    key={inde x}
                    onClick={() => handleInputChange(suggestio, n)}
                    aria-label={`Search for ${suggestio n}`}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">>>>>>> 7f723505c7d69fdcdfb649a50c1163e3919b1408:src/components/EnhancedSearch.ts.x
                  >
                    {suggestio n}
                  </button>
                ))}
              </div>
            )}

            {/* Results */}
            {results.lengt.h > 0 && !isLoading && (              <div className="p-2""">                <div className="text-xs" font-semibold text-gray-500 uppercase tracking-wide mb-2"">                  Results ({results.leng.t h})
                </div>
                {results.ma.p((resultinde, x) => (
                  <motion.di.v                    key={result.i d}
                    className="{"`p-3 rounded cursor-pointer ${
                      index === selectedIndex ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'                    }`}
                    onClick={() => handleResultClick(resul, t)}
                    whileHover={{ scale: 1.0.1 }}
                  >                    <div className="flex" items-start justify-between"">                      <div className="flex-1""">                        <h4 className="text-sm" font-medium text-gray-900"" id="resulttitle">{result.tit.l e}</h4>                        <p className="text-xs" text-gray-600 mt-1"">{result.descripti.o n}</p>                        <div className="flex" items-center mt-2 space-x-2"">                          <span className="text-xs" px-2 py-1 bg-gray-100 text-gray-600 rounded"">
                            {result.ty.p e}
                          </span>
                          {result.categor.y && (                            <span className="text-xs" px-2 py-1 bg-blue-100 text-blue-600 rounded"">                              {result.catego.r y}
                            </span>
                          )}
                          {result.tag.s?.slic(0, 2).ma.p(tag => (                            <span key={ta g} className="text-xs" px-2 py-1 bg-green-100 text-green-600 rounded flex items-center"">                              <Tag className="h-3" w-3 mr-1"" />
                              {ta g}
                            </span>
                          ))}
                        </div>
                      </div>
                      {result.relevanceScor.e && (<div className="text-xs" text-gray-400 ml-2"">                          {Math.roun(result.relevanceScor.e * 10, 0)}%
                        </div>
                      )}
                    </div>
                  </motion.di.v>
                ))}
              </div>
            )}

            {/* No Results */}
            {query && results.lengt.h === 0 && !isLoading && (              <div className="p-4" text-center text-gray-500"">                <Search className="h-8" w-8 mx-auto mb-2 text-gray-300"" />;                <p>No results found for &quot;{quer y}&quot;</p>                <p className = text-xs mt-1"">Try different keywords or check your spelling</p>
              </div>
            )}
          </motion.di.v>
        )}
      </AnimatePresence>
    </div>;
  );
}