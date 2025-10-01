import React from 'react';

const January2026BreakthroughShowcaseBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 animate-pulse">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🌟 JANUARY 2026 BREAKTHROUGH SHOWCASE
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            The Future of AI is Here
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Revolutionary breakthroughs that are reshaping enterprise AI and transforming business operations worldwide
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
            <div className="text-3xl font-extrabold text-indigo-400 mb-2">99.9%</div>
            <div className="text-sm text-indigo-300">Operational Autonomy</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
            <div className="text-3xl font-extrabold text-purple-400 mb-2">10,000x</div>
            <div className="text-sm text-purple-300">Performance Improvement</div>
          </div>
          <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
            <div className="text-3xl font-extrabold text-pink-400 mb-2">$11.2B</div>
            <div className="text-sm text-pink-300">Combined Savings</div>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
            <div className="text-3xl font-extrabold text-green-400 mb-2">156%</div>
            <div className="text-sm text-green-300">Efficiency Gains</div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Autonomous AI Governance */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold text-white mb-2">Autonomous AI Governance</h3>
              <p className="text-indigo-400 text-sm font-semibold">Self-Regulating Ethical AI Systems</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">99.7% compliance rate with zero human oversight</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">$2.3B in compliance cost savings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Real-time ethical decision making</span>
              </div>
            </div>

            <div className="bg-indigo-500/10 rounded-lg p-4 mb-6">
              <p className="text-indigo-300 text-sm italic">
                "Fortune 500 companies achieving unprecedented AI compliance through autonomous governance systems that maintain ethical standards without human intervention."
              </p>
            </div>

            <a 
              href="/blog/ai-2026-january-autonomous-ai-governance-revolution"
              className="block w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Explore Autonomous Governance →
            </a>
          </div>

          {/* Quantum-Neural Fusion */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-2">Quantum-Neural Fusion</h3>
              <p className="text-purple-400 text-sm font-semibold">10,000x Performance Breakthrough</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Quantum-neural hybrid processing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">$5.2B market impact worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Sub-millisecond response times</span>
              </div>
            </div>

            <div className="bg-purple-500/10 rounded-lg p-4 mb-6">
              <p className="text-purple-300 text-sm italic">
                "Revolutionary fusion of quantum computing and neural networks achieving computational power previously considered impossible."
              </p>
            </div>

            <a 
              href="/blog/ai-2026-january-quantum-neural-fusion-breakthrough"
              className="block w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Discover Quantum-Neural Tech →
            </a>
          </div>

          {/* Autonomous Enterprise Operations */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-2">Autonomous Operations</h3>
              <p className="text-pink-400 text-sm font-semibold">Complete Business Autonomy</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">99.9% operational autonomy achieved</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">$3.7B annual cost savings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Zero downtime operations</span>
              </div>
            </div>

            <div className="bg-pink-500/10 rounded-lg p-4 mb-6">
              <p className="text-pink-300 text-sm italic">
                "Enterprise operations running with superhuman efficiency, making complex business decisions autonomously while maintaining perfect reliability."
              </p>
            </div>

            <a 
              href="/blog/ai-2026-january-autonomous-enterprise-operations-revolution"
              className="block w-full bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-400 hover:to-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Learn Implementation →
            </a>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="bg-gradient-to-r from-slate-800/50 to-indigo-800/50 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            💰 Fortune 500 Success Stories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-green-400 mb-2">$2.8B</div>
              <div className="text-gray-300 text-sm">Manufacturing Savings</div>
              <div className="text-indigo-400 text-xs mt-1">Global Automotive Leader</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-green-400 mb-2">$1.2B</div>
              <div className="text-gray-300 text-sm">R&D Acceleration</div>
              <div className="text-indigo-400 text-xs mt-1">Pharmaceutical Giant</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-green-400 mb-2">$2.1B</div>
              <div className="text-gray-300 text-sm">Operational Efficiency</div>
              <div className="text-indigo-400 text-xs mt-1">Technology Corporation</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            🚀 Ready to Transform Your Organization?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the AI revolution and achieve breakthrough results with our proven implementation frameworks. 
            Get your personalized roadmap to autonomous operations, quantum-neural fusion, and self-governing AI systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Get Implementation Guide
            </a>
            <a
              href="/case-studies"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View Success Stories
            </a>
            <a
              href="/services"
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore AI Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2026BreakthroughShowcaseBanner;