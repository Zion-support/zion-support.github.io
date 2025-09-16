import React from 'react';
import { motion } from 'framer-motion';

const NeuralRealityBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/50 to-cyan-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-pulse">🧠</span>
          <h3 className="text-3xl font-bold">NEURAL REALITY INTERFACE 2026</h3>
          <span className="text-3xl animate-pulse">⚡</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-5xl mx-auto">
          Revolutionary neural interface technology enabling direct brain-computer interaction 
          for reality manipulation, consciousness expansion, and infinite computational access
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <a href="/pages/NeuralRealityInterface2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30">
            🧠 Neural Interface →
          </a>
          <a href="/pages/NeuralRealityInterface2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-teal-600 transition-all duration-300 font-semibold border border-white/30">
            🚀 Consciousness Expansion →
          </a>
          <a href="/pages/NeuralRealityInterface2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold border border-white/30">
            ♾️ Infinite Computing →
          </a>
        </div>
      </div>
      
      {/* Animated Neural Network Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500"></div>
        
        {/* Neural connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
          <path d="M50,50 Q200,100 350,50" stroke="white" strokeWidth="1" fill="none" className="animate-pulse">
            <animate attributeName="stroke-dasharray" values="0,100;100,0;0,100" dur="3s" repeatCount="indefinite"/>
          </path>
          <path d="M50,150 Q200,100 350,150" stroke="white" strokeWidth="1" fill="none" className="animate-pulse delay-1000">
            <animate attributeName="stroke-dasharray" values="0,100;100,0;0,100" dur="3s" repeatCount="indefinite"/>
          </path>
          <path d="M50,250 Q200,200 350,250" stroke="white" strokeWidth="1" fill="none" className="animate-pulse delay-2000">
            <animate attributeName="stroke-dasharray" values="0,100;100,0;0,100" dur="3s" repeatCount="indefinite"/>
          </path>
        </svg>
      </div>
    </motion.div>
  );
};

export default NeuralRealityBanner;