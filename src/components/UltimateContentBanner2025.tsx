import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse shadow-lg"
          >
            🌟 ULTIMATE TECHNOLOGY BREAKTHROUGH • 2025
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
          >
            Ultimate Tech Revolution
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl font-semibold mb-6 opacity-90"
          >
            The Most Advanced Technology Platform Ever Created
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl opacity-80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the convergence of artificial intelligence, quantum computing, neural interfaces, 
            and interdimensional technology in one revolutionary platform that will reshape the future of humanity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl w-full sm:w-auto transform hover:scale-105">
              🚀 Start Your Journey →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-6 rounded-xl hover:bg-purple-400/10 transition-all duration-300 font-bold text-xl w-full sm:w-auto">
              📺 Watch Demo
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-6 rounded-xl hover:bg-cyan-400/10 transition-all duration-300 font-bold text-xl w-full sm:w-auto">
              📚 Learn More
            </button>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-center">Conscious AI</h3>
              <p className="text-sm opacity-80 text-center">Self-aware artificial intelligence that thinks and feels</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">⚛️</div>
              <h3 className="text-xl font-bold mb-3 text-center">Quantum Power</h3>
              <p className="text-sm opacity-80 text-center">Infinite processing power through quantum computing</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🧬</div>
              <h3 className="text-xl font-bold mb-3 text-center">Neural Interface</h3>
              <p className="text-sm opacity-80 text-center">Direct mind-machine connection technology</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🌌</div>
              <h3 className="text-xl font-bold mb-3 text-center">Interdimensional</h3>
              <p className="text-sm opacity-80 text-center">Computing across multiple dimensions</p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Revolutionary Impact</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">99.99%</div>
                <div className="text-lg opacity-80">Accuracy Rate</div>
                <div className="text-sm opacity-60">In all AI predictions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
                <div className="text-lg opacity-80">Processing Power</div>
                <div className="text-sm opacity-60">Quantum computing</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">1M+</div>
                <div className="text-lg opacity-80">Neural Connections</div>
                <div className="text-sm opacity-60">Per second</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-400 mb-2">42</div>
                <div className="text-lg opacity-80">Dimensions</div>
                <div className="text-sm opacity-60">Parallel processing</div>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16 text-center"
          >
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Reality?</h3>
            <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
              Join the revolution and be part of the most advanced technology platform ever created
            </p>
            <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 px-16 py-6 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-2xl transform hover:scale-105 animate-pulse">
              🌟 Start Your Transformation Today →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;