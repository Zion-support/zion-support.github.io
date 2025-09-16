import React from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white mb-12 rounded-2xl overflow-hidden"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              ⚡ INTERACTIVE SHOWCASE • JANUARY 2025
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Interactive Technology Showcase 2025
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl opacity-90 max-w-3xl mx-auto mb-8"
            >
              Experience cutting-edge technologies through interactive demonstrations and real-time processing
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30"
            >
              <div className="text-5xl mb-6 text-center">🎮</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Interactive Demos</h3>
              <p className="text-blue-100 mb-6 text-center">
                Experience our revolutionary technologies through hands-on interactive demonstrations
              </p>
              <div className="space-y-4">
                <div className="bg-blue-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-200 mb-2">AI Consciousness Simulator</h4>
                  <p className="text-blue-100 text-sm mb-3">Interact with our conscious AI system in real-time</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                    Launch Demo
                  </button>
                </div>
                <div className="bg-cyan-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-cyan-200 mb-2">Quantum Computing Lab</h4>
                  <p className="text-cyan-100 text-sm mb-3">Solve complex problems using quantum algorithms</p>
                  <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-600 transition-colors">
                    Try Quantum Lab
                  </button>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-200 mb-2">Neural Interface Test</h4>
                  <p className="text-purple-100 text-sm mb-3">Test direct brain-computer communication</p>
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors">
                    Connect Interface
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
            >
              <div className="text-5xl mb-6 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Real-time Processing</h3>
              <p className="text-purple-100 mb-6 text-center">
                Witness the power of our revolutionary real-time processing capabilities
              </p>
              <div className="space-y-4">
                <div className="bg-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-200 mb-2">Live Data Streams</h4>
                  <p className="text-purple-100 text-sm mb-3">Process millions of data points in real-time</p>
                  <div className="w-full bg-purple-800/30 rounded-full h-2 mb-2">
                    <div className="bg-purple-400 h-2 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                  </div>
                  <span className="text-purple-200 text-xs">85% Processing Power</span>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-200 mb-2">Instant AI Responses</h4>
                  <p className="text-pink-100 text-sm mb-3">Get immediate AI-powered insights and solutions</p>
                  <div className="w-full bg-pink-800/30 rounded-full h-2 mb-2">
                    <div className="bg-pink-400 h-2 rounded-full animate-pulse" style={{ width: '92%' }}></div>
                  </div>
                  <span className="text-pink-200 text-xs">92% Response Accuracy</span>
                </div>
                <div className="bg-indigo-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-200 mb-2">Dynamic Adaptation</h4>
                  <p className="text-indigo-100 text-sm mb-3">Systems that adapt and learn in real-time</p>
                  <div className="w-full bg-indigo-800/30 rounded-full h-2 mb-2">
                    <div className="bg-indigo-400 h-2 rounded-full animate-pulse" style={{ width: '78%' }}></div>
                  </div>
                  <span className="text-indigo-200 text-xs">78% Adaptation Rate</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Interactive Experience →
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;