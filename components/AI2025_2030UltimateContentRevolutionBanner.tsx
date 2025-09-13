import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Rocket, Star, TrendingUp } from 'lucide-react';

const AI2025_2030UltimateContentRevolutionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-purple-200">2025-2030 Ultimate Content Revolution</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Ultimate AI Content
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Revolution 2025-2030
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most comprehensive collection of AI predictions, quantum computing breakthroughs, 
            and revolutionary automation solutions that will reshape the future of technology and business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/ai-2025-2030-ultimate-content-revolution" 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Ultimate Content
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/ai-2025-2030-predictions" 
              className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-400 hover:bg-purple-400/10 text-purple-200 font-semibold rounded-lg transition-all duration-300"
            >
              <Brain className="w-5 h-5 mr-2" />
              View Predictions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Predictions</h3>
            <p className="text-gray-300 text-sm">Comprehensive 2025-2030 AI forecasts and breakthrough predictions</p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quantum Computing</h3>
            <p className="text-gray-300 text-sm">Revolutionary quantum breakthroughs and computing solutions</p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Automation Solutions</h3>
            <p className="text-gray-300 text-sm">Advanced automation and intelligent process solutions</p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Future Tech</h3>
            <p className="text-gray-300 text-sm">Cutting-edge technology trends and innovations</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Content Pieces</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Expert Predictions</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-300">Case Studies</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030UltimateContentRevolutionBanner;