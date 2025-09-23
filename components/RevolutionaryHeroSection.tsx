import React from 'react';
import Link from 'next/link';

export default function RevolutionaryHeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative z-10 flex items-center min-h-screen px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-bounce">
              🚀 BREAKTHROUGH ANNOUNCEMENT - AI 2025
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Revolutionary AI
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300">
                2025 Breakthroughs
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              Experience the most advanced AI innovations delivering 
              <span className="font-bold text-yellow-300"> 15,000% ROI</span>
              <span className="font-bold text-green-300"> 99.9% accuracy</span>and 
              <span className="font-bold text-cyan-300"> quantum supremacy</span> 
              through revolutionary technologies.
            </p>
            
            {/* ROI Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">15,000%</div>
                <div className="text-blue-200 text-sm">Maximum ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-green-300 mb-1">99.9%</div>
                <div className="text-blue-200 text-sm">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-cyan-300 mb-1">10,000x</div>
                <div className="text-blue-200 text-sm">Faster Processing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-purple-300 mb-1">500+</div>
                <div className="text-blue-200 text-sm">Enterprise Clients</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/ai-2025-breakthrough-content-showcase"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Explore Breakthroughs
              </Link>
              <Link 
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* AI Breakthrough Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                  🚀
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">AI Breakthroughs</h3>
                  <div className="text-purple-200 text-sm">REVOLUTIONARY</div>
                </div>
              </div>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                Latest AI innovations delivering 10,000% ROI through quantum-AI fusion and neural interfaces.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-yellow-300 font-bold text-lg">10,000% ROI</div>
                <Link 
                  href="/ai-2025-breakthrough-content-showcase"
                  className="text-yellow-300 text-sm font-semibold hover:text-yellow-200 transition-colors"
                >
                  Explore →
                </Link>
              </div>
            </div>

            {/* Quantum Computing Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                  ⚛️
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Quantum Computing</h3>
                  <div className="text-purple-200 text-sm">BREAKTHROUGH</div>
                </div>
              </div>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                Quantum supremacy achieved with 15,000% ROI and 10,000x faster processing capabilities.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-cyan-300 font-bold text-lg">15,000% ROI</div>
                <Link 
                  href="/quantum-computing-solutions-2025"
                  className="text-cyan-300 text-sm font-semibold hover:text-cyan-200 transition-colors"
                >
                  Discover →
                </Link>
              </div>
            </div>

            {/* Automation Solutions Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                  🤖
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Automation Solutions</h3>
                  <div className="text-purple-200 text-sm">AUTONOMOUS</div>
                </div>
              </div>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                Revolutionary automation delivering 8,500% ROI and 99.9% efficiency through AI-powered workflows.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-green-300 font-bold text-lg">8,500% ROI</div>
                <Link 
                  href="/automation-solutions-2025"
                  className="text-green-300 text-sm font-semibold hover:text-green-200 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Success Stories Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                  🏆
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Success Stories</h3>
                  <div className="text-purple-200 text-sm">PROVEN RESULTS</div>
                </div>
              </div>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                Real-world implementations with Fortune 500 companies achieving extraordinary transformation results.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-orange-300 font-bold text-lg">Fortune 500</div>
                <Link 
                  href="/case-studies"
                  className="text-orange-300 text-sm font-semibold hover:text-orange-200 transition-colors"
                >
                  View Cases →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 right-10 w-5 h-5 bg-indigo-400 rounded-full animate-pulse delay-1500"></div>
    </section>
  );
}