"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, X, Filter, TrendingUp, Clock, 
  Star, Zap, Brain, Shield, Rocket, 
  Globe, Cpu, Database, Cloud
} from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  relevance: number;
  lastUpdated: string;
  tags: string[];
  type: 'service' | 'page' | 'blog' | 'case-study';
}

<<<<<<< HEAD
interface SearchFilters {
  category: string[];
  type: string[];
  dateRange: 'all' | 'week' | 'month' | 'year';
  relevance: 'all' | 'high' | 'medium' | 'low';
}

const EnhancedSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    category: [],
    type: [],
    dateRange: 'all',
    relevance: 'all'
  });
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [trendingSearches, setTrendingSearches] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search data
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'AI Revolutionary Breakthrough 2026',
      description: 'Discover the latest AI breakthroughs that are reshaping industries and creating new possibilities.',
      category: 'AI',
      url: '/pages/AIRevolutionaryBreakthrough2026',
      relevance: 95,
      lastUpdated: '2025-01-20',
      tags: ['AI', 'Machine Learning', 'Revolutionary', '2026'],
      type: 'page'
    },
    {
      id: '2',
      title: 'Quantum Computing Revolution 2026',
      description: 'Experience the power of quantum computing and its revolutionary applications.',
      category: 'Quantum',
      url: '/pages/QuantumComputingRevolution2026',
      relevance: 92,
      lastUpdated: '2025-01-19',
      tags: ['Quantum', 'Computing', 'Revolution', '2026'],
      type: 'page'
    },
    {
      id: '3',
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interfaces that enable thought-controlled devices.',
      category: 'Neural',
      url: '/pages/NeuralInterfaceRevolution2026',
      relevance: 90,
      lastUpdated: '2025-01-18',
      tags: ['Neural', 'Interface', 'BCI', 'Revolution'],
      type: 'page'
    },
    {
      id: '4',
      title: 'Advanced AI Transformation 2026',
      description: 'Transform your business with advanced AI solutions and automation.',
      category: 'AI',
      url: '/pages/AdvancedAITransformation2026',
      relevance: 88,
      lastUpdated: '2025-01-17',
      tags: ['AI', 'Transformation', 'Business', 'Automation'],
      type: 'service'
    },
    {
      id: '5',
      title: 'Ultimate Tech Revolution 2026',
      description: 'The most comprehensive showcase of revolutionary technologies.',
      category: 'Technology',
      url: '/pages/UltimateTechRevolution2026',
      relevance: 85,
      lastUpdated: '2025-01-16',
      tags: ['Technology', 'Revolution', 'Showcase', '2026'],
      type: 'page'
    }
  ];

  const categories = ['AI', 'Quantum', 'Neural', 'Biotech', 'Space', 'Robotics', 'Technology'];
  const types = ['service', 'page', 'blog', 'case-study'];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
=======
const EnhancedSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const searchData: SearchResult[] = [
    {
      title: 'Advanced AI Systems 2026',
      href: '/pages/AdvancedAISystems2026',
      description: 'Next-generation AI systems with autonomous learning capabilities',
      category: 'AI Solutions',
      icon: '🧠'
    },
    {
      title: 'Space Technology & AI 2025',
      href: '/pages/SpaceTechAI2025',
      description: 'AI-powered space exploration and satellite intelligence',
      category: 'Space Technology',
      icon: '🚀'
    },
    {
      title: 'Biotech AI Revolution 2025',
      href: '/pages/BiotechAIRevolution2025',
      description: 'Revolutionary biotechnology and personalized medicine',
      category: 'Biotechnology',
      icon: '🧬'
    },
    {
      title: 'Quantum Computing Revolution 2026',
      href: '/pages/QuantumComputingRevolution2026',
      description: 'Breakthrough quantum computing solutions',
      category: 'Quantum Computing',
      icon: '⚡'
    },
    {
      title: 'Neural Interface Revolution 2026',
      href: '/pages/NeuralInterfaceRevolution2026',
      description: 'Advanced brain-computer interface technology',
      category: 'Neural Interfaces',
      icon: '🧬'
    },
    {
      title: 'AI Services Page',
      href: '/pages/AIServicesPage',
      description: 'Comprehensive AI services and solutions',
      category: 'AI Services',
      icon: '🤖'
    },
    {
      title: 'AI Content Generator',
      href: '/pages/AIContentGenerator',
      description: 'AI-powered content generation tools',
      category: 'AI Tools',
      icon: '📝'
    },
    {
      title: 'AI Matcher',
      href: '/pages/AIMatcher',
      description: 'Intelligent matching and recommendation system',
      category: 'AI Tools',
      icon: '🎯'
    },
    {
      title: 'AI Autonomous Research Assistant',
      href: '/pages/AIAutonomousResearchAssistant',
      description: 'Autonomous AI research and analysis tools',
      category: 'AI Research',
      icon: '🔬'
    },
    {
      title: 'AI Powered IT Asset Management',
      href: '/pages/AIPoweredITAssetManagement',
      description: 'AI-driven IT asset management solutions',
      category: 'IT Management',
      icon: '💻'
    },
    {
      title: 'Innovation Landing 2025',
      href: '/pages/InnovationLanding2025',
      description: 'Comprehensive innovation showcase and insights',
      category: 'Innovation',
      icon: '💡'
    },
    {
      title: 'Revolutionary Tech Blog 2026',
      href: '/pages/RevolutionaryTechBlog2026',
      description: 'Latest insights and trends in revolutionary technology',
      category: 'Blog',
      icon: '📚'
    }
  ];

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
>>>>>>> cursor/create-and-deploy-new-content-df8e
    }
  }, []);

