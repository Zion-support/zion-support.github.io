import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface InteractiveSearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
}

export default function InteractiveSearch({ placeholder = 'Search...', onSearch, className = '' }: InteractiveSearchProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const clearQuery = () => {
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className={`relative flex items-center transition-all duration-200 ${
        isFocused ? 'scale-105' : 'scale-100'
      }`}>
        <div className="absolute left-3 text-gray-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
        />
        {query && (
          <button
            type="button"
            onClick={clearQuery}
            className="absolute right-3 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X size={18} />
          </button>
        )}
      </div>
      
      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white/80 text-sm">
          <div className="flex items-center gap-2 mb-2">
            <Search size={16} />
            <span>Search suggestions:</span>
          </div>
          <div className="space-y-1">
            <div className="hover:bg-white/10 p-2 rounded cursor-pointer transition-colors duration-200">
              AI Services
            </div>
            <div className="hover:bg-white/10 p-2 rounded cursor-pointer transition-colors duration-200">
              Cloud Solutions
            </div>
            <div className="hover:bg-white/10 p-2 rounded cursor-pointer transition-colors duration-200">
              Cybersecurity
            </div>
            <div className="hover:bg-white/10 p-2 rounded cursor-pointer transition-colors duration-200">
              Data Analytics
            </div>
          </div>
        </div>
      )}
    </form>
  );
}