import React, { useState } from 'react';

const EnhancedSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate search functionality
    setTimeout(() => {
      setIsSearching(false);
      // In a real app, this would navigate to search results
      console.log('Searching for:', searchTerm);
    }, 1000);
  };

  const quickLinks = [
    { name: 'Ultimate Tech 2029', href: '/pages/UltimateTechRevolution2029', icon: '🚀' },
    { name: 'Consciousness Computing', href: '/pages/ConsciousnessComputingRevolution2030', icon: '🧠' },
    { name: 'Interdimensional Tech', href: '/pages/InterdimensionalTechRevolution2035', icon: '🌌' },
    { name: 'AI Revolution', href: '/pages/AIRevolution2025', icon: '🤖' },
    { name: 'Quantum Computing', href: '/pages/QuantumComputingBreakthrough', icon: '⚡' },
    { name: 'Neural Interfaces', href: '/pages/NeuralInterfaceFuture', icon: '🧬' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="relative mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for AI solutions, quantum computing, neural interfaces..."
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

      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Access to Revolutionary Content</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200"
            >
              <span className="text-2xl mb-2">{link.icon}</span>
              <span className="text-sm font-medium text-gray-700 text-center">{link.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4">Or explore by category:</p>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AI & Machine Learning</span>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Quantum Computing</span>
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Neural Interfaces</span>
          <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Consciousness Computing</span>
          <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Interdimensional Tech</span>
          <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Future Tech</span>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSearch;