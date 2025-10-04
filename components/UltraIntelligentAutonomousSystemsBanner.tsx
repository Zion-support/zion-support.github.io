import React from 'react';
import { Link } from 'react-router-dom';

export default function UltraIntelligentAutonomousSystemsBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 mb-8 animate-pulse">
            <span className="text-purple-300 font-bold text-xl tracking-wider uppercase">
              🚀 ULTRA-INTELLIGENT AUTONOMOUS SYSTEMS
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent leading-tight">
            The $500B Enterprise Revolution
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-semibold max-w-4xl mx-auto">
            Achieve 1,000,000x Performance Improvements, 99.99% Automation, and $500B+ Value Generation with Ultra-Intelligent Autonomous Systems
          </p>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center">
            <div className="text-3xl font-extrabold text-purple-300 mb-2">1,000,000x</div>
            <div className="text-sm text-purple-200">Performance Boost</div>
          </div>
          <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 text-center">
            <div className="text-3xl font-extrabold text-indigo-300 mb-2">99.99%</div>
            <div className="text-sm text-indigo-200">Automation Rate</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 text-center">
            <div className="text-3xl font-extrabold text-blue-300 mb-2">$500B+</div>
            <div className="text-sm text-blue-200">Value Generation</div>
          </div>
          <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 text-center">
            <div className="text-3xl font-extrabold text-cyan-300 mb-2">0.001s</div>
            <div className="text-sm text-cyan-200">Response Time</div>
          </div>
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Ultra-Intelligent Neural Architecture</h3>
                <p className="text-purple-200">Revolutionary AI systems with quantum-enhanced processing</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Our Ultra-Intelligent Neural Architecture combines quantum computing principles, meta-cognitive learning, 
              and consensus intelligence to deliver unprecedented performance improvements and value generation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">Quantum-Enhanced</span>
              <span className="bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full text-sm">Meta-Cognitive</span>
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">Consensus AI</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Enterprise Integration</h3>
                <p className="text-indigo-200">Seamless deployment across all business functions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Our Enterprise Integration Framework enables seamless deployment across financial services, 
              manufacturing, healthcare, and retail with zero downtime and perfect scalability.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full text-sm">Zero Downtime</span>
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">Perfect Scalability</span>
              <span className="bg-cyan-500/20 text-cyan-200 px-3 py-1 rounded-full text-sm">Universal Integration</span>
            </div>
          </div>
        </div>
        
        {/* Success Stories */}
        <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 mb-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Proven Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-green-400 mb-2">$50B</div>
              <div className="text-lg text-gray-300 mb-2">Manufacturing Savings</div>
              <div className="text-sm text-gray-400">Fortune 500 automotive manufacturer</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-400 mb-2">$25B</div>
              <div className="text-lg text-gray-300 mb-2">Trading Revenue</div>
              <div className="text-sm text-gray-400">Global financial institution</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-purple-400 mb-2">99.8%</div>
              <div className="text-lg text-gray-300 mb-2">Quality Improvement</div>
              <div className="text-sm text-gray-400">Zero-defect manufacturing</div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/blog/ai-2026-ultra-intelligent-autonomous-systems-breakthrough"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough →
            </Link>
            <Link to="/case-studies/ai-2026-ultra-intelligent-autonomous-systems-500-billion-success"
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              View $500B Success Story →
            </Link>
            <Link to="/contact"
              className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
          
          <p className="text-gray-300 text-lg">
            Join the Fortune 500 companies already achieving unprecedented success with Ultra-Intelligent Autonomous Systems
          </p>
        </div>
      </div>
    </section>
  );
}