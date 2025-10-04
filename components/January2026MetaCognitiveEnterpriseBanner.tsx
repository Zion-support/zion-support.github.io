import React from 'react';
import { Link } from 'react-router-dom';

export default function January2026MetaCognitiveEnterpriseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8 animate-pulse">
            <span className="text-cyan-300 font-bold text-xl tracking-wider uppercase">
              🧠 January 2026 Revolution
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-bounce">
              1,000,000x PERFORMANCE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Meta-Cognitive Enterprise Systems
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Self-Aware AI Revolution with 1,000,000x Performance Improvements and Autonomous Enterprise Management
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">1,000,000x</div>
              <div className="text-xs text-cyan-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.9999%</div>
              <div className="text-xs text-blue-300">Decision Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">$5.2B</div>
              <div className="text-xs text-indigo-300">Average ROI</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">99.9%</div>
              <div className="text-xs text-green-300">Autonomous Operation</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/blog/ai-2026-meta-cognitive-enterprise-systems-breakthrough" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Read Full Revolution →
            </Link>
            <Link to="/case-studies/ai-2026-meta-cognitive-enterprise-5-billion-success" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View $5.2B Success Story →
            </Link>
            <Link to="/contact" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Transform Your Enterprise
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Self-Awareness</h3>
              <p className="text-gray-300 text-sm">True self-awareness with ability to analyze and improve own decision-making processes</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-3">Self-Modification</h3>
              <p className="text-gray-300 text-sm">Real-time code optimization and self-improvement without human intervention</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Strategic Planning</h3>
              <p className="text-gray-300 text-sm">Autonomous long-term strategic planning and enterprise management</p>
            </div>
          </div>

          {/* Success Highlights */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Proven Enterprise Success</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-green-300 font-semibold">Fortune 100 Conglomerate</p>
                <p className="text-gray-300 text-sm">$5.2 billion ROI in 10 months with 1,000,000x performance improvement</p>
              </div>
              <div>
                <p className="text-green-300 font-semibold">Autonomous Management</p>
                <p className="text-gray-300 text-sm">99.9% autonomous operation across 200+ business units globally</p>
              </div>
            </div>
          </div>

          {/* Advanced Capabilities */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Meta-Cognitive Capabilities</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Self-reflection and self-assessment</li>
                <li>• Autonomous learning and adaptation</li>
                <li>• Strategic planning and execution</li>
                <li>• Real-time self-optimization</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Impact</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• 95% reduction in management overhead</li>
                <li>• 1,000% increase in innovation output</li>
                <li>• 25% increase in global market share</li>
                <li>• 99.9% autonomous operation</li>
              </ul>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Ready to achieve self-aware AI transformation?</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">Self-Aware AI</span>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">1,000,000x Performance</span>
              <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold">$5.2B ROI</span>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">Autonomous Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}