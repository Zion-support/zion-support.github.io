import React from 'react';
import { Link } from 'react-router-dom';

export default function January2026AutonomousGovernanceBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase animate-pulse">
              🚀 January 2026: Autonomous AI Governance Revolution
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            $5.2B Fortune 500 Success Story
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover how autonomous AI governance delivered <span className="text-indigo-400 font-bold">99.7% compliance rates</span>, 
            <span className="text-purple-400 font-bold"> zero regulatory violations</span>, and 
            <span className="text-blue-400 font-bold"> $5.2 billion in measurable value</span> across 47 countries.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">99.7%</div>
              <div className="text-xs text-indigo-300">Compliance Rate</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">$5.2B</div>
              <div className="text-xs text-purple-300">Total Value</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">0%</div>
              <div className="text-xs text-blue-300">Violations</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">2.3min</div>
              <div className="text-xs text-green-300">Response Time</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">🛡️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous Governance</h3>
            <p className="text-gray-300 mb-6">
              Self-regulating AI systems that monitor and adjust their own behavior in real-time, 
              ensuring 99.7% compliance across all regulations.
            </p>
            <Link to="/blog/ai-2026-autonomous-ai-governance-revolution"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Read Article →
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4">$5.2B Success Story</h3>
            <p className="text-gray-300 mb-6">
              See how a Fortune 500 financial services leader achieved unprecedented results 
              with autonomous AI governance across 47 countries.
            </p>
            <Link to="/case-studies/ai-2026-autonomous-governance-mega-success"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              View Case Study →
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-Time Compliance</h3>
            <p className="text-gray-300 mb-6">
              Achieve 2.3-minute response times for compliance issues with predictive analytics 
              and automated risk mitigation.
            </p>
            <Link to="/services/ai-2026-autonomous-governance-solutions"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Get Solutions →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Achieve 99.7% Compliance with Autonomous AI Governance?
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Join the Fortune 500 leaders who have transformed their compliance operations with 
              autonomous AI governance. Get your free consultation and discover how to achieve 
              $5.2B+ in measurable value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Get Free Consultation
              </Link>
              <Link to="/blog/ai-2026-autonomous-ai-governance-revolution" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Read Full Article →
              </Link>
              <Link to="/case-studies/ai-2026-autonomous-governance-mega-success" 
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View $5.2B Success Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}