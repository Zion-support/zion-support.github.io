// import React from 'react';
import { Link } from 'react-router-dom';

const October2025MultiAgentOrchestrationRevolutionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16 px-6 sm:px-8 lg:px-12">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)] animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-purple-200 text-sm font-semibold">🤖 JUST PUBLISHED: OCTOBER 2025</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
          Multi-Agent AI Orchestration Revolution
        </h2>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-center text-purple-100 mb-8 max-w-4xl mx-auto">
          2,400+ Coordinated AI Agents Achieving 94% Automation & $2.8B Value Creation
        </p>

        {/* Key metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-purple-200 mb-1">$2.8B</div>
            <div className="text-sm text-purple-300">Value Created</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-pink-200 mb-1">2,400+</div>
            <div className="text-sm text-pink-300">AI Agents</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-blue-200 mb-1">94%</div>
            <div className="text-sm text-blue-300">Automation Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-indigo-200 mb-1">1,240%</div>
            <div className="text-sm text-indigo-300">ROI</div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/20 to-transparent backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-purple-100 mb-2">Enterprise-Scale Coordination</h3>
            <p className="text-purple-200 text-sm">Thousands of specialized agents working together seamlessly across your entire organization</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/20 to-transparent backdrop-blur-sm rounded-lg p-6 border border-pink-400/30">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-pink-100 mb-2">Real-Time Intelligence</h3>
            <p className="text-pink-200 text-sm">Sub-second decision making with 99.7% task completion accuracy and automatic error recovery</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-transparent backdrop-blur-sm rounded-lg p-6 border border-blue-400/30">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold text-blue-100 mb-2">Proven Results</h3>
            <p className="text-blue-200 text-sm">Fortune 50 retail transformation: 850 locations, 10x productivity, $2.8B value in 24 months</p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/blog/ai-2025-october-multiagent-orchestration-platform"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            📖 Read Complete Guide
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/case-studies/ai-2025-oct-global-retail-multiagent-transformation-2-8-billion-success"
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            💎 $2.8B Success Story
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            🎯 Start Your Transformation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Additional info */}
        <div className="mt-10 text-center">
          <p className="text-purple-300 text-sm">
            🏆 <strong>150+ Successful Deployments</strong> | 
            💰 <strong>$12.8B Client Value</strong> | 
            ⭐ <strong>98% Satisfaction Rate</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025MultiAgentOrchestrationRevolutionBanner;
