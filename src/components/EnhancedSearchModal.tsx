import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Clock, TrendingUp, Star } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  type: 'page' | 'service' | 'blog' | 'documentation';
  popularity?: number;
  lastModified?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'AI Analytics Dashboard',
    description: 'AI-powered business intelligence and analytics platform with real-time insights and predictive modeling.',
    url: '/ai-analytics-dashboard',
    category: 'Micro SAAS',
    type: 'service',
    popularity: 95,
    lastModified: '2024-01-15'
  },
  {
    id: '2',
    title: 'AI Workflow Automation',
    description: 'Visual workflow builder with AI-powered process optimization and automation capabilities.',
    url: '/ai-workflow-automation',
    category: 'AI Services',
    type: 'service',
    popularity: 88,
    lastModified: '2024-01-10'
  },
  {
    id: '3',
    title: 'Quantum Computing Solutions',
    description: 'Advanced quantum computing infrastructure and algorithms for complex problem solving.',
    url: '/ai-quantum-computing',
    category: 'AI Services',
    type: 'service',
    popularity: 92,
    lastModified: '2024-01-12'
  },
  {
    id: '4',
    title: 'About Zion Tech Group',
    description: 'Learn about our mission, team, and commitment to advancing AI and IT solutions.',
    url: '/about',
    category: 'Company',
    type: 'page',
    popularity: 75,
    lastModified: '2024-01-08'
  },
  {
    id: '5',
    title: 'AI Healthcare Solutions',
    description: 'Comprehensive AI-powered healthcare solutions for diagnosis, treatment, and patient care.',
    url: '/ai-healthcare',
    category: 'AI Services',
    type: 'service',
    popularity: 90,
    lastModified: '2024-01-14'
  },
  {
    id: '6',
    title: 'Getting Started Guide',
    description: 'Complete guide to getting started with Zion Tech Group services and solutions.',
    url: '/docs/getting-started',
    category: 'Documentation',
    type: 'documentation',
    popularity: 80,
    lastModified: '2024-01-05'
  }
];

const recentSearches = [
  'AI Analytics',
  'Quantum Computing',
  'Workflow Automation',
  'Healthcare AI'
];

const popularSearches = [
  'AI Dashboard',
  'Machine Learning',
  'Cloud Migration',
  'Cybersecurity',
  'Data Analytics'
];

const EnhancedSearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault();
        handleResultClick(results[selectedIndex]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  const searchResults = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setShowSuggestions(true);
      return;
    }

    setIsSearching(true);
    setShowSuggestions(false);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const filteredResults = mockSearchResults.filter(result =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort by popularity and relevance
    const sortedResults = filteredResults.sort((a, b) => {
      const aRelevance = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ? 2 : 1;
      const bRelevance = b.title.toLowerCase().includes(searchQuery.toLowerCase()) ? 2 : 1;
      return (b.popularity || 0) * bRelevance - (a.popularity || 0) * aRelevance;
    });

    setResults(sortedResults);
    setSelectedIndex(-1);
    setIsSearching(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    searchResults(value);
  };

  const handleResultClick = (result: SearchResult) => {
    window.location.href = result.url;
    onClose();
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    searchResults(suggestion);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return '🧠';
      case 'Micro SAAS':
        return '⚡';
      case 'IT Services':
        return '☁️';
      case 'Company':
        return '🏢';
      case 'Documentation':
        return '📚';
      default:
        return '🔍';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service':
        return 'text-cyan-400';
      case 'page':
        return 'text-purple-400';
      case 'blog':
        return 'text-pink-400';
      case 'documentation':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto"></div>
      <div className="flex min-h-screen items-start justify-center p-4 pt-16">
        {/* Backdrop */}</div>
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Modal */}</div>
        <div className="relative w-full max-w-2xl bg-slate-900/95 backdrop-blur-md rounded-xl border border-cyan-400/20 shadow-2xl">
          {/* Search Input */}</div>
          <div className="flex items-center p-4 border-b border-cyan-400/20"></div>
            <Search className="w-5 h-5 text-cyan-400 mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search services, documentation, and more..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
            />
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="max-h-96 overflow-y-auto">
            {query === '' && showSuggestions ? (
              /* Suggestions */</div>
              <div className="p-4"></div>
                <div className="mb-6"></div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center"></h3>
                    <Clock className="w-4 h-4 mr-2" />
                    Recent Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (</div>
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(search)}
                        className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>

                <div></div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center"></h3>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Popular Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (</div>
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(search)}
                        className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : isSearching ? (
              /* Loading */
              <div className="p-8 text-center"></div>
                <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              /* Results */
              <div className="p-2">
                {results.map((result, index) => (</div>
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      index === selectedIndex
                        ? 'bg-cyan-400/20 text-cyan-400'
                        : 'hover:bg-slate-800/50 text-gray-300'
                    }`}
                  >
                    <div className="flex items-start space-x-3"></div>
                      <div className="text-2xl">{getCategoryIcon(result.category)}</div>
                      <div className="flex-1 min-w-0"></div>
                        <div className="flex items-center space-x-2 mb-1"></div>
                          <h4 className="font-medium text-white truncate">{result.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded ${getTypeColor(result.type)} bg-slate-800`}>
                            {result.type}
                          </span>
                          {result.popularity && result.popularity > 85 && (
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          )}
                        </div>
                        <p className="text-sm text-gray-400 line-clamp-2">{result.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500"></div>
                          <span>{result.category}</span>
                          {result.lastModified && (
                            <span>Updated {new Date(result.lastModified).toLocaleDateString()}</span>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </div>
                  </button>
                ))}
              </div>
            ) : query && !isSearching ? (
              /* No Results */
              <div className="p-8 text-center"></div>
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-medium text-white mb-2">No results found</h3>
                <p className="text-gray-400 mb-4">
                  Try searching for something else or check the spelling of your search term.
                </p>
                <div className="text-sm text-gray-500">
                  Popular searches: AI Analytics, Quantum Computing, Workflow Automation
                </div>
              </div>
            ) : null}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-cyan-400/20 bg-slate-800/50"></div>
            <div className="flex items-center justify-between text-xs text-gray-400"></div>
              <div className="flex items-center space-x-4"></div>
                <span>Press</span> <kbd className="px-1 py-0.5 bg-slate-700 rounded">↑↓</kbd> to navigate</span>
                <span>Press</span> <kbd className="px-1 py-0.5 bg-slate-700 rounded">Enter</kbd> to select</span>
              </div>
              <span>Press</span> <kbd className="px-1 py-0.5 bg-slate-700 rounded">Esc</kbd> to close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSearchModal;