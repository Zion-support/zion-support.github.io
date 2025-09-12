import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <>
      <SEO
        title="Content Showcase - Latest AI & Tech Insights - Zion Tech Group"
        description="Explore our comprehensive collection of AI insights, case studies, implementation guides, and resources. Stay ahead with the latest technology trends and expert analysis."
        keywords="AI insights, technology trends, case studies, implementation guides, resources, content showcase, 2025"
        url="/content-showcase"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-6">
                <span className="text-sm font-medium">✨ COMPREHENSIVE CONTENT LIBRARY</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Content Showcase
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive collection of AI insights, case studies, implementation guides, 
                and resources. Expert analysis and practical guidance to accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  📚 Browse All Articles
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
                >
                  📋 Download Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🔥 Featured This Week
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most popular and impactful content, handpicked by our experts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quantum AI Computing */}
              <Link href="/blog/ai-2025-quantum-computing-breakthrough" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                    <div className="text-8xl">⚛️</div>
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      FEATURED
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                        AI & Technology
                      </span>
                      <span className="text-gray-500 text-sm">25 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      AI 2025: Quantum Computing Breakthrough
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Discover how quantum computing is revolutionizing AI in 2025. Learn about quantum AI applications, 
                      implementation strategies, and real-world case studies.
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

              {/* Neural Interface Revolution */}
              <Link href="/blog/ai-2025-neural-interface-revolution" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center relative">
                    <div className="text-8xl">🧠</div>
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                        Neural Interfaces
                      </span>
                      <span className="text-gray-500 text-sm">22 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      AI 2025: Neural Interface Revolution
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Explore the neural interface revolution transforming human-AI interaction. Learn about 
                      brain-computer integration and future applications.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-indigo-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-indigo-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              {/* AI Sustainability */}
              <Link href="/blog/ai-2025-sustainability-green-tech" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                    <div className="text-8xl">🌱</div>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      TRENDING
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Sustainability
                      </span>
                      <span className="text-gray-500 text-sm">20 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      AI 2025: Sustainability & Green Tech
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Discover how AI is driving sustainability initiatives and reducing carbon footprints. 
                      Learn about smart energy management and climate solutions.
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
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                💼 Success Stories & Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real-world implementations and measurable results from our client projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Manufacturing Success */}
              <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="group">
                <article className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-blue-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        $200M Manufacturing Success
                      </h3>
                      <p className="text-blue-600 font-medium">Fortune 500 Manufacturing</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    How a Fortune 500 manufacturing company achieved $200M in annual savings through 
                    AI-powered autonomous systems and intelligent automation.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">40%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">60%</div>
                      <div className="text-sm text-gray-600">Efficiency Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">$200M</div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 font-medium group-hover:underline">
                    Read Full Case Study →
                  </div>
                </article>
              </Link>

              {/* Financial Services Success */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Financial Services AI Transformation
                    </h3>
                    <p className="text-green-600 font-medium">Major Bank</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Complete digital transformation of customer service operations using AI automation, 
                  resulting in significant cost savings and improved customer satisfaction.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50M</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">300%</div>
                    <div className="text-sm text-gray-600">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">95%</div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </div>
                </div>
                <div className="text-gray-500 text-sm">
                  Case study coming soon
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                📚 Free Resources & Guides
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Download our comprehensive guides, templates, and tools to accelerate your AI implementation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Implementation Master Guide */}
              <Link href="/resources/ai-2025-implementation-master-guide" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center relative">
                    <div className="text-6xl">📖</div>
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      FREE
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      AI Implementation Master Guide 2025
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      200+ page comprehensive guide with frameworks, templates, and step-by-step strategies 
                      for successful AI adoption.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">200+ pages</span>
                        <span className="mx-2">•</span>
                        <span>PDF + Templates</span>
                      </div>
                      <span className="text-indigo-600 font-medium group-hover:underline">
                        Download →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              {/* AI Cybersecurity Checklist */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center relative">
                  <div className="text-6xl">🛡️</div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FREE
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    AI Cybersecurity Checklist 2025
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    150+ security items for secure AI implementation. Essential checklist for 
                    protecting your AI systems and data.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">150+ items</span>
                      <span className="mx-2">•</span>
                      <span>Checklist</span>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>

              {/* AI ROI Calculator */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                  <div className="text-6xl">💰</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TOOL
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    AI ROI Calculator
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Calculate potential return on AI investments with our comprehensive ROI calculator. 
                    Includes templates and examples.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Excel Tool</span>
                      <span className="mx-2">•</span>
                      <span>Interactive</span>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Latest Content
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get notified when we publish new articles, case studies, and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Subscribe to Updates
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}