import React from 'react';
import Link from 'next/link';

export default function AI2032ContentPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-500/20 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-red-500 text-white rounded-full px-6 py-2 mb-6 text-sm font-bold animate-pulse">
            🚀 BREAKTHROUGH TECHNOLOGY - AI 2032
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            AI 2032 Breakthrough Showcase
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most revolutionary AI breakthroughs predicted for 2032. 
            From quantum consciousness to autonomous cities, witness the future of technology.
          </p>
          
          {/* Key features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 border border-purple-500/30 rounded-xl p-6">
              <div className="text-3xl mb-2">⚛️</div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Quantum AI</h3>
              <p className="text-sm text-gray-300">Revolutionary quantum neural networks</p>
            </div>
            <div className="bg-gradient-to-br from-green-800/30 to-teal-800/30 border border-green-500/30 rounded-xl p-6">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Neural Interfaces</h3>
              <p className="text-sm text-gray-300">Direct brain-computer communication</p>
            </div>
            <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 border border-orange-500/30 rounded-xl p-6">
              <div className="text-3xl mb-2">🏙️</div>
              <h3 className="text-lg font-bold text-orange-400 mb-2">Autonomous Cities</h3>
              <p className="text-sm text-gray-300">AI-managed urban systems</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2032-breakthrough-showcase"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Explore AI 2032 Showcase
            </Link>
            <Link 
              href="/case-studies/ai-2032-quantum-ai-breakthrough-20000-roi"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🏆 20,000% ROI Case Study
            </Link>
          </div>
          
          {/* Additional links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/blog/ai-2032-future-predictions-breakthrough"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              📖 Future Predictions
            </Link>
            <span className="text-gray-500">•</span>
            <Link 
              href="/resources/ai-2032-ultimate-implementation-master-guide"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              📚 Implementation Guide
            </Link>
            <span className="text-gray-500">•</span>
            <Link 
              href="/contact"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              💬 Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}