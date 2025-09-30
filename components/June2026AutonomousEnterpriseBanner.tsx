import React from 'react';

export default function June2026AutonomousEnterpriseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 border-b border-green-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
            <span className="text-green-400 font-bold text-xl tracking-wider uppercase">
              🚀 June 2026 Autonomous Enterprise Revolution
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Complete Business Automation
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            The world's first fully autonomous enterprise system that operates independently, 
            makes decisions, and delivers <span className="text-green-400 font-bold">$100B in measurable business value</span>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">100%</div>
              <div className="text-xs text-green-300">Automation Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">$100B</div>
              <div className="text-xs text-blue-300">Business Value</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">99.9%</div>
              <div className="text-xs text-purple-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">0</div>
              <div className="text-xs text-orange-300">Human Intervention</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/blog/ai-2026-june-autonomous-enterprise-revolution"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Explore Revolution →
            </a>
            <a
              href="/case-studies/autonomous-enterprise-success-story"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View Success Stories →
            </a>
            <a
              href="/contact"
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
            >
              Get Free Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}