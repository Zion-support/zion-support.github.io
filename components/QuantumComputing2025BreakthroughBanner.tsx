import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Cpu, Zap, Shield, Globe, TrendingUp, Star } from 'lucide-react';

const QuantumComputing2025BreakthroughBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 mb-6">
            <Atom className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-indigo-200">Quantum Computing 2025 Breakthrough</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quantum Computing
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Breakthrough 2025
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Witness the revolutionary quantum computing breakthroughs that will transform industries, 
            solve complex problems, and unlock unprecedented computational power in 2025.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/quantum-computing-2025-breakthrough" 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Atom className="w-5 h-5 mr-2" />
              Explore Quantum Breakthroughs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/quantum-computing-solutions" 
              className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-cyan-400 hover:bg-cyan-400/10 text-cyan-200 font-semibold rounded-lg transition-all duration-300"
            >
              <Cpu className="w-5 h-5 mr-2" />
              View Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Breakthrough Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Error-Corrected Quantum</h3>
            <p className="text-gray-300 text-sm">Revolutionary error correction enabling practical quantum computing</p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quantum Internet</h3>
            <p className="text-gray-300 text-sm">Global quantum communication network infrastructure</p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quantum Supremacy</h3>
            <p className="text-gray-300 text-sm">Achieving computational advantages over classical systems</p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quantum Algorithms</h3>
            <p className="text-gray-300 text-sm">Advanced algorithms solving real-world problems</p>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">2025 Quantum Breakthroughs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Star className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">1000+ Qubit Systems</h4>
                <p className="text-gray-300 text-sm">Achieving stable quantum systems with over 1000 qubits for practical applications</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">99.9% Error Correction</h4>
                <p className="text-gray-300 text-sm">Revolutionary error correction rates enabling reliable quantum computation</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Global Quantum Network</h4>
                <p className="text-gray-300 text-sm">Worldwide quantum communication infrastructure connecting major cities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-gray-300">Qubit Systems</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Error Correction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10x</div>
            <div className="text-gray-300">Faster Processing</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Quantum Algorithms</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputing2025BreakthroughBanner;