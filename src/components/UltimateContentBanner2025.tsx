import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-12"
    >
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-cyan-900 rounded-2xl p-8 text-white relative">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 ULTIMATE CONTENT LAUNCH • JANUARY 2025
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              🚀 Ultimate Tech Showcase 2025
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/80 mb-8 max-w-4xl mx-auto"
            >
              Experience the most revolutionary technologies that are reshaping reality itself. 
              From neural interfaces to quantum consciousness, discover the future today.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold">500+ Active Technologies</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold">99.9% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold">Infinite Possibilities</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a 
                href="/pages/UltimateTechShowcase2025" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                🎯 Explore Ultimate Showcase →
              </a>
              <a 
                href="/pages/RevolutionaryTechBreakthrough2025" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                ⚡ Revolutionary Breakthrough →
              </a>
              <a 
                href="/pages/NextGenInnovationHub2025" 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                🧠 Innovation Hub →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2025;