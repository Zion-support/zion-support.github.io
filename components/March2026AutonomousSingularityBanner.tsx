import React from 'react';
import { Link } from 'react-router-dom';

const March2026AutonomousSingularityBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.3),transparent_50%)] animate-spin" style={{animationDuration: '25s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Main headline */}
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 animate-bounce">
              🌟 MARCH 2026 SINGULARITY ACHIEVED
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
              Autonomous Enterprise Singularity
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-green-300 mb-6">
              $100B Value • Infinite Scalability • Complete Automation
            </div>
          </div>

          {/* Key benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">♾️</div>
              <h3 className="text-xl font-bold mb-2">Infinite Scalability</h3>
              <p className="text-emerald-200">Unlimited processing capacity with zero performance degradation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="text-xl font-bold mb-2">Complete Automation</h3>
              <p className="text-emerald-200">100% autonomous business operations requiring zero human intervention</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">💎</div>
              <h3 className="text-xl font-bold mb-2">$100B Value</h3>
              <p className="text-emerald-200">Unprecedented enterprise value generation through singularity intelligence</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog/ai-2026-march-autonomous-enterprise-singularity"
              className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-green-300 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Experience Singularity →
            </Link>
            <Link to="/enterprise"
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Achieve Singularity
            </Link>
          </div>

          {/* Success metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">$100B</div>
              <div className="text-sm text-emerald-200">Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">♾️</div>
              <div className="text-sm text-emerald-200">Scalability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">100%</div>
              <div className="text-sm text-emerald-200">Automation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">5000%</div>
              <div className="text-sm text-emerald-200">ROI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
    </div>
  );
};

export default March2026AutonomousSingularityBanner;