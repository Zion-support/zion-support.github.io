import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 NEW 2026 CONTENT AVAILABLE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content Hub:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Explore the Future of Enterprise Intelligence
            </span>
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Discover cutting-edge AI insights, breakthrough case studies, and revolutionary 
            technologies that are transforming businesses worldwide. Get exclusive access to 
            our comprehensive content library.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">50+ AI Articles</h3>
            <p className="text-sm opacity-90 mb-4">
              In-depth articles covering AI trends, quantum computing, neural interfaces, and more.
            </p>
            <div className="text-yellow-300 font-semibold text-sm">
              Latest: AI Revolution 2026 →
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">25+ Case Studies</h3>
            <p className="text-sm opacity-90 mb-4">
              Real-world success stories showing 300% ROI and $50M+ savings with AI transformation.
            </p>
            <div className="text-yellow-300 font-semibold text-sm">
              Featured: Manufacturing Success →
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold mb-3">Implementation Guides</h3>
            <p className="text-sm opacity-90 mb-4">
              Step-by-step guides and blueprints for implementing AI solutions in your organization.
            </p>
            <div className="text-yellow-300 font-semibold text-sm">
              New: Quantum AI Guide →
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-hub"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Content Hub
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Latest Articles
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-300">50+</div>
              <div className="text-sm opacity-90">AI Articles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">25+</div>
              <div className="text-sm opacity-90">Case Studies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">10K+</div>
              <div className="text-sm opacity-90">Readers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">300%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}