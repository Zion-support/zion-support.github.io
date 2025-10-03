// import React from 'react';
import { Link } from 'react-router-dom';

const December2026NextGenAutonomousSystemsBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950 py-16 border-b border-indigo-500/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6 animate-pulse">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🚀 BREAKING: DECEMBER 2026 AUTONOMOUS SYSTEMS REVOLUTION
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Next-Generation Autonomous Systems
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
              99.99% Operational Autonomy • $2.7B Proven ROI • Fortune 500 Success
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              Revolutionary breakthrough in autonomous AI systems achieving unprecedented operational independence with proven enterprise-scale success across global Fortune 500 implementations.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 text-center">
              <div className="text-3xl font-extrabold text-indigo-400 mb-2">99.99%</div>
              <div className="text-sm text-indigo-300 font-semibold">Operational Autonomy</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">$2.7B</div>
              <div className="text-sm text-purple-300 font-semibold">Proven ROI</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 text-center">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">340%</div>
              <div className="text-sm text-blue-300 font-semibold">Return on Investment</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 text-center">
              <div className="text-3xl font-extrabold text-green-400 mb-2">156%</div>
              <div className="text-sm text-green-300 font-semibold">Productivity Increase</div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Self-Healing Infrastructure</h3>
              <p className="text-gray-300 mb-6 text-center">
                94% of operational issues resolved autonomously with predictive maintenance and intelligent resource allocation.
              </p>
              <div className="text-center">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  94% Auto-Resolution
                </span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum-Neural Fusion</h3>
              <p className="text-gray-300 mb-6 text-center">
                Advanced cognitive architecture combining quantum computing with neural networks for 50,000x processing efficiency.
              </p>
              <div className="text-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  50,000x Performance
                </span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Continuous Learning</h3>
              <p className="text-gray-300 mb-6 text-center">
                Systems that continuously evolve and improve through reinforcement learning and cross-domain knowledge transfer.
              </p>
              <div className="text-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Self-Improving AI
                </span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/blog/ai-2026-december-next-generation-autonomous-systems"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Read Technical Breakthrough →
              </Link>
              <Link to="/case-studies/ai-2026-december-autonomous-systems-2-7-billion-success"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                View $2.7B Success Story →
              </Link>
              <Link to="/services/autonomous-systems-implementation"
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Get Implementation Guide
              </Link>
            </div>
          </div>

          {/* Success Highlights */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                🏆 Fortune 500 Proven Success
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-extrabold text-green-400 mb-2">$847M</div>
                  <div className="text-green-300 text-sm">Annual Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-green-400 mb-2">99.97%</div>
                  <div className="text-green-300 text-sm">Uptime Achievement</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-green-400 mb-2">Zero</div>
                  <div className="text-green-300 text-sm">Safety Incidents</div>
                </div>
              </div>
              <p className="text-green-200 mt-4 text-sm">
                Real results from Fortune 500 global conglomerate with 500,000+ employees across 340 facilities worldwide
              </p>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              🚀 18-Month Transformation Timeline
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-6 border border-indigo-500/30">
                  <div className="text-2xl mb-4">📋</div>
                  <h4 className="text-lg font-bold text-white mb-2">Phase 1: Foundation</h4>
                  <p className="text-gray-300 text-sm mb-4">Months 1-6</p>
                  <p className="text-gray-400 text-xs">Pilot programs across 12 business units with core infrastructure deployment</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
                  <div className="text-2xl mb-4">⚡</div>
                  <h4 className="text-lg font-bold text-white mb-2">Phase 2: Scale</h4>
                  <p className="text-gray-300 text-sm mb-4">Months 7-12</p>
                  <p className="text-gray-400 text-xs">Enterprise-wide deployment across all 47 business units with integration</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30">
                  <div className="text-2xl mb-4">🎯</div>
                  <h4 className="text-lg font-bold text-white mb-2">Phase 3: Optimization</h4>
                  <p className="text-gray-300 text-sm mb-4">Months 13-18</p>
                  <p className="text-gray-400 text-xs">Advanced capabilities and 99.99% operational autonomy achievement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 mb-6">
              Ready to achieve 99.99% operational autonomy and $2.7B in value creation?
            </p>
            <Link to="/contact"
              className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-500 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 text-lg"
            >
              Start Your Autonomous Transformation →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default December2026NextGenAutonomousSystemsBanner;