import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Cpu } from 'lucide-react';

const QuantumNeuralFusionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl border border-purple-500/20 shadow-2xl">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/20 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="flex items-center gap-2 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-400/30">
                <Zap className="w-4 h-4 text-purple-300" />
                <span className="text-purple-200 text-sm font-medium">BREAKTHROUGH 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                <Brain className="w-4 h-4 text-blue-300" />
                <span className="text-blue-200 text-sm font-medium">QUANTUM AI</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                Quantum Neural Fusion
              </span>
              <br />
              <span className="text-white">Breakthrough Technology</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Experience the most revolutionary AI advancement since machine learning. 
              <span className="text-purple-300 font-semibold"> 10,000x processing power</span> with 
              <span className="text-blue-300 font-semibold"> 98.5% accuracy</span> in complex problem-solving.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Cpu className="w-6 h-6 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">Parallel Universe Computing</h3>
                <p className="text-gray-300 text-sm">Process multiple scenarios simultaneously across quantum dimensions</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Brain className="w-6 h-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">Instantaneous Learning</h3>
                <p className="text-gray-300 text-sm">Learn from future events to improve past decisions</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Zap className="w-6 h-6 text-indigo-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">Exponential Processing</h3>
                <p className="text-gray-300 text-sm">10,000x improvement over traditional AI systems</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/services/quantum-neural-fusion-2026"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Explore QNF Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/blog/ai-2026-february-quantum-neural-fusion-breakthrough"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                Read Breakthrough Article
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual Section */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              {/* Quantum Neural Network Visualization */}
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-400/30 backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
                    </div>
                  ))}
                </div>
                
                {/* Quantum Entanglement Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 50 50 Q 100 25 150 50 Q 100 75 50 50"
                      stroke="url(#quantumGradient)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                    />
                    <path
                      d="M 50 150 Q 100 125 150 150 Q 100 175 50 150"
                      stroke="url(#quantumGradient)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                      style={{ animationDelay: '500ms' }}
                    />
                  </svg>
                </div>
                
                <div className="text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Quantum Neural Mesh</h3>
                  <p className="text-gray-300 text-sm">Distributed intelligence across quantum dimensions</p>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30 text-center">
                  <div className="text-2xl font-bold text-green-300">98.5%</div>
                  <div className="text-green-200 text-sm">Accuracy Rate</div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/30 text-center">
                  <div className="text-2xl font-bold text-purple-300">10,000x</div>
                  <div className="text-purple-200 text-sm">Speed Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>
    </div>
  );
};

export default QuantumNeuralFusionBanner;