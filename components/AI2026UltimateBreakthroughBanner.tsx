import React from 'react';
import Link from 'next/link';

const AI2026UltimateBreakthroughBanner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500 rounded-full opacity-5 animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8 backdrop-blur-sm border border-white border-opacity-30">
            <span className="text-lg font-bold">🌟 AI 2026 ULTIMATE BREAKTHROUGH</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The Future of AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Is Here Today
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Experience unprecedented AI capabilities with quantum-enhanced processing, 
            neural interface technology, and autonomous systems that think, learn, and evolve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/ai-2026-ultimate-breakthrough"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-10 py-5 rounded-xl font-bold text-xl hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🚀 Explore Breakthrough
            </Link>
            <Link
              href="/ai-2026-demo"
              className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-indigo-900 transition-all duration-300 backdrop-blur-sm"
            >
              🎯 Try Live Demo
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-15 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Neural Processing</h3>
              <p className="text-sm opacity-90">1000x faster than traditional AI</p>
            </div>
            <div className="bg-white bg-opacity-15 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Quantum Speed</h3>
              <p className="text-sm opacity-90">Exponential processing power</p>
            </div>
            <div className="bg-white bg-opacity-15 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold mb-3">Predictive AI</h3>
              <p className="text-sm opacity-90">99.9% accuracy predictions</p>
            </div>
            <div className="bg-white bg-opacity-15 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3">Global Network</h3>
              <p className="text-sm opacity-90">Worldwide AI collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026UltimateBreakthroughBanner;