interface SearchFilter {}
  type: string[];
  category: string[];
  tags: string[]}

interface SearchSuggestion {}
  text: string;
  type: 'recent' | 'trending' | 'ai'}
interface EnhancedSearchProps {}
  // Add your props here;
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;'
  variant?: 'default' | 'futuristic' | 'minimal'}
;
const searchData: SearchResult[] = [// Services;
  {}
'
    id: 'ai-solutions','
    title: 'AI Business Intelligence','
    description: 'Transform your business with AI-powered insights and analytics','
    url: '/services/ai-business-intelligence','
    type: 'service','
    category: 'AI Solutions','
    tags: ['AI',Business Intelligence',Analytics',Machine Learning'],
    relevance: 95;
  },
  {}
'
    id: 'cloud-devops','
    title: 'Cloud & DevOps Services','
    description: 'Scalable cloud infrastructure and automated deployment solutions','
    url: '/services/cloud-devops','
    type: 'service','
    category: 'Cloud & DevOps','
    tags: ['Cloud',DevOps',Infrastructure',Automation'],
    relevance: 90;
  },
  {}
'
    id: 'cybersecurity','
    title: 'AI Cybersecurity Suite','
    description: 'Advanced AI-powered security solutions for enterprise protection','
    url: '/services/ai-cybersecurity-suite','
    type: 'service','
    category: 'Cybersecurity','
    tags: ['Security',AI',Cybersecurity',Enterprise'],
    relevance: 88;
  },
  // Pages;
  {}
'
    id: 'about','
    title: 'About Zion Tech Group','
    description: 'Learn about our mission, values, and commitment to innovation','
    url: '/about','
    type: 'page','
    category: 'Company','
    tags: ['About',Company',Mission',Values'],
    relevance: 85;
  },
  {}
'
    id: 'contact','
    title: 'Contact Us','
    description: 'Get in touch with our team for consultations and support','
    url: '/contact','
    type: 'page','
    category: 'Support','
    tags: ['Contact',Support',Consultation',Help'],
    relevance: 80;
  },
  // Blog posts(example)
  {}
'
    id: 'ai-trends-2025','
    title: 'AI Trends in 2025','
    description: 'Discover the latest artificial intelligence trends shaping business','
    url: '/blog/ai-trends-2025','
    type: 'blog','
    category: 'AI Insights','
    tags: ['AI',Trends',2025',Business'],
    relevance: 75;
];

  { id: 'ai-solutions', name: 'AI Solutions', icon: Code, color: 'from-cyan-500 to-blue-600' },;'
'
  { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Globe, color: 'from-blue-500 to-purple-600' },;'
  { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },;'
  { id: 'digital-transformation', name: 'Digital Transformation', icon: Building, color: 'from-green-500 to-cyan-600' },;'
  { id: 'consulting', name: 'IT Consulting', icon: TrendingUp, color: 'from-orange-500 to-green-600' };'
  { id: 'ai-solutions', name: 'AI Solutions', icon: Code, color: 'from-cyan-500 to-blue-600' },;''
  { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Globe, color: 'from-blue-500 to-purple-600' },;''
  { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },;''
  { id: 'digital-transformation', name: 'Digital Transformation', icon: Building, color: 'from-green-500 to-cyan-600' },;'  { id: 'consulting', name: 'IT Consulting', icon: TrendingUp, color: 'from-orange-500 to-green-600' };
];

export function EnhancedSearch(function EnhancedSearch({}
'
  className = '',;'
  placeholder = 'Search for AI services, quantum solutions...',;
  onSearch,;'
  variant = 'default'}: EnhancedSearchProps) {): any {;'
  const [isOpen, setIsOpen] = useState(false);'  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [filters, setFilters] = useState<SearchFilter>({}
    type: [],
    category: [],
    tags: []
  }) ;
  const [showFilters, setShowFilters] = useState(false);
  const [recentSearches, setRecentSearches] = useState < string[]> ([]) ;

// Mock suggestions'
const mockSuggestions: SearchSuggestion[] = [''
  { text: 'AI compliance assistant', type: 'recent' },'
  { text: 'Quantum machine learning', type: 'trending' },'
  { text: 'Digital transformation consulting', type: 'ai' },'
  { text: 'Cloud DevOps automation', type: 'trending' }
];

