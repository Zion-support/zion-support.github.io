import React from 'react';
import Link from 'next/link';

export default function NewContent2025RevolutionaryBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 opacity-90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg font-bold mb-6 animate-pulse shadow-lg">
            🚀 NEW REVOLUTIONARY CONTENT 2025 - JUST RELEASED
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Breakthrough
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Content Now Live
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive analysis of AI 2025 trends and real-world success stories 
            achieving unprecedented ROI. From quantum computing to transcendent intelligence.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-bold text-white mb-2">Revolutionary Trends</h3>
              <p className="text-purple-100 text-sm">Comprehensive AI 2025 breakthrough analysis</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-white mb-2">1500% ROI Success</h3>
              <p className="text-purple-100 text-sm">Real-world finance transformation case study</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Implementation Ready</h3>
              <p className="text-purple-100 text-sm">Proven frameworks and toolkits included</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthrough-trends"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🔮 Read AI 2025 Trends
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-finance-transformation-breakthrough"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              💰 View 1500% ROI Case Study
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              🛠️ Get Implementation Toolkit
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300">5000%</div>
              <div className="text-purple-200 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300">99.9%</div>
              <div className="text-purple-200 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300">10,000x</div>
              <div className="text-purple-200 text-sm">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300">∞</div>
              <div className="text-purple-200 text-sm">Scalability</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse delay-500"></div>
    </div>
  );
}