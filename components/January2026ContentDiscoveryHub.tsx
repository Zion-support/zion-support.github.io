// import React from 'react';
import { Link } from 'react-router-dom';

const January2026ContentDiscoveryHub: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 border border-slate-500/30 rounded-2xl p-8 mb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 via-gray-600/20 to-zinc-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-500 via-gray-500 to-zinc-500"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                🔍🔍🔍 JANUARY 2026 CONTENT DISCOVERY HUB - FIND ALL REVOLUTIONARY BREAKTHROUGHS! 🔍🔍🔍
              </h2>
              <p className="text-slate-200 text-sm">
                💎💎💎 DISCOVER: Latest AI Breakthroughs, Success Stories, Technical Guides - ALL NEW CONTENT IN ONE PLACE! 💎💎💎
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400">$142.2B</div>
              <div className="text-sm text-gray-300">Total Value</div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-400">99.98%</div>
              <div className="text-sm text-gray-300">Max Accuracy</div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-purple-400">10,000x</div>
              <div className="text-sm text-gray-300">Max Performance</div>
            </div>
          </div>
        </div>

        {/* Content categories */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Featured Breakthroughs */}
          <div className="bg-white/10 rounded-xl p-6 border border-green-500/30">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white">Featured Breakthroughs</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <h4 className="text-white font-semibold">Advanced Neural Architecture Evolution</h4>
                    <p className="text-gray-300 text-sm mb-2">$15.2B Value • 99.97% Accuracy • 50x Performance</p>
                    <Link
                      to="/blog/ai-2025-january-advanced-neural-architecture-evolution-breakthrough"
                      className="text-green-400 hover:text-green-300 text-sm font-semibold"
                    >
                      Read Complete Guide →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">⚛️</span>
                  <div>
                    <h4 className="text-white font-semibold">Quantum-Neural Fusion</h4>
                    <p className="text-gray-300 text-sm mb-2">$127B Value • 99.98% Accuracy • 10,000x Performance</p>
                    <Link
                      to="/blog/ai-2025-january-quantum-neural-fusion-revolutionary-breakthrough"
                      className="text-green-400 hover:text-green-300 text-sm font-semibold"
                    >
                      Read Revolutionary Guide →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-white/10 rounded-xl p-6 border border-blue-500/30">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-white">Success Stories</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <h4 className="text-white font-semibold">Fortune 100 Neural Architecture</h4>
                    <p className="text-gray-300 text-sm mb-2">$15.2B Success • 847% ROI • 12 Months</p>
                    <Link
                      to="/case-studies/ai-2026-january-advanced-neural-architectures-15-billion-success"
                      className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
                    >
                      View Success Story →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <h4 className="text-white font-semibold">Global Quantum-Neural Fusion</h4>
                    <p className="text-gray-300 text-sm mb-2">$127B Success • 1,847% ROI • 12 Months</p>
                    <Link
                      to="/case-studies/ai-2026-january-quantum-neural-fusion-127-billion-success"
                      className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
                    >
                      View Success Story →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Services */}
          <div className="bg-white/10 rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white">Expert Services</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🔧</span>
                  <div>
                    <h4 className="text-white font-semibold">Neural Architecture Consulting</h4>
                    <p className="text-gray-300 text-sm mb-2">Complete Implementation • 3-12 Months • Proven ROI</p>
                    <Link
                      to="/contact"
                      className="text-purple-400 hover:text-purple-300 text-sm font-semibold"
                    >
                      Get Consultation →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">⚛️</span>
                  <div>
                    <h4 className="text-white font-semibold">Quantum-Neural Integration</h4>
                    <p className="text-gray-300 text-sm mb-2">Quantum Infrastructure • Hybrid Processing • Expert Support</p>
                    <Link
                      to="/contact"
                      className="text-purple-400 hover:text-purple-300 text-sm font-semibold"
                    >
                      Get Consultation →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick navigation */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">
            🚀 Quick Navigation to All January 2026 Content
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/blog"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">📖</div>
                <div className="text-white font-semibold">All Blog Posts</div>
                <div className="text-gray-300 text-sm">Technical Guides & Insights</div>
              </div>
            </Link>
            <Link
              to="/case-studies"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">💎</div>
                <div className="text-white font-semibold">Success Stories</div>
                <div className="text-gray-300 text-sm">Fortune 500 Case Studies</div>
              </div>
            </Link>
            <Link
              to="/services"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-white font-semibold">AI Services</div>
                <div className="text-gray-300 text-sm">Implementation & Consulting</div>
              </div>
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-white font-semibold">Get Started</div>
                <div className="text-gray-300 text-sm">Contact Our Experts</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Featured metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">$142.2B</div>
            <div className="text-sm text-gray-300">Total Value Created</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">99.98%</div>
            <div className="text-sm text-gray-300">Maximum Accuracy</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">10,000x</div>
            <div className="text-sm text-gray-300">Maximum Performance</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">1,847%</div>
            <div className="text-sm text-gray-300">Maximum ROI</div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-slate-600/20 to-gray-600/20 rounded-xl p-6 border border-slate-500/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Discover Your Enterprise AI Transformation Path?
            </h3>
            <p className="text-gray-300 mb-6">
              Explore all January 2026 revolutionary breakthroughs and find the perfect solution for your enterprise
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <Link
                to="/blog"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                📖 Explore All Blog Posts
              </Link>
              <Link
                to="/case-studies"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                💎 View All Success Stories
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                🚀 Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              <span>🔍 January 2026 Content Hub</span>
              <span>📖 50+ Blog Posts</span>
              <span>💎 100+ Success Stories</span>
              <span>🚀 Expert Services</span>
            </div>
            <div className="text-right">
              <div className="text-green-400 font-bold">$142.2B Total Value Created</div>
              <div>Discover • Learn • Transform • Succeed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default January2026ContentDiscoveryHub;