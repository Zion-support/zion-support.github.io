import React from 'react';
import { Link } from 'react-router-dom';

const October2025ClimateIntelligenceRevolutionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 py-16 px-6 sm:px-8 lg:px-12">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,0.3),transparent_50%)] animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-green-200 text-sm font-semibold">🌍 JUST PUBLISHED: OCTOBER 2025</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200 bg-clip-text text-transparent">
          AI Climate Intelligence Revolution
        </h2>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-center text-green-100 mb-8 max-w-4xl mx-auto">
          Net-Zero 7 Years Early: $12.4B Savings + 78% Carbon Reduction with AI
        </p>

        {/* Key metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-green-200 mb-1">$12.4B</div>
            <div className="text-sm text-green-300">Annual Savings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-emerald-200 mb-1">78%</div>
            <div className="text-sm text-emerald-300">Carbon Reduction</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-teal-200 mb-1">94%</div>
            <div className="text-sm text-teal-300">Renewable Energy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-cyan-200 mb-1">7 Years</div>
            <div className="text-sm text-cyan-300">Ahead of Schedule</div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-green-500/20 to-transparent backdrop-blur-sm rounded-lg p-6 border border-green-400/30">
            <div className="text-3xl mb-3">🌱</div>
            <h3 className="text-lg font-semibold text-green-100 mb-2">Renewable Optimization</h3>
            <p className="text-green-200 text-sm">96% accurate renewable forecasting eliminates $5.4B curtailment losses and enables 94% renewable integration</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/20 to-transparent backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-emerald-100 mb-2">Carbon Intelligence</h3>
            <p className="text-emerald-200 text-sm">Real-time Scope 1-3 emissions tracking reduces 661M tons CO2/year with automated ESG reporting</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500/20 to-transparent backdrop-blur-sm rounded-lg p-6 border border-teal-400/30">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-teal-100 mb-2">Grid Intelligence</h3>
            <p className="text-teal-200 text-sm">99.97% reliability with real-time optimization across 840 power plants and 127 GW capacity</p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/services/ai-climate-intelligence-platform-2025"
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            🌍 Explore Climate AI Platform
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/case-studies/ai-2025-oct-energy-climate-intelligence-12-4-billion-success"
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            💎 $12.4B Success Story
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/contact?service=climate-intelligence"
            className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:from-teal-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            🎯 Accelerate Net-Zero Goals
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-green-200 text-sm mb-4">
            ✨ <strong>34 global deployments</strong> across energy, manufacturing, transportation & agriculture
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-green-300">
            <span>✓ $31.1B+ Total Value Created</span>
            <span>✓ 99.97% Platform Uptime</span>
            <span>✓ 47 Countries Deployed</span>
            <span>✓ Zero Environmental Violations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025ClimateIntelligenceRevolutionBanner;
