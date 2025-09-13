import React from 'react';
import { Link } from 'react-router-dom';

export default function AI2029BreakthroughPromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-bold">🚀 REVOLUTIONARY BREAKTHROUGH</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI 2029 Breakthrough Showcase
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of artificial intelligence with revolutionary breakthroughs that will transform industries and redefine human-machine collaboration.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold">
              ⚛️ Quantum AI Fusion
            </span>
            <span className="px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold">
              🧠 Neural Synthesis
            </span>
            <span className="px-4 py-2 bg-pink-600 rounded-full text-sm font-semibold">
              🏢 Enterprise Transformation
            </span>
            <span className="px-4 py-2 bg-indigo-600 rounded-full text-sm font-semibold">
              🚀 Space Exploration
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum AI Fusion</h3>
              <p className="text-sm text-gray-300 mb-3">99.7% accuracy with 8000% ROI potential</p>
              <div className="text-xs text-purple-300">BREAKTHROUGH</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Neural Synthesis</h3>
              <p className="text-sm text-gray-300 mb-3">95% patient recovery success rate</p>
              <div className="text-xs text-blue-300">REVOLUTIONARY</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-lg font-bold mb-2">Enterprise AI</h3>
              <p className="text-sm text-gray-300 mb-3">5000% ROI across Fortune 500</p>
              <div className="text-xs text-pink-300">PROVEN</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2029-breakthrough-showcase"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore AI 2029 Breakthroughs
            </Link>
            <Link
              to="/ai-2030-future-predictions"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              View 2030 Predictions
            </Link>
            <Link
              to="/quantum-computing-solutions-breakthrough-2030"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover Quantum Solutions
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Join 10,000+ forward-thinking companies already implementing these revolutionary AI technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
