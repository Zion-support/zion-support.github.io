import React from 'react';
import Link from 'next/link';

export default function NewContentShowcase2025Banner() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              🎯 New Content Launch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary AI Content & Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest breakthrough insights, real-world case studies, and proven strategies 
              that are transforming businesses across industries.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Article */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-700">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white mb-3">
                    🚀 Featured Article
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    AI 2025: Revolutionary Automation Breakthrough
                  </h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Discover how companies are achieving 300% efficiency gains and $50M+ in annual savings through revolutionary AI automation.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-blue-200">
                      <span>12 min read</span>
                      <span>•</span>
                      <span>Jan 2025</span>
                    </div>
                    <Link 
                      href="/blog/ai-2025-revolutionary-automation-breakthrough"
                      className="inline-flex items-center px-4 py-2 bg-white text-blue-600 text-sm font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-green-600 to-teal-700">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white mb-3">
                    🏆 Success Story
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Fortune 500 AI Transformation
                  </h3>
                  <p className="text-green-100 text-sm mb-4">
                    How a Fortune 500 company achieved $50M in annual savings and 300% efficiency gains.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-300">$50M</div>
                      <div className="text-xs text-green-200">Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-300">300%</div>
                      <div className="text-xs text-green-200">Efficiency</div>
                    </div>
                  </div>
                  <Link 
                    href="/case-studies/fortune-500-ai-transformation-2025-breakthrough"
                    className="inline-flex items-center px-4 py-2 bg-white text-green-600 text-sm font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 w-full justify-center"
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            </div>

            {/* Interactive Tools */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ROI Calculator</h3>
                <p className="text-gray-600 text-sm">
                  Calculate your potential savings with AI automation
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-2">Company Size</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Small Business</span>
                      <span className="text-sm font-semibold text-green-600">$500K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Enterprise</span>
                      <span className="text-sm font-semibold text-blue-600">$10M+</span>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Calculate My ROI
                </Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Industry Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">Manufacturing</span>
                  <span className="font-bold text-blue-600">40% cost reduction</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">Finance</span>
                  <span className="font-bold text-green-600">80% faster processing</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">Healthcare</span>
                  <span className="font-bold text-purple-600">50% faster diagnosis</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-700">Retail</span>
                  <span className="font-bold text-orange-600">70% inventory optimization</span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Get the latest AI insights and breakthrough content delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full px-4 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of companies already experiencing the revolutionary automation breakthrough. 
                Start your transformation journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Transformation
                  <span className="ml-2">→</span>
                </Link>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  View All Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}