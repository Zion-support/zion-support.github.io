'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Clock, Star } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'article';
  score?: number;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch?: (query: string) => void;
  results?: SearchResult[];
  loading?: boolean;
}

const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSearch,
  results = [],
  loading = false
}) => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const saved = localStorage.getItem('recent-searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      const newRecent = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
      setRecentSearches(newRecent);
      localStorage.setItem('recent-searches', JSON.stringify(newRecent));
      
      if (onSearch) {
        onSearch(searchQuery);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleRecentClick = (recentQuery: string) => {
    setQuery(recentQuery);
    handleSearch(recentQuery);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Search</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for services, articles, or pages..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </form>
        </div>

        <div className="overflow-y-auto max-h-96">
          {loading ? (
            <div className="p-6 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="p-4">
              {results.map((result) => (
                <a
                  key={result.id}
                  href={result.url}
                  className="block p-4 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{result.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{result.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span className="capitalize">{result.type}</span>
                        {result.score && (
                          <div className="flex items-center">
                            <Star className="h-3 w-3 mr-1" />
                            {result.score}
                          </div>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                </a>
              ))}
            </div>
          ) : query ? (
            <div className="p-6 text-center">
              <p className="text-gray-600">No results found for &ldquo;{query}&rdquo;</p>
            </div>
          ) : recentSearches.length > 0 ? (
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Recent Searches
              </h3>
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleRecentClick(search)}
                  className="w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-gray-600">Start typing to search...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;