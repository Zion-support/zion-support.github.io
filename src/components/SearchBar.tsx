import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { microSAASServices, aiServices, itServices, specializedServices } from '../data/services';

interface SearchResult {
  title: string;
  description: string;
  link: string;
  category: string;
  type: 'micro-saas' | 'ai' | 'it' | 'specialized';
}

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setQuery('');
        setResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search function
  const searchServices = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const searchTerm = searchQuery.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Search micro SAAS services
    microSAASServices.forEach(service => {
      if (
        service.title.toLowerCase().includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm) ||
        service.category.toLowerCase().includes(searchTerm) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm))
      ) {
        searchResults.push({
          title: service.title,
          description: service.description,
          link: service.link,
          category: service.category,
          type: 'micro-saas'

      }

    // Search AI services
    aiServices.forEach(service => {
      if (service.name.toLowerCase().includes(searchTerm)) {
        searchResults.push({
          title: service.name,
          description: `AI-powered ${service.name.toLowerCase()} solutions`,
          link: service.href,
          category: 'AI Services',
          type: 'ai'

      }

    // Search IT services
    itServices.forEach(service => {
      if (service.name.toLowerCase().includes(searchTerm)) {
        searchResults.push({
          title: service.name,
          description: `Professional ${service.name.toLowerCase()} services`,
          link: service.href,
          category: 'IT Services',
          type: 'it'

      }

    // Search specialized services
    specializedServices.forEach(service => {
      if (service.name.toLowerCase().includes(searchTerm)) {
        searchResults.push({
          title: service.name,
          description: `Advanced ${service.name.toLowerCase()} solutions`,
          link: service.href,
          category: 'Specialized',
          type: 'specialized'

      }

    setResults(searchResults.slice(0, 10)); // Limit to 10 results
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    searchServices(value);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
      setResults([]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev =>
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      const selectedResult = results[selectedIndex];
      window.location.href = selectedResult.link;
    }
  };

  const handleResultClick = (result: SearchResult) => {
    window.location.href = result.link;
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const getCategoryColor = (type: string) => {
    switch (type) {
      case 'micro-saas': return 'bg-purple-100 text-purple-800';
      case 'ai': return 'bg-blue-100 text-blue-800';
      case 'it': return 'bg-green-100 text-green-800';
      case 'specialized': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && (query || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <div
                  key={`${result.type}-${index}`}
                  onClick={() => handleResultClick(result)}
                  className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-4 ${
                    index === selectedIndex ? 'bg-blue-50 border-blue-500' : 'border-transparent'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{result.title}</h4>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(result.type)}`}>
                      {result.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : query ? (
            <div className="px-4 py-8 text-center text-gray-500">
              <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <p>No services found for "{query}"</p>
              <p className="text-sm">Try different keywords</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;