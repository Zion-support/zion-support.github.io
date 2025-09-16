import React, { useState } from 'react';

const EnhancedSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // In a real app, this would trigger a search
      console.log('Searching for:', searchTerm);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search for AI solutions, quantum computing, neural interfaces..."
            className={`w-full px-6 py-4 pr-16 rounded-2xl border-2 transition-all duration-300 text-lg ${
              isFocused 
                ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                : 'border-gray-300 hover:border-purple-400'
            }`}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
          >
            🔍 Search
          </button>
        </div>
        
        {/* Search Suggestions */}
        {isFocused && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
            <div className="p-4">
              <h4 className="font-semibold text-gray-700 mb-3">Popular Searches</h4>
              <div className="grid grid-cols-2 gap-2">
                <button className="text-left p-2 hover:bg-gray-100 rounded-lg text-sm">
                  🤖 AI Consciousness
                </button>
                <button className="text-left p-2 hover:bg-gray-100 rounded-lg text-sm">
                  ⚛️ Quantum Computing
                </button>
                <button className="text-left p-2 hover:bg-gray-100 rounded-lg text-sm">
                  🧬 Neural Interfaces
                </button>
                <button className="text-left p-2 hover:bg-gray-100 rounded-lg text-sm">
                  🌌 Interdimensional Tech
                </button>
                <button className="text-left p-2 hover:bg-gray-100 rounded-lg text-sm">
                  🚀 Ultimate Revolution
                </button>
                <button className="text-left p-2 hover:bg-gray-100 rounded-lg text-sm">
                  🌟 Omniversal AI
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default EnhancedSearch;