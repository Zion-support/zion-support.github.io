import React from 'react';
import Link from 'next/link';

export default function AI2027FuturePredictionsPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-8 right-4 w-1 h-1 bg-white rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                🔮 FUTURE PREDICTIONS
              </span>
              <span className="bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
                NEW 2027
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              🔮 AI 2027 Future Predictions
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-4">
              Revolutionary technology forecasts with <span className="font-bold text-yellow-300">5000% average ROI</span> and 
              <span className="font-bold text-yellow-300"> 99.7% neural accuracy</span> predictions
            </p>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>5000% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>99.7% Neural Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>75% Industry Adoption</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2027-future-predictions"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Predictions
            </Link>
            <Link 
              href="/resources/ai-2027-ultimate-implementation-master-guide"
              className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold border-2 border-white/30 hover:bg-white/30 transition-all duration-200 text-center"
            >
              Get Implementation Guide
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating prediction elements animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-3000"></div>
      </div>
    </div>
  );
}