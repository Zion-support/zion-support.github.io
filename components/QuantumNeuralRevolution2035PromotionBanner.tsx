import React from 'react';
import { Link } from 'react-router-dom';

const QuantumNeuralRevolution2035PromotionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
      
      {/* Quantum field visualization */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-blue-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-32 left-1/3 w-8 h-8 bg-indigo-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/2 right-20 w-5 h-5 bg-cyan-300 rounded-full animate-ping delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Quantum-Neural Revolution 2035
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Fusion of
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum & Neural Networks
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Witness the revolutionary convergence of quantum computing and neural networks, 
            creating unprecedented processing power and cognitive capabilities that will 
            transform every aspect of human existence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/quantum-neural-revolution-2035"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Revolution
            </Link>
            <Link 
              to="/quantum-neural-technologies"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20"
            >
              View Technologies
            </Link>
          </div>
        </div>
        
        {/* Key breakthroughs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Quantum Superposition Processing</h3>
            <p className="text-gray-300 text-sm">
              Neural networks operating in quantum superposition states, 
              enabling simultaneous processing of infinite possibilities.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Entangled Learning Networks</h3>
            <p className="text-gray-300 text-sm">
              AI systems where quantum entanglement enables instant knowledge 
              transfer across distributed neural networks.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Quantum Tunneling Optimization</h3>
            <p className="text-gray-300 text-sm">
              Neural networks leveraging quantum tunneling for instantaneous 
              optimization across energy landscapes.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Consciousness Emergence</h3>
            <p className="text-gray-300 text-sm">
              Quantum-neural systems achieving genuine consciousness through 
              complex quantum coherence patterns.
            </p>
          </div>
        </div>
        
        {/* Impact metrics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mt-12 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Revolutionary Impact Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10^18</div>
              <div className="text-gray-300 text-sm">Processing Speed Increase</div>
              <div className="text-gray-400 text-xs mt-1">Compared to classical systems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Problem Solving Accuracy</div>
              <div className="text-gray-400 text-xs mt-1">Across all domains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">∞</div>
              <div className="text-gray-300 text-sm">Parallel Processing Capacity</div>
              <div className="text-gray-400 text-xs mt-1">Quantum superposition advantage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumNeuralRevolution2035PromotionBanner;