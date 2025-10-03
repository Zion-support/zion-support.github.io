// import React from 'react';
import { Link } from 'react-router-dom';

const January2026UltraAutonomousEnterpriseBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900/20 via-blue-900/20 to-purple-900/20 border border-emerald-500/30 rounded-2xl p-8 mb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">January 2026</span>
            <div className="w-8 h-px bg-gradient-to-r from-emerald-400 to-transparent"></div>
            <span className="text-blue-400 font-semibold text-sm">Ultra-Autonomous Enterprise</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/30">
            <span className="text-emerald-300 text-xs font-semibold">🚀 NEW</span>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ultra-Autonomous Enterprise Revolution
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Achieve <span className="text-emerald-400 font-bold">99.97% operational efficiency</span> with our 
              revolutionary ultra-autonomous enterprise systems. Experience <span className="text-blue-400 font-bold">73% cost reduction</span> 
              and unlock <span className="text-purple-400 font-bold">$12.4B in value creation</span> through self-optimizing AI orchestration.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-emerald-400 mb-1">99.97%</div>
                <div className="text-xs text-emerald-300">Operational Efficiency</div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">$12.4B</div>
                <div className="text-xs text-blue-300">Value Creation</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/blog/ai-2026-january-ultra-autonomous-enterprise-revolution"
                className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Full Article
              </Link>
              <Link to="/services/ultra-autonomous-enterprise"
                className="border border-emerald-500 text-emerald-300 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Feature highlights */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-emerald-300 font-semibold">Self-Optimizing AI Orchestration</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Continuous adaptation and improvement without human intervention</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-300 font-semibold">Zero-Touch Automation</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">94% of workflows automated with intelligent decision-making</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-purple-300 font-semibold">Predictive Analytics</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Anticipate issues before they occur with advanced AI models</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-purple-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-8 pt-6 border-t border-gray-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-lg font-bold text-emerald-400">73%</div>
              <div className="text-xs text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-400">85%</div>
              <div className="text-xs text-gray-400">Faster Decisions</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">92%</div>
              <div className="text-xs text-gray-400">Error Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-cyan-400">67%</div>
              <div className="text-xs text-gray-400">Productivity Gain</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default January2026UltraAutonomousEnterpriseBanner;