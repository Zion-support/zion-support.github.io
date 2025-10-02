import React from 'react';

export default function January2026RevolutionaryBreakthroughsBanner() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 py-12 border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-xs font-medium mb-4">
              🚀 BREAKING: JANUARY 2026
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Revolutionary AI Breakthroughs
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Just Published</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6">
              Three groundbreaking technologies reshaping enterprise operations with 
              <strong className="text-yellow-400"> $36.8B combined value</strong> and 
              <strong className="text-green-400"> infinite processing power</strong>.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-4 rounded-lg text-center">
                <div className="text-xl font-bold text-white">99.99%</div>
                <div className="text-green-100 text-xs">Autonomy</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-cyan-700 p-4 rounded-lg text-center">
                <div className="text-xl font-bold text-white">∞</div>
                <div className="text-blue-100 text-xs">Processing</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-lg text-center">
                <div className="text-xl font-bold text-white">100,000x</div>
                <div className="text-purple-100 text-xs">Performance</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all">
                Explore Breakthroughs
              </button>
              <button className="border border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-bold hover:bg-purple-400 hover:text-white transition-all">
                View All Content
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 max-w-md">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-purple-500/20">
              <div className="text-center">
                <div className="text-6xl mb-4">🧠⚛️⚡</div>
                <h3 className="text-xl font-bold text-white mb-4">Three Revolutionary Technologies</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Ultra-Autonomous Enterprise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Quantum Consciousness BI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Neural-Quantum Fusion</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg">
                  <div className="text-2xl font-bold text-white">$36.8B</div>
                  <div className="text-green-300 text-sm">Combined Value Creation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}