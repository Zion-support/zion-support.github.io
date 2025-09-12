import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Technology Insights | Zion Tech Group"
        description="Explore our comprehensive collection of AI insights, case studies, resources, and expert analysis. Stay ahead with the latest trends in artificial intelligence and technology."
        keywords="AI content, technology insights, AI resources, case studies, AI guides, technology trends, AI implementation"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 FRESH CONTENT - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Showcase
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our latest expert insights, comprehensive guides, real-world case studies, 
            and actionable resources. Everything you need to succeed in the AI-driven future.
          </p>
        </header>

        {/* Featured Content Banner */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  🔥 Featured This Week
                </h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  Our most popular and impactful content, handpicked by our experts to help you 
                  stay ahead of the AI revolution.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href="/blog/ai-2025-year-in-review" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                    <h3 className="text-lg font-semibold mb-2">AI 2025 Year in Review</h3>
                    <p className="text-sm opacity-90 mb-3">Comprehensive review of AI breakthroughs and trends</p>
                    <div className="flex items-center text-xs opacity-75">
                      <span>25 min read</span>
                      <span className="mx-2">•</span>
                      <span>🔥 Trending</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/resources/ai-transformation-playbook-2026" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                    <h3 className="text-lg font-semibold mb-2">AI Transformation Playbook 2026</h3>
                    <p className="text-sm opacity-90 mb-3">Complete guide to AI readiness and implementation</p>
                    <div className="flex items-center text-xs opacity-75">
                      <span>150 pages</span>
                      <span className="mx-2">•</span>
                      <span>Free Download</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/case-studies/ai-healthcare-diagnosis-success-2025" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏥</div>
                    <h3 className="text-lg font-semibold mb-2">Healthcare AI Success</h3>
                    <p className="text-sm opacity-90 mb-3">95% accuracy, 60% faster diagnosis</p>
                    <div className="flex items-center text-xs opacity-75">
                      <span>Case Study</span>
                      <span className="mx-2">•</span>
                      <span>New</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/ai-2026-predictions" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                    <h3 className="text-lg font-semibold mb-2">AI 2026 Predictions</h3>
                    <p className="text-sm opacity-90 mb-3">Expert predictions for the next frontier</p>
                    <div className="flex items-center text-xs opacity-75">
                      <span>22 min read</span>
                      <span className="mx-2">•</span>
                      <span>Future</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📚 Latest Articles</h2>
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              View All Articles
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-year-in-review" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <div className="text-8xl">📊</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FEATURED
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Technology
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI 2025 Year in Review: The Breakthrough Year
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive review of AI breakthroughs, trends, and transformations in 2025. 
                    From multimodal AI to enterprise adoption, discover what shaped the AI landscape.
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

            <Link href="/blog/ai-2026-predictions" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-8xl">🔮</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Technology
                    </span>
                    <span className="text-gray-500 text-sm">22 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI 2026 Predictions: The Next Frontier
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Expert predictions for AI in 2026: AGI progress, quantum-AI integration, 
                    brain-computer interfaces, and the future of enterprise AI adoption.
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

            <Link href="/blog/ai-multimodal-applications-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🎯</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TRENDING
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Technology
                    </span>
                    <span className="text-gray-500 text-sm">15 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Multimodal Applications 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Beyond text to vision, audio, and beyond. Complete implementation guide for 
                    building multimodal AI systems that combine multiple data types.
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
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📊 Case Studies</h2>
            <Link 
              href="/case-studies" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              View All Case Studies
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-healthcare-diagnosis-success-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                      Healthcare AI Diagnosis Success
                    </h3>
                    <p className="text-sm text-gray-600">95% accuracy, 60% faster diagnosis</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  How a major healthcare system achieved unprecedented diagnostic accuracy 
                  and efficiency using AI-powered medical imaging and diagnostic tools.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Healthcare</span>
                  <span>•</span>
                  <span>$12M savings</span>
                  <span>•</span>
                  <span>NEW</span>
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                      Financial Services AI Transformation
                    </h3>
                    <p className="text-sm text-gray-600">$50M cost savings, 300% efficiency gains</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Complete transformation of financial services operations through AI-powered 
                  risk assessment, fraud detection, and automated processing.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Financial Services</span>
                  <span>•</span>
                  <span>340% ROI</span>
                  <span>•</span>
                  <span>Featured</span>
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 mb-1">
                      AI Automation in Manufacturing
                    </h3>
                    <p className="text-sm text-gray-600">40% cost reduction, 60% faster processing</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Fortune 500 manufacturing company achieves dramatic efficiency gains through 
                  AI-powered predictive maintenance and quality control systems.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Manufacturing</span>
                  <span>•</span>
                  <span>$2.3M savings</span>
                  <span>•</span>
                  <span>Success</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📋 Free Resources</h2>
            <Link 
              href="/resources" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              View All Resources
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-transformation-playbook-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">
                      AI Transformation Playbook 2026
                    </h3>
                    <p className="text-sm text-gray-600">Complete guide to AI readiness</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Comprehensive 150-page playbook with readiness assessment, implementation 
                  roadmap, best practices, and real-world case studies.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>150 pages</span>
                  <span>•</span>
                  <span>Free Download</span>
                  <span>•</span>
                  <span>NEW</span>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                      AI Implementation Checklist
                    </h3>
                    <p className="text-sm text-gray-600">Step-by-step implementation guide</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  150+ actionable items for successful AI implementation, from strategy 
                  development to deployment and optimization.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>150+ items</span>
                  <span>•</span>
                  <span>Free Download</span>
                  <span>•</span>
                  <span>Popular</span>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-roi-calculator-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                      AI ROI Calculator 2025
                    </h3>
                    <p className="text-sm text-gray-600">Calculate potential return on investment</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Interactive calculator to estimate ROI for AI projects, including cost 
                  savings, efficiency gains, and revenue impact projections.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Interactive Tool</span>
                  <span>•</span>
                  <span>Free</span>
                  <span>•</span>
                  <span>Instant Results</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Articles & Insights</h3>
                <p className="text-gray-600 text-sm mb-4">Expert analysis and insights on AI trends, implementation strategies, and best practices.</p>
                <div className="text-blue-600 font-medium group-hover:underline">
                  Explore Articles →
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center hover:from-green-100 hover:to-green-200 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">Case Studies</h3>
                <p className="text-gray-600 text-sm mb-4">Real-world success stories and detailed implementation examples from various industries.</p>
                <div className="text-green-600 font-medium group-hover:underline">
                  View Case Studies →
                </div>
              </div>
            </Link>
            
            <Link href="/resources" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center hover:from-purple-100 hover:to-purple-200 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Free Resources</h3>
                <p className="text-gray-600 text-sm mb-4">Downloadable guides, checklists, templates, and tools to accelerate your AI journey.</p>
                <div className="text-purple-600 font-medium group-hover:underline">
                  Download Resources →
                </div>
              </div>
            </Link>
            
            <Link href="/services" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center hover:from-orange-100 hover:to-orange-200 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600">Services</h3>
                <p className="text-gray-600 text-sm mb-4">Expert consulting, implementation support, and custom AI solutions for your business.</p>
                <div className="text-orange-600 font-medium group-hover:underline">
                  Explore Services →
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Insights</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
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
          <p className="text-sm text-gray-400 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </section>
      </div>
    </div>
  );
}