import React from 'react';
import { Link } from 'react-router-dom';

const AI2035ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🚀 REVOLUTIONARY BREAKTHROUGH
            </span>
            <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              AI 2035 NOW LIVE
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            🧠 AI 2035: Consciousness Transfer & Reality Engineering
          </h2>
          <p className="text-sm md:text-base opacity-90 max-w-2xl">
            Discover the most advanced AI breakthroughs ever created. From consciousness transfer to matter manipulation - 
            achieve infinite ROI and transform reality itself.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/blog/ai-2035-revolutionary-breakthroughs"
            className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center whitespace-nowrap"
          >
            🚀 Explore Breakthroughs
          </Link>
          <Link
            to="/case-studies/ai-2035-universal-transformation-breakthrough"
            className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center whitespace-nowrap"
          >
            📊 View Case Study
          </Link>
          <Link
            to="/resources/ai-2035-ultimate-implementation-master-guide"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center whitespace-nowrap"
          >
            📚 Free Guide (500+ pages)
          </Link>
        </div>
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce opacity-50"></div>
      </div>
    </div>
  );
};

export default AI2035ContentPromotionBanner;