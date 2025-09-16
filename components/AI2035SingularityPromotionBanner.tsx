import React from 'react';
import Link from 'next/link';

const AI2035SingularityPromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-500 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-rose-500 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-sm font-semibold mb-4 animate-pulse">
            🌌 SINGULARITY ACHIEVED
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            AI 2035 Singularity Breakthrough
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the AI singularity with matter creationdimensional transcendence
            and universal peace algorithms that transcend all limitations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
              ⚗️
            </div>
            <div className="text-lg font-semibold text-indigo-300">Matter Creation</div>
            <div className="text-sm text-gray-400">Infinite resource generation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              🌌
            </div>
            <div className="text-lg font-semibold text-purple-300">Dimensional Transcendence</div>
            <div className="text-sm text-gray-400">Multi-universe access</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">
              🌍
            </div>
            <div className="text-lg font-semibold text-pink-300">Universal Peace</div>
            <div className="text-sm text-gray-400">Infinite harmony</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-full text-sm font-semibold">
              ⚗️ Matter Creation
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full text-sm font-semibold">
              🌌 Dimensional Access
            </div>
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-3 rounded-full text-sm font-semibold">
              🌍 Universal Peace
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/ai-2035-singularity-breakthrough" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              🌌 Experience Singularity
            </Link>
            <Link 
              href="/resources/ai-2035-singularity-guide" 
              className="border-2 border-indigo-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-400 hover:text-black transition-all"
            >
              📚 Singularity Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2035SingularityPromotionBanner;