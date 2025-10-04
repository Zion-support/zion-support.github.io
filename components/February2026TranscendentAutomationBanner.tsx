import React from 'react';
import { Link } from 'react-router-dom';

export default function February2026TranscendentAutomationBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 py-16 border-t border-b border-indigo-500/30">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 animate-pulse">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🚀 FEBRUARY 2026 TRANSCENDENT AUTOMATION
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Transcendent Automation Revolution
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            100,000x Performance Improvement • Infinite Scalability • $300B+ ROI Potential
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">100,000x</div>
              <div className="text-xs text-indigo-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">∞</div>
              <div className="text-xs text-purple-300">Infinite Scalability</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">$300B+</div>
              <div className="text-xs text-green-300">ROI Potential</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">0.00001s</div>
              <div className="text-xs text-orange-300">Response Time</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/blog/ai-2026-february-transcendent-automation-revolution" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Read Transcendent Details →
            </Link>
            <Link to="/case-studies/ai-2026-february-transcendent-automation-300-billion-success" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              View $300B Success Story →
            </Link>
            <Link to="/contact" 
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Implement Today
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-indigo-400 mb-2">Transcendent Performance</h3>
              <p className="text-gray-300 text-sm">
                Revolutionary performance architecture achieving 100,000x improvement with processing speeds that transcend limitations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">∞</div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Infinite Scalability</h3>
              <p className="text-gray-300 text-sm">
                Breakthrough scalability technology enabling infinite expansion without performance degradation.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Transcendent Intelligence</h3>
              <p className="text-gray-300 text-sm">
                Advanced transcendent intelligence enabling decision-making that exceeds human cognitive limitations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}