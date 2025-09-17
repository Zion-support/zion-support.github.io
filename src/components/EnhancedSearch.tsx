import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const searchSuggestions = [
    { title: "Consciousness Computing", category: "AI", icon: "🧠" },
    { title: "Quantum Neural Networks", category: "Quantum", icon: "⚡" },
    { title: "Holographic Reality", category: "Reality", icon: "🌟" },
    { title: "Interdimensional Tech", category: "Advanced", icon: "🌌" },
    { title: "Neural Interface Matrix", category: "Neural", icon: "🔗" },
    { title: "Revolutionary Breakthrough", category: "Featured", icon: "🚀" }
  ];

  const filteredSuggestions = searchSuggestions.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="Search revolutionary technologies..."
            className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-300 rounded-full focus:border-purple-500 focus:outline-none transition-all duration-300 shadow-lg"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <span className="text-2xl">🔍</span>
          </div>
        </div>

        <AnimatePresence>
          {isFocused && searchTerm && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-80 overflow-y-auto"
            >
              {filteredSuggestions.length > 0 ? (
                <div className="p-2">
                  {filteredSuggestions.map((suggestion, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                    >
                      <span className="text-2xl mr-3">{suggestion.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{suggestion.title}</div>
                        <div className="text-sm text-gray-500">{suggestion.category}</div>
                      </div>
                      <span className="text-gray-400">→</span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No results found for "{searchTerm}"
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Quick Access Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mt-6"
      >
        {[
          { label: "AI Revolution", icon: "🤖", color: "from-purple-600 to-pink-600" },
          { label: "Quantum Computing", icon: "⚡", color: "from-cyan-600 to-blue-600" },
          { label: "Neural Interfaces", icon: "🧠", color: "from-emerald-600 to-teal-600" },
          { label: "Reality Tech", icon: "🌟", color: "from-orange-600 to-red-600" }
        ].map((button, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-gradient-to-r ${button.color} text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300`}
          >
            <span className="mr-2">{button.icon}</span>
            {button.label}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default EnhancedSearch;
