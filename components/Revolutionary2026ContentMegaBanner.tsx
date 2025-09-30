import React from 'react';
import Link from 'next/link';

export default function Revolutionary2026ContentMegaBanner() {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-indigo-900/50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🔥 REVOLUTIONARY 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary 2026 Content:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              The Ultimate AI Transformation Guide
            </span>
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the most comprehensive collection of AI insights, breakthrough technologies, 
            and success stories. Explore revolutionary content that's reshaping the future of business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-lg font-bold mb-3">50+ AI Articles</h3>
            <p className="text-sm opacity-90 mb-4">
              In-depth articles covering AI trends, quantum computing, neural interfaces, and more.
            </p>
            <div className="text-cyan-300 font-semibold text-sm">
              Explore Articles →
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-bold mb-3">25+ Case Studies</h3>
            <p className="text-sm opacity-90 mb-4">
              Real-world success stories showing 300% ROI and $50M+ savings with AI transformation.
            </p>
            <div className="text-cyan-300 font-semibold text-sm">
              View Case Studies →
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🛠️</div>
            <h3 className="text-lg font-bold mb-3">Implementation Guides</h3>
            <p className="text-sm opacity-90 mb-4">
              Step-by-step guides and blueprints for implementing AI solutions in your organization.
            </p>
            <div className="text-cyan-300 font-semibold text-sm">
              Get Guides →
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-bold mb-3">Interactive Tools</h3>
            <p className="text-sm opacity-90 mb-4">
              AI ROI calculators, assessment tools, and interactive demos to help you plan your transformation.
            </p>
            <div className="text-cyan-300 font-semibold text-sm">
              Try Tools →
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-hub"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Content Hub
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors"
            >
              Read Latest Articles
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-300">50+</div>
              <div className="text-sm opacity-90">AI Articles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-300">25+</div>
              <div className="text-sm opacity-90">Case Studies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-300">10K+</div>
              <div className="text-sm opacity-90">Readers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-300">300%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}