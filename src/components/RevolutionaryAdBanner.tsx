import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryAdBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-bounce">🚀</span>
          <h3 className="text-2xl font-bold">REVOLUTIONARY NEW CONTENT 2025-2035</h3>
          <span className="text-3xl animate-bounce">🚀</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
          Experience the future of technology with our groundbreaking new content featuring Revolutionary Tech Breakthrough 2025, 
          Ultimate AI Revolution 2030, and Transcendent Technology 2035
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <a 
            href="/pages/RevolutionaryTechBreakthrough2025" 
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 animate-pulse"
          >
            🚀 Revolutionary Tech 2025 →
          </a>
          <a 
            href="/pages/UltimateAIRevolution2030" 
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 animate-pulse"
          >
            🤖 Ultimate AI 2030 →
          </a>
          <a 
            href="/pages/TranscendentTech2035" 
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 animate-pulse"
          >
            🌟 Transcendent Tech 2035 →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryAdBanner;