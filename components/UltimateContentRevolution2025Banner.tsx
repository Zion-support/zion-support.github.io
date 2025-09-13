import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Star, TrendingUp } from 'lucide-react';

const UltimateContentRevolution2025Banner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-cyan-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-green-400/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3 animate-spin" />
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Ultimate Content Revolution
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-3 animate-spin" />
          </div>
          
          <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 mb-6">
            2025 Breakthrough Edition
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most comprehensive collection of AI predictions, quantum computing breakthroughs, 
            and revolutionary technology solutions that will transform your business in 2025 and beyond.
          </p>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">AI 2025-2030 Predictions</h3>
              <p className="text-gray-300">Comprehensive future technology roadmap</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Star className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Quantum Breakthroughs</h3>
              <p className="text-gray-300">Next-generation computing solutions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">ROI Calculator</h3>
              <p className="text-gray-300">Calculate your transformation ROI</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/ai-2025-ultimate-content-revolution" 
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              Explore Ultimate Content
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/ai-2025-ultimate-breakthrough" 
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              View Breakthroughs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Content Pieces</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">2,500%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">10,000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentRevolution2025Banner;