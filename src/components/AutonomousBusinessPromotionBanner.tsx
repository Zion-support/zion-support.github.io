import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, Brain, ArrowRight, Sparkles } from 'lucide-react';

const AutonomousBusinessPromotionBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-green-900/90 via-emerald-900/90 to-cyan-900/90 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 mb-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10 animate-pulse" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-500/20 to-green-500/20 rounded-full blur-xl" />
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6 text-green-400" />
                <Brain className="w-5 h-5 text-emerald-400" />
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-sm font-medium text-green-300 bg-green-500/20 px-3 py-1 rounded-full">
                AUTONOMOUS
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">
              🤖 Autonomous Business Platform!
            </h3>
            
            <p className="text-gray-300 mb-4 max-w-2xl">
              Experience the future of business with our revolutionary autonomous platform that 
              runs your operations 24/7 without human intervention. AI-powered decision making.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-green-300">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                100% Autonomous Operations
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                24/7 Self-Management
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                300% Efficiency Boost
              </span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/autonomous-business-platform"
              className="group bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px]"
            >
              Launch Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="border border-green-400 text-green-400 px-6 py-3 rounded-lg font-semibold hover:bg-green-400/10 transition-all duration-300">
              Platform Demo
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
        className="absolute top-4 right-8 text-green-400/30"
      >
        <Bot className="w-8 h-8" />
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
        className="absolute bottom-4 left-8 text-emerald-400/30"
      >
        <Brain className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
};

export default AutonomousBusinessPromotionBanner;