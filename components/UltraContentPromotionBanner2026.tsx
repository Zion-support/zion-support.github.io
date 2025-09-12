import React from 'react';
import Link from 'next/link';

export default function UltraContentPromotionBanner2026() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white opacity-10 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-bold">🚀 MEGA CONTENT DROP - JANUARY 2025</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🎯 30+ Revolutionary AI Resources
            <br />
            <span className="text-yellow-300">Just Released!</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI insights, case studies, and implementation guides. 
            From quantum machine learning to multimodal AI breakthroughs, everything you need to dominate 2025.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/content-showcase"
              className="group bg-white text-indigo-600 px-10 py-5 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 text-lg shadow-2xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>🎯 Explore All Content</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <Link
              href="/resources/ai-implementation-master-guide-2026"
              className="group border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>📚 Download Master Guide</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>
          
          {/* Featured Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Multimodal AI */}
            <Link href="/blog/ai-2025-multimodal-revolution" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎭</div>
                <h3 className="text-lg font-bold mb-2">Multimodal AI Revolution</h3>
                <p className="text-sm opacity-90 mb-3">Vision, voice, and text unite to transform human-computer interaction</p>
                <div className="flex items-center text-xs font-semibold">
                  <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full">TRENDING</span>
                </div>
              </div>
            </Link>
            
            {/* Quantum ML */}
            <Link href="/blog/ai-2025-quantum-machine-learning" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⚛️</div>
                <h3 className="text-lg font-bold mb-2">Quantum Machine Learning</h3>
                <p className="text-sm opacity-90 mb-3">The next frontier of artificial intelligence</p>
                <div className="flex items-center text-xs font-semibold">
                  <span className="bg-purple-400 text-purple-900 px-2 py-1 rounded-full">BREAKTHROUGH</span>
                </div>
              </div>
            </Link>
            
            {/* Fintech Case Study */}
            <Link href="/case-studies/ai-2025-fintech-transformation-breakthrough" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💰</div>
                <h3 className="text-lg font-bold mb-2">Fintech Transformation</h3>
                <p className="text-sm opacity-90 mb-3">$2B company achieves 300% ROI in 6 months</p>
                <div className="flex items-center text-xs font-semibold">
                  <span className="bg-green-400 text-green-900 px-2 py-1 rounded-full">SUCCESS</span>
                </div>
              </div>
            </Link>
            
            {/* Master Guide */}
            <Link href="/resources/ai-implementation-master-guide-2026" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-lg font-bold mb-2">Implementation Guide</h3>
                <p className="text-sm opacity-90 mb-3">Complete roadmap for enterprise AI success</p>
                <div className="flex items-center text-xs font-semibold">
                  <span className="bg-blue-400 text-blue-900 px-2 py-1 rounded-full">GUIDE</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">30+</div>
              <div className="text-sm opacity-90">New Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">15+</div>
              <div className="text-sm opacity-90">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">10+</div>
              <div className="text-sm opacity-90">Implementation Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">300%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}