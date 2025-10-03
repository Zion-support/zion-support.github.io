// import React from 'react';

const October2025RealTimeDecisionIntelligenceBanner: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-cyan-900/40 backdrop-blur-sm border-y border-emerald-500/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Breaking News Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border-2 border-emerald-400/50 backdrop-blur-lg animate-pulse">
            <span className="text-2xl">⚡</span>
            <span className="text-emerald-300 font-extrabold text-xl tracking-wider uppercase">
              🚨 JUST PUBLISHED: October 1, 2025 - Game-Changing RTDI Revolution
            </span>
            <span className="text-2xl">⚡</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Real-Time Decision Intelligence
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Transform Enterprise Operations
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-emerald-200 font-bold mb-4">
            98% Faster Decisions • 94% Accuracy • $4.7B Proven Value
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Fortune 500 retailer achieves unprecedented transformation with millisecond decision-making—
            delivering $4.7 billion in value creation over 18 months with 1,382% ROI.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-lg rounded-xl p-6 border border-emerald-400/30 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold text-emerald-300 mb-2">&lt;5ms</div>
            <div className="text-sm text-emerald-200 font-semibold">Decision Latency</div>
            <div className="text-xs text-gray-400 mt-1">Real-time intelligence</div>
          </div>
          <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-lg rounded-xl p-6 border border-teal-400/30 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold text-teal-300 mb-2">98%</div>
            <div className="text-sm text-teal-200 font-semibold">Faster Decisions</div>
            <div className="text-xs text-gray-400 mt-1">48 hrs → 45 minutes</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/30 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold text-cyan-300 mb-2">$4.7B</div>
            <div className="text-sm text-cyan-200 font-semibold">Value Created</div>
            <div className="text-xs text-gray-400 mt-1">18-month transformation</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-blue-400/30 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold text-blue-300 mb-2">1,382%</div>
            <div className="text-sm text-blue-200 font-semibold">Return on Investment</div>
            <div className="text-xs text-gray-400 mt-1">13.8x multiplier</div>
          </div>
        </div>

        {/* RTDI Capabilities */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 backdrop-blur-lg rounded-2xl p-8 border border-emerald-400/30 mb-10 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-white mb-6">
            ⚡ Real-Time Decision Intelligence Capabilities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="text-lg font-bold text-emerald-300 mb-2">Streaming Architecture</h4>
              <p className="text-sm text-gray-300">Process 47TB daily with Apache Kafka and Flink for instant insights</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h4 className="text-lg font-bold text-teal-300 mb-2">AI/ML Intelligence</h4>
              <p className="text-sm text-gray-300">125 production models with 96% accuracy and 2.8ms inference latency</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚙️</div>
              <h4 className="text-lg font-bold text-cyan-300 mb-2">Autonomous Execution</h4>
              <p className="text-sm text-gray-300">87% automated decisions with human-in-loop for strategic choices</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/blog/ai-2025-oct-01-real-time-decision-intelligence-revolution"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 transform hover:-translate-y-1"
          >
            <span className="text-lg">📖 Read Full Article</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <a
            href="/case-studies/ai-2025-oct-01-fortune-500-retail-rtdi-4-7-billion-success"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-teal-500/50 transform hover:-translate-y-1"
          >
            <span className="text-lg">💎 $4.7B Success Story</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <a
            href="/services/real-time-decision-intelligence-platform-2025"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1"
          >
            <span className="text-lg">🚀 Explore Services</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Social Proof */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-3">Trusted by Fortune 500 enterprises worldwide</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <span className="bg-white/5 px-4 py-2 rounded-full">12,500 Locations</span>
            <span className="bg-white/5 px-4 py-2 rounded-full">450K Employees</span>
            <span className="bg-white/5 px-4 py-2 rounded-full">99.97% Uptime</span>
            <span className="bg-white/5 px-4 py-2 rounded-full">47TB Daily Processing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025RealTimeDecisionIntelligenceBanner;
