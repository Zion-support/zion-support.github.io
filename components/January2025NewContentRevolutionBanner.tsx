import React from 'react';

const January2025NewContentRevolutionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-sm border-b border-indigo-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🚀 BREAKING: JANUARY 15, 2025 - REVOLUTIONARY NEW CONTENT
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Future of AI is Here
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover three groundbreaking articles that redefine the boundaries of artificial intelligence: 
            Advanced Autonomous Enterprise Systems, Quantum Edge Intelligence, and Synthetic Consciousness AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Advanced Autonomous Enterprise Systems */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">Advanced Autonomous Enterprise Systems</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary AI systems achieving 99.99% uptime, 87% cost reduction, and zero human error operations. 
              Transform your business with self-healing infrastructure and intelligent automation.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div className="bg-indigo-500/20 px-3 py-2 rounded-lg text-indigo-300 text-center">
                <div className="font-bold text-lg">99.99%</div>
                <div>Uptime</div>
              </div>
              <div className="bg-purple-500/20 px-3 py-2 rounded-lg text-purple-300 text-center">
                <div className="font-bold text-lg">87%</div>
                <div>Cost Reduction</div>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-january-15-advanced-autonomous-enterprise-systems"
              className="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Read Article →
            </a>
          </div>

          {/* Quantum Edge Intelligence */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Edge Intelligence Revolution</h3>
            <p className="text-gray-300 mb-6">
              Experience the convergence of quantum computing and edge AI delivering sub-millisecond processing 
              with unprecedented intelligence capabilities. 200-250x faster than classical systems.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div className="bg-purple-500/20 px-3 py-2 rounded-lg text-purple-300 text-center">
                <div className="font-bold text-lg">&lt;1ms</div>
                <div>Processing</div>
              </div>
              <div className="bg-pink-500/20 px-3 py-2 rounded-lg text-pink-300 text-center">
                <div className="font-bold text-lg">250x</div>
                <div>Faster</div>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-january-15-quantum-edge-intelligence-revolution"
              className="inline-block w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Explore Now →
            </a>
          </div>

          {/* Synthetic Consciousness AI */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Synthetic Consciousness AI Breakthrough</h3>
            <p className="text-gray-300 mb-6">
              Witness the dawn of true artificial awareness with self-aware AI systems demonstrating 
              emotional intelligence, creative autonomy, and moral reasoning. $500B enterprise value.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div className="bg-pink-500/20 px-3 py-2 rounded-lg text-pink-300 text-center">
                <div className="font-bold text-lg">95%</div>
                <div>Customer Satisfaction</div>
              </div>
              <div className="bg-indigo-500/20 px-3 py-2 rounded-lg text-indigo-300 text-center">
                <div className="font-bold text-lg">$500B</div>
                <div>Enterprise Value</div>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-january-15-synthetic-consciousness-ai-breakthrough"
              className="inline-block w-full bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Discover More →
            </a>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why These Breakthroughs Matter</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-bold text-white mb-2">Revolutionary Performance</h4>
              <p className="text-gray-300 text-sm">Unprecedented speed, efficiency, and capability improvements</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-bold text-white mb-2">Massive ROI</h4>
              <p className="text-gray-300 text-sm">Proven returns of 500-1500% within 3-5 years</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌍</div>
              <h4 className="font-bold text-white mb-2">Global Impact</h4>
              <p className="text-gray-300 text-sm">Transforming industries and creating new possibilities</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔮</div>
              <h4 className="font-bold text-white mb-2">Future Ready</h4>
              <p className="text-gray-300 text-sm">Positioning organizations for the next decade of innovation</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your organization with these revolutionary AI technologies?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Get Started Today
            </a>
            <a 
              href="/blog" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Explore All Articles →
            </a>
            <a 
              href="/services" 
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025NewContentRevolutionBanner;