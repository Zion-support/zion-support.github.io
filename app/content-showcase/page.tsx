import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

  return (
    <ErrorBoundary>
      <SEO
        title="Content Showcase - Latest AI & Tech Resources | Zion Tech Group"
        description="Explore our comprehensive library of AI insights, case studies, and resources. From implementation guides to success stories, discover everything you need to succeed with AI."
        keywords="AI resources, tech content, implementation guides, case studies, AI insights, technology resources"
        url="/content-showcase"
      />
      <StructuredData
        type="WebPage"
        data={{
          headline: "Latest AI & Tech Content Showcase",
          description: "Discover Zion Tech Group's newest blog posts, case studies, and free resources on AI, cloud, and digital transformation. Stay informed with our expert insights.",
          url: "https://zion.app/content-showcase",
          publisher: {
            "@type": "Organization",
            name: "Zion Tech Group",
            logo: {
              "@type": "ImageObject",
              url: "https://zion.app/images/zion-tech-group-logo.png"
            }
          }
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 FRESH CONTENT</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Content Showcase
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our latest AI insights, implementation guides, case studies, and resources. 
            Everything you need to succeed with AI and technology in 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Browse All Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              Download Resources
            </Link>
          </div>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fresh AI & Business Insights
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              New this week: AI Productivity Playbook, Manufacturing Automation Success Story, 
              and comprehensive year-end AI summary. Expert insights to accelerate your growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/ai-2025-year-end-summary" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-lg font-semibold mb-2">AI 2025: Year-End Summary</h3>
                <p className="text-sm opacity-90 mb-3">Comprehensive review of breakthrough innovations and trends</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>25 min read</span>
                  <span className="mx-2">•</span>
                  <span>Trending</span>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/ai-productivity-automation-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-lg font-semibold mb-2">AI Productivity Automation 2025</h3>
                <p className="text-sm opacity-90 mb-3">Complete implementation guide with 300% productivity gains</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>22 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-manufacturing-automation-success-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                <h3 className="text-lg font-semibold mb-2">Manufacturing AI Success</h3>
                <p className="text-sm opacity-90 mb-3">40% cost reduction and 60% faster processing</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Content Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Blog Articles</h3>
                <p className="text-gray-600 text-sm mb-3">Expert insights and analysis</p>
                <div className="text-xs text-gray-500">50+ articles</div>
              </div>
            </Link>
            
            <Link href="/case-studies" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Case Studies</h3>
                <p className="text-gray-600 text-sm mb-3">Real-world success stories</p>
                <div className="text-xs text-gray-500">15+ studies</div>
              </div>
            </Link>
            
            <Link href="/resources" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Resources</h3>
                <p className="text-gray-600 text-sm mb-3">Templates and guides</p>
                <div className="text-xs text-gray-500">20+ resources</div>
              </div>
            </Link>
            
            <Link href="/services" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Services</h3>
                <p className="text-gray-600 text-sm mb-3">Implementation support</p>
                <div className="text-xs text-gray-500">Expert help</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Latest Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-year-end-summary" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <div className="text-6xl">📊</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TRENDING
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Trends
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Dec 28, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI 2025: The Year That Changed Everything
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    A comprehensive look at the breakthrough innovations, enterprise transformations, 
                    and paradigm shifts that defined artificial intelligence in 2025.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/ai-productivity-automation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-6xl">⚡</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Productivity
                    </span>
                    <span className="text-gray-500 text-sm">22 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 15, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    AI Productivity Automation 2025: Complete Guide
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Discover how AI automation can boost your team's productivity by 300% while reducing 
                    manual work by 80%. Real strategies, tools, and case studies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-xs">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-green-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/ai-enterprise-automation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-6xl">🏢</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    POPULAR
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Enterprise
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 10, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    Enterprise AI Automation: Complete Implementation Guide
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Scale AI automation across your entire organization with proven strategies, 
                    real-world case studies, and step-by-step implementation plans.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-xs">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/case-studies/ai-manufacturing-automation-success-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <div>
                    <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mb-2">
                      NEW
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600">
                      Manufacturing AI Success: 40% Cost Reduction
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Fortune 500 manufacturer achieves dramatic cost savings and efficiency gains 
                      through comprehensive AI automation implementation.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$2.3M</div>
                    <div className="text-gray-600">Annual Savings</div>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-retail-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <div>
                    <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-2">
                      POPULAR
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                      Retail AI Transformation: 300% Revenue Growth
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      E-commerce platform achieves massive growth through AI-powered personalization, 
                      automation, and customer experience optimization.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">300%</div>
                    <div className="text-gray-600">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">18</div>
                    <div className="text-gray-600">Months</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources</h2>
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources/ai-productivity-playbook-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                  NEW
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                  AI Productivity Playbook 2025
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete 150+ page guide with tools, strategies, and implementation templates
                </p>
                <div className="text-xs text-gray-500">Free Download • 150+ pages</div>
              </div>
            </Link>
            
            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✅</div>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                  POPULAR
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Implementation Checklist
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step checklist for successful AI implementation across your organization
                </p>
                <div className="text-xs text-gray-500">Free Download • Checklist</div>
              </div>
            </Link>
            
            <Link href="/resources/ai-roi-calculator-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                  TOOL
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                  AI ROI Calculator
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Calculate potential return on investment for your AI automation projects
                </p>
                <div className="text-xs text-gray-500">Free Tool • Interactive</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get weekly updates on new articles, case studies, and resources delivered straight to your inbox. 
            Join 10,000+ professionals who trust our content.
          </p>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-sm opacity-75 mt-3">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-831d
  );
}