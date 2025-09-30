import React from 'react';
import Link from 'next/link';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="font-semibold">Revolutionary 2026 Content</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Discover the Future of AI with Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Latest Breakthrough Content
            </span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Explore cutting-edge AI technologies, implementation guides, and success stories 
            that are reshaping enterprise operations in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-2026-mega-breakthrough" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured Article
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI 2026 Mega Breakthrough
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Discover the revolutionary AI technologies that are transforming enterprise operations 
                with unprecedented efficiency and intelligence.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-autonomous-enterprise-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <span className="bg-green-400 text-green-900 px-2 py-1 rounded-full text-xs font-semibold">
                    Implementation Guide
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                Autonomous Enterprise Systems
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Master the deployment of self-managing AI systems that can optimize operations 
                and achieve 300% ROI within 6 months.
              </p>
              <div className="flex items-center text-green-300 font-semibold">
                Learn More →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <span className="bg-orange-400 text-orange-900 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors">
                95% Efficiency Gain Case Study
              </h3>
              <p className="text-sm opacity-90 mb-4">
                See how a Fortune 500 company achieved 95% efficiency improvement and $12M 
                annual savings with autonomous AI systems.
              </p>
              <div className="flex items-center text-orange-300 font-semibold">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 10,000+ professionals staying ahead with our latest AI insights
          </p>
        </div>
      </div>
    </section>
  );
}