"use client";
'use client';

import React{ useStateuseEffectuseRef } from 'react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'content' | 'service' | 'blog' | 'documentation' | 'faq';
  category: string;
  relevanceScore: number;
  lastModified: string;
  tags: string[];
  url: string;
}

interface SearchSuggestion {
  id: string;
  text: string;
  type: 'suggestion' | 'recent' | 'trending';
  count?: number;
}

const IntelligentSearchEngine: React.FC = () => {
  const [querysetQuery] = useState('');
  const [resultsetResults] = useState<SearchResult[]>([]);
  const [suggestionsetSuggestions] = useState<SearchSuggestion[]>([]);
  const [isLoadingsetIsLoading] = useState(false);
  const [showSuggestionsetShowSuggestions] = useState(false);
  const [searchHistorysetSearchHistory] = useState<string[]>([]);
  const [filtersetFilters] = useState({
    type: 'all' as 'all' | 'content' | 'service' | 'blog' | 'documentation' | 'faq',
    category: 'all' as string | 'all'
  });
  const searchRef = useRef<HTMLInputElement>(null);

  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI-Powered Business Automation Solutions 2025',
      description: 'Comprehensive guide to implementing AI automation in your business processesincluding case studies and best practices.',
      type: 'content',
      category: 'AI & Automation',
      relevanceScore: 95,
      lastModified: '2025-01-13',
      tags: ['AI', 'Automation', 'Business', '2025'],
      url: '/content/ai-business-automation-2025'
    },
    {
      id: '2',
      title: 'Machine Learning Implementation Services',
      description: 'Professional machine learning services to help you build and deploy intelligent systems for your organization.',
      type: 'service',
      category: 'AI Services',
      relevanceScore: 88,
      lastModified: '2025-01-12',
      tags: ['Machine 'Learning', 'AI 'Services', 'Implementation'],
      url: '/services/machine-learning-implementation'
    },
    {
      id: '3',
      title: 'Getting Started with Quantum Computing',
      description: 'Learn the fundamentals of quantum computing and how it can revolutionize your computational capabilities.',
      type: 'blog',
      category: 'Technology',
      relevanceScore: 82,
      lastModified: '2025-01-11',
      tags: ['Quantum 'Computing', 'Technology'Tutorial'],
      url: '/blog/quantum-computing-basics'
    },
    {
      id: '4',
      title: 'API Documentation - AI Services',
      description: 'Complete API documentation for integrating our AI services into your applications.',
      type: 'documentation',
      category: 'API',
      relevanceScore: 75,
      lastModified: '2025-01-10',
      tags: [', 'API', 'Documentation'Integration'],
      url: '/docs/api-ai-services'
    },
    {
      id: '5',
      title: 'How do I integrate AI services into my application?',
      description: 'Step-by-step guide for integrating our AI services with common programming languages and frameworks.',
      type: 'faq',
      category: 'Integration',
      relevanceScore: 90,
      lastModified: '2025-01-09',
      tags: [', 'FAQ', 'Integration'AI Services'],
      url: '/faq/ai-integration'
    }
  ];

  const mockSuggestions: SearchSuggestion[] = [
    { id: '1'text: 'AI 'automation', 'type: ''trending', 'count: 1250 },
    { id: '2'text: 'machine learning 'services', 'type: ''trending', 'count: 980 },
    { id: '3'text: 'quantum 'computing', 'type: ''trending', 'count: 756 },
    { id: '4'text: 'API 'integration', 'type: ''suggestion', 'count: 432 },
    { id: '5'text: 'business 'automation', 'type: 'recent' },
    { id: '6'text: 'AI implementation 'guide', 'type: 'recent' }
  ];

  const categories = ['AI & 'Automation', 'AI 'Services', 'Technology', 'API', 'Integration', 'Blockchain', 'IoT'Cybersecurity'];

  useEffect(() => {
    // Load search history from localStorage
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }[]);

  useEffect(() => {
    if (query.length > 2) {
      generateSuggestions();
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }[query]);

  const generateSuggestions = () => {
    const filteredSuggestions = mockSuggestions.filter(suggestion =>
      suggestion.text.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSearch = async (searchQuery: string = query) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setShowSuggestions(false);

    // Add to search history
    const newHistory = [searchQuery...searchHistory.filter(item => item !== searchQuery)].slice(010);
    setSearchHistory(newHistory);
    localStorage.setItem(', 'searchHistory', 'JSON.stringify(newHistory));

    // Simulate AI-powered search
    await new Promise(resolve => setTimeout(resolve800));

    let filteredResults = mockResults;

    // Apply type filter
    if (filters.type !== 'all') {
      filteredResults = filteredResults.filter(result => result.type === filters.type);
    }

    // Apply category filter
    if (filters.category !== 'all') {
      filteredResults = filteredResults.filter(result => result.category === filters.category);
    }

    // Simulate relevance scoring based on query
    filteredResults = filteredResults.map(result => ({
      ...result,
      relevanceScore: Math.max(60result.relevanceScore - Math.random() * 20)
    }));

    // Sort by relevance
    filteredResults.sort((ab) => b.relevanceScore - a.relevanceScore);

    setResults(filteredResults);
    setIsLoading(false);
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    handleSearch(suggestion.text);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'content': return '📄';
      case 'service': return '🔧';
      case 'blog': return '📝';
      case 'documentation': return '📚';
      case 'faq': return '❓';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'content': return 'bg-blue-100 text-blue-800';
      case 'service': return 'bg-green-100 text-green-800';
      case 'blog': return 'bg-purple-100 text-purple-800';
      case 'documentation': return 'bg-orange-100 text-orange-800';
      case 'faq': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRelevanceColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          🔍 Intelligent Search Engine
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Powered by advanced AI algorithms to find exactly what 'you', 're looking for across our entire knowledge base.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative mb-8">
        <div className="relative">
          <input
            ref={searchRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => query.length > 2 && setShowSuggestions(true)}
            placeholder="Search for contentservicesdocumentation..."
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors duration-200"
          />
          <button
            onClick={() => handleSearch()}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-200"
          >
            Search
          </button>
        </div>

        {/* Search Suggestions */}
        {showSuggestions && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg mt-2 z-10 max-h-80 overflow-y-auto">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between border-b border-gray-100 last:border-b-0"
              >
                <span className="text-gray-900">{suggestion.text}</span>
                <div className="flex items-center space-x-2">
                  {suggestion.type === 'trending' && <span className="text-xs text-orange-600">🔥</span>}
                  {suggestion.type === 'recent' && <span className="text-xs text-blue-600">🕒</span>}
                  {suggestion.count && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {suggestion.count}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Search History */}
      {searchHistory.length > 0 && !showSuggestions && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Searches</h3>
          <div className="flex flex-wrap gap-2">
            {searchHistory.slice(0, 5).map((itemindex) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(item);
                  handleSearch(item);
                }}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          value={filters.type}
          onChange={(e) => setFilters(prev => ({ ...prevtype: e.target.value as any }))}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        >
          <option value="all">All Types</option>
          <option value="content">Content</option>
          <option value="service">Services</option>
          <option value="blog">Blog</option>
          <option value="documentation">Documentation</option>
          <option value="faq">FAQ</option>
        </select>

        <select
          value={filters.category}
          onChange={(e) => setFilters(prev => ({ ...prevcategory: e.target.value }))}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Search Results */}
      {isLoading ? (
        <div className="space-y-4">
          {[12345].map(i => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
              <div className="flex space-x-2">
                <div className="h-6 bg-gray-200 rounded w-16"></div>
                <div className="h-6 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          ))}
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Search Results ({results.length})
            </h3>
            <div className="text-sm text-gray-500">
              Sorted by relevance
            </div>
          </div>

          {results.map((result) => (
            <div key={result.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getTypeIcon(result.type)}</span>
                  <h4 className="text-xl font-semibold text-gray-900">{result.title}</h4>
                </div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                  {result.type}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{result.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    📁 {result.category}
                  </span>
                  <span className={`text-sm font-medium ${getRelevanceColor(result.relevanceScore)}`}>
                    {result.relevanceScore}% relevant
                  </span>
                  <span className="text-sm text-gray-500">
                    📅 {new Date(result.lastModified).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {result.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700">
                      #{tag}
                    </span>
                  ))}
                </div>
                <a
                  href={result.url}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : query && !isLoading ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">No results found</h4>
          <p className="text-gray-600 mb-6">Try adjusting your search terms or filters.</p>
          <button
            onClick={() => setQuery(', ')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🚀</div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Start searching</h4>
          <p className="text-gray-600">Enter a search term to find relevant content across our platform.</p>
        </div>
      )}

      {/* Search Tips */}
      <div className="mt-12 bg-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Search Tips</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">🎯 Use specific keywords</h4>
            <p className="text-gray-600 text-sm">Be specific with your search terms for better results.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">🔍 Try different terms</h4>
            <p className="text-gray-600 text-sm">If you 'don', 't find what 'you', 're looking fortry synonyms or related terms.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">📊 Use filters</h4>
            <p className="text-gray-600 text-sm">Filter by type and category to narrow down your results.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelligentSearchEngine;