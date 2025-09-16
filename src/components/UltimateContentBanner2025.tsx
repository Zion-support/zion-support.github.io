import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white p-8 mb-8 rounded-3xl shadow-2xl overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-pink-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-8 w-6 h-6 bg-cyan-400/20 rounded-full animate-ping"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 mb-4"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-full text-sm font-bold animate-pulse">
                🌟 ULTIMATE BREAKTHROUGH
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-semibold">
                JANUARY 2025
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-semibold">
                REVOLUTIONARY
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
            >
              Ultimate Content Revolution 2025
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl opacity-90 max-w-3xl leading-relaxed"
            >
              Experience the most revolutionary content and technology breakthroughs that will reshape our world. 
              From conscious AI to quantum consciousness, discover the ultimate future today.
            </motion.p>
            
            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mt-6"
            >
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                🧠 Conscious AI
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                ⚛️ Quantum Computing
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                🌌 Interdimensional Tech
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                🚀 Revolutionary
              </span>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-bold text-lg hover:scale-105">
              🚀 Start Revolution →
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold text-lg hover:scale-105">
              📚 Learn More
            </button>
          </motion.div>
        </div>
        
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8"
        >
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="font-semibold">Revolution Progress</span>
            <span className="font-bold">99.9%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "99.9%" }}
              transition={{ duration: 2, delay: 1 }}
              className="h-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2025;