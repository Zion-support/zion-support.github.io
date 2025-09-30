import React from 'react';

const Ultimate2026ContentShowcaseBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-7xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🚀 Ultimate 2026 Content Showcase
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Breakthroughs Now Live
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-semibold">
            Discover the latest in Quantum-Neural Fusion, Meta-Cognitive Autonomous Systems, and Neuromorphic Computing
          </p>
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Neuromorphic Computing */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div className="text-6xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Neuromorphic Computing</h3>
              <p className="text-gray-300 mb-6">
                Brain-inspired processing with 10,000x energy efficiency and real-time learning capabilities.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-indigo-300">Energy Efficiency:</span>
                  <span className="text-indigo-400 font-bold">10,000x</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-300">Processing Speed:</span>
                  <span className="text-purple-400 font-bold">Real-Time</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-300">Annual Savings:</span>
                  <span className="text-cyan-400 font-bold">$3.2B</span>
                </div>
              </div>
              <a 
                href="/blog/ai-2026-neuromorphic-computing-revolution"
                className="block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Read Article →
              </a>
            </div>
            
            {/* Meta-Cognitive Systems */}
            <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-6xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Meta-Cognitive AI</h3>
              <p className="text-gray-300 mb-6">
                AI that thinks about thinking with 99.7% autonomous decision accuracy and self-learning architecture.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-300">Decision Accuracy:</span>
                  <span className="text-emerald-400 font-bold">99.7%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-teal-300">Self-Learning:</span>
                  <span className="text-teal-400 font-bold">Autonomous</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-300">Annual Savings:</span>
                  <span className="text-cyan-400 font-bold">$1.8B</span>
                </div>
              </div>
              <a 
                href="/blog/ai-2026-meta-cognitive-autonomous-systems-breakthrough"
                className="block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Read Article →
              </a>
            </div>
            
            {/* Quantum-Neural Fusion */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-6xl mb-6">⚛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum-Neural Fusion</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary AI combining quantum computing with neural networks for 1000x processing speed.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-300">Processing Speed:</span>
                  <span className="text-purple-400 font-bold">1000x</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-pink-300">Decision Accuracy:</span>
                  <span className="text-pink-400 font-bold">95%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-300">Annual Savings:</span>
                  <span className="text-cyan-400 font-bold">$2.3B</span>
                </div>
              </div>
              <a 
                href="/blog/ai-2026-quantum-neural-fusion-breakthrough"
                className="block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Read Article →
              </a>
            </div>
          </div>
          
          {/* Case Studies Section */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Proven Success Stories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏭</div>
                <h4 className="text-xl font-bold text-blue-400 mb-2">Fortune 100 Tech</h4>
                <p className="text-gray-300 text-sm mb-4">$3.2B savings with Neuromorphic Computing</p>
                <a 
                  href="/case-studies/ai-2026-neuromorphic-computing-mega-success"
                  className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
                >
                  View Case Study →
                </a>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏢</div>
                <h4 className="text-xl font-bold text-emerald-400 mb-2">Tech Conglomerate</h4>
                <p className="text-gray-300 text-sm mb-4">$1.8B savings with Meta-Cognitive AI</p>
                <a 
                  href="/case-studies"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm"
                >
                  View Case Study →
                </a>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h4 className="text-xl font-bold text-purple-400 mb-2">Fortune 500</h4>
                <p className="text-gray-300 text-sm mb-4">$2.3B savings with Quantum-Neural Fusion</p>
                <a 
                  href="/case-studies/fortune-500-ai-2026-breakthrough-mega-success"
                  className="text-purple-400 hover:text-purple-300 font-semibold text-sm"
                >
                  View Case Study →
                </a>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/blog"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Explore All Articles →
            </a>
            <a 
              href="/case-studies"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View All Case Studies →
            </a>
            <a 
              href="/contact"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Consultation
            </a>
          </div>
          
          {/* Stats Summary */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">$7.3B</div>
              <div className="text-blue-300 text-sm">Total Client Savings</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">99.7%</div>
              <div className="text-purple-300 text-sm">Average Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
              <div className="text-3xl font-extrabold text-emerald-400 mb-2">98%</div>
              <div className="text-emerald-300 text-sm">Process Automation</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">1.2</div>
              <div className="text-cyan-300 text-sm">Month Payback</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ultimate2026ContentShowcaseBanner;