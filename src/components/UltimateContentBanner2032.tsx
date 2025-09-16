import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2032: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -15 }}
      animate={{ opacity: 1, rotateX: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-8 mb-8 rounded-2xl shadow-2xl border border-emerald-400/30 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpolygon points="40,0 80,40 40,80 0,40"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="flex-1 mb-8 xl:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center mb-6"
            >
              <span className="text-5xl mr-5">🌟</span>
              <div className="flex flex-col">
                <span className="px-5 py-2 bg-gradient-to-r from-emerald-400 to-teal-400 text-black rounded-full text-sm font-bold animate-pulse mb-2">
                  ULTIMATE BREAKTHROUGH 2032
                </span>
                <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-semibold">
                  Next-Generation Innovation Hub
                </span>
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Revolutionary Technology Showcase 2032
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl opacity-90 mb-6 max-w-2xl"
            >
              Experience the most advanced AI consciousness systems, quantum reality engines, and interdimensional computing technologies
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              <div className="bg-white/15 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">🧠</div>
                <div className="font-semibold">AI Consciousness</div>
                <div className="text-xs opacity-75">99.9% Accuracy</div>
              </div>
              <div className="bg-white/15 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">⚛️</div>
                <div className="font-semibold">Quantum Reality</div>
                <div className="text-xs opacity-75">∞ Processing</div>
              </div>
              <div className="bg-white/15 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">🌌</div>
                <div className="font-semibold">Interdimensional</div>
                <div className="text-xs opacity-75">47 Dimensions</div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col gap-4 min-w-[320px]"
          >
            <a 
              href="/pages/RevolutionaryTechShowcase2032" 
              className="bg-gradient-to-r from-emerald-400 to-teal-400 text-black px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-center animate-pulse border-2 border-white"
            >
              🌟 Explore 2032 →
            </a>
            <a 
              href="/pages/UltimateAIConsciousness2032" 
              className="bg-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-center border border-white/30"
            >
              AI Consciousness Hub
            </a>
            <a 
              href="/pages/RevolutionaryCaseStudies2032" 
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
            >
              Revolutionary Case Studies
            </a>
            <div className="text-center">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold">
                🚀 Available Now
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2032;