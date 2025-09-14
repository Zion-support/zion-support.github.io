import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentShowcase2025() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            🚀 REVOLUTIONARY CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            AI 2025 Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover the most advanced AI strategies, implementation guides, and success stories that are transforming businesses worldwide
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Advanced Automation Mastery */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Automation Mastery</h3>
            <p className="text-gray-600 mb-6">
              Master the art of AI automation with our comprehensive guide covering everything from basic implementation to advanced optimization techniques.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                2,500-5,000% ROI potential
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                24-week implementation timeline
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                99.9% accuracy rate
              </div>
            </div>
            <Link 
              href="/blog/ai-2025-advanced-automation-mastery"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Read Complete Guide
            </Link>
          </div>

          {/* Global Transformation Case Study */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-green-100">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Enterprise Transformation</h3>
            <p className="text-gray-600 mb-6">
              Real-world case study of how a Fortune 500 company achieved 10,000% ROI through revolutionary AI implementation.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                10,000% ROI achieved
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                $2.5B revenue increase
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                6-month implementation
              </div>
            </div>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-colors"
            >
              View Success Story
            </Link>
          </div>

          {/* Ultimate Implementation Guide */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-purple-100">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ultimate Implementation Guide</h3>
            <p className="text-gray-600 mb-6">
              The definitive step-by-step framework for implementing AI solutions that deliver breakthrough results and maximum ROI.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Complete 24-week roadmap
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Templates and checklists
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Expert best practices
              </div>
            </div>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-guide"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              Get Implementation Guide
            </Link>
          </div>
        </div>

        {/* Content Categories */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center group-hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📝</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Blog Posts</h4>
                <p className="text-sm text-gray-600">Latest insights and strategies</p>
              </div>
            </Link>
            
            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center group-hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Case Studies</h4>
                <p className="text-sm text-gray-600">Real-world success stories</p>
              </div>
            </Link>
            
            <Link href="/resources" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center group-hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Resources</h4>
                <p className="text-sm text-gray-600">Guides and frameworks</p>
              </div>
            </Link>
            
            <Link href="/webinars" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center group-hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🎥</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Webinars</h4>
                <p className="text-sm text-gray-600">Live training sessions</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6">
            Join thousands of companies already achieving breakthrough results with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/ai-services-2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}