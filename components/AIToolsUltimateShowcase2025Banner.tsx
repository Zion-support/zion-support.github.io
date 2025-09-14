import React from 'react';
import Link from 'next/link';
ArrowRightBrainZapTargetCodeDatabaseTrendingUp

export default function AIToolsUltimateShowcase2025Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-blue-400/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main heading with gradient text */}
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-8 w-8 text-blue-400 mr-3 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              🛠️ AI Tools Ultimate Showcase 2025
            </h2>
            <Zap className="h-8 w-8 text-purple-400 ml-3 animate-pulse" />
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most advanced AI tools and technologies revolutionizing industries worldwide. From neural processing to quantum computingexplore cutting-edge solutions that deliver real results.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="flex flex-col items-center space-y-2">
              <Brain className="h-6 w-6 text-blue-400" />
              <span className="text-sm font-semibold">Neural Processing</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Zap className="h-6 w-6 text-purple-400" />
              <span className="text-sm font-semibold">Quantum Computing</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Code className="h-6 w-6 text-green-400" />
              <span className="text-sm font-semibold">Computer Vision</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Database className="h-6 w-6 text-yellow-400" />
              <span className="text-sm font-semibold">Data Analytics</span>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-tools-ultimate-showcase-2025"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Brain className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Explore AI Tools
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/case-studies"
              className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              <Target className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              View Implementations
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>🚀 50+ AI Tools • 🎯 99.9% Accuracy • 💼 Enterprise Ready</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
}