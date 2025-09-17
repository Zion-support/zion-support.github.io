import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  MagnifyingGlassIcon, 
  XMarkIcon, 
  ClockIcon, 
  TrendingUpIcon,
  SparklesIcon,
  DocumentTextIcon,
  CubeIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'service' | 'technology';
  category: string;
  relevanceScore: number;
  tags: string[];
}

interface SearchSuggestion {
  id: string;
  text: string;
  type: 'recent' | 'popular' | 'ai-generated';
  count?: number;
}

interface AdvancedSearchSystemProps {
  placeholder?: string;
  maxResults?: number;
  showSuggestions?: boolean;
  showRecentSearches?: boolean;
  onSearch?: (query: string, results: SearchResult[]) => void;
  className?: string;
}

const AdvancedSearchSystem: React.FC<AdvancedSearchSystemProps> = ({
  placeholder = "Search AI solutions, quantum computing, neural interfaces...",
  maxResults = 10,
  showSuggestions = true,
  showRecentSearches = true,
  onSearch,
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search data - in a real app, this would come from your API/database
  const mockSearchData: SearchResult[] = [
    {
      id: '1',
      title: 'AI Innovation Hub 2026',
      description: 'Revolutionary AI solutions for consciousness systems, quantum neural networks, and autonomous ecosystems.',
      url: '/pages/AIInnovationHub2026',
      type: 'page',
      category: 'AI Solutions',
      relevanceScore: 0.95,
      tags: ['AI', 'consciousness', 'quantum', 'neural networks']
    },
    {
      id: '2',
      title: 'Quantum Computing Solutions 2026',
      description: 'Advanced quantum technology for optimization, cryptography, and molecular simulation.',
      url: '/pages/QuantumComputingSolutions2026',
      type: 'page',
      category: 'Quantum Computing',
      relevanceScore: 0.92,
      tags: ['quantum', 'computing', 'optimization', 'cryptography']
    },
    {
      id: '3',
      title: 'Neural Interface Technology 2026',
      description: 'Cutting-edge brain-computer interfaces and neural augmentation systems.',
      url: '/pages/NeuralInterfaceTechnology2026',
      type: 'page',
      category: 'Neural Interfaces',
      relevanceScore: 0.89,
      tags: ['neural', 'brain-computer', 'augmentation', 'interfaces']
    },
    {
      id: '4',
      title: 'Comprehensive AI Blog 2026',
      description: 'Expert insights on AI research, quantum computing breakthroughs, and technology trends.',
      url: '/pages/ComprehensiveBlog2026',
      type: 'blog',
      category: 'Content',
      relevanceScore: 0.85,
      tags: ['blog', 'AI research', 'insights', 'trends']
    },
    {
      id: '5',
      title: 'AI Case Studies 2026',
      description: 'Real-world success stories and implementation case studies from leading enterprises.',
      url: '/pages/ComprehensiveCaseStudies2026',
      type: 'page',
      category: 'Case Studies',
      relevanceScore: 0.82,
      tags: ['case studies', 'success stories', 'enterprise', 'implementation']
    }
  ];

  const popularSuggestions: SearchSuggestion[] = [
    { id: '1', text: 'AI consciousness systems', type: 'popular', count: 1250 },
    { id: '2', text: 'quantum neural networks', type: 'popular', count: 980 },
    { id: '3', text: 'brain-computer interfaces', type: 'popular', count: 750 },
    { id: '4', text: 'autonomous AI systems', type: 'popular', count: 620 },
    { id: '5', text: 'quantum cryptography', type: 'popular', count: 580 }
  ];

  const aiGeneratedSuggestions: SearchSuggestion[] = [
    { id: '6', text: 'neural prosthetic integration', type: 'ai-generated' },
    { id: '7', text: 'quantum machine learning algorithms', type: 'ai-generated' },
    { id: '8', text: 'cognitive neural augmentation', type: 'ai-generated' },
    { id: '9', text: 'molecular quantum simulation', type: 'ai-generated' },
    { id: '10', text: 'autonomous business operations', type: 'ai-generated' }
  ];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Perform search
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter and rank results based on query
    const filteredResults = mockSearchData
      .filter(item => {
        const searchTerms = searchQuery.toLowerCase().split(' ');
        const searchableText = `${item.title} ${item.description} ${item.category} ${item.tags.join(' ')}`.toLowerCase();
        
        return searchTerms.some(term => searchableText.includes(term));
      })
      .sort((a, b) => {
        // Calculate relevance score based on title match, description match, and base score
        const aScore = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ? a.relevanceScore + 0.1 : a.relevanceScore;
        const bScore = b.title.toLowerCase().includes(searchQuery.toLowerCase()) ? b.relevanceScore + 0.1 : b.relevanceScore;
        return bScore - aScore;
      })
      .slice(0, maxResults);

    setResults(filteredResults);
    setIsSearching(false);

    // Save to recent searches
    if (searchQuery.trim()) {
      const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
    }

    // Call callback if provided
    if (onSearch) {
      onSearch(searchQuery, filteredResults);
    }
  }, [maxResults, onSearch, recentSearches]);

  // Handle input change and generate suggestions
  useEffect(() => {
    if (query.length > 0) {
      const combined = [
        ...popularSuggestions.filter(s => s.text.toLowerCase().includes(query.toLowerCase())),
        ...aiGeneratedSuggestions.filter(s => s.text.toLowerCase().includes(query.toLowerCase()))
      ].slice(0, 5);
      
      setSuggestions(combined);
      setShowDropdown(true);
      
      // Debounced search
      const timer = setTimeout(() => performSearch(query), 300);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
      setResults([]);
      setShowDropdown(showRecentSearches && recentSearches.length > 0);
    }
  }, [query, performSearch, showRecentSearches, recentSearches.length]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const totalItems = suggestions.length + (query.length === 0 ? recentSearches.length : results.length);
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < totalItems - 1 ? prev + 1 : -1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > -1 ? prev - 1 : totalItems - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          if (query.length === 0 && selectedIndex < recentSearches.length) {
            setQuery(recentSearches[selectedIndex]);
          } else if (selectedIndex < suggestions.length) {
            setQuery(suggestions[selectedIndex].text);
          } else if (results.length > 0) {
            const resultIndex = selectedIndex - suggestions.length;
            if (results[resultIndex]) {
              window.location.href = results[resultIndex].url;
            }
          }
        } else if (query) {
          performSearch(query);
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'page':
        return <DocumentTextIcon className="h-4 w-4 text-blue-500" />;
      case 'blog':
        return <DocumentTextIcon className="h-4 w-4 text-green-500" />;
      case 'service':
        return <CubeIcon className="h-4 w-4 text-purple-500" />;
      case 'technology':
        return <BeakerIcon className="h-4 w-4 text-orange-500" />;
      default:
        return <DocumentTextIcon className="h-4 w-4 text-gray-500" />;
    }
  };

  const getSuggestionIcon = (type: SearchSuggestion['type']) => {
    switch (type) {
      case 'recent':
        return <ClockIcon className="h-4 w-4 text-gray-400" />;
      case 'popular':
        return <TrendingUpIcon className="h-4 w-4 text-blue-500" />;
      case 'ai-generated':
        return <SparklesIcon className="h-4 w-4 text-purple-500" />;
      default:
        return <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div ref={searchRef} className={`relative w-full max-w-2xl mx-auto ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowDropdown(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setShowDropdown(false);
              inputRef.current?.focus();
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <XMarkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
        {isSearching && (
          <div className="absolute inset-y-0 right-8 flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {/* Recent Searches */}
          {query.length === 0 && showRecentSearches && recentSearches.length > 0 && (
            <div className="p-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Recent Searches
              </div>
              {recentSearches.map((search, index) => (
                <button
                  key={search}
                  onClick={() => setQuery(search)}
                  className={`w-full flex items-center px-3 py-2 text-left hover:bg-gray-50 rounded ${
                    selectedIndex === index ? 'bg-blue-50' : ''
                  }`}
                >
                  <ClockIcon className="h-4 w-4 text-gray-400 mr-3" />
                  <span className="text-gray-700">{search}</span>
                </button>
              ))}
            </div>
          )}

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="p-2 border-t border-gray-100">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Suggestions
              </div>
              {suggestions.map((suggestion, index) => (
                <button
                  key={suggestion.id}
                  onClick={() => setQuery(suggestion.text)}
                  className={`w-full flex items-center px-3 py-2 text-left hover:bg-gray-50 rounded ${
                    selectedIndex === index ? 'bg-blue-50' : ''
                  }`}
                >
                  {getSuggestionIcon(suggestion.type)}
                  <span className="text-gray-700 ml-3">{suggestion.text}</span>
                  {suggestion.count && (
                    <span className="ml-auto text-xs text-gray-400">
                      {suggestion.count.toLocaleString()} searches
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Search Results */}
          {results.length > 0 && (
            <div className="p-2 border-t border-gray-100">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Results ({results.length})
              </div>
              {results.map((result, index) => (
                <a
                  key={result.id}
                  href={result.url}
                  className={`block px-3 py-3 hover:bg-gray-50 rounded ${
                    selectedIndex === suggestions.length + index ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      {getTypeIcon(result.type)}
                    </div>
                    <div className="ml-3 flex-1 min-w-0">
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {result.title}
                        </p>
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                        {result.description}
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="flex flex-wrap gap-1">
                          {result.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="ml-auto flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                          <span className="text-xs text-gray-400">
                            {Math.round(result.relevanceScore * 100)}% match
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* No Results */}
          {query.length > 0 && results.length === 0 && !isSearching && (
            <div className="p-4 text-center text-gray-500">
              <MagnifyingGlassIcon className="h-8 w-8 mx-auto mb-2 text-gray-300" />
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-1">Try searching for AI, quantum computing, or neural interfaces</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedSearchSystem;