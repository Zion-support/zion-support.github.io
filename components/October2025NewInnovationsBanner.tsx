import React from 'react';

export default function October2025NewInnovationsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-sm border-y border-blue-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/50 mb-6 animate-pulse">
            <span className="text-blue-300 font-bold text-xl tracking-wider uppercase">
              🚀 NEW OCTOBER 2025 INNOVATIONS — JUST PUBLISHED!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Enterprise AI Breakthroughs: Productivity, Sustainability & Compliance
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8">
            Three groundbreaking articles revealing how leading enterprises are achieving 10x productivity gains, 
            carbon neutrality with higher profits, and automated compliance excellence in October 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-10">
          {/* Article 1: Productivity Revolution */}
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/40 hover:border-blue-400/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
            <div className="text-6xl mb-6">🚀</div>
            <div className="mb-4">
              <span className="px-3 py-1 bg-blue-400/30 text-blue-300 text-xs rounded-full border border-blue-400/50">
                Productivity & AI
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI Productivity Revolution: 10x Your Team Output
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Discover proven strategies for achieving 10x productivity gains with AI-powered workflows. 
              Real results: 12x code delivery, 87% faster decisions, $420M annual savings.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">Intelligent Automation</span>
              <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded">AI Decision Support</span>
              <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded">Workflow Optimization</span>
            </div>
            <a 
              href="/blog/ai-2025-october-productivity-revolution"
              className="inline-block w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/50"
            >
              Read Full Article →
            </a>
          </div>

          {/* Article 2: Sustainable Business */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-8 border border-green-500/40 hover:border-green-400/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30">
            <div className="text-6xl mb-6">🌱</div>
            <div className="mb-4">
              <span className="px-3 py-1 bg-green-400/30 text-green-300 text-xs rounded-full border border-green-400/50">
                Sustainability & Green Tech
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI-Driven Sustainable Business Transformation
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Achieve carbon neutrality while boosting profitability. Real success: 67% emissions reduction, 
              $240M saved annually, 890% ROI. Sustainability meets profitability.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded">Carbon Neutral</span>
              <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded">Green Tech</span>
              <span className="text-xs px-2 py-1 bg-teal-500/20 text-teal-300 rounded">ESG Automation</span>
            </div>
            <a 
              href="/blog/ai-2025-october-sustainable-business-transformation"
              className="inline-block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-green-500/50"
            >
              Explore Green Tech →
            </a>
          </div>

          {/* Article 3: Regulatory Compliance */}
          <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/40 hover:border-indigo-400/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30">
            <div className="text-6xl mb-6">🛡️</div>
            <div className="mb-4">
              <span className="px-3 py-1 bg-indigo-400/30 text-indigo-300 text-xs rounded-full border border-indigo-400/50">
                Compliance & Governance
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI Regulatory Compliance Automation
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Navigate complex regulations with 99.7% accuracy. Real impact: $310M saved, 78% cost reduction, 
              zero major violations. Automated compliance excellence.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded">Risk Management</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">Auto Monitoring</span>
              <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded">AI Governance</span>
            </div>
            <a 
              href="/blog/ai-2025-october-regulatory-compliance-automation"
              className="inline-block w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-indigo-500/50"
            >
              Discover Solutions →
            </a>
          </div>
        </div>

        {/* Key Metrics Section */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-center text-white mb-6">
              Combined Impact Across All Three Innovations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-blue-400 mb-2">10x</div>
                <div className="text-sm text-gray-300">Productivity Gains</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-green-400 mb-2">67%</div>
                <div className="text-sm text-gray-300">Carbon Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-indigo-400 mb-2">99.7%</div>
                <div className="text-sm text-gray-300">Compliance Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-purple-400 mb-2">$970M</div>
                <div className="text-sm text-gray-300">Total Annual Savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your enterprise with these innovations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Schedule Free Consultation
            </a>
            <a 
              href="/case-studies" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50"
            >
              View Success Stories
            </a>
            <a 
              href="/services" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore All Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
