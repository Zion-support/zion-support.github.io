import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Cpu, Sparkles, TrendingUp, Star } from 'lucide-react';

const AI2025_2030UltimateBreakthroughContentBanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/30 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">🚀 ULTIMATE BREAKTHROUGH 2025-2030</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI 2025-2030 Ultimate
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Breakthrough Content
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most comprehensive collection of AI predictions, quantum computing breakthroughs, 
            and revolutionary technology insights spanning 2025-2030. Discover the future of artificial intelligence.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Brain className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-white font-medium">Neural Synthesis</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Cpu className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-white font-medium">Quantum Computing</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-medium">Autonomous Systems</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-white font-medium">2,500% ROI</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* AI 2025 Breakthroughs */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI 2025 Breakthroughs</h3>
                  <p className="text-gray-400 text-sm">Revolutionary AI Advances</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Discover the most advanced AI systems, neural networks, and machine learning breakthroughs 
                that will reshape industries in 2025.
              </p>
              <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                <span>Explore Content</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Quantum Computing 2026-2030 */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Quantum Computing 2026-2030</h3>
                  <p className="text-gray-400 text-sm">Quantum Supremacy Era</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Explore the quantum revolution with error-corrected quantum computers, quantum internet, 
                and quantum-AI fusion technologies.
              </p>
              <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                <span>Explore Content</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Autonomous Systems 2027-2030 */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Autonomous Systems 2027-2030</h3>
                  <p className="text-gray-400 text-sm">Self-Managing AI</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Learn about fully autonomous AI systems, self-healing networks, and intelligent automation 
                that requires zero human intervention.
              </p>
              <div className="flex items-center text-green-400 font-medium group-hover:text-green-300 transition-colors">
                <span>Explore Content</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">500+ Articles</h4>
            <p className="text-gray-400 text-sm">Comprehensive content library</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">2,500% ROI</h4>
            <p className="text-gray-400 text-sm">Proven business impact</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">99.9% Accuracy</h4>
            <p className="text-gray-400 text-sm">AI prediction precision</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">10,000x Faster</h4>
            <p className="text-gray-400 text-sm">Processing speed boost</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ai-2025-2030-predictions" 
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center">
                Explore Ultimate Content
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </Link>
            <Link 
              to="/quantum-computing-2026-2030" 
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Quantum Breakthroughs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            Join 50,000+ professionals already using our breakthrough content to stay ahead of the AI revolution
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030UltimateBreakthroughContentBanner;