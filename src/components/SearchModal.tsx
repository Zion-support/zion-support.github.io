import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Clock, Star, MapPin, DollarSign } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
id: string;
  type: 'service' | 'talent' | 'equipment' | 'page';
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  rating?: number;
  price?: string;
  location?: string;
}

interface SearchModalProps {
isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC < SearchModalProps> = ({ isOpen, onClose })  => {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState < SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [recentSearches, setRecentSearches] = useState < string[]>([]);
  const searchInputRef = useRef < HTMLInputElement>(null);

  const mockSearchResults: SearchResult[] = [
    {
      id: '1',
      type: 'service',
      title: 'AI-Powered IT Solutions',
      description: 'Comprehensive AI-driven IT infrastructure and consulting services',
      url: '/services/ai-it-solutions',
      category: 'IT Services',
      tags: ['AI', 'IT', 'Infrastructure', 'Consulting'],
      rating: 4.8,
      price: 'Starting at $5,000'
    
},
    {
      id: '2',
      type: 'talent',
      title: 'Senior AI Engineer',
      description: 'Experienced AI engineer with 8+ years in machine learning and deep learning',
      url: '/talent/ai-engineer-001',
      category: 'Engineering',
      tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
      rating: 4.9,
      location: 'San Francisco, CA'
    },
    {
      id: '3',
      type: 'equipment',
      title: 'High-Performance GPU Server',
      description: 'Enterprise-grade GPU server for AI/ML workloads',
      url: '/equipment/gpu-server-001',
      category: 'Hardware',
      tags: ['GPU', 'Server', 'AI', 'ML'],
      price: '$15,000'
    },
    {
      id: '4',
      type: 'page',
      title: 'Cybersecurity Services',
      description: 'Comprehensive cybersecurity solutions for enterprise protection',
      url: '/services/cybersecurity',
      category: 'Security',
      tags: ['Security', 'Cybersecurity', 'Enterprise', 'Protection']
    }
  ];

  useEffect(()  => {

    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    
}
  }, [isOpen]);

  useEffect(()  => {

    if (query.length > 2) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const filteredResults = mockSearchResults.filter(result =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase()) ||
          result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
        setResults(filteredResults);
        setIsLoading(false);
      
}, 300);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (searchQuery: string)  => {

    setQuery(searchQuery);
    if (searchQuery && !recentSearches.includes(searchQuery)) {
      setRecentSearches(prev => [searchQuery, ...prev.slice(0, 4)]);
    
}
  };

  const handleResultClick = (result: SearchResult)  => {

    onClose();
    // Navigate to result URL
  
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-start justify-center min-h-screen pt-16 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Search</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search services, talent, equipment..."
              />
            </div>

            {query.length > 0 && (
              <div className="mt-4">
                <div className="flex space-x-2 mb-4">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilter === 'all'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveFilter('service')}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilter === 'service'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    Services
                  </button>
                  <button
                    onClick={() => setActiveFilter('talent')}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilter === 'talent'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    Talent
                  </button>
                </div>

                {isLoading ? (
                  <div className="text-center py-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  </div>
                ) : results.length > 0 ? (
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {results
                      .filter(result => activeFilter === 'all' || result.type === activeFilter)
                      .map((result) => (
                        <div
                          key={result.id}
                          onClick={() => handleResultClick(result)}
                          className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-gray-900">{result.title}</h4>
                              <p className="text-sm text-gray-500 mt-1">{result.description}</p>
                              <div className="flex items-center mt-2 space-x-4">
                                <span className="text-xs text-gray-400">{result.category}</span>
                                {result.rating && (
                                  <div className="flex items-center">
                                    <Star className="h-3 w-3 text-yellow-400" />
                                    <span className="text-xs text-gray-400 ml-1">{result.rating}</span>
                                  </div>
                                )}
                                {result.price && (
                                  <div className="flex items-center">
                                    <DollarSign className="h-3 w-3 text-green-500" />
                                    <span className="text-xs text-gray-400 ml-1">{result.price}</span>
                                  </div>
                                )}
                                {result.location && (
                                  <div className="flex items-center">
                                    <MapPin className="h-3 w-3 text-blue-500" />
                                    <span className="text-xs text-gray-400 ml-1">{result.location}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-gray-500">
                    No results found for "{query}"
                  </div>
                )}
              </div>
            )}

            {query.length === 0 && recentSearches.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Recent Searches</h4>
                <div className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                    >
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;