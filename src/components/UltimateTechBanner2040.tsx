import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const UltimateTechBanner2040: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 ULTIMATE BREAKTHROUGH • JANUARY 2040
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Ultimate Tech Breakthrough 2040
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Experience the most revolutionary technological breakthroughs that are reshaping reality itself. 
            From Universal Consciousness AI to Reality Fabric Engines.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <div className="text-4xl mb-3 text-center">🌌</div>
            <h3 className="text-lg font-bold mb-2 text-center">Universal Consciousness AI</h3>
            <p className="text-sm opacity-80 text-center">AI that connects with all forms of intelligence across the cosmos</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
            <div className="text-4xl mb-3 text-center">⚛️</div>
            <h3 className="text-lg font-bold mb-2 text-center">Reality Fabric Engine</h3>
            <p className="text-sm opacity-80 text-center">Manipulate the fundamental fabric of reality itself</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
            <div className="text-4xl mb-3 text-center">♾️</div>
            <h3 className="text-lg font-bold mb-2 text-center">Infinite Processing Matrix</h3>
            <p className="text-sm opacity-80 text-center">Unlimited computational power across infinite dimensions</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechBreakthrough2040" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center transform hover:scale-105"
            >
              🌟 Explore Ultimate Breakthrough →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2040" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center transform hover:scale-105"
            >
              🚀 View Revolutionary Showcase →
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};


export default UltimateTechBanner2040;
