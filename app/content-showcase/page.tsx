import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Tech Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI and technology resources, case studies, and implementation guides. Free downloads, expert insights, and proven strategies."
        keywords="AI resources, technology guides, case studies, implementation guides, free downloads, expert content"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="mr-2">📚</span>
            CONTENT SHOWCASE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest AI & Tech Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of expert insights, implementation guides, case studies, 
            and free resources to accelerate your AI and technology transformation journey.
          </p>
        </header>

        {/* Featured Content Banner */}
        <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🔥 JUST PUBLISHED - JANUARY 2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 Fresh Content Just Dropped
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              New this week: AI Voice Assistants, Manufacturing Robotics, Healthcare AI Success Stories, 
              and comprehensive implementation guides. Expert insights to accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                📋 Download Free Resources
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Blog Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Blog Articles</h2>
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
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🎤</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Technology
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Voice Assistants 2025: The Future of Conversational AI
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore how AI voice assistants are revolutionizing business operations, customer service, 
                    and user experiences in 2025. From multimodal capabilities to enterprise integration strategies.
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

            <Link href="/blog/ai-robotics-manufacturing-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-8xl">🤖</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Manufacturing & AI
                    </span>
                    <span className="text-gray-500 text-sm">22 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Robotics in Manufacturing 2025: Revolutionizing Production Lines
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore how AI-powered robotics is transforming manufacturing operations, from collaborative 
                    robots to predictive maintenance and smart factory implementations.
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
                    AI Multimodal Applications 2025: Beyond Text to Vision, Audio, and Beyond
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore the future of AI with multimodal applications that combine text, vision, 
                    audio, and more. Learn implementation strategies and best practices for 2025.
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

        {/* Featured Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Case Studies</h2>
            <Link
              href="/case-studies"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              View All Case Studies
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-healthcare-diagnosis-success-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏥</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Healthcare & AI
                    </span>
                    <span className="text-gray-500 text-sm">Case Study</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Healthcare Diagnosis Success: 95% Accuracy Achieved
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How a major healthcare provider transformed patient care with AI-powered diagnostic systems, 
                    achieving unprecedented accuracy and efficiency in medical diagnosis.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-sm text-gray-600">Diagnostic Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">60%</div>
                      <div className="text-sm text-gray-600">Faster Diagnosis</div>
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

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏦</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    POPULAR
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Financial Services
                    </span>
                    <span className="text-gray-500 text-sm">Case Study</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Financial Services AI Transformation: $50M Cost Savings
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete transformation of financial services operations with AI, achieving 
                    $50M cost savings and 300% efficiency gains through intelligent automation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">$50M</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">300%</div>
                      <div className="text-sm text-gray-600">Efficiency Gains</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/case-studies/ai-retail-transformation-success-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-8xl">🛒</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    SUCCESS
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Retail & E-commerce
                    </span>
                    <span className="text-gray-500 text-sm">Case Study</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 25, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    Retail AI Transformation: 300% Revenue Growth
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How a major retail chain achieved 300% revenue growth and 60% cost reduction 
                    through comprehensive AI implementation and automation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">300%</div>
                      <div className="text-sm text-gray-600">Revenue Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">60%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
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
        </section>

        {/* Free Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources & Tools</h2>
            <Link
              href="/resources"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              View All Resources
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/resources/ai-voice-implementation-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Voice Implementation Guide</h3>
                <p className="text-gray-600 text-sm mb-3">Complete 150-page guide to implementing AI voice assistants</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>NEW</span>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Implementation Checklist</h3>
                <p className="text-gray-600 text-sm mb-3">Step-by-step checklist for successful AI implementation</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>Popular</span>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-roi-calculator-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI ROI Calculator</h3>
                <p className="text-gray-600 text-sm mb-3">Calculate potential return on investment for AI projects</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Free Tool</span>
                  <span className="mx-2">•</span>
                  <span>Interactive</span>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-security-hardening-checklist" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Security Checklist</h3>
                <p className="text-gray-600 text-sm mb-3">Essential security measures for AI systems</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>Essential</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Content Impact by the Numbers</h2>
            <p className="text-xl opacity-90">
              Our content has helped thousands of professionals and organizations succeed with AI and technology.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-gray-300">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">100K+</div>
              <div className="text-gray-300">Downloads</div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Latest Content
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get weekly updates on new articles, case studies, and resources delivered straight to your inbox.
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
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </section>
      </div>
    </div>
  );
}