import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <>
      <SEO
        title="Content Showcase - AI Insights, Case Studies & Resources | Zion Tech Group"
        description="Explore our comprehensive library of AI insights, case studies, implementation guides, and free resources. Expert content covering AI trends, enterprise automation, and business transformation."
        keywords="AI content, case studies, AI resources, implementation guides, AI insights, business automation, enterprise AI"
        url="/content-showcase"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-3 mb-8">
                <span className="text-lg font-bold">🎯 COMPREHENSIVE CONTENT LIBRARY</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                AI Insights, Case Studies & Resources
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
                Discover our complete library of expert AI content, real-world case studies, 
                implementation guides, and free resources. Everything you need to succeed with AI in 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="#latest-content"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  View Latest Content
                </Link>
                <Link
                  href="#resources"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
                >
                  Download Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Articles</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Case Studies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Free Resources</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
                <div className="text-gray-600">Monthly Readers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Content Section */}
        <section id="latest-content" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-3 mb-6">
                <span className="text-lg font-bold">🔥 LATEST CONTENT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Fresh AI & Business Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead with our latest articles, case studies, and resources covering the most 
                important trends in AI, automation, and business transformation.
              </p>
            </div>

            {/* Featured Articles */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                      <div className="text-8xl">🔮</div>
                      <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        NEW
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                          AI Innovation
                        </span>
                        <span className="text-gray-500 text-sm">25 min read</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        AI 2025 Breakthrough Innovations
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Discover the groundbreaking AI innovations shaping 2025. From AGI developments 
                        to quantum AI, multimodal systems, and edge intelligence.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 font-bold text-sm">ZT</span>
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

                <Link href="/blog/ai-enterprise-automation-2025" className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                      <div className="text-8xl">🏢</div>
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        ESSENTIAL
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                          Enterprise AI
                        </span>
                        <span className="text-gray-500 text-sm">20 min read</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                        AI Enterprise Automation 2025
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Complete implementation guide with 40% cost reduction and 300% productivity gains. 
                        Real case studies and proven strategies.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-bold text-sm">ZT</span>
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

                <Link href="/blog/ai-multimodal-applications-2025" className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative">
                      <div className="text-8xl">🎭</div>
                      <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        TRENDING
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">
                          AI Technology
                        </span>
                        <span className="text-gray-500 text-sm">15 min read</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">Jan 25, 2025</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                        AI Multimodal Applications 2025
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Beyond text to vision, audio, and beyond - the future of AI. Explore how 
                        multimodal systems are transforming industries.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                            <span className="text-pink-600 font-bold text-sm">ZT</span>
                          </div>
                          <span className="text-sm text-gray-600">Zion Tech Group</span>
                        </div>
                        <span className="text-pink-600 font-medium group-hover:underline">
                          Read Article →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            </div>

            {/* Case Studies */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Success Stories</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link href="/case-studies/ai-transformation-enterprise-success-2025" className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
                      <div className="text-8xl">🏆</div>
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        FORTUNE 500
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          Case Study
                        </span>
                        <span className="text-gray-500 text-sm">15 min read</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        Fortune 500 AI Success
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        $50M savings, 300% efficiency gains - complete case study of enterprise AI transformation.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">ZT</span>
                          </div>
                          <span className="text-sm text-gray-600">Zion Tech Group</span>
                        </div>
                        <span className="text-blue-600 font-medium group-hover:underline">
                          Read Case Study →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>

                <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                      <div className="text-8xl">🏦</div>
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        FINANCE
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                          Case Study
                        </span>
                        <span className="text-gray-500 text-sm">12 min read</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">Jan 25, 2025</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                        Financial Services AI Success
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        $30M savings, 250% efficiency gains in banking operations and customer service.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-bold text-sm">ZT</span>
                          </div>
                          <span className="text-sm text-gray-600">Zion Tech Group</span>
                        </div>
                        <span className="text-green-600 font-medium group-hover:underline">
                          Read Case Study →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>

                <Link href="/case-studies/ai-healthcare-diagnosis-breakthrough-2025" className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center relative">
                      <div className="text-8xl">🏥</div>
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        HEALTHCARE
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                          Case Study
                        </span>
                        <span className="text-gray-500 text-sm">18 min read</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">Jan 22, 2025</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                        Healthcare AI Diagnosis Breakthrough
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        94% accuracy, 60% faster diagnosis in medical imaging and patient care.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                            <span className="text-red-600 font-bold text-sm">ZT</span>
                          </div>
                          <span className="text-sm text-gray-600">Zion Tech Group</span>
                        </div>
                        <span className="text-red-600 font-medium group-hover:underline">
                          Read Case Study →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-3 mb-6">
                <span className="text-lg font-bold">📋 FREE RESOURCES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Downloadable Resources & Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get instant access to our comprehensive library of free resources, templates, 
                checklists, and implementation guides.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/resources/ai-implementation-checklist-2025" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-blue-100">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Implementation Checklist
                  </h3>
                  <p className="text-gray-600 mb-4">
                    150+ actionable items for successful AI implementation across your organization.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium">Free Download</span>
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-startup-funding-playbook-2025" className="group">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-green-100">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    AI Startup Funding Playbook
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete guide with pitch templates, investor strategies, and market insights.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-medium">Free Download</span>
                    <span className="text-green-600 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-roi-calculator-2025" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-purple-100">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    AI ROI Calculator
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Calculate potential return on investment for your AI initiatives with our interactive tool.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-medium">Free Tool</span>
                    <span className="text-purple-600 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-governance-framework-2025" className="group">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-orange-100">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    AI Governance Framework
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete framework for responsible AI governance and ethical implementation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-600 font-medium">Free Download</span>
                    <span className="text-orange-600 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-security-checklist-2025" className="group">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                    AI Security Checklist
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Essential security measures and best practices for AI system implementation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium">Free Download</span>
                    <span className="text-gray-600 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-trends-report-2025" className="group">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-cyan-100">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    AI Trends Report 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive analysis of AI trends, market insights, and future predictions.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-600 font-medium">Free Report</span>
                    <span className="text-cyan-600 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Explore by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find exactly what you're looking for with our organized content categories.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/blog" className="group">
                <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Articles
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Expert insights, trends, and analysis on artificial intelligence and automation.
                  </p>
                  <div className="text-blue-600 font-medium group-hover:underline">
                    View Articles →
                  </div>
                </div>
              </Link>

              <Link href="/case-studies" className="group">
                <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    Case Studies
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Real-world success stories and detailed implementation case studies.
                  </p>
                  <div className="text-green-600 font-medium group-hover:underline">
                    View Case Studies →
                  </div>
                </div>
              </Link>

              <Link href="/resources" className="group">
                <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    Free Resources
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Templates, checklists, guides, and tools to accelerate your AI journey.
                  </p>
                  <div className="text-purple-600 font-medium group-hover:underline">
                    View Resources →
                  </div>
                </div>
              </Link>

              <Link href="/services" className="group">
                <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    AI Services
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professional AI implementation, consulting, and support services.
                  </p>
                  <div className="text-orange-600 font-medium group-hover:underline">
                    View Services →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Latest AI Insights
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get weekly updates on AI trends, case studies, and exclusive content delivered 
              straight to your inbox. Join 10,000+ AI professionals.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}