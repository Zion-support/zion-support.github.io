import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcase2025Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT COLLECTION
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ultimate Content Showcase 2025
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Explore the most comprehensive collection of revolutionary AI content, featuring breakthrough predictions, 
            success stories, and implementation guides delivering up to <span className="font-bold text-yellow-300">15,000% ROI</span>.
          </p>
          
          {/* Content Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-semibold text-white mb-2">Predictions</h3>
              <p className="text-white/80 text-sm mb-2">12 Revolutionary Articles</p>
              <div className="text-xs text-yellow-300 font-semibold">15,000% ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-semibold text-white mb-2">Case Studies</h3>
              <p className="text-white/80 text-sm mb-2">8 Success Stories</p>
              <div className="text-xs text-yellow-300 font-semibold">Fortune 500</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold text-white mb-2">Guides</h3>
              <p className="text-white/80 text-sm mb-2">15 Implementation Guides</p>
              <div className="text-xs text-yellow-300 font-semibold">Step-by-Step</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Tools</h3>
              <p className="text-white/80 text-sm mb-2">6 ROI Calculators</p>
              <div className="text-xs text-yellow-300 font-semibold">Free Tools</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/ultimate-content-showcase-2025"
              className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link 
              href="/blog/ai-2025-ultimate-breakthrough-predictions"
              className="px-8 py-4 bg-white/20 text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              View Predictions
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-ultimate"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Read Case Studies
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">41</div>
              <div className="text-white/80 text-sm">Total Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">15,000%</div>
              <div className="text-white/80 text-sm">Max ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-white/80 text-sm">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">47</div>
              <div className="text-white/80 text-sm">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}