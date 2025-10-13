import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Search, X, ArrowRight, Clock, TrendingUp } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  type: 'page' | 'service' | 'blog' | 'documentation';
}

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
  showSuggestions?: boolean;
  maxSuggestions?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  className = "",
  placeholder = "Search services, solutions, and more...",
  onSearch,
  showSuggestions = true,
  maxSuggestions = 5,
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [trendingSearches] = useState([
    "AI Analytics",
    "Cloud Migration",
    "Cybersecurity",
    "Micro SAAS",
    "5G Solutions"
  ]);

  // Mock search results - in a real app, this would come from an API
  const searchResults: SearchResult[] = useMemo(() => [
    {
      id: "1",
      title: "AI Analytics Dashboard",
      description: "Advanced AI-powered analytics platform for business intelligence",
      url: "/ai-analytics",
      category: "AI Services",
      type: "service"
    },
    {
      id: "2", 
      title: "Cloud Infrastructure Solutions",
      description: "Scalable cloud infrastructure and migration services",
      url: "/cloud-infrastructure",
      category: "IT Services",
      type: "service"
    },
    {
      id: "3",
      title: "Zion Analytics Pro",
      description: "Ready-to-use analytics micro SAAS solution",
      url: "/zion-analytics-pro",
      category: "Micro SAAS",
      type: "service"
    },
    {
      id: "4",
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity protection and monitoring",
      url: "/cybersecurity-solutions",
      category: "IT Services",
      type: "service"
    },
    {
      id: "5",
      title: "About Zion Tech Group",
      description: "Learn about our company, mission, and team",
      url: "/about",
      category: "Company",
      type: "page"
    }
  ], []);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    
    return searchResults
      .filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase()) ||
        result.category.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, maxSuggestions);
  }, [query, searchResults, maxSuggestions]);

  const handleSearch = useCallback((searchQuery: string) => {
    if (searchQuery.trim()) {
      setRecentSearches(prev => {
        const newSearches = [searchQuery, ...prev.filter(s => s !== searchQuery)];
        return newSearches.slice(0, 5);
      });
      onSearch?.(searchQuery);
      setIsOpen(false);
    }
  }, [onSearch]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(query);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, [query, handleSearch]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(e.target.value.length > 0);
  }, []);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to parse recent searches:', error);
      }
    }
  }, []);

  // Save recent searches to localStorage
  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
          </button>
        )}
      </div>

      {/* Search Suggestions Dropdown */}
      {isOpen && showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-cyan-500/20 z-50 max-h-96 overflow-y-auto">
          {query ? (
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                  Search Results
                </h3>
                <span className="text-xs text-gray-400">
                  {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              {filteredResults.length > 0 ? (
                <div className="space-y-2">
                  {filteredResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleSearch(result.title)}
                      className="w-full text-left p-3 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                            {result.title}
                          </div>
                          <div className="text-sm text-gray-300 mt-1">
                            {result.description}
                          </div>
                          <div className="text-xs text-cyan-400 mt-1">
                            {result.category}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors ml-2 flex-shrink-0" />
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-400">No results found for "{query}"</p>
                  <p className="text-sm text-gray-500 mt-1">Try different keywords</p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      Recent Searches
                    </h3>
                  </div>
                  <div className="space-y-1">
                    {recentSearches.slice(0, 3).map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(search)}
                        className="w-full text-left p-2 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 text-sm"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Trending Searches */}
              <div>
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-4 h-4 text-gray-400 mr-2" />
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Trending Searches
                  </h3>
                </div>
                <div className="space-y-1">
                  {trendingSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="w-full text-left p-2 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 text-sm"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
