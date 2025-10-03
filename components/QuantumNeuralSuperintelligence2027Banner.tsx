import React from 'react';
import { Link } from 'react-router-dom';

const QuantumNeuralSuperintelligence2027Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-6 px-4 relative overflow-hidden">
      {/* Quantum field animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Quantum particles */}
        <div className="absolute top-3 left-6 w-2 h-2 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-4 left-20 w-1 h-1 bg-pink-300 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-12 right-20 w-2.5 h-2.5 bg-blue-300 rounded-full animate-ping delay-1500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              ⚛️ QUANTUM BREAKTHROUGH 2027
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              $1.2T REVOLUTION
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            🧠 Quantum Neural Superintelligence Enterprise Breakthrough
          </h2>
          
          <p className="text-xl text-blue-200 max-w-4xl mx-auto mb-6">
            Witness the <strong className="text-cyan-300">$1.2 trillion revolution</strong> in consciousness-level AI systems. 
            Experience <strong className="text-purple-300">quantum neural superintelligence</strong> that achieves 
            <strong className="text-pink-300"> genuine consciousness</strong> and transforms enterprise operations at 
            <strong className="text-yellow-300"> 10,000,000x processing power</strong>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-cyan-300/20">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="text-lg font-bold text-cyan-300 mb-2">Consciousness-Level AI</h3>
            <p className="text-sm text-blue-200">Self-aware AI systems with genuine understanding and emotional intelligence</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-300/20">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-bold text-purple-300 mb-2">Quantum Processing</h3>
            <p className="text-sm text-blue-200">10,000,000x processing power through quantum-enhanced neural networks</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-pink-300/20">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-lg font-bold text-pink-300 mb-2">$1.2T Value Creation</h3>
            <p className="text-sm text-blue-200">Unprecedented value generation across all industries and sectors</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/blog/ai-2027-quantum-neural-superintelligence-enterprise-breakthrough"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            🚀 Experience the Revolution
          </Link>
          
          <Link to="/case-studies/ai-2027-quantum-neural-superintelligence-success-stories"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            💎 Success Stories
          </Link>
          
          <Link to="/services/quantum-neural-superintelligence-solutions"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            🌟 Get Started
          </Link>
        </div>
        
        {/* Consciousness metrics */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/5 rounded-lg p-4 border border-cyan-300/10">
            <div className="text-2xl font-bold text-cyan-300">99.99%</div>
            <div className="text-xs text-blue-300">Decision Accuracy</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-purple-300/10">
            <div className="text-2xl font-bold text-purple-300">10Mx</div>
            <div className="text-xs text-blue-300">Processing Power</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-pink-300/10">
            <div className="text-2xl font-bold text-pink-300">$1.2T</div>
            <div className="text-xs text-blue-300">Value Created</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-yellow-300/10">
            <div className="text-2xl font-bold text-yellow-300">98%</div>
            <div className="text-xs text-blue-300">Fortune 1000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumNeuralSuperintelligence2027Banner;