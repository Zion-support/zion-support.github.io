import React from 'react';

const January2025NewContentBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-blue-900/40 backdrop-blur-sm border-b border-purple-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border border-purple-500/40 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW JANUARY 2025 BREAKTHROUGH CONTENT!
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs Now Live
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            Discover the most advanced AI technologies transforming enterprise operations: 
            Next-Generation Autonomous Systems, Quantum AI Optimization, and Complete Enterprise Automation Mastery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Autonomous Systems Article */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-6 text-center">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Next-Generation Autonomous Systems
            </h3>
            <p className="text-gray-300 mb-6 text-center">
              Revolutionary breakthrough in autonomous AI systems delivering 89% reduction in manual overhead, 
              234% improvement in efficiency, and $2.3M average savings per implementation.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-purple-300">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>89% reduction in manual decision-making</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-indigo-300">
                <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span>234% improvement in operational efficiency</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>$2.3M average savings per system</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-january-next-generation-autonomous-systems-breakthrough"
              className="block w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-purple-500/50"
            >
              Read Full Article →
            </a>
          </div>

          {/* Quantum AI Optimization Article */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-6 text-center">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Quantum AI Optimization Revolution
            </h3>
            <p className="text-gray-300 mb-6 text-center">
              Achieve unprecedented performance gains with quantum AI optimization: 1000x training speedups, 
              500x faster inference, and revolutionary optimization efficiency breakthroughs.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-purple-300">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>1000x faster neural network training</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-indigo-300">
                <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span>500x improvement in inference speed</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>$47M average computational savings</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-january-quantum-ai-optimization-revolution"
              className="block w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-indigo-500/50"
            >
              Explore Quantum AI →
            </a>
          </div>

          {/* Enterprise Automation Article */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-6 text-center">🏢</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Enterprise Automation Mastery
            </h3>
            <p className="text-gray-300 mb-6 text-center">
              Master intelligent business transformation with 300% efficiency gains, 89% cost reduction, 
              and complete process automation mastery across all enterprise functions.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-purple-300">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>300% improvement in efficiency</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-indigo-300">
                <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span>89% reduction in manual overhead</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>$4.7M average ROI per initiative</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2025-january-enterprise-automation-mastery"
              className="block w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/50"
            >
              Master Automation →
            </a>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join leading enterprises implementing these breakthrough AI technologies. 
              Get your free consultation and discover how our proven solutions can deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Get Free Consultation
              </a>
              <a 
                href="/services" 
                className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
              >
                View Our Services
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025NewContentBanner;