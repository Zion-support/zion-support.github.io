// import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, TrendingUp, ArrowRight, Network, Activity } from 'lucide-react';

const October2025QuantumEdgeComputingBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* NEW Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-lg animate-pulse">
            <Zap className="w-5 h-5 mr-2" />
            🚀 BREAKING: October 1, 2025 - Quantum Edge Computing Revolution! 🚀
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <div>
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              Quantum-Enhanced Edge Computing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mt-2">
                $18.4B Value Creation
              </span>
            </h2>

            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              Fortune 50 automotive leader achieves breakthrough results with quantum edge AI: <span className="font-bold text-cyan-400">47,000+ edge devices</span>, <span className="font-bold text-cyan-400">sub-10ms latency</span>, and <span className="font-bold text-cyan-400">2,400% ROI</span> in just 3 years.
            </p>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">Latency</span>
                </div>
                <div className="text-3xl font-bold text-white">&lt;10ms</div>
                <div className="text-xs text-gray-400 mt-1">Response Time</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">ROI</span>
                </div>
                <div className="text-3xl font-bold text-emerald-400">2,400%</div>
                <div className="text-xs text-gray-400 mt-1">Over 3 Years</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <Network className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">Scale</span>
                </div>
                <div className="text-3xl font-bold text-blue-400">47,000+</div>
                <div className="text-xs text-gray-400 mt-1">Edge AI Devices</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <Activity className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">Accuracy</span>
                </div>
                <div className="text-3xl font-bold text-purple-400">99.99%</div>
                <div className="text-xs text-gray-400 mt-1">Quality Control</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/blog/ai-2025-oct-01-quantum-edge-computing-enterprise-transformation"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
              >
                Read Full Article
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies/ai-2025-oct-01-automotive-quantum-edge-success"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 text-white font-bold transition-all duration-300"
              >
                View Case Study
              </Link>
            </div>
          </div>

          {/* Right Column - Key Features */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Cpu className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white mb-2">Quantum-Enhanced Processing</h3>
                  <p className="text-gray-300">Advanced quantum algorithms for real-time optimization, pattern recognition, and decision-making at the edge.</p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-400">
                    <li>✓ 100x faster pattern recognition</li>
                    <li>✓ Real-time quantum optimization</li>
                    <li>✓ Quantum-safe encryption</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Network className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise-Scale Deployment</h3>
                  <p className="text-gray-300">Proven architecture supporting 47,000+ edge devices across 340 global facilities with 99.99% uptime.</p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-400">
                    <li>✓ Kubernetes-based orchestration</li>
                    <li>✓ 5G private network integration</li>
                    <li>✓ Multi-access edge computing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white mb-2">Unprecedented Business Value</h3>
                  <p className="text-gray-300">$18.4B value creation through cost savings, efficiency gains, and new revenue streams.</p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-400">
                    <li>✓ $12.8B in cost savings</li>
                    <li>✓ $5.6B in revenue growth</li>
                    <li>✓ 18-month faster product launches</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl border border-cyan-400/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Edge Infrastructure?</h3>
              <p className="text-gray-300">Explore our quantum edge computing consulting services and start your journey today.</p>
            </div>
            <Link
              to="/services/ai-2025-october-quantum-edge-computing-services"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 whitespace-nowrap"
            >
              View Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025QuantumEdgeComputingBanner;
