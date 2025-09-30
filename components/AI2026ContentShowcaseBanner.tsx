import React from 'react';
import Link from 'next/link';

export default function AI2026ContentShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">FEATURED 2026 CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI 2026 Content Showcase
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Revolutionary Insights & Breakthroughs
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of AI insights, case studies, and implementation guides 
            that are shaping the future of enterprise technology in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-2026-enterprise-automation-breakthrough" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-200 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <span className="text-6xl">⚡</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    BREAKTHROUGH
                  </span>
                  <span className="text-gray-500 text-sm">15 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Enterprise Automation: 95% Process Reduction
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Discover how revolutionary AI automation achieved 95% process reduction and $12M annual savings for enterprise clients.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Jan 20, 2026</div>
                  <div className="text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                    Read More →
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-enterprise-2026" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-200 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <span className="text-6xl">🔮</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    QUANTUM AI
                  </span>
                  <span className="text-gray-500 text-sm">18 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Quantum Computing Enterprise 2026
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Explore how quantum computing is revolutionizing enterprise AI with 10,000x speed increases and breakthrough algorithms.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Jan 20, 2026</div>
                  <div className="text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                    Read More →
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-autonomous-enterprise-systems-2026" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-200 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <span className="text-6xl">🤖</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    AUTONOMOUS
                  </span>
                  <span className="text-gray-500 text-sm">20 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Autonomous Enterprise Systems
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Learn about self-managing business operations with 99.9% uptime, 85% cost reduction, and zero human errors.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Jan 20, 2026</div>
                  <div className="text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                    Read More →
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Stay Ahead with AI Insights</h3>
              <p className="text-xl text-blue-100 mb-6">
                Get weekly updates on the latest AI breakthroughs, implementation strategies, and industry insights 
                that are transforming enterprise operations in 2026.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Explore All Content
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Get Expert Consultation
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-blue-100">Articles Published</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">100K+</div>
                <div className="text-sm text-blue-100">Monthly Readers</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-blue-100">Reader Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Expert Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>Fresh content weekly</span>
            <span className="mx-2">•</span>
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span>Expert-authored insights</span>
            <span className="mx-2">•</span>
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <span>Practical implementation guides</span>
          </div>
        </div>
      </div>
    </section>
  );
}