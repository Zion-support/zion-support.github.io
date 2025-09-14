import React from 'react';
import Link from 'next/link';

const AI2025_2026UltimateBreakthroughPromotionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-purple-400 rounded-full opacity-20 animate-pulse delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025-2026 BREAKTHROUGH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            AI 2025-2026 Ultimate Breakthrough
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI technologies that will transform your business in 2025-2026. 
            Experience unprecedented automation, intelligence, and growth with our cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Advanced Neural Networks</h3>
            <p className="text-gray-300 mb-4">
              Next-generation AI models with 1000x processing power and human-like reasoning capabilities.
            </p>
            <div className="text-yellow-400 font-semibold">Available Q1 2025</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Quantum AI Processing</h3>
            <p className="text-gray-300 mb-4">
              Revolutionary quantum computing integration for instant decision-making and optimization.
            </p>
            <div className="text-yellow-400 font-semibold">Available Q2 2025</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-3">Autonomous Business Systems</h3>
            <p className="text-gray-300 mb-4">
              Fully autonomous business operations with self-optimizing workflows and predictive analytics.
            </p>
            <div className="text-yellow-400 font-semibold">Available Q3 2025</div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/ai-2025-2026-ultimate-breakthrough"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Explore Breakthrough Technologies
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get Early Access
            </Link>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold mb-3">🎯 Expected ROI: 500-1000%</h4>
            <p className="text-sm opacity-90">
              Early adopters of our 2025-2026 AI breakthrough technologies are seeing unprecedented returns on investment, 
              with some clients reporting up to 1000% ROI within the first year of implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2026UltimateBreakthroughPromotionBanner;