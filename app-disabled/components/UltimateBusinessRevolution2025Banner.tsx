import React from 'react';
import Link from 'next/link';

const UltimateBusinessRevolution2025Banner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Business Revolution Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full px-6 py-3 mb-8 shadow-lg">
            <span className="text-lg font-bold text-white">🚀 AI 2025 ULTIMATE BUSINESS REVOLUTION</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              ULTIMATE
            </span>
            <br />
            <span className="text-white">BUSINESS</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              REVOLUTION
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Transform your business with our <span className="font-bold text-emerald-400">Complete AI Implementation Guide</span>. 
            Join industry leaders achieving <span className="font-bold text-yellow-400">3,000% ROI</span> through 
            comprehensive AI strategies and revolutionary automation.
          </p>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-black text-emerald-400 mb-2">3,000%</div>
              <div className="text-sm font-semibold">Average ROI</div>
              <div className="text-xs opacity-75">Documented Results</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-black text-teal-400 mb-2">87%</div>
              <div className="text-sm font-semibold">Fortune 500</div>
              <div className="text-xs opacity-75">AI Initiatives</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-black text-cyan-400 mb-2">15x</div>
              <div className="text-sm font-semibold">Faster Decisions</div>
              <div className="text-xs opacity-75">AI-Powered</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-black text-yellow-400 mb-2">$1.3T</div>
              <div className="text-sm font-semibold">Market Size</div>
              <div className="text-xs opacity-75">By 2030</div>
            </div>
          </div>

          {/* Implementation Phases */}
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Complete Implementation Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="text-lg font-bold mb-2">Foundation Building</h4>
                <p className="text-sm opacity-90">Strategic assessment, infrastructure setup, and pilot planning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="text-lg font-bold mb-2">Pilot Implementation</h4>
                <p className="text-sm opacity-90">Quick wins, automation deployment, and success metrics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="text-lg font-bold mb-2">Scale & Optimize</h4>
                <p className="text-sm opacity-90">Enterprise deployment, advanced AI, and innovation acceleration</p>
              </div>
            </div>
          </div>

          {/* Revolutionary Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-bold mb-2">Generative AI</h3>
              <p className="text-sm opacity-90 mb-3">400-800% ROI</p>
              <div className="text-xs opacity-75">Content creation, code generation, strategic planning</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-bold mb-2">Autonomous BI</h3>
              <p className="text-sm opacity-90 mb-3">600-1,200% ROI</p>
              <div className="text-xs opacity-75">Real-time decisions, predictive modeling, automation</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum AI</h3>
              <p className="text-sm opacity-90 mb-3">1,000-2,500% ROI</p>
              <div className="text-xs opacity-75">Optimization, cryptography, simulation</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
              <p className="text-sm opacity-90 mb-3">800-1,500% ROI</p>
              <div className="text-xs opacity-75">Productivity enhancement, training acceleration</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/resources/ai-2025-ultimate-business-revolution-complete-implementation-guide"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📖 Get Complete Guide
            </Link>
            <Link
              href="/services/ai-transformation-consulting"
              className="bg-white bg-opacity-20 backdrop-blur-sm border-2 border-white border-opacity-30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-opacity-30"
            >
              🎯 Start Transformation
            </Link>
            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📊 View Success Stories
            </Link>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Proven Results Across Industries</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black mb-2">65%</div>
                <div className="text-sm font-semibold">Cost Reduction</div>
                <div className="text-xs opacity-90">Manufacturing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2">80%</div>
                <div className="text-sm font-semibold">Process Automation</div>
                <div className="text-xs opacity-90">Financial Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2">50%</div>
                <div className="text-sm font-semibold">Wait Time Reduction</div>
                <div className="text-xs opacity-90">Healthcare</div>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-red-600 bg-opacity-20 border border-red-500 border-opacity-30 rounded-full px-6 py-3">
              <span className="text-red-400 font-bold text-sm">
                ⚡ ACT NOW: AI Revolution Window Closing Fast
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating success indicators */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-teal-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-1500"></div>
      </div>
    </section>
  );
};

export default UltimateBusinessRevolution2025Banner;