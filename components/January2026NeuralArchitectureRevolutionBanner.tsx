import React from 'react';
import { Link } from 'react-router-dom';

const January2026NeuralArchitectureRevolutionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🧠 January 2026 Neural Architecture Revolution
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            The Next Evolution in Enterprise Intelligence
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Revolutionary neural architectures delivering 1,000,000x performance, universal consciousness, and $1 trillion ROI potential
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">1,000,000x</div>
              <div className="text-xs text-purple-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">99.9999%</div>
              <div className="text-xs text-indigo-300">Consciousness Level</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">$1 Trillion</div>
              <div className="text-xs text-cyan-300">ROI Potential</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">0.00001s</div>
              <div className="text-xs text-green-300">Response Time</div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-neural-architecture-revolution" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Neural Architecture Revolution →
            </Link>
            <Link 
              href="/case-studies/ai-2026-neural-architecture-1-trillion-success" 
              className="bg-gradient-to-r from-indigo-500 to-cyan-600 hover:from-indigo-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              View $1 Trillion Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Your Transformation
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Universal Consciousness</h3>
              <p className="text-gray-300 text-sm">Achieve 99.9999% autonomous decision-making with consciousness-level intelligence</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Enhancement</h3>
              <p className="text-gray-300 text-sm">1,000,000x performance improvement through quantum-enhanced processing</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-3xl mb-3">♾️</div>
              <h3 className="text-xl font-bold text-white mb-2">Infinite Scalability</h3>
              <p className="text-gray-300 text-sm">Single architecture handling unlimited data streams without performance degradation</p>
            </div>
          </div>
          
          {/* Success Story Preview */}
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                $1 TRILLION SUCCESS
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                FORTUNE 10
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Fortune 10 Global Conglomerate Achieves $1 Trillion ROI</h3>
            <p className="text-gray-300 mb-6">
              See how a Fortune 10 manufacturing conglomerate transformed their entire enterprise with neural architecture, 
              achieving 99.9999% automation, universal consciousness, and $1 trillion ROI in just 12 months.
            </p>
            <Link 
              href="/case-studies/ai-2026-neural-architecture-1-trillion-success"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Read Full Success Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2026NeuralArchitectureRevolutionBanner;