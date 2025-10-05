import React from 'react';
import { Link } from 'react-router-dom';

const October2025AdvancedAIInnovationsBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-16 px-6 rounded-3xl mb-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-400/30 rounded-full px-6 py-2 mb-6">

            <span className="text-indigo-300 font-semibold text-sm uppercase tracking-wider">Breaking Innovation • October 2025</span>

          </div>
          
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Next-Generation AI Technologies: The Future is Now
          </h2>
          
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Explore revolutionary advances in neuromorphic computing, synthetic data generation, 
            and quantum machine learning that are reshaping enterprise AI in 2025
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Article 1 - Neuromorphic Computing */}
          <Link 
            to="/blog/ai-2025-october-neuromorphic-neural-networks-revolution"
            className="group bg-gradient-to-br from-indigo-800/40 to-indigo-900/40 backdrop-blur-sm border border-indigo-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-indigo-500/20 rounded-xl group-hover:bg-indigo-500/30 transition-colors">

              </div>
              <div className="flex-1">
                <span className="text-xs text-indigo-300 font-semibold uppercase tracking-wide">Neuromorphic AI</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
              Neuromorphic Neural Networks: Brain-Inspired Computing Revolution
            </h3>
            
            <p className="text-indigo-200/80 text-sm mb-4 line-clamp-3">
              Discover how neuromorphic computing delivers 10,000x energy efficiency improvements 
              through spike-based event-driven processing and biological neural network architectures.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-indigo-300 text-sm">
                <span>18 min read</span>
                <span>•</span>
                <span>Oct 1, 2025</span>
              </div>

            </div>
          </Link>

          {/* Article 2 - Synthetic Data Generation */}
          <Link 
            to="/blog/ai-2025-october-synthetic-data-generation-mastery"
            className="group bg-gradient-to-br from-purple-800/40 to-purple-900/40 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors">
                <Database className="w-8 h-8 text-purple-300"</div>
              <div className="flex-1">
                <span className="text-xs text-purple-300 font-semibold uppercase tracking-wide">Data Engineering</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
              Synthetic Data Generation Mastery: Solving AI's Data Scarcity Problem
            </h3>
            
            <p className="text-purple-200/80 text-sm mb-4 line-clamp-3">
              Learn how leading organizations generate 60-80% of training data synthetically, 
              enabling faster iteration, privacy compliance, and more robust AI systems.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-purple-300 text-sm">
                <span>22 min read</span>
                <span>•</span>
                <span>Oct 1, 2025</span>
              </div>

            </div>
          </Link>

          {/* Article 3 - Quantum Machine Learning */}
          <Link 
            to="/blog/ai-2025-october-quantum-machine-learning-enterprise-breakthrough"
            className="group bg-gradient-to-br from-pink-800/40 to-pink-900/40 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-pink-500/20 rounded-xl group-hover:bg-pink-500/30 transition-colors">

              </div>
              <div className="flex-1">
                <span className="text-xs text-pink-300 font-semibold uppercase tracking-wide">Quantum ML</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-200 transition-colors">
              Quantum Machine Learning: Enterprise Breakthrough in 2025
            </h3>
            
            <p className="text-pink-200/80 text-sm mb-4 line-clamp-3">
              Explore how quantum ML is delivering exponential speedups for optimization, drug discovery, 
              financial modeling, and cryptography with 1,000+ qubit systems.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-pink-300 text-sm">
                <span>24 min read</span>
                <span>•</span>
                <span>Oct 1, 2025</span>
              </div>

            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <span>Discover More Innovations</span>

          </Link>
          
          <p className="text-indigo-200/70 text-sm mt-4">
            Join 50,000+ technology leaders pioneering the next wave of AI innovation
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text mb-1">
              10,000x
            </div>
            <div className="text-indigo-200/70 text-sm">Energy Efficiency</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
              60-80%
            </div>
            <div className="text-purple-200/70 text-sm">Synthetic Data Usage</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text mb-1">
              1,000+
            </div>
            <div className="text-pink-200/70 text-sm">Logical Qubits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-1">
              100x
            </div>
            <div className="text-green-200/70 text-sm">Faster Simulations</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(October2025AdvancedAIInnovationsBanner);
