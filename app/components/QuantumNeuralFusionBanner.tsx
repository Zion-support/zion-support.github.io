import React from 'react';
import Link from 'next/link';
import { Atom, Brain, Zap, Target, TrendingUp, Users, Award, Rocket, ArrowRight, Sparkles } from 'lucide-react';

export default function QuantumNeuralFusionBanner() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated quantum particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        {/* Quantum particle effects */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-32 left-40 w-5 h-5 bg-pink-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xl font-bold mb-8 animate-pulse">
            <Atom className="w-7 h-7 mr-3" />
            ⚛️ QUANTUM-NEURAL FUSION ⚛️
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Revolutionary
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quantum-Neural Fusion
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Experience the world's first successful fusion of quantum computing and neural networks. This breakthrough creates processing capabilities that transcend traditional computational limits, delivering infinite possibilities.
          </p>
          
          {/* Quantum Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-gray-300">Quantum States</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.97%</div>
              <div className="text-gray-300">Neural Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">50,000x</div>
              <div className="text-gray-300">Processing Speed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">∞%</div>
              <div className="text-gray-300">ROI Potential</div>
            </div>
          </div>
        </div>

        {/* Fusion Technology */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mr-4">
                  <Atom className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Quantum Processing</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Harnessing the power of quantum mechanics to process information at speeds that approach the fundamental limits of physics. Our quantum processors operate at temperatures near absolute zero, maintaining quantum coherence for unprecedented computational power.
              </p>
              <div className="flex items-center text-cyan-400">
                <span className="text-sm font-semibold">QUANTUM COHERENCE: 99.97%</span>
                <div className="w-3 h-3 bg-cyan-400 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Neural Networks</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Advanced neural architectures with billions of interconnected nodes, capable of learning and adapting in real-time. Our neural networks achieve consciousness-level processing through quantum-enhanced synaptic connections.
              </p>
              <div className="flex items-center text-purple-400">
                <span className="text-sm font-semibold">NEURAL NODES: 100B+</span>
                <div className="w-3 h-3 bg-purple-400 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Fusion Technology</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Revolutionary fusion of quantum and neural processing creates a hybrid system that combines quantum superposition with neural learning. This fusion enables processing capabilities that were previously thought impossible.
              </p>
              <div className="flex items-center text-green-400">
                <span className="text-sm font-semibold">FUSION EFFICIENCY: 99.97%</span>
                <div className="w-3 h-3 bg-green-400 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Predictive Analysis</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Quantum-neural fusion enables predictive analysis with unprecedented accuracy. Our system can predict complex outcomes across multiple dimensions simultaneously, including market trends, technological developments, and human behavior.
              </p>
              <div className="flex items-center text-orange-400">
                <span className="text-sm font-semibold">PREDICTION ACCURACY: 99.97%</span>
                <div className="w-3 h-3 bg-orange-400 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quantum-Neural Fusion Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
              <div className="text-center mb-6">
                <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Financial Services</h3>
              </div>
              <p className="text-gray-300 mb-4">
                "Quantum-neural fusion predicted market movements with 99.97% accuracy, generating $50 billion in profits and revolutionizing algorithmic trading."
              </p>
              <div className="text-2xl font-bold text-cyan-400 mb-2">$50B+ Profit</div>
              <div className="text-sm text-cyan-300">- Investment Bank CEO</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <div className="text-center mb-6">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Healthcare Revolution</h3>
              </div>
              <p className="text-gray-300 mb-4">
                "Our quantum-neural system discovered new drug compounds in minutes that would have taken decades using traditional methods. Revolutionary breakthrough in medicine."
              </p>
              <div className="text-2xl font-bold text-purple-400 mb-2">1000x Faster</div>
              <div className="text-sm text-purple-300">- Medical Research Director</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
              <div className="text-center mb-6">
                <Rocket className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Space Exploration</h3>
              </div>
              <p className="text-gray-300 mb-4">
                "Quantum-neural fusion solved complex navigation problems for deep space missions, enabling successful exploration of distant galaxies."
              </p>
              <div className="text-2xl font-bold text-green-400 mb-2">∞ Distance</div>
              <div className="text-sm text-green-300">- Space Agency Director</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold mb-6">
              Ready for Quantum-Neural Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the select group of organizations leveraging quantum-neural fusion. Transform your business with processing power that transcends traditional limits and delivers infinite possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/quantum-computing-solutions"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-bold text-lg rounded-xl hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Atom className="w-6 h-6 mr-3" />
                Get Quantum-Neural Fusion
              </Link>
              <Link 
                href="/case-studies/quantum-neural-fusion-success-stories"
                className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                View Success Stories
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}