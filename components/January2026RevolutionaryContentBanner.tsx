import React from 'react';

export default function January2026RevolutionaryContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-indigo-900/50 border-b border-purple-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Main Banner */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
              🚀 January 2026 Revolutionary Content Now Live!
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most significant AI innovations of 2026: Meta-Cognitive AI, Quantum-Neural Networks, 
            and Autonomous Operations delivering unprecedented enterprise transformation.
          </p>

          {/* Content Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Meta-Cognitive AI Breakthrough</h3>
              <p className="text-gray-300 mb-6">
                AI systems that think about thinking, achieving 95% decision accuracy through 
                self-reflective reasoning and adaptive learning patterns.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">95% Decision Accuracy</span>
                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-sm">Self-Reflective Reasoning</span>
              </div>
              <a 
                href="/blog/ai-2026-mega-breakthrough-january" 
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Explore Meta-Cognitive AI →
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum AI Enterprise Transformation</h3>
              <p className="text-gray-300 mb-6">
                Hybrid quantum-classical AI systems delivering 1000x processing speed improvements 
                for complex enterprise workloads and optimization challenges.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-sm">1000x Speed Boost</span>
                <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">Quantum Advantage</span>
              </div>
              <a 
                href="/blog/quantum-ai-2026-enterprise-transformation" 
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                Discover Quantum AI →
              </a>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Proven Enterprise Results</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-green-400 mb-2">$50M+</div>
                <div className="text-gray-300 text-sm">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300 text-sm">Process Automation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-purple-400 mb-2">300%</div>
                <div className="text-gray-300 text-sm">Average ROI Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-cyan-400 mb-2">18mo</div>
                <div className="text-gray-300 text-sm">Average Payback Period</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Get Free AI Assessment
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View Success Stories
            </a>
            <a 
              href="/blog" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore All Content
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}