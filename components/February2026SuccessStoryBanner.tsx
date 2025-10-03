import React from 'react';
import { Link } from 'react-router-dom';

const February2026SuccessStoryBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 text-white py-8 px-6 rounded-2xl shadow-2xl border border-amber-500/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-red-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🏆 SUCCESS STORY
              </span>
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                FORTUNE 500
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              $12.4B ROI Success: Fortune 500 Quantum AI Transformation
            </h2>
            
            <p className="text-amber-100 text-lg mb-4 max-w-2xl">
              Discover how a Fortune 500 manufacturing conglomerate achieved unprecedented success through quantum AI transformation, delivering $12.4B ROI in just 18 months.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                💰 $12.4B ROI in 18 Months
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                ⚡ 99.97% Operational Autonomy
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                🚀 267% Innovation Improvement
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <Link to="/case-studies/fortune-500-quantum-ai-transformation-success-story"
              className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Read Full Case Study →
            </Link>
            
            <Link to="/guides/quantum-ai-implementation-roadmap-2026"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              Get Implementation Guide
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 text-4xl opacity-20 animate-bounce">🏆</div>
      <div className="absolute bottom-4 left-4 text-3xl opacity-20 animate-pulse">💰</div>
      <div className="absolute top-1/2 right-8 text-2xl opacity-20 animate-spin">⚡</div>
    </div>
  );
};

export default February2026SuccessStoryBanner;