import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2027UltimatePredictionsBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 px-6 text-center shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <span className="text-4xl mr-3">🔮</span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            AI 2027 Ultimate Predictions Revealed!
          </h2>
        </div>
        <p className="text-xl md:text-2xl mb-6 text-indigo-100">
          Discover the most comprehensive and accurate AI predictions for 2027
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/ai-2027-future-predictions-ultimate"
            className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Predictions
          </a>
          <a
            href="/resources/ai-2027-ultimate-predictions-report"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Download Report
          </a>
        </div>
        <div className="mt-6 text-sm text-indigo-200">
          <span className="inline-block bg-indigo-500 px-3 py-1 rounded-full mr-2">NEW</span>
          <span className="inline-block bg-purple-500 px-3 py-1 rounded-full mr-2">BREAKTHROUGH</span>
          <span className="inline-block bg-pink-500 px-3 py-1 rounded-full">EXCLUSIVE</span>
        </div>
      </div>
    </div>
  );
};

export default AI2027UltimatePredictionsBanner;