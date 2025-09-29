import React from 'react';
import Link from 'next/link';

export default function LatestContent2026PromotionalBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 NEW 2026 CONTENT
          </span>
          <span className="bg-green-500 px-4 py-2 rounded-full text-sm font-semibold">
            BREAKTHROUGH
          </span>
        </div>
        
        <h2 className="text-4xl font-bold mb-4">
          Revolutionary AI Content Hub 2026
        </h2>
        
        <p className="text-xl mb-6 opacity-90 max-w-3xl">
          Discover cutting-edge AI innovations, Fortune 500 success stories, and interactive tools. 
          From quantum computing to autonomous systems, explore content that drives real business results.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">5+</div>
            <div className="text-sm opacity-90">New Articles</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">3+</div>
            <div className="text-sm opacity-90">Case Studies</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">2+</div>
            <div className="text-sm opacity-90">Interactive Tools</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/content-hub"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg text-center"
          >
            Explore Content Hub
          </Link>
          <Link 
            href="/blog/ai-2026-enterprise-autonomous-systems"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors text-center"
          >
            Read Latest Article
          </Link>
        </div>
      </div>
    </div>
  );
}