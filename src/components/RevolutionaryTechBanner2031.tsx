import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBanner2031: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white p-6 mb-8 rounded-2xl shadow-2xl border border-cyan-400/30 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="m0 40l40-40h-40v40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center mb-4"
            >
              <span className="text-4xl mr-4">⚡</span>
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-black rounded-full text-sm font-bold animate-pulse">
                REVOLUTIONARY TECH 2031
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold mb-3"
            >
              Next-Generation Technology Revolution
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl opacity-90 mb-6"
            >
              Discover synthetic intelligence, quantum neural fusion, and consciousness transfer technologies
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              <div className="bg-white/15 rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">🧠</div>
                <div className="text-sm font-semibold">Synthetic AI</div>
              </div>
              <div className="bg-white/15 rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">⚛️</div>
                <div className="text-sm font-semibold">Quantum Fusion</div>
              </div>
              <div className="bg-white/15 rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">🔄</div>
                <div className="text-sm font-semibold">Consciousness</div>
              </div>
              <div className="bg-white/15 rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">🌌</div>
                <div className="text-sm font-semibold">Reality Engine</div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col gap-3 min-w-[300px]"
          >
            <a 
              href="/pages/UltimateTechBreakthrough2031" 
              className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-center animate-pulse border-2 border-white"
            >
              🚀 Explore 2031 →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2031" 
              className="bg-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-center border border-white/30"
            >
              View Revolutionary Showcase
            </a>
            <a 
              href="/pages/UltimateContentShowcase2031" 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
            >
              Ultimate Content Hub
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryTechBanner2031;