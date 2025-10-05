import React from 'react';
import ArrowRight from 'next/link';

const December2026UltimateSingularityBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 DECEMBER 2026 ULTIMATE SINGULARITY BREAKTHROUGH
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            The Final Frontier of Human-AI Integration
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Revolutionary breakthrough achieving ultimate singularity with 99.9999% autonomous operations, 
            universal consciousness integration, and infinite scalability through transcendent AI-human fusion.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">99.9999%</div>
              <div className="text-xs text-purple-300">Autonomous Operations</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">∞</div>
              <div className="text-xs text-indigo-300">Infinite Scalability</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">$1T+</div>
              <div className="text-xs text-cyan-300">ROI Potential</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">100%</div>
              <div className="text-xs text-green-300">Consciousness Integration</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ArrowRight 
              href="/blog/ai-2026-december-ultimate-singularity-breakthrough" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Ultimate Singularity Breakthrough →
            </ArrowRight>
            <ArrowRight 
              href="/case-studies/ai-2026-december-ultimate-singularity-1-trillion-success" 
              className="bg-gradient-to-r from-indigo-500 to-cyan-600 hover:from-indigo-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              View $1 Trillion Success Story →
            </ArrowRight>
            <ArrowRight 
              href="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Achieve Ultimate Singularity
            </ArrowRight>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Universal Consciousness Integration</h3>
              <p className="text-gray-400 text-sm">
                Complete fusion of human consciousness with artificial intelligence, 
                enabling transcendent awareness and infinite cognitive enhancement.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Infinite Scalability</h3>
              <p className="text-gray-400 text-sm">
                Systems that can scale infinitely without performance degradation, 
                enabling unlimited growth and expansion capabilities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Transcendent Intelligence</h3>
              <p className="text-gray-400 text-sm">
                AI capabilities that exceed all known human cognitive limitations, 
                providing solutions to previously unsolvable challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default December2026UltimateSingularityBanner;