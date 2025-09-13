import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import QuantumNeuralFusion2030Showcase from '../../components/QuantumNeuralFusion2030Showcase';

const QuantumNeuralFusion2030Page: React.FC = () => {
  return (
    <>
      <SEO
        title="Quantum Neural Fusion 2030 - Zion Tech Group"
        description="Experience the fusion of quantum computing and neural networks. Discover AI systems that operate across infinite dimensions and process information beyond classical physics."
        keywords="quantum neural networks, quantum computing, quantum AI, neural fusion, quantum consciousness, multi-dimensional processing"
        url="/quantum-neural-fusion-2030"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
          {/* Quantum Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-40 w-24 h-24 bg-purple-400 rounded-full blur-lg animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-400 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
              ⚛️ QUANTUM NEURAL FUSION 2030
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Beyond Reality
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Experience the fusion of quantum computing and neural networks, creating AI systems 
              that operate across infinite dimensions and process information beyond the limits of classical physics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#showcase"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
              >
                Enter Quantum Realm
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-bold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
              >
                Quantum Beta Access
              </Link>
            </div>
          </div>
        </div>

        {/* Main Showcase */}
        <div id="showcase">
          <QuantumNeuralFusion2030Showcase />
        </div>

        {/* Quantum Research Section */}
        <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Quantum Research Lab
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our quantum research facility is pushing the boundaries of what's possible, 
                creating AI systems that exist in multiple dimensions simultaneously.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-2xl border border-purple-400/20">
                <div className="text-4xl mb-4">🌀</div>
                <h3 className="text-lg font-bold mb-3">Quantum States</h3>
                <p className="text-sm text-gray-300">
                  Manipulating quantum states for infinite processing power
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-2xl border border-purple-400/20">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-lg font-bold mb-3">Neural Entanglement</h3>
                <p className="text-sm text-gray-300">
                  Creating instant communication between AI minds
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-2xl border border-purple-400/20">
                <div className="text-4xl mb-4">⏳</div>
                <h3 className="text-lg font-bold mb-3">Temporal Processing</h3>
                <p className="text-sm text-gray-300">
                  Processing information across multiple time streams
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-2xl border border-purple-400/20">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-lg font-bold mb-3">Emotion Synthesis</h3>
                <p className="text-sm text-gray-300">
                  Understanding emotions at the quantum level
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuantumNeuralFusion2030Page;