import React from 'react';
import { Link } from 'react-router-dom';

const October2025CuttingEdgeAIBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-16 px-6 rounded-3xl mb-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-400/30 rounded-full px-6 py-2 mb-6">

            <span className="text-indigo-300 font-semibold text-sm uppercase tracking-wider">New Release • October 2025</span>

          </div>
          
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Next-Generation AI Technologies & Frameworks
          </h2>
          
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Explore the forefront of AI innovation: Agentic governance, neural-symbolic fusion, 
            continuous learning systems, and distributed inference at internet scale
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Article 1 - Agentic Governance */}
          <Link 
            to="/blog/ai-2025-october-agentic-governance-frameworks"
            className="group bg-gradient-to-br from-emerald-800/40 to-teal-900/40 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl group-hover:bg-emerald-500/30 transition-colors">
                <Scale className="w-8 h-8 text-emerald-300"</div>
              <div className="flex-1">
                <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wide">AI Governance</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-200 transition-colors">
              Agentic Governance Frameworks
            </h3>
            
            <p className="text-teal-200/80 text-sm mb-4 line-clamp-3">
              Build trust in autonomous AI with 99.9% compliance accuracy and real-time risk assessment.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-300 text-sm">
                <span>18 min read</span>
              </div>

            </div>
          </Link>

          {/* Article 2 - Neural-Symbolic Fusion */}
          <Link 
            to="/blog/ai-2025-october-neural-symbolic-fusion"
            className="group bg-gradient-to-br from-violet-800/40 to-fuchsia-900/40 backdrop-blur-sm border border-violet-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-violet-500/20 rounded-xl group-hover:bg-violet-500/30 transition-colors">

              </div>
              <div className="flex-1">
                <span className="text-xs text-violet-300 font-semibold uppercase tracking-wide">AI Architecture</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
              Neural-Symbolic Fusion
            </h3>
            
            <p className="text-fuchsia-200/80 text-sm mb-4 line-clamp-3">
              Combine deep learning with logical reasoning for 98% accuracy and 10x better interpretability.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-violet-300 text-sm">
                <span>22 min read</span>
              </div>

            </div>
          </Link>

          {/* Article 3 - Continuous Learning */}
          <Link 
            to="/blog/ai-2025-october-continuous-learning-systems"
            className="group bg-gradient-to-br from-cyan-800/40 to-blue-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/30 transition-colors">
                <Repeat className="w-8 h-8 text-cyan-300"</div>
              <div className="flex-1">
                <span className="text-xs text-cyan-300 font-semibold uppercase tracking-wide">AI Operations</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
              Continuous Learning Systems
            </h3>
            
            <p className="text-blue-200/80 text-sm mb-4 line-clamp-3">
              Deploy self-improving AI with 99.8% uptime and 94% accuracy improvement over time.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyan-300 text-sm">
                <span>20 min read</span>
              </div>

            </div>
          </Link>

          {/* Article 4 - Distributed Inference */}
          <Link 
            to="/blog/ai-2025-october-distributed-inference-optimization"
            className="group bg-gradient-to-br from-amber-800/40 to-orange-900/40 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-500/20 rounded-xl group-hover:bg-amber-500/30 transition-colors">

              </div>
              <div className="flex-1">
                <span className="text-xs text-amber-300 font-semibold uppercase tracking-wide">AI Infrastructure</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
              Distributed Inference Optimization
            </h3>
            
            <p className="text-orange-200/80 text-sm mb-4 line-clamp-3">
              Serve AI at internet scale: 10M+ inferences/sec with sub-20ms latency and 95% cost reduction.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-300 text-sm">
                <span>19 min read</span>
              </div>

            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <span>Read All Articles</span>

          </Link>
          
          <p className="text-purple-200/70 text-sm mt-4">
            Join 75,000+ AI practitioners building the future with cutting-edge insights
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text mb-1">
              99.9%
            </div>
            <div className="text-teal-200/70 text-sm">Compliance Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text mb-1">
              98%
            </div>
            <div className="text-fuchsia-200/70 text-sm">Reasoning Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-1">
              94%
            </div>
            <div className="text-blue-200/70 text-sm">Accuracy Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text mb-1">
              10M+
            </div>
            <div className="text-orange-200/70 text-sm">Inferences/Second</div>
          </div>
        </div>

        {/* Industry Impact Badge */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-400/20 rounded-full px-6 py-3">
            <span className="text-yellow-300 text-sm font-medium">
              🏆 Featured by industry leaders • Trusted by Fortune 500 companies
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025CuttingEdgeAIBanner;
