import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const QuantumAIFusion2030PromotionBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
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
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-6"
            >
              🌌 QUANTUM REVOLUTION
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Quantum AI Fusion 2030
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              The convergence of quantum computing and artificial intelligence creating unprecedented computational capabilities. Experience infinite parallel processing with quantum-enhanced problem solving.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/quantum-ai-fusion-2030"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum AI
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                Join Beta Program
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
              <h3 className="text-2xl font-bold text-white mb-6">Quantum Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-2xl mr-4">🌌</div>
                  <div>
                    <div className="text-white font-semibold">Quantum Superposition</div>
                    <div className="text-gray-300 text-sm">Multiple states simultaneously</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">🔗</div>
                  <div>
                    <div className="text-white font-semibold">Quantum Entanglement</div>
                    <div className="text-gray-300 text-sm">Instantaneous correlation</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">⚛️</div>
                  <div>
                    <div className="text-white font-semibold">Quantum Tunneling</div>
                    <div className="text-gray-300 text-sm">Barrier breakthrough</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-400">∞</div>
                  <div className="text-white text-sm">Parallel Processing</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">10^15</div>
                  <div className="text-white text-sm">Speed Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-400">100%</div>
                  <div className="text-white text-sm">Security</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">0.001%</div>
                  <div className="text-white text-sm">Error Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default QuantumAIFusion2030PromotionBanner;