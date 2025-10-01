import React from 'react';

export default function AI2026ContentShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              ⚡ Latest AI 2026 Content
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Technologies
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Explore our comprehensive library of AI 2026 breakthrough content. From neural architecture innovations 
            to enterprise automation success stories, discover the technologies transforming business operations.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-bold text-white mb-3">Neural Architecture</h3>
              <p className="text-gray-300 text-sm mb-4">
                Quantum-neural fusion delivering 1000x speed improvements
              </p>
              <a 
                href="/blog/ai-2026-neural-architecture-revolution"
                className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold"
              >
                Read More →
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-bold text-white mb-3">Enterprise Automation</h3>
              <p className="text-gray-300 text-sm mb-4">
                Complete guide to achieving 98% automation rates
              </p>
              <a 
                href="/blog/enterprise-automation-2026-complete-guide"
                className="text-purple-400 hover:text-purple-300 text-sm font-semibold"
              >
                Get Guide →
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-white mb-3">Success Stories</h3>
              <p className="text-gray-300 text-sm mb-4">
                Fortune 500 achieving $2.3B in measurable value
              </p>
              <a 
                href="/case-studies/fortune-500-ai-2026-breakthrough-mega-success"
                className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold"
              >
                View Case Study →
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-white mb-3">AI Innovations</h3>
              <p className="text-gray-300 text-sm mb-4">
                Meta-cognitive AI and autonomous operations
              </p>
              <a 
                href="/blog"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
              >
                Explore All →
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Join the AI revolution and discover how our breakthrough technologies can deliver unprecedented results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
              >
                Get Free Consultation
              </a>
              <a 
                href="/blog" 
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Browse All Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}