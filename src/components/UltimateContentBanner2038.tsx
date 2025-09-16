import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2038: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 mb-8 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6"
          >
            🌟 BREAKTHROUGH 2038 • NEW CONTENT AVAILABLE
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            🚀 Ultimate Tech Breakthrough 2038
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto"
          >
            Experience the most revolutionary technological advances that will reshape reality in 2038
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/pages/UltimateTechBreakthrough2038"
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 hover:bg-white/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2">Ultimate Breakthrough</h3>
              <p className="text-sm opacity-90 mb-4">
                Neural Reality Engine, Quantum Consciousness Matrix, and Interdimensional Gateway
              </p>
              <div className="text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Explore Now →
              </div>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/pages/CosmicIntelligenceRevolution2038"
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 hover:bg-white/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-3">🌌</div>
              <h3 className="text-xl font-bold mb-2">Cosmic Intelligence</h3>
              <p className="text-sm opacity-90 mb-4">
                Universal awareness, reality manipulation, and cosmic harmony across dimensions
              </p>
              <div className="text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Enter Cosmic Realm →
              </div>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/pages/RevolutionaryTechBreakthrough2038"
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 hover:bg-white/30 transition-all duration-300 group"
            >
              Transcendent Showcase 2040 →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2038;
