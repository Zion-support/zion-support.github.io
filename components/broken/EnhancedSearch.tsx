<<<<<<< HEAD
import React, { useState, useEffect, useCallback, useMemo } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { Search, X, Filter, TrendingUp, Clock, Star, Zap, Brain, Atom, Shield, Rocket } from 'lucide-react',

interface SearchResult {
  id: string,
  name: string,
  description: string,
  category: string,
  type: string,
  slug: string,
  relevance: number,
  features?: string[],
  pricing?: {
    starter?: string,
    enterprise?: string
  }
}

interface SearchProps {
  onSearch: (query: string) => void,
  onResultSelect: (result: SearchResult) => void,
  placeholder?: string,
  className?: string,
  showFilters?: boolean
}

const EnhancedSearch: React.FC<SearchProps> = ({
  onSearch,
  onResultSelect,
  placeholder = &quot;Search revolutionary services...&quot;,
  className = "",
  showFilters = true
}) => {
  const [query, setQuery] = useState(''),
  const [isSearching, setIsSearching] = useState(false),
  const [showResults, setShowResults] = useState(false),
  const [results, setResults] = useState<SearchResult[]>([]),
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]),
  const [searchHistory, setSearchHistory] = useState<string[]>([]),
  const [popularSearches] = useState([
    'AI ConsciousnessQuantum ComputingCybersecurityBusiness IntelligenceSpace TechnologyAutonomous Systems'
  ]),
=======
import React, {_useState, _useEffect, _useCallback, _useMemo} from 'react';

interface SearchResult {_id: string;
  name: string;
  description: string;
  category: string;
  type: string;
  slug: string;
  relevance: number;
  features?: string[];
  pricing?: {
    starter?: string;
    enterprise?: string;};
}

interface SearchProps {_onSearch: (_query: string) => void;
  onResultSelect: (_result: SearchResult) => void;
  placeholder?: string;
  className?: string;
  showFilters?: boolean;}

