import { useNavigate  } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
 from 'react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDebounce } from '@/hooks / useDebounce';
 from 'framer-motion';
import { motion, AnimatePresence  } from 'framer-motion';
  className = '',
  placeholder = 'Search for AI services, quantum solutions...',
  onSearch,
  variant = 'default'}: EnhancedSearchProps) {;
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');  const [results, setResults] = useState<SearchResult[]>([]);  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [selectedIndex, setSelectedIndex] = useState<any>(-1);
  const [filters, setFilters] = useState<SearchFilter>({;
    "type": "[]",;
    "category": "[]",;
    "tags": "[];
  "}) ;    type: [],
    category: [],
    tags: []
  }
    );
  const [showFilters, setShowFilters] = useState<any>(false);

    type: [],
    category: [],
    tags: [];
}) ;
  const [showFilters, setShowFilters] = useState(false);
  const [recentSearches, setRecentSearches] = useState < string[]> ([]) ;
// Mock suggestions;
  className = '',
  placeholder = 'Search for AI services, quantum solutions...',
  onSearch,
  variant = 'default';
}: EnhancedSearchProps) {;

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [selectedIndex, setSelectedIndex] = useState<any>(-1);
  const [filters, setFilters] = useState<SearchFilter>({;    "type": "[]",;
    "category": "[]",;
    "tags": "[];
  "}) ;
;

    type: [],
    category: [],
    tags: [];
}) ;
  const searchRef = useRef < HTMLDivElement> (null) ;
  const inputRef = useRef < HTMLInputElement> (null) ;
  const navigate = useNavigate () ;
  // Handle keyboard navigation;
  return () => {;
    // Cleanup function;
};
}, []); []);
    const handleKeyDown = (event: anyKeyboardEvent) => {;
      if(event.key === 'Escape') {;
        setIsOpen(false) ;
        setSelectedIndex(-1) ;
} else if(event.key === 'ArrowDown') {;
        event.preventDefault () ;
        setSelectedIndex(prev =>;
          prev < results.length-1 ? prev + 1 : prev) ;
} else if(event.key === 'ArrowUp') {;
        event.preventDefault () ;
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1) ;
} else if(event.key === 'Enter' && selectedIndex >= 0) {;
        event.preventDefault () ;
        if(results[selectedIndex]) {;
        event.preventDefault () ;        if(results[selectedIndex]) {;

          handleResultClick(results[selectedIndex])}      }    };
    if(isOpen) {;
      document.addEventListener('keydown', handleKeyDown)}
    return () => document.removeEventListener('keydown', handleKeyDown)}, [isOpen, results, selectedIndex]);
  // Search functionality;
  return () => {;
    // Cleanup function;
};
}, []); []);    if(debouncedQuery.trim().length < 2) {;
      setResults([]);
      return}

    const searchResults = searchData;
      .filter(item => {;
        const matchesQuery = item.title.toLowerCase () .includes(debouncedQuery.toLowerCase () ) ||;
                           item.description.toLowerCase () .includes(debouncedQuery.toLowerCase () ) ||;
                           item.tags.some(tag => tag.toLowerCase () .includes(debouncedQuery.toLowerCase () ) ) ;
        const matchesFilters = filters.type.length === 0 || filters.type.includes(item.type) &&;
                              filters.category.length === 0 || filters.category.includes(item.category) &&;
                              filters.tags.length === 0 || filters.tags.some(tag => item.tags.includes (tag) ) ;
        return matchesQuery && matchesFilters}) .sort((a, b) => b.relevance - a.relevance) .slice(0, 10) ;
    setResults(searchResults) }, [debouncedQuery, filters]) ;
  // Handle click outside;
  return () => {;
    // Cleanup function;
};
}, []); []);        setRecentSearches(JSON.parse (saved) ) } catch(error) {;
        // console.error('Failed to parse recent "searches":', error)}    }
  }, []) ;
  // Handle click outside;
  return () => {;
    // Cleanup function;
};
}, []); []);
      if(searchRef.current && !searchRef.current.contains (event.target as Node) ) {;
        setIsOpen(false) ;
        setSelectedIndex(-1) ;
}    };
    document.addEventListener('mousedown', handleClickOutside);    return () => document.removeEventListener('mousedown', handleClickOutside)}, []);
  // Handle keyboard navigation;
  return () => {;
    // Cleanup function;
};
}, []); []);        inputRef.current?.focus () }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown)}, []);
      // Add to recent searches;
      setRecentSearches(updated);
      localStorage.setItem('zion-recent-searches', JSON.stringify(updated));
      // Navigate to search results or close search;
      setIsOpen(false);
      setQuery('')}
  }, [recentSearches]);
    handleSearch(result.title) ;
    router(result.url) ;
  { opacity: 0,
  y: -10;
}}
            animate = {;

  { opacity: 1,
  y: 0;
}}
            exit = {;

  { opacity: 0,
  y: -10;
}}";
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-96 overflow-hidden">;            {/* Filters Toggle */}";
            <div className="flex items-center justify-between p-4 border-b border-gray-200">;
              <button;
                onClick={() => setShowFilters(!showFilters)}";
                className="flex items-center gap-2 text-sm text-gray-600 "hover": "tex t-gray-900 transition-colors";
              >";
                <Filter className="h-4 w-4"   />                Filters;
              </button>;
              {(filters.type.length > 0 || filters.category.length > 0 || filters.tags.length > 0) && (;
                <button;
                  onClick={clearFilters"}";
                  className="text-sm text-red-500 "hover": "tex t-red-600 transition-colors";
                >;
                  Clear all;
                </button>) "}
            </div>;
            {/* Filters Panel */}
            <AnimatePresence>;
              {showFilters && (<motion.div;
                  initial = {;
  { height: 0,
  opacity: 0;
}}
                  animate = {;

  { height: 'auto',
  opacity: 1;
}}
                  exit = {;

  { height: 0,
  opacity: 0;
}}";
                  className="border-b border-gray-200 overflow-hidden">";                  <div className="p-4 space-y-4">;
                    {/* Type Filters */}
                    <div>";
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Type</h4>";
                      <div className="flex flex-wrap gap-2">;
                        {['service',page',blog',case-study'].map(type => (;
                          <button;
                            key={type}
  () => toggleFilter('type',  type);
}`;
                            className={`px-3 py-1 text-xs rounded-full transition-colors ${filters.type.includes(type);
                                ? 'bg-blue-500 text-white'';
  () => toggleFilter('category',  category.name);
}`;
                            className={`px-3 py-1 text-xs rounded-full transition-colors ${filters.category.includes(category.name);
                                ? 'bg-blue-500 text-white'';
                  {/* Popular Searches */}
                  <div>";
                    <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">";
                      <TrendingUp className="h-4 w-4"   />                      Popular Searches;
                    </h4>;";
                    <div className="flex flex-wrap gap-2"> {popularSearches.map((search, index) => (;
                        <button;
                          key={index};
                          onClick={() => {;
                            setQuery(search);
                            handleSearch()}}"                          className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full "hover": "b g-gray-200 transition-colors";
                        >;
                          {search"}
                        </button>) ) }
                    </div>;
                  </div>;
                </div>;
              ) : "isLoading ? (;";
                <div className="p-8 text-center">";
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>";
                  <p className="text-gray-600 mt-2">Searching...</p>;
                </div>;
              ) : results.length > 0 ? (";
                <div className="p-4 space-y-2">;
                  {results.map((result", index) => (;
                    <button;
                      key={result.id}
                      onClick={() => handleResultClick(result)}`;
                      className={`w-full text-left p-3 "hover": "b g-gray-50 rounded-lg transition-colors group ${index === selectedIndex ? 'bg-blue-50' : ''`;
                      "}`}
                      className={`w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors group ${index === selectedIndex ? 'bg-blue-50' : ''`;
}`}                    >";
                      <div className="flex items-start gap-3">";
                        <div className="flex-shrink-0 mt-1">;
                          {getTypeIcon(result.type)}
                        </div>";
                        <div className="flex-1 min-w-0">";
                          <h4 className="text-sm font-medium text-gray-900 group-"hover": "tex t-blue-600 transition-colors">;
                            {result.title"}
                          </h4>";
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">;
                            {result.description}
                          </p>";
                          <div className="flex items-center gap-2 mt-2">";
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">;
                              {result.category}
                            </span>";
                            <span className="text-xs text-gray-500">;
                              {result.type}
                            </span>;
                          </div>;
                        </div>;
                      </div>;
                    </button>;
                  ))}
                </div>;
              ) : "(";
                <div className="p-8 text-center">";
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4"   />"                  <h3 className="text-lg font-medium text-gray-900 mb-2">;
                    No results found;
                  </h3>";
                  <p className="text-gray-600">;
                    Try adjusting your search terms or filters;
                  </p>;
                </div>) "}'"`
;,"}
    );,})";
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
'"`;"});})";
