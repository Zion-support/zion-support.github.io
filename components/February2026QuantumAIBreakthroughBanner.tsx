import React from 'react';
import { Link } from 'react-router-dom';

const February2026QuantumAIBreakthroughBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 px-6 rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🚀 NEWEST BREAKTHROUGH
              </span>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                FEBRUARY 2026
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Quantum Enterprise Automation: $8.7B ROI Revolution
            </h2>
            
            <p className="text-blue-100 text-lg mb-4 max-w-2xl">
              Discover the revolutionary quantum enterprise automation breakthrough delivering unprecedented ROI and 99.98% operational autonomy across Fortune 500 companies.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                💰 $8.7B Combined ROI
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                ⚛️ 99.98% Operational Autonomy
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                🚀 300,000x Performance Improvement
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <Link to="/blog/ai-2026-quantum-enterprise-automation-breakthrough"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Read Full Breakthrough →
            </Link>
            
            <Link to="/case-studies/fortune-500-quantum-ai-transformation-success-story"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              View $12.4B Success Story
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 text-4xl opacity-20 animate-bounce">⚛️</div>
      <div className="absolute bottom-4 left-4 text-3xl opacity-20 animate-pulse">🧠</div>
      <div className="absolute top-1/2 right-8 text-2xl opacity-20 animate-spin">🚀</div>
    </div>
  );
};

export default February2026QuantumAIBreakthroughBanner;