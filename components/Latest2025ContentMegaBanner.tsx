import React from 'react';
import Link from 'next/link';

export default function Latest2025ContentMegaBanner() {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Latest Content - January 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Now Available
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, breakthrough predictions, and proven implementation strategies 
            that are transforming enterprises worldwide.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article 1 */}
          <Link href="/blog/ai-2025-mega-breakthrough-predictions" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-semibold">
                    Featured Article
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI 2025 Mega Breakthrough Predictions
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Discover revolutionary AI breakthroughs predicted for 2025 that will transform enterprise operations 
                and achieve 300% productivity gains.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-blue-200">25 min read</div>
                <div className="text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                  Read Now →
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Article 2 */}
          <Link href="/blog/ai-autonomous-business-operations-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                    Implementation Guide
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Autonomous Business Operations 2025
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Master autonomous AI business operations with comprehensive guide. Achieve 400% ROI, 90% automation, 
                and 24/7 intelligent operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-blue-200">30 min read</div>
                <div className="text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                  Read Now →
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Case Study */}
          <Link href="/case-studies/fortune-500-autonomous-operations-success" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                Fortune 500 Success: 400% ROI
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                See how a Fortune 500 manufacturing company achieved 400% ROI, 90% automation, and $50M savings 
                through autonomous AI operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-blue-200">Case Study</div>
                <div className="text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                  View Now →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">300%</div>
            <div className="text-blue-100 font-semibold">Productivity Gains</div>
            <div className="text-blue-200 text-sm">With AI Breakthroughs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">400%</div>
            <div className="text-blue-100 font-semibold">ROI Achievement</div>
            <div className="text-blue-200 text-sm">In 18 Months</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">90%</div>
            <div className="text-blue-100 font-semibold">Process Automation</div>
            <div className="text-blue-200 text-sm">Autonomous Operations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">$50M</div>
            <div className="text-blue-100 font-semibold">Annual Savings</div>
            <div className="text-blue-200 text-sm">Fortune 500 Results</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link
              href="/services/ai-2026-revolutionary-solutions"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get AI Solutions
            </Link>
          </div>
          <p className="text-blue-200 text-sm">
            Join 50,000+ professionals who trust Zion Tech Group for cutting-edge AI insights and solutions
          </p>
        </div>
      </div>
    </section>
  );
}