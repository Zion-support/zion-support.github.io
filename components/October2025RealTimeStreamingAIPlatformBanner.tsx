// import React from 'react';
import { Link } from 'react-router-dom';

const October2025RealTimeStreamingAIPlatformBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900 py-16 px-6 sm:px-8 lg:px-12">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.4),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.3),transparent_50%)] animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-200 text-sm font-semibold">⚡ BREAKING: OCTOBER 2025</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent">
          Real-Time Streaming AI Platform Revolution
        </h2>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-center text-cyan-100 mb-8 max-w-4xl mx-auto">
          Sub-10ms Intelligence Processing 50M Events/Second & Creating $3.4B Value
        </p>

        {/* Key metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-cyan-200 mb-1">&lt;10ms</div>
            <div className="text-sm text-cyan-300">End-to-End Latency</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-teal-200 mb-1">50M</div>
            <div className="text-sm text-teal-300">Events/Second</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-emerald-200 mb-1">$3.4B</div>
            <div className="text-sm text-emerald-300">Business Value</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-green-200 mb-1">99.99%</div>
            <div className="text-sm text-green-300">Uptime</div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/20 to-transparent backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-cyan-100 mb-2">Ultra-Low Latency</h3>
            <p className="text-cyan-200 text-sm">Process and act on data in under 10 milliseconds with real-time ML inference and instant decisions</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500/20 to-transparent backdrop-blur-sm rounded-lg p-6 border border-teal-400/30">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-teal-100 mb-2">Massive Scale</h3>
            <p className="text-teal-200 text-sm">Handle 50 million events per second with 25M predictions and 2.5 PB daily data processing</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/20 to-transparent backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-lg font-semibold text-emerald-100 mb-2">Proven ROI</h3>
            <p className="text-emerald-200 text-sm">E-commerce: $847M fraud prevented. Telco: $420M savings. Trading: $2.1B alpha generation</p>
          </div>
        </div>

        {/* Use case pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30 text-cyan-200 text-sm font-medium">
            🛡️ Real-Time Fraud Detection
          </div>
          <div className="px-4 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-400/30 text-teal-200 text-sm font-medium">
            💹 High-Frequency Trading
          </div>
          <div className="px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 text-emerald-200 text-sm font-medium">
            🎯 Dynamic Personalization
          </div>
          <div className="px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30 text-green-200 text-sm font-medium">
            🔧 Predictive Maintenance
          </div>
          <div className="px-4 py-2 bg-lime-500/20 backdrop-blur-sm rounded-full border border-lime-400/30 text-lime-200 text-sm font-medium">
            🌐 Network Optimization
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/blog/ai-2025-october-real-time-streaming-ai-platforms"
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:from-cyan-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            📖 Read Technical Deep Dive
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/services/ai-infrastructure"
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            🚀 Explore Platform Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:from-emerald-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            💬 Schedule Architecture Review
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Additional info */}
        <div className="mt-10 text-center">
          <p className="text-cyan-300 text-sm">
            🎯 <strong>200+ Platform Deployments</strong> | 
            ⚡ <strong>50M Events/Sec Proven</strong> | 
            💰 <strong>$18.4B Client Value</strong> | 
            ⭐ <strong>15x Faster Than Batch</strong>
          </p>
        </div>

        {/* Technology badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-cyan-900/50 backdrop-blur-sm rounded-md text-cyan-200 text-xs border border-cyan-700/50">Apache Kafka</span>
          <span className="px-3 py-1 bg-teal-900/50 backdrop-blur-sm rounded-md text-teal-200 text-xs border border-teal-700/50">Amazon Kinesis</span>
          <span className="px-3 py-1 bg-emerald-900/50 backdrop-blur-sm rounded-md text-emerald-200 text-xs border border-emerald-700/50">Apache Flink</span>
          <span className="px-3 py-1 bg-green-900/50 backdrop-blur-sm rounded-md text-green-200 text-xs border border-green-700/50">Apache Pulsar</span>
          <span className="px-3 py-1 bg-lime-900/50 backdrop-blur-sm rounded-md text-lime-200 text-xs border border-lime-700/50">TensorFlow Serving</span>
        </div>
      </div>
    </div>
  );
};

export default October2025RealTimeStreamingAIPlatformBanner;
