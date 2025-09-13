import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-purple-500/30 to-blue-500/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-bounce">
          <span className="text-sm font-bold">🚀 BREAKTHROUGH ANNOUNCEMENT</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          AI 2025 Ultimate Breakthrough Revolution
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
          Experience the most revolutionary AI breakthrough in human history. 
          <span className="text-yellow-300 font-bold"> 5,000% guaranteed ROI</span> with quantum-neural fusion, 
          autonomous operations, and transcendent intelligence.
        </p>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">5,000%</div>
            <div className="text-sm font-semibold">Guaranteed ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-sm font-semibold">Accuracy Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">10,000x</div>
            <div className="text-sm font-semibold">Faster Processing</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/ai-2025-ultimate-breakthrough-revolution"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg"
          >
            🚀 Discover the Breakthrough
          </Link>
          <Link
            href="/case-studies/ai-2025-global-transformation-breakthrough"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all shadow-lg"
          >
            📊 View Success Stories
          </Link>
        </div>

        {/* Additional Info */}
        <div className="text-sm text-gray-300 max-w-2xl mx-auto">
          <p className="mb-2">
            <span className="font-semibold text-yellow-300">Limited Time:</span> Get your implementation guide 
            and start your transformation journey today.
          </p>
          <p>
            <span className="font-semibold text-green-300">Proven Results:</span> Join 500+ companies already 
            experiencing revolutionary AI transformation.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
          <div className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            <span>Fortune 500 Tested</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            <span>99.9% Success Rate</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            <span>Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}