import React from 'react';
import Link from 'next/link';

export default function QuantumComputing2026PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main announcement badge */}
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-xl mb-8 animate-pulse shadow-lg">
            ⚛️ QUANTUM COMPUTING 2026
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            QUANTUM SUPREMACY ACHIEVED
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Revolutionary quantum computing solutions with error-corrected quantum computers and{' '}
            <span className="text-purple-400 font-bold text-3xl">25,000% ROI</span>{' '}
            opportunities
          </p>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 p-6 rounded-xl border border-purple-500/30">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Error-Corrected Quantum</h3>
              <p className="text-sm text-gray-300">99.9% accuracy, unlimited scalability</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-800/50 to-blue-800/50 p-6 rounded-xl border border-indigo-500/30">
              <div className="text-4xl mb-3">🌌</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Quantum Supremacy</h3>
              <p className="text-sm text-gray-300">10^15x faster than classical</p>
            </div>
            <div className="bg-gradient-to-br from-pink-800/50 to-purple-800/50 p-6 rounded-xl border border-pink-500/30">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">25,000% ROI</h3>
              <p className="text-sm text-gray-300">Proven Fortune 500 results</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quantum-computing-solutions-2026"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ⚛️ Explore Quantum Solutions
            </Link>
            <Link 
              href="/case-studies/quantum-computing-25000-roi-success"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🏆 View 25,000% ROI Success
            </Link>
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              💬 Get Started Now
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Quantum Supremacy Achieved</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span>25,000% ROI Proven</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Fortune 500 Verified</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-ping opacity-75 animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-75 animation-delay-2000"></div>
      </div>
    </div>
  );
}