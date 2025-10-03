import React from 'react';
import { Link } from 'react-router-dom';

export default function AI2027RevolutionaryBreakthroughShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold mb-4 animate-pulse">
            ⚡ AI 2027 REVOLUTIONARY BREAKTHROUGH
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            The Ultimate AI Transformation Showcase
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-4xl mx-auto">
            Experience the most revolutionary AI breakthroughs of 2027. <span className="text-yellow-300 font-bold">$700+ billion in combined value creation</span> across quantum AI, autonomous operations, and consciousness breakthroughs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-purple-300 mb-1">$500B</div>
              <div className="text-xs text-orange-200">Quantum AI Success</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-green-300 mb-1">$200B</div>
              <div className="text-xs text-orange-200">Autonomous Ops</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-300 mb-1">99.9%</div>
              <div className="text-xs text-orange-200">Automation Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-yellow-300 mb-1">1000x</div>
              <div className="text-xs text-orange-200">Performance Boost</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link to="/blog/ai-2027-quantum-ai-breakthrough-enterprise-transformation"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Quantum AI $500B Success
            </Link>
            <Link to="/blog/ai-2027-autonomous-enterprise-operations-revolution"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Autonomous Operations
            </Link>
            <Link to="/case-studies"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              All Success Stories
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-3 text-purple-300">🧠 Quantum AI Breakthrough</h3>
              <p className="text-sm text-orange-200 mb-4">Revolutionary quantum artificial intelligence delivering 1000x performance improvements and $500B in value creation.</p>
              <Link to="/blog/ai-2027-quantum-ai-breakthrough-enterprise-transformation" className="text-purple-300 hover:text-purple-200 text-sm font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-3 text-green-300">🤖 Autonomous Operations</h3>
              <p className="text-sm text-orange-200 mb-4">99.9% autonomous enterprise operations achieving $200B in operational savings and unprecedented efficiency.</p>
              <Link to="/blog/ai-2027-autonomous-enterprise-operations-revolution" className="text-green-300 hover:text-green-200 text-sm font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-3 text-blue-300">📊 Proven Results</h3>
              <p className="text-sm text-orange-200 mb-4">500+ successful implementations across Fortune 500 companies with measurable ROI and transformative outcomes.</p>
              <Link to="/case-studies" className="text-blue-300 hover:text-blue-200 text-sm font-semibold">
                View Cases →
              </Link>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-orange-200">
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
              The most comprehensive AI transformation showcase of 2027
            </span>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
    </div>
  );
}