import React from 'react';
import Link from 'next/link';

export default function NewContent2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            NEW 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionary AI Content for 2026
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Discover cutting-edge AI insights, implementation guides, and success stories 
            that will transform your business in 2026 and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/blog/ai-2026-predictions" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">NEW</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                AI Predictions 2026
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                Discover the top AI predictions for 2026 including autonomous agents, quantum AI, 
                and enterprise transformation trends.
              </p>
              <div className="flex items-center text-yellow-200 font-semibold text-sm">
                Read Predictions →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-implementation-mastery-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">GUIDE</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                AI Implementation Mastery
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                Master AI implementation with our comprehensive 2026 guide. Learn proven strategies, 
                frameworks, and best practices for successful enterprise AI deployment.
              </p>
              <div className="flex items-center text-yellow-200 font-semibold text-sm">
                Read Guide →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-autonomous-manufacturing-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">CASE STUDY</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                AI Autonomous Manufacturing
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                See how a Fortune 500 manufacturer achieved $15M ROI with AI autonomous operations. 
                99.9% uptime, 90% cost reduction, and zero-touch manufacturing.
              </p>
              <div className="flex items-center text-yellow-200 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-indigo-200 text-sm">
            Join 10,000+ executives who trust Zion Tech Group for AI insights and implementation
          </p>
        </div>
      </div>
    </div>
  );
}
