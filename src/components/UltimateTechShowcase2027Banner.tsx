import React from 'react';
import { motion } from 'framer-motion';

const UltimateTechShowcase2027Banner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-4xl animate-pulse">🚀</span>
          <h3 className="text-4xl font-bold">ULTIMATE TECH SHOWCASE 2027</h3>
          <span className="text-4xl animate-pulse">🚀</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-6xl mx-auto">
          Experience the most revolutionary technologies of 2027 including Quantum Consciousness Computing, 
          Interdimensional Neural Networks, and Holographic Reality Engines
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
            <div className="text-2xl mb-2">🧠</div>
            <h4 className="font-bold mb-2">Quantum Consciousness</h4>
            <p className="text-sm opacity-90">Revolutionary quantum processors with consciousness integration</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
            <div className="text-2xl mb-2">🌌</div>
            <h4 className="font-bold mb-2">Interdimensional AI</h4>
            <p className="text-sm opacity-90">AI systems operating across multiple dimensions</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
            <div className="text-2xl mb-2">🌟</div>
            <h4 className="font-bold mb-2">Holographic Reality</h4>
            <p className="text-sm opacity-90">Complete holographic environment creation</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/pages/UltimateTechShowcase2027" 
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
          >
            🌟 Explore 2027 Technologies →
          </a>
          <a 
            href="/pages/ComprehensiveServicesShowcase2028" 
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
          >
            🚀 View All Services →
          </a>
          <a 
            href="/pages/RevolutionaryTechBlog2027" 
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
          >
            📚 Read Tech Blog →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateTechShowcase2027Banner;