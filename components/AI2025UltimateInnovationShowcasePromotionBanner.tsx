import React from 'react';
import Link from 'next/link';

const AI2025UltimateInnovationShowcasePromotionBanner = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-500/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-6 border border-white/20">
            <span className="text-yellow-400 text-lg mr-2">🚀</span>
            <span className="text-white font-semibold">Revolutionary Breakthrough</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI 2025 Ultimate Innovation Showcase
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Witness the most revolutionary AI breakthroughs reshaping our world. 
            From quantum neural fusion to autonomous consciousness systems - 
            <span className="text-yellow-400 font-semibold"> the future is here</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/ai-2025-ultimate-innovation-showcase" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Breakthroughs →
            </Link>
            <Link 
              href="/ai-2025-ultimate-innovation-showcase#quantum-breakthroughs" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Quantum AI Fusion
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-purple-400 text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum Neural Networks</h3>
              <p className="text-gray-300 text-sm">
                Breakthrough quantum neural architectures processing information at impossible speeds
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-blue-400 text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-white mb-2">Consciousness Computing</h3>
              <p className="text-gray-300 text-sm">
                First successful implementation of synthetic consciousness in quantum systems
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-green-400 text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">Autonomous Systems</h3>
              <p className="text-gray-300 text-sm">
                Fully autonomous AI systems operating independently across multiple domains
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">300%</div>
              <div className="text-white font-semibold">ROI Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-white font-semibold">Breakthrough Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-white font-semibold">Autonomous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-white font-semibold">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateInnovationShowcasePromotionBanner;