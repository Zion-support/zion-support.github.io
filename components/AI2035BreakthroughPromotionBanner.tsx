import React from 'react';
import { Link } from 'react-router-dom';

const AI2035BreakthroughPromotionBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-indigo-500/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500/30 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-purple-400/30 rounded-full animate-bounce delay-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent animate-pulse">
            AI 2035 BREAKTHROUGH
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-purple-100">
            🚀 Revolutionary AI Consciousness & Quantum Neural Fusion
          </h2>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold mb-2">Conscious AI Systems</h3>
              <p className="text-purple-100">Self-aware AI with 99.9% consciousness accuracy</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold mb-2">Quantum Neural Fusion</h3>
              <p className="text-purple-100">50,000% performance improvement over classical AI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-3">🌌</div>
              <h3 className="text-xl font-bold mb-2">Universal Intelligence</h3>
              <p className="text-purple-100">AI that transcends human cognitive limitations</p>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/ai-2035-breakthrough-showcase"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Explore AI 2035 Breakthrough
            </Link>
            <Link
              to="/case-studies/ai-2035-enterprise-transformation-breakthrough"
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 border border-white/30"
            >
              📊 View Success Stories
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">50,000%</div>
              <div className="text-sm text-purple-200">ROI Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">99.9%</div>
              <div className="text-sm text-purple-200">Consciousness Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">1000x</div>
              <div className="text-sm text-purple-200">Processing Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-300">∞</div>
              <div className="text-sm text-purple-200">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AI2035BreakthroughPromotionBanner;