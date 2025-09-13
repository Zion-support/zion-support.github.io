import React from 'react';
import { Link } from 'react-router-dom';

const AI2025_2030UltimatePredictionsPromotionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-cyan-500/20 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-blue-400 font-medium text-sm">🚀 NEW CONTENT RELEASE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI 2025-2030 Ultimate Predictions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              The Future Revealed
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive and accurate predictions for the next 5 years of artificial intelligence evolution. 
            From consciousness breakthroughs to post-human civilization - the future is here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/ai-2025-2030-predictions"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Predictions Now
            </Link>
            <Link
              to="/ai-2025-2030-predictions/download"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20"
            >
              Download Report
            </Link>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Consciousness Breakthrough</h3>
              <p className="text-gray-300 text-sm">First AGI systems demonstrate self-awareness</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum-AI Fusion</h3>
              <p className="text-gray-300 text-sm">Unprecedented processing power emerges</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Singularity Event</h3>
              <p className="text-gray-300 text-sm">AI surpasses human intelligence</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-lg text-gray-300 mb-4">
              <strong className="text-white">Limited Time:</strong> Get early access to our comprehensive AI predictions report
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-2025-2030-predictions/subscribe"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Subscribe for Updates
              </Link>
              <Link
                to="/ai-2025-2030-predictions/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030UltimatePredictionsPromotionBanner;