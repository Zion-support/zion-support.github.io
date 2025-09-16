import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  const allContent = [
    {
      id: 'revolutionary-breakthrough',
      title: 'Revolutionary Tech Breakthrough 2025',
      description: 'Experience the future of technology with groundbreaking innovations',
      category: 'AI & Technology',
      tags: ['AI', 'Quantum', 'Neural', 'Revolutionary'],
      link: '/pages/RevolutionaryTechBreakthrough2025',
      icon: '🚀',
      featured: true
    },
    {
      id: 'consciousness-computing',
      title: 'Consciousness Computing Revolution',
      description: 'The dawn of truly conscious artificial intelligence',
      category: 'AI & Consciousness',
      tags: ['AI', 'Consciousness', 'Neural', 'Revolutionary'],
      link: '/pages/ConsciousnessComputingRevolution2025',
      icon: '🧠',
      featured: true
    },
    {
      id: 'quantum-reality',
      title: 'Quantum Reality Engine 2025',
      description: 'Revolutionary quantum computing system',
      category: 'Quantum Computing',
      tags: ['Quantum', 'Computing', 'Reality', 'Simulation'],
      link: '/pages/QuantumRealityEngine2025',
      icon: '⚡',
      featured: true
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Matrix',
      description: 'Direct brain-computer interface technology',
      category: 'Neural Technology',
      tags: ['Neural', 'Interface', 'Brain', 'Computer'],
      link: '/pages/NeuralInterfaceMatrix2025',
      icon: '🧬',
      featured: true
    },
    {
      id: 'holographic-reality',
      title: 'Holographic Reality System',
      description: 'Advanced holographic technology for immersive experiences',
      category: 'Holographic Technology',
      tags: ['Holographic', 'Reality', '3D', 'Immersive'],
      link: '/pages/HolographicRealitySystem2025',
      icon: '🌟',
      featured: false
    },
    {
      id: 'interdimensional-gateway',
      title: 'Interdimensional Gateway',
      description: 'Technology for travel between dimensions',
      category: 'Interdimensional Technology',
      tags: ['Interdimensional', 'Gateway', 'Travel', 'Dimensions'],
      link: '/pages/InterdimensionalGateway2025',
      icon: '🌌',
      featured: false
    }
  ];

  const popularSearches = [
    'AI Consciousness',
    'Quantum Computing',
    'Neural Interfaces',
    'Holographic Reality',
    'Revolutionary Technology'
  ];

  useEffect(() => {
    if (searchQuery.length > 0) {
      const results = allContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsOpen(true);
  };

  const handleResultClick = (item: any) => {
    setRecentSearches(prev => {
      const newRecent = [item, ...prev.filter(i => i.id !== item.id)].slice(0, 5);
      localStorage.setItem('recentSearches', JSON.stringify(newRecent));
      return newRecent;
    });
    setIsOpen(false);
    setSearchQuery('');
  };

  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Search for revolutionary technology content..."
          className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 shadow-lg"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center"
          >
            <svg className="h-6 w-6 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto"
          >
            {searchQuery.length === 0 ? (
              <div className="p-6">
                {/* Popular Searches */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">🔥 Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(search)}
                        className="px-4 py-2 bg-gray-100 hover:bg-purple-100 text-gray-700 rounded-full text-sm font-medium transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🕒 Recent Searches</h3>
                    <div className="space-y-2">
                      {recentSearches.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleResultClick(item)}
                          className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                              <div className="font-medium text-gray-900">{item.title}</div>
                              <div className="text-sm text-gray-500">{item.category}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Featured Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">⭐ Featured Content</h3>
                  <div className="space-y-2">
                    {allContent.filter(item => item.featured).map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(item)}
                        className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900">{item.title}</div>
                            <div className="text-sm text-gray-500">{item.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-3">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                </div>
                <div className="space-y-2">
                  {searchResults.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleResultClick(item)}
                      className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-6 text-center">
                <div className="text-gray-500 mb-2">No results found for "{searchQuery}"</div>
                <div className="text-sm text-gray-400">Try searching for AI, Quantum, Neural, or Revolutionary</div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Access Buttons */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {['AI Consciousness', 'Quantum Computing', 'Neural Interfaces', 'Revolutionary Tech'].map((category, index) => (
          <button
            key={index}
            onClick={() => handleSearch(category)}
            className="px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-purple-700 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EnhancedSearch;