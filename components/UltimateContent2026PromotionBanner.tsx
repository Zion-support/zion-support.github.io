import React from 'react';
import Link from 'next/link';

const UltimateContent2026PromotionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-cyan-400 rounded-full opacity-15 animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🌟 ULTIMATE CONTENT 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover the Future of AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400">
              Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore the most comprehensive collection of AI technologiesbreakthrough innovations
            and revolutionary solutions that will define 2026 and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/ai-2026-revolutionary-content"
              className="bg-gradient-to-r from-yellow-400 to-cyan-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Explore 2026 Content
            </Link>
            <Link
              href="/ai-2026-demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 backdrop-blur-sm"
            >
              🎯 Try Live Demo
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Neural AI</h3>
              <p className="text-sm opacity-90">Advanced neural networks and brain-computer interfaces</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2">Quantum Computing</h3>
              <p className="text-sm opacity-90">Exponential processing power for complex problems</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Systems</h3>
              <p className="text-sm opacity-90">Self-managing AI that learns and adapts continuously</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContent2026PromotionBanner;