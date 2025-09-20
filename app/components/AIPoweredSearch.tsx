'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  relevance: number;
  type: 'page' | 'service' | 'tool' | 'blog';
}

interface AIPoweredSearchProps {
  placeholder?: string;
  showSuggestions?: boolean;
  maxResults?: number;
}

const AIPoweredSearch: React.FC<AIPoweredSearchProps> = ({
  placeholder = "Search AI solutions, services, and tools...",
  showSuggestions = true,
  maxResults = 8
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sample search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'AI Automation Solutions',
      description: 'Transform your business with intelligent automation that reduces manual work by 80%',
      url: '/ai-2025',
      category: 'Services',
      relevance: 95,
      type: 'service'
    },
    {
      id: '2',
      title: 'Micro SaaS Development',
      description: 'Build and deploy scalable SaaS applications tailored to your business needs',
      url: '/automation',
      category: 'Services',
      relevance: 90,
      type: 'service'
    },
    {
      id: '3',
      title: 'AI ROI Calculator',
      description: 'Calculate the return on investment for AI implementation in your business',
      url: '/tools/ai-roi-calculator',
      category: 'Tools',
      relevance: 85,
      type: 'tool'
    },
    {
      id: '4',
      title: 'Autonomous Systems 2026',
      description: 'Self-managing business operations powered by advanced AI',
      url: '/autonomous-systems-2026',
      category: 'Services',
      relevance: 88,
      type: 'service'
    },
    {
      id: '5',
      title: 'AI Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI transformation',
      url: '/tools/ai-readiness-assessment',
      category: 'Tools',
      relevance: 82,
      type: 'tool'
    },
    {
      id: '6',
      title: 'Enterprise AI Platform',
      description: 'Comprehensive AI solutions for enterprise-scale operations',
      url: '/services',
      category: 'Services',
      relevance: 92,
      type: 'service'
    },
    {
      id: '7',
      title: 'AI Trends 2025-2030',
      description: 'Comprehensive future predictions for AI technology trends',
      url: '/blog/ai-trends-2025-2030-comprehensive-future-predictions',
      category: 'Blog',
      relevance: 75,
      type: 'blog'
    },
    {
      id: '8',
      title: 'Quantum AI Solutions',
      description: 'Next-generation quantum AI technologies for breakthrough results',
      url: '/tools/quantum-ai-readiness-assessment-2026',
      category: 'Tools',
      relevance: 78,
      type: 'tool'
    }
  ];

  // Simulate AI-powered search with intelligent filtering and ranking
  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    // AI-powered search logic
    const filteredResults = searchData
      .filter(item => {
        const queryLower = searchQuery.toLowerCase();
        const titleMatch = item.title.toLowerCase().includes(queryLower);
        const descMatch = item.description.toLowerCase().includes(queryLower);
        const categoryMatch = item.category.toLowerCase().includes(queryLower);
        
        // Boost relevance for exact matches
        const exactTitleMatch = item.title.toLowerCase() === queryLower;
        const exactCategoryMatch = item.category.toLowerCase() === queryLower;
        
        return titleMatch || descMatch || categoryMatch || exactTitleMatch || exactCategoryMatch;
      })
      .map(item => {
        // Calculate AI-powered relevance score
        const queryLower = searchQuery.toLowerCase();
        let relevance = item.relevance;
        
        // Boost for exact title matches
        if (item.title.toLowerCase().includes(queryLower)) {
          relevance += 10;
        }
        
        // Boost for exact category matches
        if (item.category.toLowerCase().includes(queryLower)) {
          relevance += 5;
        }
        
        // Boost for exact description matches
        if (item.description.toLowerCase().includes(queryLower)) {
          relevance += 3;
        }
        
        return { ...item, relevance: Math.min(relevance, 100) };
      })
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, maxResults);

    setResults(filteredResults);
    setIsLoading(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, maxResults]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showResults) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < results.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && selectedIndex < results.length) {
            window.location.href = results[selectedIndex].url;
          }
          break;
        case 'Escape':
          setShowResults(false);
          inputRef.current?.blur();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showResults, results, selectedIndex]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowResults(true);
    setSelectedIndex(-1);
  };

  const handleInputFocus = () => {
    setShowResults(true);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return '🚀';
      case 'tool':
        return '🛠️';
      case 'blog':
        return '📝';
      default:
        return '📄';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Services':
        return 'bg-blue-100 text-blue-800';
      case 'Tools':
        return 'bg-green-100 text-green-800';
      case 'Blog':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-lg hover:shadow-xl"
        />
        {isLoading && (
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
          </div>
        )}
      </div>

      {/* Search Results */}
      {showResults && showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((result, index) => (
                <Link
                  key={result.id}
                  href={result.url}
                  className={`block p-4 rounded-xl transition-all hover:bg-gray-50 ${
                    index === selectedIndex ? 'bg-blue-50 border-2 border-blue-200' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{getTypeIcon(result.type)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {result.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(result.category)}`}>
                          {result.category}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {result.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {result.url}
                        </span>
                        <div className="flex items-center space-x-1">
                          <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-green-500 transition-all duration-300"
                              style={{ width: `${result.relevance}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">
                            {result.relevance}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query && !isLoading ? (
            <div className="p-8 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-600">
                Try searching for "AI automation", "micro SaaS", or "tools"
              </p>
            </div>
          ) : null}
          
          {/* Quick Suggestions */}
          {!query && showSuggestions && (
            <div className="p-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Popular searches:</h4>
              <div className="flex flex-wrap gap-2">
                {['AI automation', 'Micro SaaS', 'ROI calculator', 'Enterprise AI'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIPoweredSearch;