import React from 'react';
import Link from 'next/link';

export default function UltraContentPromotionBanner2025() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-5 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white opacity-5 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 ULTRA CONTENT DROP - JANUARY 2025</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🔥 50+ Revolutionary AI Resources
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Just Released!
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI breakthrough content ever assembled. 
            From quantum computing to neural interfaces, get everything you need to dominate AI in 2025.
          </p>
          
          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Breakthrough Technologies</h3>
              <p className="text-sm opacity-90">Quantum AI, Neural Interfaces, Advanced Automation</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2">Proven ROI Results</h3>
              <p className="text-sm opacity-90">1500%+ ROI case studies and success stories</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-lg font-semibold mb-2">Implementation Guides</h3>
              <p className="text-sm opacity-90">Step-by-step blueprints for immediate results</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🎯 Explore All Content
            </Link>
            <Link
              href="/resources/ai-2025-enterprise-transformation-master-guide"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              📚 Download Master Guide
            </Link>
          </div>
          
          {/* Featured Content Grid */}
          <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Link href="/blog/ai-2025-ultimate-breakthrough-trends" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-3xl mb-3">🔮</div>
                <h3 className="text-sm font-semibold mb-2">Ultimate Breakthrough Trends</h3>
                <p className="text-xs opacity-90">The future of AI is here</p>
                <div className="mt-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded-full inline-block">
                  NEW
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-2025-global-finance-transformation-breakthrough" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-sm font-semibold mb-2">Finance Transformation</h3>
                <p className="text-xs opacity-90">1500% ROI breakthrough</p>
                <div className="mt-2 text-xs bg-green-400 text-black px-2 py-1 rounded-full inline-block">
                  BREAKTHROUGH
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-2025-enterprise-transformation-master-guide" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-sm font-semibold mb-2">Master Implementation Guide</h3>
                <p className="text-xs opacity-90">Complete transformation blueprint</p>
                <div className="mt-2 text-xs bg-blue-400 text-black px-2 py-1 rounded-full inline-block">
                  ESSENTIAL
                </div>
              </div>
            </Link>
            
            <Link href="/blog/ai-2025-quantum-machine-learning-breakthrough" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-3xl mb-3">⚛️</div>
                <h3 className="text-sm font-semibold mb-2">Quantum ML Revolution</h3>
                <p className="text-xs opacity-90">1000x faster processing</p>
                <div className="mt-2 text-xs bg-purple-400 text-black px-2 py-1 rounded-full inline-block">
                  REVOLUTIONARY
                </div>
              </div>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">50+</div>
              <div className="text-sm opacity-90">New Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-1">1500%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-1">500+</div>
              <div className="text-sm opacity-90">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-1">18</div>
              <div className="text-sm opacity-90">Months to ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}