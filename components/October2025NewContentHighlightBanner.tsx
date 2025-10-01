import React from 'react';

export default function October2025NewContentHighlightBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-sm border-y border-blue-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 mb-6 animate-pulse">
            <span className="text-blue-300 font-bold text-xl tracking-wider uppercase">
              🚀 NEW: October 2025 Enterprise AI Content
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Latest Production AI Insights & Best Practices
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            Fresh content covering platform engineering, prompt engineering, and real-world AI transformation success stories. 
            Based on proven enterprise deployments delivering billions in value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Platform Engineering Article */}
          <div className="group bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🏗️</div>
            <div className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Platform Engineering
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
              Enterprise AI Platform Engineering Guide
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Build production-ready AI infrastructure with 70% faster deployment, 85% better reliability, and 60% cost savings. 
              Complete roadmap from foundation to scale.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-500/10 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30">
                MLOps
              </span>
              <span className="bg-purple-500/10 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">
                Infrastructure
              </span>
              <span className="bg-cyan-500/10 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/30">
                Cost Optimization
              </span>
            </div>
            <div className="border-t border-blue-500/20 pt-6 mb-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">70%</div>
                  <div className="text-xs text-gray-400 uppercase">Faster Deploy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">85%</div>
                  <div className="text-xs text-gray-400 uppercase">Reliability</div>
                </div>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-oct-enterprise-ai-platform-engineering-guide"
              className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Read Full Guide →
            </a>
          </div>

          {/* Prompt Engineering Article */}
          <div className="group bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
            <div className="inline-block bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              LLM Engineering
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
              Practical Prompt Engineering for Enterprise
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Master advanced prompting techniques with 92% accuracy improvement, 65% fewer hallucinations, and $180K annual savings. 
              Production-grade patterns and code examples.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-500/10 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">
                LLMs
              </span>
              <span className="bg-pink-500/10 text-pink-300 text-xs px-3 py-1 rounded-full border border-pink-500/30">
                Prompt Engineering
              </span>
              <span className="bg-indigo-500/10 text-indigo-300 text-xs px-3 py-1 rounded-full border border-indigo-500/30">
                Best Practices
              </span>
            </div>
            <div className="border-t border-purple-500/20 pt-6 mb-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">92%</div>
                  <div className="text-xs text-gray-400 uppercase">Accuracy Boost</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-400">65%</div>
                  <div className="text-xs text-gray-400 uppercase">Fewer Errors</div>
                </div>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-oct-practical-prompt-engineering-enterprise"
              className="block w-full text-center bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Master Prompting →
            </a>
          </div>

          {/* Case Study */}
          <div className="group bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💰</div>
            <div className="inline-block bg-cyan-500/20 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Case Study
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
              Insurance AI: $20B Impact
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              How a Fortune 50 insurer automated claims processing with 85% faster processing, 94% fraud detection, 
              and 92% customer satisfaction. Complete transformation journey.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-cyan-500/10 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/30">
                Insurance
              </span>
              <span className="bg-blue-500/10 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30">
                Automation
              </span>
              <span className="bg-green-500/10 text-green-300 text-xs px-3 py-1 rounded-full border border-green-500/30">
                $20B Impact
              </span>
            </div>
            <div className="border-t border-cyan-500/20 pt-6 mb-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-400">$20B</div>
                  <div className="text-xs text-gray-400 uppercase">Annual Value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">3600%</div>
                  <div className="text-xs text-gray-400 uppercase">ROI</div>
                </div>
              </div>
            </div>
            <a 
              href="/case-studies/ai-2025-oct-global-insurance-ai-claims-automation-20-billion-success"
              className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              View Case Study →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your AI Operations?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Partner with Zion Tech Group to implement proven enterprise AI solutions. 
              Our experts have delivered billions in value for Fortune 500 companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Schedule Consultation
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                More Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
