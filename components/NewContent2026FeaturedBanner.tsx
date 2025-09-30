import React from 'react';
import Link from 'next/link';

export default function NewContent2026FeaturedBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 BREAKTHROUGH 2026 CONTENT
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI innovations transforming enterprise operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* AI Autonomous Financial Systems */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW
              </span>
              <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                FEATURED
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI Autonomous Financial Systems
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Revolutionary self-managing finance systems that handle complex operations with unprecedented efficiency.
            </p>
            <Link 
              href="/blog/ai-autonomous-financial-systems-2026"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              Read Article →
            </Link>
          </div>

          {/* AI Quantum Enterprise */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                BREAKTHROUGH
              </span>
              <span className="bg-green-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                QUANTUM
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI Quantum Enterprise
            </h3>
            <p className="text-sm opacity-90 mb-4">
              The next frontier of business computing with quantum-enhanced AI solving previously intractable problems.
            </p>
            <Link 
              href="/blog/ai-quantum-enterprise-2026"
              className="inline-block bg-white text-purple-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              Explore Quantum AI →
            </Link>
          </div>

          {/* Manufacturing Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                SUCCESS
              </span>
              <span className="bg-red-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                75% ROI
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI Autonomous Manufacturing
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Real case study: 75% efficiency boost and $50M annual savings with AI autonomous systems.
            </p>
            <Link 
              href="/case-studies/ai-autonomous-manufacturing-2026"
              className="inline-block bg-white text-green-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              📚 Explore All 2026 Content
            </Link>
            <Link
              href="/case-studies"
              className="bg-white/20 text-white hover:bg-white/30 px-6 py-3 rounded-lg font-semibold transition-colors border border-white/30"
            >
              📊 View Success Stories
            </Link>
            <Link
              href="/services"
              className="bg-white/20 text-white hover:bg-white/30 px-6 py-3 rounded-lg font-semibold transition-colors border border-white/30"
            >
              🚀 Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}