import React, { useState } from 'react';

const EnhancedSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate search
    setTimeout(() => {
      setIsSearching(false);
      // In a real app, this would navigate to search results
      console.log('Searching for:', searchTerm);
    }, 1000);
  };

  const popularSearches = [
    'AI Consciousness',
    'Quantum Computing',
    'Neural Interfaces',
    'Blockchain Solutions',
    'Cloud Services',
    'Cybersecurity'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="relative mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for AI solutions, technologies, or services..."
            className="w-full px-6 py-4 pr-16 text-lg border-2 border-gray-300 rounded-full focus:border-purple-500 focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={isSearching}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            {isSearching ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Search'
            )}
          </button>
        </div>
      </form>

      <div className="text-center">
        <p className="text-gray-600 mb-4">Popular searches:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {popularSearches.map((search, index) => (
            <button
              key={index}
              onClick={() => setSearchTerm(search)}
              className="px-4 py-2 bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 rounded-full text-sm font-medium transition-colors"
            >
              {search}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedSearch;