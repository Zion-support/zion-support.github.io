import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Technology Resources 2025"
        description="Explore our comprehensive collection of AI and technology content. 200+ articles, case studies, and resources covering AI automation, cybersecurity, implementation guides, and success stories."
        keywords="AI content, technology resources, AI articles, case studies, implementation guides, AI automation, cybersecurity, 2025 trends"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 FRESH CONTENT - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Content Showcase
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of AI and technology content. From expert articles 
            and case studies to implementation guides and resources - everything you need to succeed 
            with AI in 2025.
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

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Content Library Statistics</h2>
            <p className="text-xl opacity-90">Comprehensive AI and technology resources at your fingertips</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Expert Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Case Studies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Free Resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25K+</div>
              <div className="text-blue-100">Monthly Readers</div>
            </div>
          </div>
        </div>

        {/* Featured Content Sections */}
        <div className="space-y-16">
          {/* Latest Articles */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">🔥 Latest Articles</h2>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
                View All Articles →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/ai-2025-advanced-automation-workflows" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-blue-600 font-medium">AI & Automation</div>
                      <div className="text-xs text-gray-500">25 min read • New</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Advanced Automation Workflows 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete implementation guide with 60% cost reduction and 300% productivity gains. 
                    Learn from real-world examples and get actionable strategies.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Jan 28, 2025</span>
                    <span className="text-blue-600 font-medium group-hover:underline">Read Article →</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-2025-cybersecurity-advanced-threat-detection" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-red-600 font-medium">Cybersecurity</div>
                      <div className="text-xs text-gray-500">32 min read • Essential</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    AI Cybersecurity Advanced Threat Detection
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master AI-powered cybersecurity in 2025. Prevent 99.7% of attacks with 85% faster 
                    response times. Complete implementation guide with real-world examples.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Jan 28, 2025</span>
                    <span className="text-red-600 font-medium group-hover:underline">Read Article →</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-enterprise-automation-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-green-600 font-medium">Enterprise AI</div>
                      <div className="text-xs text-gray-500">18 min read • Popular</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    AI Enterprise Automation 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete guide to enterprise-level AI automation implementation with real case studies 
                    and 340% ROI examples.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Jan 25, 2025</span>
                    <span className="text-green-600 font-medium group-hover:underline">Read Article →</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Featured Resources */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">📋 Featured Resources</h2>
              <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
                View All Resources →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/resources/ai-2025-implementation-master-checklist" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl text-white">📋</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-blue-600 font-medium">Implementation Guide</div>
                      <div className="text-xs text-gray-500">200+ Items • Free Download</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Implementation Master Checklist
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The most comprehensive AI implementation checklist for 2025. 200+ actionable items 
                    covering strategy, technology, security, and governance.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">PDF Download</span>
                    <span className="text-blue-600 font-medium group-hover:underline">Download Free →</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-implementation-master-guide-2025" className="group">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl text-white">📚</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-green-600 font-medium">Master Guide</div>
                      <div className="text-xs text-gray-500">150+ Pages • Free Download</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    AI Implementation Master Guide 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete 150+ page implementation guide with detailed strategies, frameworks, 
                    and step-by-step instructions for AI success.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Comprehensive Guide</span>
                    <span className="text-green-600 font-medium group-hover:underline">Download Free →</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-governance-blueprint-2025" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl text-white">⚖️</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-purple-600 font-medium">Governance</div>
                      <div className="text-xs text-gray-500">Framework • Free Download</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    AI Governance Blueprint 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive governance framework for responsible AI implementation. Ensure 
                    compliance and ethical AI practices in your organization.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Governance Framework</span>
                    <span className="text-purple-600 font-medium group-hover:underline">Download Free →</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Success Stories */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">🏆 Success Stories</h2>
              <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
                View All Case Studies →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/case-studies/ai-transformation-global-retail-giant-success-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏪</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-orange-600 font-medium">Retail & E-commerce</div>
                      <div className="text-xs text-gray-500">Fortune 500 • 18 min read</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    Global Retail Giant AI Success
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How a global retail giant achieved $2.8B revenue impact through comprehensive 
                    AI transformation with 95% customer satisfaction.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">$2.8B Impact</span>
                    <span className="text-orange-600 font-medium group-hover:underline">Read Case Study →</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-transformation-fortune-500-success-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-blue-600 font-medium">Fortune 500</div>
                      <div className="text-xs text-gray-500">Enterprise • 15 min read</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Fortune 500 AI Transformation Success
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How a Fortune 500 company achieved $50M savings and 300% ROI with AI 
                    implementation across all business units.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">$50M Savings</span>
                    <span className="text-blue-600 font-medium group-hover:underline">Read Case Study →</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-manufacturing-transformation-success-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏭</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-green-600 font-medium">Manufacturing</div>
                      <div className="text-xs text-gray-500">Industrial • 12 min read</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    Manufacturing AI Transformation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    40% cost reduction and 60% efficiency gains in manufacturing operations 
                    through AI-powered automation and optimization.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">40% Cost Reduction</span>
                    <span className="text-green-600 font-medium group-hover:underline">Read Case Study →</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get weekly updates on new articles, case studies, and resources. Join 25,000+ professionals 
            who trust our content for their AI and technology needs.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </section>
      </div>
    </div>
  );
}