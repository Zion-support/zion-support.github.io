// import React from 'react';

const February2026NewContentBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-16">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 BREAKING: February 2026 - Revolutionary New Content
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Next-Generation AI Breakthroughs
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-semibold max-w-4xl mx-auto">
            Discover the latest in Quantum-Enhanced Business Intelligence, Autonomous Operations, and $150B+ Success Stories
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum Intelligence</h3>
              <p className="text-gray-300 mb-4 text-sm">
                $100B ROI achieved through quantum-enhanced business intelligence with 99.9% decision accuracy
              </p>
              <a 
                href="/case-studies/ai-2026-quantum-intelligence-100-billion-success"
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Read Case Study →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Autonomous Operations</h3>
              <p className="text-gray-300 mb-4 text-sm">
                $50B ROI delivered through autonomous manufacturing operations with 99.95% automation
              </p>
              <a 
                href="/case-studies/ai-2026-autonomous-operations-50-billion-success"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Read Case Study →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-white mb-3">Next-Gen Systems</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Revolutionary next-generation autonomous systems achieving 99.99% automation with $5B+ ROI
              </p>
              <a 
                href="/blog/ai-2026-next-generation-autonomous-systems-breakthrough"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Read Article →
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog/ai-2026-quantum-enhanced-business-intelligence" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Explore Quantum Intelligence →
            </a>
            <a 
              href="/case-studies" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View All Success Stories
            </a>
            <a 
              href="/blog" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Browse All Articles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default February2026NewContentBanner;