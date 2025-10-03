// import React from 'react';
import { TruckIcon, Target, TrendingUp, Sparkles, DollarSign, Globe } from 'lucide-react';

export default function October2025CognitiveSupplyChainBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 py-16 px-6 sm:px-12 lg:px-16">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* NEW Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black font-bold text-sm animate-bounce shadow-2xl">
            <Sparkles className="w-5 h-5" />
            🚚 BREAKTHROUGH: OCTOBER 1, 2025 - COGNITIVE SUPPLY CHAIN REVOLUTION! 🚚
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-red-200 to-pink-200">
          🚚 Cognitive Supply Chain Revolution 🌐
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-yellow-300">
          AI-Powered End-to-End Optimization
        </h3>

        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-orange-800 to-orange-900 p-6 rounded-2xl border-2 border-orange-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-8 h-8 text-yellow-300" />
              <div className="text-yellow-300 font-bold text-lg">ACCURACY</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">98%</div>
            <div className="text-orange-200 text-sm">Forecast Accuracy</div>
          </div>

          <div className="bg-gradient-to-br from-red-800 to-red-900 p-6 rounded-2xl border-2 border-red-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-8 h-8 text-green-300" />
              <div className="text-green-300 font-bold text-lg">SAVINGS</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">75%</div>
            <div className="text-red-200 text-sm">Inventory Cost Reduction</div>
          </div>

          <div className="bg-gradient-to-br from-pink-800 to-pink-900 p-6 rounded-2xl border-2 border-pink-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-8 h-8 text-blue-300" />
              <div className="text-blue-300 font-bold text-lg">VALUE</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">$32.7B</div>
            <div className="text-pink-200 text-sm">Total Value Created</div>
          </div>

          <div className="bg-gradient-to-br from-rose-800 to-rose-900 p-6 rounded-2xl border-2 border-rose-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-green-300" />
              <div className="text-green-300 font-bold text-lg">DELIVERY</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">92%</div>
            <div className="text-rose-200 text-sm">On-Time Performance</div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gradient-to-r from-orange-800/50 to-pink-800/50 backdrop-blur-sm p-8 rounded-3xl border border-orange-400/30 mb-10 shadow-2xl">
          <p className="text-xl text-center text-white mb-6 leading-relaxed">
            <strong className="text-yellow-300">Revolutionary AI-powered supply chain intelligence</strong> that creates fully 
            autonomous, self-optimizing logistics networks. Achieve <strong className="text-orange-300">98% forecast accuracy</strong>, 
            <strong className="text-pink-300"> 75% inventory cost reduction</strong>, and <strong className="text-green-300">68% carbon footprint reduction</strong>. 
            Transform your supply chain with technology trusted by global enterprises.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-orange-300 mx-auto mb-3" />
              <div className="font-bold text-white mb-2">Demand Intelligence</div>
              <div className="text-sm text-orange-200">98% accuracy vs. 65% industry average</div>
            </div>
            <div className="text-center">
              <TruckIcon className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
              <div className="font-bold text-white mb-2">Logistics Optimization</div>
              <div className="text-sm text-red-200">Real-time optimization of 50,000+ routes</div>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-pink-300 mx-auto mb-3" />
              <div className="font-bold text-white mb-2">Disruption Management</div>
              <div className="text-sm text-pink-200">47-second average response time</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/blog/ai-2025-oct-01-cognitive-supply-chain-revolution"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105"
          >
            <Sparkles className="w-6 h-6" />
            Read the Complete Guide
            <Sparkles className="w-6 h-6" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-600 to-pink-600 text-white font-bold text-lg rounded-full hover:from-orange-500 hover:to-pink-500 transition-all shadow-2xl border-2 border-white/30"
          >
            <TruckIcon className="w-6 h-6" />
            Request Consultation
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-12 text-center">
          <p className="text-orange-200 text-sm mb-4">
            ⭐⭐⭐⭐⭐ Trusted by Global Supply Chain Leaders
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <span>🛒 Retail & E-Commerce</span>
            <span>🏭 Manufacturing</span>
            <span>🏥 Healthcare & Pharma</span>
            <span>🚗 Automotive</span>
          </div>
        </div>
      </div>
    </div>
  );
}
