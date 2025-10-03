import React from 'react';

const October2025NewContentHighlightBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900/40 via-teal-900/40 to-cyan-900/40 backdrop-blur-md border-y border-emerald-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 mb-6 animate-pulse">
            <span className="text-emerald-300 font-bold text-xl tracking-wider uppercase">
              🚀 NEW OCTOBER 2025 CONTENT LIVE NOW!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
            Latest AI Innovation Breakthroughs
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-10">
            Discover cutting-edge insights on Reinforcement Learning for Industrial Automation, 
            Enterprise LLM Security, and real-world success stories delivering billions in value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Reinforcement Learning Article */}
          <div className="group bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Reinforcement Learning Revolution
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover how RL is transforming industrial automation with autonomous decision-making, 
              achieving 67% efficiency gains and 92% defect reduction.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-emerald-300">
                <span className="font-semibold">✓</span>
                <span>47% faster cycle times</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-300">
                <span className="font-semibold">✓</span>
                <span>$24.5B value creation case study</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-300">
                <span className="font-semibold">✓</span>
                <span>Production-ready implementation guide</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-oct-reinforcement-learning-industrial-automation"
              className="inline-block w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Read Full Article →
            </a>
          </div>

          {/* LLM Security Guide */}
          <div className="group bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-8 border border-teal-500/20 hover:border-teal-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              LLM Security Enterprise Guide
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Comprehensive protection strategies for Large Language Models: prompt injection defense, 
              data protection, and compliance frameworks for 2025.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-teal-300">
                <span className="font-semibold">✓</span>
                <span>Defense-in-depth architecture</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-teal-300">
                <span className="font-semibold">✓</span>
                <span>Production-ready code examples</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-teal-300">
                <span className="font-semibold">✓</span>
                <span>Compliance framework checklists</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-oct-llm-security-enterprise-guide"
              className="inline-block w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
            >
              Explore Security Guide →
            </a>
          </div>

          {/* Success Story */}
          <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💎</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              $24.5B Manufacturing Success
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Fortune 100 manufacturer achieves unprecedented transformation with RL-powered 
              automation across 47 global facilities.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-cyan-300">
                <span className="font-semibold">✓</span>
                <span>$24.5B total value created</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-cyan-300">
                <span className="font-semibold">✓</span>
                <span>67% efficiency improvement</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-cyan-300">
                <span className="font-semibold">✓</span>
                <span>6.2 month payback period</span>
              </div>
            </div>
            <a 
              href="/case-studies/manufacturing-rl-automation-success-2025"
              className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              View Case Study →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your enterprise with cutting-edge AI solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Schedule Consultation
            </a>
            <a 
              href="/blog" 
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore All Content
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025NewContentHighlightBanner;
