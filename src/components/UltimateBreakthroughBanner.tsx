import React from 'react';
import { motion } from 'framer-motion';

const UltimateBreakthroughBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-indigo-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-pulse">🧠</span>
          <h3 className="text-3xl font-bold">AI 2026 ULTIMATE BREAKTHROUGH</h3>
          <span className="text-3xl animate-pulse">⚛️</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-5xl mx-auto">
          Revolutionary AI technologies including consciousness transfer, quantum AI fusion, 
          and interdimensional computing that will reshape reality itself
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          <a href="/pages/AI2026UltimateBreakthrough" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🧠 Consciousness Transfer →
          </a>
          <a href="/pages/AI2026UltimateBreakthrough" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold border border-white/30">
            ⚛️ Quantum AI Fusion →
          </a>
          <a href="/pages/AI2026UltimateBreakthrough" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30">
            🌌 Interdimensional Computing →
          </a>
          <a href="/pages/QuantumRealityEngine2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-300 font-semibold border border-white/30">
            🎛️ Reality Engine →
          </a>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>
    </motion.div>
  );
};

export default UltimateBreakthroughBanner;