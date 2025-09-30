import React from 'react';
import Link from 'next/link';

const NeuromorphicComputingRevolutionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 animate-pulse">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🧠 NEUROMORPHIC COMPUTING REVOLUTION 2026
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Neuromorphic Computing Revolution
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-semibold">
            Brain-Inspired Processing at Light Speed: 10,000x Energy Efficiency & Real-Time Learning
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
              <div className="text-3xl font-extrabold text-indigo-400 mb-2">10,000x</div>
              <div className="text-indigo-300 text-sm">Energy Efficiency</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">99.7%</div>
              <div className="text-purple-300 text-sm">Processing Efficiency</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
              <div className="text-3xl font-extrabold text-pink-400 mb-2">Real-Time</div>
              <div className="text-pink-300 text-sm">Learning</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">$3.2B</div>
              <div className="text-cyan-300 text-sm">Annual Savings</div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Brain-Inspired Architecture</h3>
              <p className="text-gray-300 mb-6">
                Spiking Neural Networks that mimic biological neurons for unprecedented processing efficiency and real-time learning capabilities.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Event-driven processing</li>
                <li>• Temporal dynamics</li>
                <li>• Natural learning</li>
                <li>• Parallel processing</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Ultra-Low Power</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary energy efficiency that reduces power consumption by 10,000x while maintaining superior processing performance.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Minimal heat generation</li>
                <li>• Extended battery life</li>
                <li>• Sustainable computing</li>
                <li>• Edge computing ready</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-Time Learning</h3>
              <p className="text-gray-300 mb-6">
                Instant adaptation and learning from new information with sub-millisecond response times for complex decisions.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Instant adaptation</li>
                <li>• Continuous learning</li>
                <li>• Predictive optimization</li>
                <li>• Self-improving systems</li>
              </ul>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/blog/ai-2026-neuromorphic-computing-revolution"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Read Full Article →
            </a>
            <a 
              href="/case-studies/ai-2026-neuromorphic-computing-mega-success"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View $3.2B Success Story →
            </a>
            <a 
              href="/contact"
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Consultation
            </a>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl border border-indigo-500/20">
            <p className="text-indigo-200 text-lg">
              <strong>Fortune 100 Case Study:</strong> A global technology conglomerate achieved $3.2B in annual savings 
              with 99.7% processing efficiency and 10,000x energy improvements through our Neuromorphic Computing platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuromorphicComputingRevolutionBanner;