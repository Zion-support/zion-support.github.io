import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe, Zap, Shield, ArrowRight, Star, Satellite } from 'lucide-react';

const SpaceTechnologyOffWorldBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-20"
    >
      {/* Space Background Animation */}
      <div className="absolute inset-0">
        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Nebula Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20"></div>
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
              <Rocket className="w-4 h-4" />
              SPACE TECHNOLOGY REVOLUTION 2030
              <Star className="w-4 h-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Off-World AI
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Deploying advanced AI systems across the solar system for interplanetary communication, space exploration, and off-world colonization
            </p>
          </motion.div>

          {/* Space Technology Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Satellite className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Interplanetary Network</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Quantum-entangled communication network spanning Mars, Moon, and Earth with instant data transmission
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Space Colony AI</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Autonomous AI systems managing life support, resource optimization, and colony expansion on Mars and beyond
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Zero-G AI Processing</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Advanced quantum processors optimized for space environments with radiation-hardened neural networks
              </p>
            </div>
          </motion.div>

          {/* Space Mission Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-sm text-gray-300">Space Stations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                1M+
              </div>
              <div className="text-sm text-gray-300">AI Satellites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-sm text-gray-300">Mars Colonists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-sm text-gray-300">System Uptime</div>
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
              <Rocket className="w-5 h-5" />
              Explore Space Technology
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Join Mars Mission
            </motion.button>
          </motion.div>

          {/* Space Technology Applications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Off-World Applications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Mars Colony Management',
                'Asteroid Mining AI',
                'Space Tourism Systems',
                'Interplanetary Commerce',
                'Alien Life Detection',
                'Space Weather Prediction',
                'Orbital Manufacturing',
                'Deep Space Exploration'
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

export default SpaceTechnologyOffWorldBanner;