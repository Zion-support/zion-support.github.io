import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Zap, ArrowRight, Sparkles } from 'lucide-react';

const AIRevolutionPromotionBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900/90 via-cyan-900/90 to-blue-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 mb-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 animate-pulse" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-xl" />
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-cyan-400" />
                <Zap className="w-5 h-5 text-yellow-400" />
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm font-medium text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full">
                NEW RELEASE
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">
              🚀 AI Revolution 2025 is Here!
            </h3>
            
            <p className="text-gray-300 mb-4 max-w-2xl">
              Experience the future of artificial intelligence with autonomous agents, quantum processing, 
              and predictive intelligence that transforms your business operations.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-cyan-300">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Autonomous AI Agents
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                Quantum Processing
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                Predictive Intelligence
              </span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/ai-revolution-2025"
              className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px]"
            >
              Explore AI Revolution
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-4 right-8 text-cyan-400/30"
      >
        <Brain className="w-8 h-8" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-4 left-8 text-purple-400/30"
      >
        <Zap className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
};

export default AIRevolutionPromotionBanner;