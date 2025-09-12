// @ts-nocheck
import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Content Showcase - Complete Knowledge Hub | Zion Tech Group"
        description="Explore our complete library of AI resources: 50+ expert articles, 25+ success stories, 30+ implementation guides, and exclusive tools. Everything you need to master AI in 2025."
        keywords="AI content, AI resources, AI articles, AI case studies, AI guides, AI knowledge hub, AI implementation"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 text-sm font-medium mb-6">
            📚 COMPREHENSIVE RESOURCES
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🎯 Complete AI Knowledge Hub
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Access our complete library of AI resources: 50+ expert articles, 25+ success stories, 
            30+ implementation guides, and exclusive tools. Everything you need to master AI in 2025.
          </p>
        </div>

        {/* Content Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Expert Articles</div>
            <div className="text-sm text-gray-500 mt-1">Fresh content weekly</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-700 font-medium">Success Stories</div>
            <div className="text-sm text-gray-500 mt-1">Real-world results</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
            <div className="text-gray-700 font-medium">Implementation Guides</div>
            <div className="text-sm text-gray-500 mt-1">Step-by-step instructions</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">10K+</div>
            <div className="text-gray-700 font-medium">Downloads</div>
            <div className="text-sm text-gray-500 mt-1">Trusted by professionals</div>
          </div>
        </div>

        {/* Featured Content Sections */}
        <div className="space-y-16">
          {/* Latest Articles */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">🔥 Latest Articles</h2>
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
              >
                View All Articles
                <span>→</span>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/ai-2025-comprehensive-trends-analysis" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                  <h3 className="text-lg font-semibold mb-2">AI 2025: Comprehensive Trends Analysis</h3>
                  <p className="text-sm opacity-90 mb-3">Complete industry transformation guide covering 12 key AI trends driving the $3.2T revolution</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span>🆕 NEW</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-healthcare-diagnosis-revolution-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏥</div>
                  <h3 className="text-lg font-semibold mb-2">AI Healthcare Diagnosis Revolution</h3>
                  <p className="text-sm opacity-90 mb-3">99.7% diagnostic accuracy with AI-powered medical systems transforming healthcare delivery</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>20 min read</span>
                    <span className="mx-2">•</span>
                    <span>🎓 MASTERCLASS</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-transformation-global-manufacturing-giant-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                  <h3 className="text-lg font-semibold mb-2">$2.8B Manufacturing AI Success</h3>
                  <p className="text-sm opacity-90 mb-3">Global manufacturing giant achieves 340% ROI with comprehensive AI transformation across 150+ facilities</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>💰 $2.8B Value</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Implementation Guides */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">📋 Implementation Guides</h2>
              <Link
                href="/resources"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
              >
                View All Resources
                <span>→</span>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/resources/ai-implementation-success-checklist-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                  <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-xs font-medium mb-3">
                    FREE DOWNLOAD
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    AI Implementation Checklist
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    150+ actionable items to ensure successful AI deployment and maximum ROI.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Checklist</span>
                    <span>150+ Items</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-implementation-master-guide-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-medium mb-3">
                    COMPREHENSIVE
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    AI Implementation Master Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete 150+ page guide covering every aspect of AI implementation.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Guide</span>
                    <span>150+ Pages</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-transformation-master-guide-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-medium mb-3">
                    TRANSFORMATION
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    AI Transformation Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete roadmap for enterprise-wide AI transformation and digital change.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Roadmap</span>
                    <span>Enterprise</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Content Categories */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">📂 Content Categories</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📝</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Articles & Insights</h3>
                  <p className="text-gray-600 text-sm mb-4">Expert analysis and insights on AI trends</p>
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-xs text-gray-500">Articles</div>
                </div>
              </Link>

              <Link href="/case-studies" className="group">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Stories</h3>
                  <p className="text-gray-600 text-sm mb-4">Real-world AI transformation results</p>
                  <div className="text-2xl font-bold text-green-600">25+</div>
                  <div className="text-xs text-gray-500">Case Studies</div>
                </div>
              </Link>

              <Link href="/resources" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation Guides</h3>
                  <p className="text-gray-600 text-sm mb-4">Step-by-step implementation resources</p>
                  <div className="text-2xl font-bold text-purple-600">30+</div>
                  <div className="text-xs text-gray-500">Guides</div>
                </div>
              </Link>

              <Link href="/tools" className="group">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools & Calculators</h3>
                  <p className="text-gray-600 text-sm mb-4">Interactive AI tools and calculators</p>
                  <div className="text-2xl font-bold text-orange-600">10+</div>
                  <div className="text-xs text-gray-500">Tools</div>
                </div>
              </Link>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">📧 Stay Updated with AI Insights</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Get weekly updates on AI trends, implementation guides, and exclusive content 
                delivered straight to your inbox. Join 10,000+ AI professionals.
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
      </div>
    </div>
  );
}

