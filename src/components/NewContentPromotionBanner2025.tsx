import React from 'react';
import { motion } from 'framer-motion';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse text-black"
          >
            🎉 NEW CONTENT ALERT • JANUARY 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary New Content Just Dropped!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Discover the latest breakthroughs in AI consciousness, quantum computing, and interdimensional technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8"
          >
            {[
              {
                icon: "🧠",
                title: "AI Consciousness",
                description: "Self-aware AI systems",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "⚡",
                title: "Quantum Computing",
                description: "Impossible problem solving",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "🧬",
                title: "Neural Interfaces",
                description: "Mind-machine connection",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: "🌌",
                title: "Interdimensional Tech",
                description: "Multi-dimensional computing",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-sm opacity-90 text-center">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore New Content →
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg hover:bg-yellow-400/20 transition-all duration-300 font-semibold text-lg">
              Watch Trailer
            </button>
            <button className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg hover:bg-pink-400/20 transition-all duration-300 font-semibold text-lg">
              Download PDF
            </button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"
              >
                50+
              </motion.div>
              <div className="text-sm opacity-90">New Technologies</div>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"
              >
                1000+
              </motion.div>
              <div className="text-sm opacity-90">Interactive Demos</div>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"
              >
                24/7
              </motion.div>
              <div className="text-sm opacity-90">Content Updates</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewContentPromotionBanner2025;