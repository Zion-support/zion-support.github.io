import React from 'react';
import { Link } from 'react-router-dom';

const AutonomousOperationsPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-indigo-300 rounded-full animate-ping delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="flex-1 text-center lg:text-left mb-4 lg:mb-0">
          <div className="flex items-center justify-center lg:justify-start mb-2">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold mr-3 animate-pulse">
              🚀 BREAKTHROUGH
            </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              NEW 2025
            </span>
          </div>
          <h2 className="text-xl lg:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            AI 2025: Autonomous Business Operations Revolution
          </h2>
          <p className="text-blue-100 text-sm lg:text-base max-w-2xl">
            Discover how Fortune 500 companies are achieving <strong>2,500% ROI</strong> with fully autonomous AI operations. 
            Complete operational independence, self-optimizing systems, and unlimited scalability.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <Link
            to="/blog/ai-2025-autonomous-business-operations"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
          >
            <span className="mr-2">📖</span>
            Read the Guide
          </Link>
          <Link
            to="/case-studies/ai-2025-global-enterprise-autonomous-transformation"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
          >
            <span className="mr-2">🏆</span>
            See 2,500% ROI Case Study
          </Link>
          <Link
            to="/resources/ai-2025-autonomous-operations-implementation-guide"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
          >
            <span className="mr-2">📚</span>
            Implementation Guide
          </Link>
        </div>
      </div>
      
      {/* Floating statistics */}
      <div className="absolute top-2 right-2 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-xs">
          <div className="text-yellow-300 font-bold">2,500% ROI</div>
          <div className="text-blue-200">Proven Results</div>
        </div>
      </div>
      
      <div className="absolute bottom-2 left-2 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-xs">
          <div className="text-green-300 font-bold">300% Efficiency</div>
          <div className="text-blue-200">Improvement</div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousOperationsPromotionBanner;