import React from 'react';
import { Link } from 'react-router-dom';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🚀 New Content Alert: AI 2025 Ultimate Solutions
            </h2>
            <p className="text-lg text-gray-200 mb-4">
              Discover revolutionary AI transformation solutions, quantum breakthroughs, 
              and autonomous systems that deliver 1000% ROI
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm font-semibold">
                ✨ 5 New Articles
              </span>
              <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm font-semibold">
                🎯 Featured Content
              </span>
              <span className="px-3 py-1 bg-purple-500/30 rounded-full text-sm font-semibold">
                🔥 Trending Now
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/ai-2025-ultimate-transformation"
              className="px-6 py-3 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Explore Solutions
            </Link>
            <Link 
              to="/quantum-ai-revolution-2025"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Quantum AI
            </Link>
            <Link 
              to="/blog"
              className="px-6 py-3 bg-white/20 backdrop-blur-lg text-white rounded-full font-bold border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;