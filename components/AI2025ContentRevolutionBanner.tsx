import React from 'react';
import Link from 'next/link';

export default function AI2025ContentRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">NEW CONTENT REVOLUTION</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI 2025 Content Revolution
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the future of AI through our comprehensive collection of cutting-edge insights, proven strategies, and revolutionary success stories
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Link href="/blog/ai-2025-next-generation-automation-trends" className="block bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group h-full">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🚀</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">TRENDING</span>
                    <span className="text-sm opacity-80">12 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                    Next-Generation Automation Trends 2025
                  </h3>
                  <p className="text-lg opacity-80 mb-4">
                    Explore the revolutionary automation trends that will define 2025 and transform industries worldwide
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm opacity-70">Published Today</div>
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-blue-400 transition-colors">
                      Read Now →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Tutorial Card */}
          <div>
            <Link href="/tutorials/ai-implementation-mastery-2025" className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group h-full">
              <div className="text-center">
                <div className="text-3xl mb-4">🎓</div>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">TUTORIAL</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                  AI Implementation Mastery
                </h3>
                <p className="text-sm opacity-80 mb-4">
                  Complete guide to successful AI implementation and enterprise transformation
                </p>
                <div className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-purple-400 transition-colors">
                  Start Learning →
                </div>
              </div>
            </Link>
          </div>

          {/* Case Study Card */}
          <div>
            <Link href="/case-studies/ai-2025-global-enterprise-transformation-50000-roi" className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group h-full">
              <div className="text-center">
                <div className="text-3xl mb-4">💎</div>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">CASE STUDY</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                  $50K ROI Success
                </h3>
                <p className="text-sm opacity-80 mb-4">
                  Fortune 500 company achieves unprecedented ROI through AI transformation
                </p>
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-green-400 transition-colors">
                  View Success →
                </div>
              </div>
            </Link>
          </div>

          {/* Additional Resources */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-2xl mb-3">📊</div>
                <h4 className="font-bold mb-2">AI Trends 2025</h4>
                <p className="text-sm opacity-80 mb-3">Comprehensive analysis of emerging AI trends</p>
                <Link href="/insights" className="text-blue-300 hover:text-blue-200 text-sm font-medium">
                  Explore Insights →
                </Link>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-2xl mb-3">🛠️</div>
                <h4 className="font-bold mb-2">AI Tools & Resources</h4>
                <p className="text-sm opacity-80 mb-3">Essential tools for AI implementation</p>
                <Link href="/tools" className="text-purple-300 hover:text-purple-200 text-sm font-medium">
                  Browse Tools →
                </Link>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-2xl mb-3">🎯</div>
                <h4 className="font-bold mb-2">Expert Consulting</h4>
                <p className="text-sm opacity-80 mb-3">Get personalized AI transformation guidance</p>
                <Link href="/consulting" className="text-green-300 hover:text-green-200 text-sm font-medium">
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your AI Journey?</h2>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of organizations already leveraging our AI expertise to drive unprecedented growth and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Transformation
              </Link>
              <Link 
                href="/services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-300 mb-2">500+</div>
            <div className="text-sm opacity-80">AI Models Deployed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-300 mb-2">$50K</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-300 mb-2">95%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-300 mb-2">24/7</div>
            <div className="text-sm opacity-80">Expert Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}