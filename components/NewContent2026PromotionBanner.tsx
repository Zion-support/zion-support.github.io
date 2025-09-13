import React from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border border-purple-400/30 rounded-2xl p-6 mb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🚀 NEW CONTENT 2026
              </span>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🔥 BREAKTHROUGH
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Revolutionary AI & Quantum Computing Content
            </h2>
            
            <p className="text-gray-300 text-lg mb-4">
              Discover groundbreaking new content covering AI automation, quantum AI fusion, and next-generation business transformation technologies.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Link 
                href="/ai-2026-next-generation-business-automation"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                AI Automation 2026
              </Link>
              <Link 
                href="/quantum-ai-fusion-2026-breakthrough"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Quantum AI Fusion
              </Link>
              <Link 
                href="/ai-2026-neural-architecture-revolution"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
              >
                Neural Architecture
              </Link>
              <Link 
                href="/resources"
                className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                All Resources
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-4xl mb-2">⚛️🤖</div>
                <div className="text-white font-bold text-lg">Quantum AI</div>
                <div className="text-gray-300 text-sm">Fusion Technology</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-1/2 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"></div>
    </div>
  );
}