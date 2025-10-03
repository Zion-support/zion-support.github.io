// import React from 'react';

const January2026FreshContentShowcaseBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-blue-900/40 backdrop-blur-lg border-b border-indigo-500/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6 animate-pulse">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🚀 FRESH CONTENT JUST PUBLISHED - JANUARY 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary AI Content Now Live
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the latest breakthroughs in autonomous AI agents, quantum business intelligence, 
            and Fortune 500 transformation success stories that are reshaping the future of enterprise AI.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Autonomous AI Agents */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">Next-Generation Autonomous AI Agents</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary autonomous AI agents delivering 95% automation rates, $127M cost savings, 
              and breakthrough enterprise capabilities that transform business operations.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-sm">95% Automation</span>
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">$127M Savings</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">99.7% Accuracy</span>
            </div>
            <a 
              href="/blog/ai-2026-next-generation-autonomous-ai-agents-enterprise-breakthrough"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Read Full Article →
            </a>
          </div>

          {/* Quantum Business Intelligence */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Business Intelligence Revolution</h3>
            <p className="text-gray-300 mb-6">
              Quantum-enhanced business intelligence delivering 1000x faster analytics, 99.9% accuracy, 
              and driving a $500B market transformation in enterprise decision-making.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">1000x Faster</span>
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-sm">99.9% Accuracy</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">$500B Market</span>
            </div>
            <a 
              href="/blog/ai-2026-quantum-enhanced-business-intelligence-revolution"
              className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Explore Now →
            </a>
          </div>

          {/* Fortune 500 Success Story */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4">$500B Fortune 500 Transformation</h3>
            <p className="text-gray-300 mb-6">
              Complete case study of a Fortune 500 company's AI transformation achieving $500 billion 
              in value creation, 99.9% automation rates, and revolutionary business outcomes.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">$500B Value</span>
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">99.9% Automation</span>
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">Complete Case Study</span>
            </div>
            <a 
              href="/case-studies/fortune-500-ai-transformation-500-billion-success-story-2026"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View Case Study →
            </a>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 mb-12">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-indigo-400 mb-2">95%</div>
              <div className="text-sm text-indigo-300">Automation Rate</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-purple-400 mb-2">$627M</div>
              <div className="text-sm text-purple-300">Total Savings</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-blue-300">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">1000x</div>
              <div className="text-sm text-cyan-300">Processing Speed</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business with Revolutionary AI?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the AI revolution and discover how these breakthrough technologies can deliver 
            unprecedented value to your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Get Started Today
            </a>
            <a 
              href="/blog"
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Explore All Content →
            </a>
            <a 
              href="/case-studies"
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2026FreshContentShowcaseBanner;