// import React from 'react';

export default function October2025EdgeMLGraphGNNBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-rose-900/40 via-pink-900/40 to-fuchsia-900/40 backdrop-blur-sm py-16 border-y border-rose-500/30">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Headline */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 border-2 border-rose-400/40 shadow-lg shadow-rose-500/20">
            <span className="text-2xl">💎</span>
            <span className="text-rose-300 font-extrabold text-xl tracking-wider uppercase">
              New October 2025: Advanced ML Techniques
            </span>
            <span className="text-2xl">🔥</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent leading-tight">
            Edge ML & Graph Neural Networks: The Ultimate Technical Arsenal
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-semibold leading-relaxed">
            Master cutting-edge ML deployment strategies—from 
            <span className="text-rose-400 font-extrabold"> sub-millisecond edge inference</span> to 
            <span className="text-pink-400 font-extrabold"> billion-node graph intelligence</span>
          </p>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-rose-500/20 to-rose-600/20 backdrop-blur-lg rounded-2xl p-5 border border-rose-400/30">
              <div className="text-4xl font-extrabold text-rose-400 mb-2">&lt;1ms</div>
              <div className="text-sm text-rose-200 font-semibold">Edge Latency</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-5 border border-pink-400/30">
              <div className="text-4xl font-extrabold text-pink-400 mb-2">23x</div>
              <div className="text-sm text-pink-200 font-semibold">Graph Speed</div>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-600/20 backdrop-blur-lg rounded-2xl p-5 border border-fuchsia-400/30">
              <div className="text-4xl font-extrabold text-fuchsia-400 mb-2">94%</div>
              <div className="text-sm text-fuchsia-200 font-semibold">Cost Savings</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-5 border border-purple-400/30">
              <div className="text-4xl font-extrabold text-purple-400 mb-2">10B+</div>
              <div className="text-sm text-purple-200 font-semibold">Devices Scaled</div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-5xl mx-auto text-left">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-rose-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-rose-400 mb-3">Edge ML Deployment</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Deploy ML models directly on IoT devices, smartphones, and edge gateways with hardware acceleration
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-rose-500/10 px-3 py-1 rounded-full text-rose-300 text-xs">Model Quantization</span>
                <span className="bg-rose-500/10 px-3 py-1 rounded-full text-rose-300 text-xs">Federated Learning</span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300">
              <div className="text-4xl mb-4">🕸️</div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">Graph Neural Networks</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Leverage relationship intelligence for fraud detection, recommendations, and knowledge graph reasoning
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-500/10 px-3 py-1 rounded-full text-pink-300 text-xs">GCN</span>
                <span className="bg-pink-500/10 px-3 py-1 rounded-full text-pink-300 text-xs">GraphSAGE</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center gap-4">
            <button className="px-10 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105">
              Read Edge ML Guide
            </button>
            <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105">
              Explore GNN Techniques
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
