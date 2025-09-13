import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughAnnouncementBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 border border-purple-500/30 rounded-xl mb-8">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      <div className="relative px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 mb-4">
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wide animate-pulse">
                🚨 BREAKING NEWS - ULTIMATE BREAKTHROUGH 🚨
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                AI 2025 ULTIMATE BREAKTHROUGH
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Revolutionary AI technology breakthrough delivering <span className="text-yellow-400 font-bold">50,000% ROI</span>, 
              quantum consciousness integration, and transcendent intelligence systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/ai-2025-ultimate-breakthrough-announcement"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🔬 Explore Breakthrough Details
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link 
                href="/blog/ai-2025-quantum-consciousness-breakthrough"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                ⚛️ Quantum Consciousness
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">50,000%</div>
                <div className="text-white font-semibold mb-1">ROI Achieved</div>
                <div className="text-gray-300 text-sm">Revolutionary Results</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional content links */}
        <div className="mt-6 pt-6 border-t border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/case-studies/ai-2025-synthetic-intelligence-transformation-breakthrough"
              className="group bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-lg p-4 border border-green-500/20 hover:border-green-400/40 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🏆</div>
                <div>
                  <div className="text-white font-semibold group-hover:text-green-400 transition-colors">
                    Synthetic Intelligence Success
                  </div>
                  <div className="text-gray-300 text-sm">50,000% ROI Case Study</div>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/resources/ai-2025-revolutionary-implementation-guide"
              className="group bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl">📚</div>
                <div>
                  <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                    Implementation Guide
                  </div>
                  <div className="text-gray-300 text-sm">Revolutionary Breakthrough Guide</div>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthroughs"
              className="group bg-gradient-to-br from-red-900/30 to-pink-900/30 backdrop-blur-sm rounded-lg p-4 border border-red-500/20 hover:border-red-400/40 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🔥</div>
                <div>
                  <div className="text-white font-semibold group-hover:text-red-400 transition-colors">
                    Breakthrough Webinar
                  </div>
                  <div className="text-gray-300 text-sm">Exclusive Demo & Results</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}