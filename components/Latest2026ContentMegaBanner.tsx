import React from 'react';
import Link from 'next/link';

export default function Latest2026ContentMegaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200"></div>
            </div>
            <span className="text-sm font-bold">LATEST 2026 CONTENT</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Revolutionary AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Content & Insights
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Stay ahead with cutting-edge AI content, real-world success stories, and proven implementation strategies that are transforming businesses worldwide in 2026.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <Link href="/blog/ai-2026-enterprise-automation-revolution" className="group block">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:scale-105 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    FEATURED ARTICLE
                  </span>
                  <span className="text-cyan-200 text-sm">20 min read</span>
                  <span className="text-cyan-200 text-sm">•</span>
                  <span className="text-cyan-200 text-sm">Updated 2 hours ago</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">
                  AI 2026 Enterprise Automation Revolution
                </h3>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Complete implementation guide with 300% ROI strategies, real-world case studies, and 90-day transformation roadmap. Discover how AI automation is revolutionizing enterprise operations.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">300%</div>
                    <div className="text-sm text-gray-400">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">90%</div>
                    <div className="text-sm text-gray-400">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">$50M+</div>
                    <div className="text-sm text-gray-400">Cost Savings</div>
                  </div>
                </div>
                
                <div className="flex items-center text-cyan-300 font-semibold">
                  Read Complete Guide →
                </div>
              </div>
            </Link>
          </div>

          {/* Side Content */}
          <div className="space-y-6">
            {/* Case Study */}
            <Link href="/case-studies/ai-automation-manufacturing-success-2026" className="group block">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 hover:from-white/20 hover:to-white/10 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-cyan-200 text-sm">Manufacturing</span>
                </div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  95% Process Automation & $12M Savings
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Fortune 500 manufacturer achieves 95% automation, $12M annual savings, and 60% faster delivery times.
                </p>
                <div className="flex items-center text-cyan-300 font-semibold text-sm">
                  View Case Study →
                </div>
              </div>
            </Link>

            {/* AI Trends */}
            <Link href="/blog/ai-trends-2026" className="group block">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 hover:from-white/20 hover:to-white/10 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Trend Analysis
                  </span>
                  <span className="text-cyan-200 text-sm">15 min read</span>
                </div>
                <h4 className="text-lg font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  AI Trends 2026: Industry Predictions
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Discover the top AI trends shaping 2026, from autonomous systems to quantum computing breakthroughs.
                </p>
                <div className="flex items-center text-cyan-300 font-semibold text-sm">
                  Explore Trends →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Additional Content Showcase */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Link href="/blog/ai-enterprise-adoption-2025" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
              <div className="text-xs text-cyan-300 mb-2">Implementation Guide</div>
              <h4 className="font-bold text-sm mb-2 group-hover:text-cyan-300 transition-colors">
                AI Enterprise Adoption 2025
              </h4>
              <p className="text-gray-400 text-xs">Master AI adoption with proven strategies</p>
            </div>
          </Link>

          <Link href="/blog/ai-trends-2025-predictions" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
              <div className="text-xs text-cyan-300 mb-2">Predictions</div>
              <h4 className="font-bold text-sm mb-2 group-hover:text-cyan-300 transition-colors">
                AI Trends 2025 Predictions
              </h4>
              <p className="text-gray-400 text-xs">Top 10 predictions & insights</p>
            </div>
          </Link>

          <Link href="/case-studies/ai-supply-chain-optimization-2025" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
              <div className="text-xs text-cyan-300 mb-2">Case Study</div>
              <h4 className="font-bold text-sm mb-2 group-hover:text-cyan-300 transition-colors">
                Supply Chain Optimization
              </h4>
              <p className="text-gray-400 text-xs">60% cost reduction achieved</p>
            </div>
          </Link>

          <Link href="/blog/ai-autonomous-agents-2025" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
              <div className="text-xs text-cyan-300 mb-2">Technology</div>
              <h4 className="font-bold text-sm mb-2 group-hover:text-cyan-300 transition-colors">
                AI Autonomous Agents
              </h4>
              <p className="text-gray-400 text-xs">Enterprise implementation guide</p>
            </div>
          </Link>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8">Proven Results Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">$2B+</div>
              <div className="text-gray-300 text-sm">Cost Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Expert Support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already benefiting from our AI insights and implementation strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Success Stories
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm">
            Trusted by Fortune 500 companies worldwide • 10,000+ professionals subscribed
          </p>
        </div>
      </div>
    </section>
  );
}