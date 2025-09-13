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
            <span className="text-sm font-medium">🚀 MEGA CONTENT DROP - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">🔥 50+ New Articles, Case Studies & Resources</h2>
          <p className="text-xl mb-6 opacity-90">
            We've just published a massive collection of AI and business transformation content. From breakthrough 
            innovations to implementation guides, everything you need to succeed in 2025.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm opacity-90">New Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-90">Case Studies</div>
            </div>
            <div>
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm opacity-90">Free Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm opacity-90">Total Pages</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              📚 Read Latest Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              📋 Download Free Resources
            </Link>
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
            <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <div className="text-8xl">🧠</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Breakthrough Innovations
                    </span>
                    <span className="text-gray-500 text-sm">28 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Breakthrough Innovations 2025: The Technologies Reshaping Our World
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    From quantum-enhanced AI to brain-computer interfaces, discover the groundbreaking innovations 
                    that are transforming industries and creating unprecedented opportunities.
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

            <Link href="/blog/ai-2025-year-ahead-predictions" className="group">
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
                      Predictions & Trends
                    </span>
                    <span className="text-gray-500 text-sm">32 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI 2025 Year Ahead Predictions: 15 Trends That Will Shape the Future
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Get ahead of the curve with our comprehensive AI predictions for 2025. From enterprise adoption 
                    to consumer applications, discover the trends that will define the year ahead.
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

            <Link href="/blog/ai-2025-industry-disruption" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏭</div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                      Industry Disruption
                    </span>
                    <span className="text-gray-500 text-sm">25 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    AI Industry Disruption 2025: How AI is Reshaping Every Sector
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    From healthcare to finance, manufacturing to retail, AI is fundamentally transforming every industry. 
                    Discover the real impact data and transformation stories.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-red-600 font-medium group-hover:underline">
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
            <Link href="/case-studies/ai-transformation-fortune-500-success-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏆</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FEATURED
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Fortune 500
                    </span>
                    <span className="text-gray-500 text-sm">Case Study</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    Fortune 500 AI Transformation: $50M Savings & 300% ROI
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How a Fortune 500 manufacturing company achieved unprecedented results through comprehensive AI 
                    transformation, delivering $50M in cost savings and 300% ROI in just 18 months.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$50M</div>
                      <div className="text-xs text-gray-600">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">300%</div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">18M</div>
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

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏦</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Financial Services
                    </span>
                    <span className="text-gray-500 text-sm">Case Study</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Financial Services AI Transformation: $2.4B Cost Savings
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete case study showing how AI transformation delivered $2.4B cost savings 
                    and 95% fraud detection accuracy in financial services.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">$2.4B</div>
                      <div className="text-xs text-gray-600">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-xs text-gray-600">Fraud Detection</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">6M</div>
                      <div className="text-xs text-gray-600">Payback Period</div>
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium group-hover:underline">
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
            <Link href="/resources/ai-implementation-master-guide-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <div className="text-8xl">📚</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FEATURED
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Master Guide
                    </span>
                    <span className="text-gray-500 text-sm">150+ pages</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Implementation Master Guide 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The most comprehensive AI implementation resource available. 150+ pages of proven strategies, 
                    templates, checklists, and step-by-step guides for successful AI deployment.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      PDF • 15.2MB • Free Download
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">📋</div>
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

            <Link href="/resources/ai-roi-calculator-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-8xl">💰</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FREE
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      ROI Calculator
                    </span>
                    <span className="text-gray-500 text-sm">Interactive Tool</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI ROI Calculator 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Calculate potential return on AI investments with our comprehensive ROI calculator. 
                    Get accurate projections and business case templates.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Excel • 2.1MB • Free Download
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Download →
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