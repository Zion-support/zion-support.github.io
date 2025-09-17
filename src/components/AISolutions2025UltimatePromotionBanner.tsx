import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AISolutions2025UltimatePromotionBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg animate-bounce">
            🚀 NEW: AI SOLUTIONS 2025 ULTIMATE
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Technology Suite
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              Now Available
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive AI solutions suite. From intelligent automation 
            to predictive analyticsunlock unprecedented growth and efficiency.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🤖</div>
              <div className="text-sm font-semibold">AI Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">📊</div>
              <div className="text-sm font-semibold">Predictive Analytics</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">💬</div>
              <div className="text-sm font-semibold">AI Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-sm font-semibold">AI Security</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">300%</div>
              <div className="text-sm opacity-80">ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">80%</div>
              <div className="text-sm opacity-80">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">10x</div>
              <div className="text-sm opacity-80">Productivity</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ai-solutions-2025-ultimate"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-lg shadow-2xl transform hover:scale-105 inline-flex items-center justify-center"
            >
              🎯 Explore AI Solutions
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-xl font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 text-lg inline-flex items-center justify-center"
            >
              📞 Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>

          {/* Limited Time Offer */}
          <div className="mt-6 text-sm opacity-80">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold mr-2">
              LIMITED TIME
            </span>
            Get 30% off your first 3 months - Offer expires soon!
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 left-8 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-8 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
    </div>
  );
};

export default AISolutions2025UltimatePromotionBanner;