import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025NewContentMegaShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 py-20">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full text-yellow-300 text-sm font-bold mb-6 animate-pulse">
            🎉 MEGA LAUNCH: OCTOBER 1, 2025 - THREE REVOLUTIONARY AI BREAKTHROUGHS 🎉
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
            The Future of Enterprise AI is Here
          </h2>
          <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
            Three groundbreaking technologies delivering $27.3B in combined enterprise value • 
            99.97%+ accuracy across all platforms • ROI of 2,840% to 4,200%
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-3">Autonomous Cognitive Intelligence</h3>
            <div className="space-y-2 mb-6 text-gray-300">
              <p>✓ 99.98% Accuracy</p>
              <p>✓ $8.4B Value Created</p>
              <p>✓ 2,840% ROI</p>
              <p>✓ Zero-Downtime Operations</p>
            </div>
            <Link
              to="/blog/ai-2025-october-autonomous-cognitive-intelligence-platform"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
            >
              Learn More →
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-3">Quantum ML Acceleration</h3>
            <div className="space-y-2 mb-6 text-gray-300">
              <p>✓ 50,000x Faster Training</p>
              <p>✓ 99.97% Accuracy</p>
              <p>✓ 95% Cost Reduction</p>
              <p>✓ $12.7B Market Impact</p>
            </div>
            <Link
              to="/blog/ai-2025-october-quantum-ml-acceleration-breakthrough"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Explore Quantum ML →
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold text-white mb-3">Edge AI Mesh Networks</h3>
            <div className="space-y-2 mb-6 text-gray-300">
              <p>✓ &lt;1ms Latency</p>
              <p>✓ 99.99% Uptime</p>
              <p>✓ $6.2B Success Story</p>
              <p>✓ 4,200% ROI</p>
            </div>
            <Link
              to="/blog/ai-2025-october-edge-ai-mesh-networks-revolution"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold"
            >
              Discover Edge AI →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link
              to="/contact"
              className="px-10 py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white text-lg font-bold rounded-xl hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Schedule Enterprise Demo
            </Link>
            <div className="text-sm text-gray-400">
              <p>🎯 Fortune 500 proven • 💎 $27.3B combined value • 🚀 Transform your business today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
