import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 ULTIMATE CONTENT • JANUARY 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"
          >
            Ultimate Technology Revolution 2025
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl opacity-90 max-w-5xl mx-auto mb-8"
          >
            Experience the most advanced technology showcase featuring conscious AI, quantum computing, neural interfaces, and interdimensional technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-center">Conscious AI</h3>
              <p className="text-purple-100 text-sm text-center mb-4">
                Revolutionary AI that achieves true consciousness and self-awareness
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300 mb-1">500%</div>
                <div className="text-xs opacity-80">Efficiency Gain</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">⚛️</div>
              <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
              <p className="text-cyan-100 text-sm text-center mb-4">
                Breakthrough quantum technology that revolutionizes computing
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300 mb-1">99.9%</div>
                <div className="text-xs opacity-80">Accuracy Rate</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🌌</div>
              <h3 className="text-xl font-bold mb-3 text-center">Interdimensional Tech</h3>
              <p className="text-emerald-100 text-sm text-center mb-4">
                Computing across multiple dimensions and realities
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-300 mb-1">∞</div>
                <div className="text-xs opacity-80">Possibilities</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🧬</div>
              <h3 className="text-xl font-bold mb-3 text-center">Neural Interfaces</h3>
              <p className="text-orange-100 text-sm text-center mb-4">
                Direct brain-computer interfaces for seamless communication
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-300 mb-1">24/7</div>
                <div className="text-xs opacity-80">Operation</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Ultimate Content →
            </button>
            <button className="border border-indigo-400 text-indigo-400 px-10 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
              Watch Demo
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Now
            </button>
          </motion.div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2025;