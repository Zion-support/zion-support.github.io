<<<<<<< HEAD
=======
import { useNavigate  } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
 from 'react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDebounce } from '@/hooks / useDebounce';
 from 'framer-motion';
import { motion, AnimatePresence  } from 'framer-motion';

  icon?: React.ComponentType < any>}
];

export function EnhancedSearch(props: any) {;
  const [isOpen, setIsOpen] = useState<any>(false);
  const [query, setQuery] = useState<any>('');  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [selectedIndex, setSelectedIndex] = useState<any>(-1);
  const [filters, setFilters] = useState<SearchFilter>({

    type: [],
    category: [],
    tags: []
  }) ;
  const [showFilters, setShowFilters] = useState<any>(false);
  const [recentSearches, setRecentSearches] = useState < string[]> ([]) ;

// Mock suggestions
const mockSuggestions: SearchSuggestio n[] = ['
  { text: 'AI compliance assistant', type: 'recent' },
  { text: 'Quantum machine learning', type: 'trending' },
  { text: 'Digital transformation consulting', type: 'ai' },
  { text: 'Cloud DevOps automation', type: 'trending' }
];

export function EnhancedSearch(props: any) {

  const [isOpen, setIsOpen] = useState<any>(false);
  const [query, setQuery] = useState<any>('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [selectedIndex, setSelectedIndex] = useState<any>(-1);
  const [filters, setFilters] = useState<SearchFilter>({

    type: [],
    category: [],
    tags: []
  }) ;

  const searchRef = useRef < HTMLDivElement> (null) ;
  const inputRef = useRef < HTMLInputElement> (null) ;
  const navigate = useNavigate () ;

  // Handle keyboard navigation
  useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
    const handleKeyDown = (props: any) => {
      if(event.key === 'Escape') {
        setIsOpen(false) ;
        setSelectedIndex(-1) ;
      } else if(event.key === 'ArrowDown') {
        event.preventDefault () ;
        setSelectedIndex(prev =>
          prev < results.length-1 ? prev + 1 : prev) ;
      } else if(event.key === 'ArrowUp') {
        event.preventDefault () ;
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1) ;
      } else if(event.key === 'Enter' && selectedIndex >= 0) {
event.preventDefault () ;
if(results[selectedIndex]) {
event.preventDefault () ;        if(results[selectedIndex]) {
handleResultClick(results[selectedIndex])}      }
    };

    if(isOpen) {

      document.addEventListener('keydown', handleKeyDown)}
    return () => document.removeEventListener('keydown', handleKeyDown)}, [isOpen, results, selectedIndex]);
  // Search functionality
  useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
    if(debouncedQuery.trim().length < 2) {

      setResults([]);
      return}

    const searchResults = searchData
      .filter(item => {
        const matchesQuery = item.title.toLowerCase () .includes(debouncedQuery.toLowerCase () ) ||;
                           item.description.toLowerCase () .includes(debouncedQuery.toLowerCase () ) ||;
                           item.tags.some(tag => tag.toLowerCase () .includes(debouncedQuery.toLowerCase () ) ) ;

        const matchesFilters = filters.type.length === 0 || filters.type.includes(item.type) &&;
                              filters.category.length === 0 || filters.category.includes(item.category) &&;
                              filters.tags.length === 0 || filters.tags.some(tag => item.tags.includes (tag) ) ;
        return matchesQuery && matchesFilters}) .sort((a, b) => b.relevance - a.relevance) .slice(0, 10) ;

    setResults(searchResults) }, [debouncedQuery, filters]) ;

  // Handle click outside
  useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
    
        setRecentSearches(JSON.parse (saved) ) } catch(error) {

        // console.error('Failed to parse recent searches:', error)}    }
  }, []) ;

  // Handle click outside
  useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
    
      if(searchRef.current && !searchRef.current.contains (event.target as Node) ) {;
        setIsOpen(false) ;
        setSelectedIndex(-1) ;
      }
    };

    document.addEventListener('mousedown', handleClickOutside);    return () => document.removeEventListener('mousedown', handleClickOutside)}, []);

  // Handle keyboard navigation
  useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
        inputRef.current?.focus () }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown)}, []);

      // Add to recent searches;
      
      setRecentSearches(updated);
      localStorage.setItem('zion-recent-searches', JSON.stringify(updated));
      // Navigate to search results or close search
      setIsOpen(false);
      setQuery('')}
  }, [recentSearches]);

    handleSearch(result.title) ;
    router(result.url) ;
    const handleKeyDown = (props: any) => {;      if(!isOpen) return;

      switch(event.key) {

        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex(prev = > ;
            prev < results.length-1 ? prev + 1 : prev;
          );
          break;
        case 'ArrowUp':;
          event.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':;
          event.preventDefault () ;
          if(selectedIndex >= 0 && results[selectedIndex]) {

            handleResultClick(results[selectedIndex])} else if(query.trim()) {

            handleSearch()}
          break;
        case 'Escape':;
          setIsOpen(false) ;
          setSelectedIndex(-1) ;
          break}
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown)}, [isOpen, results, selectedIndex, query]);

    if(!query.trim () ) return;
    setIsLoading(true) ;

    // Simulate API call delay
    await new Promise(resolve => setTimeout (resolve, 300) ) ;

    // Filter search results based on query and filters

                          result.description.toLowerCase () .includes(query.toLowerCase () ) ||;
                          result.tags.some(tag => tag.toLowerCase () .includes(query.toLowerCase () ) ) ;

      const matchesFilters = (filters.type.length === 0 || filters.type.includes(result.type) ) &&; (filters.category.length === 0 || filters.category.includes(result.category) ) &&; (filters.tags.length === 0 || filters.tags.some(tag => result.tags.includes (tag) ) ) ;

      return matchesQuery && matchesFilters}) ;

    setIsOpen(false);
    setQuery('')};

    onSearch?.(suggestion.text)};

    setFilters({ type[], category[], tags[] }) };