export function EnhancedSearch(function EnhancedSearch({}
'
  className = '','
  placeholder = 'Search for AI services, quantum solutions...',
  onSearch,'
  variant = 'default'
}: EnhancedSearchProps) {): any {}
  const [isOpen, setIsOpen] = useState(false);'
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [filters, setFilters] = useState<SearchFilter>({}
    type: [],
    category: [],
    tags: []
  }) ;

  // Handle keyboard navigation;
  useEffect(() => {}
'
        setSelectedIndex(-1)} else if (event.key === 'ArrowDown') {}
  // Handle keyboard navigation;
  useEffect(() => {}
        setSelectedIndex(-1)} else if (event.key === 'ArrowDown') {}
        event.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev'
        )} else if (event.key === 'ArrowUp') {}
        event.preventDefault();'
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)} else if (event.key === 'Enter' && selectedIndex >= 0) {}
        event.preventDefault();
        if(results[selectedIndex]) {}
          handleResultClick(results[selectedIndex])}      }
    };

    if (isOpen) {}
'
      document.addEventListener('keydown', handleKeyDown)}'
    return () => document.removeEventListener('keydown', handleKeyDown)}, [isOpen, results, selectedIndex]);
  // Search functionality;
  useEffect(() => {}
    if(debouncedQuery.trim().length < 2) {}
      setResults([]);
      return}

      .filter(item => {}
                           item.description.toLowerCase().includes(debouncedQuery.toLowerCase()) ||;
                           item.tags.some(tag => tag.toLowerCase().includes(debouncedQuery.toLowerCase()));

                              filters.category.length === 0 || filters.category.includes(item.category) &&;
                              filters.tags.length === 0 || filters.tags.some(tag => item.tags.includes (tag) ) ;        
        return matchesQuery && matchesFilters}) .sort((a, b) => b.relevance - a.relevance) .slice(0, 10) ;

    setResults(searchResults) }, [debouncedQuery, filters]) ;

  // Handle click outside;
  useEffect(() => {}
        setRecentSearches (JSON.parse (saved) ) } catch (error) {}
'
        // console.error('Failed to parse recent searches:', error)}    }
  }, []) ;

  // Handle click outside;
      }    };
'
    document.addEventListener('mousedown', handleClickOutside);'
  useEffect ( () => {}
      if (searchRef.current && !searchRef.current.contains (event.target as Node) ) {;
        setIsOpen (false) ;
        setSelectedIndex (-1) ;
      }    };'
''
    document.addEventListener('mousedown', handleClickOutside);''
    return () => document.removeEventListener('mousedown', handleClickOutside)}, []);

  // Handle keyboard navigation;
  useEffect(() => {}
        inputRef.current?.focus () }
    };
'
    document.addEventListener('keydown', handleKeyDown);'
    return () => document.removeEventListener('keydown', handleKeyDown)}, []);

      // Add to recent searches;
      '
      setRecentSearches(updated);'      localStorage.setItem('zion-recent-searches', JSON.stringify(updated));

      // Navigate to search results or close search;
      setIsOpen(false);'
      setQuery('')}
  }, [recentSearches]);

    handleSearch(result.title) ;
    router(result.url) ;
    const handleKeyDown: any = (event: KeyboardEvent) => {;      if(!isOpen) return;

      switch (event.key) {}
'
        case 'ArrowDown': any;
          event.preventDefault();
          setSelectedIndex(prev = > ;
            prev < results.length-1 ? prev + 1 : prev;
          );
          break;'
        case 'ArrowUp': any;
          event.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;'
        case 'Enter': any;
          event.preventDefault () ;
          if(selectedIndex >= 0 && results[selectedIndex]) {}
            handleResultClick(results[selectedIndex])} else if(query.trim()) {}
            handleSearch()}
          break;'
        case 'Escape': any;
          setIsOpen(false) ;
          setSelectedIndex(-1) ;
          break}
    };
