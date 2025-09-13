import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Zap, Cpu, Shield, Sparkles } from 'lucide-react';

const QuantumComputing2025PromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-full text-lg font-bold mb-6">
            <Atom className="w-5 h-5" />
            QUANTUM COMPUTING 2025
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Quantum Revolution
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Beyond Classical Limits
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-5xl mx-auto leading-relaxed">
            Experience the power of quantum computing with our breakthrough 2025 platform. 
            Process complex problems 10,000x faster than classical computers while maintaining quantum coherence and error correction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Atom className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Supremacy</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Achieve computational advantages impossible with classical systems through quantum entanglement and superposition.
            </p>
            <div className="text-cyan-400 font-bold text-xl">10,000x Speed</div>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Zap className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Error Correction</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Advanced quantum error correction algorithms maintaining coherence for extended quantum computations.
            </p>
            <div className="text-purple-400 font-bold text-xl">99.9% Accuracy</div>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Cpu className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Hybrid Systems</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Seamless integration of quantum and classical computing for optimal performance across all applications.
            </p>
            <div className="text-green-400 font-bold text-xl">Hybrid Power</div>
          </div>

          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Security</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Unbreakable quantum encryption and security protocols protecting data with quantum mechanics principles.
            </p>
            <div className="text-orange-400 font-bold text-xl">Unbreakable</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-6">
              Quantum Applications Transforming Industries
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From drug discovery to financial modeling, quantum computing is revolutionizing how we solve the world's most complex problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Drug Discovery</h4>
              <p className="text-gray-300">Accelerate molecular simulation and drug development by 1000x</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Financial Modeling</h4>
              <p className="text-gray-300">Optimize portfolios and risk analysis with quantum algorithms</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Atom className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Climate Modeling</h4>
              <p className="text-gray-300">Simulate complex climate systems for accurate predictions</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link 
              to="/quantum-computing-2025" 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-10 py-5 rounded-2xl font-bold text-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center gap-3 shadow-2xl"
            >
              Explore Quantum Solutions
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link 
              to="/quantum-demo" 
              className="bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Try Quantum Demo
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Live Quantum Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>24/7 Quantum Access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputing2025PromotionBanner;