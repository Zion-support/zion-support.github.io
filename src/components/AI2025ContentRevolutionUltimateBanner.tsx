'use client';

import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2025ContentRevolutionUltimateBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 20s linear infinite'
        }}></div>
      </div>

      {/* Floating AI Elements */}
      <div className="absolute top-20 left-20 text-8xl opacity-20 animate-bounce">🧠</div>
      <div className="absolute top-40 right-32 text-6xl opacity-30 animate-pulse">⚡</div>
      <div className="absolute bottom-32 left-1/4 text-7xl opacity-25 animate-ping">🚀</div>
      <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-bounce">💎</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Revolutionary Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full text-lg font-bold mb-8 shadow-lg animate-pulse">
            🔥 AI CONTENT REVOLUTION 2025
          </div>

          {/* Main Revolutionary Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            The Ultimate
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Content Revolution
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-4 opacity-90">
              Transforming Ideas Into Business Success
            </span>
          </h1>

          {/* Revolutionary Subheadline */}
          <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed opacity-95 font-light">
            Experience the most comprehensive collection of AI-powered content, case studies, 
            and revolutionary insights that are reshaping the future of business and technology.
          </p>

          {/* Revolutionary Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-black text-white mb-2">500%</div>
              <div className="text-sm font-semibold opacity-90">ROI Achieved</div>
              <div className="text-xs opacity-75 mt-1">Enterprise AI</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-black text-white mb-2">$100K</div>
              <div className="text-sm font-semibold opacity-90">ARR Generated</div>
              <div className="text-xs opacity-75 mt-1">Micro SaaS</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-black text-white mb-2">2025</div>
              <div className="text-sm font-semibold opacity-90">AI Predictions</div>
              <div className="text-xs opacity-75 mt-1">Future Trends</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-black text-white mb-2">1000%</div>
              <div className="text-sm font-semibold opacity-90">Efficiency Gain</div>
              <div className="text-xs opacity-75 mt-1">AI Automation</div>
            </div>
          </div>

          {/* Revolutionary CTA Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/case-studies"
                className="group bg-gradient-to-r from-pink-500 to-rose-600 text-white px-12 py-6 rounded-2xl font-black text-xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-pink-500/25"
              >
                <span className="flex items-center justify-center gap-3">
                  📊 Explore Case Studies
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
              <a
                href="/blog"
                className="group border-3 border-white text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm bg-white bg-opacity-10"
              >
                <span className="flex items-center justify-center gap-3">
                  📚 Read AI Trends
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="group bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  🚀 Get Started
                </span>
              </a>
              <a
                href="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  💬 Contact Us
                </span>
              </a>
            </div>
          </div>

          {/* Revolutionary Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-90">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl">
                ✅
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">Fortune 500</div>
                <div className="text-sm opacity-75">Proven Results</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-2xl">
                🏆
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">Industry Leading</div>
                <div className="text-sm opacity-75">AI Solutions</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                🚀
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">Future Ready</div>
                <div className="text-sm opacity-75">Cutting Edge</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default AI2025ContentRevolutionUltimateBanner;