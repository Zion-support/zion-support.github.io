import React from 'react';
<<<<<<< HEAD
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Tech Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI articles, case studies, and resources. Stay ahead with expert insights on AI, cybersecurity, sustainability, and emerging technologies."
        keywords="AI content, tech resources, case studies, blog articles, AI guides, technology insights, expert analysis"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 CONTENT SHOWCASE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest AI & Tech Content
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of expert insights, case studies, and resources. 
            Stay ahead with the latest trends in AI, cybersecurity, sustainability, and emerging technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              📚 Browse All Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              📋 Download Resources
            </Link>
          </div>
        </div>

        {/* Featured Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-multimodal-applications-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🎯</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Technology
                    </span>
                    <span className="text-gray-500 text-sm">15 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    AI Multimodal Applications 2025
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Beyond text to vision, audio, and beyond. Complete implementation guide for 
                    building multimodal AI systems.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-cybersecurity-threats-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center relative">
                  <div className="text-8xl">🛡️</div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    CRITICAL
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                      Cybersecurity
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    AI Cybersecurity Threats 2025
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Protecting against next-gen attacks, adversarial AI, and deepfakes. 
                    Comprehensive defense strategies.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                  <div className="text-8xl">🌱</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TRENDING
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Sustainability
                    </span>
                    <span className="text-gray-500 text-sm">20 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    AI Sustainability & Green Tech
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Building eco-friendly AI systems that reduce carbon footprint while maintaining 
                    performance.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/ai-enterprise-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Enterprise AI
                  </span>
                  <span className="text-gray-500 text-sm">18 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Enterprise Transformation 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete implementation guide with 340% ROI and real case studies for enterprise AI adoption.
                </p>
              </div>
            </Link>

            <Link href="/blog/ai-startup-funding-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Startup Strategy
                  </span>
                  <span className="text-gray-500 text-sm">22 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  AI Startup Funding Guide 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  From seed to Series A with $47B market insights and pitch templates for AI startups.
                </p>
              </div>
            </Link>

            <Link href="/blog/cloud-native-architecture-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    Cloud & DevOps
                  </span>
                  <span className="text-gray-500 text-sm">15 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                  Cloud-Native Architecture 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete blueprint for building scalable, resilient applications with modern cloud patterns.
                </p>
              </div>
            </Link>

            <Link href="/blog/ai-go-to-market-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                    Growth & Marketing
                  </span>
                  <span className="text-gray-500 text-sm">12 min read</span>
                </div>
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
              </div>
            </Link>

            <Link href="/blog/ai-cost-optimization-2025" className="group">
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
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-retail-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Retail & E-commerce
                  </span>
                  <span className="text-gray-500 text-sm">12 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  AI Retail Transformation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  $50M revenue increase and 40% cost reduction through comprehensive AI transformation.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Fortune 500</span>
                  <span>•</span>
                  <span>$50M revenue</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
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
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox. Join 10,000+ AI professionals.
=======
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content Showcase: Latest AI & Technology Insights | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI and technology content. Discover the latest articles, case studies, and resources from industry experts.',
  keywords: 'AI content, technology insights, case studies, resources, AI articles, tech guides',
  openGraph: {
    title: 'Content Showcase: Latest AI & Technology Insights',
    description: 'Explore our comprehensive collection of AI and technology content. Discover the latest articles, case studies, and resources.',
    type: 'website',
  },
};

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Content Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive collection of AI and technology insights, 
              case studies, and resources from industry experts.
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

      {/* Featured Content Banner */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🚀 Fresh AI & Tech Insights
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              New this week: AI Automation Complete Guide, Advanced Cost Optimization, Healthcare AI Success Story, 
              and AI Implementation Master Guide. Expert insights to accelerate your digital transformation.
            </p>
          </div>

          {/* Featured New Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-automation-2025-complete-guide' className='group">
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🤖</div>
                <h3 className='text-lg font-semibold mb-2'>AI Automation Complete Guide</h3>
                <p className='text-sm opacity-90 mb-3'>Master AI automation with our comprehensive implementation guide</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>15 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-cost-optimization-advanced-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>⚡</div>
                <h3 className='text-lg font-semibold mb-2'>Advanced AI Cost Optimization</h3>
                <p className='text-sm opacity-90 mb-3'>Reduce AI expenses by 60% while maintaining performance</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>12 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-healthcare-diagnosis-success-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏥</div>
                <h3 className='text-lg font-semibold mb-2'>Healthcare AI Success Story</h3>
                <p className='text-sm opacity-90 mb-3'>95% accuracy in medical diagnosis with 50% cost reduction</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-implementation-master-guide-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📚</div>
                <h3 className='text-lg font-semibold mb-2'>AI Implementation Master Guide</h3>
                <p className='text-sm opacity-90 mb-3'>150+ page complete implementation guide with checklists</p>
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
              Explore Our Content Library
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources covering AI, automation, cloud computing, and business transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Articles */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Articles</h3>
              <p className="text-gray-600 mb-6">
                In-depth articles covering AI trends, implementation strategies, and industry insights.
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/blog/ai-automation-2025-complete-guide" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                      AI Automation 2025: Complete Guide
                    </span>
                    <span className="text-xs text-gray-500">New</span>
                  </div>
                </Link>
                <Link href="/blog/ai-cost-optimization-advanced-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                      Advanced AI Cost Optimization
                    </span>
                    <span className="text-xs text-gray-500">New</span>
                  </div>
                </Link>
                <Link href="/blog/ai-enterprise-integration-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                      AI Enterprise Integration 2025
                    </span>
                    <span className="text-xs text-gray-500">Popular</span>
                  </div>
                </Link>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Articles
                <span>→</span>
              </Link>
            </div>

            {/* Case Studies */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Stories</h3>
              <p className="text-gray-600 mb-6">
                Real-world case studies showcasing successful AI implementations and business transformations.
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/case-studies/ai-healthcare-diagnosis-success-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-green-600 group-hover:text-green-700">
                      Healthcare AI: 95% Accuracy
                    </span>
                    <span className="text-xs text-gray-500">New</span>
                  </div>
                </Link>
                <Link href="/case-studies/ai-automation-manufacturing-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-green-600 group-hover:text-green-700">
                      Manufacturing AI Success
                    </span>
                    <span className="text-xs text-gray-500">Popular</span>
                  </div>
                </Link>
                <Link href="/case-studies/fortune-500-ai-transformation" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-green-600 group-hover:text-green-700">
                      Fortune 500 AI Transformation
                    </span>
                    <span className="text-xs text-gray-500">Featured</span>
                  </div>
                </Link>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                View All Case Studies
                <span>→</span>
              </Link>
            </div>

            {/* Resources */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Free Resources</h3>
              <p className="text-gray-600 mb-6">
                Downloadable guides, checklists, templates, and tools to accelerate your AI journey.
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/resources/ai-implementation-master-guide-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-purple-600 group-hover:text-purple-700">
                      AI Implementation Master Guide
                    </span>
                    <span className="text-xs text-gray-500">New</span>
                  </div>
                </Link>
                <Link href="/resources/ai-automation-roi-calculator" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-purple-600 group-hover:text-purple-700">
                      AI Automation ROI Calculator
                    </span>
                    <span className="text-xs text-gray-500">Popular</span>
                  </div>
                </Link>
                <Link href="/resources/ai-security-hardening-checklist" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-purple-600 group-hover:text-purple-700">
                      AI Security Hardening Checklist
                    </span>
                    <span className="text-xs text-gray-500">Essential</span>
                  </div>
                </Link>
              </div>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
              >
                View All Resources
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trending Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the most popular topics and discussions in AI and technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/blog?topic=ai-automation" className="group">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Automation
                </h3>
                <p className="text-gray-600 text-sm">15 articles</p>
              </div>
            </Link>

            <Link href="/blog?topic=cost-optimization" className="group">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Cost Optimization
                </h3>
                <p className="text-gray-600 text-sm">8 articles</p>
              </div>
            </Link>

            <Link href="/blog?topic=healthcare-ai" className="group">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">🏥</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Healthcare AI
                </h3>
                <p className="text-gray-600 text-sm">12 articles</p>
              </div>
            </Link>

            <Link href="/blog?topic=enterprise-ai" className="group">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Enterprise AI
                </h3>
                <p className="text-gray-600 text-sm">20 articles</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest Content
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get weekly updates on new articles, case studies, and resources delivered 
            straight to your inbox. Join 10,000+ professionals.
>>>>>>> origin/9llxiv-codex/implement-analytics-and-error-tracking
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
<<<<<<< HEAD
        </section>
      </div>
=======
        </div>
      </section>
>>>>>>> origin/9llxiv-codex/implement-analytics-and-error-tracking
    </div>
  );
}