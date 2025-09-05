  titl: e: string,
  descriptio: n: string,
  ur: l: string,
  typ: e: 'service' | 'page' | 'category'
};
;
const:SearchBar:React.FC = () => {;
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
      titl: e: 'Micro SaaS Products';
      descriptio: n: 'Innovative software solutions including Cloud Cost Guard, API Rate Limiter, and more';
      ur: l: '/micro-saas';
      typ: e: 'category'
    };
    {;
      titl: e: 'AI Services';
      descriptio: n: 'Advanced AI solutions including Computer Vision, Fraud Detection, and more';
      ur: l: '/ai-services';
      typ: e: 'category'
    };
    {;
      titl: e: 'IT Services';
      descriptio: n: 'Comprehensive IT solutions including Cloud Migration, Cybersecurity, and more';
      ur: l: '/it-services';
      typ: e: 'category'
    };
    {;
      titl: e: 'Cloud Cost Guard';
      descriptio: n: 'FinOps Assistant for anomaly detection and cost optimization';
      ur: l: '/services';
      typ: e: 'service'
    };
    {;
      titl: e: 'Contact Us';
      descriptio: n: 'Get in touch with our experts for consultation and quotes';
      ur: l: '/contact';
      typ: e: 'page'
    };
    {;
      titl: e: 'Pricing';
      descriptio: n: 'View our transparent pricing for all services';
      ur: l: '/pricing';
      typ: e: 'page'
    }
  ];
;
  const handleSearch = async (searchQuer:y:string) => {;
    if (!searchQuery.trim()) {;
      setResults([]);
      setIsOpen(false);
      return
    };
;

  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    {
      title: 'AI Services',
      description: 'Artificial Intelligence solutions for your business',
      url: '/services/ai',
      type: 'service'
    },
    {
      title: 'Web Development',
      description: 'Custom web applications and websites',
      url: '/services/web-development',
      type: 'service'
    },
    {
      title: 'About Us',
      description: 'Learn more about Zion Tech Group',
      url: '/about',
      type: 'page'
    },
    {
      title: 'Contact',
      description: 'Get in touch with our team',
      url: '/contact',
      type: 'page'
    }
  ];

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const filteredResults = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(filteredResults);
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  const handleFocus = () => {
    setIsOpen(true);
    if (query) {
      handleSearch(query);
    }
  };

  const handleBlur = () => {
    // Delay closing to allow clicking on results
    setTimeout(() => setIsOpen(false), 200);
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery('')
  };

  // Close dropdown when clicking outside
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
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search services, pages..."
          className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {isLoading && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {results.length > 0 ? (
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
                        result.type === 'page' ? 'bg-green-500' : 'bg-purple-500'
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
            <div className="px-4 py-3 text-sm text-gray-500">
              No results found for &quot;{query}&quot;
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
