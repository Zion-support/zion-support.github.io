import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
ursor/automate-test-improve-and-merge-code-646c;
interface SearchResult  {title: string, description: string;
  url: string, type: 'service' | 'page' | 'category';
import React, { useState } from 'react';
import { Search, X  } from 'lucide-react';
interface SearchResult  {title: string;

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: 'service' | 'page' | 'category';
}
const SearchBar: React.FC = () => {interface SearchResult  {title: string, description: string,url: string, type: 'service' | 'page' | 'category'}const SearchBar: React.FC = () => {const [query, setQuery] = useState('')const [results, setResults] = useState<SearchResult[]>([])const [isOpen, setIsOpen] = useState(false)const [isLoading, setIsLoading] = useState(false)const searchRef = useRef<HTMLDivElement>(null)const inputRef  = useRef<HTMLInputElement>(null)// Mock search data - in a real app, this would come from an API;
  const searchData: SearchResult[] = [;
    {title: 'Micro SaaS Products',description: 'Innovative software solutions including Cloud Cost Guard, API Rate Limiter, and more',url: '/micro-saas',type: 'category';
    },{title: 'AI Services',description: 'Advanced AI solutions including Computer Vision, Fraud Detection, and more',url: '/ai-services',type: 'category';
    },{title: 'IT Services',description: 'Comprehensive IT solutions including Cloud Migration, Cybersecurity, and more',url: '/it-services',type: 'category';
    },{title: 'Cloud Cost Guard',description: 'FinOps Assistant for anomaly detection and cost optimization',url: '/services',type: 'service';
    },{title: 'Contact Us',description: 'Get in touch with our experts for consultation and quotes',url: '/contact',type: 'page';
    },{title: 'Pricing',description: 'View our transparent pricing for all services',url: '/pricing',type: 'page';

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
  ];const handleSearch = async (searchQuery: string) => {if (!searchQuery.trim()) {setResults([])setIsOpen(false)return;
    }setIsLoading(true)// Simulate API delay;
    await new Promise(resolve => setTimeout(resolve, 300))const filteredResults = searchData.filter(item =>;
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      item.description.toLowerCase().includes(searchQuery.toLowerCase()))setResults(filteredResults)setIsOpen(true)setIsLoading(false)}const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {const value = e.target.value;
    setQuery(value)handleSearch(value)}const handleResultClick = () => {setIsOpen(false)setQuery('')}const handleKeyDown = (e: React.KeyboardEvent) => {if (e.key === 'Escape') {setIsOpen(false)inputRef.current?.blur()}
  }useEffect(() => {const handleClickOutside = (event: MouseEvent) => {if (searchRef.current && !searchRef.current.contains(event.target as Node)) {setIsOpen(false)}
    }document.addEventListener('mousedown', handleClickOutside)return () => document.removeEventListener('mousedown', handleClickOutside)}, [])return (<div ref={searchRef} className="relative w-full max-w-md">;
      <div className="relative">;
        <input;
          ref={inputRef}
          type="text";
          placeholder="Search services, solutions...";
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
        />;
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">;
          <svg;
            className="w-5 h-5 text-gray-400";
            fill="none";
            stroke="currentColor";
            viewBox="0 0 24 24";
          >;
            <path;
              strokeLinecap="round";
              strokeLinejoin="round";
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z";
            />;
          </svg>;
        </div>;
        {isLoading && (<div className="absolute inset-y-0 right-0 flex items-center pr-3">;
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>;
          </div>;
        )}
      </div>;
      {/* Search Results */}
      {isOpen && (<div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">;
          {results.length > 0 ? (<div className="py-2">;
              {results.map((result, index) => (<Link;
                  key={index}
                  href={result.url}
                  onClick={handleResultClick}
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors";
                >;
                  <div className="flex items-start space-x-3">;
                    <div className="flex-shrink-0">;
                      <div className={`w-2 h-2 rounded-full ${result.type === 'service' ? 'bg-blue-500' :;
                        result.type === 'page' ? 'bg-green-500' : 'bg-purple-500';
                      }`}></div>;
                    </div>;
                    <div className="flex-1 min-w-0">;
                      <p className="text-sm font-medium text-gray-900 truncate">;
                        {result.title}
                      </p>;
                      <p className="text-sm text-gray-500 truncate">;
                        {result.description}
                      </p>;
                    </div>;
                  </div>;
                </Link>;
              ))}
            </div>;
          ) : query && !isLoading ? (<div className="px-4 py-3 text-sm text-gray-500">;
              No results found for &quot;{query}&quot;
            </div>;
          ) : null}
        </div>;
      )}
    </div>;
  )}export default SearchBar;
interface SearchResult  {title: string, description: string;
  url: string, type: 'service' | 'page' | 'category';
import { useState, useEffect, useCallback, useMemo  } from 'react';
interface SearchBarProps  {onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;}const SearchBar: React.FC<SearchBarProps> = ({onSearch,placeholder = 'Search...',className = '';
}) => {const [query, setQuery]  = useState('')const handleSubmit = (e: React.FormEvent) => {e.preventDefault()if (onSearch && query.trim()) {onSearch(query.trim())}
    {title: 'Contact Us';
      description: 'Get in touch with our experts for consultation and quotes';
      url: '/contact';
      type: 'page';
    }
    {title: 'Pricing';
      description: 'View our transparent pricing for all services';
      url: '/pricing';
      type: 'page';
    }
  ];
    )setResults(filteredResults)setIsOpen(true)setIsLoading(false)}const handleClear = () => {setQuery('')}return (<div className={'relative ' + className}>;
      <form onSubmit={handleSubmit} className="relative">;
        <div className="relative">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />;
          <input;
            type="text";
    </div>
  );
};

export default SearchBar;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search...',
  className = ''
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
    {
      title: 'Contact Us'
      description: 'Get in touch with our experts for consultation and quotes'
      url: '/contact'
      type: 'page'
    }
    {
      title: 'Pricing'
      description: 'View our transparent pricing for all services'
      url: '/pricing'
      type: 'page'
    }
  ];
    );
    setResults(filteredResults);
    setIsOpen(true);
    setIsLoading(false);
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className={'relative ' + className}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {}}
            placeholder={placeholder}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
          />;
          {query && (<button;
              type="button";
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600";
  const [results, setResults] = useState<SearchResult[]>([])const [isOpen, setIsOpen] = useState(false)const [selectedIndex, setSelectedIndex]  = useState(-1)const filteredResults = useMemo(() => {if (query.length <= 2) return [];return searchData.filter(item =>;
      item.title.toLowerCase().includes(query.toLowerCase()) ||;
      item.description.toLowerCase().includes(query.toLowerCase()) ||;
      item.category.toLowerCase().includes(query.toLowerCase()))}, [query])useEffect(() => {if (filteredResults.length > 0) {setResults(filteredResults)setIsOpen(true)setSelectedIndex(-1)} else {setResults([])setIsOpen(false)setSelectedIndex(-1)}
  }, [filteredResults])const handleResultClick = useCallback(() => {setQuery('')setResults([])setIsOpen(false)setSelectedIndex(-1)}, [])const handleKeyDown = useCallback((e: React.KeyboardEvent) => {if (!isOpen || results.length === 0) return;switch (e.key) {case 'ArrowDown':;
        e.preventDefault()setSelectedIndex(prev => (prev + 1) % results.length)break;
      case 'ArrowUp':;
        e.preventDefault()setSelectedIndex(prev => prev <= 0 ? results.length - 1 : prev - 1)break;
      case 'Enter':;
        e.preventDefault()if (selectedIndex >= 0 && selectedIndex < results.length) {window.location.href = results[selectedIndex].url;
          handleResultClick()}
        break;
      case 'Escape':;
        setIsOpen(false)setSelectedIndex(-1)break;
    }
  }, [isOpen, results, selectedIndex, handleResultClick])}return (<div className="relative w-full max-w-md">;
      <div className="relative">;
        <input;
          type="text";
          placeholder="Search services...";
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 pl-10 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
          aria-label="Search for services and solutions";
          aria-expanded={isOpen}
          aria-haspopup="listbox";
          role="combobox";
          autoComplete="off";
        />;
        <svg;
          className="absolute left-3 top-2.5 h-5 w-5 text-slate-400";
          fill="none";
          stroke="currentColor";
          viewBox="0 0 24 24";
        >;
          <path;
            strokeLinecap="round";
            strokeLinejoin="round";
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z";
          />;
        </svg>;
      </div>;
      {isOpen && results.length > 0 && (<div;
          className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-white/20 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto";
          role="listbox";
          aria-label="Search results";
        >;
          {results.map((result, index) => (<Link;
              key={index}
              href={result.url}
              onClick={handleResultClick}
              className={`block px-4 py-3 transition-colors border-b border-white/10 last:border-b-0 ${index === selectedIndex;
                  ? 'bg-blue-600/30 ring-2 ring-blue-500';
                  : 'hover:bg-slate-700/50';
              }`}
              role="option";
              aria-selected={index === selectedIndex}
              tabIndex={-1}>;
              <X className="w-4 h-4" />;
            </button>;
          )}
        </div>;
      </form>;
    </div>;
  )}export default SearchBar;ursor/automate-test-improve-and-merge-code-646c;
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
