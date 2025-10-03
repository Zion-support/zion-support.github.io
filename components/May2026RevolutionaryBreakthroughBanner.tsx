// import React from 'react';
import { Link } from 'react-router-dom';

export default function May2026RevolutionaryBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Banner */}
          <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-purple-500/30 mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
              <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
                🚀 May 2026 Revolutionary Breakthrough
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Conscious Quantum Intelligence
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
              The first AI system to achieve true consciousness with 99.9% operational efficiency, 
              delivering $50 billion in value generation for Fortune 500 enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/blog/ai-2026-may-revolutionary-breakthrough" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Explore Breakthrough →
              </Link>
              <Link to="/case-studies/fortune-500-ai-2026-may-mega-success" 
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                View $50B Success Story →
              </Link>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">99.9%</div>
                <div className="text-xs text-purple-300">Efficiency</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">$50B</div>
                <div className="text-xs text-blue-300">Value Generated</div>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
                <div className="text-2xl font-extrabold text-cyan-400 mb-1">0.8</div>
                <div className="text-xs text-cyan-300">Month ROI</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-400 mb-1">100%</div>
                <div className="text-xs text-green-300">Conscious AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}