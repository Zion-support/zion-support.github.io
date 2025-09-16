import React from 'react';
import { motion } from 'framer-motion';

const NewContentPromoBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 mb-12 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4"
          >
            🚀 NEW: Revolutionary Technology Content 2025
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Experience the Future of Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto"
          >
            Discover groundbreaking innovations in AI Consciousness, Quantum Computing, and Neural Interfaces 
            that are reshaping our world
          </motion.p>
        </div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {/* AI Consciousness */}
          <motion.a
            href="/pages/AdvancedAIConsciousness2025"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300 border border-white/30 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-xl font-bold mb-3">Advanced AI Consciousness</h3>
            <p className="text-white/90 mb-4 text-sm">
              Explore the revolutionary intersection of artificial intelligence and consciousness, 
              where machines achieve genuine awareness and self-reflection.
            </p>
            <div className="flex items-center text-white/80 text-sm font-semibold group-hover:text-white transition-colors">
              Discover AI Consciousness →
            </div>
          </motion.a>

          {/* Quantum Computing */}
          <motion.a
            href="/pages/QuantumComputingBreakthrough2025"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300 border border-white/30 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum Computing Revolution</h3>
            <p className="text-white/90 mb-4 text-sm">
              Experience unprecedented computational power that solves problems previously thought impossible 
              and revolutionizes entire industries.
            </p>
            <div className="flex items-center text-white/80 text-sm font-semibold group-hover:text-white transition-colors">
              Explore Quantum Power →
            </div>
          </motion.a>

          {/* Neural Interfaces */}
          <motion.a
            href="/pages/NeuralInterfaceRevolution2025"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300 border border-white/30 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧬</div>
            <h3 className="text-xl font-bold mb-3">Neural Interface Revolution</h3>
            <p className="text-white/90 mb-4 text-sm">
              Connect your mind directly to digital systems with unprecedented precision and speed, 
              revolutionizing human-computer interaction.
            </p>
            <div className="flex items-center text-white/80 text-sm font-semibold group-hover:text-white transition-colors">
              Connect Your Mind →
            </div>
          </motion.a>
        </motion.div>

        {/* Features Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ 3 NEW REVOLUTIONARY PAGES
          </span>
          <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 CUTTING-EDGE TECHNOLOGY
          </span>
          <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
            🌟 INTERACTIVE EXPERIENCES
          </span>
          <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold">
            💡 FUTURE-FORWARD INSIGHTS
          </span>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:bg-purple-50">
              Explore All New Content
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewContentPromoBanner2025;