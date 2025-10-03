import React from 'react';

const March2026ContentShowcaseBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-violet-900/50 via-purple-900/50 to-fuchsia-900/50 border-b border-violet-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 mb-6">
            <span className="text-violet-400 font-bold text-xl tracking-wider uppercase">
              📚 March 2026: Revolutionary Content Now Live!
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Latest AI Breakthroughs & Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-violet-500/30">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">Autonomous AI Agents</h3>
              <p className="text-gray-300 text-sm mb-4">
                Self-managing business operations with 99% autonomy and $5B+ value creation
              </p>
              <a
                href="/blog/ai-2026-autonomous-ai-agents-enterprise-revolution"
                className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Read More →
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-white mb-3">Multimodal AI</h3>
              <p className="text-gray-300 text-sm mb-4">
                Vision + Language + Action unification achieving 98% automation and $3.8B value
              </p>
              <a
                href="/blog/ai-2026-multimodal-enterprise-automation-breakthrough"
                className="inline-block bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-400 hover:to-fuchsia-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Explore →
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-fuchsia-500/30">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">$3.8B Success Story</h3>
              <p className="text-gray-300 text-sm mb-4">
                Global technology conglomerate achieves unprecedented value through multimodal automation
              </p>
              <a
                href="/case-studies/ai-2026-multimodal-automation-3-8-billion-success"
                className="inline-block bg-gradient-to-r from-fuchsia-500 to-pink-600 hover:from-fuchsia-400 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Case Study →
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/services/multimodal-ai-automation-consulting"
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-violet-500/50"
            >
              Get Consulting Services →
            </a>
            <a
              href="/blog"
              className="bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-400 hover:to-fuchsia-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              View All Content →
            </a>
            <a
              href="/case-studies"
              className="border-2 border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default March2026ContentShowcaseBanner;