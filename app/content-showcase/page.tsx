import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Content Showcase 2025 - Latest Articles, Case Studies & Resources"
        description="Explore our comprehensive collection of AI content for 2025. Latest articles, case studies, implementation guides, and downloadable resources to accelerate your AI transformation."
        keywords="AI content, AI articles, AI case studies, AI resources, 2025 AI trends, AI implementation guides"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔥 FRESH CONTENT</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Content Showcase 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest AI insights, success stories, and implementation resources. 
            Everything you need to succeed with AI in 2025, updated weekly.
          </p>
        </header>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 This Week's Featured Content
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our most popular and impactful content this week, handpicked by our AI experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/ai-2025-advanced-prompt-engineering" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
                <h3 className="text-lg font-semibold mb-2">Advanced Prompt Engineering 2025</h3>
                <p className="text-sm opacity-90 mb-3">Master AI communication with 300% better results</p>
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
                <h3 className="text-lg font-semibold mb-2">Fortune 500 AI Breakthrough</h3>
                <p className="text-sm opacity-90 mb-3">$2.3B revenue impact and 450% ROI success story</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>Featured</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-2025-comprehensive-implementation-master-guide" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-lg font-semibold mb-2">AI Implementation Master Guide</h3>
                <p className="text-sm opacity-90 mb-3">150+ page comprehensive guide with templates</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>150+ pages</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Latest Articles Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📚 Latest Articles</h2>
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Articles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-advanced-prompt-engineering" className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-6xl">🧠</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Engineering
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Advanced Prompt Engineering 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master AI communication with advanced techniques that deliver 300% better results. 
                    Learn chain-of-thought reasoning, few-shot learning, and optimization strategies.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                    <span className="text-sm text-gray-500">Jan 28, 2025</span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/ai-2025-multimodal-revolution" className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-6xl">🎭</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TRENDING
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Innovation
                    </span>
                    <span className="text-gray-500 text-sm">32 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    Multimodal AI Revolution 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Explore how combining text, images, audio, and video is creating unprecedented 
                    opportunities for businesses in 2025.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                    <span className="text-sm text-gray-500">Jan 28, 2025</span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/ai-2025-enterprise-automation-masterclass" className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-6xl">🏢</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ESSENTIAL
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Enterprise AI
                    </span>
                    <span className="text-gray-500 text-sm">45 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    Enterprise Automation Masterclass
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete implementation guide with real-world case studies and proven frameworks 
                    for 340% ROI and 45% cost reduction.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                    <span className="text-sm text-gray-500">Jan 28, 2025</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📊 Success Stories</h2>
            <Link 
              href="/case-studies" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Case Studies →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center relative">
                  <div className="text-6xl">🏆</div>
                  <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FEATURED
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                      Fortune 500
                    </span>
                    <span className="text-gray-500 text-sm">28 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    Fortune 500 AI Transformation Breakthrough
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How a global manufacturing leader achieved $2.3B in revenue impact and 450% ROI 
                    through comprehensive AI transformation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$2.3B</div>
                      <div className="text-sm text-gray-600">Revenue Impact</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">450%</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-600 font-medium group-hover:underline">
                      Read Case Study →
                    </span>
                    <span className="text-sm text-gray-500">Jan 28, 2025</span>
                  </div>
                </div>
              </article>
            </Link>

            <div className="space-y-6">
              <Link href="/case-studies/ai-healthcare-diagnosis-breakthrough-2025" className="group block">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🏥</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        Healthcare AI Diagnosis Breakthrough
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        95% accuracy and 80% faster processing in medical diagnosis
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-medium text-sm group-hover:underline">
                          Read Case Study →
                        </span>
                        <span className="text-xs text-gray-500">Healthcare</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-manufacturing-automation-success-2025" className="group block">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🏭</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        Manufacturing AI Automation Success
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        40% cost reduction and 60% faster processing times
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 font-medium text-sm group-hover:underline">
                          Read Case Study →
                        </span>
                        <span className="text-xs text-gray-500">Manufacturing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📋 Free Resources</h2>
            <Link 
              href="/resources" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Resources →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-2025-comprehensive-implementation-master-guide" className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-6xl">📋</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FREE
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Implementation Guide
                    </span>
                    <span className="text-gray-500 text-sm">150+ pages</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    AI Implementation Master Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete 150+ page guide with frameworks, checklists, templates, and real-world 
                    case studies for successful AI implementation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Download Free →
                    </span>
                    <span className="text-sm text-gray-500">PDF</span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/resources/ai-automation-enterprise-guide-2025" className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                  <div className="text-6xl">🏢</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FREE
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Enterprise Guide
                    </span>
                    <span className="text-gray-500 text-sm">120+ pages</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    Enterprise AI Automation Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive guide for implementing AI automation in enterprise environments 
                    with proven strategies and best practices.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-medium group-hover:underline">
                      Download Free →
                    </span>
                    <span className="text-sm text-gray-500">PDF</span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative">
                  <div className="text-6xl">✅</div>
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FREE
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                      Checklist
                    </span>
                    <span className="text-gray-500 text-sm">150+ items</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    AI Implementation Checklist
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Step-by-step checklist with 150+ actionable items for successful AI deployment 
                    and implementation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-medium group-hover:underline">
                      Download Free →
                    </span>
                    <span className="text-sm text-gray-500">PDF</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            📧 Stay Updated with Latest AI Content
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Get weekly updates on new articles, case studies, and resources delivered straight 
            to your inbox. Join 10,000+ AI professionals.
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
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </section>
      </div>
    </div>
  );
}