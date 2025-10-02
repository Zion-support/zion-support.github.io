import React from 'react';

export default function October2025NextGenEnterpriseAIBanner() {
  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg text-white font-semibold text-xs uppercase tracking-wider">
              💎 New Enterprise Solution
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Next-Generation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Enterprise AI Platform
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Transform your enterprise with our cutting-edge AI platform that delivers unprecedented automation, intelligence, and scalability.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Enterprise Ready</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Free
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
          
          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">$2.4B</div>
                <div className="text-white font-semibold text-lg">Value Created</div>
                <div className="text-gray-400 text-sm mt-1">For Fortune 500</div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.7%</div>
                <div className="text-white font-semibold text-lg">Accuracy Rate</div>
                <div className="text-gray-400 text-sm mt-1">AI Predictions</div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
                <div className="text-white font-semibold text-lg">Cost Reduction</div>
                <div className="text-gray-400 text-sm mt-1">Operational</div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15x</div>
                <div className="text-white font-semibold text-lg">Faster Processing</div>
                <div className="text-gray-400 text-sm mt-1">vs Traditional</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="text-white font-bold text-lg">🚀</div>
            </div>
            <div className="text-white font-bold text-lg">Industry Recognition</div>
            <div className="text-3xl">🏆</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="text-white font-bold text-lg">⚡</div>
            </div>
            <div className="text-white font-bold text-lg">Performance</div>
            <div className="text-3xl">💨</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="text-white font-bold text-lg">🔒</div>
            </div>
            <div className="text-white font-bold text-lg">Security</div>
            <div className="text-3xl">🛡️</div>
          </div>
        </div>
      </div>
    </div>
  );
}