import React from 'react';
import { Link } from 'react-router-dom';

const October2025NextGenAIBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 py-20 px-6 rounded-3xl mb-12 shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Breaking News Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 border-2 border-cyan-400/50 rounded-full px-8 py-3 mb-6 shadow-lg backdrop-blur-sm">

            <span className="text-cyan-200 font-bold text-lg uppercase tracking-wider">
              🚀 October 2025 — Next-Gen AI Breakthroughs
            </span>

          </div>
          
          <h2 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Systems Transforming Enterprises
          </h2>
          
          <p className="text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Discover the cutting-edge AI innovations powering Fortune 500 success: 
            <span className="text-cyan-300 font-semibold"> Collaborative Agent Teams</span>, 
            <span className="text-blue-300 font-semibold"> Real-Time Adaptive AI</span>, and 
            <span className="text-purple-300 font-semibold"> Hybrid Human-AI Intelligence</span>
          </p>
        </div>

        {/* Key Metrics Showcase */}
        <div className="grid md:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-800/40 to-cyan-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg">
            <div className="text-5xl font-extrabold text-cyan-300 mb-2">580%</div>
            <div className="text-cyan-200 font-semibold text-sm uppercase tracking-wide">Cognitive Amplification</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg">
            <div className="text-5xl font-extrabold text-blue-300 mb-2">$17B</div>
            <div className="text-blue-200 font-semibold text-sm uppercase tracking-wide">Annual Value Created</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-800/40 to-purple-900/40 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg">
            <div className="text-5xl font-extrabold text-purple-300 mb-2">98.7%</div>
            <div className="text-purple-200 font-semibold text-sm uppercase tracking-wide">Prediction Accuracy</div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-800/40 to-pink-900/40 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg">
            <div className="text-5xl font-extrabold text-pink-300 mb-2">11.7x</div>
            <div className="text-pink-200 font-semibold text-sm uppercase tracking-wide">Average ROI</div>
          </div>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          
          {/* Article 1 - Collaborative AI Agent Teams */}
          <Link 
            to="/blog/ai-2025-oct-01-collaborative-ai-agent-teams-enterprise"
            className="group bg-gradient-to-br from-cyan-800/50 to-cyan-900/50 backdrop-blur-sm border-2 border-cyan-400/40 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-cyan-500/30 rounded-2xl group-hover:bg-cyan-500/40 transition-colors shadow-lg">

              </div>
              <div className="flex-1">
                <span className="text-xs text-cyan-300 font-bold uppercase tracking-wider bg-cyan-500/20 px-3 py-1 rounded-full">
                  Multi-Agent Systems
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors leading-tight">
              Collaborative AI Agent Teams: Enterprise Coordination Revolution
            </h3>
            
            <p className="text-blue-200 text-base mb-6 leading-relaxed line-clamp-4">
              Discover how collaborative agent teams achieve <span className="text-cyan-300 font-semibold">340% productivity gains</span> through 
              parallel execution, specialized expertise, and autonomous coordination. Proven architectures from Fortune 500 deployments.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-cyan-300 text-sm">

                <span className="font-semibold">$4.2B annual value creation</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300 text-sm">

                <span className="font-semibold">96% task completion rate</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300 text-sm">

                <span className="font-semibold">4.7x ROI within 6 months</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-cyan-400/30">
              <div className="flex items-center gap-2 text-cyan-300 text-sm">
                <span className="font-medium">18 min read</span>
                <span>•</span>
                <span className="font-medium">Oct 1, 2025</span>
              </div>

            </div>
          </Link>

          {/* Article 2 - Real-Time Adaptive AI */}
          <Link 
            to="/blog/ai-2025-oct-01-real-time-adaptive-ai-enterprise-systems"
            className="group bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-sm border-2 border-blue-400/40 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-blue-500/30 rounded-2xl group-hover:bg-blue-500/40 transition-colors shadow-lg">

              </div>
              <div className="flex-1">
                <span className="text-xs text-blue-300 font-bold uppercase tracking-wider bg-blue-500/20 px-3 py-1 rounded-full">
                  Adaptive AI
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors leading-tight">
              Real-Time Adaptive AI: Self-Learning Enterprise Systems
            </h3>
            
            <p className="text-blue-200 text-base mb-6 leading-relaxed line-clamp-4">
              Transform your enterprise with AI that learns and adapts continuously. Achieve <span className="text-blue-300 font-semibold">420% faster response times</span> and 
              <span className="text-blue-300 font-semibold"> 98.7% accuracy</span> through real-time self-optimization without manual retraining.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-blue-300 text-sm">

                <span className="font-semibold">$5.9B annual value creation</span>
              </div>
              <div className="flex items-center gap-2 text-blue-300 text-sm">

                <span className="font-semibold">91% reduction in model staleness</span>
              </div>
              <div className="flex items-center gap-2 text-blue-300 text-sm">

                <span className="font-semibold">8.3x ROI within 18 months</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-blue-400/30">
              <div className="flex items-center gap-2 text-blue-300 text-sm">
                <span className="font-medium">20 min read</span>
                <span>•</span>
                <span className="font-medium">Oct 1, 2025</span>
              </div>

            </div>
          </Link>

          {/* Article 3 - Hybrid Human-AI Intelligence */}
          <Link 
            to="/blog/ai-2025-oct-01-hybrid-human-ai-intelligence-augmentation"
            className="group bg-gradient-to-br from-purple-800/50 to-purple-900/50 backdrop-blur-sm border-2 border-purple-400/40 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-purple-500/30 rounded-2xl group-hover:bg-purple-500/40 transition-colors shadow-lg">

              </div>
              <div className="flex-1">
                <span className="text-xs text-purple-300 font-bold uppercase tracking-wider bg-purple-500/20 px-3 py-1 rounded-full">
                  Hybrid Intelligence
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors leading-tight">
              Hybrid Human-AI Intelligence: Cognitive Augmentation Revolution
            </h3>
            
            <p className="text-purple-200 text-base mb-6 leading-relaxed line-clamp-4">
              Amplify human intelligence by <span className="text-purple-300 font-semibold">580%</span> through seamless human-AI collaboration. 
              Create <span className="text-purple-300 font-semibold">$7.3B value</span> with systems that combine human creativity and AI computational power.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-purple-300 text-sm">

                <span className="font-semibold">$7.3B annual value creation</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300 text-sm">

                <span className="font-semibold">94% improvement in decisions</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300 text-sm">

                <span className="font-semibold">14.7x ROI within 24 months</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-purple-400/30">
              <div className="flex items-center gap-2 text-purple-300 text-sm">
                <span className="font-medium">19 min read</span>
                <span>•</span>
                <span className="font-medium">Oct 1, 2025</span>
              </div>

            </div>
          </Link>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-cyan-800/30 via-blue-800/30 to-purple-800/30 backdrop-blur-sm border-2 border-blue-400/40 rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Transform Your Enterprise with Next-Gen AI
          </h3>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Zion Tech Group has deployed these revolutionary AI systems across <span className="text-cyan-300 font-semibold">47 Fortune 500 companies</span>, 
            creating <span className="text-blue-300 font-semibold">$18.7B in measurable value</span> with an average <span className="text-purple-300 font-semibold">11.7x ROI</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <span>Explore All Articles</span>

            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <span>Schedule Consultation</span>

            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 text-center">
          <div className="flex flex-wrap gap-6 justify-center items-center text-blue-300 text-sm">
            <div className="flex items-center gap-2">

              <span className="font-semibold">47 Fortune 500 Deployments</span>
            </div>
            <div className="flex items-center gap-2">

              <span className="font-semibold">98% Project Success Rate</span>
            </div>
            <div className="flex items-center gap-2">

              <span className="font-semibold">$18.7B Client Value Created</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025NextGenAIBanner;
