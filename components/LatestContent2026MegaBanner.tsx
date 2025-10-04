import React from 'react';
import { Link } from 'react-router-dom';

export default function LatestContent2026MegaBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-48 translate-x-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-100 to-blue-100 rounded-full translate-y-32 -translate-x-32 opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🔥 LATEST 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Discover the Latest AI Breakthroughs:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Revolutionary Technologies Transforming Enterprise
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest AI insights, breakthrough technologies, 
            and success stories. Explore cutting-edge content that's reshaping the future of business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-revolution-2026-next-frontier" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-red-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Featured
                </span>
                <span className="text-sm text-gray-500">25 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                AI Revolution 2026: Next Frontier
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
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
              <p className="text-gray-600 mb-4 text-sm">
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
                <span className="text-sm text-gray-500">15 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Manufacturing AI Success
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                See how a Fortune 500 manufacturer achieved $50M savings and 95% efficiency improvements.
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Explore More?</h3>
          <p className="text-xl mb-6 opacity-90">
            Access our complete library of AI insights, case studies, and implementation guides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-hub"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse All Content
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Latest Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}