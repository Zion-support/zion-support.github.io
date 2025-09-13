import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionalBanner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-8 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-1"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce">
              🚀 BREAKTHROUGH ANNOUNCEMENT - 2025
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Revolutionary AI 2025
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Breakthrough Content
              </span>
            </h2>
            <p className="text-lg md:text-xl text-purple-100 mb-6 max-w-2xl">
              Discover the most advanced AI innovations, quantum computing solutions, 
              and automation technologies delivering <span className="font-bold text-yellow-300">2,500-15,000% ROI</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/ai-2025-breakthrough-content-showcase"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Breakthroughs
              </Link>
              <Link 
                href="/quantum-computing-solutions-2025"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Quantum Solutions
              </Link>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            {/* AI Breakthrough Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                  🚀
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">AI Breakthroughs</h3>
                  <div className="text-purple-200 text-xs">REVOLUTIONARY</div>
                </div>
              </div>
              <p className="text-purple-100 text-xs mb-3">
                Latest AI innovations delivering 10,000% ROI through quantum-AI fusion.
              </p>
              <Link 
                href="/ai-2025-breakthrough-content-showcase"
                className="text-yellow-300 text-xs font-semibold hover:text-yellow-200 transition-colors"
              >
                Explore →
              </Link>
            </div>

            {/* Quantum Computing Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                  ⚛️
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Quantum Computing</h3>
                  <div className="text-purple-200 text-xs">BREAKTHROUGH</div>
                </div>
              </div>
              <p className="text-purple-100 text-xs mb-3">
                Quantum supremacy achieved with 15,000% ROI and 10,000x faster processing.
              </p>
              <Link 
                href="/quantum-computing-solutions-2025"
                className="text-yellow-300 text-xs font-semibold hover:text-yellow-200 transition-colors"
              >
                Discover →
              </Link>
            </div>

            {/* Automation Solutions Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                  🤖
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Automation Solutions</h3>
                  <div className="text-purple-200 text-xs">AUTONOMOUS</div>
                </div>
              </div>
              <p className="text-purple-100 text-xs mb-3">
                Revolutionary automation delivering 8,500% ROI and 99.9% efficiency.
              </p>
              <Link 
                href="/automation-solutions-2025"
                className="text-yellow-300 text-xs font-semibold hover:text-yellow-200 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Success Stories Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                  🏆
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Success Stories</h3>
                  <div className="text-purple-200 text-xs">PROVEN RESULTS</div>
                </div>
              </div>
              <p className="text-purple-100 text-xs mb-3">
                Real-world implementations with Fortune 500 companies achieving extraordinary ROI.
              </p>
              <Link 
                href="/case-studies"
                className="text-yellow-300 text-xs font-semibold hover:text-yellow-200 transition-colors"
              >
                View Cases →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">15,000%</div>
            <div className="text-purple-200 text-sm">Maximum ROI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">99.9%</div>
            <div className="text-purple-200 text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-purple-200 text-sm">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-purple-200 text-sm">AI Monitoring</div>
          </div>
        </div>
      </div>
    </div>
  );
}