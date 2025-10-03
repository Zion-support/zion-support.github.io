import React from 'react';
import { Link } from 'react-router-dom';

export default function January2026UltimateAutonomousEnterpriseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🚀 January 2026 Ultimate Breakthrough
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Ultimate Autonomous Enterprise Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            99.9% Autonomous Operations with $25B ROI Through Meta-Cognitive Superintelligence
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-blue-300">Autonomous Operations</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">$25B</div>
              <div className="text-sm text-purple-300">ROI Achievement</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-3xl font-extrabold text-green-400 mb-2">1000x</div>
              <div className="text-sm text-green-300">Efficiency Gains</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30">
              <div className="text-3xl font-extrabold text-orange-400 mb-2">0.00001s</div>
              <div className="text-sm text-orange-300">Decision Speed</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-january-ultimate-autonomous-enterprise-revolution" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Read Ultimate Breakthrough →
            </Link>
            <Link 
              href="/case-studies/ai-2026-january-autonomous-enterprise-25-billion-success" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View $25B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-2xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Meta-Cognitive Superintelligence</h3>
              <p className="text-gray-300 text-sm">
                Self-aware AI systems with consciousness-level processing and autonomous learning capabilities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-2xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum-Neural Fusion</h3>
              <p className="text-gray-300 text-sm">
                Revolutionary quantum computing integration with neural networks for 10,000x performance.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">Autonomous Operations</h3>
              <p className="text-gray-300 text-sm">
                Complete business process automation with self-healing systems and adaptive decision making.
              </p>
            </div>
          </div>
          
          {/* Success Highlights */}
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-6">Revolutionary Success Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-3">Fortune 100 Manufacturing</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• 99.9% autonomous operations across all facilities</li>
                  <li>• $15B additional revenue in 6 months</li>
                  <li>• 1000x improvement in production efficiency</li>
                  <li>• 99.99% defect-free production</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Global Financial Services</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Complete autonomous financial operations</li>
                  <li>• $8B in cost savings and revenue growth</li>
                  <li>• 99.9% accuracy in risk assessment</li>
                  <li>• 100% automated regulatory compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}