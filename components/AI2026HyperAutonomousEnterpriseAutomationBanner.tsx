import React from 'react';
import Link from 'next/link';

export default function AI2026HyperAutonomousEnterpriseAutomationBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6 animate-pulse">
            <span className="text-blue-400 font-bold text-lg tracking-wider uppercase">
              🤖 Hyper-Autonomous Breakthrough
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            AI 2026 Hyper-Autonomous Enterprise Automation
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            99.9% Automation Rate, 100,000x Performance, and $300B+ Value Generation
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.9%</div>
              <div className="text-xs text-blue-300">Automation Rate</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">100,000x</div>
              <div className="text-xs text-cyan-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">$300B+</div>
              <div className="text-xs text-green-300">Value Generated</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">0.01s</div>
              <div className="text-xs text-orange-300">Response Time</div>
            </div>
          </div>
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">🤖 Autonomous Operations</h3>
            <p className="text-gray-300 mb-4">
              Our hyper-autonomous system achieves 99.9% automation across all enterprise operations, 
              from customer service to supply chain management, eliminating human intervention.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• 99.9% end-to-end automation</li>
              <li>• Self-healing operations</li>
              <li>• Autonomous decision making</li>
              <li>• Zero human intervention required</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 rounded-xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">💰 Proven Results</h3>
            <p className="text-gray-300 mb-4">
              Fortune 500 companies have already achieved $300B+ in value generation through 
              our hyper-autonomous enterprise automation breakthrough technology.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• $300B+ total value generated</li>
              <li>• 50 Fortune 500 implementations</li>
              <li>• 75x average ROI achieved</li>
              <li>• 99.9% operational efficiency</li>
            </ul>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/blog/ai-2026-hyper-autonomous-enterprise-automation-breakthrough"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Discover Automation Details
            </Link>
            <Link 
              href="/case-studies/ai-2026-hyper-autonomous-enterprise-automation-300-billion-success"
              className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              View $300B Success Story →
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm">
            Join the Fortune 500 companies already achieving 99.9% automation with our revolutionary AI technology
          </p>
        </div>
      </div>
    </section>
  );
}