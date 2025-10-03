// import React from 'react';
import { Link } from 'react-router-dom';

const January2026RevolutionaryAutonomousIntelligenceBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6 animate-pulse">
              <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
                🚀 January 2026 Revolutionary Breakthrough
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Revolutionary Autonomous Intelligence
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
              $2.7B Enterprise Value Creation • 99.9% Operational Autonomy • Zero Human Intervention Required
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">$2.7B</div>
              <div className="text-sm text-purple-300">Value Creation</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 text-center">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-blue-300">Autonomy</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 text-center">
              <div className="text-3xl font-extrabold text-green-400 mb-2">1000x</div>
              <div className="text-sm text-green-300">Speed</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 text-center">
              <div className="text-3xl font-extrabold text-orange-400 mb-2">Zero</div>
              <div className="text-sm text-orange-300">Human Intervention</div>
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Blog Post */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Revolutionary Breakthrough Guide</h3>
                  <p className="text-sm text-purple-300">Complete Technical Analysis</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Discover the revolutionary autonomous intelligence breakthrough that achieved $2.7B in enterprise value, 
                99.9% operational autonomy, and complete business transformation. Learn about quantum-enhanced neural 
                networks, consciousness-level decision making, and self-learning adaptive systems.
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>📖 15 min read</span>
                  <span>•</span>
                  <span>🚀 Revolutionary</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  BREAKTHROUGH
                </div>
              </div>
              
              <Link to="/blog/ai-2026-january-revolutionary-autonomous-intelligence-breakthrough"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Read Breakthrough Guide
                <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">$2.7B Success Story</h3>
                  <p className="text-sm text-green-300">Fortune 100 Case Study</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                See how a Fortune 100 global conglomerate achieved $2.7B in value creation through revolutionary 
                autonomous intelligence implementation. 99.9% operational autonomy, 1000x decision-making speed, 
                and zero human intervention required for day-to-day operations.
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>📊 Fortune 100</span>
                  <span>•</span>
                  <span>💰 $2.7B ROI</span>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  SUCCESS STORY
                </div>
              </div>
              
              <Link to="/case-studies/ai-2026-january-autonomous-intelligence-2-7-billion-success"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
              >
                View Success Story
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Enterprise?
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Join the Fortune 100 companies already achieving revolutionary results with autonomous intelligence. 
                Limited implementation slots available for early 2026.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
                >
                  Get Started Today
                </Link>
                <Link to="/services/autonomous-intelligence"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              ⚡ Implementation slots limited • 🚀 Early 2026 deployment available • 💎 Revolutionary breakthrough technology
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2026RevolutionaryAutonomousIntelligenceBanner;