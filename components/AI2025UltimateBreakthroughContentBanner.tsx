import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Target, TrendingUp, Star } from 'lucide-react';

const AI2025UltimateBreakthroughContentBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-300 font-semibold">2025 Ultimate Breakthrough</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI 2025 Ultimate
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Breakthrough Content
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most revolutionary AI breakthroughs, quantum computing solutions, and automation technologies that will transform your business in 2025 and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/ai-2025-ultimate-breakthrough" 
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="flex items-center">
                Explore Breakthroughs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/quantum-computing-2025" 
              className="group bg-transparent border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10"
            >
              <span className="flex items-center">
                Quantum Solutions
                <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Neural Breakthroughs</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary neural network architectures achieving 99.9% accuracy in complex decision-making processes.
            </p>
            <div className="flex items-center text-purple-300 font-semibold">
              <TrendingUp className="w-5 h-5 mr-2" />
              10,000x Performance Boost
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Supremacy</h3>
            <p className="text-gray-300 mb-6">
              Error-corrected quantum computers solving problems impossible for classical systems.
            </p>
            <div className="flex items-center text-blue-300 font-semibold">
              <Target className="w-5 h-5 mr-2" />
              Unlimited Processing Power
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous Operations</h3>
            <p className="text-gray-300 mb-6">
              Self-managing AI systems that optimize business processes without human intervention.
            </p>
            <div className="flex items-center text-green-300 font-semibold">
              <TrendingUp className="w-5 h-5 mr-2" />
              2,500% ROI Guaranteed
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-300 font-semibold">
              Limited Time: Get Early Access to 2025 Breakthroughs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateBreakthroughContentBanner;