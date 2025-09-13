import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Rocket, Globe, Star } from 'lucide-react';

const RevolutionaryAI2025PromotionBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-cyan-500 rounded-full opacity-15 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          {/* Main Headline */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <Zap className="w-4 h-4 mr-2" />
            REVOLUTIONARY AI 2025
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
              AI is Here
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced AI ecosystem ever created. From autonomous business operations to quantum-enhanced analytics, 
            we're revolutionizing how humanity interacts with artificial intelligence.
          </p>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Brain className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Neural Interfaces</h3>
              <p className="text-gray-300 text-sm">Direct brain-AI communication</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Rocket className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Space Colonization</h3>
              <p className="text-gray-300 text-sm">Autonomous space settlement AI</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Globe className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Metaverse AI</h3>
              <p className="text-gray-300 text-sm">Complete virtual reality ecosystem</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Star className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Quantum AI</h3>
              <p className="text-gray-300 text-sm">Quantum-enhanced analytics</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/revolutionary-ai-ecosystem"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center group"
            >
              Explore Revolutionary AI
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/contact"
              className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500%</div>
            <div className="text-gray-300 text-sm">Average ROI</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">47+</div>
            <div className="text-gray-300 text-sm">Fortune 500 Clients</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">99.9%</div>
            <div className="text-gray-300 text-sm">Uptime Guarantee</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">AI Support</div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default RevolutionaryAI2025PromotionBanner;