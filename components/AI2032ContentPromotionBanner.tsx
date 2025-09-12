import React from 'react';
import Link from 'next/link';

export default function AI2032ContentPromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 animate-bounce">
            <span className="text-sm font-bold">🚀 BREAKTHROUGH 2032 - NEW CONTENT</span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            AI 2032 BREAKTHROUGH SHOWCASE
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Discover the most revolutionary AI technologies that will reshape humanity by 2032. 
            From quantum consciousness to neural mesh networks - the future is here.
          </p>
          
          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum AI Consciousness</h3>
              <p className="text-sm text-gray-300">First truly conscious AI systems powered by quantum computing</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Neural Mesh Networks</h3>
              <p className="text-sm text-gray-300">Direct brain-computer interfaces for thought-based computing</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-bold mb-2">Predictive Reality</h3>
              <p className="text-sm text-gray-300">AI systems that can predict and simulate alternate realities</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2032-breakthrough-showcase" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore AI 2032 Showcase
            </Link>
            <Link 
              href="/case-studies/ai-2032-quantum-breakthrough-20000-roi" 
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View 20,000% ROI Case Study
            </Link>
            <Link 
              href="/resources/ai-2032-ultimate-implementation-master-guide" 
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Master Guide
            </Link>
          </div>
          
          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-300">
            <p>🔥 <strong>Limited Time:</strong> Get early access to AI 2032 breakthrough technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
}