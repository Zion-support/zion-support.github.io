import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimateBreakthroughBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold mb-6 animate-bounce">
            🚀 NEW REVOLUTIONARY CONTENT
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most revolutionary AI breakthrough in human history. 
            <span className="text-yellow-400 font-bold"> 15,000% ROI</span>, 
            <span className="text-cyan-400 font-bold"> 99.9% accuracy</span>, and 
            <span className="text-green-400 font-bold"> quantum-neural fusion</span> technology.
          </p>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum-Neural Fusion</h3>
              <p className="text-sm text-gray-300">10,000x faster processing</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 p-6 rounded-xl border border-cyan-500/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Transcendent Intelligence</h3>
              <p className="text-sm text-gray-300">99.9% accuracy</p>
            </div>
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-6 rounded-xl border border-green-500/20">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Operations</h3>
              <p className="text-sm text-gray-300">95% cost reduction</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-ultimate-breakthrough-success"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 shadow-lg"
            >
              View Success Stories
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-guide"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              Implementation Guide
            </Link>
          </div>
          
          {/* Additional content links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/ai-2026-2030-ultimate-content-revolution"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              🔮 AI 2026-2030 Predictions
            </Link>
            <Link 
              href="/quantum-computing-breakthroughs-2025"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              ⚛️ Quantum Computing
            </Link>
            <Link 
              href="/case-studies"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              🏆 Success Stories
            </Link>
            <Link 
              href="/webinars"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              🔥 Live Webinars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}