import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Cpu, Target, TrendingUp, Star, Atom } from 'lucide-react';

const QuantumComputingSolutions2025PromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
            <Atom className="w-5 h-5 text-cyan-300 mr-2" />
            <span className="text-cyan-300 font-semibold">Quantum Computing 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Quantum Computing
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Solutions Revolution
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the power of error-corrected quantum computers, quantum machine learning, and quantum internet solutions that will transform industries in 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/quantum-computing-2025" 
              className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="flex items-center">
                Explore Quantum Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/quantum-machine-learning" 
              className="group bg-transparent border-2 border-cyan-400/30 hover:border-cyan-400/60 text-cyan-300 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-cyan-500/10"
            >
              <span className="flex items-center">
                Quantum ML
                <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Error-Corrected Quantum</h3>
            <p className="text-gray-300 mb-6">
              Advanced quantum error correction enabling stable, scalable quantum computing systems for commercial applications.
            </p>
            <div className="flex items-center text-cyan-300 font-semibold">
              <TrendingUp className="w-5 h-5 mr-2" />
              99.99% Reliability
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Machine Learning</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum algorithms that exponentially accelerate machine learning and pattern recognition tasks.
            </p>
            <div className="flex items-center text-blue-300 font-semibold">
              <Target className="w-5 h-5 mr-2" />
              1,000,000x Speed Boost
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <Atom className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Internet</h3>
            <p className="text-gray-300 mb-6">
              Ultra-secure quantum communication networks enabling unhackable data transmission and quantum cloud computing.
            </p>
            <div className="flex items-center text-indigo-300 font-semibold">
              <Star className="w-5 h-5 mr-2" />
              Unhackable Security
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/30">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience Quantum Supremacy?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Join the quantum revolution and unlock unlimited computational power for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/quantum-demo" 
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  Schedule Quantum Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/quantum-consultation" 
                className="group bg-transparent border-2 border-cyan-400 hover:border-cyan-300 text-cyan-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-cyan-500/10"
              >
                <span className="flex items-center">
                  Free Consultation
                  <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingSolutions2025PromotionBanner;