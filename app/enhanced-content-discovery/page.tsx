import React from 'react';
import SEO from '../../components/SEO';
import InteractiveContentDiscovery from '../../components/InteractiveContentDiscovery';
import Link from 'next/link';

export default function EnhancedContentDiscovery() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Enhanced Content Discovery - AI Insights, Case Studies & Resources"
        description="Discover our comprehensive library of AI insights, case studies, and resources. Use our interactive discovery tool to find exactly what you need for your AI transformation journey."
        keywords="AI content discovery, AI insights, AI case studies, AI resources, content search, AI knowledge base"
        url="/enhanced-content-discovery"
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🔍 INTERACTIVE DISCOVERY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing AI Content
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive library of AI insights, case studies, and resources. 
              Use our interactive discovery tool to find exactly what you need for your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#discovery"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Start Exploring
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                View All Content
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-gray-600">Total Pages</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Discovery */}
      <div id="discovery" className="py-16">
        <InteractiveContentDiscovery />
      </div>

      {/* Featured Categories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Content Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse content by category to quickly find what you're looking for
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/enhanced-content-discovery?category=AI Innovation" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌟</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  AI Innovation
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Latest breakthroughs and cutting-edge AI technologies
                </p>
                <div className="text-sm text-purple-600 font-medium group-hover:underline">
                  Explore Innovation →
                </div>
              </div>
            </Link>

            <Link href="/enhanced-content-discovery?category=Enterprise" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Enterprise
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Large-scale AI implementations and enterprise strategies
                </p>
                <div className="text-sm text-blue-600 font-medium group-hover:underline">
                  View Enterprise Content →
                </div>
              </div>
            </Link>

            <Link href="/enhanced-content-discovery?category=Success Stories" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Success Stories
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Real-world case studies and implementation success stories
                </p>
                <div className="text-sm text-green-600 font-medium group-hover:underline">
                  Read Success Stories →
                </div>
              </div>
            </Link>

            <Link href="/enhanced-content-discovery?category=Implementation" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-orange-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Implementation
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Practical guides, templates, and implementation resources
                </p>
                <div className="text-sm text-orange-600 font-medium group-hover:underline">
                  Get Implementation Help →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Latest Content
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Get notified when we publish new articles, case studies, and resources. 
            Join 10,000+ AI professionals who trust our content.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-white opacity-75 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
}