import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Atom, Zap, ArrowRight, Sparkles } from 'lucide-react';

const QuantumComputingPromotionBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900/90 via-indigo-900/90 to-cyan-900/90 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 mb-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-500/10 animate-pulse" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-xl" />
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Atom className="w-6 h-6 text-purple-400" />
                <Zap className="w-5 h-5 text-cyan-400" />
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="text-sm font-medium text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                BREAKTHROUGH
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">
              ⚛️ Quantum Computing Breakthrough!
            </h3>
            
            <p className="text-gray-300 mb-4 max-w-2xl">
              Enter the quantum realm with revolutionary computing power that unlocks infinite 
              possibilities. Experience quantum supremacy, unbreakable cryptography, and exponential processing.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-purple-300">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                10^15x Faster Processing
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Unbreakable Encryption
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                Quantum Supremacy
              </span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/quantum-computing-breakthrough"
              className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px]"
            >
              Enter Quantum Realm
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="border border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300">
              Quantum Demo
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
        className="absolute top-4 right-8 text-purple-400/30"
      >
        <Atom className="w-8 h-8" />
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
        className="absolute bottom-4 left-8 text-cyan-400/30"
      >
        <Zap className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
};

export default QuantumComputingPromotionBanner;