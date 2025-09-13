import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Brain, Zap } from 'lucide-react';

export default function AI2025UltimateContentRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-purple-400/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main heading with gradient text */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-yellow-400 mr-3 animate-spin" />
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              🚀 AI 2025 Ultimate Content Revolution
            </h2>
            <Sparkles className="h-8 w-8 text-yellow-400 ml-3 animate-spin" />
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most comprehensive collection of AI insights, breakthrough technologies, and revolutionary content that will transform your understanding of artificial intelligence.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center space-x-2">
              <Brain className="h-6 w-6 text-purple-400" />
              <span className="text-sm font-semibold">Neural Intelligence</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Zap className="h-6 w-6 text-blue-400" />
              <span className="text-sm font-semibold">Quantum Computing</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ArrowRight className="h-6 w-6 text-green-400" />
              <span className="text-sm font-semibold">Future Predictions</span>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-content-revolution"
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Sparkles className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Explore Revolutionary Content
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/blog"
              className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              <Brain className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Browse All Content
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>✨ 500+ Articles • 🎯 200+ Case Studies • 🚀 Future-Ready Insights</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
}