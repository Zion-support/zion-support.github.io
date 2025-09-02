import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, X, Clock, TrendingUp, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export interface SearchFilter {
  category: string;
  priceRange: [number, number];
  rating: number;
  tags: string[];
}

export interface SearchSuggestion {
  id: string;
  text: string;
  type: 'service' | 'category' | 'feature';
  popularity?: number;
  trending?: boolean;
}

interface AdvancedSearchProps {
  suggestions?: SearchSuggestion[];
  onSearch?: (query: string, filters?: SearchFilter) => void;
  placeholder?: string;
  className?: string;
  showFilters?: boolean;
}

export const AdvancedSearch: React.FC<AdvancedSearchProps> = ({
  suggestions = [],
  onSearch,
  placeholder = "Search services, solutions, features...",
  className = "",
  showFilters = true
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SearchFilter>({
    category: '',
    priceRange: [0, 10000],
    rating: 0,
    tags: []
  });
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Filter suggestions based on query
  useEffect(() => {
    if (query.length > 0) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(query.toLowerCase())
      ).sort((a, b) => {
        // Prioritize trending and popular suggestions
        if (a.trending && !b.trending) return -1;
        if (!a.trending && b.trending) return 1;
        if (a.popularity && b.popularity) return b.popularity - a.popularity;
        return 0;
      });
      setFilteredSuggestions(filtered.slice(0, 8));
    } else {
      setFilteredSuggestions([]);
    }
  }, [query, suggestions]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string = query) => {
    if (searchQuery.trim()) {
      // Save to recent searches
      const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));

      // Navigate to search results
      const searchParams = new URLSearchParams();
      searchParams.set('q', searchQuery);
      if (selectedFilters.category) searchParams.set('category', selectedFilters.category);
      if (selectedFilters.rating > 0) searchParams.set('rating', selectedFilters.rating.toString());
      if (selectedFilters.tags.length > 0) searchParams.set('tags', selectedFilters.tags.join(','));

      navigate(`/search?${searchParams.toString()}`);
      
      // Call custom onSearch if provided
      if (onSearch) {
        onSearch(searchQuery, selectedFilters);
      }

      setIsOpen(false);
      setQuery('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    handleSearch(suggestion.text);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const removeRecentSearch = (search: string) => {
    const updated = recentSearches.filter(s => s !== search);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyPress}
          placeholder={placeholder}
          className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent bg-white/90 backdrop-blur-sm"
        />
        {showFilters && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <Filter className="h-5 w-5 text-gray-400 hover:text-zion-cyan transition-colors" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto">
          {/* Suggestions */}
          {filteredSuggestions.length > 0 && (
            <div className="p-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Suggestions
              </div>
              {filteredSuggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md flex items-center space-x-3 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-900">{suggestion.text}</span>
                      {suggestion.trending && (
                        <TrendingUp className="w-3 h-3 text-orange-500" />
                      )}
                      {suggestion.popularity && suggestion.popularity > 80 && (
                        <Star className="w-3 h-3 text-yellow-500" />
                      )}
                    </div>
                    <div className="text-xs text-gray-500 capitalize">
                      {suggestion.type}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Recent Searches */}
          {query.length === 0 && recentSearches.length > 0 && (
            <div className="p-2 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Recent Searches
                </div>
                <button
                  onClick={clearRecentSearches}
                  className="text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              </div>
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick({ id: index.toString(), text: search, type: 'service' })}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-sm text-gray-700">{search}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeRecentSearch(search);
                    }}
                    className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </button>
              ))}
            </div>
          )}

          {/* No Results */}
          {query.length > 0 && filteredSuggestions.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <p className="text-sm">No suggestions found for "{query}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;