import React from 'react';
import Link from 'next/link';

export default function NewContent2025PromotionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 NEW CONTENT DROP - JANUARY 2025</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            🚀 Revolutionary AI Content Just Released!
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our most comprehensive AI resources yet: Enterprise Transformation Mastery, 
            Fortune 500 Success Stories, and the Ultimate Implementation Master Guide. 
            Everything you need to dominate AI in 2025.
          </p>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="text-lg font-semibold mb-2">Enterprise Mastery</h3>
              <p className="text-sm opacity-90">
                Complete guide to enterprise AI transformation with proven frameworks and strategies
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-semibold mb-2">2000% ROI Success</h3>
              <p className="text-sm opacity-90">
                Real Fortune 500 case study showing how to achieve massive returns with AI
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-lg font-semibold mb-2">Master Guide</h3>
              <p className="text-sm opacity-90">
                200+ page implementation guide with templates, frameworks, and tools
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-enterprise-ai-transformation-mastery"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🎯 Explore Enterprise Guide
            </Link>
            <Link
              href="/case-studies/ai-2025-fortune-500-manufacturing-transformation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg hover:shadow-lg"
            >
              📊 View Success Story
            </Link>
            <Link
              href="/resources/ai-2025-complete-implementation-master-guide"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📚 Download Master Guide
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">200+</div>
              <div className="text-sm opacity-90">Pages of Content</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">50+</div>
              <div className="text-sm opacity-90">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">2000%</div>
              <div className="text-sm opacity-90">ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">25+</div>
              <div className="text-sm opacity-90">Frameworks</div>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="mt-8">
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