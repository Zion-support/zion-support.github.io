import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Zion Tech Group — AI Enterprise Transformation & IT Services | 300% ROI Guaranteed',
  description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains. Expert AI consulting, autonomous systems, and digital transformation services.',
  keywords: 'AI enterprise transformation, AI consulting, autonomous AI systems, enterprise AI services, digital transformation, AI implementation, AI ROI calculator, manufacturing AI, AI automation, AI strategy',
  openGraph: {
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    type: 'website',
    url: 'https://ziontechgroup.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Enterprise Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                {' '}AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Expert Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">$2M+</div>
                <div className="text-gray-600">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW CONTENT BANNER - SEPTEMBER 30, 2025 */}
        <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl animate-bounce">🚀</span>
              <h2 className="text-4xl font-bold">JUST PUBLISHED: 3 NEW BREAKTHROUGH ARTICLES!</h2>
              <span className="text-4xl animate-bounce">✨</span>
            </div>
            <p className="text-center text-2xl opacity-90 mb-4">
              AI Agent Mesh • Cost Optimization • Security Red Teaming
            </p>
            <p className="text-center text-lg opacity-80">
              Essential guides for building scalable, cost-efficient, and secure AI systems in 2025
            </p>
          </div>
        </section>

        {/* FEATURED NEW ARTICLES - SEPTEMBER 30, 2025 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              🔥 Latest Breakthrough Articles
            </h2>
            <p className="text-center text-gray-600 mb-12 text-xl">
              Published September 30, 2025 • Essential reading for enterprise leaders
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              
              {/* AI Agent Mesh Orchestration */}
              <Link href="/blog/ai-agent-mesh-orchestration-2025" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-2 border-purple-200">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                        🚀 NEW TODAY
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      AI Agent Mesh Orchestration
                    </h3>
                    <p className="text-base opacity-90">
                      Scale to 1000+ agents with 99.99% uptime
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Build resilient AI agent meshes with service-mesh patterns. Deploy 1000+ agents 
                      across multi-cloud with zero-trust security and elastic scaling.
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">99.99%</div>
                        <div className="text-xs text-gray-600">Uptime</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-pink-600">1000+</div>
                        <div className="text-xs text-gray-600">Agents</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">45%</div>
                        <div className="text-xs text-gray-600">Cost ↓</div>
                      </div>
                    </div>
                    <div className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors">
                      Read Full Article →
                    </div>
                  </div>
                </div>
              </Link>

              {/* AI Cost Optimization */}
              <Link href="/blog/ai-cost-optimization-2025" className="group">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-2 border-green-200">
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-yellow-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                        💰 NEW TODAY
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Cut LLM Costs by 80%
                    </h3>
                    <p className="text-base opacity-90">
                      Proven strategies for AI cost optimization
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Reduce AI spending by 80% through semantic caching, intelligent routing, and 
                      prompt optimization—without sacrificing quality or performance.
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">80%</div>
                        <div className="text-xs text-gray-600">Cost ↓</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-teal-600">$12M+</div>
                        <div className="text-xs text-gray-600">Saved</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">8 wks</div>
                        <div className="text-xs text-gray-600">Deploy</div>
                      </div>
                    </div>
                    <div className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
                      Read Full Article →
                    </div>
                  </div>
                </div>
              </Link>

              {/* AI Security Red Teaming */}
              <Link href="/blog/ai-security-red-teaming-2025" className="group">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-2 border-red-200">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-yellow-400 text-red-900 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                        🛡️ NEW TODAY
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      AI Security Red Teaming
                    </h3>
                    <p className="text-base opacity-90">
                      Defend against prompt injection & attacks
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Proactive defense against prompt injection, jailbreaks, and data leakage. 
                      Build defense-in-depth with systematic red teaming methodology.
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-600">99.7%</div>
                        <div className="text-xs text-gray-600">Prevent</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">0</div>
                        <div className="text-xs text-gray-600">Breaches</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">6 wks</div>
                        <div className="text-xs text-gray-600">Harden</div>
                      </div>
                    </div>
                    <div className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                      Read Full Article →
                    </div>
                  </div>
                </div>
              </Link>

            </div>

            {/* CTA for all articles */}
            <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Don't Miss These Game-Changing Insights</h3>
              <p className="text-lg opacity-90 mb-6">
                Essential reading for CTOs, CIOs, and technology leaders planning their 2025-2026 AI strategy
              </p>
              <Link 
                href="/blog" 
                className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                View All Articles & Insights →
              </Link>
            </div>
          </div>
        </section>

        {/* New Content Advertisement Banner */}
        <section className="py-16 bg-gradient-to-r from-red-50 via-pink-50 to-purple-50 border-t-2 border-b-2 border-red-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                NEW CONTENT PUBLISHED
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                🎯 Revolutionary AI Breakthroughs Now Live!
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the AI innovations that are transforming Fortune 500 companies and delivering unprecedented results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <Link href="/blog/ai-2026-revolutionary-breakthrough" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-red-200 hover:border-red-400 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-3">
                    AI 2026 Revolutionary Breakthrough
                  </h3>
                  <p className="text-gray-600 mb-4">
                    From autonomous AI systems to quantum-enhanced computing - discover how these innovations are achieving 300% ROI
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Published Jan 25, 2026</div>
                    <div className="text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                      Read Full Article →
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-2026-mega-transformation-success-story" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-green-200 hover:border-green-400 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">SUCCESS STORY</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-3">
                    $100M Success Story: Fortune 500 Mega Breakthrough
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How a Fortune 500 manufacturing giant achieved 95% efficiency gains and $100M ROI through AI transformation
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Published Jan 25, 2026</div>
                    <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                      Read Case Study →
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/healthcare-ai-transformation-2026" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-blue-200 hover:border-blue-400 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">HEALTHCARE</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    Healthcare AI: 80% Efficiency & $50M Savings
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Major healthcare provider achieves 80% efficiency gains and $50M savings through comprehensive AI transformation
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Published Jan 25, 2026</div>
                    <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Read Case Study →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg">
                <span className="text-sm text-gray-600">Don't miss out on these insights:</span>
                <a
                  href="tel:+13024640950"
                  className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Latest AI Automation Content */}
        <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                LATEST AI AUTOMATION INSIGHTS
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                🤖 Enterprise Automation Revolution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how AI automation is transforming enterprise operations with 90% process automation and 200% efficiency gains
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Link href="/blog/ai-enterprise-automation-2026" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-indigo-200 hover:border-indigo-400 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <div>
                      <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold">AUTOMATION</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-3">
                    AI Enterprise Automation 2026
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete business process transformation with intelligent RPA, autonomous document processing, and self-healing workflows
                  </p>
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-indigo-600">90%</div>
                      <div className="text-xs text-gray-600">Automation</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-purple-600">200%</div>
                      <div className="text-xs text-gray-600">Efficiency</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600">237%</div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Published Jan 25, 2026</div>
                    <div className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                      Read Full Article →
                    </div>
                  </div>
                </div>
              </Link>

              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">COMING SOON</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  AI ROI Calculator & Implementation Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Interactive tool to calculate your AI automation ROI and get a personalized implementation roadmap
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-800 font-semibold">
                    🔜 Launching February 2026 - Get early access by calling +1 302 464 0950
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/blog" 
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all hover:scale-105 shadow-lg"
              >
                View All AI Automation Articles →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured New Content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Latest AI Insights for 2026</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Cutting-edge guides to transform your enterprise with next-generation AI technology
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              {/* AI Orchestration Platforms */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      🆕 NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    AI Orchestration Platforms 2026
                  </h3>
                  <p className="text-sm opacity-90">
                    Unified control for multi-agent systems
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-purple-600">60%</div>
                      <div className="text-xs text-gray-600">Cost Cut</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-600">99.9%</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600">10x</div>
                      <div className="text-xs text-gray-600">Faster</div>
                    </div>
                  </div>
                  <Link 
                    href="/blog/ai-orchestration-platforms-2026"
                    className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>

              {/* Federated Learning */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      🆕 NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Federated Learning 2026
                  </h3>
                  <p className="text-sm opacity-90">
                    Privacy-preserving AI at enterprise scale
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-green-600">95%</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-emerald-600">100%</div>
                      <div className="text-xs text-gray-600">Private</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-600">70%</div>
                      <div className="text-xs text-gray-600">Savings</div>
                    </div>
                  </div>
                  <Link 
                    href="/blog/federated-learning-2026"
                    className="block w-full bg-green-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>

              {/* AI Code Generation */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      🆕 NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    AI Code Generation 2026
                  </h3>
                  <p className="text-sm opacity-90">
                    10x developer productivity with AI
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-indigo-600">10x</div>
                      <div className="text-xs text-gray-600">Speed</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-purple-600">80%</div>
                      <div className="text-xs text-gray-600">Debug</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-600">90%</div>
                      <div className="text-xs text-gray-600">Quality</div>
                    </div>
                  </div>
                  <Link 
                    href="/blog/ai-code-generation-2026"
                    className="block w-full bg-indigo-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-sm"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>

              {/* Real-Time AI Analytics */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      🆕 NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Real-Time AI Analytics 2026
                  </h3>
                  <p className="text-sm opacity-90">
                    Instant insights from streaming data
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-blue-600">&lt;100ms</div>
                      <div className="text-xs text-gray-600">Latency</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-cyan-600">1B+</div>
                      <div className="text-xs text-gray-600">Events/s</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600">99.99%</div>
                      <div className="text-xs text-gray-600">Accurate</div>
                    </div>
                  </div>
                  <Link 
                    href="/blog/real-time-ai-analytics-2026"
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>

            </div>

            {/* View All Button */}
            <div className="text-center">
              <Link 
                href="/blog" 
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 shadow-lg"
              >
                View All Articles →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Content from Main */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Latest AI Innovations & Insights - September 2025
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fresh perspectives on cutting-edge AI technologies and revolutionary solutions transforming industries worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Link href="/blog/ai-agent-orchestration-2025" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 hover:border-cyan-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors mb-2">
                    AI Agent Orchestration
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">Multi-Agent Systems</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Build intelligent networks of AI agents working together to solve complex problems—achieving 200-300% productivity gains.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">Sep 30, 2025</div>
                    <div className="text-cyan-600 font-semibold text-sm group-hover:text-cyan-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/edge-ai-revolution-2025" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 hover:border-blue-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Edge AI Revolution
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">Processing at the Source</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Real-time intelligence directly on devices—95% faster responses, 80% cost reduction, and enhanced privacy.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">Sep 30, 2025</div>
                    <div className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/llm-fine-tuning-enterprise-2025" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 hover:border-purple-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    LLM Fine-Tuning
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">Customizing Enterprise AI</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Transform generic models into domain experts with 85-95% accuracy improvements and 10x ROI.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">Sep 30, 2025</div>
                    <div className="text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-cybersecurity-zero-trust-2025" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 hover:border-red-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                    AI Cybersecurity
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">Zero Trust Architecture</p>
                  <p className="text-gray-600 text-sm mb-4">
                    AI-powered security systems detecting threats 99.7% faster with automated response in milliseconds.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">Sep 30, 2025</div>
                    <div className="text-red-600 font-semibold text-sm group-hover:text-red-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore All Articles & Insights
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our AI and IT solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}