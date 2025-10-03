// import React from 'react';

export default function January2026NewContentSpotlight() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Spotlight Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">LIVE: NEW CONTENT PUBLISHED</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Revolutionary AI Breakthroughs: January 2026
              </h3>
              
              <p className="text-gray-300 mb-4">
                Three groundbreaking technologies now available: Ultra-Autonomous Enterprise Revolution, 
                Quantum Consciousness Business Intelligence, and Neural-Quantum Fusion Breakthrough.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                  99.99% Autonomy
                </span>
                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                  Infinite Processing
                </span>
                <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">
                  100,000x Performance
                </span>
                <span className="bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">
                  $36.8B Value
                </span>
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all">
                Explore New Content →
              </button>
            </div>

            {/* Metrics Display */}
            <div className="flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white">3</div>
                  <div className="text-green-100 text-xs">New Technologies</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-cyan-700 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white">∞</div>
                  <div className="text-blue-100 text-xs">Processing Power</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-purple-100 text-xs">Fortune 500</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-600 to-orange-700 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white">$36.8B</div>
                  <div className="text-yellow-100 text-xs">Value Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}