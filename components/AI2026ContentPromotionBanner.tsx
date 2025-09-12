import React from 'react';
import Link from 'next/link';

export default function AI2026ContentPromotionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium animate-pulse">🔥 NEW CONTENT - JANUARY 2026</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            🚀 Revolutionary AI 2026 Content Just Released!
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover breakthrough innovations, implementation guides, and success stories that will 
            transform your business with cutting-edge AI technologies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2026-breakthrough-innovations"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg transform hover:scale-105"
            >
              🔮 Explore Breakthrough Innovations
            </Link>
            <Link
              href="/case-studies/ai-2026-global-financial-transformation-breakthrough"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg transform hover:scale-105"
            >
              💰 View 8000% ROI Case Study
            </Link>
            <Link
              href="/resources/ai-2026-ultimate-implementation-master-guide"
              className="bg-white text-pink-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg transform hover:scale-105"
            >
              📚 Download Master Guide
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold mb-2">Breakthrough Innovations</h3>
              <p className="text-sm opacity-90">
                Quantum AI, neural interfaces, and autonomous systems that will reshape industries.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-lg font-semibold mb-2">Proven Success Stories</h3>
              <p className="text-sm opacity-90">
                Real case studies showing 8000% ROI and transformational business results.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">🛠️</div>
              <h3 className="text-lg font-semibold mb-2">Implementation Guide</h3>
              <p className="text-sm opacity-90">
                Complete 150-page blueprint with templates, checklists, and step-by-step roadmaps.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm opacity-90">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm opacity-90">Pages of Content</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">8000%</div>
              <div className="text-sm opacity-90">Max ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-90">Process Automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}