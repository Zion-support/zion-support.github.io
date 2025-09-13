import React from 'react';
import Link from 'next/link';

export default function AI2026NeuralInterfaceRevolutionPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🧠 REVOLUTIONARY BREAKTHROUGH
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI 2026 Neural Interface Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Direct brain-computer interface technology achieving 95% patient recovery success and delivering 8,500% ROI through neural consciousness integration
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-4 border border-cyan-500/30">
              <div className="text-3xl font-bold text-cyan-400 mb-1">95%</div>
              <div className="text-gray-300 text-sm">Patient Recovery</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-4 border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400 mb-1">8,500%</div>
              <div className="text-gray-300 text-sm">Average ROI</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-4 border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400 mb-1">0.0001s</div>
              <div className="text-gray-300 text-sm">Neural Response</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/ai-2026-neural-interface-revolution" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Revolution
            </Link>
            <Link 
              href="/case-studies/ai-2026-neural-interface-healthcare-breakthrough" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-cyan-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Healthcare Success
            </Link>
            <Link 
              href="/resources/ai-2026-neural-interface-implementation-guide" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Implementation Guide
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>🌟 Transform healthcare and human potential with direct neural interface technology</p>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>
  );
}