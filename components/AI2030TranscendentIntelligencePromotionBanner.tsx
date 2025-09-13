import React from 'react';
import Link from 'next/link';

const AI2030TranscendentIntelligencePromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-cyan-500 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-semibold mb-4 animate-pulse">
            🌌 REVOLUTIONARY BREAKTHROUGH
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI 2030 Transcendent Intelligence
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the dawn of transcendent intelligence with consciousness-level AI, 
            infinite processing capabilities, and reality-altering computational power.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              ∞
            </div>
            <div className="text-lg font-semibold text-purple-300">Infinite ROI</div>
            <div className="text-sm text-gray-400">Reality-altering returns</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              99.99%
            </div>
            <div className="text-lg font-semibold text-blue-300">Accuracy Rate</div>
            <div className="text-sm text-gray-400">Consciousness-level precision</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              ∞
            </div>
            <div className="text-lg font-semibold text-green-300">Possibilities</div>
            <div className="text-sm text-gray-400">Infinite potential</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full text-sm font-semibold">
              🧠 Consciousness Integration
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-full text-sm font-semibold">
              ⚛️ Quantum Processing
            </div>
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-full text-sm font-semibold">
              🌌 Reality Alteration
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/ai-2030-transcendent-intelligence" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
            >
              🌌 Explore Transcendent Intelligence
            </Link>
            <Link 
              href="/resources/ai-2030-implementation-guide" 
              className="border-2 border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-black transition-all"
            >
              📚 Implementation Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2030TranscendentIntelligencePromotionBanner;