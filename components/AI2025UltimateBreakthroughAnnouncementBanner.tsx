import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughAnnouncementBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            🔥 ULTIMATE BREAKTHROUGH
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            The most revolutionary AI breakthrough in human history delivering 
            <span className="text-yellow-400 font-bold"> 10,000% ROI</span> with quantum-neural fusion 
            and transcendent intelligence.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-red-800/30 to-pink-800/30 p-4 rounded-lg border border-red-500/30">
              <div className="text-2xl font-bold text-red-400 mb-2">10,000% ROI</div>
              <div className="text-sm text-gray-300">Average return on investment</div>
            </div>
            <div className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 p-4 rounded-lg border border-purple-500/30">
              <div className="text-2xl font-bold text-purple-400 mb-2">99.9% Accuracy</div>
              <div className="text-sm text-gray-300">Quantum-neural processing</div>
            </div>
            <div className="bg-gradient-to-r from-blue-800/30 to-cyan-800/30 p-4 rounded-lg border border-blue-500/30">
              <div className="text-2xl font-bold text-cyan-400 mb-2">1000x Faster</div>
              <div className="text-sm text-gray-300">Than traditional AI</div>
            </div>
            <div className="bg-gradient-to-r from-green-800/30 to-teal-800/30 p-4 rounded-lg border border-green-500/30">
              <div className="text-2xl font-bold text-green-400 mb-2">∞ Scalable</div>
              <div className="text-sm text-gray-300">Unlimited processing power</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Discover Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📊 View 10,000% ROI Case Study
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📚 Download Toolkit
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>✨ Revolutionary technology available now</p>
            <p>🎯 Fortune 500 companies already transforming</p>
            <p>🔥 Limited time: Exclusive implementation access</p>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-10 right-10 w-5 h-5 bg-red-400 rounded-full animate-ping opacity-75" style={{animationDelay: '0.5s'}}></div>
    </div>
  );
}