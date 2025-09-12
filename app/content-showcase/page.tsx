import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI Insights, Case Studies & Resources"
        description="Explore our comprehensive collection of AI insights, case studies, and resources. From enterprise implementation guides to cybersecurity strategies, discover the knowledge you need to succeed in 2025."
        keywords="AI content, AI insights, AI case studies, AI resources, AI implementation, AI transformation"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🚀 Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of AI insights, case studies, and resources. 
            From enterprise implementation guides to cybersecurity strategies, get the knowledge 
            you need to succeed in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              📚 Browse All Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              📋 Download Resources
            </Link>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🔥 Featured This Week</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
                <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  NEW
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI 2025 Enterprise Implementation Masterclass
                </h3>
                <p className="text-gray-700 mb-4">
                  Complete guide to successful AI transformation with proven strategies, frameworks, and best practices that have helped Fortune 500 companies achieve 300% ROI.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>45 min read</span>
                  <span className="text-blue-600 font-medium group-hover:underline">Read Article →</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-2025-fortune-500-breakthrough" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  SUCCESS STORY
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Fortune 500 AI Breakthrough
                </h3>
                <p className="text-gray-700 mb-4">
                  Detailed case study of a Fortune 500 manufacturing company that achieved $50M in cost savings and 300% ROI within 18 months through comprehensive AI transformation.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Case Study</span>
                  <span className="text-green-600 font-medium group-hover:underline">Read Case Study →</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-2025-implementation-master-checklist" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  FREE DOWNLOAD
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI 2025 Implementation Master Checklist
                </h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive checklist with 200+ actionable items covering every aspect of successful AI transformation. Used by Fortune 500 companies to achieve breakthrough results.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>200+ Items</span>
                  <span className="text-purple-600 font-medium group-hover:underline">Download Free →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Latest Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📚 Latest Articles</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Articles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-advanced-automation" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                <div className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  TRENDING
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  AI 2025 Advanced Automation
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  The future of intelligent business operations with 300% efficiency gains and 40% cost reduction.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>32 min read</span>
                  <span className="text-orange-600 font-medium group-hover:underline">Read →</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2025-cybersecurity-revolution" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                <div className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  CRITICAL
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  AI Cybersecurity Revolution
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Protecting the digital future with 99.9% threat detection accuracy and real-time protection.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>38 min read</span>
                  <span className="text-red-600 font-medium group-hover:underline">Read →</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-enterprise-transformation-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
                <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  POPULAR
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Enterprise Transformation 2025
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Complete implementation guide with 340% ROI and real case studies from successful transformations.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>18 min read</span>
                  <span className="text-blue-600 font-medium group-hover:underline">Read →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📊 Success Stories</h2>
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Case Studies →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-2025-fortune-500-breakthrough" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Fortune 500 AI Breakthrough
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  $50M savings and 300% ROI in 18 months through comprehensive AI transformation.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$50M</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">300%</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">18</div>
                    <div className="text-xs text-gray-600">Months</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Case Study</span>
                  <span className="text-green-600 font-medium group-hover:underline">Read →</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-manufacturing-transformation-success-2025" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Manufacturing AI Success
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  40% cost reduction and 60% faster processing through intelligent automation.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">40%</div>
                    <div className="text-xs text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">60%</div>
                    <div className="text-xs text-gray-600">Faster Processing</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Case Study</span>
                  <span className="text-blue-600 font-medium group-hover:underline">Read →</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-success-2025" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🏦</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Financial Services AI Success
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  $50M cost savings and 300% efficiency gains through AI transformation.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$50M</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">300%</div>
                    <div className="text-xs text-gray-600">Efficiency</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Case Study</span>
                  <span className="text-purple-600 font-medium group-hover:underline">Read →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📋 Free Resources</h2>
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Resources →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-2025-implementation-master-checklist" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  FREE DOWNLOAD
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Implementation Master Checklist
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  200+ actionable items covering every aspect of successful AI transformation.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>200+ Items</span>
                  <span className="text-green-600 font-medium group-hover:underline">Download Free →</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-master-guide-2025" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  FREE DOWNLOAD
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Implementation Master Guide
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Comprehensive 150+ page guide with detailed strategies and best practices.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>150+ Pages</span>
                  <span className="text-blue-600 font-medium group-hover:underline">Download Free →</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-automation-implementation-playbook-2025" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
                <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  FREE DOWNLOAD
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI Automation Implementation Playbook
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Step-by-step playbook for implementing AI automation with proven methodologies.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Playbook</span>
                  <span className="text-purple-600 font-medium group-hover:underline">Download Free →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            📧 Stay Updated with Latest AI Insights
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox. Join 10,000+ AI professionals.
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
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}