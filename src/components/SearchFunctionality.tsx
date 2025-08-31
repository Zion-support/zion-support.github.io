import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  Filter, 
  Clock, 
  TrendingUp, 
  FileText, 
  Users, 
  Building, 
  Zap,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Command,
  Globe,
  Lightbulb,
  Cpu,
  Shield,
  Cloud,
  Database,
  Network
} from 'lucide-react';
import Fuse from 'fuse.js';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'solution' | 'article' | 'company';
  category: string;
  tags: string[];
  relevance: number;
  lastUpdated?: string;
}

interface SearchFilters {
  type: string[];
  category: string[];
  tags: string[];
}

export const SearchFunctionality: React.FC<{
  showSearch?: boolean;
  onClose?: () => void;
}> = ({ showSearch = false, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    type: [],
    category: [],
    tags: []
  });
  const [isSearching, setIsSearching] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  // Mock search data - in real app, this would come from API or CMS
  const searchData: SearchResult[] = useMemo(() => [
    // Pages
    {
      id: 'home',
      title: 'Home',
      description: 'Welcome to Zion Tech Group - Innovation • Technology • Growth',
      url: '/',
      type: 'page',
      category: 'main',
      tags: ['home', 'welcome', 'main'],
      relevance: 1.0
    },
    {
      id: 'about',
      title: 'About Us',
      description: 'Learn about Zion Tech Group and our mission to transform businesses through technology',
      url: '/about',
      type: 'page',
      category: 'company',
      tags: ['about', 'company', 'mission', 'team'],
      relevance: 0.9
    },
    {
      id: 'services',
      title: 'Services',
      description: 'Comprehensive AI, IT, and digital transformation services',
      url: '/services',
      type: 'page',
      category: 'services',
      tags: ['services', 'ai', 'it', 'digital'],
      relevance: 0.9
    },
    
    // AI Services
    {
      id: 'ai-automation',
      title: 'AI Enterprise Automation Platform',
      description: 'Transform your business operations with intelligent automation',
      url: '/services/ai-enterprise-automation-platform',
      type: 'service',
      category: 'AI & Automation',
      tags: ['ai', 'automation', 'enterprise', 'platform'],
      relevance: 0.95
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Platform',
      description: 'Advanced threat detection and prevention using artificial intelligence',
      url: '/services/ai-cybersecurity-platform',
      type: 'service',
      category: 'AI & Automation',
      tags: ['ai', 'cybersecurity', 'threat', 'security'],
      relevance: 0.9
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare Platform',
      description: 'Revolutionary healthcare solutions powered by artificial intelligence',
      url: '/services/ai-healthcare-platform',
      type: 'service',
      category: 'AI & Automation',
      tags: ['ai', 'healthcare', 'medical', 'platform'],
      relevance: 0.9
    },
    
    // IT Services
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps Solutions',
      description: 'Scalable cloud infrastructure and automated deployment pipelines',
      url: '/services/cloud-devops',
      type: 'service',
      category: 'IT & Infrastructure',
      tags: ['cloud', 'devops', 'infrastructure', 'deployment'],
      relevance: 0.85
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets',
      url: '/services/cybersecurity',
      type: 'service',
      category: 'IT & Infrastructure',
      tags: ['cybersecurity', 'security', 'protection', 'threat'],
      relevance: 0.85
    },
    
    // Solutions
    {
      id: 'healthcare-solutions',
      title: 'Healthcare Solutions',
      description: 'Innovative technology solutions for the healthcare industry',
      url: '/solutions/healthcare',
      type: 'solution',
      category: 'Industry Solutions',
      tags: ['healthcare', 'medical', 'industry', 'solutions'],
      relevance: 0.8
    },
    {
      id: 'financial-solutions',
      title: 'Financial Solutions',
      description: 'Digital transformation solutions for financial institutions',
      url: '/solutions/financial',
      type: 'solution',
      category: 'Industry Solutions',
      tags: ['financial', 'banking', 'fintech', 'solutions'],
      relevance: 0.8
    },
    
    // Articles
    {
      id: 'ai-trends-2025',
      title: 'AI Trends 2025: What to Expect',
      description: 'Explore the latest developments in artificial intelligence and their business impact',
      url: '/blog/ai-trends-2025',
      type: 'article',
      category: 'Technology',
      tags: ['ai', 'trends', '2025', 'technology', 'business'],
      relevance: 0.75,
      lastUpdated: '2025-01-15'
    }
  ], []);

  // Fuse.js search instance
  const fuse = useMemo(() => new Fuse(searchData, {
    keys: ['title', 'description', 'tags'],
    threshold: 0.3,
    includeScore: true,
    minMatchCharLength: 2
  }), [searchData]);

  // Search function
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setFilteredResults([]);
      return;
    }

    setIsSearching(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const searchResults = fuse.search(searchQuery);
      const mappedResults = searchResults
        .map(result => ({
          ...result.item,
          relevance: result.score ? 1 - result.score : 1
        }))
        .sort((a, b) => b.relevance - a.relevance);
      
      setResults(mappedResults);
      setFilteredResults(mappedResults);
      
      // Add to recent searches
      if (searchQuery.trim()) {
        setRecentSearches(prev => {
          const filtered = prev.filter(s => s !== searchQuery);
          return [searchQuery, ...filtered].slice(0, 5);
        });
      }
      
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
      setFilteredResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [fuse]);

  // Apply filters
  const applyFilters = useCallback(() => {
    let filtered = [...results];
    
    if (filters.type.length > 0) {
      filtered = filtered.filter(result => filters.type.includes(result.type));
    }
    
    if (filters.category.length > 0) {
      filtered = filtered.filter(result => filters.category.includes(result.category));
    }
    
    if (filters.tags.length > 0) {
      filtered = filtered.filter(result => 
        filters.tags.some(tag => result.tags.includes(tag))
      );
    }
    
    setFilteredResults(filtered);
    setSelectedIndex(-1);
  }, [results, filters]);

  // Handle search input
  const handleSearchInput = useCallback((value: string) => {
    setQuery(value);
    setShowSuggestions(value.length > 0);
    
    if (value.length >= 2) {
      performSearch(value);
    } else {
      setResults([]);
      setFilteredResults([]);
    }
  }, [performSearch]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredResults.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        event.preventDefault();
        if (selectedIndex >= 0 && filteredResults[selectedIndex]) {
          window.location.href = filteredResults[selectedIndex].url;
        } else if (query.trim()) {
          performSearch(query);
        }
        break;
      case 'Escape':
        event.preventDefault();
        onClose?.();
        break;
    }
  }, [filteredResults, selectedIndex, query, performSearch, onClose]);

  // Get available filter options
  const filterOptions = useMemo(() => {
    const types = [...new Set(searchData.map(item => item.type))];
    const categories = [...new Set(searchData.map(item => item.category))];
    const tags = [...new Set(searchData.flatMap(item => item.tags))];
    
    return { types, categories, tags };
  }, [searchData]);

  // Get result icon
  const getResultIcon = (type: string) => {
    switch (type) {
      case 'page': return <FileText className="w-4 h-4" />;
      case 'service': return <Zap className="w-4 h-4" />;
      case 'solution': return <Lightbulb className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'company': return <Building className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation': return <Cpu className="w-4 h-4" />;
      case 'IT & Infrastructure': return <Network className="w-4 h-4" />;
      case 'Industry Solutions': return <Building className="w-4 h-4" />;
      case 'Technology': return <Globe className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  // Focus search input when component mounts
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  // Apply filters when they change
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  // Scroll selected result into view
  useEffect(() => {
    if (selectedIndex >= 0 && searchResultsRef.current) {
      const selectedElement = searchResultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {showSearch && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Container */}
            <div className="bg-white rounded-2xl shadow-2xl border border-zion-cyan/20 overflow-hidden">
              {/* Search Header */}
              <div className="p-6 border-b border-zion-slate/20">
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate/40" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={query}
                      onChange={(e) => handleSearchInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Search Zion Tech Group..."
                      className="w-full pl-10 pr-4 py-3 text-lg bg-zion-slate/5 border border-zion-slate/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    />
                    {query && (
                      <button
                        onClick={() => handleSearchInput('')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-zion-slate/10 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4 text-zion-slate/40" />
                      </button>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`p-3 rounded-xl transition-colors ${
                      showFilters 
                        ? 'bg-zion-cyan text-white' 
                        : 'bg-zion-slate/10 text-zion-slate hover:bg-zion-slate/20'
                    }`}
                    title="Toggle filters"
                  >
                    <Filter className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={onClose}
                    className="p-3 bg-zion-slate/10 text-zion-slate hover:bg-zion-slate/20 rounded-xl transition-colors"
                    title="Close search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Search Suggestions */}
                {showSuggestions && !isSearching && results.length === 0 && (
                  <div className="mt-4 space-y-3">
                    {/* Recent Searches */}
                    {recentSearches.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-zion-slate/60 mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Recent Searches
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {recentSearches.map((search, index) => (
                            <button
                              key={index}
                              onClick={() => handleSearchInput(search)}
                              className="px-3 py-1 bg-zion-slate/10 text-zion-slate rounded-lg hover:bg-zion-slate/20 transition-colors text-sm"
                            >
                              {search}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Popular Searches */}
                    <div>
                      <h4 className="text-sm font-medium text-zion-slate/60 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Popular Searches
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['AI Services', 'Cybersecurity', 'Cloud Solutions', 'Digital Transformation'].map((search, index) => (
                          <button
                            key={index}
                            onClick={() => handleSearchInput(search)}
                            className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan rounded-lg hover:bg-zion-cyan/20 transition-colors text-sm"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Filters */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-b border-zion-slate/20 overflow-hidden"
                  >
                    <div className="p-4 space-y-4">
                      <h4 className="font-medium text-zion-slate-dark">Filters</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Type Filter */}
                        <div>
                          <label className="block text-sm font-medium text-zion-slate/70 mb-2">Type</label>
                          <div className="space-y-2">
                            {filterOptions.types.map((type) => (
                              <label key={type} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={filters.type.includes(type)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setFilters(prev => ({ ...prev, type: [...prev.type, type] }));
                                    } else {
                                      setFilters(prev => ({ ...prev, type: prev.type.filter(t => t !== type) }));
                                    }
                                  }}
                                  className="w-4 h-4 text-zion-cyan rounded focus:ring-zion-cyan"
                                />
                                <span className="text-sm text-zion-slate">{type}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        {/* Category Filter */}
                        <div>
                          <label className="block text-sm font-medium text-zion-slate/70 mb-2">Category</label>
                          <div className="space-y-2">
                            {filterOptions.categories.map((category) => (
                              <label key={category} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={filters.category.includes(category)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setFilters(prev => ({ ...prev, category: [...prev.category, category] }));
                                    } else {
                                      setFilters(prev => ({ ...prev, category: prev.category.filter(c => c !== category) }));
                                    }
                                  }}
                                  className="w-4 h-4 text-zion-cyan rounded focus:ring-zion-cyan"
                                />
                                <span className="text-sm text-zion-slate">{category}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        {/* Tags Filter */}
                        <div>
                          <label className="block text-sm font-medium text-zion-slate/70 mb-2">Tags</label>
                          <div className="space-y-2 max-h-32 overflow-y-auto">
                            {filterOptions.tags.slice(0, 10).map((tag) => (
                              <label key={tag} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={filters.tags.includes(tag)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setFilters(prev => ({ ...prev, tags: [...prev.tags, tag] }));
                                    } else {
                                      setFilters(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }));
                                    }
                                  }}
                                  className="w-4 h-4 text-zion-cyan rounded focus:ring-zion-cyan"
                                />
                                <span className="text-sm text-zion-slate">{tag}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Clear Filters */}
                      <button
                        onClick={() => setFilters({ type: [], category: [], tags: [] })}
                        className="text-sm text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                      >
                        Clear all filters
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {isSearching ? (
                  <div className="p-8 text-center">
                    <div className="w-8 h-8 border-2 border-zion-cyan/20 border-t-zion-cyan rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-zion-slate/60">Searching...</p>
                  </div>
                ) : filteredResults.length > 0 ? (
                  <div ref={searchResultsRef} className="divide-y divide-zion-slate/10">
                    {filteredResults.map((result, index) => (
                      <motion.a
                        key={result.id}
                        href={result.url}
                        className={`block p-4 hover:bg-zion-slate/5 transition-colors ${
                          index === selectedIndex ? 'bg-zion-cyan/10 border-l-4 border-zion-cyan' : ''
                        }`}
                        onMouseEnter={() => setSelectedIndex(index)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-zion-cyan/10 rounded-lg flex items-center justify-center text-zion-cyan">
                            {getResultIcon(result.type)}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-sm font-medium text-zion-slate-dark truncate">
                                {result.title}
                              </h3>
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zion-slate/10 text-zion-slate">
                                {getCategoryIcon(result.category)}
                                <span className="ml-1">{result.category}</span>
                              </span>
                            </div>
                            
                            <p className="text-sm text-zion-slate/70 line-clamp-2 mb-2">
                              {result.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-1">
                                {result.tags.slice(0, 3).map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zion-cyan/10 text-zion-cyan"
                                  >
                                    {tag}
                                  </span>
                                ))}
                                {result.tags.length > 3 && (
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zion-slate/10 text-zion-slate">
                                    +{result.tags.length - 3}
                                  </span>
                                )}
                              </div>
                              
                              {result.lastUpdated && (
                                <span className="text-xs text-zion-slate/50">
                                  Updated {result.lastUpdated}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                ) : query && !isSearching ? (
                  <div className="p-8 text-center">
                    <Search className="w-12 h-12 text-zion-slate/40 mx-auto mb-4" />
                    <p className="text-zion-slate/60">No results found for "{query}"</p>
                    <p className="text-sm text-zion-slate/40 mt-2">Try different keywords or check your spelling</p>
                  </div>
                ) : null}
              </div>

              {/* Search Footer */}
              <div className="p-4 bg-zion-slate/5 border-t border-zion-slate/10">
                <div className="flex items-center justify-between text-xs text-zion-slate/50">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <ArrowUp className="w-3 h-3" />
                      <ArrowDown className="w-3 h-3" />
                      <span>Navigate</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <ArrowRight className="w-3 h-3" />
                      <span>Select</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Command className="w-3 h-3" />
                      <span>Search</span>
                    </span>
                  </div>
                  
                  {filteredResults.length > 0 && (
                    <span>{filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};