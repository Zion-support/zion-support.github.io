// import React from 'react';

export default function September2025PracticalAIBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 border-b border-blue-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              📚 NEW: September 2025 Enterprise AI Insights
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Practical AI Solutions for Real Business Impact
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore our latest content on enterprise AI deployment strategies, responsible AI frameworks, 
            and proven success stories that deliver measurable results.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Deployment</h3>
              <p className="text-gray-300 mb-4">
                Best practices for deploying AI systems in enterprise environments with proven strategies.
              </p>
              <a 
                href="/blog/ai-2025-enterprise-deployment-best-practices"
                className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300"
              >
                Read Guide →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-white mb-3">Responsible AI</h3>
              <p className="text-gray-300 mb-4">
                Framework for building ethical, fair, and transparent AI systems that earn user trust.
              </p>
              <a 
                href="/blog/ai-2025-responsible-ai-frameworks"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">47% Revenue Growth</h3>
              <p className="text-gray-300 mb-4">
                Retail success story: AI personalization delivering 156% conversion rate improvement.
              </p>
              <a 
                href="/case-studies/retail-ai-personalization-success-2025"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300"
              >
                View Case Study →
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Get Expert Consultation
            </a>
            <a 
              href="/blog" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore All Content
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
