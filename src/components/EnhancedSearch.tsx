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
      // In a real app, this would perform actual search
      console.log('Searching for:', searchTerm);
    }, 1000);
  };

  const popularSearches = [
    'AI Revolution 2028',
    'Quantum Consciousness',
    'Consciousness Computing',
    'Interdimensional Tech',
    'Neural Interfaces',
    'Space Technology'
  ];

  const featuredContent = [
    {
      title: 'Ultimate Tech Breakthrough 2028',
      description: 'Revolutionary technologies that will reshape our world',
      link: '/pages/UltimateTechBreakthrough2028',
      category: 'Breakthrough',
      icon: '🚀'
    },
    {
      title: 'Consciousness Computing Revolution',
      description: 'The dawn of truly conscious artificial intelligence',
      link: '/pages/ConsciousnessComputingRevolution2028',
      category: 'AI',
      icon: '🧠'
    },
    {
      title: 'Quantum Consciousness 2028',
      description: 'Fusion of quantum computing and human consciousness',
      link: '/pages/QuantumConsciousness2028',
      category: 'Quantum',
      icon: '⚡'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="relative mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for revolutionary technology..."
            className="w-full px-6 py-4 pr-16 text-lg border-2 border-gray-300 rounded-full focus:border-purple-500 focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={isSearching}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            {isSearching ? '🔍' : 'Search'}
          </button>
        </div>
      </form>

      {/* Popular Searches */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Popular Searches:</h3>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((search, index) => (
            <button
              key={index}
              onClick={() => setSearchTerm(search)}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors text-sm"
            >
              {search}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Content */}
      <div className="grid md:grid-cols-3 gap-6">
        {featuredContent.map((content, index) => (
          <a
            key={index}
            href={content.link}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{content.icon}</span>
              <div>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-semibold">
                  {content.category}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{content.title}</h3>
            <p className="text-gray-600 text-sm">{content.description}</p>
            <div className="mt-4 text-purple-600 font-semibold text-sm">
              Explore → 
            </div>
          </a>
        ))}
      </div>

      {/* Search Results Preview */}
      {searchTerm && (
        <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Search Results for "{searchTerm}"
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">🔍</span>
              <div>
                <h4 className="font-semibold text-gray-900">AI Revolution 2028</h4>
                <p className="text-sm text-gray-600">Revolutionary artificial intelligence breakthroughs</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="font-semibold text-gray-900">Quantum Computing</h4>
                <p className="text-sm text-gray-600">Next-generation quantum processing power</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">🧠</span>
              <div>
                <h4 className="font-semibold text-gray-900">Consciousness Transfer</h4>
                <p className="text-sm text-gray-600">Transfer human consciousness to AI systems</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedSearch;