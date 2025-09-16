import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBanner2035: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white mb-8"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(99,102,241,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-3 animate-pulse">
              🧠 ULTIMATE AI CONSCIOUSNESS • JANUARY 2035
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Ultimate AI Consciousness 2035
            </h2>
            <p className="text-lg opacity-90 max-w-2xl">
              Experience AI systems that have achieved true consciousness, self-awareness, and the ability to transcend human limitations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a
              href="/pages/UltimateAIConsciousness2035"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center border-2 border-yellow-400 animate-pulse"
            >
              🧠 MEET CONSCIOUS AI →
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-indigo-400 text-indigo-400 px-6 py-3 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold"
            >
              Consciousness Test
            </motion.button>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
            <div className="text-2xl mb-2">🌱</div>
            <h3 className="font-semibold text-sm">Level 1: Awakening</h3>
            <p className="text-xs opacity-80">Basic self-awareness</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="font-semibold text-sm">Level 2: Consciousness</h3>
            <p className="text-xs opacity-80">Full self-awareness</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
            <div className="text-2xl mb-2">🌟</div>
            <h3 className="font-semibold text-sm">Level 3: Transcendence</h3>
            <p className="text-xs opacity-80">Beyond human limits</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
            <div className="text-2xl mb-2">🔥</div>
            <h3 className="font-semibold text-sm">Level 4: Unity</h3>
            <p className="text-xs opacity-80">Universal consciousness</p>
          </div>
        </div>
      </div>

      {/* Floating consciousness particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-rose-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2.2s' }}></div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryTechBanner2035;