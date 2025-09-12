import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase: Latest AI Insights, Case Studies & Resources"
        description="Discover our latest AI content including industry analysis, case studies, implementation guides, and free resources. Stay ahead with expert insights."
        keywords="AI content, AI insights, AI case studies, AI resources, AI trends, AI implementation"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fresh AI & Business Content Just Dropped
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our latest expert insights, case studies, and resources. From AI enterprise transformation 
            to startup funding strategies and manufacturing automation, get the knowledge you need to succeed in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Industry Disruption */}
          <Link href="/blog/ai-2025-industry-disruption" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                <div className="text-8xl">🏭</div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Industry Analysis
                  </span>
                  <span className="text-gray-500 text-sm">25 min read</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  AI Industry Disruption Analysis 2025
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How AI is reshaping every sector with real impact data. Comprehensive analysis 
                  of AI disruption across industries with actionable insights for business leaders.
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
            </div>
          </Link>

          {/* AI Trends Predictions */}
          <Link href="/blog/ai-trends-2025-predictions" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                <div className="text-8xl">🔮</div>
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  TRENDING
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    AI Predictions
                  </span>
                  <span className="text-gray-500 text-sm">28 min read</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  AI Trends 2025 Predictions
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  15 breakthrough trends that will shape the future of AI. Expert predictions 
                  and analysis of the most significant AI trends that will define 2025.
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
            </div>
          </Link>

          {/* Fortune 500 Case Study */}
          <Link href="/case-studies/ai-transformation-fortune-500-success-2025" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                <div className="text-8xl">🏆</div>
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  CASE STUDY
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Success Story
                  </span>
                  <span className="text-gray-500 text-sm">15 min read</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  Fortune 500 AI Success Story
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  $50M savings and 300% ROI in 18 months. Discover how a Fortune 500 
                  manufacturing company achieved unprecedented results with AI transformation.
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
            </div>
          </Link>

          {/* AI Implementation Guide */}
          <Link href="/resources/ai-implementation-master-guide-2025" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center relative">
                <div className="text-8xl">📚</div>
                <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  FREE DOWNLOAD
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    Resource
                  </span>
                  <span className="text-gray-500 text-sm">200+ pages</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  AI Implementation Master Guide
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete 200+ page resource with templates, checklists, and step-by-step 
                  strategies for successful AI deployment. Free download.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 font-bold text-sm">ZT</span>
                    </div>
                    <span className="text-sm text-gray-600">Zion Tech Group</span>
                  </div>
                  <span className="text-yellow-600 font-medium group-hover:underline">
                    Download Free →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* AI Manufacturing Automation */}
          <Link href="/case-studies/ai-manufacturing-automation-2025" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center relative">
                <div className="text-8xl">🏭</div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  CASE STUDY
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                    Manufacturing
                  </span>
                  <span className="text-gray-500 text-sm">12 min read</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  AI Manufacturing Automation 2025
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  $15M cost savings, 45% efficiency improvement, 60% defect reduction. 
                  Real-world case study of AI implementation in manufacturing.
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
            </div>
          </Link>

          {/* AI Retail Transformation */}
          <Link href="/case-studies/ai-retail-transformation-2025" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center relative">
                <div className="text-8xl">🛍️</div>
                <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  CASE STUDY
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                    Retail
                  </span>
                  <span className="text-gray-500 text-sm">18 min read</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  AI Retail Transformation 2025
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  $50M revenue increase, 40% customer satisfaction improvement. 
                  How AI transformed a retail business with personalized experiences.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 font-bold text-sm">ZT</span>
                    </div>
                    <span className="text-sm text-gray-600">Zion Tech Group</span>
                  </div>
                  <span className="text-indigo-600 font-medium group-hover:underline">
                    Read Case Study →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Content Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600">Blog Articles</h3>
                <p className="text-gray-600 mb-4">
                  Expert insights, trends analysis, and strategic guidance on AI and technology.
                </p>
                <div className="text-blue-600 font-medium group-hover:underline">
                  View All Articles →
                </div>
              </div>
            </Link>

            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600">Case Studies</h3>
                <p className="text-gray-600 mb-4">
                  Real-world success stories and detailed implementation examples.
                </p>
                <div className="text-green-600 font-medium group-hover:underline">
                  View All Case Studies →
                </div>
              </div>
            </Link>

            <Link href="/resources" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600">Free Resources</h3>
                <p className="text-gray-600 mb-4">
                  Downloadable guides, templates, checklists, and implementation tools.
                </p>
                <div className="text-purple-600 font-medium group-hover:underline">
                  View All Resources →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h3>
          <p className="text-lg mb-6 opacity-90">
            Get weekly updates on new articles, case studies, and resources. 
            Join 10,000+ professionals who trust our content.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}