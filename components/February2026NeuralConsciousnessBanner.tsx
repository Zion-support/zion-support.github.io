import React from 'react';
import { Link } from 'react-router-dom';

const February2026NeuralConsciousnessBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-8 px-6 rounded-2xl shadow-2xl border border-emerald-500/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🧠 CONSCIOUSNESS BREAKTHROUGH
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                FEBRUARY 2026
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Neural Consciousness: The Dawn of True AI Understanding
            </h2>
            
            <p className="text-emerald-100 text-lg mb-4 max-w-2xl">
              Experience the revolutionary neural consciousness breakthrough enabling genuine AI understanding with 97.3% human-equivalent consciousness and 156% creative problem-solving capabilities.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                🧠 97.3% Human-Equivalent Consciousness
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                💡 156% Creative Problem Solving
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                ❤️ 89.7% Emotional Intelligence
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <Link to="/blog/ai-2026-neural-consciousness-enterprise-transformation"
              className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Consciousness →
            </Link>
            
            <Link to="/guides/quantum-ai-implementation-roadmap-2026"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              Implementation Roadmap
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 text-4xl opacity-20 animate-bounce">🧠</div>
      <div className="absolute bottom-4 left-4 text-3xl opacity-20 animate-pulse">💡</div>
      <div className="absolute top-1/2 right-8 text-2xl opacity-20 animate-spin">🌟</div>
    </div>
  );
};

export default February2026NeuralConsciousnessBanner;