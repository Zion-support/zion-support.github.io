import React from 'react';

export default function EnterpriseAutomationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-900/50 via-blue-900/50 to-cyan-900/50 border-b border-green-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Main Announcement */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
            <span className="text-green-400 font-bold text-xl tracking-wider uppercase">
              🤖 Enterprise Automation Revolution 2026
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            98% Automation Rate • $50M+ Annual Savings • 300% ROI
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionary AI automation platform delivering unprecedented results: 
            <span className="text-green-400 font-bold"> 98% automation rates</span>, 
            <span className="text-blue-400 font-bold"> $50M+ annual savings</span>, and 
            <span className="text-purple-400 font-bold"> 300% ROI</span> across all enterprise operations.
          </p>

          {/* Performance Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-green-500/20 px-6 py-3 rounded-full border border-green-500/30">
              <span className="text-green-300 font-semibold">🤖 98% Automation Rate</span>
            </div>
            <div className="bg-blue-500/20 px-6 py-3 rounded-full border border-blue-500/30">
              <span className="text-blue-300 font-semibold">💰 $50M+ Annual Savings</span>
            </div>
            <div className="bg-purple-500/20 px-6 py-3 rounded-full border border-purple-500/30">
              <span className="text-purple-300 font-semibold">📈 300% ROI</span>
            </div>
          </div>

          {/* Automation Domains */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-green-500/20">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Business Operations</h3>
              <p className="text-gray-400 text-sm">Complete workflow automation with intelligent decision-making</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-lg font-bold text-blue-400 mb-2">IT Infrastructure</h3>
              <p className="text-gray-400 text-sm">Self-healing systems with predictive maintenance</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Financial Operations</h3>
              <p className="text-gray-400 text-sm">Automated budgeting, forecasting, and risk management</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog/ai-2026-enterprise-automation-revolution" 
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Explore Automation Revolution →
            </a>
            <a 
              href="/contact" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Free Assessment
            </a>
          </div>

          {/* Success Metrics */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-400 mb-1">98%</div>
              <div className="text-gray-400 text-sm">Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-blue-400 mb-1">$50M+</div>
              <div className="text-gray-400 text-sm">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-purple-400 mb-1">300%</div>
              <div className="text-gray-400 text-sm">ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-orange-400 mb-1">18mo</div>
              <div className="text-gray-400 text-sm">Payback Period</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}