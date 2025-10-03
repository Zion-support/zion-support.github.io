// import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025AdaptiveIntelligenceFabricBanner() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-cyan-900 to-emerald-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
            🧠 Breakthrough Technology: October 2025
          </span>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight">
          <span className="text-white">Adaptive Intelligence Fabric</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300">
            Self-Evolving Enterprise AI
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-center mb-8 text-cyan-100 max-w-4xl mx-auto">
          AI that continuously learns and improves itself without human intervention. Fortune 50 manufacturer 
          achieves $4.2B annual value with 99.7% accuracy and zero model degradation.
        </p>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition">
            <div className="text-4xl font-bold text-cyan-300 mb-2">$4.2B</div>
            <div className="text-sm text-cyan-200">Annual Value</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition">
            <div className="text-4xl font-bold text-emerald-300 mb-2">99.7%</div>
            <div className="text-sm text-cyan-200">Predictive Accuracy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition">
            <div className="text-4xl font-bold text-indigo-300 mb-2">2,840%</div>
            <div className="text-sm text-cyan-200">3-Year ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition">
            <div className="text-4xl font-bold text-purple-300 mb-2">92%</div>
            <div className="text-sm text-cyan-200">Defect Reduction</div>
          </div>
        </div>

        {/* Key benefits */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-10 border border-white/10 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Core Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 bg-indigo-900/30 p-4 rounded-lg">
              <span className="text-3xl">🔄</span>
              <div>
                <h4 className="font-bold mb-2 text-cyan-300">Continuous Learning</h4>
                <p className="text-sm text-cyan-100">Automatically ingests new data and updates models in real-time without manual retraining</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-cyan-900/30 p-4 rounded-lg">
              <span className="text-3xl">🎯</span>
              <div>
                <h4 className="font-bold mb-2 text-emerald-300">Self-Optimization</h4>
                <p className="text-sm text-cyan-100">Monitors performance and automatically adjusts parameters to maximize efficiency</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-emerald-900/30 p-4 rounded-lg">
              <span className="text-3xl">🧬</span>
              <div>
                <h4 className="font-bold mb-2 text-indigo-300">Evolutionary Architecture</h4>
                <p className="text-sm text-cyan-100">Discovers novel neural architectures optimized for your specific business problems</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-purple-900/30 p-4 rounded-lg">
              <span className="text-3xl">📈</span>
              <div>
                <h4 className="font-bold mb-2 text-purple-300">Zero Degradation</h4>
                <p className="text-sm text-cyan-100">Models improve over time instead of degrading, delivering exponential value</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success story highlight */}
        <div className="bg-gradient-to-r from-emerald-800/50 to-cyan-800/50 backdrop-blur-sm rounded-xl p-6 mb-10 border border-emerald-400/30 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <span className="text-5xl">🏭</span>
            <div>
              <h3 className="text-xl font-bold mb-2 text-emerald-300">Fortune 50 Manufacturing Success</h3>
              <p className="text-cyan-100 mb-3">
                Global manufacturer transformed 520 production lines across 84 facilities with adaptive AI, 
                achieving industry-leading quality and efficiency metrics.
              </p>
              <div className="flex gap-6 text-sm">
                <span className="font-semibold">✓ 92% defect reduction</span>
                <span className="font-semibold">✓ 87% downtime elimination</span>
                <span className="font-semibold">✓ $4.2B annual savings</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            to="/blog/ai-2025-october-adaptive-intelligence-fabric-revolution"
            className="bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-500 hover:to-emerald-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 shadow-2xl"
          >
            📚 Read Technical Guide
          </Link>
          <Link
            to="/case-studies/fortune-50-adaptive-intelligence-fabric-4-2b-success"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105"
          >
            🏆 View $4.2B Case Study
          </Link>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105">
            💼 Request Demo
          </button>
        </div>

        {/* Industry applications */}
        <div className="mt-10 text-center">
          <p className="text-cyan-200 text-sm mb-3 font-semibold">Proven Across Industries</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">🏭 Manufacturing</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">🏦 Financial Services</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">🛒 Retail</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">🏥 Healthcare</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">⚡ Energy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
