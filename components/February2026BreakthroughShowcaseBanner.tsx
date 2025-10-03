import React from 'react';

const February2026BreakthroughShowcaseBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-16">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-8 animate-pulse">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              🌟 BREAKTHROUGH SHOWCASE: February 2026
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Breakthroughs
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-semibold max-w-4xl mx-auto">
            Experience the future of enterprise AI with breakthrough technologies delivering unprecedented results
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">$150B+ Combined ROI</h3>
              <p className="text-gray-300 mb-6">
                Our latest breakthrough technologies have generated over $150 billion in combined ROI across enterprise implementations, 
                delivering unprecedented financial returns and operational excellence.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-emerald-400">$100B</div>
                  <div className="text-xs text-emerald-300">Quantum Intelligence</div>
                </div>
                <div className="bg-teal-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-teal-400">$50B</div>
                  <div className="text-xs text-teal-300">Autonomous Operations</div>
                </div>
              </div>
              <a 
                href="/case-studies"
                className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Explore Success Stories →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-teal-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">99.9%+ Accuracy</h3>
              <p className="text-gray-300 mb-6">
                Our breakthrough AI systems achieve 99.9%+ accuracy across all operations, delivering perfect decision-making, 
                flawless automation, and unprecedented operational efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-emerald-400">99.9%</div>
                  <div className="text-xs text-emerald-300">Decision Accuracy</div>
                </div>
                <div className="bg-teal-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-teal-400">99.95%</div>
                  <div className="text-xs text-teal-300">Automation Level</div>
                </div>
              </div>
              <a 
                href="/blog/ai-2026-next-generation-autonomous-systems-breakthrough"
                className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Read Breakthrough Article →
              </a>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Featured Breakthrough Technologies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🧠</div>
                <h4 className="text-lg font-bold text-emerald-400 mb-2">Quantum Intelligence</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Revolutionary quantum-enhanced business intelligence delivering perfect decision-making
                </p>
                <a 
                  href="/blog/ai-2026-quantum-enhanced-business-intelligence"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm"
                >
                  Learn More →
                </a>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-lg font-bold text-teal-400 mb-2">Autonomous Operations</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Self-managing manufacturing systems achieving perfect operational efficiency
                </p>
                <a 
                  href="/case-studies/ai-2026-autonomous-operations-50-billion-success"
                  className="text-teal-400 hover:text-teal-300 font-semibold text-sm"
                >
                  Learn More →
                </a>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔬</div>
                <h4 className="text-lg font-bold text-cyan-400 mb-2">Next-Gen Systems</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Revolutionary autonomous systems with 99.99% automation and $5B+ ROI
                </p>
                <a 
                  href="/blog/ai-2026-next-generation-autonomous-systems-breakthrough"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Get Started Today
            </a>
            <a 
              href="/blog" 
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
            >
              Explore All Articles →
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default February2026BreakthroughShowcaseBanner;