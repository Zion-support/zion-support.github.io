import React from 'react';

export default function October2025NewTechInsightsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-sm border-y border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/30 to-pink-500/30 border-2 border-indigo-400/50 mb-6 animate-pulse">
            <span className="text-indigo-300 font-extrabold text-xl tracking-wider uppercase">
              🚀 FRESH INSIGHTS - OCTOBER 1, 2025 - JUST PUBLISHED! 🚀
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest Enterprise AI Strategies & Technologies
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-10">
            Master zero trust security, intelligent Kubernetes auto-scaling, and strategic talent development. 
            Learn from Fortune 500 success stories achieving $48M+ savings and 10x productivity gains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Zero Trust Security Article */}
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-red-400/40 hover:border-red-400/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/30">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-3">Zero Trust Security AI</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Achieve 97% threat detection accuracy with AI-powered continuous verification, behavioral analytics, 
              and autonomous incident response. $48M annual savings.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">97% Accuracy</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">82% Faster Response</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">$48M Savings</span>
            </div>
            <a 
              href="/blog/ai-2025-october-zero-trust-security-architecture"
              className="inline-block w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-400 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-red-500/50"
            >
              Master Zero Trust →
            </a>
          </div>

          {/* Kubernetes Auto-Scaling Article */}
          <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-blue-400/40 hover:border-blue-400/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-3">Kubernetes AI Auto-Scale</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Cut infrastructure costs by 73% with predictive auto-scaling. ML models forecast demand 30 minutes 
              ahead, achieving 99.99% uptime and 10x traffic spike handling.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">73% Cost Cut</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">99.99% Uptime</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">10x Spikes</span>
            </div>
            <a 
              href="/blog/ai-2025-october-kubernetes-intelligent-auto-scaling"
              className="inline-block w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/50"
            >
              Optimize Infrastructure →
            </a>
          </div>

          {/* AI Talent Development Article */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-400/40 hover:border-purple-400/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-3">AI Talent Strategy</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Build world-class AI teams through strategic upskilling. Achieve 10x productivity gains, 65% 
              hiring cost reduction, and 91% retention through internal development.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">10x Productivity</span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full">65% Cost Cut</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">91% Retention</span>
            </div>
            <a 
              href="/blog/ai-2025-october-enterprise-talent-ai-transformation"
              className="inline-block w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-purple-500/50"
            >
              Develop Your Team →
            </a>
          </div>
        </div>

        {/* Additional Context Section */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              🌟 Why These Insights Matter Now
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              As enterprises accelerate AI adoption in late 2025, three critical challenges emerge: securing AI systems 
              from sophisticated threats, managing explosive infrastructure costs, and building the talent needed to execute. 
              These guides provide battle-tested strategies from Fortune 500 implementations.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-red-500/10 rounded-lg p-4">
                <div className="text-red-400 font-bold mb-2">Security First</div>
                <div className="text-gray-400">AI systems are prime targets. Zero trust protects your most valuable assets.</div>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-4">
                <div className="text-blue-400 font-bold mb-2">Cost Control</div>
                <div className="text-gray-400">AI infrastructure costs spiral quickly. Intelligent automation delivers 73% savings.</div>
              </div>
              <div className="bg-purple-500/10 rounded-lg p-4">
                <div className="text-purple-400 font-bold mb-2">Talent Gap</div>
                <div className="text-gray-400">External hiring is expensive. Build internal capability for sustainable advantage.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
