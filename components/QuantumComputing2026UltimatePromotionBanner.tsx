import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Zap, Shield, Cpu, Star, TrendingUp, CheckCircle } from 'lucide-react';

const QuantumComputing2026UltimatePromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-blue-600/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30">
            <Atom className="w-5 h-5 text-purple-300 mr-2" />
            <span className="text-white font-semibold">BREAKTHROUGH: Quantum Computing 2026</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quantum Computing
            <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Ultimate Revolution
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced quantum computing solutions with error-corrected systems, 
            quantum machine learning, and unhackable quantum internet infrastructure.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/30 rounded-lg mb-4">
                <Atom className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Error-Corrected Quantum</h3>
              <p className="text-white/80 text-sm">99.9% error correction with 1000+ qubits</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/30 rounded-lg mb-4">
                <Cpu className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Machine Learning</h3>
              <p className="text-white/80 text-sm">Exponential speedup for AI algorithms</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/30 rounded-lg mb-4">
                <Shield className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Internet</h3>
              <p className="text-white/80 text-sm">Unhackable global communication network</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-500/30 rounded-lg mb-4">
                <Zap className="w-6 h-6 text-pink-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum-AI Fusion</h3>
              <p className="text-white/80 text-sm">Hybrid quantum and AI processing</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10,000x</div>
              <div className="text-white/80 text-sm">Quantum Advantage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">0.01%</div>
              <div className="text-white/80 text-sm">Error Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1Mx</div>
              <div className="text-white/80 text-sm">Processing Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm">Global Partners</div>
            </div>
          </div>

          {/* Industry Impact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Industry Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300 mb-2">10,000x</div>
                <div className="text-white/80">Faster Portfolio Optimization</div>
                <div className="text-sm text-gray-400">Financial Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300 mb-2">90%</div>
                <div className="text-white/80">Reduction in Discovery Time</div>
                <div className="text-sm text-gray-400">Drug Discovery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300 mb-2">50%</div>
                <div className="text-white/80">Cost Reduction</div>
                <div className="text-sm text-gray-400">Logistics Optimization</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quantum-computing-2026-ultimate"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center group shadow-lg hover:shadow-xl"
            >
              Explore Quantum Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Schedule Quantum Demo
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Leading quantum computing research and development</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white/50 font-semibold">IBM Quantum</div>
              <div className="text-white/50 font-semibold">Google Quantum AI</div>
              <div className="text-white/50 font-semibold">Microsoft Azure Quantum</div>
              <div className="text-white/50 font-semibold">Rigetti Computing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputing2026UltimatePromotionBanner;