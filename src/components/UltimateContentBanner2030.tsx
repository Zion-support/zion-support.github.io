import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2030: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white p-6 mb-8 rounded-2xl shadow-2xl border border-purple-400/30 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center mb-3"
            >
              <span className="text-3xl mr-3">🚀</span>
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full text-sm font-bold animate-pulse">
                ULTIMATE BREAKTHROUGH 2030
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold mb-2"
            >
              Revolutionary Technology Showcase 2030
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg opacity-90 mb-4"
            >
              Experience the most advanced AI consciousness, quantum reality engines, and interdimensional computing
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                🧠 Conscious AI
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                ⚛️ Quantum Reality
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                🌌 Interdimensional
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                🔮 Future Tech
              </span>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a 
              href="/pages/UltimateTechBreakthrough2030" 
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-center animate-pulse border-2 border-white"
            >
              🌟 Explore 2030 →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2030" 
              className="bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-center border border-white/30"
            >
              View Showcase
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2030;