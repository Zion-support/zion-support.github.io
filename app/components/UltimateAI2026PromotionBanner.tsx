import React from 'react';
import Link from 'next/link';

const UltimateAI2026PromotionBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-purple-400/30 rounded-full animate-pulse delay-3000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6 shadow-lg">
            <span className="text-sm font-bold">🚀 ULTIMATE AI 2026 GUIDE</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            The Complete AI Implementation Guide 2026
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-100">
            Transform your enterprise with our comprehensive AI implementation guide. 
            Learn how to achieve <span className="text-yellow-300 font-bold">500-2000% ROI</span> and 
            gain <span className="text-green-300 font-bold">unprecedented competitive advantages</span>.
          </p>
          
          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-bold mb-2">500-2000% ROI</h3>
              <p className="text-sm text-blue-100">Average returns within 24 months</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2">300-800% Productivity</h3>
              <p className="text-sm text-blue-100">Massive efficiency gains across all functions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold mb-2">Complete Roadmap</h3>
              <p className="text-sm text-blue-100">Step-by-step implementation guide</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/resources/ai-implementation-ultimate-guide-2026"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get the Ultimate Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>500+ Enterprise Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>98% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-300/60 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-300/60 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-indigo-300/60 rounded-full animate-bounce delay-1500"></div>
    </section>
  );
};

export default UltimateAI2026PromotionBanner;