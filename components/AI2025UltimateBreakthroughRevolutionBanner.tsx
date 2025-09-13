import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-purple-900 to-blue-900 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FF6B6B" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-yellow-500/20 border border-red-500/30 mb-8">
            <span className="text-red-400 font-semibold text-sm flex items-center">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
              REVOLUTIONARY BREAKTHROUGH
            </span>
          </div>

          {/* Main Content */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI 2025 Ultimate
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Breakthrough Revolution
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Witness the most revolutionary AI breakthroughs of 2025 delivering 
            <span className="text-yellow-400 font-bold"> 10,000% ROI</span> and 
            <span className="text-green-400 font-bold"> 99.9% accuracy</span> 
            across industries worldwide.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-800/30 to-orange-800/30 rounded-lg p-4 border border-yellow-500/20">
              <div className="text-2xl font-bold text-yellow-400 mb-1">10,000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="bg-gradient-to-r from-green-800/30 to-emerald-800/30 rounded-lg p-4 border border-green-500/20">
              <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-r from-blue-800/30 to-cyan-800/30 rounded-lg p-4 border border-blue-500/20">
              <div className="text-2xl font-bold text-blue-400 mb-1">10,000x</div>
              <div className="text-sm text-gray-300">Faster Processing</div>
            </div>
            <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-lg p-4 border border-purple-500/20">
              <div className="text-2xl font-bold text-purple-400 mb-1">500+</div>
              <div className="text-sm text-gray-300">Enterprise Clients</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
            >
              <span className="mr-2">🚀</span>
              Explore Breakthroughs
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="mr-2">🏆</span>
              View Success Stories
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-implementation-guide"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-300"
            >
              <span className="mr-2">📚</span>
              Implementation Guide
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>✅ 500+ enterprise clients • ✅ 99.9% accuracy guarantee • ✅ 24/7 expert support</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>
  );
}