import React from 'react';
import Link from 'next/link';

export default function AI2025RevolutionaryBreakthroughPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-pink-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-pink-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-8 animate-pulse">
            <span className="text-red-400 font-bold text-sm uppercase tracking-wider">🚀 BREAKTHROUGH ANNOUNCEMENT</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI 2025 REVOLUTIONARY BREAKTHROUGH
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The most significant AI breakthrough in human history delivering 
            <span className="text-yellow-400 font-bold"> 10,000% ROI</span> with 
            <span className="text-green-400 font-bold"> 99.9% accuracy</span> and 
            <span className="text-blue-400 font-bold"> 10,000x faster processing</span>
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 p-6 rounded-xl border border-yellow-500/30">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Neural Interface</h3>
              <p className="text-gray-300 text-sm">1000x faster decision making</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-green-500/30">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Autonomous Operations</h3>
              <p className="text-gray-300 text-sm">24/7 perfect accuracy</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-blue-500/30">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-blue-400 mb-2">Lightning Processing</h3>
              <p className="text-gray-300 text-sm">10,000x faster speeds</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-revolutionary-breakthrough-announcement"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🚀 Learn About Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🏆 View 10,000% ROI Success
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>Revolutionary AI technology delivering unprecedented results across every industry</p>
          </div>
        </div>
      </div>
    </div>
  );
}