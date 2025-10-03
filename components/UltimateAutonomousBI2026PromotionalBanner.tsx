import React from 'react';
import Link from 'next/link';

const UltimateAutonomousBI2026PromotionalBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-4 right-8 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-3 left-12 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🚀 BREAKTHROUGH 2026
            </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              $500B SUCCESS
            </span>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            🧠 Ultimate Autonomous Business Intelligence Revolution
          </h2>
          
          <p className="text-blue-200 text-sm md:text-base max-w-2xl">
            Discover how Fortune 500 companies achieved <strong className="text-yellow-300">$500 billion in value creation</strong> through 
            revolutionary autonomous business intelligence systems. Experience <strong className="text-green-300">10,000x faster decision making</strong> 
            and <strong className="text-purple-300">99.7% accuracy</strong> in predictive analytics.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <Link 
            href="/blog/ai-2026-ultimate-autonomous-business-intelligence-revolution"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            📖 Read the Breakthrough
          </Link>
          
          <Link 
            href="/case-studies/ai-2026-ultimate-autonomous-business-intelligence-500-billion-success"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            💰 $500B Success Story
          </Link>
        </div>
      </div>
      
      {/* Floating success metrics */}
      <div className="absolute top-2 right-4 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-xs">
          <div className="text-green-300 font-bold">ROI: 1,247%</div>
          <div className="text-blue-300 font-bold">Speed: 10,000x</div>
          <div className="text-purple-300 font-bold">Accuracy: 99.7%</div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAutonomousBI2026PromotionalBanner;