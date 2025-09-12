import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Business Insights 2025"
        description="Discover our latest expert insights, case studies, and resources. From AI automation to startup growth strategies, get the knowledge you need to succeed in 2025."
        keywords="AI insights, business resources, case studies, AI automation, startup growth, technology trends, expert content"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ FRESH CONTENT</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🚀 Fresh Content Just Dropped
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest expert insights, case studies, and resources. From AI productivity automation 
            to governance frameworks, get the knowledge you need to succeed in 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              📚 Read Latest Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              📋 Download Free Resources
            </Link>
          </div>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🔥 HOT THIS WEEK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fresh AI & Business Insights for 2025
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              New this week: AI Productivity Automation, Governance Frameworks, Customer Support Automation, 
              and comprehensive implementation guides. Expert insights to accelerate your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-productivity-automation-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-lg font-semibold mb-2">AI Productivity Automation 2025</h3>
                <p className="text-sm opacity-90 mb-3">Complete implementation guide with 40% efficiency gains</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>18 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/ai-governance-in-practice-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                <h3 className="text-lg font-semibold mb-2">AI Governance in Practice 2025</h3>
                <p className="text-sm opacity-90 mb-3">Controls that reduce risk without blocking delivery</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>12 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-customer-support-automation-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎧</div>
                <h3 className="text-lg font-semibold mb-2">AI Customer Support Automation</h3>
                <p className="text-sm opacity-90 mb-3">80% faster response times, 60% cost reduction</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>15 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-governance-blueprint-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-lg font-semibold mb-2">AI Governance Blueprint 2025</h3>
                <p className="text-sm opacity-90 mb-3">150+ pages with frameworks and templates</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-productivity-automation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-8xl">⚡</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Automation
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Productivity Automation 2025: Complete Implementation Guide
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Transform your business productivity with AI automation. Learn proven strategies, 
                    tools, and implementation frameworks that deliver 40% efficiency gains and 60% cost reduction.
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

            <Link href="/blog/ai-governance-in-practice-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-8xl">🛡️</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Governance
                    </span>
                    <span className="text-gray-500 text-sm">12 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Governance in Practice 2025: Controls That Reduce Risk Without Blocking Delivery
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Learn how to implement effective AI governance frameworks that balance innovation with risk management. 
                    Practical strategies for 2025 that enable responsible AI deployment.
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

            <Link href="/blog/ai-customer-support-automation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                  <div className="text-8xl">🎧</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Customer Support
                    </span>
                    <span className="text-gray-500 text-sm">15 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Customer Support Automation 2025: 80% Faster Response Times
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Transform your customer support with AI automation. Learn how to achieve 80% faster response times, 
                    60% cost reduction, and 95% customer satisfaction.
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

        {/* Free Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources & Tools</h2>
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Resources →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-governance-blueprint-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Governance Blueprint 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete governance framework with templates, checklists, and implementation guides.
                </p>
<<<<<<< HEAD
=======
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 FRESH CONTENT</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest AI insights, case studies, and resources. From cutting-edge 
            research to real-world success stories, find everything you need to accelerate 
            your AI transformation in 2025.
          </p>
        </header>

        {/* Featured Content Banner */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
                <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fresh AI & Tech Content Just Dropped
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
                New this week: AI Multimodal Applications, Sustainability Solutions, 
                Cybersecurity Threats, and Retail Transformation Case Study.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog/ai-multimodal-applications-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎭</div>
                  <h3 className="text-lg font-semibold mb-2">AI Multimodal Applications</h3>
                  <p className="text-sm opacity-90 mb-3">Beyond text to vision, audio, and beyond</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>15 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                  <h3 className="text-lg font-semibold mb-2">AI for Sustainability</h3>
                  <p className="text-sm opacity-90 mb-3">Green tech solutions driving impact</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>12 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-cybersecurity-threats-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                  <h3 className="text-lg font-semibold mb-2">AI Cybersecurity Threats</h3>
                  <p className="text-sm opacity-90 mb-3">Defending against next-gen attacks</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-retail-transformation-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛒</div>
                  <h3 className="text-lg font-semibold mb-2">Retail Transformation</h3>
                  <p className="text-sm opacity-90 mb-3">300% revenue growth case study</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Articles */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Articles</h3>
              <p className="text-gray-600 mb-6">
                Expert insights on AI trends, implementation strategies, and emerging technologies. 
                Fresh content published weekly.
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/blog/ai-multimodal-applications-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🎭</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Multimodal Applications 2025</h4>
                      <p className="text-sm text-gray-600">15 min read • New</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/ai-sustainability-green-tech-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🌱</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI for Sustainability 2025</h4>
                      <p className="text-sm text-gray-600">12 min read • New</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/ai-cybersecurity-threats-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🛡️</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Cybersecurity Threats 2025</h4>
                      <p className="text-sm text-gray-600">18 min read • New</p>
                    </div>
                  </div>
                </Link>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                View All Articles
                <span>→</span>
              </Link>
            </div>

            {/* Case Studies */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Stories</h3>
              <p className="text-gray-600 mb-6">
                Real-world case studies showcasing how organizations achieved breakthrough 
                results with AI implementation.
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/case-studies/ai-retail-transformation-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🛒</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Retail Transformation</h4>
                      <p className="text-sm text-gray-600">300% revenue growth • New</p>
                    </div>
                  </div>
                </Link>
                <Link href="/case-studies/ai-automation-manufacturing-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🏭</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Manufacturing Success</h4>
                      <p className="text-sm text-gray-600">40% cost reduction</p>
                    </div>
                  </div>
                </Link>
                <Link href="/case-studies/ai-financial-services-transformation-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🏦</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Financial Services AI</h4>
                      <p className="text-sm text-gray-600">$50M cost savings</p>
                    </div>
                  </div>
                </Link>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                View All Case Studies
                <span>→</span>
              </Link>
            </div>

            {/* Resources */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Free Resources</h3>
              <p className="text-gray-600 mb-6">
                Downloadable tools, checklists, and guides to accelerate your AI 
                transformation journey.
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/resources/ai-transformation-readiness-assessment-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">📊</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Readiness Assessment</h4>
                      <p className="text-sm text-gray-600">Free tool • New</p>
                    </div>
                  </div>
                </Link>
                <Link href="/resources/ai-implementation-playbook-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">📖</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Implementation Playbook</h4>
                      <p className="text-sm text-gray-600">Step-by-step guide</p>
                    </div>
                  </div>
                </Link>
                <Link href="/resources/ai-implementation-checklist-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">✅</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Implementation Checklist</h4>
                      <p className="text-sm text-gray-600">150+ actionable items</p>
                    </div>
                  </div>
                </Link>
              </div>
              <Link href="/resources" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                View All Resources
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Trending Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trending This Week</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/ai-enterprise-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">🏢</div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-purple-700 mb-1">AI & Technology</div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">AI Enterprise Transformation 2025</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Complete implementation guide with 340% ROI and real case studies
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>18 min read</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">🔥 Trending</span>
                </div>
>>>>>>> cursor/create-and-deploy-new-content-6fbd
              </div>
            </Link>

            <Link href="/blog/ai-startup-funding-guide-2025" className="group">
<<<<<<< HEAD
=======
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>150+ pages</span>
                  <span className="text-blue-600 font-medium">Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
>>>>>>> cursor/create-and-deploy-new-content-9dc3
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Implementation Checklist 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  150+ actionable items for successful AI implementation across your organization.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Checklist</span>
                  <span className="text-blue-600 font-medium">Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-automation-roi-calculator" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Automation ROI Calculator
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Calculate potential return on investment for your AI automation projects.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Interactive Tool</span>
                  <span className="text-blue-600 font-medium">Free Access</span>
                </div>
<<<<<<< HEAD
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 mb-2">
                  AI Go-To-Market 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  From zero to traction playbook for AI products with proven positioning and pricing strategies.
                </p>
              </div>
            </Link>

            <Link href="/blog/edge-ai-privacy-by-design-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
                    Edge Computing
                  </span>
                  <span className="text-gray-500 text-sm">8 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 mb-2">
                  Edge AI: Privacy by Design
                </h3>
                <p className="text-gray-600 text-sm">
                  On-device intelligence for instant, compliant customer experiences with privacy-first approach.
                </p>
=======
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">💰</div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-green-700 mb-1">Startup Strategy</div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">AI Startup Funding Guide 2025</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  From seed to Series A with $47B market insights and pitch templates
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>22 min read</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">📈 Rising</span>
                </div>
>>>>>>> cursor/create-and-deploy-new-content-6fbd
              </div>
            </Link>

            <Link href="/blog/ai-cost-optimization-2025" className="group">
<<<<<<< HEAD
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    AI Engineering
                  </span>
                  <span className="text-gray-500 text-sm">9 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-600 mb-2">
                  AI Cost Optimization 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  Ship faster, spend less with practical cost optimization strategies for AI systems.
                </p>
=======
>>>>>>> cursor/create-and-deploy-new-content-9dc3
              </div>
            </Link>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories & Case Studies</h2>
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Case Studies →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🏭</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                      AI Automation in Manufacturing
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Fortune 500 manufacturing company achieves 40% cost reduction and 60% faster processing times 
                      with AI automation implementation.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Fortune 500</span>
                      <span>•</span>
                      <span>$2.3M savings</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
<<<<<<< HEAD
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Financial Services
                  </span>
                  <span className="text-gray-500 text-sm">15 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Financial Services AI Success
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  $50M cost savings and 300% efficiency gains through AI-powered automation.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Major Bank</span>
                  <span>•</span>
                  <span>$50M savings</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    Manufacturing
                  </span>
                  <span className="text-gray-500 text-sm">10 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                  AI Manufacturing Success
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  40% cost reduction and 60% faster processing through intelligent automation.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Fortune 500</span>
                  <span>•</span>
                  <span>$2.3M savings</span>
=======
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">⚡</div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-orange-700 mb-1">AI Engineering</div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">AI Cost Optimization 2025</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Ship faster, spend less with practical cost optimization strategies
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>9 min read</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">💡 Insight</span>
>>>>>>> cursor/create-and-deploy-new-content-6fbd
=======
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🏦</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                      Financial Services AI Transformation
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Major financial institution achieves $50M cost savings and 300% efficiency gains 
                      through comprehensive AI transformation.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Enterprise</span>
                      <span>•</span>
                      <span>$50M savings</span>
                    </div>
                  </div>
>>>>>>> cursor/create-and-deploy-new-content-9dc3
                </div>
              </div>
            </Link>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources</h2>
            <Link
              href="/resources"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/resources/sustainable-ai-playbook-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  Sustainable AI Playbook
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete guide to building eco-friendly AI systems with actionable strategies.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>150 pages</span>
                  <span className="mx-2">•</span>
                  <span>Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Implementation Checklist
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Step-by-step checklist for successful AI implementation with best practices.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>45 min read</span>
                  <span className="mx-2">•</span>
                  <span>Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-security-hardening-checklist" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 mb-2">
                  AI Security Hardening
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Essential security measures and hardening checklist for AI systems.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>30 min read</span>
                  <span className="mx-2">•</span>
                  <span>Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-automation-roi-calculator" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  AI ROI Calculator
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Calculate potential return on investment for AI automation projects.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Interactive Tool</span>
                  <span className="mx-2">•</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
=======
        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Latest Content</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
>>>>>>> cursor/create-and-deploy-new-content-6fbd
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox. Join 10,000+ AI professionals.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
<<<<<<< HEAD
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
=======
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
>>>>>>> cursor/create-and-deploy-new-content-6fbd
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
=======
        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              📧 Stay Ahead with AI Insights
            </h2>
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
>>>>>>> cursor/create-and-deploy-new-content-9dc3
        </section>
      </div>
    </div>
  );
}