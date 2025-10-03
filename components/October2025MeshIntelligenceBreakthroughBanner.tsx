// import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025MeshIntelligenceBreakthroughBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-8 px-6 border-y-4 border-yellow-400 shadow-xl">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Headline */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap gap-2 mb-3 justify-center md:justify-start">
              <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                🔥 BREAKING NEWS
              </span>
              <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                OCTOBER 1, 2025
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-2">
              Autonomous Mesh Intelligence Platform
            </h3>
            <p className="text-lg md:text-xl text-white font-semibold mb-2">
              Revolutionary Distributed AI Architecture
            </p>
            <p className="text-base text-blue-200">
              12,500 AI Nodes • $8.4B Success • 2,847% ROI • 99.999% Uptime
            </p>
          </div>

          {/* Right: Metrics & CTA */}
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-yellow-400">
                <div className="text-2xl font-black text-yellow-300">$8.4B</div>
                <div className="text-xs text-white">Proven Value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-pink-400">
                <div className="text-2xl font-black text-pink-300">10,000x</div>
                <div className="text-xs text-white">Faster</div>
              </div>
            </div>
            <Link
              to="/services/ai-2025-october-autonomous-mesh-intelligence-platform"
              className="block w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-center font-black rounded-full shadow-lg transform hover:scale-105 transition-all"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
