import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2028: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-3 mb-4"
        >
          <span className="text-3xl animate-bounce">🚀</span>
          <h3 className="text-2xl font-bold">ULTIMATE BREAKTHROUGH CONTENT 2028-2032</h3>
          <span className="text-3xl animate-bounce">🚀</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl opacity-95 mb-6 max-w-4xl mx-auto"
        >
          Experience the future of technology with our groundbreaking new content featuring Ultimate Tech Revolution 2028, 
          Consciousness Computing Revolution 2029, and Interdimensional Tech Revolution 2032
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 max-w-8xl mx-auto"
        >
          <a href="/pages/UltimateTechRevolution2028" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🚀 Ultimate Tech 2028 →
          </a>
          <a href="/pages/ConsciousnessComputingRevolution2029" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🧠 Consciousness 2029 →
          </a>
          <a href="/pages/InterdimensionalTechRevolution2032" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🌌 Interdimensional 2032 →
          </a>
          <a href="/pages/UltimateTechRevolution2027" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            ⚡ Ultimate Tech 2027 →
          </a>
          <a href="/pages/InterdimensionalTechRevolution2030" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🌟 Interdimensional 2030 →
          </a>
          <a href="/pages/OmniversalAIConsciousness2035" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🌟 Omniversal AI 2035 →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2028;