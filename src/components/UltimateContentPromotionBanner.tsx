import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Atom, Bot, Sparkles, ArrowRight, Star, Zap } from 'lucide-react';

const UltimateContentPromotionBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-cyan-900/95 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 mb-12"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 animate-pulse" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-green-500/20 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full blur-xl" />
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Brain className="w-10 h-10 text-cyan-400" />
            <Atom className="w-10 h-10 text-purple-400" />
            <Bot className="w-10 h-10 text-green-400" />
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-sm font-medium text-cyan-300 bg-cyan-500/20 px-4 py-2 rounded-full">
              REVOLUTIONARY TECHNOLOGY
            </span>
            <span className="text-sm font-medium text-purple-300 bg-purple-500/20 px-4 py-2 rounded-full">
              BREAKTHROUGH INNOVATION
            </span>
            <span className="text-sm font-medium text-green-300 bg-green-500/20 px-4 py-2 rounded-full">
              AUTONOMOUS SYSTEMS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            🚀 Ultimate Technology Revolution
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the future of technology with our revolutionary AI, quantum computing, 
            and autonomous business solutions that transform how businesses operate in the digital age.
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* AI Revolution 2025 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-lg p-6 h-full hover:border-cyan-400/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-cyan-400" />
                <div>
                  <h3 className="text-lg font-bold text-white">AI Revolution 2025</h3>
                  <p className="text-sm text-cyan-300">Autonomous AI Agents</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Revolutionary AI with autonomous agents, quantum processing, and predictive intelligence.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">99.9% Uptime</span>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">10x Performance</span>
              </div>
              <Link
                to="/ai-revolution-2025"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold"
              >
                Explore AI Revolution
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          
          {/* Quantum Computing Breakthrough */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-500/30 rounded-lg p-6 h-full hover:border-purple-400/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Atom className="w-8 h-8 text-purple-400" />
                <div>
                  <h3 className="text-lg font-bold text-white">Quantum Computing</h3>
                  <p className="text-sm text-purple-300">Breakthrough Technology</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Enter the quantum realm with exponential processing power and unbreakable security.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">10^15x Faster</span>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">∞ Security</span>
              </div>
              <Link
                to="/quantum-computing-breakthrough"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold"
              >
                Enter Quantum Realm
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          
          {/* Autonomous Business Platform */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border border-green-500/30 rounded-lg p-6 h-full hover:border-green-400/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold text-white">Autonomous Business</h3>
                  <p className="text-sm text-green-300">Self-Managing Platform</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Revolutionary platform that runs operations 24/7 without human intervention.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">100% Autonomous</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">300% Efficiency</span>
              </div>
              <Link
                to="/autonomous-business-platform"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-semibold"
              >
                Launch Platform
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-cyan-300">
              <Star className="w-4 h-4" />
              <span>500+ Solutions Deployed</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-purple-300">
              <Zap className="w-4 h-4" />
              <span>24/7 Innovation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-300">
              <Sparkles className="w-4 h-4" />
              <span>Future-Ready Technology</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              Start Your Revolution
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-8 right-12 text-cyan-400/20"
      >
        <Brain className="w-12 h-12" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-8 left-12 text-purple-400/20"
      >
        <Atom className="w-10 h-10" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/3 left-8 text-green-400/20"
      >
        <Bot className="w-8 h-8" />
      </motion.div>
    </motion.div>
  );
};

export default UltimateContentPromotionBanner;