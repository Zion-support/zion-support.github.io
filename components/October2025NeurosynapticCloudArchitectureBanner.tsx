import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025NeurosynapticCloudArchitectureBanner() {
  return (
    <div className="bg-gradient-to-br from-violet-900 via-fuchsia-900 to-pink-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-fuchsia-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Announcement badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider animate-pulse shadow-2xl">
            🧠 REVOLUTIONARY: October 1, 2025 - Brain-Inspired Cloud Computing! 🧠
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300">
            Neurosynaptic Cloud Architecture
          </span>
          <br />
          <span className="text-white">Computing That Thinks Like the Human Brain</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-center mb-8 text-fuchsia-200 max-w-4xl mx-auto">
          Revolutionary brain-inspired cloud infrastructure achieving 100,000x efficiency with 
          neuromorphic processing and adaptive learning
        </p>

        {/* Main content card */}
        <div className="bg-gradient-to-br from-violet-800/40 to-fuchsia-800/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-fuchsia-400/30 mb-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-yellow-300">$15.7B</div>
              <div className="text-sm text-fuchsia-200">Annual Value</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-green-300">5,942%</div>
              <div className="text-sm text-fuchsia-200">ROI</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-pink-300">100,000x</div>
              <div className="text-sm text-fuchsia-200">Efficiency Gain</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-fuchsia-300 mb-3">Breakthrough Features</h3>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Neuromorphic processing mimicking brain synapses</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Sub-millisecond adaptive learning and inference</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>96% reduction in energy consumption</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Self-optimizing neural pathways</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-fuchsia-300 mb-3">Enterprise Results</h3>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>99.97% accuracy on complex cognitive tasks</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>100,000x faster than traditional cloud computing</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Real-time decision making at neuromorphic speed</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Fortune 50 technology transformation</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            <Link
              to="/blog/ai-2025-october-neurosynaptic-cloud-architecture"
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-8 rounded-lg text-center transition"
            >
              Read Technical Guide
            </Link>
            <Link
              to="/case-studies/fortune-50-neurosynaptic-cloud-15-7b-transformation"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 px-8 rounded-lg text-center transition"
            >
              Success Story
            </Link>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition">
              Request Consultation
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center">
          <p className="text-fuchsia-300 font-semibold mb-3">
            Pioneered by Leading Global Innovators
          </p>
          <div className="flex justify-center gap-6 flex-wrap text-sm">
            <span className="bg-white/5 px-4 py-2 rounded-lg">🚀 Fortune 50 Technology</span>
            <span className="bg-white/5 px-4 py-2 rounded-lg">🧬 Life Sciences Leaders</span>
            <span className="bg-white/5 px-4 py-2 rounded-lg">🤖 AI Research Institutes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
