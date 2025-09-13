import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Zap, Cpu, Database, Shield, Globe, Rocket } from 'lucide-react';

const QuantumComputingBreakthroughs2030PromotionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.2),transparent_50%)]"></div>
      
      {/* Floating Quantum Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full text-sm font-semibold mb-6">
            <Atom className="w-4 h-4 mr-2" />
            NEW: Quantum Computing Breakthroughs 2030
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Revolution 2030
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the next generation of quantum computing with 
            <span className="text-cyan-400 font-semibold"> 1 million qubits</span>, 
            <span className="text-cyan-400 font-semibold"> room-temperature operation</span>, and 
            <span className="text-cyan-400 font-semibold"> quantum supremacy</span> in every application.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/quantum-computing-breakthroughs-2030" 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:from-cyan-500 hover:to-blue-600 hover:scale-105 flex items-center justify-center"
            >
              Explore Quantum Breakthroughs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/quantum-ai-fusion-2030" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center"
            >
              Quantum-AI Fusion
              <Zap className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
            <Atom className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">1M Qubits</h3>
            <p className="text-gray-300">Million-qubit quantum processors</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
            <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Room Temperature</h3>
            <p className="text-gray-300">No more cryogenic cooling required</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
            <Cpu className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Quantum Supremacy</h3>
            <p className="text-gray-300">Exponential speed advantages</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
            <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Quantum Security</h3>
            <p className="text-gray-300">Unbreakable encryption protocols</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">1M</div>
            <div className="text-gray-300">Qubits</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10^18</div>
            <div className="text-gray-300">Operations/Second</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">99.9%</div>
            <div className="text-gray-300">Error Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">2030</div>
            <div className="text-gray-300">Target Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingBreakthroughs2030PromotionBanner;