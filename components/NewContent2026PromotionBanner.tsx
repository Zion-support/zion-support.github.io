import React from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main heading with animated text */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold mb-8 animate-pulse shadow-lg">
            🚀 NEW BREAKTHROUGH CONTENT 2026
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Revolutionary AI 2026 Content
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI predictions, quantum computing breakthroughs, and enterprise success stories. 
            <span className="font-bold text-yellow-300"> Up to 50,000% ROI potential</span> with our revolutionary content.
          </p>

          {/* Content showcase grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* AI 2026 Predictions */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔮</div>
              <h3 className="text-xl font-bold mb-3">AI 2026 Ultimate Predictions</h3>
              <p className="text-purple-100 mb-4 text-sm">
                Revolutionary breakthroughs in quantum computing, neural interfaces, and autonomous systems.
              </p>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block">
                15,000% ROI Potential
              </div>
            </div>

            {/* Quantum Computing */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
              <h3 className="text-xl font-bold mb-3">Quantum Computing Breakthrough</h3>
              <p className="text-purple-100 mb-4 text-sm">
                Error-corrected quantum computers, quantum internet, and quantum-AI fusion technologies.
              </p>
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block">
                ∞ ROI Potential
              </div>
            </div>

            {/* Enterprise Case Study */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
              <h3 className="text-xl font-bold mb-3">Enterprise Transformation</h3>
              <p className="text-purple-100 mb-4 text-sm">
                Fortune 500 company achieves 50,000% ROI through revolutionary AI implementation.
              </p>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block">
                50,000% ROI Achieved
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-ultimate-predictions-breakthrough" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View AI 2026 Predictions
            </Link>
            <Link 
              href="/quantum-computing-breakthrough-2030" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum Computing
            </Link>
            <Link 
              href="/case-studies/ai-2026-enterprise-transformation-50000-roi" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Success Story
            </Link>
          </div>

          {/* Additional content links */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              href="/tools/ai-2026-roi-calculator" 
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🧮</div>
              <div className="text-sm font-semibold">ROI Calculator</div>
            </Link>
            <Link 
              href="/resources/ai-2026-ultimate-implementation-master-guide" 
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📚</div>
              <div className="text-sm font-semibold">Implementation Guide</div>
            </Link>
            <Link 
              href="/webinars/ai-2026-revolutionary-breakthroughs" 
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🔥</div>
              <div className="text-sm font-semibold">Live Webinar</div>
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">💬</div>
              <div className="text-sm font-semibold">Get Consulting</div>
            </Link>
          </div>

          {/* Urgency indicator */}
          <div className="mt-8 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold animate-pulse">
            ⚡ Limited Time: Early Access to Revolutionary Content
          </div>
        </div>
      </div>
    </div>
  );
}