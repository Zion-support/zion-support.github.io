import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Cpu, Shield, Globe, Zap, Calendar, TrendingUp } from 'lucide-react';

const QuantumComputing2026_2030PredictionsPromotionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold mb-6">
            <Atom className="w-4 h-4 mr-2" />
            NEW: Quantum Computing 2026-2030 Predictions
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Quantum Revolution
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Timeline 2026-2030
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the complete roadmap of quantum computing breakthroughs from quantum supremacy 
            to quantum singularity. Prepare your organization for the most transformative technology 
            revolution in human history.
          </p>

          {/* Timeline Preview */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-indigo-400/50 transition-all duration-300">
              <div className="text-2xl font-bold text-indigo-400 mb-2">2026</div>
              <div className="text-sm text-white font-semibold mb-1">Quantum Supremacy</div>
              <div className="text-xs text-gray-300">1000+ Qubits</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-2xl font-bold text-purple-400 mb-2">2027</div>
              <div className="text-sm text-white font-semibold mb-1">Error Correction</div>
              <div className="text-xs text-gray-300">10,000+ Qubits</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-2xl font-bold text-blue-400 mb-2">2028</div>
              <div className="text-sm text-white font-semibold mb-1">Quantum Internet</div>
              <div className="text-xs text-gray-300">Global Network</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-2xl font-bold text-cyan-400 mb-2">2029</div>
              <div className="text-sm text-white font-semibold mb-1">Quantum-AI Fusion</div>
              <div className="text-xs text-gray-300">1Millionx Speedup</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-2xl font-bold text-yellow-400 mb-2">2030</div>
              <div className="text-sm text-white font-semibold mb-1">Quantum Singularity</div>
              <div className="text-xs text-gray-300">Superintelligence</div>
            </div>
          </div>

          {/* Key Breakthroughs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-600/20 rounded-lg mb-4 mx-auto">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Error-Corrected Quantum</h3>
              <p className="text-gray-300 text-sm">0.001% error rate with 10,000+ qubits by 2027</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mb-4 mx-auto">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum Internet</h3>
              <p className="text-gray-300 text-sm">Global secure quantum communication network by 2028</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4 mx-auto">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum-AI Fusion</h3>
              <p className="text-gray-300 text-sm">1Millionx computational speedup by 2029</p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-1">1000+</div>
              <div className="text-sm text-gray-300">Qubits by 2026</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">0.001%</div>
              <div className="text-sm text-gray-300">Error Rate by 2027</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">Global</div>
              <div className="text-sm text-gray-300">Quantum Internet by 2028</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">1Millionx</div>
              <div className="text-sm text-gray-300">Speedup by 2029</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/quantum-predictions-2026-2030"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Full Timeline
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/quantum-strategy-consulting"
              className="group border-2 border-white/30 hover:border-indigo-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-lg"
            >
              Get Strategic Planning
              <Calendar className="w-5 h-5 ml-2 inline group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm mb-4">Based on research from leading quantum computing institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">IBM Quantum</div>
              <div className="text-white font-semibold">Google Quantum AI</div>
              <div className="text-white font-semibold">Microsoft Quantum</div>
              <div className="text-white font-semibold">IonQ</div>
              <div className="text-white font-semibold">Rigetti Computing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputing2026_2030PredictionsPromotionBanner;