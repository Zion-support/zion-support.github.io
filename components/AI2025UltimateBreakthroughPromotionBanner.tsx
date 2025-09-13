import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AI2025UltimateBreakthroughPromotionBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-6"
            >
              🚀 NEW BREAKTHROUGH
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              AI 2025 Ultimate Breakthrough
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Revolutionary neural architectures and quantum-enhanced processing delivering unprecedented performance gains across all industries. Experience 10,000x faster processing with 99.9% accuracy.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/ai-2025-ultimate-breakthrough"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Discover Breakthrough
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                Get Early Access
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Breakthrough Features</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-2xl mr-4">🧠</div>
                  <div>
                    <div className="text-white font-semibold">Neural Architecture Revolution</div>
                    <div className="text-gray-300 text-sm">1000x processing power</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">⚡</div>
                  <div>
                    <div className="text-white font-semibold">Quantum-Enhanced Processing</div>
                    <div className="text-gray-300 text-sm">Exponential speed improvements</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">🤖</div>
                  <div>
                    <div className="text-white font-semibold">Autonomous Operations</div>
                    <div className="text-gray-300 text-sm">24/7 independent operation</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">10,000x</div>
                  <div className="text-white text-sm">Faster</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-white text-sm">Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">5,000%</div>
                  <div className="text-white text-sm">ROI</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AI2025UltimateBreakthroughPromotionBanner;