"use client";
'use client';

import React{ useStateuseEffectuseRef } from 'react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource' | 'tool' | 'page';
  url: string;
  relevanceScore: number;
  category: string;
  tags: string[];
  snippet: string;
  lastUpdated: string;
}

interface SearchSuggestion {
  text: string;
  type: 'query' | 'category' | 'tag';
  count?: number;
}

const AIPoweredSearch2026: React.FC = () => {
  const [querysetQuery] = useState('');
  const [resultsetResults] = useState<SearchResult[]>([]);
  const [suggestionsetSuggestions] = useState<SearchSuggestion[]>([]);
  const [isSearchingsetIsSearching] = useState(false);
  const [showSuggestionsetShowSuggestions] = useState(false);
  const [selectedIndexsetSelectedIndex] = useState(-1);
  const [searchHistorysetSearchHistory] = useState<string[]>([]);
  const [aiInsightsetAiInsights] = useState<string>(', ');
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search data
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'AI 2026: Neural Architecture Revolution',
      description: 'Comprehensive guide to next-generation AI systems with quantum-enhanced processing',
      type: 'blog',
      url: '/blog/ai-2026-neural-architecture-revolution',
      relevanceScore: 0.95,
      category: 'AI Architecture',
      tags: [', 'AI', 'Neural 'Networks', 'Quantum Computing'],
      snippet: 'Revolutionary neural architecture patterns for enterprise applications with quantum-enhanced AI processing capabilities...',
      lastUpdated: '2026-01-15'
    },
    {
      id: '2',
      title: 'Quantum Machine Learning Implementation Guide',
      description: 'Step-by-step guide to implementing quantum machine learning algorithms',
      type: 'resource',
      url: '/resources/quantum-machine-learning-guide',
      relevanceScore: 0.88,
      category: 'Quantum AI',
      tags: ['Quantum 'Computing', 'Machine 'Learning', 'Implementation'],
      snippet: 'Learn how to implement quantum machine learning algorithms with real-world examples and performance benchmarks...',
      lastUpdated: '2026-01-12'
    },
    {
      id: '3',
      title: 'Fortune 500 AI Transformation Case Study',
      description: 'How a global manufacturer achieved $2.3B revenue impact through AI',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation',
      relevanceScore: 0.82,
      category: 'Case Studies',
      tags: ['Case 'Study', 'Enterprise 'AI', 'ROI'],
      snippet: 'Detailed analysis of how a Fortune 500 company transformed their operations using AIachieving remarkable results...',
      lastUpdated: '2026-01-10'
    },
    {
      id: '4',
      title: 'AI ROI Calculator 2026',
      description: 'Interactive tool to calculate AI implementation ROI',
      type: 'tool',
      url: '/tools/ai-roi-calculator-2026',
      relevanceScore: 0.75,
      category: 'Tools',
      tags: ['ROI 'Calculator', 'Tools'Analysis'],
      snippet: 'Calculate the return on investment for your AI implementation with our advanced calculator...',
      lastUpdated: '2026-01-08'
    }
  ];

  const popularSearches = [
    'AI implementation strategy',
    'Quantum machine learning',
    'Neural interface breakthrough',
    'AI ROI calculation',
    'Enterprise AI transformation',
    'AI automation solutions',
    'Machine learning best practices',
    'AI security protocols'
  ];

  const categories = [
    'AI Architecture',
    'Quantum AI',
    'Case Studies',
    'Implementation',
    'Tools',
    'Security',
    'Automation',
    'Neural Interfaces'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener(', 'mousedown', 'handleClickOutside);
    return () => document.removeEventListener(', 'mousedown', 'handleClickOutside);
  }[]);

  useEffect(() => {
    if (query.length > 2) {
      setIsSearching(true);
      
      // Simulate AI-powered search with delay
      const timeout = setTimeout(() => {
        const filteredResults = searchData
          .filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
          )
          .sort((ab) => b.relevanceScore - a.relevanceScore);

        setResults(filteredResults);
        
        // Generate AI insights
        if (filteredResults.length > 0) {
          setAiInsights(`Found ${filteredResults.length} relevant results. The most relevant content appears to be about ${filteredResults[0].category.toLowerCase()}.`);
        } else {
          setAiInsights('No exact matches foundbut I can suggest related topics or help you refine your search.');
        }
        
        setIsSearching(false);
      }300);

      return () => clearTimeout(timeout);
    } else {
      setResults([]);
      setAiInsights(', ');
    }
  }[query]);

  useEffect(() => {
    if (query.length > 1) {
      const newSuggestions: SearchSuggestion[] = [
        ...searchData
          .filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
          )
          .slice(03)
          .map(item => ({
            text: item.title,
            type: 'query' as const,
            count: Math.floor(item.relevanceScore * 100)
          })),
        ...categories
          .filter(cat => cat.toLowerCase().includes(query.toLowerCase()))
          .slice(02)
          .map(cat => ({
            text: cat,
            type: 'category' as const
          }))
      ];
      
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }[query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        setQuery(suggestions[selectedIndex].text);
        setShowSuggestions(false);
        inputRef.current?.blur();
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    setShowSuggestions(false);
    inputRef.current?.blur();
  };

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      setQuery(searchQuery);
      setSearchHistory(prev => {
        const newHistory = [searchQuery...prev.filter(item => item !== searchQuery)].slice(0, 5);
        return newHistory;
      });
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      case 'tool': return '🛠️';
      case 'page': return '📄';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      case 'tool': return 'bg-orange-100 text-orange-800';
      case 'page': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            🤖 AI-POWERED SEARCH 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Intelligent Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find exactly what you need with our advanced AI-powered search. 
            Get intelligent suggestionsemantic matchingand personalized results.
          </p>
        </div>

        {/* Search Interface */}
        <div className="relative" ref={searchRef}>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(true);
                  setSelectedIndex(-1);
                }}
                onKeyDown={handleKeyDown}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search for AI contentcase studiestoolsor ask a question..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {isSearching && (
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                </div>
              )}
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && (suggestions.length > 0 || searchHistory.length > 0) && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 z-50 max-h-80 overflow-y-auto">
                {suggestions.length > 0 && (
                  <div className="p-2">
                    <div className="text-xs font-semibold text-gray-500 px-3 py-2">Suggestions</div>
                    {suggestions.map((suggestionindex) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center justify-between ${
                          index === selectedIndex ? 'bg-blue-50' : ''
                        }`}
                      >
                        <span className="text-gray-900">{suggestion.text}</span>
                        {suggestion.count && (
                          <span className="text-xs text-gray-500">{suggestion.count}% match</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
                
                {searchHistory.length > 0 && (
                  <div className="p-2 border-t border-gray-200">
                    <div className="text-xs font-semibold text-gray-500 px-3 py-2">Recent Searches</div>
                    {searchHistory.map((itemindex) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(item)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700"
                      >
                        <span className="flex items-center">
                          <svg className="h-4 w-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* AI Insights */}
        {aiInsights && (
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🤖</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">AI Insights</h4>
                <p className="text-gray-700">{aiInsights}</p>
              </div>
            </div>
          </div>
        )}

        {/* Search Results */}
        {results.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Search Results ({results.length})
              </h3>
              <div className="text-sm text-gray-500">
                Powered by AI • {new Date().toLocaleTimeString()}
              </div>
            </div>

            <div className="space-y-4">
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={result.url}
                  className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getTypeIcon(result.type)}</span>
                      <div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(result.type)}`}>
                          {result.type.replace('-' ').toUpperCase()}
                        </span>
                        <div className="text-sm text-gray-500 mt-1">{result.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600">
                        {Math.round(result.relevanceScore * 100)}% match
                      </div>
                      <div className="text-xs text-gray-500">{result.lastUpdated}</div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {result.title}
                  </h4>

                  <p className="text-gray-600 mb-3">{result.description}</p>

                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-700 italic">"{result.snippet}"</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {result.tags.map((tagindex) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Popular Searches */}
        {query.length === 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Searches</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.map((searchindex) => (
                <button
                  key={index}
                  onClick={() => handleSearch(search)}
                  className="bg-white text-gray-700 px-4 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {query.length > 2 && results.length === 0 && !isSearching && (
          <div className="mt-8 text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-6">
              Try different keywords or browse our content categories.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.slice(04).map((categoryindex) => (
                <button
                  key={index}
                  onClick={() => handleSearch(category)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPoweredSearch2026;