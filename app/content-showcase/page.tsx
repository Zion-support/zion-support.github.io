import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI Insights & Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI insights, case studies, and resources. Latest articles, implementation guides, and success stories to accelerate your AI transformation."
        keywords="AI content, blog articles, case studies, resources, implementation guides, AI insights, latest content"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            📚 CONTENT SHOWCASE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest AI Insights & Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of expert insights, real-world case studies, 
            and practical resources to accelerate your AI transformation journey.
          </p>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🔥 FEATURED THIS WEEK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fresh AI Content Just Dropped
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              New this week: Advanced AI Automation Workflows, Comprehensive Security Guide, 
              Fortune 500 Success Story, and our complete AI Implementation Master Guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                📋 Download Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Latest Blog Articles */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Latest Blog Articles</h2>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
                View All →
              </Link>
            </div>
            
            <div className="space-y-6">
              <Link href="/blog/ai-2025-advanced-automation-workflows" className="group block">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🤖</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">NEW</span>
                        <span className="text-gray-500 text-sm">25 min read</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                        AI Advanced Automation Workflows 2025
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Master advanced AI automation workflows that deliver 300% productivity gains and 60% cost reduction.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-security-2025-comprehensive-guide" className="group block">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🔒</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">ESSENTIAL</span>
                        <span className="text-gray-500 text-sm">45 min read</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 mb-2">
                        AI Security Comprehensive Guide 2025
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Protect your AI systems with our comprehensive security framework and best practices.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Featured Case Study */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Featured Case Study</h2>
              <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-semibold">
                View All →
              </Link>
            </div>
            
            <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="group block">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">🏆</div>
                  <div className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full inline-block mb-2">NEW</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-3 text-center">
                  Fortune 500 AI Transformation
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  $50M savings and 300% efficiency gains through comprehensive AI transformation.
                </p>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div className="font-bold text-green-600">$50M</div>
                      <div className="text-green-700">Savings</div>
                    </div>
                    <div>
                      <div className="font-bold text-green-600">300%</div>
                      <div className="text-green-700">Efficiency</div>
                    </div>
                    <div>
                      <div className="font-bold text-green-600">18</div>
                      <div className="text-green-700">Months ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Featured Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Resources</h2>
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-semibold">
              View All Resources →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources/ai-implementation-master-guide-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">📚</div>
                  <div className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full inline-block mb-2">NEW</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 mb-2 text-center">
                  AI Implementation Master Guide
                </h3>
                <p className="text-gray-600 text-sm text-center mb-4">
                  150+ pages of templates, checklists, and frameworks for successful AI implementation.
                </p>
                <div className="text-center">
                  <span className="text-indigo-600 font-medium group-hover:underline">Download Free →</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-automation-implementation-playbook-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">🤖</div>
                  <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full inline-block mb-2">POPULAR</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2 text-center">
                  AI Automation Playbook
                </h3>
                <p className="text-gray-600 text-sm text-center mb-4">
                  Complete guide to implementing AI automation workflows with step-by-step instructions.
                </p>
                <div className="text-center">
                  <span className="text-green-600 font-medium group-hover:underline">Download Free →</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-security-implementation-guide-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">🔒</div>
                  <div className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full inline-block mb-2">ESSENTIAL</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 mb-2 text-center">
                  AI Security Guide
                </h3>
                <p className="text-gray-600 text-sm text-center mb-4">
                  Comprehensive security framework for protecting AI systems and data.
                </p>
                <div className="text-center">
                  <span className="text-red-600 font-medium group-hover:underline">Download Free →</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Insights</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox. Join 10,000+ AI professionals.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </section>
      </div>
    </div>
  );
}