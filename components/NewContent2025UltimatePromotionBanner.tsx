import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimatePromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white opacity-10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 ULTIMATE CONTENT DROP - JANUARY 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🚀 AI 2025 Ultimate Content Collection
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Discover the most comprehensive AI resources for 2025: Ultimate Trends, 1200% ROI Success Stories, 
            and Complete Implementation Toolkit. Everything you need to dominate AI in 2025.
          </p>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-semibold mb-2">Ultimate Trends Guide</h3>
              <p className="text-sm opacity-90">
                Complete analysis of AI trends, quantum computing breakthroughs, and future predictions for 2025.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-semibold mb-2">1200% ROI Case Study</h3>
              <p className="text-sm opacity-90">
                Real-world Fortune 500 transformation story with proven strategies and measurable results.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-lg font-semibold mb-2">Implementation Toolkit</h3>
              <p className="text-sm opacity-90">
                Complete guide with templates, frameworks, and step-by-step instructions for AI success.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">25+</div>
              <div className="text-sm opacity-90">New Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">1200%</div>
              <div className="text-sm opacity-90">Proven ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">95%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300">$2.8B</div>
              <div className="text-sm opacity-90">Total Impact</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-ultimate-trends-predictions"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              🔮 Explore Ultimate Trends
            </Link>
            <Link
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="bg-yellow-400 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              🏆 View Success Story
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg transform hover:scale-105 transition-transform"
            >
              🛠️ Get Toolkit
            </Link>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/content-showcase" className="text-white hover:text-yellow-300 transition-colors underline">
              📚 View All Content
            </Link>
            <span className="text-white opacity-50">•</span>
            <Link href="/webinars" className="text-white hover:text-yellow-300 transition-colors underline">
              🎥 Watch Webinars
            </Link>
            <span className="text-white opacity-50">•</span>
            <Link href="/contact" className="text-white hover:text-yellow-300 transition-colors underline">
              📞 Get Consultation
            </Link>
          </div>

          {/* Urgency Message */}
          <div className="mt-8 p-4 bg-red-500 bg-opacity-20 rounded-lg border border-red-400 border-opacity-30">
            <p className="text-sm font-semibold">
              ⚡ Limited Time: Get early access to our 2025 AI Mastery Program with exclusive bonuses worth $5,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}