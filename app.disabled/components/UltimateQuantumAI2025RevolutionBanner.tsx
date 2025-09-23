import React from 'react';
import Link from 'next/link';

const UltimateQuantumAI2025RevolutionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Quantum AI Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full px-6 py-3 mb-8 shadow-lg">
            <span className="text-lg font-bold text-white">⚛️ QUANTUM AI 2025 REVOLUTION</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              QUANTUM AI
            </span>
            <br />
            <span className="text-white">BREAKTHROUGH</span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
              IMPLEMENTATION
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Experience <span className="font-bold text-cyan-400">100,000x faster</span> processing power with our revolutionary 
            <span className="font-bold text-purple-400"> Quantum AI Implementation Roadmap</span>. 
            Achieve <span className="font-bold text-green-400">15,000% ROI</span> and dominate your industry with quantum computing.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2">Exponential Speed</h3>
              <p className="text-sm opacity-90">100,000x faster processing than classical computers</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-lg font-bold mb-2">Unbreakable Security</h3>
              <p className="text-sm opacity-90">Quantum encryption that's theoretically impossible to break</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2">Perfect Optimization</h3>
              <p className="text-sm opacity-90">Solve complex problems in seconds instead of years</p>
            </div>
          </div>

          {/* ROI Highlight */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-12 max-w-3xl mx-auto shadow-2xl">
            <div className="text-6xl font-black mb-4">15,000%</div>
            <div className="text-2xl font-bold mb-2">PROJECTED ROI</div>
            <div className="text-lg opacity-90">For Early Quantum AI Adopters</div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/resources/quantum-ai-2025-ultimate-breakthrough-implementation-roadmap"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Get Quantum AI Roadmap
            </Link>
            <Link
              href="/services/quantum-ai-consulting"
              className="bg-white bg-opacity-20 backdrop-blur-sm border-2 border-white border-opacity-30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-opacity-30"
            >
              💡 Schedule Consultation
            </Link>
          </div>

          {/* Industry Applications */}
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Revolutionary Applications Across Industries</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">💰</div>
                <div className="text-sm font-semibold">Finance</div>
                <div className="text-xs opacity-75">Portfolio Optimization</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-sm font-semibold">Healthcare</div>
                <div className="text-xs opacity-75">Drug Discovery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🏭</div>
                <div className="text-sm font-semibold">Manufacturing</div>
                <div className="text-xs opacity-75">Supply Chain</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm font-semibold">Energy</div>
                <div className="text-xs opacity-75">Grid Optimization</div>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-red-600 bg-opacity-20 border border-red-500 border-opacity-30 rounded-full px-6 py-3">
              <span className="text-red-400 font-bold text-sm">
                ⚠️ LIMITED TIME: Early Adopter Advantage Closing Soon
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating quantum particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1500"></div>
      </div>
    </section>
  );
};

export default UltimateQuantumAI2025RevolutionBanner;