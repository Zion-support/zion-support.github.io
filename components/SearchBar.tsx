import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

const searchData: SearchResult[] = [
  {
    title: "Micro SaaS Products",
    description: "120+ innovative micro SaaS solutions including Cloud Cost Guard, Smart Invoice Processing, and AI-Powered Code Review",
    url: "/micro-saas",
    category: "Services"
  },
  {
    title: "AI Services",
    description: "80+ advanced AI services including healthcare diagnostics, cybersecurity threat detection, and smart manufacturing",
    url: "/ai-services",
    category: "Services"
  },
  {
    title: "IT Services",
    description: "80+ comprehensive IT solutions including enterprise integration, high-performance computing, and IoT platforms",
    url: "/it-services",
    category: "Services"
  },
  {
    title: "All Services",
    description: "Complete overview of all our 280+ innovative technology solutions and services",
    url: "/services",
    category: "Services"
  },
  {
    title: "Services Catalog",
    description: "Detailed catalog of all our micro SaaS products, AI services, and IT solutions",
    url: "/services-catalog",
    category: "Services"
  },
  {
    title: "Pricing",
    description: "Transparent pricing for all our services and solutions",
    url: "/pricing",
    category: "Business"
  },
  {
    title: "About Us",
    description: "Learn about Zion Tech Group's mission, vision, and team",
    url: "/about",
    category: "Company"
  },
  {
    title: "Contact Us",
    description: "Get in touch with our experts for project discussions and quotes",
    url: "/contact",
    category: "Support"
  },
  {
    title: "FAQ",
    description: "Frequently asked questions about our services and solutions",
    url: "/faq",
    category: "Support"
  }
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

<<<<<<< HEAD
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

=======
>>>>>>> 6e2972c748c24164ca3bd0b0a8c10c476a626932
  const handleResultClick = () => {
    setQuery('');
<<<<<<< HEAD
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

=======
    setResults([]);
    setIsOpen(false);
  }
>>>>>>> 6e2972c748c24164ca3bd0b0a8c10c476a626932
  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <svg
          className="absolute left-3 top-2.5 h-5 w-5 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

<<<<<<< HEAD
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
=======
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-white/20 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <Link
              key={index}
              href={result.url}
              onClick={handleResultClick}
              className="block px-4 py-3 hover:bg-slate-700/50 transition-colors border-b border-white/10 last:border-b-0"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-white font-medium">{result.title}</h3>
                  <p className="text-slate-300 text-sm mt-1">{result.description}</p>
                </div>
                <span className="ml-2 px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded">
                  {result.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {isOpen && query.length > 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-white/20 rounded-lg shadow-xl z-50 p-4">
          <p className="text-slate-300 text-center">No results found for "{query}"</p>
>>>>>>> 6e2972c748c24164ca3bd0b0a8c10c476a626932
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
};

export default SearchBar;
=======
}
>>>>>>> 6e2972c748c24164ca3bd0b0a8c10c476a626932
