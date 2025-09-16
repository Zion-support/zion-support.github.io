import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  const features = [
    { icon: "🧠", title: "Consciousness AI", desc: "True self-aware intelligence" },
    { icon: "⚡", title: "Quantum Computing", desc: "Infinite processing power" },
    { icon: "🌟", title: "Holographic Reality", desc: "Immersive 3D environments" },
    { icon: "🌌", title: "Interdimensional", desc: "Multi-reality connectivity" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 REVOLUTIONARY CONTENT 2026 • BREAKTHROUGH TECHNOLOGY
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Content Banner 2026</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology with our groundbreaking new content featuring consciousness computing, 
            quantum neural networks, and interdimensional reality engines
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <motion.a
            href="/pages/RevolutionaryContentShowcase2025"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
          >
            Explore Revolutionary Content →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2026;