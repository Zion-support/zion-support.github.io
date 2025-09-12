import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function AIContentHub2025() {
  return (
    <>
      <SEO
        title="AI Content Hub 2025 - Latest AI Insights, Guides & Resources"
        description="Discover the latest AI insights, implementation guides, case studies, and resources. Stay ahead with expert analysis, breakthrough innovations, and practical strategies for AI success in 2025."
        keywords="AI content, AI insights, AI guides, AI resources, AI trends, AI implementation, AI case studies"
        url="/ai-content-hub-2025"
      />
      
      <div className="min-h-screen bg-white">
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Zion Tech Group
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
                <Link href="/case-studies" className="text-gray-600 hover:text-blue-600">Case Studies</Link>
                <Link href="/resources" className="text-gray-600 hover:text-blue-600">Resources</Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 JANUARY 2025 CONTENT HUB</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Content Hub 2025
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your comprehensive source for the latest AI insights, breakthrough innovations, 
              implementation guides, and success stories. Stay ahead of the curve with expert 
              analysis and practical strategies for AI transformation.
            </p>
          </header>

          {/* Featured Content Banner */}
          <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
                  <span className="text-sm font-medium">🔥 JUST PUBLISHED</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Revolutionary AI Content & Insights
                </h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                  Discover breakthrough innovations, enterprise transformation success stories, 
                  and comprehensive implementation guides. Expert insights to accelerate your AI journey.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-3xl mb-4">🎯</div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full">Masterclass</span>
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">AI Enterprise Implementation Masterclass</h3>
                    <p className="text-sm opacity-90 mb-3">Complete guide to successful AI transformation with 300% ROI</p>
                    <div className="flex items-center text-xs opacity-75">
                      <span>45 min read</span>
                      <span className="mx-2">•</span>
                      <span>Read More →</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/ai-2025-advanced-automation" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-3xl mb-4">🤖</div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full">Guide</span>
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">AI 2025 Advanced Automation</h3>
                    <p className="text-sm opacity-90 mb-3">The future of intelligent operations with 300% efficiency gains</p>
                    <div className="flex items-center text-xs opacity-75">
                      <span>32 min read</span>
                      <span className="mx-2">•</span>
                      <span>Read More →</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/ai-2025-cybersecurity-revolution" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-3xl mb-4">🛡️</div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full">Security</span>
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">CRITICAL</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">AI Cybersecurity Revolution</h3>
                    <p className="text-sm opacity-90 mb-3">Protecting the digital future with 99.9% threat detection</p>
                    <div className="flex items-center text-xs opacity-75">
                      <span>38 min read</span>
                      <span className="mx-2">•</span>
                      <span>Read More →</span>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="text-center mt-8">
                <Link
                  href="/blog"
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  📚 Explore All Content
                </Link>
              </div>
            </div>
          </section>

          {/* Content Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Content Categories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Guides</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive implementation guides, best practices, and strategic frameworks 
                  for successful AI transformation.
                </p>
                <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Explore Guides →
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-xl p-8">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
                <p className="text-gray-600 mb-6">
                  Real-world case studies showcasing breakthrough results, measurable ROI, 
                  and lessons learned from AI implementations.
                </p>
                <Link href="/case-studies" className="text-green-600 hover:text-green-700 font-semibold">
                  View Case Studies →
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-8">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Resources & Tools</h3>
                <p className="text-gray-600 mb-6">
                  Free downloadable resources, templates, checklists, and tools to accelerate 
                  your AI implementation journey.
                </p>
                <Link href="/resources" className="text-purple-600 hover:text-purple-700 font-semibold">
                  Download Resources →
                </Link>
              </div>
            </div>
          </section>

          {/* Latest Articles */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
                View All Articles →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                    <div className="text-6xl">🎯</div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        Masterclass
                      </span>
                      <span className="text-gray-500 text-sm">45 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      AI Enterprise Implementation Masterclass
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Complete guide to successful AI transformation with proven frameworks and real-world case studies.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              <Link href="/blog/ai-2025-advanced-automation" className="group">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                    <div className="text-6xl">🤖</div>
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                        Automation
                      </span>
                      <span className="text-gray-500 text-sm">32 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      AI 2025 Advanced Automation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      The future of intelligent business operations with 300% efficiency gains and real-world examples.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              <Link href="/blog/ai-2025-cybersecurity-revolution" className="group">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center relative">
                    <div className="text-6xl">🛡️</div>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      CRITICAL
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                        Security
                      </span>
                      <span className="text-gray-500 text-sm">38 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      AI Cybersecurity Revolution
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Protecting the digital future with 99.9% threat detection accuracy and advanced defense systems.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-red-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </section>

          {/* Featured Case Studies */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Success Stories</h2>
              <Link href="/case-studies" className="text-green-600 hover:text-green-700 font-semibold">
                View All Case Studies →
              </Link>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Link href="/case-studies/ai-2025-fortune-500-breakthrough" className="group">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">🏆</div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Success Story</span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">NEW</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                          Fortune 500 AI Breakthrough
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      $50M savings and 300% ROI in 18 months - complete transformation case study with 
                      detailed implementation strategies and measurable results.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </Link>
                
                <div className="grid grid-cols-1 gap-4">
                  <Link href="/case-studies/ai-manufacturing-automation-success-2025" className="group block">
                    <div className="bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">🏭</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                            Manufacturing AI Success
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">
                            40% cost reduction and 60% faster processing
                          </p>
                          <div className="text-xs text-green-600">Read More →</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/case-studies/ai-financial-services-transformation-success-2025" className="group block">
                    <div className="bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">🏦</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                            Financial Services AI
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">
                            $50M cost savings and 300% efficiency gains
                          </p>
                          <div className="text-xs text-green-600">Read More →</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Free Resources */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Free Resources & Tools</h2>
              <Link href="/resources" className="text-purple-600 hover:text-purple-700 font-semibold">
                View All Resources →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Implementation Checklist</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step checklist for successful AI implementation with 150+ actionable items.
                </p>
                <Link href="/resources/ai-implementation-checklist-2025" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                  Download Free →
                </Link>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Implementation Playbook</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive 300+ page guide with frameworks, templates, and real-world examples.
                </p>
                <Link href="/resources/ai-implementation-playbook-2025" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                  Download Free →
                </Link>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Security Framework</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete framework for securing AI systems with best practices and compliance guidelines.
                </p>
                <Link href="/resources/ai-security-framework-2025" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                  Download Free →
                </Link>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Ahead with AI Insights</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get weekly updates on AI trends, implementation guides, and exclusive content. 
              Join 10,000+ AI professionals who trust our insights.
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
    </>
  );
}