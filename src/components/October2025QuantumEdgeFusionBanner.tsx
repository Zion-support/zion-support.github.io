import React from 'react';
import { motion } from 'framer-motion';

const October2025QuantumEdgeFusionBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 rounded-2xl p-8 my-8 shadow-2xl"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle at 30% 50%,rgba(6,182,212,0.3),rgba(255,255,255,0))]"</div>

      <div className="relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30 mb-6"
        >
          <span className="text-2xl">⚛️⚡</span>
          <span className="text-cyan-200 font-semibold text-sm">QUANTUM BREAKTHROUGH: OCTOBER 1, 2025</span>
          <span className="text-2xl">🔬💎</span>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Quantum-Edge Fusion Architecture
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-2">
                Sub-Microsecond AI Decisions
              </span>
            </h2>
            
            <p className="text-cyan-100 text-lg mb-6 leading-relaxed">
              Revolutionary quantum-enhanced edge computing delivers <strong className="text-white">sub-microsecond intelligence</strong> with 
              <strong className="text-white"> $12.4B in enterprise value</strong> across <strong className="text-white">50,000+ edge nodes</strong> operating 
              at <strong className="text-white">99.97% accuracy</strong>.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-cyan-800/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-300">$12.4B</div>
                <div className="text-cyan-200 text-sm">Total Value Created</div>
              </div>
              <div className="bg-cyan-800/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-300">0.7μs</div>
                <div className="text-cyan-200 text-sm">Decision Latency</div>
              </div>
              <div className="bg-cyan-800/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-300">50,000+</div>
                <div className="text-cyan-200 text-sm">Quantum Edge Nodes</div>
              </div>
              <div className="bg-cyan-800/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-300">15,000%</div>
                <div className="text-cyan-200 text-sm">ROI Over 2 Years</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/blog/ai-2025-october-quantum-edge-fusion-architecture"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Discover Quantum-Edge →
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                Request Demo
              </motion.a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,",
      ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Quantum Advantages:</h3>
                <ul className="space-y-3 text-cyan-100">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <span><strong>Ultra-Low Latency:</strong> 0.7μs average decision time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <span><strong>Extreme Accuracy:</strong> 99.97% precision rate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🌐</span>
                    <span><strong>Global Scale:</strong> 47,000 quantum-enhanced nodes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <span><strong>Massive ROI:</strong> $8.2B additional revenue</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 pt-6 border-t border-cyan-400/30 text-center"
        >
          <p className="text-cyan-200 text-sm">
            🏆 <strong className="text-white">QUANTUM COMPUTING BREAKTHROUGH:</strong> 127-Qubit Processors at Edge | Fortune 100 Success Story
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default October2025QuantumEdgeFusionBanner;
