import React from 'react';
import Link from 'next/link';

export default function AI2026BreakthroughShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-purple-700">🔥 BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2026 Breakthrough Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs, innovations, and cutting-edge technologies 
            that are reshaping the AI landscape in 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Featured Content */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative z-10">
              <div className="text-sm font-semibold text-purple-200 mb-2">FEATURED GUIDE</div>
              <h3 className="text-3xl font-bold text-white mb-4">Complete AI Implementation Guide 2026</h3>
              <p className="text-white opacity-90 mb-6 text-lg">
                Your comprehensive roadmap to successfully implementing AI solutions in your enterprise. 
                From strategy to deployment, we cover everything you need to know.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Strategy</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Implementation</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Best Practices</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">ROI Calculator</span>
              </div>
              <Link 
                href="/content/ai-2026-implementation-guide"
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Complete Guide →
              </Link>
            </div>
          </div>

          {/* Secondary Content Grid */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
              <div className="text-sm font-semibold text-indigo-700 mb-2">AUTONOMOUS SYSTEMS</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Enterprise Autonomous Systems Revolution</h4>
              <p className="text-gray-600 mb-4">
                Discover how autonomous systems are transforming business operations with unprecedented efficiency and intelligence.
              </p>
              <div className="flex items-center justify-between">
                <Link 
                  href="/blog/ai-2026-enterprise-autonomous-systems"
                  className="text-indigo-600 font-semibold hover:text-indigo-800"
                >
                  Read Article →
                </Link>
                <span className="text-sm text-gray-500">15 min read</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
              <div className="text-sm font-semibold text-blue-700 mb-2">QUANTUM AI</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quantum AI Revolution 2026</h4>
              <p className="text-gray-600 mb-4">
                Explore how quantum computing is revolutionizing artificial intelligence and enabling breakthrough capabilities.
              </p>
              <div className="flex items-center justify-between">
                <Link 
                  href="/blog/ai-2026-quantum-ai-revolution"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Read Article →
                </Link>
                <span className="text-sm text-gray-500">12 min read</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <div className="text-sm font-semibold text-green-700 mb-2">CASE STUDY</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Real-World AI Success Stories</h4>
              <p className="text-gray-600 mb-4">
                Learn from successful AI implementations across different industries and discover what made them work.
              </p>
              <div className="flex items-center justify-between">
                <Link 
                  href="/case-studies"
                  className="text-green-600 font-semibold hover:text-green-800"
                >
                  View Case Studies →
                </Link>
                <span className="text-sm text-gray-500">8 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Breakthrough Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🤖</div>
              <div className="text-sm font-semibold text-purple-700 mb-2">AI Agents</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Autonomous AI Agents</h4>
              <p className="text-gray-600 text-sm mb-4">Next-generation AI agents that can operate independently and make complex decisions.</p>
              <Link href="/blog/ai-2026-autonomous-agents" className="text-purple-600 font-semibold text-sm hover:text-purple-800">Learn More →</Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🔒</div>
              <div className="text-sm font-semibold text-blue-700 mb-2">Security</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">AI Security Blueprint</h4>
              <p className="text-gray-600 text-sm mb-4">Comprehensive security framework for enterprise AI systems and implementations.</p>
              <Link href="/blog/ai-2026-security-blueprint" className="text-blue-600 font-semibold text-sm hover:text-blue-800">Learn More →</Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <div className="text-sm font-semibold text-green-700 mb-2">Analytics</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Predictive Analytics 2026</h4>
              <p className="text-gray-600 text-sm mb-4">Advanced predictive analytics powered by next-generation AI and machine learning.</p>
              <Link href="/blog/ai-2026-predictive-analytics" className="text-green-600 font-semibold text-sm hover:text-green-800">Learn More →</Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <div className="text-sm font-semibold text-orange-700 mb-2">Performance</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">AI Performance Optimization</h4>
              <p className="text-gray-600 text-sm mb-4">Techniques and strategies for optimizing AI system performance and efficiency.</p>
              <Link href="/blog/ai-2026-performance-optimization" className="text-orange-600 font-semibold text-sm hover:text-orange-800">Learn More →</Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Breakthroughs</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest AI insights, breakthrough research, and implementation guides delivered to your inbox. 
            Join 10,000+ AI professionals staying ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">No spam, unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
}