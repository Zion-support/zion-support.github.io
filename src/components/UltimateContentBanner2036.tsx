import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap } from 'lucide-react';

const UltimateContentBanner2036: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 animate-pulse"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Star className="w-6 h-6 text-yellow-400 fill-current" />
          <span className="text-lg font-semibold text-yellow-400">BREAKTHROUGH 2036</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ultimate Content Showcase 2036
        </h2>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          Experience the most advanced content and technology solutions of 2036. 
          Revolutionary breakthroughs in AI, quantum computing, and interdimensional technology.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
        >
          <span>Explore 2036</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2036;