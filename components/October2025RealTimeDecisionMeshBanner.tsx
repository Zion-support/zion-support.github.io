import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, TrendingUp, Shield, Sparkles } from 'lucide-react';

const October2025RealTimeDecisionMeshBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 px-6 my-12 rounded-3xl shadow-2xl">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full font-bold text-sm shadow-lg animate-bounce">
            <Sparkles className="w-5 h-5" />
            🚀 JUST PUBLISHED: OCTOBER 1, 2025 - REVOLUTIONARY BREAKTHROUGH! 🚀
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-5xl md:text-6xl font-black text-center mb-6 leading-tight">
          <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Real-Time Autonomous Decision Mesh
          </span>
        </h2>

        <p className="text-2xl md:text-3xl text-center mb-8 font-bold text-purple-200">
          Transform Enterprise Intelligence with Millisecond AI Decisions
        </p>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-purple-400 hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-8 h-8 text-yellow-400" />
              <div className="text-4xl font-black text-yellow-400">&lt;3ms</div>
            </div>
            <div className="text-sm font-semibold">Decision Speed</div>
            <div className="text-xs text-purple-200 mt-1">4,700% Faster</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-green-400 hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <div className="text-4xl font-black text-green-400">$14.2B</div>
            </div>
            <div className="text-sm font-semibold">Value Created</div>
            <div className="text-xs text-purple-200 mt-1">Fortune 50 Success</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-blue-400 hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Brain className="w-8 h-8 text-blue-400" />
              <div className="text-4xl font-black text-blue-400">99.94%</div>
            </div>
            <div className="text-sm font-semibold">AI Accuracy</div>
            <div className="text-xs text-purple-200 mt-1">Continuous Learning</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-pink-400 hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-8 h-8 text-pink-400" />
              <div className="text-4xl font-black text-pink-400">1,595%</div>
            </div>
            <div className="text-sm font-semibold">ROI Achieved</div>
            <div className="text-xs text-purple-200 mt-1">18 Months</div>
          </div>
        </div>

        {/* Features Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-lg rounded-xl p-5 border border-purple-400/30">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">⚡ Quantum-Inspired Engine</h3>
            <p className="text-sm text-gray-200">Explores 10^12 decision scenarios per second with revolutionary optimization algorithms</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-800/50 to-blue-800/50 backdrop-blur-lg rounded-xl p-5 border border-blue-400/30">
            <h3 className="text-xl font-bold mb-2 text-green-400">🧠 Neural Mesh Network</h3>
            <p className="text-sm text-gray-200">Self-organizing distributed intelligence handling 847 trillion decisions per day</p>
          </div>

          <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-lg rounded-xl p-5 border border-pink-400/30">
            <h3 className="text-xl font-bold mb-2 text-pink-400">🚀 Autonomous Learning</h3>
            <p className="text-sm text-gray-200">Continuously improves 0.3% weekly across 84,700+ specialized AI models</p>
          </div>
        </div>

        {/* Industry Results */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-6 mb-10 border-2 border-yellow-400/50">
          <h3 className="text-2xl font-bold text-center mb-4 text-yellow-400">
            🏆 Real-World Enterprise Results
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-black text-green-400">+340%</div>
              <div className="text-sm font-semibold mt-1">Manufacturing Efficiency</div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-400">$4.2B</div>
              <div className="text-sm font-semibold mt-1">Fraud Prevention Savings</div>
            </div>
            <div>
              <div className="text-3xl font-black text-purple-400">127K+</div>
              <div className="text-sm font-semibold mt-1">Lives Saved (Healthcare)</div>
            </div>
            <div>
              <div className="text-3xl font-black text-pink-400">4,700%</div>
              <div className="text-sm font-semibold mt-1">Retail Personalization ROI</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link 
            to="/blog/ai-2025-oct-01-real-time-autonomous-decision-mesh-revolution"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-gray-900 font-bold px-10 py-5 rounded-full text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all transform hover:scale-105"
          >
            <Brain className="w-6 h-6" />
            Read the Blog Post
            <Sparkles className="w-5 h-5 animate-pulse" />
          </Link>

          <Link 
            to="/case-studies/ai-2025-oct-01-global-enterprise-real-time-decision-mesh-14-2-billion-success"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold px-10 py-5 rounded-full text-lg shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105"
          >
            <TrendingUp className="w-6 h-6" />
            $14.2B Success Story
          </Link>

          <Link 
            to="/services/real-time-autonomous-decision-mesh-platform-2025"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold px-10 py-5 rounded-full text-lg shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            <Shield className="w-6 h-6" />
            Explore Platform
          </Link>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-10">
          <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text">
            ⚡ Transform Decisions. Transform Business. Transform the Future. ⚡
          </p>
          <p className="text-sm text-purple-300 mt-2 font-semibold">
            Join Fortune 50 enterprises achieving 1,595% ROI with autonomous AI decision-making
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025RealTimeDecisionMeshBanner;
