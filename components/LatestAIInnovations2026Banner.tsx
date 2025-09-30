import React from 'react';
import Link from 'next/link';

export default function LatestAIInnovations2026Banner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-6 py-3 mb-8">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="font-semibold">LATEST AI INNOVATIONS 2026</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {' '}Breakthrough Insights
            </span>
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI technologies, implementation strategies, and real-world success stories that are reshaping industries and driving unprecedented business transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Featured Content */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">AI Enterprise Transformation</h3>
                  <p className="text-sm opacity-75">Complete Implementation Guide</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Master AI enterprise transformation with our comprehensive 2026 guide. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with proven strategies.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">Featured Article</span>
                  <span className="opacity-75">25 min read</span>
                </div>
                <Link
                  href="/blog/ai-enterprise-transformation-2026"
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">AI Edge Computing</h3>
                  <p className="text-sm opacity-75">Real-time Intelligence</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Achieve sub-50ms response times with AI processing at the edge. Perfect for autonomous vehicles, IoT devices, and real-time applications.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">New Technology</span>
                  <span className="opacity-75">18 min read</span>
                </div>
                <Link
                  href="/blog/ai-edge-computing-2025"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Explore Tech →
                </Link>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Supply Chain Optimization</h3>
                  <p className="text-sm opacity-75">60% Cost Reduction Achieved</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually with AI supply chain optimization.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Success Story</span>
                  <span className="opacity-75">12 min read</span>
                </div>
                <Link
                  href="/case-studies/ai-supply-chain-optimization-2025"
                  className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                >
                  View Case Study →
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-xl font-bold mb-4">AI Innovation Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">300%</div>
                  <div className="text-sm opacity-75">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">70%</div>
                  <div className="text-sm opacity-75">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">90%</div>
                  <div className="text-sm opacity-75">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300 mb-2">500+</div>
                  <div className="text-sm opacity-75">Implementations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Stay Ahead with Latest AI Insights</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join 10,000+ professionals who rely on our cutting-edge AI content, implementation guides, and success stories to drive business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
              >
                Explore All Content
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}