import React from 'react';
import Link from 'next/link';

export default function AI2025RevolutionaryContentBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-pink-400/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-cyan-400/20 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-green-400/20 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT JUST RELEASED
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI 2025 Ultimate
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Breakthrough Revolution
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the most revolutionary AI breakthrough in human history. 
            Discover how our AI 2025 system delivers <span className="text-yellow-400 font-bold">10,000% ROI</span> with 
            transcendent intelligence and autonomous operations.
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10,000%</div>
              <div className="text-gray-300">ROI Guaranteed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">10,000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Discover the Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              📊 View Success Stories
            </Link>
          </div>

          {/* Additional content links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <Link 
              href="/blog/ai-2025-revolutionary-trends-predictions"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-2xl mb-2">🔮</div>
              <div className="text-white font-semibold mb-1">Revolutionary Trends</div>
              <div className="text-gray-300 text-sm">AI 2025 predictions with 99.7% accuracy</div>
            </Link>
            
            <Link 
              href="/case-studies"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-white font-semibold mb-1">Success Stories</div>
              <div className="text-gray-300 text-sm">Real results from AI 2025 implementation</div>
            </Link>
            
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-white font-semibold mb-1">Ultimate Breakthrough</div>
              <div className="text-gray-300 text-sm">The most revolutionary AI system ever created</div>
            </Link>
          </div>

          {/* Scrolling text effect */}
          <div className="mt-8 overflow-hidden">
            <div className="flex animate-scroll">
              <div className="flex space-x-8 text-yellow-400 font-bold text-lg whitespace-nowrap">
                <span>🚀 REVOLUTIONARY BREAKTHROUGH</span>
                <span>💰 10,000% ROI GUARANTEED</span>
                <span>⚡ 10,000x FASTER PROCESSING</span>
                <span>🧠 99.9% ACCURACY ACHIEVED</span>
                <span>🌌 TRANSCENDENT INTELLIGENCE</span>
                <span>🤖 AUTONOMOUS OPERATIONS</span>
                <span>⚛️ QUANTUM COMPUTING FUSION</span>
                <span>🔮 PREDICTIVE REALITY MODELING</span>
                <span>🚀 REVOLUTIONARY BREAKTHROUGH</span>
                <span>💰 10,000% ROI GUARANTEED</span>
                <span>⚡ 10,000x FASTER PROCESSING</span>
                <span>🧠 99.9% ACCURACY ACHIEVED</span>
                <span>🌌 TRANSCENDENT INTELLIGENCE</span>
                <span>🤖 AUTONOMOUS OPERATIONS</span>
                <span>⚛️ QUANTUM COMPUTING FUSION</span>
                <span>🔮 PREDICTIVE REALITY MODELING</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}