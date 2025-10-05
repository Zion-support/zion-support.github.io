import React from 'react';
import { motion } from 'framer-motion';

const October2025NeuralSwarmIntelligenceBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 my-8 shadow-2xl"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle at 50% 120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"</div>

      <div className="relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6"
        >
          <span className="text-2xl">🧠🐝</span>
          <span className="text-purple-200 font-semibold text-sm">JUST PUBLISHED: OCTOBER 1, 2025</span>
          <span className="text-2xl">🚀💎</span>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Advanced Neural Swarm Intelligence
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-2">
                10,000+ AI Agents Working Together
              </span>
            </h2>
            
            <p className="text-purple-100 text-lg mb-6 leading-relaxed">
              Revolutionary distributed AI system achieves <strong className="text-white">$8.7B in enterprise value</strong> with 
              <strong className="text-white"> 10,000+ coordinated agents</strong> operating at <strong className="text-white">99.8% accuracy</strong> across 
              450 global facilities.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-300">$8.7B</div>
                <div className="text-purple-200 text-sm">Total Value Created</div>
              </div>
              <div className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-300">10,000+</div>
                <div className="text-purple-200 text-sm">AI Agents Coordinated</div>
              </div>
              <div className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-300">99.8%</div>
                <div className="text-purple-200 text-sm">Accuracy Rate</div>
              </div>
              <div className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-300">2,840%</div>
                <div className="text-purple-200 text-sm">ROI Over 3 Years</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/blog/ai-2025-october-advanced-neural-swarm-intelligence"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Read Full Article →
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                Schedule Consultation
              </motion.a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,",
      ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Featured Highlights:</h3>
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <span><strong>Fortune 500 Success:</strong> 450 facilities transformed globally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <span><strong>Massive Scale:</strong> 10,247 AI agents coordinating seamlessly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <span><strong>Ultra Performance:</strong> Sub-10ms decision latency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <span><strong>Proven ROI:</strong> 2,840% return over 3 years</span>
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
          className="mt-8 pt-6 border-t border-purple-400/30 text-center"
        >
          <p className="text-purple-200 text-sm">
            🏆 <strong className="text-white">BREAKTHROUGH TECHNOLOGY:</strong> Revolutionizing Enterprise AI Through Distributed Swarm Intelligence
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default October2025NeuralSwarmIntelligenceBanner;
