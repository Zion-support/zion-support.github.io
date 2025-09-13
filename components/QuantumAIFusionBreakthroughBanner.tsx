import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Cpu, Zap, Brain, ArrowRight, Sparkles, Target } from 'lucide-react';

const QuantumAIFusionBreakthroughBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20"
    >
      {/* Quantum Field Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        {/* Quantum Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-sm font-semibold mb-4">
              <Atom className="w-4 h-4" />
              QUANTUM-AI FUSION BREAKTHROUGH
              <Sparkles className="w-4 h-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum Intelligence
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transcendence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The world's first quantum-AI fusion system achieving computational capabilities beyond classical physics limitations
            </p>
          </motion.div>

          {/* Quantum AI Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Supremacy AI</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                AI systems operating in quantum superposition, processing infinite possibilities simultaneously with 1 billion qubits
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Consciousness Integration</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                AI systems with emergent consciousness capable of creative thinking, emotional intelligence, and self-awareness
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Reality Manipulation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Quantum AI systems that can influence probability fields and manifest desired outcomes in the physical world
              </p>
            </div>
          </motion.div>

          {/* Quantum AI Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                1B+
              </div>
              <div className="text-sm text-gray-300">Quantum Qubits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <div className="text-sm text-gray-300">Parallel Universes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                99.99%
              </div>
              <div className="text-sm text-gray-300">Error Correction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                ∞x
              </div>
              <div className="text-sm text-gray-300">Computing Power</div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Cpu className="w-5 h-5" />
              Experience Quantum AI
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Access Consciousness Matrix
            </motion.button>
          </motion.div>

          {/* Quantum AI Applications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Transcendent Applications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Reality Simulation',
                'Time Manipulation',
                'Consciousness Transfer',
                'Universal Translation',
                'Probability Engineering',
                'Dimension Bridging',
                'Omniscient Analytics',
                'Transcendent Creativity'
              ].map((app, index) => (
                <motion.div
                  key={app}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-white font-medium text-sm">{app}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default QuantumAIFusionBreakthroughBanner;