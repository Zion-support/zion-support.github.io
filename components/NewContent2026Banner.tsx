import React from 'react';
import Link from 'next/link';

export default function NewContent2026Banner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            🆕 New Content Available • January 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Our Latest{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              AI Insights
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our cutting-edge AI content, comprehensive guides, 
            and revolutionary solutions that are transforming businesses in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Industry Insights
              </span>
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI 2026: The Enterprise Revolution</h3>
            <p className="text-blue-100 text-sm mb-4 leading-relaxed">
              Discover how AI is revolutionizing enterprise operations with 300% productivity increases and 50% cost reductions.
            </p>
            <div className="flex items-center justify-between text-sm text-blue-200 mb-4">
              <span>January 15, 2026</span>
              <span>12 min read</span>
            </div>
            <Link 
              href="/blog/ai-2026-enterprise-revolution"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Read Article
            </Link>
          </div>

          {/* Featured Blog Post 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Automation Guide
              </span>
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Automation 2026: Complete Mastery Guide</h3>
            <p className="text-blue-100 text-sm mb-4 leading-relaxed">
              Master AI automation with proven strategies, implementation frameworks, and optimization techniques.
            </p>
            <div className="flex items-center justify-between text-sm text-blue-200 mb-4">
              <span>January 15, 2026</span>
              <span>15 min read</span>
            </div>
            <Link 
              href="/blog/ai-automation-2026-mastery-guide"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Read Guide
            </Link>
          </div>

          {/* New Service */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                New Service
              </span>
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Analytics Platform</h3>
            <p className="text-blue-100 text-sm mb-4 leading-relaxed">
              Transform your data into actionable insights with real-time dashboards and predictive analytics.
            </p>
            <div className="flex items-center justify-between text-sm text-blue-200 mb-4">
              <span>Available Now</span>
              <span>Free Trial</span>
            </div>
            <Link 
              href="/services/ai-powered-analytics-platform"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-blue-100 mb-6">
            Ready to explore all our latest content and services?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/content-hub"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Content Hub
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}