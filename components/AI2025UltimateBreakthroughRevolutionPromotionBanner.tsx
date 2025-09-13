import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-purple-900 to-pink-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-pink-600/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold mb-6 animate-pulse shadow-lg">
            🚀 ULTIMATE BREAKTHROUGH - AI 2025
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The most revolutionary AI breakthrough in history, delivering unprecedented 
            <span className="text-yellow-400 font-bold"> 10,000% ROI</span> and transforming businesses across every industry.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-red-800/30 to-pink-800/30 p-6 rounded-xl border border-red-500/30 backdrop-blur-sm">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-red-400 mb-2">Transcendent Intelligence</h3>
              <p className="text-gray-300 text-sm">99.9% accuracy and 10,000x faster processing</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Quantum Integration</h3>
              <p className="text-gray-300 text-sm">Revolutionary quantum-AI fusion technology</p>
            </div>
            <div className="bg-gradient-to-br from-pink-800/30 to-rose-800/30 p-6 rounded-xl border border-pink-500/30 backdrop-blur-sm">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-bold text-pink-400 mb-2">10,000% ROI</h3>
              <p className="text-gray-300 text-sm">Proven results with documented case studies</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="group bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                Explore Breakthrough
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="group bg-transparent border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                View 10,000% ROI Success
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>Join 50,000+ businesses already experiencing the AI 2025 revolution</p>
            <div className="flex items-center justify-center mt-2 space-x-4">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Live Demo Available
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Free Implementation Guide
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                24/7 Support
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-pink-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/4 w-14 h-14 bg-yellow-500/20 rounded-full animate-pulse delay-500"></div>
    </div>
  );
}