'
    document.addEventListener('keydown', handleKeyDown);'
    return () => document.removeEventListener('keydown', handleKeyDown)}, [isOpen, results, selectedIndex, query]);

    if(!query.trim () ) return;
    setIsLoading(true) ;

    // Simulate API call delay;
    await new Promise(resolve => setTimeout (resolve, 300) ) ;

    // Filter search results based on query and filters;
                          result.description.toLowerCase () .includes(query.toLowerCase () ) ||;
                          result.tags.some(tag => tag.toLowerCase () .includes(query.toLowerCase () ) ) ;

      const matchesFilters: any = (filters.type.length === 0 || filters.type.includes(result.type) ) &&; (filters.category.length === 0 || filters.category.includes(result.category) ) &&; (filters.tags.length === 0 || filters.tags.some(tag => result.tags.includes (tag) ) ) ;

      return matchesQuery && matchesFilters}) ;

    setIsOpen(false);'
    setQuery('')};

    onSearch?.(suggestion.text)};

    setFilters({ type[], category[], tags[] }) };

setFilters(prev: > ({;
      ...prev,;
      [filterType]: prev[filterType].includes (value) ;
        ? prev[filterType].filter(v => v !== value) ;
        : [...prev[filterType], value]}) ) };

    setFilters({ type: [], category: [], tags: [] }) };

'

    switch (type) {;'
      case 'service': return <Code className="h-4 w-4"  />;'"'""
      case 'page': return <Globe className="h-4 w-4"  />;'"'""
      case 'blog': return <TrendingUp className="h-4 w-4"  />;'"'""
      case 'case-study': return <Building className="h-4 w-4"  />}
  };

    setResults([]);'
''
    setQuery('');    setResults([]);
    setIsOpen(false);
    setSelectedIndex(-1)};

  '
      case 'minimal':''
        return 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700';'
      default:''
        return 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg'}
  };

  return()
    <div ref = {searchRef} className={`relative ${className}`}>`"`
      <div className={`relative rounded-xl ${getVariantStyles()}`}>"""
        <div className="flex items-center px-4 py-3">"""
          <Search className="w-5 h-5 text-gray-400 mr-3"  />          <input""
            ref={inputRef}"""
            type="text""
            value={query}
            onChange={handleInputChange}
            onFocus={handleInputFocus}""
            placeholder={placeholder}"""
            className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none""
          />
          {query && (
            <button""
              onClick={clearSearch}"""
              className="ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"""
            >"""
              <X className="w-4 h-4 text-gray-400"  />
            </button>
          )}""
        </div>;"""
      default: return <Search className="h-4 w-4"  />};

    switch (variant) {;'
      case 'futuristic': any;'
        return 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 hover:border-purple-500/40 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20';'
      case 'minimal':''
        return 'bg-gray-100 border border-gray-200 hover:border-gray-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20';'
      default:''
        return 'bg-white border border-gray-300 hover:border-gray-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20'}  };
