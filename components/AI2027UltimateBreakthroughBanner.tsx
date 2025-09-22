import React from 'react';

interface AI2027UltimateBreakthroughBannerProps {
  className?: string;
}

export default function AI2027UltimateBreakthroughBanner({ 
  className = "" 
}: AI2027UltimateBreakthroughBannerProps) {
  return (
    <div className={`bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          AI 2027 Ultimate Breakthrough
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
          Revolutionary AI technologies that will transform the world by 2027
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold">
            Quantum AI
          </span>
          <span className="px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold">
            Neural Fusion
          </span>
          <span className="px-4 py-2 bg-indigo-600 rounded-full text-sm font-semibold">
            Autonomous Systems
          </span>
        </div>
      </div>
    </div>
  );
}