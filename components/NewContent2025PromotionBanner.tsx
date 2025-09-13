import React from 'react';
import Link from 'next/link';

export default function NewContent2025PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 animate-pulse">
            <span className="text-indigo-400 font-bold text-lg">🔮 NEW CONTENT 2025</span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Content & Predictions
          </h2>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover the latest revolutionary AI trends, breakthrough case studies, and future predictions 
            that will reshape our world in 2025 and beyond.
          </p>
          
          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-br from-red-800/30 to-pink-800/30 p-6 rounded-xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-red-400 mb-2">Ultimate Breakthrough</h3>
              <p className="text-gray-300 text-sm">10,000% ROI guaranteed through revolutionary AI technology</p>
            </Link>
            
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-6 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Success Stories</h3>
              <p className="text-gray-300 text-sm">Real Fortune 500 companies achieving unprecedented results</p>
            </Link>
            
            <Link 
              href="/blog/ai-2025-revolutionary-trends-predictions"
              className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <div className="text-3xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Future Predictions</h3>
              <p className="text-gray-300 text-sm">Revolutionary AI trends and predictions for 2025</p>
            </Link>
          </div>
          
          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/blog"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-indigo-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              📚 Explore All Content
            </Link>
            <Link 
              href="/case-studies"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              📊 View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}