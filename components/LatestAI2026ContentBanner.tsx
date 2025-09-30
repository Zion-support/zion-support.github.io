import React from 'react';
import Link from 'next/link';

export default function LatestAI2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-6">
            <span className="text-xl">🔥</span>
            <span className="font-semibold">Latest AI 2026 Content</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Ahead with Cutting-Edge AI Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI breakthroughs, implementation strategies, and success stories 
            that are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-2026-revolutionary-breakthrough" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-red-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Featured
                </span>
                <span className="text-sm text-gray-500">25 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                AI 2026 Revolutionary Breakthrough
              </h3>
              <p className="text-gray-600 mb-4">
                Discover autonomous AI agents, neural interfaces, and predictive intelligence systems achieving 300% productivity gains.
              </p>
              <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/quantum-ai-breakthrough-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Breakthrough
                </span>
                <span className="text-sm text-gray-500">25 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Quantum AI Breakthrough 2026
              </h3>
              <p className="text-gray-600 mb-4">
                Explore quantum-enhanced AI delivering 500x faster results and revolutionizing computational capabilities.
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/global-manufacturing-ai-transformation" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm text-gray-500">Manufacturing</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Global Manufacturing AI Transformation
              </h3>
              <p className="text-gray-600 mb-4">
                See how a Fortune 500 manufacturer achieved $50M annual savings and 95% efficiency improvements.
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-hub"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link
              href="/blog"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Read Latest Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}