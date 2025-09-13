import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Cpu, Atom, Brain, Star, TrendingUp } from 'lucide-react';

const QuantumComputingSolutions2025PromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-500/30 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
            <Atom className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-white">Quantum Computing 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Quantum Computing
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Solutions 2025
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-300 mt-4">
              Revolutionary Breakthroughs
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the power of quantum computing with our comprehensive solutions. 
            From quantum machine learning to error-corrected quantum computers, 
            discover the future of computational technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/quantum-computing-solutions-2025"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Atom className="w-6 h-6 mr-2" />
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/quantum-computing-breakthroughs"
              className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <TrendingUp className="w-6 h-6 mr-2" />
              View Breakthroughs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Quantum Machine Learning</h3>
            <p className="text-gray-300">
              Advanced quantum machine learning algorithms that leverage quantum computing for unprecedented AI capabilities.
            </p>
          </div>

          <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Error-Corrected Quantum</h3>
            <p className="text-gray-300">
              Revolutionary error-corrected quantum computers that maintain quantum coherence for practical applications.
            </p>
          </div>

          <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Quantum AI Fusion</h3>
            <p className="text-gray-300">
              Breakthrough quantum-AI fusion technologies that combine quantum computing with artificial intelligence.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1M+</div>
            <div className="text-gray-300">Qubits</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000x</div>
            <div className="text-gray-300">Faster</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">2025</div>
            <div className="text-gray-300">Launch</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingSolutions2025PromotionBanner;