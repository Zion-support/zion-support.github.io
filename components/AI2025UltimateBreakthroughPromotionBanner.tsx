import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 py-16 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-600/20 to-blue-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 animate-bounce">
            🚀 BREAKTHROUGH ANNOUNCEMENT - LIMITED TIME
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI 2025 Ultimate
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Breakthrough Revolution
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most revolutionary AI breakthrough in history, delivering unprecedented 
            <span className="font-bold text-yellow-300"> 10,000% ROI</span> with 
            <span className="font-bold text-pink-300"> 99.9% accuracy</span> and 
            <span className="font-bold text-cyan-300"> 10,000x faster processing</span>.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">10,000%</div>
              <div className="text-lg text-white/90">Average ROI</div>
              <div className="text-sm text-white/70">Proven across 500+ enterprises</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-pink-300 mb-2">99.9%</div>
              <div className="text-lg text-white/90">Accuracy Rate</div>
              <div className="text-sm text-white/70">Industry-leading precision</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">10,000x</div>
              <div className="text-lg text-white/90">Faster Processing</div>
              <div className="text-sm text-white/70">Revolutionary speed improvement</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Explore the Revolution
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              📊 View Success Stories
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              💬 Get Free Consultation
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>500+ Successful Implementations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Fortune 500 Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>

          {/* Urgency Timer */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-md mx-auto">
            <div className="text-white/90 text-sm mb-2">Limited Time Offer Ends In:</div>
            <div className="flex justify-center gap-4 text-2xl font-bold text-white">
              <div className="text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2">07</div>
                <div className="text-xs text-white/70 mt-1">Days</div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2">23</div>
                <div className="text-xs text-white/70 mt-1">Hours</div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2">45</div>
                <div className="text-xs text-white/70 mt-1">Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}