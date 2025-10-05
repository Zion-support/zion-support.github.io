import React from 'react';

const LatestTrendsShowcase2026: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase">
              🌟 TRENDING NOW - 2026 AI BREAKTHROUGHS
            </span>
          </div>
          <h2 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Latest AI Innovation Trends
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with the most cutting-edge AI technologies and revolutionary breakthroughs shaping the future of enterprise automation.
          </p>
        </div>

        {/* Trending Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Quantum Computing */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
            <div className="text-5xl mb-4 group-hover:animate-spin">⚛️</div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Computing</h3>
            <p className="text-gray-400 text-sm mb-4">
              Revolutionary quantum processors delivering 1000x speed improvements for complex AI computations.
            </p>
            <div className="text-cyan-400 text-sm font-semibold">+1200% Growth</div>
          </div>

          {/* Neural Architecture Search */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
            <div className="text-5xl mb-4 group-hover:animate-pulse">🔍</div>
            <h3 className="text-xl font-bold text-white mb-3">AutoML Evolution</h3>
            <p className="text-gray-400 text-sm mb-4">
              Self-designing neural networks that automatically optimize architecture for maximum performance.
            </p>
            <div className="text-blue-400 text-sm font-semibold">+850% Efficiency</div>
          </div>

          {/* Edge AI */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
            <div className="text-5xl mb-4 group-hover:animate-bounce">📱</div>
            <h3 className="text-xl font-bold text-white mb-3">Edge AI Revolution</h3>
            <p className="text-gray-400 text-sm mb-4">
              Ultra-fast AI processing at the edge with 99.9% accuracy and sub-millisecond response times.
            </p>
            <div className="text-green-400 text-sm font-semibold">+2000% Speed</div>
          </div>

          {/* Explainable AI */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
            <div className="text-5xl mb-4 group-hover:animate-pulse">🔮</div>
            <h3 className="text-xl font-bold text-white mb-3">Explainable AI</h3>
            <p className="text-gray-400 text-sm mb-4">
              Transparent AI systems that explain their decisions with human-readable reasoning.
            </p>
            <div className="text-purple-400 text-sm font-semibold">+95% Trust</div>
          </div>
        </div>

        {/* Featured Innovation */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-4">
                <span className="text-yellow-400 font-bold text-sm">🏆 FEATURED INNOVATION</span>
              </div>
              <h3 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Meta-Cognitive AI Framework
              </h3>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                The world's first AI system that thinks about thinking. Our Meta-Cognitive AI can reason about its own reasoning processes, 
                identify knowledge gaps, and autonomously improve its decision-making capabilities.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="text-gray-300">Self-reflection and meta-reasoning</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="text-gray-300">Autonomous learning and improvement</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="text-gray-300">Cognitive bias detection and correction</span>
                </div>
              </div>
              <a 
                href="/meta-cognitive-ai" 
                className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
              >
                Explore Meta-Cognitive AI →
              </a>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🧠</div>
              <div className="text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-gray-400 text-lg">
                Decision Accuracy Improvement
              </div>
            </div>
          </div>
        </div>

        {/* Industry Impact */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
            <div className="text-5xl mb-4">🏭</div>
            
            <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              78%
            </div>
            <div className="text-gray-400 mb-4">Efficiency Increase</div>
            <p className="text-gray-300 text-sm">
              Autonomous production lines with predictive maintenance and quality optimization.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
            <div className="text-5xl mb-4">🏥</div>
            
            <div className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              92%
            </div>
            <div className="text-gray-400 mb-4">Diagnosis Accuracy</div>
            <p className="text-gray-300 text-sm">
              AI-powered diagnostic systems with early disease detection and treatment optimization.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
            <div className="text-5xl mb-4">💼</div>
            
            <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              $2.3B
            </div>
            <div className="text-gray-400 mb-4">Cost Savings</div>
            <p className="text-gray-300 text-sm">
              Automated trading, risk assessment, and fraud detection with quantum-enhanced security.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-800/50 to-blue-800/50 rounded-2xl p-12 border border-blue-500/20">
          <h3 className="text-4xl font-extrabold mb-4 text-white">
            Ready to Lead the AI Revolution?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the elite group of enterprises already transforming their operations with our breakthrough AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Start Your AI Journey
            </a>
            <a 
              href="/trends-report" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Download Trends Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestTrendsShowcase2026;