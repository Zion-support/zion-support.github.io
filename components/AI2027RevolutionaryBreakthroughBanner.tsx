'use client';

// import React from 'react';
import { Link } from 'react-router-dom';

export default function AI2027RevolutionaryBreakthroughBanner() {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                REVOLUTIONARY BREAKTHROUGH
              </span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                AI 2027
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              AI 2027: The Autonomous Enterprise
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300">
                Revolution is Here
              </span>
            </h2>

            <p className="text-xl opacity-90 leading-relaxed">
              Discover how next-generation autonomous AI systems are delivering 95% automation rates, 
              $2.5B+ ROI, and complete enterprise transformation across Fortune 500 companies.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-green-300 mb-1">95%</div>
                <div className="text-sm opacity-75">Automation Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-blue-300 mb-1">$2.5B+</div>
                <div className="text-sm opacity-75">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-purple-300 mb-1">10x</div>
                <div className="text-sm opacity-75">Efficiency Gain</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-orange-300 mb-1">6 mo</div>
                <div className="text-sm opacity-75">ROI Timeline</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog/ai-2027-autonomous-enterprise-revolution"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-center inline-flex items-center justify-center gap-2"
              >
                Read Full Article
                <span className="text-xl">→</span>
              </Link>
              <Link to="/case-studies/ai-2027-revolutionary-breakthrough-success"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 text-center"
              >
                View $1.2B Success Story
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Revolutionary AI Technologies
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-sm">Meta-Cognitive AI</span>
                    <span className="text-green-300 font-bold">✓ Deployed</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-sm">Quantum Neural Networks</span>
                    <span className="text-green-300 font-bold">✓ Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-sm">Autonomous Orchestration</span>
                    <span className="text-green-300 font-bold">✓ Running</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-sm">Self-Improving Algorithms</span>
                    <span className="text-green-300 font-bold">✓ Optimizing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg opacity-75 mb-4">
            Join 200+ Fortune 500 companies achieving breakthrough results with AI 2027 technology
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Transformation
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}