const EnhancedSearch: React.FC<SearchProps> = (_{_onSearch, _onResultSelect, _placeholder = "Search revolutionary services...", _className = "", _showFilters = true}) => {_const [query, _setQuery] = useState('');
  const [isSearching, _setIsSearching] = useState(false);
  const [showResults, _setShowResults] = useState(false);
  const [results, _setResults] = useState<SearchResult[]>([]);
  const [selectedFilters, _setSelectedFilters] = useState<string[]>([]);
  const [searchHistory, _setSearchHistory] = useState<string[]>([]);
  const [popularSearches] = useState([
    'AI Consciousness', _'Quantum Computing', _'Cybersecurity', _'Business Intelligence', _'Space Technology', _'Autonomous Systems'
  ]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Mock search results - in real app, _this would come from API
  const mockSearchResults: SearchResult[] = [
    {
<<<<<<< HEAD
      id: '1',
      name: 'AI Consciousness Evolution Platform 2045',
      description: 'Next-generation AI consciousness with emotional intelligence and self-awareness capabilities.',
      category: 'AI & Machine Learning',
      type: 'Platform',
      slug: '/ai-consciousness-evolution-platform-2045',
      relevance: 95,
      features: ['Emotional IntelligenceSelf-AwarenessConsciousness Evolution'],
      pricing: { starter: '$999/month', enterprise: 'Contact Sales' }
    },
    {
      id: '2',
      name: 'Quantum AI Hybrid Computing',
      description: 'Quantum-powered AI with consciousness integration and quantum supremacy.',
      category: 'Quantum Computing',
      type: 'Platform',
      slug: '/quantum-ai-hybrid-computing',
      relevance: 92,
      features: ['Quantum SupremacyAI IntegrationHybrid Computing'],
      pricing: { starter: '$1,499/month', enterprise: 'Contact Sales' }
    },
    {
      id: '3',
      name: 'Quantum Cybersecurity Intelligence',
      description: 'Quantum-resistant security with AI consciousness and threat prediction.',
      category: 'Cybersecurity',
      type: 'Platform',
      slug: '/quantum-cybersecurity-intelligence',
      relevance: 88,
      features: ['Quantum ResistanceThreat PredictionAI Security'],
      pricing: { starter: '$799/month', enterprise: 'Contact Sales' }
=======
      id: '1', _name: 'AI Consciousness Evolution Platform 2045', _description: 'Next-generation AI consciousness with emotional intelligence and self-awareness capabilities.', _category: 'AI & Machine Learning', _type: 'Platform', _slug: '/ai-consciousness-evolution-platform-2045', _relevance: 95, _features: ['Emotional Intelligence', _'Self-Awareness', _'Consciousness Evolution'], _pricing: { starter: '$999/month', _enterprise: 'Contact Sales'}
    },
    {_id: '2', _name: 'Quantum AI Hybrid Computing', _description: 'Quantum-powered AI with consciousness integration and quantum supremacy.', _category: 'Quantum Computing', _type: 'Platform', _slug: '/quantum-ai-hybrid-computing', _relevance: 92, _features: ['Quantum Supremacy', _'AI Integration', _'Hybrid Computing'], _pricing: { starter: '$1, _499/month', _enterprise: 'Contact Sales'}
    },
    {_id: '3', _name: 'Quantum Cybersecurity Intelligence', _description: 'Quantum-resistant security with AI consciousness and threat prediction.', _category: 'Cybersecurity', _type: 'Platform', _slug: '/quantum-cybersecurity-intelligence', _relevance: 88, _features: ['Quantum Resistance', _'Threat Prediction', _'AI Security'], _pricing: { starter: '$799/month', _enterprise: 'Contact Sales'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  ],

<<<<<<< HEAD
  const categories = [
    { id: 'ai', name: 'AI & ML', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum', icon: Atom, color: 'from-blue-500 to-cyan-500' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'business', name: 'Business', icon: Rocket, color: 'from-emerald-500 to-teal-500' }
  ],

  // Debounced search function
  const debouncedSearch = useCallback(
    useMemo(
      () => debounce((searchQuery: string) => {
        if (searchQuery.trim().length < 2) {
          setResults([]),
          setShowResults(false),
          return
        }
=======
  const _categories = [
    {_id: 'ai', _name: 'AI & ML', _icon: Brain, _color: 'from-purple-500 to-pink-500'},
    {_id: 'quantum', _name: 'Quantum', _icon: Atom, _color: 'from-blue-500 to-cyan-500'},
    {_id: 'security', _name: 'Security', _icon: Shield, _color: 'from-red-500 to-orange-500'},
    {_id: 'business', _name: 'Business', _icon: Rocket, _color: 'from-emerald-500 to-teal-500'}
  ];

  // Debounced search function
  const _debouncedSearch = useCallback(_useMemo(
      () => debounce(_(searchQuery: string) => {_if (searchQuery.trim().length < 2) {
          setResults([]);
          setShowResults(false);
          return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        setIsSearching(true),
        
        // Simulate API call delay
        setTimeout__(() => {_const _filteredResults = mockSearchResults.filter(result => {
            const _matchesQuery = result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               result.category.toLowerCase().includes(searchQuery.toLowerCase()),
            
            const _matchesFilters = selectedFilters.length === 0 || 
                                 selectedFilters.some(filter => 
                                   result.category.toLowerCase().includes(filter.toLowerCase()) ||
                                   result.type.toLowerCase().includes(filter.toLowerCase())
                                 ),
            
<<<<<<< HEAD
            return matchesQuery && matchesFilters
          }),

          // Sort by relevance
          const sortedResults = filteredResults.sort((a, b) => b.relevance - a.relevance),
=======
            return matchesQuery && matchesFilters;});

          // Sort by relevance
          const _sortedResults = filteredResults.sort(_(a, _b) => b.relevance - a.relevance);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          
          setResults(sortedResults),
          setShowResults(true),
          setIsSearching(false)
        }, 300)
      }, 300),
      [selectedFilters]
    ),
    [selectedFilters]
  ),

<<<<<<< HEAD
  useEffect(() => {
    debouncedSearch(query)
  }, [query, debouncedSearch]),

  // Handle search input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value,
    setQuery(value),
    
    if (value.trim().length === 0) {
      setShowResults(false),
      setResults([])
    }
  }, [suggestions, selectedIndex, query, handleSearch]),
=======
  useEffect__(() => {_debouncedSearch(query);}, [query, debouncedSearch]);

  // Handle search input change
  const _handleInputChange = (_e: React.ChangeEvent<HTMLInputElement>) => {_const _value = e.target.value;
    setQuery(value);
    
    if (value.trim().length === 0) {
      setShowResults(false);
      setResults([]);}
  }, [suggestions, selectedIndex, query, handleSearch]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Close search on outside click
  useEffect__(() => {_const _handleClickOutside = (_event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
<<<<<<< HEAD
        setIsOpen(false)
      }
    },

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(),
    if (query.trim()) {
      onSearch(query),
      addToSearchHistory(query),
      setShowResults(false)
    }
  }, [router, handleSearch]),

  // Handle quick action click
  const handleQuickAction = useCallback((action: string) => {
    router.push(action),
    setIsOpen(false)
  }, [router]),

  // Add search to history
  const addToSearchHistory = (searchTerm: string) => {
    const newHistory = [searchTerm, ...searchHistory.filter(item => item !== searchTerm)].slice(0, 5),
    setSearchHistory(newHistory),
    localStorage.setItem('zion-search-history', JSON.stringify(newHistory))
  },

  // Load search history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('zion-search-history'),
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory))
      } catch (error) {
        console.error('Failed to parse search history:', error)
      }
=======
        setIsOpen(false);}
    };

  // Handle search submission
  const _handleSearch = (_e: React.FormEvent) => {_e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      addToSearchHistory(query);
      setShowResults(false);}
  }, [router, handleSearch]);

  // Handle quick action click
  const _handleQuickAction = useCallback(_(action: string) => {_router.push(action);
    setIsOpen(false);}, [router]);

  // Add search to history
  const _addToSearchHistory = (_searchTerm: string) => {_const _newHistory = [searchTerm, _...searchHistory.filter(item => item !== searchTerm)].slice(0, _5);
    setSearchHistory(newHistory);
    localStorage.setItem('zion-search-history', _JSON.stringify(newHistory));};

  // Load search history from localStorage
  useEffect__(() => {_const _savedHistory = localStorage.getItem('zion-search-history');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));} catch (error) {}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, []),

  // Handle filter toggle
  const _toggleFilter = (_filterId: string) => {_setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
<<<<<<< HEAD
        : [...prev, filterId]
    )
  },

  // Handle result selection
  const handleResultSelect = (result: SearchResult) => {
    onResultSelect(result),
    setShowResults(false),
    setQuery('')
  },

  // Clear search
  const clearSearch = () => {
    setQuery(''),
    setShowResults(false),
    setResults([])
  },
