import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateAutomationRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-500/20 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold mb-6 animate-pulse shadow-lg">
            🚀 REVOLUTIONARY BREAKTHROUGH - 15,000% ROI ACHIEVED
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            AI 2025 Ultimate Automation Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced AI automation breakthrough in history. 
            Quantum-powered autonomous systems delivering unprecedented 15,000% ROI 
            through transcendent intelligence and neural interface integration.
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">15,000%</div>
              <div className="text-sm text-gray-300">ROI Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">10,000x</div>
              <div className="text-sm text-gray-300">Faster Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-1">0%</div>
              <div className="text-sm text-gray-300">Downtime</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-automation-revolution"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Explore the Revolution
            </Link>
            <Link 
              href="/case-studies/ai-2025-ultimate-automation-success"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📊 View Success Story
            </Link>
          </div>
          
          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>Join Fortune 500 companies already achieving unprecedented results</p>
            <p className="mt-1">⚡ Implementation in 8 weeks • 💰 15,000% ROI guaranteed • 🔒 Enterprise-grade security</p>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 text-6xl opacity-20 animate-bounce">⚛️</div>
      <div className="absolute bottom-20 left-10 text-5xl opacity-20 animate-pulse">🧠</div>
      <div className="absolute top-1/2 right-20 text-4xl opacity-20 animate-bounce">🤖</div>
    </div>
  );
}