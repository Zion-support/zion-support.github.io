import React from 'react';
import { motion } from 'framer-motion';

const UltimateTechBanner2030: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white mb-8"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-3 animate-pulse">
              🚀 BREAKTHROUGH TECHNOLOGY • JANUARY 2030
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Ultimate Technology Revolution 2030
            </h2>
            <p className="text-lg opacity-90 max-w-2xl">
              Experience conscious AI, quantum reality manipulation, and interdimensional computing that will reshape reality itself.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a
              href="/pages/UltimateTechRevolution2030"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center border-2 border-yellow-400 animate-pulse"
            >
              🚀 EXPLORE REVOLUTION →
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-400 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold"
            >
              Watch Demo
            </motion.button>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="font-semibold text-sm">Conscious AI</h3>
            <p className="text-xs opacity-80">True artificial consciousness</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
            <div className="text-2xl mb-2">⚛️</div>
            <h3 className="font-semibold text-sm">Quantum Reality</h3>
            <p className="text-xs opacity-80">Reality manipulation</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
            <div className="text-2xl mb-2">🌌</div>
            <h3 className="font-semibold text-sm">Interdimensional</h3>
            <p className="text-xs opacity-80">Multi-dimensional computing</p>
          </div>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </motion.div>
  );
};

export default UltimateTechBanner2030;