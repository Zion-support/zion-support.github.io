import React from 'react';
import { Link } from 'react-router-dom';

const QuantumComputingBreakthroughBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-lg font-bold mb-8 animate-bounce">
            ⚛️ QUANTUM COMPUTING BREAKTHROUGH 2028
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Quantum Computing
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">Revolution</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl lg:text-4xl mb-12 text-gray-200 max-w-5xl mx-auto leading-relaxed">
            Experience the future of computing with <span className="text-cyan-400 font-bold">quantum-AI fusion</span> that delivers <span className="text-yellow-400 font-bold">8000% ROI</span> and solves impossible problems
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-6xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Quantum-AI Fusion</h3>
              <p className="text-gray-200 text-lg">Revolutionary integration of quantum computing with artificial intelligence for unprecedented processing power</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">8000% ROI</h3>
              <p className="text-gray-200 text-lg">Proven return on investment with quantum computing solutions in enterprise environments</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Quantum Algorithms</h3>
              <p className="text-gray-200 text-lg">Advanced quantum algorithms that solve complex optimization problems in seconds</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              to="/quantum-computing-implementation-guide"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-10 py-5 rounded-full font-bold text-xl hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Implementation Guide
            </Link>
            <Link
              to="/quantum-computing-roi-calculator"
              className="bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Calculate Quantum ROI
            </Link>
            <Link
              to="/quantum-computing-demo"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              Watch Demo
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">8000%</div>
              <div className="text-lg text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">1000x</div>
              <div className="text-lg text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">99.9%</div>
              <div className="text-lg text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400">24/7</div>
              <div className="text-lg text-gray-300">Quantum Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Quantum Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-cyan-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-10 w-12 h-12 bg-pink-400/20 rounded-full animate-pulse delay-3000"></div>
    </div>
  );
};

export default QuantumComputingBreakthroughBanner;