import React from 'react';
import Link from 'next/link';

export default function LatestContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ LATEST 2026
            </span>
            <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              FEATURED
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/blog/ai-enterprise-automation-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="text-sm text-gray-500">18 min read</span>
              </div>
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                AI Enterprise Automation 2026
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Transform your enterprise with 95% process efficiency and $5M+ savings through comprehensive AI automation.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-green-600 font-semibold">95% Efficiency</div>
                <div className="text-sm text-gray-500">Read More →</div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-sustainability-transformation-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-teal-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="text-sm text-gray-500">15 min read</span>
              </div>
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                AI Sustainability Transformation
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                See how a Fortune 500 company achieved carbon neutrality and $10M ROI with AI sustainability.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-teal-600 font-semibold">$10M ROI</div>
                <div className="text-sm text-gray-500">Read More →</div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="text-sm text-gray-500">25 min read</span>
              </div>
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Quantum Computing 2026
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Harness quantum computing for AI breakthroughs with 1000x faster optimization.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-purple-600 font-semibold">1000x Faster</div>
                <div className="text-sm text-gray-500">Read More →</div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-2026-mega-trends" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="text-sm text-gray-500">45 min read</span>
              </div>
              <div className="text-3xl mb-4">🔮</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Mega Trends 2026
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Discover the 15 mega trends reshaping enterprise AI with $50B+ opportunities.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-600 font-semibold">$50B+ Market</div>
                <div className="text-sm text-gray-500">Read More →</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="mr-2">📚</span>
            Explore All AI Content
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}