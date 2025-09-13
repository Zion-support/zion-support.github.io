import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Brain, Rocket, Star, TrendingUp } from 'lucide-react';

const RevolutionaryTech2026PromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-500/10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-pink-500/10 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/30 to-pink-600/30 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-5 h-5" />
            Revolutionary Technology 2026
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary Technology
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Showcase 2026
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Experience the most advanced collection of revolutionary technologies, 
            breakthrough innovations, and cutting-edge solutions that are reshaping 
            the future of business and society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Revolution</h3>
            <p className="text-gray-200 text-sm mb-4">Next-generation artificial intelligence and machine learning breakthroughs</p>
            <div className="flex items-center text-indigo-300 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-1" />
              300% Growth
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quantum Computing</h3>
            <p className="text-gray-200 text-sm mb-4">Revolutionary quantum technologies and quantum-classical hybrid systems</p>
            <div className="flex items-center text-purple-300 text-sm font-medium">
              <Star className="w-4 h-4 mr-1" />
              5.0 Rating
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Space Technology</h3>
            <p className="text-gray-200 text-sm mb-4">Advanced space exploration and satellite technology solutions</p>
            <div className="flex items-center text-pink-300 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-1" />
              500% ROI
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Neural Interfaces</h3>
            <p className="text-gray-200 text-sm mb-4">Brain-computer interfaces and neural augmentation technologies</p>
            <div className="flex items-center text-blue-300 text-sm font-medium">
              <Star className="w-4 h-4 mr-1" />
              Future Tech
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/revolutionary-tech-2026"
              className="group bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Revolutionary Tech
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/tech-showcase-2026"
              className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 border border-white/30"
            >
              View All Technologies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-sm">Revolutionary Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-300 text-sm">Implementation Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-300 text-sm">Success Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTech2026PromotionBanner;