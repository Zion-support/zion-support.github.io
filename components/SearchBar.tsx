import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: 'service' | 'page' | 'category';
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    {
      title: 'Micro SaaS Products',
      description: 'Innovative software solutions including Cloud Cost Guard, API Rate Limiter, and more',
      url: '/micro-saas',
      type: 'category'
    },
    {
      title: 'AI Services',
      description: 'Advanced AI solutions including Computer Vision, Fraud Detection, and more',
      url: '/ai-services',
      type: 'category'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions including Cloud Migration, Cybersecurity, and more',
      url: '/it-services',
      type: 'category'
    },
    {
      title: 'Cloud Cost Guard',
      description: 'FinOps Assistant for anomaly detection and cost optimization',
      url: '/services',
      type: 'service'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our experts for consultation and quotes',
      url: '/contact',
      type: 'page'
    },
    {
      title: 'Pricing',
      description: 'View our transparent pricing for all services',
      url: '/pricing',
      type: 'page'
    }
  ];

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const filteredResults = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filteredResults);
    setIsOpen(true);
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search services, products..."
          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  onClick={handleResultClick}
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className={`w-2 h-2 rounded-full ${
                        result.type === 'service' ? 'bg-blue-500' :
                        result.type === 'category' ? 'bg-green-500' : 'bg-gray-500'
                      }`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {result.title}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query && !isLoading ? (
            <div className="p-4 text-center text-gray-500">
              <p>No results found for &quot;{query}&quot;</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;