setFilters(prev: > ({;
      ...prev,;
      [filterType]: prev[filterType].includes (value) ;
        ? prev[filterType].filter(v => v !== value) ;
        : [...prev[filterType], value]}) ) };

    setFilters({ type: [], category: [], tags: [] }) };

    switch(type) {;
      case 'service': return <Code className="h-4 w-4"   />;'"
      case 'page': return <Globe className="h-4 w-4"   />;'"
      case 'blog': return <TrendingUp className="h-4 w-4"   />;'"
      case 'case-study': return <Building className="h-4 w-4"   />}
  };

    setResults([]);
'
    setQuery('');    setResults([]);
    setIsOpen(false);
    setSelectedIndex(-1)};

      case 'minimal':'
        return 'bg-white dark: b g-gray-800 border border-gray-200 dark: borde r-gray-700';
      default:'
        return 'bg-white dark: b g-gray-800 border border-gray-200 dark: borde r-gray-700 shadow-lg'}
  };

  return ()
    <div ref = {searchRef} className={`relative ${className}`}>`
      <div className={`relative rounded-xl ${getVariantStyles()}`}>"
        <div className="flex items-center px-4 py-3">"
          <Search className="w-5 h-5 text-gray-400 mr-3"   />          <input ref={inputRef}"
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            placeholder={placeholder}"
            className="flex-1 bg-transparent text-gray-900 dark: tex t-white placeholder-gray-500 dark: placeholde r-gray-400 focus: outlin e-none"
            />
          {query && (
            <button
              onClick={clearSearch}"
              className="ml-2 p-1 rounded-full hover: b g-gray-100 dark: hove r:bg-gray-700 transition-colors"
            >"
              <X className="w-4 h-4 text-gray-400"   />
            </button>
          )}
        </div>;"
      default: retur n <Search className="h-4 w-4"   />};

    switch(variant) {;
      case 'futuristic':;
        return 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 hover: borde r-purple-500/40 focus-within: borde r-purple-500 focus-within: rin g-2 focus-within: rin g-purple-500/20';
      case 'minimal':'
        return 'bg-gray-100 border border-gray-200 hover: borde r-gray-300 focus-within: borde r-blue-500 focus-within: rin g-2 focus-within: rin g-blue-500/20';
      default:'
        return 'bg-white border border-gray-300 hover: borde r-gray-400 focus-within: borde r-blue-500 focus-within: rin g-2 focus-within: rin g-blue-500/20'}  };

  return ()`
    <div ref = {searchRef} className={`relative ${className}`}>
      {/* Search Input */}`
      <div className={`relative flex items-center rounded-xl transition-all duration-300 ${getVariantClasses()}`}>"
        <Search className="absolute left-4 h-5 w-5 text-gray-400"   />        <input
          ref={inputRef}"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}"
          className="w-full pl-12 pr-12 py-3 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500"
        />
        {query && (
          <button'
            onClick={() => setQuery('')}"
            className="absolute right-4 p-1 text-gray-400 hover: tex t-gray-600 transition-colors"
          >"
            <X className="h-4 w-4"   />          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (<motion.div
            initial = {

  { opacity: 0,
  y: -10

}}
            animate = {

  { opacity: 1,
  y: 0

}}
            exit = {

  { opacity: 0,
  y: -10

}}"
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-96 overflow-hidden"
          >
            {/* Filters Toggle */}"
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <button
                onClick={() => setShowFilters(!showFilters)}"
                className="flex items-center gap-2 text-sm text-gray-600 hover: tex t-gray-900 transition-colors"
              >"
                <Filter className="h-4 w-4"   />                Filters
              </button>
              {(filters.type.length > 0 || filters.category.length > 0 || filters.tags.length > 0) && (
                <button
                  onClick={clearFilters}"
                  className="text-sm text-red-500 hover: tex t-red-600 transition-colors"
                >
                  Clear all
                </button>) }
            </div>

            {/* Filters Panel */}
            <AnimatePresence>
              {showFilters && (<motion.div
                  initial = {

  { height: 0,
  opacity: 0

}}
                  animate = {

  { height: 'auto',
  opacity: 1

}}
                  exit = {

  { height: 0,
  opacity: 0

}}"
                  className="border-b border-gray-200 overflow-hidden"
                >"
                  <div className="p-4 space-y-4">
                    {/* Type Filters */}
                    <div>"
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Type</h4>"
                      <div className="flex flex-wrap gap-2">
                        {['service',page',blog',case-study'].map(type => (
                          <button
                            key={type}
                            onClick={

  () => toggleFilter('type',
  type)

}`
                            className={`px-3 py-1 text-xs rounded-full transition-colors ${filters.type.includes(type)
                                ? 'bg-blue-500 text-white''
                                : 'bg-gray-100 text-gray-600 hover: b g-gray-200'`
                            }`}
                          >
                            {type.charAt(0) .toUpperCase () + type.slice(1) }
                          </button>) ) }
                      </div>
                    </div>

                    {/* Category Filters */}
                    <div>"
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Category</h4>"
                      <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                          <button
                            key={category.id}
                            onClick={

  () => toggleFilter('category',
  category.name)

}`
                            className={`px-3 py-1 text-xs rounded-full transition-colors ${filters.category.includes(category.name)
                                ? 'bg-blue-500 text-white''
                                : 'bg-gray-100 text-gray-600 hover: b g-gray-200'`
                            }`}
                          >
                            {category.name}
                          </button>) ) }
                      </div>
                    </div>
                  </div>
                </motion.div>) }
            </AnimatePresence>

            {/* Search Results */}"
            <div className="max-h-96 overflow-y-auto">
              {query.trim().length < 2 ? ("
                <div className="p-4 space-y-4">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div>"
                      <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">"
                        <Clock className="h-4 w-4"   />                        Recent Searches;
                      </h4>;"
                      <div className="space-y-2"> {recentSearches.map((search, index) => (;
                          <button;
                            key={index};
                            onClick={() => {;
                              setQuery(search);
                              handleSearch()}}"                            className="w-full text-left p-2 text-sm text-gray-600 hover: b g-gray-50 rounded-lg transition-colors"
                          >
                            {search}
                          </button>) ) }
                      </div>
                    </div>;) }

                  {/* Popular Searches */}
                  <div>"
                    <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">"
                      <TrendingUp className="h-4 w-4"   />                      Popular Searches;
                    </h4>;"
                    <div className="flex flex-wrap gap-2"> {popularSearches.map((search, index) => (;
                        <button;
                          key={index};
                          onClick={() => {;
                            setQuery(search);
                            handleSearch()}}"                          className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover: b g-gray-200 transition-colors"
                        >
                          {search}
                        </button>) ) }
                    </div>
                  </div>
                </div>
              ) : isLoading ? (;"
                <div className="p-8 text-center">"
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>"
                  <p className="text-gray-600 mt-2">Searching...</p>
                </div>
              ) : results.length > 0 ? ("
                <div className="p-4 space-y-2">
                  {results.map((result, index) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result)}`
                      className={`w-full text-left p-3 hover: b g-gray-50 rounded-lg transition-colors group ${index === selectedIndex ? 'bg-blue-50' : ''`
                      }`}
                    >"
                      <div className="flex items-start gap-3">"
                        <div className="flex-shrink-0 mt-1">
                          {getTypeIcon(result.type)}
                        </div>"
                        <div className="flex-1 min-w-0">"
                          <h4 className="text-sm font-medium text-gray-900 group-hover: tex t-blue-600 transition-colors">
                            {result.title}
                          </h4>"
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {result.description}
                          </p>"
                          <div className="flex items-center gap-2 mt-2">"
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {result.category}
                            </span>"
                            <span className="text-xs text-gray-500">
                              {result.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : ("
                <div className="p-8 text-center">"
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4"   />"                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No results found
                  </h3>"
                  <p className="text-gray-600">
                    Try adjusting your search terms or filters
                  </p>
                </div>) }
            </div>;
          </motion.div>;) };
      </AnimatePresence>;
    </div>;) }
'"`
;,"});,})";

</motion>
</motion>
</div>
</div>
</SearchFilter>
</any>
</any>
</SearchSuggestion>
</SearchResult>
</any>
</any>
</any>
</SearchFilter>
</any>
</any>
</SearchSuggestion>
</SearchResult>
</any>
</any>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
