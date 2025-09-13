import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Atom, Cpu } from 'lucide-react';

const QuantumNeuralFusion2025PromotionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-8">
            <Atom className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 text-lg font-semibold">NEW: Quantum Neural Fusion 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Quantum Neural Fusion
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text">
              Revolutionary Breakthrough
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            The world's first successful fusion of quantum computing and neural networks, 
            creating unprecedented processing power and intelligence capabilities
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <Brain className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">100M</div>
              <div className="text-cyan-300 text-sm">Neural Connections</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <Atom className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">512</div>
              <div className="text-purple-300 text-sm">Quantum Qubits</div>
            </div>
            <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 border border-pink-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <Zap className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">1Mx</div>
              <div className="text-pink-300 text-sm">Faster Processing</div>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <Cpu className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">99.99%</div>
              <div className="text-green-300 text-sm">Accuracy Rate</div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-10 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">Quantum Neural Architecture</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Revolutionary architecture combining quantum computing principles with advanced neural networks, 
              enabling processing capabilities that transcend traditional computational limits.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-semibold mb-1">Quantum Superposition Processing</div>
                  <div className="text-gray-400 text-sm">Simultaneous processing of multiple neural states</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-semibold mb-1">Entangled Neural Networks</div>
                  <div className="text-gray-400 text-sm">Quantum entanglement for instant information transfer</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-pink-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-semibold mb-1">Coherent Learning Algorithms</div>
                  <div className="text-gray-400 text-sm">Self-optimizing neural pathways with quantum coherence</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-10 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">Revolutionary Applications</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Transform industries with quantum neural fusion technology, from healthcare breakthroughs 
              to autonomous systems and beyond.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-semibold mb-1">Medical Diagnosis AI</div>
                  <div className="text-gray-400 text-sm">Instant analysis of complex medical data</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-semibold mb-1">Autonomous Vehicles</div>
                  <div className="text-gray-400 text-sm">Real-time decision making in complex environments</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-semibold mb-1">Financial Modeling</div>
                  <div className="text-gray-400 text-sm">Predictive analytics with quantum precision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link 
              to="/quantum-neural-fusion-2025" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore Quantum Neural Fusion
            </Link>
            <Link 
              to="/quantum-neural-demo" 
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 backdrop-blur-sm"
            >
              Watch Live Demo
            </Link>
          </div>
          
          <p className="text-gray-400 text-lg">
            Join 50,000+ researchers and developers exploring the future of computing
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuantumNeuralFusion2025PromotionBanner;