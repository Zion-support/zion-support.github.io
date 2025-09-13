import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, TrendingUp, Star, Award } from 'lucide-react';

const AI2025UltimateBreakthroughContentBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6"
          >
            <Star className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            AI 2025 Ultimate Breakthrough
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Revolutionary AI advancements delivering unprecedented performance gains, 
            quantum-classical hybrid systems, and autonomous decision-making capabilities 
            that transform entire industries overnight.
          </motion.p>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">5,000%</div>
              <div className="text-sm text-gray-300">ROI Increase</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full mb-4 mx-auto">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10,000x</div>
              <div className="text-sm text-gray-300">Faster Processing</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full mb-4 mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">Zero</div>
              <div className="text-sm text-gray-300">Downtime</div>
            </div>
          </motion.div>
        </div>

        {/* Featured Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Revolutionary AI Systems */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Revolutionary AI Systems</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Next-generation neural architectures with quantum-enhanced processing, 
              achieving human-level reasoning across all domains.
            </p>
            <Link
              to="/ai-2025-revolutionary-breakthrough"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Explore Breakthrough
              <Target className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Quantum-Classical Fusion */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum-Classical Fusion</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionary hybrid computing systems combining quantum supremacy 
              with classical optimization for unprecedented problem-solving.
            </p>
            <Link
              to="/quantum-ai-fusion-2025"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Discover Fusion
              <Zap className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Autonomous Operations */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous Operations</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Fully autonomous business systems with self-healing capabilities, 
              predictive maintenance, and intelligent resource allocation.
            </p>
            <Link
              to="/autonomous-operations-2025"
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Learn More
              <TrendingUp className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/ai-2025-ultimate-breakthrough"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Ultimate Breakthrough
            </Link>
            <Link
              to="/ai-2025-implementation-guide"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Implementation Guide
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            Join 10,000+ companies already transforming with AI 2025 breakthroughs
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AI2025UltimateBreakthroughContentBanner;