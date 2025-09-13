import React from 'react';
import Link from 'next/link';

const NewContentPromotionBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-12">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            NEW CONTENT AVAILABLE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
            Revolutionary AI Content 2026
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover cutting-edge AI solutions, quantum computing breakthroughs, and future predictions that will transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/revolutionary-content-showcase-2026"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore New Content
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/ai-2026-2030-future-predictions"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              View Predictions
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;