`
  return()``
    <div ref = {searchRef} className={`relative ${className}`}>`
      {/* Search Input */}`"`
      <div className={`relative flex items-center rounded-xl transition-all duration-300 ${getVariantClasses()}`}>"""
        <Search className="absolute left-4 h-5 w-5 text-gray-400"  />        <input""
          ref={inputRef}"""
          type="text""
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}""
          placeholder={placeholder}"""
          className="w-full pl-12 pr-12 py-3 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500""
        />
        {query && ('
          <button''""
            onClick={() => setQuery('')}"""
            className="absolute right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"""
          >"""
            <X className="h-4 w-4"  />          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (<motion.div;
            initial = {}
  { opacity: 0,
  y: -10;
}}
            animate = {}
  { opacity: 1,
  y: 0;
}}
            exit = {}
  { opacity: 0,
  y: -10;
""
}}"""
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-96 overflow-hidden""
          >""
            {/* Filters Toggle */}"""
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <button""
                onClick={() => setShowFilters(!showFilters)}"""
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"""
              >"""
                <Filter className="h-4 w-4"  />                Filters;
              </button>
              {(filters.type.length > 0 || filters.category.length > 0 || filters.tags.length > 0) && (
                <button""
                  onClick={clearFilters}"""
                  className="text-sm text-red-500 hover:text-red-600 transition-colors""
                >
                  Clear all;
                </button>) }
            </div>

            {/* Filters Panel */}
            <AnimatePresence>
              {showFilters && (<motion.div;
                  initial = {}
  { height: 0,
  opacity: 0;
}}
                  animate = {}
'
  { height: 'auto',
  opacity: 1;
}}
                  exit = {}
  { height: 0,
  opacity: 0;
""
}}"""
                  className="border-b border-gray-200 overflow-hidden"""
                >"""
                  <div className="p-4 space-y-4">
                    {/* Type Filters */}""
                    <div>"""
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Type</h4>"""
                      <div className="flex flex-wrap gap-2">'
                        {['service',page',blog',case-study'].map(type => (
                          <button;
                            key={type}
                            onClick = {}
'
  () => toggleFilter('type',
  type)

`
}``
                            className={`px-3 py-1 text-xs rounded-full transition-colors ${}
                              filters.type.includes(type)'
                                ? 'bg-blue-500 text-white'''`
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'``
                            }`}
                          >
                            {type.charAt(0) .toUpperCase () + type.slice(1) }
                          </button>) ) }
                      </div>
                    </div>

                    {/* Category Filters */}""
                    <div>"""
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Category</h4>"""
                      <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                          <button;
                            key={category.id}
                            onClick = {}
'
  () => toggleFilter('category',
  category.name)

`
}``
                            className={`px-3 py-1 text-xs rounded-full transition-colors ${}
                              filters.category.includes(category.name)'
                                ? 'bg-blue-500 text-white'''`
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'``
                            }`}
                          >
                            {category.name}
                          </button>) ) }
                      </div>
                    </div>
                  </div>
                </motion.div>) }
            </AnimatePresence>
""
            {/* Search Results */}"""
            <div className="max-h-96 overflow-y-auto">""
              {query.trim().length < 2 ? ("""
                <div className="p-4 space-y-4">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (""
                    <div>"""
                      <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">"""
                        <Clock className="h-4 w-4"  />                        Recent Searches;""
                      </h4>;"""
                      <div className="space-y-2">;
                        {recentSearches.map((search, index) => (;
                          <button;
                            key={index};
                            onClick={() => {;
                              setQuery(search);""
                              handleSearch()}}"                            className = "w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors""
                          >
                            {search}
                          </button>) ) }
                      </div>
                    </div>;) }

                  {/* Popular Searches */}""
                  <div>"""
                    <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">"""
                      <TrendingUp className="h-4 w-4"  />                      Popular Searches;""
                    </h4>;"""
                    <div className="flex flex-wrap gap-2">;
                      {popularSearches.map((search, index) => (;
                        <button;
                          key={index};
                          onClick={() => {;
                            setQuery(search);""
                            handleSearch()}}"                          className = "px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors""
                        >
                          {search}
                        </button>) ) }
                    </div>
                  </div>
                </div>""
              ) : isLoading ? (;"""
                <div className="p-8 text-center">"""
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>"""
                  <p className="text-gray-600 mt-2">Searching...</p>
                </div>""
              ) : results.length > 0 ? ("""
                <div className="p-4 space-y-2">
                  {results.map((result, index) => (
                    <button;
                      key={result.id}`
                      onClick={() => handleResultClick(result)}``
                      className={`w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors group ${}
'`
                        index === selectedIndex ? 'bg-blue-50' : ''``
                      }`}""
                    >"""
                      <div className="flex items-start gap-3">"""
                        <div className="flex-shrink-0 mt-1">
                          {getTypeIcon(result.type)}""
                        </div>"""
                        <div className="flex-1 min-w-0">"""
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {result.title}""
                          </h4>"""
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {result.description}""
                          </p>"""
                          <div className="flex items-center gap-2 mt-2">"""
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {result.category}""
                            </span>"""
                            <span className="text-xs text-gray-500">
                              {result.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>""
              ) : ("""
                <div className="p-8 text-center">"""
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4"  />"                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No results found""
                  </h3>"""
                  <p className="text-gray-600">
                    Try adjusting your search terms or filters;
                  </p>
                </div>) }
            </div>;
          </motion.div>;) };
      </AnimatePresence>;
    </div>;) }'"`
'"`'"`
