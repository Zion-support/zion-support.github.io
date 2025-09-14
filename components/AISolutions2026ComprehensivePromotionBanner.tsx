import React from 'react';
import Link from 'next/link';
BrainChevronRightStarZapTrendingUp

const AISolutions2026ComprehensivePromotionBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 border border-blue-500/20 rounded-2xl p-8 mb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Brain className="w-4 h-4" />
              New: AI Solutions 2026
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Comprehensive AI Solutions for
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Business Transformation</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Discover our cutting-edge AI solutions designed for 2026. From automation to intelligencetransform your business with comprehensive AI systems that deliver real results.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-blue-300">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">AI Automation</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <Brain className="w-4 h-4" />
                <span className="text-sm font-medium">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 text-green-300">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Business Intelligence</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/ai-solutions-2026-comprehensive"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Explore AI Solutions
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact"
                className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI 2026</h3>
                  <p className="text-sm text-gray-300">Next Generation</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <Star className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutions2026ComprehensivePromotionBanner;