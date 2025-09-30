import React from 'react';
import Link from 'next/link';

export default function NewContent2026ShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">New Content Available</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Our Latest
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              AI Insights & Success Stories
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with cutting-edge AI content, proven case studies, and actionable insights 
            that drive real business transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">Featured</span>
              <span className="text-sm opacity-75">25 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
              AI Enterprise Transformation 2026: Complete Implementation Guide
            </h3>
            <p className="text-sm opacity-90 mb-6">
              Master AI enterprise transformation with our comprehensive 2026 guide. Achieve 300% ROI, 
              90% efficiency gains, and $50M+ savings with proven strategies.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-sm">
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded">300% ROI</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">$50M+ Savings</span>
              </div>
            </div>
            <Link 
              href="/blog/ai-enterprise-transformation-2026"
              className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors group"
            >
              Read Article
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* AI Trends Article */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">Trends</span>
              <span className="text-sm opacity-75">18 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
              AI Trends 2026: Top 10 Predictions & Industry Insights
            </h3>
            <p className="text-sm opacity-90 mb-6">
              Discover the top AI trends shaping 2026. From autonomous agents to edge computing, 
              explore transformative technologies that will revolutionize enterprise operations.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-sm">
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded">10 Trends</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">2026 Predictions</span>
              </div>
            </div>
            <Link 
              href="/blog/ai-trends-2026-predictions"
              className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors group"
            >
              Read Article
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Success Story */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">Success Story</span>
              <span className="text-sm opacity-75">Fortune 500</span>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
              Fortune 500 AI Transformation: $50M Savings Achieved
            </h3>
            <p className="text-sm opacity-90 mb-6">
              Learn how a Fortune 500 company achieved $50M annual savings, 300% ROI, and 90% efficiency 
              improvement through comprehensive AI transformation.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-sm">
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded">$50M Savings</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">300% ROI</span>
              </div>
            </div>
            <Link 
              href="/case-studies/fortune-500-ai-transformation-success"
              className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors group"
            >
              View Case Study
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Interactive Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">500+</div>
            <div className="text-sm opacity-75">AI Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">300%</div>
            <div className="text-sm opacity-75">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">$2B+</div>
            <div className="text-sm opacity-75">Client Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">99.9%</div>
            <div className="text-sm opacity-75">Success Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg opacity-90 mb-8">
              Get expert guidance on implementing the latest AI trends and technologies. 
              Join 500+ companies achieving remarkable results with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
            <div className="mt-6 text-sm opacity-75">
              <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}