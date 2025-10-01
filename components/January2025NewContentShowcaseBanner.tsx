import React from 'react';

const January2025NewContentShowcaseBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-sm border-b border-blue-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW JANUARY 2025 CONTENT JUST PUBLISHED!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Revolutionary AI Enterprise Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the latest breakthroughs in AI automation, quantum optimization, and autonomous systems. 
            Proven frameworks delivering $2.7B+ in enterprise value with 99.8% uptime and 95% automation rates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Advanced AI Automation */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">Advanced AI Automation</h3>
            <p className="text-gray-300 mb-6">
              Master the complete framework for enterprise automation transformation. Achieve 95% operational 
              automation with proven strategies delivering $2.3B in cost savings.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-blue-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>95% Operational Automation Rate</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-purple-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>87% Cost Reduction</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-300">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>$2.3B in Proven Savings</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-january-advanced-ai-automation-enterprise-transformation"
              className="inline-block w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Read Complete Guide →
            </a>
          </div>

          {/* Quantum AI Optimization */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum AI Optimization</h3>
            <p className="text-gray-300 mb-6">
              Explore the next frontier of enterprise intelligence with quantum-enhanced algorithms. 
              Achieve 10,000x performance improvements solving previously intractable problems.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-purple-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>10,000x Performance Gains</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-indigo-300">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                <span>94% Supply Chain Optimization</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-cyan-300">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span>$340M in Combined Savings</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-january-quantum-ai-optimization-revolution"
              className="inline-block w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Explore Quantum Revolution →
            </a>
          </div>

          {/* Autonomous AI Systems */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous AI Systems</h3>
            <p className="text-gray-300 mb-6">
              Master self-managing intelligence systems that operate independently. Achieve 99.8% uptime 
              with autonomous decision-making delivering $2.7B in enterprise value.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-indigo-300">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                <span>99.8% System Uptime</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-300">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>95% Automation Rate</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-orange-300">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>$2.7B in Proven Value</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-january-autonomous-ai-systems-enterprise-mastery"
              className="inline-block w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Master Autonomous Systems →
            </a>
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/blog"
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-blue-300 hover:text-blue-200 font-semibold py-3 px-6 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
            >
              View All AI Insights →
            </a>
            <a
              href="/case-studies"
              className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:to-indigo-500/30 text-purple-300 hover:text-purple-200 font-semibold py-3 px-6 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
            >
              Explore Success Stories →
            </a>
            <a
              href="/services"
              className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 hover:from-indigo-500/30 hover:to-blue-500/30 text-indigo-300 hover:text-indigo-200 font-semibold py-3 px-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-300"
            >
              AI Implementation Services →
            </a>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎯 Ready to Transform Your Enterprise with AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Join leading Fortune 500 companies achieving unprecedented results with our proven AI frameworks. 
              Get your free consultation and discover how to implement these breakthrough technologies in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50"
              >
                Get Free Consultation →
              </a>
              <a
                href="/case-studies"
                className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025NewContentShowcaseBanner;