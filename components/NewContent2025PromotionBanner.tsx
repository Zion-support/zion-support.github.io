import React from 'react';
import Link from 'next/link';

export default function NewContent2025PromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT DROP - JANUARY 2025</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content Just Released!
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover breakthrough insights, proven strategies, and real-world success stories 
            that will transform your AI implementation journey in 2025.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/blog/ai-2025-revolutionary-trends-breakthrough"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🔮 Explore Revolutionary Trends
            </Link>
            <Link
              href="/case-studies/ai-2025-energy-sector-transformation-breakthrough"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              🏆 View 2000% ROI Success Story
            </Link>
          </div>
          
          {/* Featured Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Blog Post */}
            <Link href="/blog/ai-2025-revolutionary-trends-breakthrough" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300">Revolutionary AI Trends 2025</h3>
                <p className="text-sm opacity-90 mb-3">Quantum AI, neural interfaces, and breakthrough technologies</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>25 min read</span>
                  <span className="mx-2">•</span>
                  <span>Jan 17, 2025</span>
                </div>
              </div>
            </Link>
            
            {/* Case Study */}
            <Link href="/case-studies/ai-2025-energy-sector-transformation-breakthrough" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300">Energy Sector Breakthrough</h3>
                <p className="text-sm opacity-90 mb-3">2000% ROI transformation story</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>18 min read</span>
                  <span className="mx-2">•</span>
                  <span>Jan 17, 2025</span>
                </div>
              </div>
            </Link>
            
            {/* Resource Guide */}
            <Link href="/resources/ai-2025-comprehensive-implementation-master-guide" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300">Implementation Master Guide</h3>
                <p className="text-sm opacity-90 mb-3">Complete blueprint for AI success</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>45 min read</span>
                  <span className="mx-2">•</span>
                  <span>Jan 17, 2025</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-12">
            <Link
              href="/content-showcase"
              className="inline-flex items-center text-white/90 hover:text-white transition-colors text-lg font-medium"
            >
              View All New Content
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}