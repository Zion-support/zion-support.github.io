import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 rounded-2xl p-8 mb-12 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🧠 NEXT-GEN INNOVATION HUB 2025 • REVOLUTIONARY TECHNOLOGY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            🧠 Next-Gen Innovation Hub 2025
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Discover and explore the most revolutionary technologies shaping humanity's future in our cutting-edge innovation hub. 
            Join 247+ active projects with 99.9% success rate.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-6 gap-4 mb-8"
        >
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2 text-center">🤖</div>
            <h3 className="text-sm font-bold mb-2 text-center">AI & ML</h3>
            <div className="text-emerald-300 text-xs text-center">
              50+ Projects
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-lg p-4 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2 text-center">⚛️</div>
            <h3 className="text-sm font-bold mb-2 text-center">Quantum</h3>
            <div className="text-teal-300 text-xs text-center">
              16-Qubit
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2 text-center">🧬</div>
            <h3 className="text-sm font-bold mb-2 text-center">Neural</h3>
            <div className="text-cyan-300 text-xs text-center">
              100% Accuracy
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2 text-center">🌌</div>
            <h3 className="text-sm font-bold mb-2 text-center">Dimensional</h3>
            <div className="text-blue-300 text-xs text-center">
              Multi-Dim
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2 text-center">🔮</div>
            <h3 className="text-sm font-bold mb-2 text-center">Predictive</h3>
            <div className="text-indigo-300 text-xs text-center">
              99.9% Accuracy
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2 text-center">🚀</div>
            <h3 className="text-sm font-bold mb-2 text-center">Space</h3>
            <div className="text-purple-300 text-xs text-center">
              FTL Travel
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/NextGenInnovationHub2025"
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              🧠 Enter Innovation Hub
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg"
            >
              🚀 Ultimate Revolution
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryTechBanner2025;