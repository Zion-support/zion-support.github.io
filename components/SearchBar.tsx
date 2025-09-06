<<<<<<< HEAD
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
=======
import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0a01

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search...',
  className = ''
}) => {
  const [query, setQuery] = useState('');
<<<<<<< HEAD

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
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
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
=======
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const filteredResults = useMemo(() => {
    if (query.length <= 2) return [];
    
    return searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  useEffect(() => {
    if (filteredResults.length > 0) {
      setResults(filteredResults);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  }, [filteredResults]);

  const handleResultClick = useCallback(() => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setSelectedIndex(-1);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev <= 0 ? results.length - 1 : prev - 1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          window.location.href = results[selectedIndex].url;
          handleResultClick();
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  }, [isOpen, results, selectedIndex, handleResultClick]);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 pl-10 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          aria-label="Search for services and solutions"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          role="combobox"
          autoComplete="off"
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

      {isOpen && results.length > 0 && (
        <div 
          className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-white/20 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto"
          role="listbox"
          aria-label="Search results"
        >
          {results.map((result, index) => (
            <Link
              key={index}
              href={result.url}
              onClick={handleResultClick}
              className={`block px-4 py-3 transition-colors border-b border-white/10 last:border-b-0 ${
                index === selectedIndex 
                  ? 'bg-blue-600/30 ring-2 ring-blue-500' 
                  : 'hover:bg-slate-700/50'
              }`}
              role="option"
              aria-selected={index === selectedIndex}
              tabIndex={-1}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0a01
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