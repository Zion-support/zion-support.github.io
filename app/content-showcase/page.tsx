import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Technology Insights 2025"
        description="Explore our comprehensive collection of AI articles, case studies, resources, and implementation guides. Stay ahead with the latest insights in artificial intelligence and technology."
        keywords="AI content, technology insights, AI articles, case studies, resources, implementation guides, AI trends 2025"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <span>📚 CONTENT SHOWCASE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest AI & Technology Insights
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive collection of expert insights, case studies, and resources. 
            From breakthrough innovations to practical implementation guides, everything you need 
            to succeed with AI in 2025.
          </p>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🔥 HOT THIS WEEK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fresh Content Just Dropped
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              New this week: AI Breakthrough Innovations, Cybersecurity 2025, Green AI Sustainability, 
              and Fortune 500 Success Stories. Expert insights to accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                📋 Download Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Latest Articles</h3>
            <p className="text-gray-600 mb-6">
              Expert insights on AI trends, implementation strategies, and emerging technologies.
            </p>
            <div className="space-y-3">
              <Link href="/blog/ai-2025-breakthrough-innovations" className="block group">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                    AI Breakthrough Innovations 2025
                  </h4>
                  <p className="text-sm text-gray-600">Quantum AI, autonomous agents, and revolutionary technologies</p>
                </div>
              </Link>
              <Link href="/blog/ai-cybersecurity-2025" className="block group">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                    AI Cybersecurity 2025
                  </h4>
                  <p className="text-sm text-gray-600">Protecting against next-generation AI-powered threats</p>
                </div>
              </Link>
              <Link href="/blog/ai-sustainability-green-tech-2025" className="block group">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                    AI Sustainability & Green Tech 2025
                  </h4>
                  <p className="text-sm text-gray-600">Building eco-friendly AI systems with 60% energy reduction</p>
                </div>
              </Link>
            </div>
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4">
              View All Articles →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Case Studies</h3>
            <p className="text-gray-600 mb-6">
              Real-world success stories showcasing AI transformation results and ROI.
            </p>
            <div className="space-y-3">
              <Link href="/case-studies/ai-transformation-fortune-500-success-2025" className="block group">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                    Fortune 500 AI Success Story
                  </h4>
                  <p className="text-sm text-gray-600">$50M savings and 300% ROI in 18 months</p>
                </div>
              </Link>
              <Link href="/case-studies/ai-automation-manufacturing-2025" className="block group">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                    AI Automation in Manufacturing
                  </h4>
                  <p className="text-sm text-gray-600">40% cost reduction and 60% faster processing</p>
                </div>
              </Link>
              <Link href="/case-studies/ai-financial-services-transformation-2025" className="block group">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                    Financial Services AI Transformation
                  </h4>
                  <p className="text-sm text-gray-600">Complete digital transformation success story</p>
                </div>
              </Link>
            </div>
            <Link href="/case-studies" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mt-4">
              View All Case Studies →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Resources</h3>
            <p className="text-gray-600 mb-6">
              Downloadable guides, checklists, and templates for AI implementation.
            </p>
            <div className="space-y-3">
              <Link href="/resources/ai-2025-implementation-roadmap" className="block group">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">
                    AI Implementation Roadmap 2025
                  </h4>
                  <p className="text-sm text-gray-600">Complete guide to AI transformation</p>
                </div>
              </Link>
              <Link href="/resources/ai-implementation-master-guide-2025" className="block group">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">
                    AI Implementation Master Guide
                  </h4>
                  <p className="text-sm text-gray-600">150+ page comprehensive resource</p>
                </div>
              </Link>
              <Link href="/resources/ai-cybersecurity-checklist-2025" className="block group">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">
                    AI Cybersecurity Checklist
                  </h4>
                  <p className="text-sm text-gray-600">Step-by-step security implementation</p>
                </div>
              </Link>
            </div>
            <Link href="/resources" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mt-4">
              View All Resources →
            </Link>
          </div>
        </div>

        {/* Trending Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trending This Week</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-trends-2025-predictions" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">🔮</div>
                <div className="text-xs font-medium text-blue-700 mb-2">AI Trends</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Trends 2025 Predictions
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  15 predictions that will shape the future of technology
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>28 min read</span>
                  <span>🔥 Trending</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-enterprise-transformation-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">🏢</div>
                <div className="text-xs font-medium text-green-700 mb-2">Enterprise AI</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI Enterprise Transformation 2025
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Complete implementation guide with 340% ROI
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>18 min read</span>
                  <span>⭐ Popular</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-startup-funding-guide-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">💰</div>
                <div className="text-xs font-medium text-purple-700 mb-2">Startup Strategy</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  AI Startup Funding Guide 2025
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  From seed to Series A with $47B market insights
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>22 min read</span>
                  <span>📈 Rising</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-sustainability-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">🌱</div>
                <div className="text-xs font-medium text-green-700 mb-2">Sustainability</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI Sustainability 2025
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Building eco-friendly AI systems
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>20 min read</span>
                  <span>💡 Insight</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Insights</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get weekly updates on AI trends, implementation guides, and exclusive content. 
              Join 10,000+ professionals who trust our insights.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Access</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              📚 All Articles
            </Link>
            <Link
              href="/case-studies"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              📊 Case Studies
            </Link>
            <Link
              href="/resources"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              📋 Resources
            </Link>
            <Link
              href="/services"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              🚀 Services
            </Link>
            <Link
              href="/contact"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              💬 Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}