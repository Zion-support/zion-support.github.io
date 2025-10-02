import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025QuantumNeuralMeshRevolutionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider animate-bounce">
            🚀 Just Published: October 1, 2025
          </span>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-purple-300 to-blue-300">
            Quantum-Enhanced Neural Mesh
          </span>
          <br />
          <span className="text-white">The Next AI Revolution</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-center mb-8 text-purple-100 max-w-4xl mx-auto">
          Revolutionary distributed AI architecture achieving 50,000x performance improvement with 
          89% energy reduction. Fortune 100 success: $12.7B annual value, 3,847% ROI.
        </p>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-yellow-300 mb-2">50,000x</div>
            <div className="text-sm text-purple-200">Performance Boost</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-green-300 mb-2">$12.7B</div>
            <div className="text-sm text-purple-200">Proven Annual Value</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-blue-300 mb-2">99.98%</div>
            <div className="text-sm text-purple-200">Accuracy Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-purple-300 mb-2">89%</div>
            <div className="text-sm text-purple-200">Energy Reduction</div>
          </div>
        </div>

        {/* Features highlights */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-10 border border-white/10 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Revolutionary Capabilities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <span className="text-3xl">⚛️</span>
              <div>
                <h4 className="font-bold mb-1">Quantum Processing</h4>
                <p className="text-sm text-purple-200">Leverages quantum entanglement for instant node communication</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-3xl">🧠</span>
              <div>
                <h4 className="font-bold mb-1">Neural Mesh Network</h4>
                <p className="text-sm text-purple-200">Adaptive topology optimizing for maximum efficiency</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-3xl">⚡</span>
              <div>
                <h4 className="font-bold mb-1">Sub-Nanosecond Latency</h4>
                <p className="text-sm text-purple-200">Real-time AI inference at quantum speeds</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            to="/blog/ai-2025-october-quantum-enhanced-neural-mesh-revolution"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 shadow-2xl"
          >
            📖 Read Complete Guide
          </Link>
          <Link
            to="/case-studies/fortune-50-quantum-neural-mesh-12-7b-success"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105"
          >
            💎 View $12.7B Success Story
          </Link>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105">
            🚀 Schedule Consultation
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 text-center">
          <p className="text-purple-200 text-sm mb-3">Trusted by Fortune 500 Leaders</p>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
            <span className="text-white font-semibold">Financial Services</span>
            <span className="text-white">•</span>
            <span className="text-white font-semibold">Healthcare</span>
            <span className="text-white">•</span>
            <span className="text-white font-semibold">Manufacturing</span>
            <span className="text-white">•</span>
            <span className="text-white font-semibold">Technology</span>
          </div>
        </div>
      </div>
    </div>
  );
}
