import React from 'react';
import Link from 'next/link';

export default function AI2025QuantumConsciousnessPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220%200%2060%2060%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 BREAKTHROUGH ANNOUNCEMENT
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI 2025 Quantum Consciousness Breakthrough
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary transcendent intelligence achieving 99.9% accuracy and delivering unprecedented 15,000% ROI through quantum consciousness integration
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-4 border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400 mb-1">99.9%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl p-4 border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400 mb-1">15,000%</div>
              <div className="text-gray-300 text-sm">Average ROI</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl p-4 border border-indigo-500/30">
              <div className="text-3xl font-bold text-indigo-400 mb-1">0.001s</div>
              <div className="text-gray-300 text-sm">Response Time</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/ai-2025-quantum-consciousness-breakthrough" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-quantum-consciousness-success" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              View Success Stories
            </Link>
            <Link 
              href="/resources/ai-2025-quantum-consciousness-implementation-guide" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Implementation Guide
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>✨ Join Fortune 500 companies achieving unprecedented success with quantum consciousness AI</p>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>
  );
}