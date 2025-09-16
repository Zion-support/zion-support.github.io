import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">🚀</span>
            <h2 className="text-3xl md:text-4xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2026</h2>
            <span className="text-4xl animate-bounce">🚀</span>
          </div>
          <p className="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto">
            Experience the future of technology with our groundbreaking new content featuring 
            <span className="font-bold text-yellow-300"> Quantum Consciousness AI</span>, 
            <span className="font-bold text-cyan-300"> Neural Reality Engines</span>, and 
            <span className="font-bold text-green-300"> Synthetic Intelligence</span>
          </p>
        </motion.div>

        {/* Featured Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8"
        >
          {/* Revolutionary Tech 2026 */}
          <motion.a
            href="/pages/RevolutionaryTech2026"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <div className="font-bold text-lg">Revolutionary Tech 2026</div>
            <div className="text-sm opacity-90">Quantum Consciousness & Neural Reality</div>
          </motion.a>

          {/* Ultimate Innovation 2026 */}
          <motion.a
            href="/pages/UltimateInnovation2026"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🌟</div>
            <div className="font-bold text-lg">Ultimate Innovation 2026</div>
            <div className="text-sm opacity-90">Consciousness Transfer & Quantum Teleportation</div>
          </motion.a>

          {/* Advanced AI Transformation 2026 */}
          <motion.a
            href="/pages/AdvancedAITransformation2026"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <div className="font-bold text-lg">AI Transformation 2026</div>
            <div className="text-sm opacity-90">Advanced AI Systems & Synthetic Intelligence</div>
          </motion.a>

          {/* Quantum Neural Fusion 2026 */}
          <motion.a
            href="/pages/QuantumNeuralFusion2026"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <div className="font-bold text-lg">Quantum-Neural Fusion</div>
            <div className="text-sm opacity-90">Quantum Computing Meets Neural Networks</div>
          </motion.a>

          {/* Next-Gen Tech Showcase 2026 */}
          <motion.a
            href="/pages/NextGenTechShowcase2026"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <div className="font-bold text-lg">Next-Gen Showcase</div>
            <div className="text-sm opacity-90">Cutting-Edge Technology Innovations</div>
          </motion.a>

          {/* Neural Interface Revolution 2026 */}
          <motion.a
            href="/pages/NeuralInterfaceRevolution2026"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🧬</div>
            <div className="font-bold text-lg">Neural Interface Revolution</div>
            <div className="text-sm opacity-90">Direct Brain-Computer Interfaces</div>
          </motion.a>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <motion.a
              href="/pages/RevolutionaryTech2026"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg border-2 border-white/30"
            >
              🌟 Explore Revolutionary Content →
            </motion.a>
            <motion.a
              href="/pages/UltimateInnovation2026"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30"
            >
              🚀 Ultimate Innovation 2026 →
            </motion.a>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-lg opacity-90 mb-4">
              <span className="font-bold text-yellow-300">NEW:</span> Experience the most advanced technological breakthroughs of 2026
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">Quantum Consciousness AI</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Neural Reality Engines</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Synthetic Intelligence</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Consciousness Transfer</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Quantum Teleportation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;