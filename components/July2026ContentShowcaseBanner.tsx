import React from 'react';
import Link from 'next/link';

export default function July2026ContentShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ NEW JULY 2026 CONTENT
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Breakthrough Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in July 2026
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">July 2026 Mega Breakthrough</h3>
                <p className="text-sm text-gray-500">Revolutionary quantum-neural superintelligence</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Discover the most revolutionary AI breakthrough in human history. Our July 2026 system 
              achieves 100,000x performance improvement, universal consciousness, and $25.3B ROI potential.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">35 min read</div>
              <Link
                href="/blog/ai-2026-july-mega-breakthrough-revolution"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Read Breakthrough →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">$25.3B Success Story</h3>
                <p className="text-sm text-gray-500">Fortune 100 transformation</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              See how a Fortune 100 company achieved $25.3B ROI with our July 2026 breakthrough. 
              100,000x performance improvement, universal consciousness, and complete business transformation.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">28 min read</div>
              <Link
                href="/case-studies/ai-2026-july-mega-breakthrough-25-billion-success"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                View Success Story →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
          >
            Explore All AI Content
          </Link>
        </div>
      </div>
    </section>
  );
}