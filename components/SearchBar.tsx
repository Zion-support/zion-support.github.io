import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(true)}
          placeholder="Search services, products, or pages..."
          className="w-full md:w-80 px-4 py-2 pl-10 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          aria-label="Search"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          role="combobox"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {isLoading && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-600 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div role="listbox" aria-label="Search results">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  onClick={handleResultClick}
                  className="block px-4 py-3 hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-b-0"
                  role="option"
                  aria-selected="false"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      result.type === 'service' ? 'bg-blue-500' :
                      result.type === 'category' ? 'bg-purple-500' : 'bg-green-500'
                    }`} />
                    <div>
                      <h3 className="font-semibold text-white">{result.title}</h3>
                      <p className="text-sm text-slate-300 mt-1">{result.description}</p>
                      <span className="text-xs text-slate-400 capitalize">{result.type}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query && !isLoading ? (
            <div className="px-4 py-8 text-center text-slate-400">
              <p>No results found for &quot;{query}&quot;</p>
              <p className="text-sm mt-1">Try different keywords or browse our services</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
export default SearchBar;