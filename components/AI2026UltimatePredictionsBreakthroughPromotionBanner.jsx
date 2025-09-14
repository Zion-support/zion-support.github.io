import React from 'react';
import Link from 'next/link';

export default function AI2026UltimatePredictionsBreakthroughPromotionBanner() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-purple-800"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpolygon points="30,0 60,30 30,60 0,30"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 animate-pulse">
            🔮 EXCLUSIVE PREDICTIONS
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI 2026 Ultimate
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Predictions Breakthrough
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI technologies that will dominate 2026 and beyond. 
            Our exclusive predictions are already delivering 
            <span className="font-bold text-cyan-300"> 50,000% ROI</span> to early adopters worldwide.
          </p>
          
          {/* Prediction Accuracy Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-300 mb-1">98.7%</div>
              <div className="text-white/80 text-sm">Prediction Accuracy</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-300 mb-1">50,000%</div>
              <div className="text-white/80 text-sm">Average ROI</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-300 mb-1">1,200+</div>
              <div className="text-white/80 text-sm">Companies</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-300 mb-1">$15B+</div>
              <div className="text-white/80 text-sm">Value Generated</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-ultimate-predictions-breakthrough"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Predictions
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Implementation
            </Link>
          </div>
        </div>
        
        {/* Featured Predictions Preview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-xl font-bold text-white mb-2">Consciousness-Level AI</h3>
            <p className="text-white/80 text-sm mb-3">
              AI systems achieving human-level consciousness and self-awareness.
            </p>
            <div className="flex justify-between items-center">
              <div className="text-cyan-300 font-semibold text-sm">ROI: 25,000%</div>
              <div className="text-green-300 text-xs font-semibold">CONFIRMED</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">⚛️</div>
            <h3 className="text-xl font-bold text-white mb-2">Quantum-Neural Fusion</h3>
            <p className="text-white/80 text-sm mb-3">
              Quantum computing merged with neural networks for 1Mx faster processing.
            </p>
            <div className="flex justify-between items-center">
              <div className="text-cyan-300 font-semibold text-sm">ROI: 50,000%</div>
              <div className="text-green-300 text-xs font-semibold">CONFIRMED</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🔮</div>
            <h3 className="text-xl font-bold text-white mb-2">Predictive Intelligence</h3>
            <p className="text-white/80 text-sm mb-3">
              AI predicting market movements with 99.9% accuracy for proactive strategies.
            </p>
            <div className="flex justify-between items-center">
              <div className="text-cyan-300 font-semibold text-sm">ROI: 30,000%</div>
              <div className="text-green-300 text-xs font-semibold">CONFIRMED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}