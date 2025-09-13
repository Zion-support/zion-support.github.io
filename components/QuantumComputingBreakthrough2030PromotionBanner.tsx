import React from 'react';
import Link from 'next/link';
import { Atom, Zap, Cpu, Star, TrendingUp, ArrowRight } from 'lucide-react';

const QuantumComputingBreakthrough2030PromotionBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-16 h-16 bg-cyan-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-purple-400/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-indigo-400/20 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Star className="w-4 h-4 mr-2" />
            QUANTUM SUPREMACY ACHIEVED
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            QUANTUM BREAKTHROUGH 2030
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            🚀 <strong>HISTORIC ACHIEVEMENT:</strong> The world's first commercially viable quantum computers with 10,000+ logical qubits, full error correction, and practical quantum advantage across all industries
          </p>

          {/* Key Achievements */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-400 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">10,000+ Logical Qubits</h3>
              <p className="text-gray-300 text-sm">Fully error-corrected quantum processors solving impossible problems</p>
              <div className="text-cyan-400 font-bold mt-2">Available Now</div>
            </div>

            <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="bg-gradient-to-r from-purple-400 to-indigo-400 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">10^12x Speedup</h3>
              <p className="text-gray-300 text-sm">Exponential computational advantages over classical systems</p>
              <div className="text-purple-400 font-bold mt-2">Revolutionary</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
              <div className="bg-gradient-to-r from-indigo-400 to-pink-400 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Atom className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">Commercial Ready</h3>
              <p className="text-gray-300 text-sm">Production-grade quantum systems for enterprise deployment</p>
              <div className="text-indigo-400 font-bold mt-2">Enterprise Ready</div>
            </div>
          </div>

          {/* Revolutionary Applications */}
          <div className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Applications Now Available
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg p-3">
                <div className="font-semibold text-cyan-400">Climate Modeling</div>
                <div className="text-gray-300">99.9% accuracy</div>
              </div>
              <div className="bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-lg p-3">
                <div className="font-semibold text-purple-400">Quantum Security</div>
                <div className="text-gray-300">Unbreakable encryption</div>
              </div>
              <div className="bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-lg p-3">
                <div className="font-semibold text-indigo-400">Drug Discovery</div>
                <div className="text-gray-300">10x faster</div>
              </div>
              <div className="bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-lg p-3">
                <div className="font-semibold text-pink-400">Financial Modeling</div>
                <div className="text-gray-300">Perfect accuracy</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quantum-computing-2030" className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Atom className="w-5 h-5 mr-2" />
              Explore Quantum Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/quantum-applications" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center">
              View Applications
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Urgency Message */}
          <div className="mt-8 p-4 bg-gradient-to-r from-green-600/20 to-cyan-600/20 border border-green-500/30 rounded-xl">
            <p className="text-green-300 font-semibold">
              ⚡ BREAKTHROUGH ALERT: First 50 organizations get exclusive access to 10,000+ qubit quantum systems
            </p>
          </div>

          {/* Performance Metrics */}
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">10,000+</div>
              <div className="text-sm text-gray-300">Logical Qubits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">10^12x</div>
              <div className="text-sm text-gray-300">Speedup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-gray-300">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthrough2030PromotionBanner;