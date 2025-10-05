import React from 'react';
import { motion } from 'framer-motion';

const December2025RevolutionaryBreakthroughContentBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            December 2025 Revolutionary Breakthrough
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Experience the most revolutionary AI breakthroughs of 2025. 
            Discover cutting-edge technologies that are transforming industries 
            and reshaping the future of artificial intelligence.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">Automation Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">1000x</div>
              <div className="text-lg">Performance Gain</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">$500M+</div>
              <div className="text-lg">Cost Savings</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Explore Breakthroughs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Get Assessment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default December2025RevolutionaryBreakthroughContentBanner;