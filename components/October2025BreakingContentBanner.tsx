import React from "react";

const October2025BreakingContentBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm border-y border-indigo-500/40">
      <div className="container mx-auto px-6">
        {/* Breaking News Badge */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-indigo-500/30 to-pink-500/30 border-2 border-indigo-500/50 animate-pulse shadow-2xl shadow-indigo-500/30">
            <span className="text-3xl">🔥</span>
            <span className="text-indigo-200 font-extrabold text-2xl tracking-wider uppercase">
              Breaking: October 1, 2025 - Revolutionary AI Content Just Released!
            </span>
            <span className="text-3xl">🚀</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl">
            The Future of Enterprise AI is Here
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Three groundbreaking deep dives revealing how Fortune 500 companies are achieving unprecedented results with cutting-edge AI systems
          </p>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {/* Card 1: Digital Twins */}
          <div className="group bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-blue-500/40 hover:border-blue-400/80 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/40">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-6xl">🔮</div>
              <div>
                <span className="inline-block px-4 py-2 bg-blue-500/30 text-blue-200 rounded-full text-sm font-bold mb-2">
                  BREAKTHROUGH TECH
                </span>
                <h3 className="text-sm text-gray-300 font-semibold">Enterprise Innovation</h3>
              </div>
            </div>
            
            <h4 className="text-3xl font-extrabold text-white mb-5 group-hover:text-blue-300 transition-colors">
              Agentic AI Digital Twins
            </h4>
            
            <p className="text-gray-200 mb-6 text-base leading-relaxed">
              Discover how autonomous AI agents power digital twin ecosystems to achieve 94% prediction accuracy and $12M+ annual savings across enterprise operations.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs font-semibold">AI Agents</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs font-semibold">Digital Twins</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-semibold">Predictive Ops</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-blue-500/20 rounded-xl p-3 text-center border border-blue-400/30">
                <div className="text-blue-300 font-extrabold text-2xl">94%</div>
                <div className="text-gray-300 text-xs font-semibold">Accuracy</div>
              </div>
              <div className="bg-purple-500/20 rounded-xl p-3 text-center border border-purple-400/30">
                <div className="text-purple-300 font-extrabold text-2xl">$12M</div>
                <div className="text-gray-300 text-xs font-semibold">Savings</div>
              </div>
              <div className="bg-indigo-500/20 rounded-xl p-3 text-center border border-indigo-400/30">
                <div className="text-indigo-300 font-extrabold text-2xl">87%</div>
                <div className="text-gray-300 text-xs font-semibold">Downtime ↓</div>
              </div>
            </div>
            
            <a 
              href="/blog/ai-2025-october-enterprise-digital-twins-agentic-systems"
              className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center shadow-xl hover:shadow-blue-500/60 group-hover:scale-105"
            >
              Read Full Analysis →
            </a>
          </div>

          {/* Card 2: Self-Healing Infrastructure */}
          <div className="group bg-gradient-to-br from-emerald-900/40 to-cyan-900/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-500/40">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-6xl">⚡</div>
              <div>
                <span className="inline-block px-4 py-2 bg-emerald-500/30 text-emerald-200 rounded-full text-sm font-bold mb-2">
                  ZERO-TOUCH OPS
                </span>
                <h3 className="text-sm text-gray-300 font-semibold">Infrastructure Revolution</h3>
              </div>
            </div>
            
            <h4 className="text-3xl font-extrabold text-white mb-5 group-hover:text-emerald-300 transition-colors">
              Self-Healing at Scale
            </h4>
            
            <p className="text-gray-200 mb-6 text-base leading-relaxed">
              Learn how autonomous infrastructure achieves 99.99% uptime by detecting, diagnosing, and resolving issues without human intervention.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-200 rounded-full text-xs font-semibold">Auto-Healing</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-200 rounded-full text-xs font-semibold">DevOps AI</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs font-semibold">SRE 2.0</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-emerald-500/20 rounded-xl p-3 text-center border border-emerald-400/30">
                <div className="text-emerald-300 font-extrabold text-2xl">99.99%</div>
                <div className="text-gray-300 text-xs font-semibold">Uptime</div>
              </div>
              <div className="bg-cyan-500/20 rounded-xl p-3 text-center border border-cyan-400/30">
                <div className="text-cyan-300 font-extrabold text-2xl">96%</div>
                <div className="text-gray-300 text-xs font-semibold">Auto-Fixed</div>
              </div>
              <div className="bg-blue-500/20 rounded-xl p-3 text-center border border-blue-400/30">
                <div className="text-blue-300 font-extrabold text-2xl">$8.7M</div>
                <div className="text-gray-300 text-xs font-semibold">Saved</div>
              </div>
            </div>
            
            <a 
              href="/blog/ai-2025-october-autonomous-infrastructure-self-healing"
              className="block w-full bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center shadow-xl hover:shadow-emerald-500/60 group-hover:scale-105"
            >
              Explore Architecture →
            </a>
          </div>

          {/* Card 3: Supply Chain AI */}
          <div className="group bg-gradient-to-br from-amber-900/40 to-orange-900/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-amber-500/40 hover:border-amber-400/80 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-amber-500/40">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-6xl">🌐</div>
              <div>
                <span className="inline-block px-4 py-2 bg-amber-500/30 text-amber-200 rounded-full text-sm font-bold mb-2">
                  MULTIMODAL AI
                </span>
                <h3 className="text-sm text-gray-300 font-semibold">Supply Chain Innovation</h3>
              </div>
            </div>
            
            <h4 className="text-3xl font-extrabold text-white mb-5 group-hover:text-amber-300 transition-colors">
              Cognitive Logistics
            </h4>
            
            <p className="text-gray-200 mb-6 text-base leading-relaxed">
              See how AI that understands text, images, sensors, and satellite data revolutionizes supply chains with 97% accuracy and $50M+ savings.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-200 rounded-full text-xs font-semibold">Multimodal</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-200 rounded-full text-xs font-semibold">Supply Chain</span>
              <span className="px-3 py-1 bg-red-500/20 text-red-200 rounded-full text-xs font-semibold">Optimization</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-amber-500/20 rounded-xl p-3 text-center border border-amber-400/30">
                <div className="text-amber-300 font-extrabold text-2xl">97%</div>
                <div className="text-gray-300 text-xs font-semibold">Accuracy</div>
              </div>
              <div className="bg-orange-500/20 rounded-xl p-3 text-center border border-orange-400/30">
                <div className="text-orange-300 font-extrabold text-2xl">$52M</div>
                <div className="text-gray-300 text-xs font-semibold">Savings</div>
              </div>
              <div className="bg-red-500/20 rounded-xl p-3 text-center border border-red-400/30">
                <div className="text-red-300 font-extrabold text-2xl">89%</div>
                <div className="text-gray-300 text-xs font-semibold">Stock ↓</div>
              </div>
            </div>
            
            <a 
              href="/blog/ai-2025-october-multimodal-supply-chain-optimization"
              className="block w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center shadow-xl hover:shadow-amber-500/60 group-hover:scale-105"
            >
              Discover Strategies →
            </a>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-pink-900/60 rounded-2xl p-10 mb-12 border border-indigo-500/40 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Proven Enterprise Impact</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-5xl font-extrabold text-indigo-300 mb-2">1,200+</div>
              <div className="text-gray-300 font-semibold">Enterprises Transformed</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-purple-300 mb-2">$1.8B</div>
              <div className="text-gray-300 font-semibold">Total Value Generated</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-pink-300 mb-2">96.5%</div>
              <div className="text-gray-300 font-semibold">Average Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-blue-300 mb-2">18.4x</div>
              <div className="text-gray-300 font-semibold">Median ROI</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-2xl text-gray-200 mb-8 font-semibold">
            Ready to join the AI revolution? Transform your enterprise today.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 text-white font-bold py-5 px-12 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-500/60 text-lg hover:scale-105"
            >
              Schedule Strategic Consultation
            </a>
            <a 
              href="/blog"
              className="border-3 border-indigo-400 text-indigo-300 hover:bg-indigo-500 hover:text-white font-bold py-5 px-12 rounded-xl transition-all duration-300 text-lg hover:scale-105"
            >
              Explore All Insights
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025BreakingContentBanner;
