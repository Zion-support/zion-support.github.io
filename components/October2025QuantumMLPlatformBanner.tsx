// import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025QuantumMLPlatformBanner() {
  return (
    <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900 border-t-4 border-violet-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400 mb-6">
            <span className="text-violet-300 text-sm font-bold animate-pulse">
              ⚛️ QUANTUM BREAKTHROUGH: OCTOBER 1, 2025 - JUST RELEASED
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Quantum Machine Learning Platform
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent mb-6">
            50,000x Faster Than Classical AI Systems
          </h3>

          {/* Value Props */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-violet-400/30">
              <div className="text-4xl font-bold text-violet-300 mb-2">$47.2B</div>
              <div className="text-white text-sm">Enterprise Value</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-violet-400/30">
              <div className="text-4xl font-bold text-purple-300 mb-2">50,000x</div>
              <div className="text-white text-sm">Faster Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-violet-400/30">
              <div className="text-4xl font-bold text-fuchsia-300 mb-2">99.98%</div>
              <div className="text-white text-sm">Model Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-violet-400/30">
              <div className="text-4xl font-bold text-violet-400 mb-2">8,470%</div>
              <div className="text-white text-sm">ROI First Year</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Harness quantum computing power for machine learning at unprecedented scale. 
            Solve complex optimization problems in seconds, not days. Process trillion-parameter 
            models with breakthrough efficiency. The future of AI is quantum.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 my-12 text-left">
            <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg p-6 border border-violet-400/30">
              <div className="text-2xl mb-3">⚛️</div>
              <h4 className="text-lg font-bold text-white mb-2">Quantum Acceleration</h4>
              <p className="text-gray-300 text-sm">
                50,000x faster training with quantum-classical hybrid architecture
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-lg p-6 border border-purple-400/30">
              <div className="text-2xl mb-3">🧬</div>
              <h4 className="text-lg font-bold text-white mb-2">Complex Problem Solving</h4>
              <p className="text-gray-300 text-sm">
                Tackle optimization challenges impossible for classical computers
              </p>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 rounded-lg p-6 border border-fuchsia-400/30">
              <div className="text-2xl mb-3">🔬</div>
              <h4 className="text-lg font-bold text-white mb-2">Enterprise-Ready</h4>
              <p className="text-gray-300 text-sm">
                Cloud-based quantum access with no specialized hardware required
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog/ai-2025-oct-quantum-machine-learning-platform"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold rounded-lg hover:from-violet-600 hover:to-purple-600 transform hover:scale-105 transition-all shadow-lg"
            >
              📚 Technical Deep Dive
            </Link>
            <Link
              to="/case-studies/ai-2025-oct-quantum-ml-47-2-billion-breakthrough"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 border-2 border-violet-400 transform hover:scale-105 transition-all"
            >
              💎 $47.2B Case Study
            </Link>
            <Link
              to="/services/quantum-ml-platform"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-bold rounded-lg hover:from-fuchsia-600 hover:to-violet-600 transform hover:scale-105 transition-all shadow-lg"
            >
              🚀 Start Trial
            </Link>
          </div>

          {/* Trust Signal */}
          <div className="mt-12 pt-8 border-t border-violet-400/30">
            <p className="text-violet-200 text-sm mb-4">
              ⭐ Trusted by leading research institutions and Fortune 100 companies
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-xs">
              <span>✓ Quantum-Safe Security</span>
              <span>✓ Cloud-Native</span>
              <span>✓ Auto-Scaling</span>
              <span>✓ Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
