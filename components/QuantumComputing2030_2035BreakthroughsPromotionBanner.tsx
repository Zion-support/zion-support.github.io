import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Zap, Cpu, Database, Globe, Shield, Rocket, Star, TrendingUp } from 'lucide-react';

const QuantumComputing2030_2035BreakthroughsPromotionBanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Quantum field background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Quantum particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 mb-6">
            <Atom className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">Quantum Computing 2030-2035</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Revolution</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the next generation of quantum computing breakthroughs with 1,000,000x processing power, 
            quantum-AI fusion, and reality-bending computational capabilities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/quantum-computing-2030-2035-breakthroughs" 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:from-cyan-500 hover:to-blue-600 hover:scale-105 flex items-center justify-center"
            >
              Explore Quantum Breakthroughs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/quantum-ai-fusion-2035" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
            >
              Quantum-AI Fusion
              <Atom className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Quantum Breakthroughs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Atom className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Supremacy 2.0</h3>
            <p className="text-gray-300 text-sm mb-4">
              Achieve quantum supremacy with 1,000,000 qubits and 99.99% error correction by 2032
            </p>
            <div className="flex items-center text-cyan-400 text-sm">
              <Star className="w-4 h-4 mr-1" />
              <span>Revolutionary</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum-AI Fusion</h3>
            <p className="text-gray-300 text-sm mb-4">
              Complete integration of quantum computing with AI achieving unprecedented processing power
            </p>
            <div className="flex items-center text-purple-400 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>Exponential</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Reality Simulation</h3>
            <p className="text-gray-300 text-sm mb-4">
              Quantum computers capable of simulating entire universes and alternate realities
            </p>
            <div className="flex items-center text-green-400 text-sm">
              <Rocket className="w-4 h-4 mr-1" />
              <span>Transcendent</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Neural Networks</h3>
            <p className="text-gray-300 text-sm mb-4">
              Neural networks operating in quantum superposition for infinite parallel processing
            </p>
            <div className="flex items-center text-orange-400 text-sm">
              <Database className="w-4 h-4 mr-1" />
              <span>Infinite</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Security</h3>
            <p className="text-gray-300 text-sm mb-4">
              Unbreakable quantum encryption and security protocols for all digital systems
            </p>
            <div className="flex items-center text-indigo-400 text-sm">
              <Shield className="w-4 h-4 mr-1" />
              <span>Unbreakable</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Teleportation</h3>
            <p className="text-gray-300 text-sm mb-4">
              Instantaneous data transfer and quantum teleportation across any distance
            </p>
            <div className="flex items-center text-pink-400 text-sm">
              <Rocket className="w-4 h-4 mr-1" />
              <span>Instantaneous</span>
            </div>
          </div>
        </div>

        {/* Quantum Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">1M+</div>
            <div className="text-gray-300">Qubits</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">1,000,000x</div>
            <div className="text-gray-300">Processing Speed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.99%</div>
            <div className="text-gray-300">Error Correction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputing2030_2035BreakthroughsPromotionBanner;