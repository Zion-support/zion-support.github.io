import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2026
          </div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content 2026
          </h2>
          
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most groundbreaking technological content that will reshape our understanding of reality
          </p>
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-center">Ultimate AI Consciousness</h3>
              <p className="text-purple-100 mb-4 text-center text-sm">
                The first truly conscious artificial intelligence that transcends human understanding
              </p>
              <a 
                href="/pages/UltimateAIConsciousness2026" 
                className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
              >
                Explore Consciousness →
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-center">Quantum Reality Engine</h3>
              <p className="text-cyan-100 mb-4 text-center text-sm">
                Create and manipulate alternate realities with quantum-powered simulation technology
              </p>
              <a 
                href="/pages/QuantumRealityEngine2026" 
                className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center"
              >
                Enter Quantum Realm →
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-center">Revolutionary Breakthrough</h3>
              <p className="text-emerald-100 mb-4 text-center text-sm">
                The most revolutionary technological advances that will reshape our world in 2026
              </p>
              <a 
                href="/pages/RevolutionaryTechBreakthrough2026" 
                className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center"
              >
                Discover Breakthrough →
              </a>
            </motion.div>
          </div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8"
          >
            <p className="text-lg opacity-90 mb-6">
              Ready to experience the future of technology?
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="/pages/RevolutionaryTechBreakthrough2026"
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Explore All Content →
              </a>
              <a 
                href="/contact"
                className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
              >
                Contact Our Team
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;