import React from 'react';

export default function October2025NewTechContentMegaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-cyan-900/40 backdrop-blur-sm py-20 border-y border-emerald-500/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Headline Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-400/40 shadow-2xl shadow-emerald-500/20 animate-pulse">
            <span className="text-3xl">🚀</span>
            <span className="text-emerald-300 font-extrabold text-2xl tracking-wider uppercase">
              JUST RELEASED: October 2025 — Revolutionary Tech Deep-Dives
            </span>
            <span className="text-3xl">✨</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-7xl mx-auto mb-12">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Edge ML, Graph Neural Networks & LLM Fine-Tuning Mastery
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-200 mb-10 font-semibold leading-relaxed">
            Three breakthrough technical guides just published: Deploy ML at the edge with 
            <span className="text-emerald-400 font-extrabold"> &lt;1ms latency</span>, unlock 
            <span className="text-teal-400 font-extrabold"> $178B in graph intelligence</span>, and master 
            <span className="text-cyan-400 font-extrabold"> LLM fine-tuning with 89% accuracy gains</span>
          </p>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
          {/* Card 1: Edge ML */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 backdrop-blur-lg rounded-3xl p-8 border border-emerald-400/30 hover:border-emerald-400/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30">
            <div className="text-6xl mb-6 text-center">🌐</div>
            <h3 className="text-3xl font-extrabold text-emerald-400 mb-4 text-center">Edge ML Revolution</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-center">
              Deploy sophisticated ML models directly at the edge with sub-millisecond latency and 94% cost reduction
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-emerald-500/20 rounded-xl p-3 text-center">
                <div className="text-2xl font-extrabold text-emerald-400">&lt;1ms</div>
                <div className="text-xs text-emerald-300">Latency</div>
              </div>
              <div className="bg-emerald-500/20 rounded-xl p-3 text-center">
                <div className="text-2xl font-extrabold text-emerald-400">94%</div>
                <div className="text-xs text-emerald-300">Cost Cut</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-emerald-500/10 px-3 py-1 rounded-full text-emerald-300 text-xs">Model Compression</span>
              <span className="bg-emerald-500/10 px-3 py-1 rounded-full text-emerald-300 text-xs">IoT</span>
              <span className="bg-emerald-500/10 px-3 py-1 rounded-full text-emerald-300 text-xs">Real-Time</span>
            </div>
          </div>

          {/* Card 2: Graph Neural Networks */}
          <div className="bg-gradient-to-br from-teal-500/10 to-teal-600/10 backdrop-blur-lg rounded-3xl p-8 border border-teal-400/30 hover:border-teal-400/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/30">
            <div className="text-6xl mb-6 text-center">🕸️</div>
            <h3 className="text-3xl font-extrabold text-teal-400 mb-4 text-center">Graph Neural Networks</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-center">
              Unlock relationship intelligence with GNNs—23x faster analysis and $178B in value creation
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-teal-500/20 rounded-xl p-3 text-center">
                <div className="text-2xl font-extrabold text-teal-400">23x</div>
                <div className="text-xs text-teal-300">Faster</div>
              </div>
              <div className="bg-teal-500/20 rounded-xl p-3 text-center">
                <div className="text-2xl font-extrabold text-teal-400">$178B</div>
                <div className="text-xs text-teal-300">Value</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-teal-500/10 px-3 py-1 rounded-full text-teal-300 text-xs">Knowledge Graphs</span>
              <span className="bg-teal-500/10 px-3 py-1 rounded-full text-teal-300 text-xs">Fraud Detection</span>
              <span className="bg-teal-500/10 px-3 py-1 rounded-full text-teal-300 text-xs">Recommendations</span>
            </div>
          </div>

          {/* Card 3: LLM Fine-Tuning */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-lg rounded-3xl p-8 border border-cyan-400/30 hover:border-cyan-400/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30">
            <div className="text-6xl mb-6 text-center">🎯</div>
            <h3 className="text-3xl font-extrabold text-cyan-400 mb-4 text-center">LLM Fine-Tuning Mastery</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-center">
              Master enterprise LLM customization with LoRA, QLoRA—89% accuracy gains and 78% cost reduction
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-cyan-500/20 rounded-xl p-3 text-center">
                <div className="text-2xl font-extrabold text-cyan-400">89%</div>
                <div className="text-xs text-cyan-300">Accuracy</div>
              </div>
              <div className="bg-cyan-500/20 rounded-xl p-3 text-center">
                <div className="text-2xl font-extrabold text-cyan-400">78%</div>
                <div className="text-xs text-cyan-300">Cost Cut</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-cyan-500/10 px-3 py-1 rounded-full text-cyan-300 text-xs">LoRA</span>
              <span className="bg-cyan-500/10 px-3 py-1 rounded-full text-cyan-300 text-xs">QLoRA</span>
              <span className="bg-cyan-500/10 px-3 py-1 rounded-full text-cyan-300 text-xs">PEFT</span>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h3 className="text-3xl font-bold text-white mb-6">
            🎓 Enterprise-Grade Technical Mastery for 2025
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Three comprehensive guides covering the hottest ML/AI technologies in production today. 
            From edge deployment to graph intelligence to LLM customization—master the techniques 
            driving <span className="text-emerald-400 font-bold">billions in enterprise value creation</span>.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-14 py-5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-extrabold rounded-full text-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 animate-pulse">
            Explore All Three Guides →
          </button>
        </div>
      </div>
    </section>
  );
}
