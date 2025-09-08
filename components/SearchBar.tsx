import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
interface SearchResult {;
  title: string;,
description: string;
  url: string;,
type: 'service' | 'page' | 'category';};
const SearchBar: React.FC = () => {;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // Mock search data - in a real app, this would come from an API;
  const searchData: SearchResult[] = [;
    {;
      title: 'Micro SaaS Products';,
description: 'Innovative software solutions including Cloud Cost Guard, API Rate Limiter, and more';
      url: '/micro-saas';,
type: 'category';};
    {;
      title: 'AI Services';,
description: 'Advanced AI solutions including Computer Vision, Fraud Detection, and more';
      url: '/ai-services';,
type: 'category';};
    {;
      title: 'IT Services';,
description: 'Comprehensive IT solutions including Cloud Migration, Cybersecurity, and more';
      url: '/it-services';,
type: 'category';};
    {;
      title: 'Cloud Cost Guard';,
description: 'FinOps Assistant for anomaly detection and cost optimization';
      url: '/services';,
type: 'service';};
    {;
      title: 'Contact Us';,
description: 'Get in touch with our experts for consultation and quotes';
      url: '/contact';,
type: 'page';};
    {;
      title: 'Pricing';,
description: 'View our transparent pricing for all services';
      url: '/pricing';,
type: 'page';};
  ];
  const handleSearch = async (searchQuery: string) => {;
    if (!searchQuery.trim()) {;
      setResults([]);
      setIsOpen(false);
      return;};
    setIsLoading(true);
    // Simulate API delay;
    await new Promise(resolve => setTimeout(resolve, 300));
    const filteredResults = searchData.filter(item =>;
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    );
    setResults(filteredResults);
    setIsOpen(true);
    setIsLoading(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);};
  const handleResultClick = () => {;
    setIsOpen(false);
    setQuery('');
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {;
    if (e.key === 'Escape') {;
      setIsOpen(false);
      inputRef.current?.blur();};
  };
  useEffect(() => {;
    const handleClickOutside = (event: MouseEvent) => {;
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {;
        setIsOpen(false);};
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input,
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
          <svg,
className="h-5 w-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"><path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      )}

      {isOpen && query.length > 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-white/20 rounded-lg shadow-xl z-50 p-4">
          <p className="text-slate-300 text-center">No results found for &quot;{query}&quot;</p>
        </div>
      )}
    </div>
  );
};
export default SearchBar;