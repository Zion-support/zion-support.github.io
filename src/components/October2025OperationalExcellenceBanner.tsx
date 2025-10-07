import React from 'react';
import { Link } from 'react-router-dom';

const October2025OperationalExcellenceBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-20 px-6 rounded-3xl mb-12 shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Breaking News Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-cyan-500/30 border-2 border-emerald-400/50 rounded-full px-8 py-3 mb-6 shadow-lg backdrop-blur-sm">

            <span className="text-emerald-200 font-bold text-lg uppercase tracking-wider">
              🚀 October 2025 — Operational Excellence Revolution
            </span>

          </div>
          
          <h2 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Transform Operations with AI-Powered Intelligence
          </h2>
          
          <p className="text-2xl text-teal-200 max-w-4xl mx-auto leading-relaxed">
            Discover breakthrough AI innovations delivering unprecedented efficiency: 
            <span className="text-emerald-300 font-semibold"> Predictive Maintenance (99.6% Accuracy)</span>, 
            <span className="text-teal-300 font-semibold"> Autonomous API Orchestration (99.8% Uptime)</span>, and 
            <span className="text-cyan-300 font-semibold"> Customer Intent Prediction (98.2% Accuracy)</span>
          </p>
        </div>

        {/* Key Metrics Showcase */}
        <div className="grid md:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-800/40 to-emerald-900/40 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg">
            <div className="text-5xl font-extrabold text-emerald-300 mb-2">$24.4B</div>
            <div className="text-emerald-200 font-semibold text-sm uppercase tracking-wide">Combined Value Creation</div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-800/40 to-teal-900/40 backdrop-blur-sm border border-teal-400/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg">
            <div className="text-5xl font-extrabold text-teal-300 mb-2">99.2%</div>
            <div className="text-teal-200 font-semibold text-sm uppercase tracking-wide">Average Accuracy</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-800/40 to-cyan-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg">
            <div className="text-5xl font-extrabold text-cyan-300 mb-2">92%</div>
            <div className="text-cyan-200 font-semibold text-sm uppercase tracking-wide">Cost Reduction</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg">
            <div className="text-5xl font-extrabold text-blue-300 mb-2">560%</div>
            <div className="text-blue-200 font-semibold text-sm uppercase tracking-wide">Average ROI</div>
          </div>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          
          {/* Article 1 - Predictive Maintenance */}
          <Link 
            to="/blog/ai-2025-oct-predictive-maintenance-enterprise-breakthrough"
            className="group bg-gradient-to-br from-emerald-800/50 to-emerald-900/50 backdrop-blur-sm border-2 border-emerald-400/40 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-emerald-500/30 rounded-2xl group-hover:bg-emerald-500/40 transition-colors shadow-lg">
                <Wrench className="w-10 h-10 text-emerald-200" />
              </div>
              <div className="flex-1">
                <span className="text-xs text-emerald-300 font-bold uppercase tracking-wider bg-emerald-500/20 px-3 py-1 rounded-full">
                  Predictive Maintenance
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-200 transition-colors leading-tight">
              AI-Powered Predictive Maintenance: 99.6% Failure Prediction
            </h3>
            
            <p className="text-teal-200 text-base mb-6 leading-relaxed line-clamp-4">
              Revolutionary AI platform achieving <span className="text-emerald-300 font-semibold">99.6% failure prediction accuracy</span> with 
              <span className="text-emerald-300 font-semibold"> 94% downtime reduction</span> and <span className="text-emerald-300 font-semibold">$8.7B annual savings</span>. 
              Transform reactive maintenance into proactive optimization.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-emerald-300 text-sm">

                <span className="font-semibold">$8.7B in annual savings</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300 text-sm">

                <span className="font-semibold">94% downtime reduction</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300 text-sm">

                <span className="font-semibold">450% ROI within 18 months</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-emerald-400/30">
              <div className="flex items-center gap-2 text-emerald-300 text-sm">
                <span className="font-medium">16 min read</span>
                <span>•</span>
                <span className="font-medium">Oct 1, 2025</span>
              </div>

            </div>
          </Link>

          {/* Article 2 - API Orchestration */}
          <Link 
            to="/blog/ai-2025-oct-autonomous-api-orchestration-revolution"
            className="group bg-gradient-to-br from-teal-800/50 to-teal-900/50 backdrop-blur-sm border-2 border-teal-400/40 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-teal-500/30 rounded-2xl group-hover:bg-teal-500/40 transition-colors shadow-lg">
                <Network className="w-10 h-10 text-teal-200" />
              </div>
              <div className="flex-1">
                <span className="text-xs text-teal-300 font-bold uppercase tracking-wider bg-teal-500/20 px-3 py-1 rounded-full">
                  API Orchestration
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-200 transition-colors leading-tight">
              Autonomous API Orchestration: Self-Healing Microservices
            </h3>
            
            <p className="text-teal-200 text-base mb-6 leading-relaxed line-clamp-4">
              Transform microservices management with <span className="text-teal-300 font-semibold">99.8% uptime</span>, managing 
              <span className="text-teal-300 font-semibold"> 100M+ daily requests</span> with self-healing capabilities and 
              <span className="text-teal-300 font-semibold">$6.4B value creation</span>. Zero-touch operations at scale.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-teal-300 text-sm">

                <span className="font-semibold">$6.4B enterprise value</span>
              </div>
              <div className="flex items-center gap-2 text-teal-300 text-sm">

                <span className="font-semibold">95% incident auto-resolution</span>
              </div>
              <div className="flex items-center gap-2 text-teal-300 text-sm">

                <span className="font-semibold">550% ROI within 12 months</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-teal-400/30">
              <div className="flex items-center gap-2 text-teal-300 text-sm">
                <span className="font-medium">17 min read</span>
                <span>•</span>
                <span className="font-medium">Oct 1, 2025</span>
              </div>

            </div>
          </Link>

          {/* Article 3 - Customer Intent Prediction */}
          <Link 
            to="/blog/ai-2025-oct-customer-intent-prediction-breakthrough"
            className="group bg-gradient-to-br from-cyan-800/50 to-cyan-900/50 backdrop-blur-sm border-2 border-cyan-400/40 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-cyan-500/30 rounded-2xl group-hover:bg-cyan-500/40 transition-colors shadow-lg">

              </div>
              <div className="flex-1">
                <span className="text-xs text-cyan-300 font-bold uppercase tracking-wider bg-cyan-500/20 px-3 py-1 rounded-full">
                  Intent Prediction
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors leading-tight">
              Real-Time AI Customer Intent: 98.2% Prediction Accuracy
            </h3>
            
            <p className="text-cyan-200 text-base mb-6 leading-relaxed line-clamp-4">
              Unlock <span className="text-cyan-300 font-semibold">$9.3B revenue growth</span> with AI achieving 
              <span className="text-cyan-300 font-semibold"> 98.2% intent prediction accuracy</span> and 
              <span className="text-cyan-300 font-semibold">850% conversion increases</span>. Hyper-personalization in real-time.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-cyan-300 text-sm">

                <span className="font-semibold">$9.3B revenue growth</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300 text-sm">

                <span className="font-semibold">850% conversion increase</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300 text-sm">

                <span className="font-semibold">680% ROI in 6 months</span>
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
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-emerald-800/30 via-teal-800/30 to-cyan-800/30 backdrop-blur-sm border-2 border-teal-400/40 rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Achieve Operational Excellence with AI
          </h3>
          <p className="text-xl text-teal-200 mb-8 max-w-3xl mx-auto">
            Join enterprise leaders who have implemented these AI systems across <span className="text-emerald-300 font-semibold">1,200+ global deployments</span>, 
            creating <span className="text-teal-300 font-semibold">$24.4B in measurable value</span> with an average <span className="text-cyan-300 font-semibold">560% ROI</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <span>Explore All Innovations</span>

            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <span>Get Started Today</span>

            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 text-center">
          <div className="flex flex-wrap gap-6 justify-center items-center text-teal-300 text-sm">
            <div className="flex items-center gap-2">

              <span className="font-semibold">1,200+ Global Deployments</span>
            </div>
            <div className="flex items-center gap-2">

              <span className="font-semibold">99.2% Average Accuracy</span>
            </div>
            <div className="flex items-center gap-2">

              <span className="font-semibold">$24.4B Value Created</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025OperationalExcellenceBanner;
