import React from 'react';

/**
 * October 2025 Platform Modernization Banner Component
 * Advertises the latest AI Platform Modernization content with compelling metrics
 */
export default function October2025PlatformModernizationBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 py-16 border-b-4 border-blue-500/50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Banner Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/50 backdrop-blur-sm animate-pulse">
            <span className="text-blue-300 text-xl">🚀</span>
            <span className="text-blue-200 font-bold text-xl tracking-wider uppercase">
              Just Published: October 1, 2025
            </span>
            <span className="text-blue-300 text-xl">🚀</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent leading-tight">
          AI Platform Modernization: $180M Success Story
        </h2>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl text-center text-blue-100 font-semibold mb-8 max-w-5xl mx-auto">
          Fortune 100 Company Achieves 1,340% ROI in 87 Days  
          <span className="block mt-2 text-xl text-blue-300">
            Complete Enterprise Guide + Real-World Case Study
          </span>
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-extrabold text-blue-300 mb-2">$180M</div>
            <div className="text-sm text-blue-200 font-medium">Annual Savings</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-extrabold text-purple-300 mb-2">1,340%</div>
            <div className="text-sm text-purple-200 font-medium">First-Year ROI</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl p-6 border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-extrabold text-indigo-300 mb-2">87 Days</div>
            <div className="text-sm text-indigo-200 font-medium">Complete Migration</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-extrabold text-cyan-300 mb-2">99.97%</div>
            <div className="text-sm text-cyan-200 font-medium">Platform Uptime</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 mb-10 border border-white/10 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">What You'll Learn</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📘</span>
              <div>
                <h4 className="text-lg font-bold text-blue-300 mb-2">Complete Enterprise Guide</h4>
                <p className="text-gray-300 text-sm">90-day implementation framework validated across 47 Fortune 500 companies</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">📊</span>
              <div>
                <h4 className="text-lg font-bold text-purple-300 mb-2">Real Success Metrics</h4>
                <p className="text-gray-300 text-sm">73% cost reduction, 98.5% latency improvement, 252x faster deployments</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">🏗️</span>
              <div>
                <h4 className="text-lg font-bold text-indigo-300 mb-2">Modern Architecture Patterns</h4>
                <p className="text-gray-300 text-sm">Kubernetes, MLOps, real-time streaming, edge AI deployment blueprints</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">⚡</span>
              <div>
                <h4 className="text-lg font-bold text-cyan-300 mb-2">Zero-Downtime Migration</h4>
                <p className="text-gray-300 text-sm">Battle-tested strategies for migrating 2,400+ models with zero incidents</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/blog/ai-2025-october-01-platform-modernization-enterprise-guide"
            className="group relative bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/70 transform hover:-translate-y-1 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>Read Enterprise Guide</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </a>
          
          <a
            href="/case-studies/ai-2025-october-global-logistics-platform-modernization-180-million-success"
            className="group relative bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl shadow-purple-500/50 hover:shadow-purple-400/70 transform hover:-translate-y-1 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>View $180M Case Study</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </a>
          
          <a
            href="/contact"
            className="group relative border-2 border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>Get Free Assessment</span>
              <span className="text-xl">💎</span>
            </span>
          </a>
        </div>

        {/* Additional Value Props */}
        <div className="mt-10 text-center">
          <p className="text-blue-200 text-lg mb-3 font-semibold">
            🎯 Proven Framework Used by 47 Fortune 500 Companies
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-300">
            <span className="bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/30">$4.7B Total Value Created</span>
            <span className="bg-purple-500/20 px-4 py-2 rounded-full border border-purple-400/30">340% Average ROI</span>
            <span className="bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-400/30">90-Day Implementation</span>
            <span className="bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-400/30">Zero-Downtime Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
