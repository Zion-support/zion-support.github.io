import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <>
      <SEO
        title="Content Showcase - Latest AI & Technology Resources"
        description="Discover our latest AI articles, case studies, and resources. Expert insights on AI implementation, market trends, and business transformation strategies."
        keywords="AI content, technology resources, AI articles, case studies, implementation guides, AI insights"
        url="/content-showcase"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">← Back to Home</Link>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-600">January 2025</span>
            </div>
            
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">🔥 FRESH CONTENT</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Content Showcase
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our latest AI articles, case studies, and resources. Expert insights on AI implementation, 
              market trends, and business transformation strategies to accelerate your success in 2025.
            </p>
          </header>

          {/* Featured Content Banner */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  🚀 Fresh AI Content Just Dropped
                </h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  New this week: Enterprise Implementation Masterclass, Market Disruption Analysis, 
                  Fortune 500 Success Story, and comprehensive implementation checklists.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
                    <h3 className="text-lg font-semibold mb-2">AI Enterprise Implementation Masterclass</h3>
                    <p className="text-sm opacity-90 mb-3">Complete guide to implementing AI in enterprise environments</p>
                    <div className="flex items-center text-xs opacity-75">
                      <span>45 min read</span>
                      <span className="mx-2">•</span>
                      <span>Masterclass</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/ai-2025-market-disruption-analysis" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📈</div>
                    <h3 className="text-lg font-semibold mb-2">AI Market Disruption Analysis 2025</h3>
                    <p className="text-sm opacity-90 mb-3">How AI is reshaping every industry with real impact data</p>
                    <div className="flex items-center text-xs opacity-75">
                      <span>25 min read</span>
                      <span className="mx-2">•</span>
                      <span>Trending</span>
                    </div>
                  </div>
                </Link>

                <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                    <h3 className="text-lg font-semibold mb-2">Fortune 500 AI Success Story</h3>
                    <p className="text-sm opacity-90 mb-3">$50M savings and 300% ROI in 18 months</p>
                    <div className="flex items-center text-xs opacity-75">
                      <span>Case Study</span>
                      <span className="mx-2">•</span>
                      <span>New</span>
                    </div>
                  </div>
                </Link>

                <Link href="/resources/ai-2025-implementation-master-checklist" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                    <h3 className="text-lg font-semibold mb-2">AI Implementation Master Checklist</h3>
                    <p className="text-sm opacity-90 mb-3">150+ actionable items for successful AI deployment</p>
                    <div className="flex items-center text-xs opacity-75">
                      <span>Free Download</span>
                      <span className="mx-2">•</span>
                      <span>150+ items</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Content Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Blog Articles */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📚</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Blog Articles</h3>
                  <p className="text-gray-600">Expert insights and analysis on AI trends, implementation strategies, and business transformation.</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">AI Enterprise Implementation Masterclass</h4>
                    <p className="text-sm text-gray-600">Complete guide to implementing AI in enterprise environments</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <span>45 min read</span>
                      <span>•</span>
                      <span>Masterclass</span>
                    </div>
                  </Link>
                  
                  <Link href="/blog/ai-2025-market-disruption-analysis" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">AI Market Disruption Analysis 2025</h4>
                    <p className="text-sm text-gray-600">How AI is reshaping every industry with real impact data</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <span>25 min read</span>
                      <span>•</span>
                      <span>Trending</span>
                    </div>
                  </Link>
                </div>
                
                <Link href="/blog" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block">
                  View All Articles
                </Link>
              </div>

              {/* Case Studies */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Case Studies</h3>
                  <p className="text-gray-600">Real-world success stories showcasing AI implementation results and business impact.</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">Fortune 500 AI Success Story</h4>
                    <p className="text-sm text-gray-600">$50M savings and 300% ROI in 18 months</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <span>Fortune 500</span>
                      <span>•</span>
                      <span>18 months</span>
                    </div>
                  </Link>
                  
                  <Link href="/case-studies/ai-healthcare-diagnosis-breakthrough-2025" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">Healthcare Diagnosis Breakthrough</h4>
                    <p className="text-sm text-gray-600">95% accuracy and 80% faster processing in medical diagnosis</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <span>Healthcare</span>
                      <span>•</span>
                      <span>95% Accuracy</span>
                    </div>
                  </Link>
                </div>
                
                <Link href="/case-studies" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block">
                  View All Case Studies
                </Link>
              </div>

              {/* Resources */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Resources</h3>
                  <p className="text-gray-600">Free downloads, checklists, templates, and implementation guides to accelerate your AI journey.</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <Link href="/resources/ai-2025-implementation-master-checklist" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">AI Implementation Master Checklist</h4>
                    <p className="text-sm text-gray-600">150+ actionable items for successful AI deployment</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <span>Free Download</span>
                      <span>•</span>
                      <span>150+ items</span>
                    </div>
                  </Link>
                  
                  <Link href="/resources/ai-2025-comprehensive-implementation-guide" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-1">AI Comprehensive Implementation Guide</h4>
                    <p className="text-sm text-gray-600">Complete step-by-step guide to AI implementation</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <span>Free Download</span>
                      <span>•</span>
                      <span>200+ pages</span>
                    </div>
                  </Link>
                </div>
                
                <Link href="/resources" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block">
                  View All Resources
                </Link>
              </div>
            </div>
          </section>

          {/* Latest Content Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Content</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                    <div className="text-6xl">🎓</div>
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
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      AI 2025 Enterprise Implementation Masterclass
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Complete guide to implementing AI in enterprise environments with proven strategies, 
                      frameworks, and best practices.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">ZT</span>
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

              <Link href="/blog/ai-2025-market-disruption-analysis" className="group">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                    <div className="text-6xl">📈</div>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      TRENDING
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Market Analysis
                      </span>
                      <span className="text-gray-500 text-sm">25 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      AI 2025 Market Disruption Analysis
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Comprehensive analysis of how AI is disrupting industries in 2025 with market 
                      insights and strategic responses.
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

              <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="group">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                    <div className="text-6xl">🏆</div>
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      SUCCESS
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                        Case Study
                      </span>
                      <span className="text-gray-500 text-sm">Fortune 500</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">18 months</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      Fortune 500 AI Transformation Success
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      How a Fortune 500 company achieved $50M in cost savings and 300% ROI through 
                      comprehensive AI transformation.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-purple-600 font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Get expert guidance and accelerate your AI implementation with our proven frameworks, 
              comprehensive resources, and strategic consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                Download Free Resources
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}