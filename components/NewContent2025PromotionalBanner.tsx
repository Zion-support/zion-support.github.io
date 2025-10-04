import React from 'react';
import { Link } from 'react-router-dom';

export default function NewContent2025PromotionalBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-4 w-24 h-24 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-indigo-500 rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl lg:text-2xl font-bold mb-2">
              🚀 NEW 2025 AI BREAKTHROUGHS RELEASED!
            </h2>
            <p className="text-sm lg:text-base opacity-90">
              Revolutionary autonomous systems, quantum-enhanced BI, and cloud operations delivering $50B+ in proven savings
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
            <Link to="/blog/ai-2025-next-generation-autonomous-systems-revolution"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🤖 99.9% AUTONOMOUS
            </Link>
            
            <Link to="/blog/ai-2025-quantum-enhanced-business-intelligence-breakthrough"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ⚛️ 1000x QUANTUM BI
            </Link>
            
            <Link to="/blog/ai-2025-autonomous-cloud-operations-revolution"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ☁️ $5.2B CLOUD SAVINGS
            </Link>
            
            <Link to="/content-hub"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📚 VIEW ALL CONTENT
            </Link>
          </div>
        </div>
        
        {/* Success metrics ticker */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">💰</span>
              <span>$50B+ Proven Savings</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">⚡</span>
              <span>1000x Faster Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">🎯</span>
              <span>99.9% Automation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">🏆</span>
              <span>Fortune 500 Proven</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}