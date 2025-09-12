import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <>
      <SEO
        title="Content Showcase - Latest AI & Technology Insights"
        description="Explore our comprehensive collection of AI insights, case studies, resources, and expert analysis. Stay ahead with the latest trends and implementation guides."
        keywords="AI content, technology insights, case studies, resources, AI trends, implementation guides, expert analysis"
        url="/content-showcase"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Content Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive collection of AI insights, case studies, resources, 
                and expert analysis. Stay ahead with the latest trends and implementation guides.
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
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🔥 FEATURED THIS WEEK</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                🚀 Fresh AI & Tech Content Just Dropped
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                New this week: AI 2025 Predictions, Implementation Success Framework, Enterprise Transformation Case Study, 
                and our comprehensive 150-page AI Transformation Playbook. Expert insights to accelerate your growth.
              </p>
            </div>

            {/* Featured Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog/ai-2025-predictions' className='group">
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🔮</div>
                  <h3 className='text-lg font-semibold mb-2'>AI 2025 Predictions</h3>
                  <p className='text-sm opacity-90 mb-3'>The future of AI: AGI breakthroughs, enterprise adoption, and industry transformation</p>
                  <div className='flex items-center text-xs opacity-75'>
                    <span>25 min read</span>
                    <span className='mx-2'>•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
              
              <Link href='/blog/ai-implementation-success-framework-2025' className='group'>
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📋</div>
                  <h3 className='text-lg font-semibold mb-2'>AI Implementation Framework</h3>
                  <p className='text-sm opacity-90 mb-3'>7-step process that guarantees 340% ROI and successful AI transformation</p>
                  <div className='flex items-center text-xs opacity-75'>
                    <span>30 min read</span>
                    <span className='mx-2'>•</span>
                    <span>Essential</span>
                  </div>
                </div>
              </Link>
              
              <Link href='/case-studies/ai-transformation-enterprise-success-2025' className='group'>
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏢</div>
                  <h3 className='text-lg font-semibold mb-2'>Enterprise AI Success</h3>
                  <p className='text-sm opacity-90 mb-3'>Fortune 500 case study: 340% ROI and $50M in cost savings</p>
                  <div className='flex items-center text-xs opacity-75'>
                    <span>Case Study</span>
                    <span className='mx-2'>•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href='/resources/ai-transformation-playbook-2025' className='group'>
                <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📚</div>
                  <h3 className='text-lg font-semibold mb-2'>AI Transformation Playbook</h3>
                  <p className='text-sm opacity-90 mb-3'>150+ page complete implementation guide with templates</p>
                  <div className='flex items-center text-xs opacity-75'>
                    <span>Free Download</span>
                    <span className='mx-2'>•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find the content that matters most to your role and industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog Articles */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Blog Articles</h3>
                  <p className="text-gray-600">Expert insights and analysis on AI trends, implementation, and best practices</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Articles:</span>
                    <span className="font-semibold text-blue-600">75+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">New This Month:</span>
                    <span className="font-semibold text-green-600">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average Read Time:</span>
                    <span className="font-semibold text-purple-600">15 min</span>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Browse Articles
                </Link>
              </div>

              {/* Case Studies */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Case Studies</h3>
                  <p className="text-gray-600">Real-world success stories and detailed implementation examples</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Case Studies:</span>
                    <span className="font-semibold text-green-600">25+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average ROI:</span>
                    <span className="font-semibold text-green-600">340%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Industries Covered:</span>
                    <span className="font-semibold text-purple-600">12+</span>
                  </div>
                </div>
                <Link
                  href="/case-studies"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  View Case Studies
                </Link>
              </div>

              {/* Resources */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Resources</h3>
                  <p className="text-gray-600">Templates, checklists, guides, and tools to accelerate your AI journey</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Resources:</span>
                    <span className="font-semibold text-purple-600">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Downloads:</span>
                    <span className="font-semibold text-green-600">25K+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Free Downloads:</span>
                    <span className="font-semibold text-blue-600">100%</span>
                  </div>
                </div>
                <Link
                  href="/resources"
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Download Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay up-to-date with our latest insights and analysis
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/blog/ai-2025-predictions" className="group">
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
                        AI & Technology
                      </span>
                      <span className="text-gray-500 text-sm">25 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      AI 2025 Predictions: The Future of Artificial Intelligence
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Discover the most important AI trends and predictions for 2025. From AGI breakthroughs 
                      to enterprise adoption, get insights from industry experts.
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

              <Link href="/blog/ai-implementation-success-framework-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                    <div className="text-8xl">📋</div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      ESSENTIAL
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        AI Implementation
                      </span>
                      <span className="text-gray-500 text-sm">30 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      AI Implementation Success Framework 2025
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Master AI implementation with our proven framework. Learn the 7-step process that 
                      guarantees 340% ROI and successful AI transformation.
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

              <Link href="/blog/ai-multimodal-applications-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
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
                      building multimodal AI systems.
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

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                View All Articles
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real success stories from companies that transformed with AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/case-studies/ai-transformation-enterprise-success-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                    <div className="text-8xl">🏢</div>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Fortune 500
                      </span>
                      <span className="text-gray-500 text-sm">15 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      AI Transformation Success: Fortune 500 Manufacturing
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      How a global manufacturing leader achieved 340% ROI and $50M in annual cost savings 
                      through comprehensive AI transformation.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">340%</div>
                        <div className="text-sm text-gray-600">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">$50M</div>
                        <div className="text-sm text-gray-600">Annual Savings</div>
                      </div>
                    </div>
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

              <Link href="/case-studies/ai-retail-personalization-success-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                    <div className="text-8xl">🛒</div>
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      POPULAR
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                        E-commerce
                      </span>
                      <span className="text-gray-500 text-sm">12 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 25, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      AI Retail Personalization Success
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      45% conversion increase and $5.8M additional revenue through AI-powered 
                      personalization and recommendation systems.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">45%</div>
                        <div className="text-sm text-gray-600">Conversion Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600">$5.8M</div>
                        <div className="text-sm text-gray-600">Additional Revenue</div>
                      </div>
                    </div>
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

            <div className="text-center mt-12">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
              >
                View All Case Studies
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Free tools, templates, and guides to accelerate your AI journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/resources/ai-transformation-playbook-2025" className="group">
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📚</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI Transformation Playbook</h3>
                    <p className="text-gray-600">150+ page complete implementation guide with templates and checklists</p>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pages:</span>
                      <span className="font-semibold text-purple-600">150+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Templates:</span>
                      <span className="font-semibold text-purple-600">50+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Downloads:</span>
                      <span className="font-semibold text-green-600">10K+</span>
                    </div>
                  </div>
                  <div className="w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold group-hover:bg-purple-700 transition-colors">
                    Download Free
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-implementation-checklist-2025" className="group">
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📋</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI Implementation Checklist</h3>
                    <p className="text-gray-600">Step-by-step checklist for successful AI implementation</p>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Items:</span>
                      <span className="font-semibold text-blue-600">150+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Categories:</span>
                      <span className="font-semibold text-blue-600">7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Downloads:</span>
                      <span className="font-semibold text-green-600">5K+</span>
                    </div>
                  </div>
                  <div className="w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold group-hover:bg-blue-700 transition-colors">
                    Download Free
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-security-hardening-checklist" className="group">
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI Security Hardening</h3>
                    <p className="text-gray-600">Essential security measures for AI systems and deployments</p>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Security Areas:</span>
                      <span className="font-semibold text-red-600">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Checklist Items:</span>
                      <span className="font-semibold text-red-600">80+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Downloads:</span>
                      <span className="font-semibold text-green-600">3K+</span>
                    </div>
                  </div>
                  <div className="w-full bg-red-600 text-white text-center py-3 rounded-lg font-semibold group-hover:bg-red-700 transition-colors">
                    Download Free
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
              >
                View All Resources
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated with Our Latest Content
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get weekly updates on AI trends, implementation guides, and exclusive content 
                delivered straight to your inbox. Join 10,000+ AI professionals.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  <strong>What you'll get:</strong> Weekly AI insights, exclusive case studies, 
                  free resources, and early access to new content.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}