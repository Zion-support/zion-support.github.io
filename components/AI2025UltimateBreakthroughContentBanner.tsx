import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughContentBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 BREAKTHROUGH CONTENT RELEASED
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI 2025 Ultimate Breakthrough Content
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Discover the most revolutionary AI predictions, case studies, and implementation guides 
            delivering up to <span className="font-bold text-yellow-300">15,000% ROI</span>.
          </p>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-semibold text-white mb-2">Ultimate Predictions</h3>
              <p className="text-white/80 text-sm">15,000% ROI breakthrough predictions for 2025</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-semibold text-white mb-2">Success Stories</h3>
              <p className="text-white/80 text-sm">Fortune 500 transformation case studies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold text-white mb-2">Implementation Guides</h3>
              <p className="text-white/80 text-sm">Step-by-step transformation roadmaps</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/blog/ai-2025-ultimate-breakthrough-predictions"
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Predictions
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-ultimate"
              className="px-8 py-4 bg-white/20 text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Read Case Study
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-guide"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Implementation Guide
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">15,000%</div>
              <div className="text-white/80 text-sm">Maximum ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-white/80 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">10,000x</div>
              <div className="text-white/80 text-sm">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">47</div>
              <div className="text-white/80 text-sm">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}