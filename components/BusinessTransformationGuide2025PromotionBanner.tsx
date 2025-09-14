import React from 'react';
import Link from 'next/link';

const BusinessTransformationGuide2025PromotionBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-green-400 to-blue-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg animate-bounce">
            📈 NEW: BUSINESS TRANSFORMATION GUIDE 2025
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Complete Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Transformation Roadmap
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business for the digital age with our comprehensive guide. 
            Master AI implementationdigital strategyand change management to achieve unprecedented growth.
          </p>

          {/* Framework Phases */}
          <div className="grid grid-cols-5 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-xl mb-1">🎯</div>
              <div className="text-xs font-semibold">Assessment</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-xl mb-1">📋</div>
              <div className="text-xs font-semibold">Strategy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-xl mb-1">🚀</div>
              <div className="text-xs font-semibold">Implementation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-xl mb-1">📊</div>
              <div className="text-xs font-semibold">Optimization</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-xl mb-1">🎉</div>
              <div className="text-xs font-semibold">Scale</div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-4 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">300%</div>
              <div className="text-sm opacity-80">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">80%</div>
              <div className="text-sm opacity-80">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">10x</div>
              <div className="text-sm opacity-80">Productivity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">95%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/business-transformation-guide-2025"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-green-600 hover:to-blue-600 transition-all duration-300 text-lg shadow-2xl transform hover:scale-105 inline-flex items-center justify-center"
            >
              📈 Start Transformation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-xl font-bold hover:bg-green-400 hover:text-black transition-all duration-300 text-lg inline-flex items-center justify-center"
            >
              📞 Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>

          {/* Free Resources */}
          <div className="mt-6 text-sm opacity-80">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full font-semibold mr-2">
              FREE RESOURCES
            </span>
            Download our comprehensive transformation toolkit and templates
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 left-8 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-8 right-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
    </div>
  );
};

export default BusinessTransformationGuide2025PromotionBanner;