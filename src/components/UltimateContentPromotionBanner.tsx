import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center space-x-4 mb-6"
        >
          <span className="text-4xl animate-bounce">🚀</span>
          <h3 className="text-4xl font-bold">ULTIMATE TECHNOLOGY REVOLUTION 2025-2036</h3>
          <span className="text-4xl animate-bounce">🚀</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto"
        >
          Experience the most comprehensive collection of revolutionary technology content featuring 
          AI breakthroughs, quantum computing, consciousness evolution, reality manipulation, 
          and the future of human existence
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl mx-auto mb-8"
        >
          {/* 2025-2026 Content */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <h4 className="text-lg font-bold mb-3">2025-2026 Breakthroughs</h4>
            <div className="space-y-2 text-sm">
              <a href="/pages/AIRevolutionaryBreakthrough2026" className="block hover:text-purple-300 transition-colors">
                🧠 AI Revolutionary Breakthrough →
              </a>
              <a href="/pages/QuantumComputingRevolution2026" className="block hover:text-purple-300 transition-colors">
                ⚡ Quantum Computing Revolution →
              </a>
              <a href="/pages/NeuralInterfaceRevolution2026" className="block hover:text-purple-300 transition-colors">
                🧬 Neural Interface Revolution →
              </a>
            </div>
          </div>

          {/* 2027-2030 Content */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <h4 className="text-lg font-bold mb-3">2027-2030 Advanced Tech</h4>
            <div className="space-y-2 text-sm">
              <a href="/pages/AdvancedAIRevolution2027" className="block hover:text-purple-300 transition-colors">
                🧠 Advanced AI Revolution →
              </a>
              <a href="/pages/QuantumRealityManipulation2028" className="block hover:text-purple-300 transition-colors">
                ⚛️ Quantum Reality 2028 →
              </a>
              <a href="/pages/TranscendentConsciousness2029" className="block hover:text-purple-300 transition-colors">
                🧘 Transcendent Consciousness →
              </a>
            </div>
          </div>

          {/* 2031-2033 Content */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <h4 className="text-lg font-bold mb-3">2031-2033 Ultimate Tech</h4>
            <div className="space-y-2 text-sm">
              <a href="/pages/UltimateTechRevolution2033" className="block hover:text-purple-300 transition-colors">
                🚀 Ultimate Tech Revolution →
              </a>
              <a href="/pages/TranscendentAI2033" className="block hover:text-purple-300 transition-colors">
                🧠 Transcendent AI 2033 →
              </a>
              <a href="/pages/UniversalTechRevolution2033" className="block hover:text-purple-300 transition-colors">
                🌌 Universal Tech 2033 →
              </a>
            </div>
          </div>

          {/* 2034-2036 Content */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <h4 className="text-lg font-bold mb-3">2034-2036 Future Tech</h4>
            <div className="space-y-2 text-sm">
              <a href="/pages/NextGenAIRevolution2034" className="block hover:text-purple-300 transition-colors">
                🧠 Next-Gen AI 2034 →
              </a>
              <a href="/pages/QuantumRealityManipulation2035" className="block hover:text-purple-300 transition-colors">
                ⚛️ Quantum Reality 2035 →
              </a>
              <a href="/pages/TranscendentConsciousness2036" className="block hover:text-purple-300 transition-colors">
                🧘 Transcendent Consciousness 2036 →
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ 50+ REVOLUTIONARY PAGES
          </span>
          <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 CUTTING-EDGE TECHNOLOGY
          </span>
          <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
            🌟 INTERACTIVE SHOWCASE
          </span>
          <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold">
            🧠 CONSCIOUSNESS EVOLUTION
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentPromotionBanner;