import React from 'react';
import Link from 'next/link';

export default function AI2025BreakthroughContentPromotionBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white bg-opacity-10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4 backdrop-blur-sm">
            <span className="text-sm font-bold">🚀 BREAKTHROUGH CONTENT JUST RELEASED</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            🎉 AI 2025 Breakthrough Content Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-4xl mx-auto leading-relaxed">
            Discover our latest revolutionary content: Advanced Automation MasteryEnterprise Transformation 
            Case Studiesand Next-Gen AI Implementation Guides. Join 100,000+ professionals already transforming 
            their businesses with our breakthrough insights.
          </p>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="font-bold text-sm">Advanced Automation</h3>
              <p className="text-xs opacity-90">Master AI automation techniques</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="font-bold text-sm">Success Stories</h3>
              <p className="text-xs opacity-90">3000% ROI case studies</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-bold text-sm">Implementation Guides</h3>
              <p className="text-xs opacity-90">Step-by-step frameworks</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2025-advanced-automation-mastery"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Advanced Automation Guide
            </Link>
            <Link
              href="/case-studies/ai-2025-enterprise-transformation-breakthrough"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              View Success Stories
            </Link>
            <Link
              href="/content-showcase"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Content
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span>100,000+ professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.9/5 average rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span>3000% average ROI</span>
            </div>
          </div>

          {/* Urgency Indicator */}
          <div className="mt-6 inline-flex items-center bg-red-500 bg-opacity-20 rounded-full px-4 py-2">
            <span className="text-sm font-semibold">⚡ Limited Time: Get Early Access to 2026 Content</span>
          </div>
        </div>
      </div>
    </section>
  );
}