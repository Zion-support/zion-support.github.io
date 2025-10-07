import React from 'react';
import ArrowRight from 'next/link';

const February2026UltimateAutonomousRevolutionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
              🚀 February 2026 Ultimate Breakthrough
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Ultimate Autonomous Revolution
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            1000x Performance • Universal Intelligence • $500B+ Value Generation
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">1000x</div>
              <div className="text-sm text-purple-300 font-semibold">Performance Boost</div>
              <div className="text-xs text-purple-200 mt-1">Neural processing speed revolution</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
              <div className="text-3xl font-extrabold text-indigo-400 mb-2">Universal</div>
              <div className="text-sm text-indigo-300 font-semibold">Intelligence</div>
              <div className="text-xs text-indigo-200 mt-1">Cross-domain problem solving</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">$500B+</div>
              <div className="text-sm text-cyan-300 font-semibold">Value Potential</div>
              <div className="text-xs text-cyan-200 mt-1">Enterprise transformation</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <ArrowRight 
              href="/blog/ai-2026-february-ultimate-autonomous-revolution-breakthrough" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Breakthrough Details →
            </ArrowRight>
            <ArrowRight 
              href="/case-studies/ai-2026-february-ultimate-autonomous-revolution-500-billion-success" 
              className="bg-gradient-to-r from-indigo-500 to-cyan-600 hover:from-indigo-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              View $500B Success Story →
            </ArrowRight>
            <ArrowRight 
              href="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </ArrowRight>
          </div>

          {/* Success Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
              <div className="text-lg font-extrabold text-green-400 mb-1">99.9%</div>
              <div className="text-xs text-green-300">Decision Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30">
              <div className="text-lg font-extrabold text-blue-400 mb-1">0.001s</div>
              <div className="text-xs text-blue-300">Response Time</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-lg p-4 border border-orange-500/30">
              <div className="text-lg font-extrabold text-orange-400 mb-1">∞</div>
              <div className="text-xs text-orange-300">Scalability</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-4 border border-pink-500/30">
              <div className="text-lg font-extrabold text-pink-400 mb-1">5000%</div>
              <div className="text-xs text-pink-300">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default February2026UltimateAutonomousRevolutionBanner;