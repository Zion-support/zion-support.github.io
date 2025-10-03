// import React from 'react';

export default function October1st2025NewContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-sm border-y border-cyan-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400/50 mb-6 animate-pulse">
            <span className="text-cyan-300 font-extrabold text-xl tracking-wider uppercase">
              🎉 NEW CONTENT PUBLISHED - OCTOBER 1, 2025! 🎉
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Latest AI Innovation Insights Now Live
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-10">
            Discover cutting-edge strategies for Edge AI deployment and Generative AI cost optimization. 
            Learn from real Fortune 100 success stories achieving $86M+ savings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Edge AI Article */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-cyan-400/40 hover:border-cyan-400/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-3">Edge AI Revolution</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Process 50M+ events per second with sub-millisecond latency. Achieve 89% cost reduction 
              through distributed intelligence.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">Sub-0.5ms Latency</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">50M Events/Sec</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">89% Cost Cut</span>
            </div>
            <a 
              href="/blog/ai-2025-october-1-edge-ai-real-time-analytics-revolution"
              className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-cyan-500/50"
            >
              Read Article →
            </a>
          </div>

          {/* LLM Cost Optimization Article */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-400/40 hover:border-purple-400/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-white mb-3">GenAI Cost Mastery</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Reduce LLM costs by 94% while improving quality. Master intelligent caching, prompt 
              optimization, and model selection.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">94% Cost Reduction</span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full">97% Cache Hit</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">12.5x ROI</span>
            </div>
            <a 
              href="/blog/ai-2025-october-1-generative-ai-cost-optimization-mastery"
              className="inline-block w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-purple-500/50"
            >
              Learn Strategies →
            </a>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-green-400/40 hover:border-green-400/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/30">
            <div className="text-5xl mb-4">🏭</div>
            <h3 className="text-2xl font-bold text-white mb-3">$86M Success Story</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Fortune 100 manufacturer deploys edge AI across 120 factories. 97% defect detection, 
              92% less downtime, 23.5x ROI.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">$86M Savings</span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">97% Detection</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">23.5x ROI</span>
            </div>
            <a 
              href="/case-studies/manufacturing-edge-ai-success-2025"
              className="inline-block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-green-500/50"
            >
              View Case Study →
            </a>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your AI operations with proven strategies?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Schedule Free Consultation
            </a>
            <a 
              href="/blog" 
              className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/20 font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore All Insights
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
