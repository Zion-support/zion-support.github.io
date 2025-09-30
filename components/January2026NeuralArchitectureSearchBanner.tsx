import React from 'react';
import Link from 'next/link';

export default function January2026NeuralArchitectureSearchBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🚀 BREAKTHROUGH JANUARY 2026
            </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              NEURAL ARCHITECTURE SEARCH REVOLUTION
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Neural Architecture Search: The 2026 AI Development Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Discover how NAS breakthrough technology is delivering <span className="text-yellow-300 font-bold">300-500% performance improvements</span> 
            and <span className="text-green-300 font-bold">95% energy efficiency gains</span> across Fortune 500 enterprises
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-yellow-300 mb-2">300-500%</div>
            <div className="text-sm text-blue-100">Performance Improvement</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🔋</div>
            <div className="text-2xl font-bold text-green-300 mb-2">95%</div>
            <div className="text-sm text-blue-100">Energy Efficiency</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold text-purple-300 mb-2">$200M</div>
            <div className="text-sm text-blue-100">Average ROI</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link 
            href="/blog/ai-2026-neural-architecture-search-breakthrough"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg"
          >
            🚀 Read the Breakthrough Guide
          </Link>
          
          <Link 
            href="/case-studies/ai-2026-neural-architecture-search-mega-success"
            className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-500 hover:to-emerald-600 transition-all transform hover:scale-105 shadow-lg"
          >
            💰 View $200M Success Story
          </Link>
          
          <Link 
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all transform hover:scale-105"
          >
            📞 Start Your NAS Journey
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-blue-200 text-sm">
            ⚠️ <strong>Competitive Advantage Window:</strong> Early adopters are gaining 2-3 years advantage over competitors
          </p>
        </div>
      </div>
    </div>
  );
}