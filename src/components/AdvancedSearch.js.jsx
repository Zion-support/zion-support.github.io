import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  X,
  ChevronDown
} from 'lucide-react';

const categories = [
  'AI Services',
  'Web Development',
  'Mobile Apps',
  'Cloud Solutions',
  'Cybersecurity',
  'Data Analytics',
  'Machine Learning',
  'Blockchain',
  'IoT',
  'DevOps'
];

const mockSuggestions = [
  {
    id: '1',
    text: 'AI-Powered Chatbot Development',
    type: 'service',
    category: 'AI Services',
    relevance: 95
  },
  {
    id: '2',
    text: 'Machine Learning Model Training',
    type: 'technology',
    category: 'Machine Learning',
    relevance: 88
  },
  {
    id: '3',
    text: 'React Native Mobile App',
    type: 'trending',
    category: 'Mobile Apps',
    relevance: 82
  },
  {
    id: '4',
    text: 'Cloud Migration Services',
    type: 'service',
    category: 'Cloud Solutions',
    relevance: 78
  },
  {
    id: '5',
    text: 'Cybersecurity Audit',
    type: 'recent',
    category: 'Cybersecurity',
    relevance: 75
  }
];

export function AdvancedSearch() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  
  const searchRef = useRef(null);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Generate suggestions based on query
  useEffect(() => {
    if (query.trim()) {
      const filteredSuggestions = mockSuggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(query.toLowerCase()) ||
        suggestion.category.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.text);
    setShowSuggestions(false);
    
    // Add to recent searches
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item !== suggestion.text);
      return [suggestion.text, ...filtered.slice(0, 4)];
    });
  };

  const toggleFilter = (category) => {
    setSelectedFilters(prev => 
      prev.includes(category)
        ? prev.filter(f => f !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const getSuggestionIcon = (type) => {
    switch (type) {
      case 'service': return <Star className="w-4 h-4 text-blue-500" />;
      case 'technology': return <Sparkles className="w-4 h-4 text-purple-500" />;
      case 'trending': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'recent': return <Clock className="w-4 h-4 text-yellow-500" />;
      default: return <Search className="w-4 h-4 text-gray-500" />;
    }
  };

  const getSuggestionColor = (type) => {
    switch (type) {
      case 'service': return 'bg-blue-50 border-blue-200';
      case 'technology': return 'bg-purple-50 border-purple-200';
      case 'trending': return 'bg-green-50 border-green-200';
      case 'recent': return 'bg-yellow-50 border-yellow-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search for services, technologies, or solutions..."
          className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500"
        />
        
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            title="Advanced Filters"
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Advanced Filters */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                Filter by Category
              </h3>
              {selectedFilters.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => toggleFilter(category)}
                  className={`px-3 py-1 text-xs rounded-full border transition-all duration-200 ${
                    selectedFilters.includes(category)
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Suggestions */}
      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto"
          >
            {suggestions.map(suggestion => (
              <button
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-200 dark:border-gray-600 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${getSuggestionColor(suggestion.type)}`}>
                    {getSuggestionIcon(suggestion.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {suggestion.text}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {suggestion.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {suggestion.type.charAt(0).toUpperCase() + suggestion.type.slice(1)}
                      </span>
                      <span className="text-xs text-green-600 dark:text-green-400">
                        {suggestion.relevance}% relevant
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
            
            <div className="p-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Sparkles className="w-3 h-3" />
                AI-powered suggestions based on your query
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results */}
      <AnimatePresence>
        {showSuggestions && query.trim() && suggestions.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl z-50 text-center"
          >
            <div className="text-gray-500 dark:text-gray-400 mb-2">
              No results found for "{query}"
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500">
              Try different keywords or browse our categories
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
