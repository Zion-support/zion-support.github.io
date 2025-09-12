import React from 'react';
import { Metadata } from 'next';
import AI2026ContentShowcase from '../../components/AI2026ContentShowcase';
import AI2026RevolutionaryBreakthroughBanner from '../../components/AI2026RevolutionaryBreakthroughBanner';

export const metadata: Metadata = {
  title: 'AI Content Showcase | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI content including breakthrough predictions, case studies, implementation guides, and expert insights.',
  keywords: ['AI Content', 'AI Resources', 'AI Case Studies', 'AI Implementation', 'AI Predictions'],
  openGraph: {
    title: 'AI Content Showcase | Zion Tech Group',
    description: 'Discover the latest AI content, breakthrough predictions, and implementation resources.',
    type: 'website',
  },
};

export default function ContentShowcasePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Revolutionary Breakthrough Banner */}
      <AI2026RevolutionaryBreakthroughBanner />
      
      {/* Main Content Showcase */}
      <AI2026ContentShowcase />
      
      {/* Additional Featured Content */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest AI Breakthroughs & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest content on AI innovations, 
              industry trends, and breakthrough technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🧠</span>
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    REVOLUTIONARY
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Neural Interface Revolution: The Future of Human-Computer Interaction
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Explore how neural interfaces are transforming the way humans interact with technology, 
                  enabling direct brain-computer communication and unprecedented control.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-green-600">
                    95% Accuracy Rate
                  </div>
                  <a 
                    href="/blog/neural-interface-revolution-2026"
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-200"
                  >
                    Read Article →
                  </a>
                </div>
              </div>
            </div>

            {/* Featured Case Study */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">⚛️</span>
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    BREAKTHROUGH
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quantum-AI Fusion: 10,000x Faster Problem Solving
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Discover how quantum computing combined with AI is revolutionizing complex problem-solving, 
                  enabling breakthroughs in cryptography, optimization, and simulation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-blue-600">
                    10,000x Faster
                  </div>
                  <a 
                    href="/case-studies/quantum-ai-fusion-breakthrough"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                  >
                    View Case Study →
                  </a>
                </div>
              </div>
            </div>

            {/* Featured Resource */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🤖</span>
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    AUTONOMOUS
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Autonomous Enterprise Systems: 99% Self-Managing Operations
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Learn how autonomous AI systems are creating self-managing enterprises with 99% operational autonomy 
                  and unprecedented efficiency gains.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-green-600">
                    99% Autonomous
                  </div>
                  <a 
                    href="/resources/autonomous-enterprise-guide"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
                  >
                    Get Guide →
                  </a>
                </div>
              </div>
            </div>

            {/* Featured Webinar */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🎯</span>
                  <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    MULTIMODAL
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Multimodal AI Consciousness: Human-Like Understanding
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Explore how AI systems with multimodal consciousness are achieving human-like understanding 
                  across text, voice, video, and sensory data.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-purple-600">
                    95% Context Accuracy
                  </div>
                  <a 
                    href="/webinars/multimodal-ai-consciousness"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                  >
                    Join Webinar →
                  </a>
                </div>
              </div>
            </div>

            {/* Featured Tool */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">📱</span>
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    EDGE AI
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Edge AI Supercomputing: Desktop Power on Mobile
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Discover how edge AI supercomputing is bringing desktop-level processing power to mobile devices 
                  with 99.9% latency reduction.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-orange-600">
                    99.9% Latency Reduction
                  </div>
                  <a 
                    href="/tools/edge-ai-calculator"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200"
                  >
                    Try Tool →
                  </a>
                </div>
              </div>
            </div>

            {/* Featured Report */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">📊</span>
                  <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    REPORT
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AI 2026 Market Impact Report: $2.3T Opportunity
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Comprehensive analysis of the AI 2026 market opportunity, including growth projections, 
                  industry impact, and investment recommendations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-indigo-600">
                    $2.3T Market Size
                  </div>
                  <a 
                    href="/reports/ai-2026-market-impact"
                    className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-indigo-600 hover:to-blue-600 transition-all duration-200"
                  >
                    Download Report →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Categories */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find exactly what you're looking for with our organized content categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="/blog" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-blue-200">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Blog Articles
                </h3>
                <p className="text-gray-600 mb-4">
                  In-depth analysis and insights on AI trends, breakthrough technologies, and industry developments.
                </p>
                <div className="text-blue-600 font-semibold group-hover:underline">
                  Browse Articles →
                </div>
              </div>
            </a>

            <a href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-green-200">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Case Studies
                </h3>
                <p className="text-gray-600 mb-4">
                  Real-world success stories and implementation results from leading enterprises worldwide.
                </p>
                <div className="text-green-600 font-semibold group-hover:underline">
                  View Cases →
                </div>
              </div>
            </a>

            <a href="/resources" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-purple-200">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Resources
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive toolkits, implementation guides, templates, and practical resources for AI adoption.
                </p>
                <div className="text-purple-600 font-semibold group-hover:underline">
                  Get Resources →
                </div>
              </div>
            </a>

            <a href="/webinars" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-orange-200">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Webinars
                </h3>
                <p className="text-gray-600 mb-4">
                  Expert-led sessions on AI trends, implementation strategies, best practices, and breakthrough technologies.
                </p>
                <div className="text-orange-600 font-semibold group-hover:underline">
                  Join Webinars →
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with AI Breakthroughs
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest AI insights, breakthrough predictions, and implementation guides delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}