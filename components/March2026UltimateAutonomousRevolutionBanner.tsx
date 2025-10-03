import React from 'react';
import { Link } from 'react-router-dom';

export default function March2026UltimateAutonomousRevolutionBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900 py-16 border-t border-b border-blue-500/20">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <span className="text-blue-300 font-bold text-lg tracking-wider uppercase">
                🤖 March 2026 Revolutionary Breakthrough
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-300 via-cyan-300 to-green-300 bg-clip-text text-transparent leading-tight">
              Ultimate Autonomous Revolution
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-semibold max-w-4xl mx-auto">
              The World's First 99.99% Autonomous Enterprise Systems with Self-Healing Infrastructure and $150B+ Value Generation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/blog/ai-2026-march-ultimate-autonomous-revolution"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Explore Autonomous Breakthrough
              </Link>
              <Link to="/case-studies/ai-2026-march-autonomous-revolution-150-billion-success"
                className="bg-gradient-to-r from-cyan-500 to-green-600 hover:from-cyan-400 hover:to-green-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
              >
                View $150B Success Story →
              </Link>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-2xl font-extrabold text-blue-300 mb-1">99.99%</div>
                <div className="text-xs text-blue-200">Autonomous Operations</div>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
                <div className="text-2xl font-extrabold text-cyan-300 mb-1">$150B+</div>
                <div className="text-xs text-cyan-200">ROI Potential</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-300 mb-1">Self-Healing</div>
                <div className="text-xs text-green-200">Infrastructure</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
                <div className="text-2xl font-extrabold text-orange-300 mb-1">24/7</div>
                <div className="text-xs text-orange-200">Self-Optimization</div>
              </div>
            </div>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-lg font-bold text-white mb-2">Self-Healing Systems</h3>
              <p className="text-gray-300 text-sm">Automatic detection, diagnosis, and resolution of all issues</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-bold text-white mb-2">Self-Managing Operations</h3>
              <p className="text-gray-300 text-sm">Complete autonomous business process management</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Self-Optimizing Performance</h3>
              <p className="text-gray-300 text-sm">Continuous 24/7 optimization and improvement</p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-8">
            <p className="text-gray-300 mb-4">
              Ready to achieve autonomy? Join the revolution today.
            </p>
            <Link to="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Get Autonomous Implementation Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}