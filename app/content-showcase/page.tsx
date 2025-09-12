import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Tech Insights | Zion Tech Group"
        description="Explore our comprehensive collection of AI and technology content. Latest articles, case studies, resources, and implementation guides to accelerate your digital transformation."
        keywords="AI content, technology insights, case studies, implementation guides, digital transformation, business automation"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 CONTENT SHOWCASE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest AI & Tech Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of expert insights, case studies, and resources. 
            From AI implementation guides to real-world success stories, get the knowledge you need to succeed.
          </p>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-16 text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 JUST PUBLISHED - JANUARY 30, 2025</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">🔥 Fresh Content This Week</h2>
          <p className="text-xl mb-6 opacity-90">
            New articles, case studies, and resources published this week. Expert insights to accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              View All Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Download Resources
            </Link>
          </div>
        </div>

        {/* Content Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">Articles Published</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Case Studies</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600">Free Resources</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">25K+</div>
            <div className="text-gray-600">Downloads</div>
          </div>
        </div>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              View All Articles
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-voice-assistants-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <div className="text-8xl">🎤</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Technology
                    </span>
                    <span className="text-gray-500 text-sm">12 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Voice Assistants 2025: The Next Generation of Conversational AI
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover how AI voice assistants are revolutionizing customer service, healthcare, 
                    and business operations with advanced conversational capabilities.
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

            <Link href="/blog/ai-blockchain-integration-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🔗</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Blockchain & AI
                    </span>
                    <span className="text-gray-500 text-sm">14 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Blockchain Integration 2025: The Future of Decentralized Intelligence
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore how AI and blockchain are converging to create revolutionary 
                    decentralized systems with unprecedented opportunities.
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

            <Link href="/blog/ai-data-analytics-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">📊</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Data & Analytics
                    </span>
                    <span className="text-gray-500 text-sm">16 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Data Analytics 2025: Transforming Business Intelligence with Machine Learning
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover how AI-powered data analytics is revolutionizing business intelligence 
                    and decision-making processes across industries.
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
              </div>
            </Link>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <Link
              href="/case-studies"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              View All Case Studies
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-voice-assistants-healthcare-success-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏥</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Healthcare
                    </span>
                    <span className="text-gray-500 text-sm">Case Study</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Voice Assistants in Healthcare: 75% Reduction in Wait Times
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How a major healthcare provider achieved $2.3M annual savings and 90% patient 
                    satisfaction with AI-powered voice assistants.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">75%</div>
                      <div className="text-xs text-gray-600">Wait Time Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$2.3M</div>
                      <div className="text-xs text-gray-600">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">90%</div>
                      <div className="text-xs text-gray-600">Patient Satisfaction</div>
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium group-hover:underline">
                    Read Case Study →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏦</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Financial Services
                    </span>
                    <span className="text-gray-500 text-sm">Case Study</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    Financial Services AI Transformation: $50M Cost Savings
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete case study showing how AI transformation delivered $50M cost savings 
                    and 300% efficiency gains in financial services.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$50M</div>
                      <div className="text-xs text-gray-600">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">300%</div>
                      <div className="text-xs text-gray-600">Efficiency Gains</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">6M</div>
                      <div className="text-xs text-gray-600">Payback Period</div>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium group-hover:underline">
                    Read Case Study →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏭</div>
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                      Manufacturing
                    </span>
                    <span className="text-gray-500 text-sm">Case Study</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    AI Automation in Manufacturing: 40% Cost Reduction
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How AI automation transformed manufacturing operations with 40% cost reduction 
                    and 60% faster processing times.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">40%</div>
                      <div className="text-xs text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">60%</div>
                      <div className="text-xs text-gray-600">Faster Processing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">$2.3M</div>
                      <div className="text-xs text-gray-600">Annual Savings</div>
                    </div>
                  </div>
                  <span className="text-orange-600 font-medium group-hover:underline">
                    Read Case Study →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources</h2>
            <Link
              href="/resources"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              View All Resources
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-voice-assistants-implementation-guide-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <div className="text-8xl">📥</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FREE
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Implementation Guide
                    </span>
                    <span className="text-gray-500 text-sm">45 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Voice Assistants Implementation Guide 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete step-by-step guide to implementing AI voice assistants in your business. 
                    Includes technical specifications, best practices, and real-world case studies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      PDF • 2.3MB • Free Download
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-blockchain-implementation-playbook-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">📥</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FREE
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Implementation Playbook
                    </span>
                    <span className="text-gray-500 text-sm">52 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Blockchain Implementation Playbook 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete guide to implementing AI-blockchain integration in your business. 
                    Includes technical architecture, use cases, and step-by-step implementation strategies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      PDF • 3.1MB • Free Download
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">📥</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FREE
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Checklist
                    </span>
                    <span className="text-gray-500 text-sm">30 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Implementation Checklist 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Step-by-step checklist for successful AI implementation. 150+ actionable items 
                    to ensure your AI project succeeds from start to finish.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      PDF • 1.8MB • Free Download
                    </div>
                    <span className="text-green-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Trending Content */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Trending This Week</h2>
            <div className="text-sm text-gray-500">
              Most popular content
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🚀</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TRENDING
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Innovation
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Breakthrough Innovations 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Revolutionary technologies that are reshaping industries and creating 
                    unprecedented opportunities for businesses.
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

            <Link href="/blog/ai-trends-2025-predictions" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
                  <div className="text-8xl">🔮</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    HOT
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Trends
                    </span>
                    <span className="text-gray-500 text-sm">28 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Trends 2025 Predictions
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    15 game-changing technologies that will reshape business and create 
                    new opportunities for growth and innovation.
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

            <Link href="/case-studies/ai-transformation-fortune-500-success-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏆</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    SUCCESS
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Case Study
                    </span>
                    <span className="text-gray-500 text-sm">30 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    Fortune 500 AI Success Story
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How a Fortune 500 company achieved $50M savings and 300% ROI through 
                    comprehensive AI transformation in just 18 months.
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
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get expert consultation and discover how our AI and technology solutions can 
            accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Download All Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}