=======
        : [...prev, _filterId]
    );};

  // Handle result selection
  const _handleResultSelect = (_result: SearchResult) => {_onResultSelect(result);
    setShowResults(false);
    setQuery('');};

  // Clear search
  const _clearSearch = () => {_setQuery('');
    setShowResults(false);
    setResults([]);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<div className={_`relative ${className}`}>
      {_/* Search Form */}
      <form onSubmit={_handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
          <input
<<<<<<< HEAD
            type=&quot;text"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-full pl-12 pr-20 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300&quot;
            onFocus={() => setShowResults(true)}
=======
            type="text"
            value={_query}
            onChange={_handleInputChange}
            placeholder={_placeholder}
            className="w-full pl-12 pr-20 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
            onFocus={_() => setShowResults(true)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
          
          {_/* Clear Button */}
          {_query && (
            <button
              type=&quot;button"
              onClick={clearSearch}
              className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4&quot; />
            </button>
          )}
          
          {_/* Search Button */}
          <button
            type=&quot;submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          >
            Search
          </button>
        </div>
      </form>

      {_/* Search Results Dropdown */}
      <AnimatePresence>
        {_showResults && (_<motion.div
            initial={{ opacity: 0, _y: -10, _scale: 0.95}}
            animate={_{ opacity: 1, _y: 0, _scale: 1}}
            exit={_{ opacity: 0, _y: -10, _scale: 0.95}}
            transition={_{ duration: 0.2}}
            className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto"
          >
            {_/* Filters */}
            {_showFilters && (
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-300">Filter by Category</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (_<button
                      key={category.id}
                      onClick={_() => toggleFilter(category.id)}
                      className={_`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                        selectedFilters.includes(category.id)
                          ? `bg-gradient-to-r ${category.color} text-white`
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      <category.icon className="w-3 h-3" />
                      {_category.name}
                    </button>
                  )}
                  <div className="flex-shrink-0 pr-4">
                    <button
                      onClick={_() => handleSearch()}
                      disabled={_isSearching || !query.trim()}
                      className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {_isSearching ? 'Searching...' : 'Search'}
                    </button>
                  </div>
                </div>

                {_/* Search Suggestions */}
                <AnimatePresence>
                  {_showSuggestions && suggestions.length > 0 && (_<motion.div
                      initial={{ opacity: 0, _y: -10}}
                      animate={_{ opacity: 1, _y: 0}}
                      exit={_{ opacity: 0, _y: -10}}
                      className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-10"
                    >
                      {_/* Quick Actions */}
                      <div className="p-4 border-b border-gray-700">
                        <h3 className="text-sm font-medium text-gray-400 mb-3">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {_quickActions.map((action) => (_<button
                              key={action.name}
                              onClick={_() => handleQuickAction(action.action)}
                              className="flex items-center space-x-2 p-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              {_action.icon}
                              <span>{_action.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {_/* Suggestions */}
                      <div className="max-h-64 overflow-y-auto">
                        {_suggestions.map(_(suggestion) => (_<button
                            key={suggestion.id}
                            onClick={_() => handleSuggestionClick(suggestion)}
                            className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-800 transition-colors"
                          >
                            <div className="text-gray-400">
                              {_suggestion.icon}
                            </div>
                            <div className="flex-1">
                              <div className="text-white">{_suggestion.text}</div>
                              <div className="text-sm text-gray-400 capitalize">
                                {_suggestion.type} • {_suggestion.category}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {_/* Search Results */}
            <div className="p-4">
              {_isSearching ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                  <span className="ml-3 text-gray-400">Searching...</span>
                </div>
              ) : results.length > 0 ? (_<div className="space-y-3">
                  {results.map((result) => (_<motion.div
                      key={result.id}
                      whileHover={_{ scale: 1.02}}
                      className="p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                      onClick={_() => handleResultSelect(result)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-white mb-1">{_result.name}</h4>
                          <p className="text-sm text-gray-300 mb-2 line-clamp-2">{_result.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                              {_result.category}
                            </span>
                            {_result.pricing?.starter && (
                              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                                From {result.pricing.starter}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-cyan-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-xs">{_result.relevance}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : query.trim().length > 0 ? (
                <div className="text-center py-8">
<<<<<<< HEAD
                  <div className="text-gray-400 mb-2&quot;>No results found for &quot;{query}"</div>
=======
                  <div className="text-gray-400 mb-2">No results found for "{_query}"</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <div className="text-sm text-gray-500">Try adjusting your search terms or filters</div>
                </div>
              ) : (_<div className="space-y-4">
                  {_/* Search History */}
                  {_searchHistory.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-300">Recent Searches</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {searchHistory.map((term, _index) => (_<button
                            key={index}
                            onClick={_() => setQuery(term)}
                            className="px-3 py-1.5 bg-gray-700/50 text-gray-300 text-sm rounded-lg hover:bg-gray-600/50 transition-colors"
                          >
                            {_term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {_/* Popular Searches */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-300">Popular Searches</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {_popularSearches.map(_(term, _index) => (_<button
                          key={index}
                          onClick={_() => setQuery(term)}
                          className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-sm rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 border border-cyan-400/30"
                        >
                          {_term}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
},

// Debounce utility function
function debounce<T extends (_...args: unknown[]) => any>(
  func: T,
  wait: number
<<<<<<< HEAD
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout,
  return (...args: Parameters<T>) => {
    clearTimeout(timeout),
    timeout = setTimeout(() => func(...args), wait)
  }
=======
): (_...args: Parameters<T>) => void {_let timeout: NodeJS.Timeout;
  return (_...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout__(() => func(...args), _wait);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

export default EnhancedSearch,