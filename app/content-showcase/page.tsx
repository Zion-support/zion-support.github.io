import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <>
      <SEO
        title="Content Showcase - Latest AI & Tech Insights | Zion Tech Group"
        description="Explore our latest AI and technology content including blog articles, case studies, resources, and tools. Stay ahead with expert insights and practical guides."
        keywords="AI content, technology insights, blog articles, case studies, resources, AI guides, tech tutorials"
        url="/content-showcase"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🚀 FRESH CONTENT</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Content Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover our latest AI and technology insights, case studies, and resources. 
                Expert content designed to accelerate your digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Content Banner */}
        <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
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
                New this week: AI 2025 predictions, multimodal revolution, cybersecurity threats, 
                and sustainability solutions. Expert insights to accelerate your growth.
              </p>
            </div>

            {/* Featured Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/ai-2025-year-ahead-predictions" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                  <h3 className="text-lg font-semibold mb-2">AI 2025: The Year Ahead</h3>
                  <p className="text-sm opacity-90 mb-3">15 predictions that will shape technology in 2025</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-multimodal-revolution-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎭</div>
                  <h3 className="text-lg font-semibold mb-2">AI Multimodal Revolution</h3>
                  <p className="text-sm opacity-90 mb-3">Beyond text to vision, audio, and beyond</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>15 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-cybersecurity-threats-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                  <h3 className="text-lg font-semibold mb-2">AI Cybersecurity Threats</h3>
                  <p className="text-sm opacity-90 mb-3">Defending against next-gen AI-powered attacks</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span>Critical</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Articles Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Latest Blog Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Stay ahead with our latest insights on AI, technology trends, and business strategies. 
                Fresh content published weekly by our expert team.
              </p>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                View All Articles
                <span>→</span>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/blog/ai-2025-year-ahead-predictions" className="group">
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
                        AI Predictions
                      </span>
                      <span className="text-gray-500 text-sm">18 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      AI 2025: The Year Ahead - 15 Predictions That Will Shape Technology
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Explore our expert predictions for AI in 2025, from multimodal breakthroughs 
                      to enterprise adoption patterns. Get ahead of the trends that will define the next year.
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

              <Link href="/blog/ai-multimodal-revolution-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative">
                    <div className="text-8xl">🎭</div>
                    <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">
                        Multimodal AI
                      </span>
                      <span className="text-gray-500 text-sm">15 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                      AI Multimodal Revolution 2025: Beyond Text to Vision, Audio, and Beyond
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Discover how multimodal AI is revolutionizing industries in 2025. From vision-language 
                      models to audio processing, explore the future of AI that understands everything.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                          <span className="text-pink-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-pink-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              <Link href="/blog/ai-cybersecurity-threats-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center relative">
                    <div className="text-8xl">🛡️</div>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      CRITICAL
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                        Cybersecurity
                      </span>
                      <span className="text-gray-500 text-sm">18 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                      AI Cybersecurity Threats 2025: Defending Against Next-Gen AI-Powered Attacks
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Learn about the emerging AI cybersecurity threats in 2025 and how to protect your 
                      organization. From adversarial AI to deepfake attacks, stay ahead of the security curve.
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
                </article>
              </Link>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Free Resources & Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Download our comprehensive guides, checklists, and tools to accelerate your 
                AI implementation and digital transformation journey.
              </p>
              <Link 
                href="/resources" 
                className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
              >
                View All Resources
                <span>📋</span>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/resources/ai-multimodal-implementation-guide-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Multimodal Implementation Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete guide to implementing multimodal AI systems in 2025. Step-by-step 
                    instructions, best practices, and real-world examples.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>150+ pages</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                      Free Download
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-transformation-readiness-assessment-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Transformation Readiness Assessment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Evaluate your organization's readiness for AI transformation with our 
                    comprehensive assessment tool and framework.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Assessment Tool</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      Free Download
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-security-hardening-checklist" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    AI Security Hardening Checklist
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Essential security measures for AI systems. Comprehensive checklist to 
                    protect your AI infrastructure from emerging threats.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Checklist</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                      Free Download
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Success Stories & Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Learn from real-world implementations and discover how organizations are 
                achieving remarkable results with AI and technology solutions.
              </p>
              <Link 
                href="/case-studies" 
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
              >
                View All Case Studies
                <span>→</span>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🏭</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Automation in Manufacturing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Fortune 500 manufacturing company achieves 40% cost reduction and 60% 
                    faster processing times through AI automation implementation.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Fortune 500</span>
                    <span className="text-green-600 font-medium">$2.3M savings</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🏦</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Financial Services AI Transformation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Major financial institution implements AI across operations, achieving 
                    $50M cost savings and 300% efficiency gains.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Financial Services</span>
                    <span className="text-blue-600 font-medium">$50M savings</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-retail-transformation-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🛒</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Retail Transformation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Retail giant achieves 300% revenue growth in 18 months through 
                    comprehensive AI implementation and optimization.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Retail</span>
                    <span className="text-purple-600 font-medium">300% growth</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Stay Updated with Latest Content
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
        </section>
      </div>
    </>
  );
}