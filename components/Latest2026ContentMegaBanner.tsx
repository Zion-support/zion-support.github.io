import React from 'react';
import Link from 'next/link';

export default function Latest2026ContentMegaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold uppercase tracking-wider">Latest 2026 Content</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Revolutionary AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Content Hub
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI insights, implementation guides, and success stories. 
            Get exclusive access to strategies that deliver 300% ROI and transform enterprise operations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Implementation Guide */}
          <div className="group bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-8 hover:from-blue-500/30 hover:to-indigo-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">IMPLEMENTATION</span>
                <span className="text-sm text-gray-300 ml-2">20 min read</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
              AI Enterprise Automation Revolution 2026
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete implementation guide with proven frameworks, real-world case studies, and step-by-step strategies for achieving 300% ROI.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-400">Published Jan 20, 2026</div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-gray-300">4.9/5</span>
              </div>
            </div>
            <Link
              href="/blog/ai-2026-enterprise-automation-revolution"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group-hover:bg-blue-500"
            >
              Read Full Guide
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Comprehensive Trends Guide */}
          <div className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">TRENDS</span>
                <span className="text-sm text-gray-300 ml-2">25 min read</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
              AI Trends 2026: Comprehensive Guide
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Explore revolutionary AI technologies, industry transformations, and future predictions that are reshaping the global business landscape.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-400">Published Jan 20, 2026</div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-gray-300">4.8/5</span>
              </div>
            </div>
            <Link
              href="/blog/ai-trends-2026-comprehensive-guide"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors group-hover:bg-purple-500"
            >
              Explore Trends
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Interactive ROI Calculator */}
          <div className="group bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 hover:from-green-500/30 hover:to-teal-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">TOOL</span>
                <span className="text-sm text-gray-300 ml-2">5 min tool</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-green-300 transition-colors">
              AI ROI Calculator 2026
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Calculate your potential ROI from AI implementation. Get personalized insights, cost projections, and strategic recommendations.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-400">Free Interactive Tool</div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-sm text-gray-300">Instant Results</span>
              </div>
            </div>
            <Link
              href="/tools/ai-roi-calculator"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors group-hover:bg-green-500"
            >
              Calculate ROI
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Proven Results from Our Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">300%</div>
              <div className="text-gray-300 mb-1">Average ROI</div>
              <div className="text-sm text-gray-400">Within 12 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300 mb-1">Efficiency Gain</div>
              <div className="text-sm text-gray-400">Process improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">$2.8M</div>
              <div className="text-gray-300 mb-1">Average Savings</div>
              <div className="text-sm text-gray-400">Per organization</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">85%</div>
              <div className="text-gray-300 mb-1">Success Rate</div>
              <div className="text-sm text-gray-400">Implementation success</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Organization?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of enterprises already achieving extraordinary results with our AI strategies and implementation guides.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link
              href="/services/ai-consulting"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              View Success Stories
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>10,000+ professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>500+ case studies</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>99% satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}