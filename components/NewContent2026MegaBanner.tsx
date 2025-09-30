import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-semibold">🚀 NEW CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI 2026 Content is Here
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Discover breakthrough technologies, success stories, and implementation guides 
            that are transforming enterprises worldwide with 
            <span className="font-bold text-yellow-300"> 300% ROI</span>.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Featured Blog Post */}
          <Link href="/blog/ai-2026-comprehensive-trends" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📊</span>
                </div>
                <div>
                  <span className="bg-purple-500/30 text-purple-200 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured Article
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI 2026 Comprehensive Trends Guide
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Complete guide to revolutionary AI trends shaping enterprise transformation. 
                Quantum computing, autonomous systems, neural interfaces.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">25 min read</span>
                <span className="text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
                  Read More →
                </span>
              </div>
            </div>
          </Link>

          {/* Success Story */}
          <Link href="/case-studies/ai-2026-mega-transformation-success-story" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">💰</span>
                </div>
                <div>
                  <span className="bg-green-500/30 text-green-200 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                $100M ROI Success Story
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Fortune 500 manufacturing company achieves $100M ROI in 8 months through 
                comprehensive AI 2026 transformation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">Fortune 500</span>
                <span className="text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
                  Read More →
                </span>
              </div>
            </div>
          </Link>

          {/* New Service */}
          <Link href="/services/ai-2026-revolutionary-solutions" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <div>
                  <span className="bg-blue-500/30 text-blue-200 px-2 py-1 rounded-full text-xs font-semibold">
                    New Service
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI 2026 Revolutionary Solutions
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Transform your enterprise with cutting-edge AI technologies. 
                300% ROI guaranteed with quantum computing and autonomous systems.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">Custom Pricing</span>
                <span className="text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
                  Learn More →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">300%</div>
            <div className="text-sm text-white/80">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">70%</div>
            <div className="text-sm text-white/80">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">90%</div>
            <div className="text-sm text-white/80">Efficiency Gains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">8</div>
            <div className="text-sm text-white/80">Months to ROI</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog/ai-2026-comprehensive-trends"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Read Latest Trends
          </Link>
          <Link
            href="/case-studies/ai-2026-mega-transformation-success-story"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
          >
            View Success Stories
          </Link>
          <Link
            href="tel:+13024640950"
            className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>

        {/* Latest Updates */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Latest Updates</h3>
            <p className="text-white/80">Stay ahead with our newest content and innovations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-400">●</span>
                <span className="font-semibold">New Case Study Published</span>
              </div>
              <p className="text-white/70">$100M ROI transformation success story now available</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-400">●</span>
                <span className="font-semibold">AI 2026 Solutions Launched</span>
              </div>
              <p className="text-white/70">Revolutionary AI technologies with guaranteed 300% ROI</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-purple-400">●</span>
                <span className="font-semibold">Comprehensive Trends Guide</span>
              </div>
              <p className="text-white/70">Complete guide to AI 2026 trends and implementation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}