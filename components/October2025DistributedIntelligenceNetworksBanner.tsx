// import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025DistributedIntelligenceNetworksBanner() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/2 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Announcement badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider animate-pulse shadow-2xl">
            🌐 BREAKING: October 1, 2025 - Distributed Intelligence Networks Revolution! 🌐
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300">
            Distributed Intelligence Networks
          </span>
          <br />
          <span className="text-white">Global AI Collaboration at Scale</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-center mb-8 text-cyan-200 max-w-4xl mx-auto">
          Revolutionary real-time AI collaboration across 50,000+ global nodes achieving unprecedented 
          collective intelligence and 99.99% uptime
        </p>

        {/* Main content card */}
        <div className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-400/30 mb-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-yellow-300">$9.4B</div>
              <div className="text-sm text-cyan-200">Proven Annual Value</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-green-300">4,287%</div>
              <div className="text-sm text-cyan-200">ROI</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-cyan-300">50,000+</div>
              <div className="text-sm text-cyan-200">Global AI Nodes</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-cyan-300 mb-3">Key Capabilities</h3>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Real-time distributed AI inference across 50,000+ nodes</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>99.99% uptime with automatic failover and recovery</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Collective intelligence aggregation in milliseconds</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Global consensus protocols for distributed decisions</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-cyan-300 mb-3">Business Impact</h3>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>94% reduction in AI infrastructure costs</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>10,000x faster than centralized AI systems</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>97% improvement in AI accuracy through collaboration</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Fortune 100 global deployment success</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            <Link
              to="/blog/ai-2025-october-distributed-intelligence-networks"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg text-center transition"
            >
              Read Complete Guide
            </Link>
            <Link
              to="/case-studies/fortune-100-distributed-intelligence-9-4b-success"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 px-8 rounded-lg text-center transition"
            >
              View Case Study
            </Link>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center">
          <p className="text-cyan-300 font-semibold mb-3">
            Deployed by Fortune 100 Organizations Worldwide
          </p>
          <div className="flex justify-center gap-6 flex-wrap text-sm">
            <span className="bg-white/5 px-4 py-2 rounded-lg">🌍 Global Technology Leaders</span>
            <span className="bg-white/5 px-4 py-2 rounded-lg">🏦 Financial Services</span>
            <span className="bg-white/5 px-4 py-2 rounded-lg">🚀 Aerospace & Defense</span>
          </div>
        </div>
      </div>
    </div>
  );
}
