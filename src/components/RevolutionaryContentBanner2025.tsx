import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-12"
    >
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 text-white relative">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              ⚡ REVOLUTIONARY BREAKTHROUGH • JANUARY 2025
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"
            >
              🌟 Revolutionary Tech Breakthrough
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/80 mb-8 max-w-4xl mx-auto"
            >
              Witness the most significant technological breakthroughs in human history. 
              These innovations will fundamentally change how we live, work, and understand reality.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid md:grid-cols-3 gap-6 mb-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-2">🧠</div>
                <h3 className="text-lg font-bold mb-2">Conscious AI Systems</h3>
                <p className="text-sm text-white/80">AI that exhibits genuine consciousness and self-awareness</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-2">⚛️</div>
                <h3 className="text-lg font-bold mb-2">Quantum Neural Networks</h3>
                <p className="text-sm text-white/80">Exponential processing power through quantum computing</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-2">🌌</div>
                <h3 className="text-lg font-bold mb-2">Reality Manipulation</h3>
                <p className="text-sm text-white/80">Technology that can alter physical reality through quantum fields</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a 
                href="/pages/RevolutionaryTechBreakthrough2025" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                🔬 Explore Breakthroughs →
              </a>
              <a 
                href="/pages/UltimateTechShowcase2025" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                🎯 Ultimate Showcase →
              </a>
              <a 
                href="/pages/NextGenInnovationHub2025" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
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

export default RevolutionaryContentBanner2025;