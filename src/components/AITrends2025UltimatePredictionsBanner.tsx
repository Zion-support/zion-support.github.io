import React from 'react';
import Link from 'next/link';
ArrowRightBrainZapClockTrendingUpCheckCircle

export default function AITrends2025UltimatePredictionsBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-2xl mx-4 my-8 border border-purple-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill%3D%22%239C92AC%22 fill-opacity%3D%220.1%22%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium mb-6">
                <Clock className="w-4 h-4 mr-2" />
                NEW: Ultimate AI Predictions
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Trends
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> 2025-2030</span>
                <br />
                Ultimate Predictions
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover the most accurate and comprehensive predictions about the future of artificial intelligence. 
                <span className="text-yellow-400 font-semibold"> Based on expert analysis from 100+ leading AI researchers.</span>
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-white">
                  <Brain className="w-5 h-5 mr-3 text-purple-400" />
                  <div>
                    <div className="font-semibold">Quantum-AI Fusion</div>
                    <div className="text-sm text-gray-400">2025 Breakthrough</div>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <Zap className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <div className="font-semibold">Neural Interfaces</div>
                    <div className="text-sm text-gray-400">2026 Revolution</div>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <TrendingUp className="w-5 h-5 mr-3 text-green-400" />
                  <div>
                    <div className="font-semibold">AI Consciousness</div>
                    <div className="text-sm text-gray-400">2027 Emergence</div>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 text-orange-400" />
                  <div>
                    <div className="font-semibold">AI Singularity</div>
                    <div className="text-sm text-gray-400">2030 Threshold</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/ai-trends-2025-ultimate-predictions" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View All Predictions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/ai-trends-2025-ultimate-predictions#predictions" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Explore Timeline
                </Link>
              </div>
            </div>
            
            {/* Right Content - Prediction Timeline */}
            <div className="relative">
              <div className="space-y-6">
                {/* 2025 Prediction */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl font-bold text-purple-400">2025</div>
                    <div className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">85%</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Quantum-AI Fusion</h3>
                  <p className="text-gray-300 text-sm">10,000x processing speed improvements</p>
                </div>
                
                {/* 2026 Prediction */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl font-bold text-blue-400">2026</div>
                    <div className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">70%</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Neural Interface Revolution</h3>
                  <p className="text-gray-300 text-sm">Consumer brain-computer interfaces</p>
                </div>
                
                {/* 2030 Prediction */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl font-bold text-pink-400">2030</div>
                    <div className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium">50%</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">AI Singularity</h3>
                  <p className="text-gray-300 text-sm">AI surpasses human intelligence</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
    </div>
  );
}