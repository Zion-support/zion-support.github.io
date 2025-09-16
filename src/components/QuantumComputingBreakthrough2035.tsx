import React from 'react';
import { ArrowRight, Zap, Brain, Globe, Shield, Cpu } from 'lucide-react';

const QuantumComputingBreakthrough2035: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">BREAKTHROUGH 2035</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quantum Computing
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Revolution
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the world's first commercially viable quantum computing platform that transcends 
            classical limitations and unlocks infinite computational possibilities.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Supremacy</h3>
              <p className="text-gray-300 leading-relaxed">
                Achieve computational speeds 100 million times faster than classical computers 
                with our breakthrough quantum processors.
              </p>
            </div>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum AI</h3>
              <p className="text-gray-300 leading-relaxed">
                Revolutionary artificial intelligence powered by quantum neural networks 
                that process information in parallel universes.
              </p>
            </div>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-pink-900/50 to-red-900/50 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                Transform entire industries with quantum computing solutions that solve 
                problems previously considered impossible.
              </p>
            </div>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Unbreakable encryption and security protocols powered by quantum mechanics 
                for ultimate data protection.
              </p>
            </div>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-green-900/50 to-emerald-900/50 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Processing</h3>
              <p className="text-gray-300 leading-relaxed">
                Process complex algorithms and simulations in real-time with our 
                next-generation quantum processors.
              </p>
            </div>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-orange-900/50 to-yellow-900/50 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Universal Access</h3>
              <p className="text-gray-300 leading-relaxed">
                Democratize quantum computing with cloud-based access to quantum 
                processing power for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              100M
            </div>
            <div className="text-gray-300">Times Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-gray-300">Quantum Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <div className="text-gray-300">Quantum Qubits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-300">Quantum Uptime</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 cursor-pointer group">
            <span>Explore Quantum Future</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          <p className="text-gray-400 mt-4">
            Join the quantum revolution today
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthrough2035;