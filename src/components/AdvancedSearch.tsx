import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  Filter, 
  TrendingUp, 
  Clock, 
  Star, 
  MapPin, 
  Users, 
  Building, 
  Code, 
  Shield, 
  Brain, 
  Zap, 
  ArrowRight,
  ChevronDown,
  CheckCircle,
  Sparkles,
  Target,
  Globe,
  Cpu,
  Database,
  Network,
  Smartphone,
  Server,
  Lock,
  Eye,
  Settings,
  BookOpen,
  FileText,
  Video,
  Microphone,
  Camera,
  Lightbulb,
  Rocket,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Users2,
  Palette,
  Heart,
  Share2,
  Download,
  ExternalLink
} from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'service' | 'page' | 'article' | 'case-study' | 'tool';
  category: string;
  tags: string[];
  url: string;
  relevance: number;
  lastUpdated: Date;
  views: number;
  rating: number;
}

interface SearchFilter {
  type: string[];
  category: string[];
  tags: string[];
  dateRange: 'all' | 'week' | 'month' | 'year';
  sortBy: 'relevance' | 'date' | 'popularity' | 'rating';
}

export function AdvancedSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filters, setFilters] = useState<SearchFilter>({
    type: [],
    category: [],
    tags: [],
    dateRange: 'all',
    sortBy: 'relevance'
  });
  const [isSearching, setIsSearching] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();

  // Mock data for demonstration
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI Supply Chain Optimization',
      description: 'Revolutionary AI-powered supply chain management solution that reduces costs by 40% and improves efficiency.',
      type: 'service',
      category: 'AI Solutions',
      tags: ['AI', 'Supply Chain', 'Optimization', 'Machine Learning'],
      url: '/services/ai-supply-chain-optimization',
      relevance: 0.95,
      lastUpdated: new Date('2025-01-15'),
      views: 15420,
      rating: 4.8
    },
    {
      id: '2',
      title: 'Quantum Computing Integration',
      description: 'Next-generation quantum computing solutions for complex problem-solving and data analysis.',
      type: 'service',
      category: 'Quantum Computing',
      tags: ['Quantum', 'Computing', 'AI', 'Advanced Analytics'],
      url: '/services/quantum-computing',
      relevance: 0.92,
      lastUpdated: new Date('2025-01-10'),
      views: 12850,
      rating: 4.9
    },
    {
      id: '3',
      title: 'Cybersecurity AI Platform',
      description: 'Intelligent cybersecurity platform with real-time threat detection and automated response.',
      type: 'service',
      category: 'Cybersecurity',
      tags: ['Security', 'AI', 'Threat Detection', 'Automation'],
      url: '/services/ai-cybersecurity',
      relevance: 0.88,
      lastUpdated: new Date('2025-01-08'),
      views: 18920,
      rating: 4.7
    },
    {
      id: '4',
      title: 'Digital Transformation Guide',
      description: 'Comprehensive guide to digital transformation strategies and implementation.',
      type: 'article',
      category: 'Digital Transformation',
      tags: ['Digital', 'Transformation', 'Strategy', 'Implementation'],
      url: '/blog/digital-transformation-guide',
      relevance: 0.85,
      lastUpdated: new Date('2025-01-05'),
      views: 8750,
      rating: 4.6
    }
  ];

  const categories = [
    'AI Solutions', 'Cybersecurity', 'Cloud Computing', 'Digital Transformation',
    'Quantum Computing', 'IoT', 'Blockchain', 'Data Analytics', 'Machine Learning'
  ];

  const searchTypes = [
    { value: 'service', label: 'Services', icon: Settings },
    { value: 'page', label: 'Pages', icon: FileText },
    { value: 'article', label: 'Articles', icon: BookOpen },
    { value: 'case-study', label: 'Case Studies', icon: BarChart },
    { value: 'tool', label: 'Tools', icon: Code }
  ];

  // Handle search input changes
  const handleSearchChange = useCallback((value: string) => {
    setQuery(value);
    
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Set new timeout for search
    if (value.trim().length > 2) {
      searchTimeoutRef.current = setTimeout(() => {
        performSearch(value);
      }, 300);
    } else {
      setResults([]);
      setSuggestions([]);
    }
  }, []);

  // Perform search
  const performSearch = useCallback(async (searchQuery: string) => {
    setIsSearching(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Filter results based on query and filters
      let filteredResults = mockResults.filter(result => {
        const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesType = filters.type.length === 0 || filters.type.includes(result.type);
        const matchesCategory = filters.category.length === 0 || filters.category.includes(result.category);
        const matchesTags = filters.tags.length === 0 || 
                           filters.tags.some(filterTag => result.tags.includes(filterTag));
        
        return matchesQuery && matchesType && matchesCategory && matchesTags;
      });

      // Sort results
      filteredResults.sort((a, b) => {
        switch (filters.sortBy) {
          case 'relevance':
            return b.relevance - a.relevance;
          case 'date':
            return b.lastUpdated.getTime() - a.lastUpdated.getTime();
          case 'popularity':
            return b.views - a.views;
          case 'rating':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });

      setResults(filteredResults);
      
      // Generate suggestions
      const newSuggestions = categories
        .filter(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 5);
      setSuggestions(newSuggestions);
      
      // Add to recent searches
      if (searchQuery.trim()) {
        setRecentSearches(prev => {
          const filtered = prev.filter(s => s !== searchQuery);
          return [searchQuery, ...filtered].slice(0, 5);
        });
      }
      
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsSearching(false);
    }
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = useCallback((filterType: keyof SearchFilter, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  }, []);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setFilters({
      type: [],
      category: [],
      tags: [],
      dateRange: 'all',
      sortBy: 'relevance'
    });
  }, []);

  // Handle search submission
  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      performSearch(query);
    }
  }, [query, performSearch]);

  // Open search modal
  const openSearch = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  }, []);

  // Close search modal
  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
    setSuggestions([]);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape' && isOpen) {
        closeSearch();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, openSearch, closeSearch]);

  // Load popular searches
  useEffect(() => {
    setPopularSearches([
      'AI Solutions', 'Cybersecurity', 'Digital Transformation',
      'Cloud Computing', 'Machine Learning', 'Quantum Computing'
    ]);
  }, []);

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={openSearch}
        className="flex items-center space-x-2 px-3 py-2 bg-zion-blue/10 hover:bg-zion-blue/20 border border-zion-purple/30 rounded-lg text-zion-slate-light hover:text-zion-cyan transition-all duration-300 group"
        aria-label="Search"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:block text-sm">Search</span>
        <div className="hidden sm:flex items-center space-x-1 text-xs text-zion-slate-400">
          <span className="px-1 py-0.5 bg-zion-slate-700 rounded">⌘</span>
          <span>K</span>
        </div>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={closeSearch}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Container */}
              <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl shadow-2xl shadow-zion-purple/20 overflow-hidden">
                {/* Search Header */}
                <div className="p-6 border-b border-zion-purple/20">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-400" />
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={query}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        placeholder="Search for services, articles, tools, and more..."
                        className="w-full pl-12 pr-20 py-4 bg-zion-blue/20 border border-zion-purple/30 rounded-xl text-white placeholder-zion-slate-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                      />
                      <button
                        type="submit"
                        disabled={!query.trim() || isSearching}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-zion-cyan hover:bg-zion-cyan-dark disabled:bg-zion-slate-600 disabled:cursor-not-allowed text-zion-blue-dark font-medium rounded-lg transition-all duration-300"
                      >
                        {isSearching ? 'Searching...' : 'Search'}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Search Content */}
                <div className="max-h-96 overflow-y-auto">
                  {/* Filters */}
                  <div className="px-6 py-4 border-b border-zion-purple/20">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center space-x-2 px-3 py-2 bg-zion-blue/10 hover:bg-zion-blue/20 border border-zion-purple/30 rounded-lg text-zion-slate-light hover:text-zion-cyan transition-all duration-300"
                      >
                        <Filter className="w-4 h-4" />
                        <span>Filters</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {(filters.type.length > 0 || filters.category.length > 0 || filters.tags.length > 0) && (
                        <button
                          onClick={clearFilters}
                          className="text-zion-slate-400 hover:text-zion-cyan text-sm transition-colors"
                        >
                          Clear all
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {showFilters && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="space-y-4"
                        >
                          {/* Type Filter */}
                          <div>
                            <label className="block text-sm font-medium text-zion-slate-light mb-2">Type</label>
                            <div className="flex flex-wrap gap-2">
                              {searchTypes.map((type) => (
                                <button
                                  key={type.value}
                                  onClick={() => {
                                    const newTypes = filters.type.includes(type.value)
                                      ? filters.type.filter(t => t !== type.value)
                                      : [...filters.type, type.value];
                                    handleFilterChange('type', newTypes);
                                  }}
                                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-300 ${
                                    filters.type.includes(type.value)
                                      ? 'bg-zion-cyan text-zion-blue-dark border-zion-cyan'
                                      : 'bg-zion-blue/10 border-zion-purple/30 text-zion-slate-light hover:bg-zion-blue/20'
                                  }`}
                                >
                                  <type.icon className="w-4 h-4" />
                                  <span className="text-sm">{type.label}</span>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Category Filter */}
                          <div>
                            <label className="block text-sm font-medium text-zion-slate-light mb-2">Category</label>
                            <div className="flex flex-wrap gap-2">
                              {categories.slice(0, 6).map((category) => (
                                <button
                                  key={category}
                                  onClick={() => {
                                    const newCategories = filters.category.includes(category)
                                      ? filters.category.filter(c => c !== category)
                                      : [...filters.category, category];
                                    handleFilterChange('category', newCategories);
                                  }}
                                  className={`px-3 py-2 rounded-lg border transition-all duration-300 ${
                                    filters.category.includes(category)
                                      ? 'bg-zion-cyan text-zion-blue-dark border-zion-cyan'
                                      : 'bg-zion-blue/10 border-zion-purple/30 text-zion-slate-light hover:bg-zion-blue/20'
                                  }`}
                                >
                                  {category}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Sort Options */}
                          <div>
                            <label className="block text-sm font-medium text-zion-slate-light mb-2">Sort By</label>
                            <select
                              value={filters.sortBy}
                              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                              className="w-full px-3 py-2 bg-zion-blue/20 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                            >
                              <option value="relevance">Relevance</option>
                              <option value="date">Date</option>
                              <option value="popularity">Popularity</option>
                              <option value="rating">Rating</option>
                            </select>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Search Results or Suggestions */}
                  <div className="px-6 py-4">
                    {query.trim() ? (
                      // Search Results
                      <div className="space-y-4">
                        {isSearching ? (
                          <div className="text-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zion-cyan mx-auto mb-4"></div>
                            <p className="text-zion-slate-light">Searching...</p>
                          </div>
                        ) : results.length > 0 ? (
                          <>
                            <div className="flex items-center justify-between mb-4">
                              <p className="text-zion-slate-light">
                                Found {results.length} result{results.length !== 1 ? 's' : ''}
                              </p>
                            </div>
                            <div className="space-y-3">
                              {results.map((result) => (
                                <motion.div
                                  key={result.id}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="p-4 bg-zion-blue/10 border border-zion-purple/20 rounded-xl hover:bg-zion-blue/20 transition-all duration-300 cursor-pointer group"
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <div className="flex items-center space-x-2 mb-2">
                                        <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">
                                          {result.type}
                                        </span>
                                        <span className="text-zion-slate-400 text-sm">
                                          {result.category}
                                        </span>
                                      </div>
                                      <h3 className="text-white font-semibold mb-2 group-hover:text-zion-cyan transition-colors">
                                        {result.title}
                                      </h3>
                                      <p className="text-zion-slate-light text-sm mb-3 line-clamp-2">
                                        {result.description}
                                      </p>
                                      <div className="flex items-center space-x-4 text-xs text-zion-slate-400">
                                        <span className="flex items-center space-x-1">
                                          <Eye className="w-3 h-3" />
                                          {result.views.toLocaleString()}
                                        </span>
                                        <span className="flex items-center space-x-1">
                                          <Star className="w-3 h-3" />
                                          {result.rating}
                                        </span>
                                        <span className="flex items-center space-x-1">
                                          <Clock className="w-3 h-3" />
                                          {result.lastUpdated.toLocaleDateString()}
                                        </span>
                                      </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-zion-slate-400 group-hover:text-zion-cyan transition-colors" />
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="text-center py-8">
                            <Search className="w-12 h-12 text-zion-slate-400 mx-auto mb-4" />
                            <p className="text-zion-slate-light mb-2">No results found</p>
                            <p className="text-zion-slate-500 text-sm">Try adjusting your search terms or filters</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      // Search Suggestions
                      <div className="space-y-6">
                        {/* Recent Searches */}
                        {recentSearches.length > 0 && (
                          <div>
                            <h3 className="text-sm font-medium text-zion-slate-light mb-3 flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              Recent Searches
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {recentSearches.map((search, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleSearchChange(search)}
                                  className="px-3 py-2 bg-zion-blue/10 hover:bg-zion-blue/20 border border-zion-purple/30 rounded-lg text-zion-slate-light hover:text-zion-cyan transition-all duration-300 text-sm"
                                >
                                  {search}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Popular Searches */}
                        <div>
                          <h3 className="text-sm font-medium text-zion-slate-light mb-3 flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4" />
                            Popular Searches
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {popularSearches.map((search, index) => (
                              <button
                                key={index}
                                onClick={() => handleSearchChange(search)}
                                className="px-3 py-2 bg-zion-purple/20 hover:bg-zion-purple/30 border border-zion-purple/30 rounded-lg text-zion-cyan hover:text-white transition-all duration-300 text-sm"
                              >
                                {search}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div>
                          <h3 className="text-sm font-medium text-zion-slate-light mb-3 flex items-center space-x-2">
                            <Zap className="w-4 h-4" />
                            Quick Actions
                          </h3>
                          <div className="grid grid-cols-2 gap-3">
                            <button className="p-3 bg-zion-blue/10 hover:bg-zion-blue/20 border border-zion-purple/30 rounded-lg text-left transition-all duration-300 group">
                              <div className="flex items-center space-x-2 mb-2">
                                <Brain className="w-5 h-5 text-zion-cyan" />
                                <span className="text-white font-medium">AI Services</span>
                              </div>
                              <p className="text-zion-slate-light text-sm">Explore our AI solutions</p>
                            </button>
                            <button className="p-3 bg-zion-blue/10 hover:bg-zion-blue/20 border border-zion-purple/30 rounded-lg text-left transition-all duration-300 group">
                              <div className="flex items-center space-x-2 mb-2">
                                <Shield className="w-5 h-5 text-zion-cyan" />
                                <span className="text-white font-medium">Security</span>
                              </div>
                              <p className="text-zion-slate-light text-sm">Cybersecurity solutions</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}