import React from 'react';

export default function October2025SustainableAIBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-900/40 via-emerald-900/40 to-teal-900/40 backdrop-blur-sm py-16 border-b border-green-500/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Priority Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 shadow-lg animate-pulse">
            <span className="text-2xl">🌱</span>
            <span className="text-green-400 font-bold text-lg tracking-wider uppercase">
              NEW: OCTOBER 1, 2025 - Sustainable AI Revolution!
            </span>
            <span className="text-2xl">♻️</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            Sustainable AI Computing Revolution
          </h2>
          
          <p className="text-2xl md:text-3xl text-green-100 mb-8 font-semibold">
            Build Carbon-Neutral Intelligence with 85% Energy Reduction & $127M+ Annual Savings
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-green-500/10 backdrop-blur-lg rounded-xl p-5 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-extrabold text-green-400 mb-2">85%</div>
              <div className="text-sm text-green-300">Energy Reduction</div>
            </div>
            <div className="bg-emerald-500/10 backdrop-blur-lg rounded-xl p-5 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-extrabold text-emerald-400 mb-2">$127M</div>
              <div className="text-sm text-emerald-300">Annual Savings</div>
            </div>
            <div className="bg-teal-500/10 backdrop-blur-lg rounded-xl p-5 border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-extrabold text-teal-400 mb-2">Carbon Neutral</div>
              <div className="text-sm text-teal-300">AI Operations</div>
            </div>
            <div className="bg-green-500/10 backdrop-blur-lg rounded-xl p-5 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-extrabold text-green-400 mb-2">99.3%</div>
              <div className="text-sm text-green-300">Performance Maintained</div>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 text-sm font-semibold border border-green-500/30">
              🔋 Energy-Efficient Models
            </span>
            <span className="bg-emerald-500/20 px-4 py-2 rounded-full text-emerald-300 text-sm font-semibold border border-emerald-500/30">
              ☀️ Renewable-Powered Infrastructure
            </span>
            <span className="bg-teal-500/20 px-4 py-2 rounded-full text-teal-300 text-sm font-semibold border border-teal-500/30">
              📊 Carbon-Aware MLOps
            </span>
            <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 text-sm font-semibold border border-green-500/30">
              ✅ ESG Compliance
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/blog/ai-2025-oct-sustainable-ai-computing-revolution"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              <span>Read Complete Guide</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a
              href="/case-studies/ai-2025-oct-global-manufacturing-sustainable-ai-155-billion-success"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              <span className="text-xl mr-1">💰</span>
              <span>$155B Success Story</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a
              href="/services/sustainable-ai-transformation-services"
              className="group relative inline-flex items-center gap-2 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              <span>Our Services</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Bottom Highlight */}
          <div className="mt-10 p-6 bg-green-500/10 backdrop-blur-sm rounded-2xl border border-green-500/20">
            <p className="text-lg text-green-200 mb-3">
              <strong className="text-green-400">Just Published:</strong> Comprehensive guide to energy-efficient AI systems with
              renewable-powered infrastructure, carbon-aware orchestration, and proven strategies for 85% energy reduction.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-300">
              <span>✓ Sparse Neural Networks</span>
              <span>✓ Model Compression</span>
              <span>✓ Green Data Centers</span>
              <span>✓ Carbon-Aware Scheduling</span>
              <span>✓ Real-Time Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
