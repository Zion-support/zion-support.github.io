import React from 'react';
import Link from 'next/link';

export default function AI2025BreakthroughPromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
            🔥 BREAKTHROUGH ALERT
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI 2025
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Breakthrough Revolution
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Discover the revolutionary AI breakthroughs that are transforming industries and creating 
            <strong className="text-white"> 10,000% ROI opportunities</strong> for forward-thinking companies.
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
              <span className="text-2xl mr-2">⚡</span>
              <span className="font-semibold">1000x Faster Processing</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
              <span className="text-2xl mr-2">💰</span>
              <span className="font-semibold">10,000% ROI</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
              <span className="text-2xl mr-2">🎯</span>
              <span className="font-semibold">99.9% Accuracy</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/ai-2025-breakthrough-revolution"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Breakthroughs →
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              View Success Story
            </Link>
            <Link 
              href="/blog/ai-2025-ultimate-implementation-guide"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Implementation Guide
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 text-blue-100 text-sm">
            <p>Trusted by 500+ Fortune 500 companies • 10,000+ successful implementations</p>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 text-4xl animate-bounce">🚀</div>
      <div className="absolute top-8 right-8 text-3xl animate-pulse">⚡</div>
      <div className="absolute bottom-4 left-1/4 text-3xl animate-bounce delay-1000">🧠</div>
      <div className="absolute bottom-8 right-1/4 text-4xl animate-pulse delay-500">⚛️</div>
    </div>
  );
}