<<<<<<< HEAD
  // Save recent searches to localStorage
  const saveRecentSearch = useCallback((searchQuery: string) => {
    if (searchQuery.trim() && !recentSearches.includes(searchQuery)) {
      const updated = [searchQuery, ...recentSearches.slice(0, 4)];
      setRecentSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
    }
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter results based on query and filters
    let filteredResults = searchData.filter(item => {
      const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = filters.category.length === 0 || 
                             filters.category.includes(item.category);
      
      const matchesType = filters.type.length === 0 || 
                         filters.type.includes(item.type);
      
      return matchesQuery && matchesCategory && matchesType;
    });

    // Sort by relevance
    filteredResults.sort((a, b) => b.relevance - a.relevance);
    
    setResults(filteredResults);
    setIsLoading(false);
  }, [filters]);

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, performSearch]);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      saveRecentSearch(query);
      performSearch(query);
      setShowSuggestions(false);
    }
  };

  // Handle filter change
  const handleFilterChange = (filterType: keyof SearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  // Handle single value filter change
  const handleSingleFilterChange = (filterType: keyof SearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value) ? [] : [value]
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: [],
      type: [],
      dateRange: 'all',
      relevance: 'all'
    });
  };

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI': <Brain className="w-4 h-4" />,
      'Quantum': <Zap className="w-4 h-4" />,
      'Neural': <Cpu className="w-4 h-4" />,
      'Biotech': <Database className="w-4 h-4" />,
      'Space': <Rocket className="w-4 h-4" />,
      'Robotics': <Shield className="w-4 h-4" />,
      'Technology': <Globe className="w-4 h-4" />
    };
    return icons[category] || <Cloud className="w-4 h-4" />;
  };

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 bg-white border border-gray-200 rounded-lg p-4 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categories</label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(category)}
                        onChange={() => handleFilterChange('category', category)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Types */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                <div className="space-y-2">
                  {types.map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.type.includes(type)}
                        onChange={() => handleFilterChange('type', type)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Other Filters */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Other Filters</label>
                <div className="space-y-2">
                  <select
                    value={filters.dateRange}
                    onChange={(e) => handleSingleFilterChange('dateRange', e.target.value)}
                    className="w-full text-sm border border-gray-300 rounded-md px-3 py-1"
                  >
                    <option value="all">All Time</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="year">This Year</option>
                  </select>
                </div>
                <button
                  onClick={clearFilters}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Suggestions */}
      <AnimatePresence>
        {showSuggestions && !query && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          >
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Recent Searches
                </h3>
                <div className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(search);
                        setShowSuggestions(false);
                      }}
                      className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Trending Searches */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {['AI Revolution', 'Quantum Computing', 'Neural Interfaces', 'Biotech', 'Space Tech'].map((trend, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setQuery(trend);
                      setShowSuggestions(false);
                    }}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    {trend}
                  </button>
                ))}
              </div>
=======
  const handleResultClick = (href: string) => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    window.location.href = href;
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Search for AI solutions, technology, services..."
        />
        {query.length > 0 && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          <div className="py-2">
            {results.map((result, index) => (
              <div
                key={index}
                onClick={() => handleResultClick(result.href)}
                className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <span className="text-2xl flex-shrink-0">{result.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {result.title}
                    </p>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                      {result.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && query.length > 0 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="px-4 py-8 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try searching for "AI", "Quantum", "Space", or "Biotech"
            </p>
          </div>
        </div>
>>>>>>> cursor/create-and-deploy-new-content-df8e
      )}
    </div>
  );
};

export default EnhancedSearch;