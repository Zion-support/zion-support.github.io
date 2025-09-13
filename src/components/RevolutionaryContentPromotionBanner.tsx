import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Brain, Rocket, Zap, Star } from 'lucide-react';

const RevolutionaryContentPromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-rose-900 via-pink-900 to-purple-900 py-12">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-rose-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">New Content</span>
              <Star className="w-4 h-4 text-yellow-400" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Revolutionary Content Just Released
            <span className="block bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
              Experience the Future Today
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            Discover groundbreaking AI predictions, quantum consciousness breakthroughs, 
            neural interface revolution, and space technology solutions that will reshape our world.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500/20 rounded-lg mb-2 mx-auto">
                <Brain className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-xs text-white font-medium">AI 2035</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center w-8 h-8 bg-emerald-500/20 rounded-lg mb-2 mx-auto">
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xs text-white font-medium">Neural Interface</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center w-8 h-8 bg-violet-500/20 rounded-lg mb-2 mx-auto">
                <Rocket className="w-4 h-4 text-violet-400" />
              </div>
              <p className="text-xs text-white font-medium">Space Tech</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-500/20 rounded-lg mb-2 mx-auto">
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
              <p className="text-xs text-white font-medium">Quantum AI</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ai-2035-omniversal-consciousness-showcase" 
              className="group bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore All Content</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/revolutionary-content-showcase" 
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center space-x-2"
            >
              <span>Content Hub</span>
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-6 text-sm text-gray-400">
            <p>✨ Latest breakthroughs • 🚀 Future predictions • 🌌 Revolutionary insights</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentPromotionBanner;