import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, TrendingUp, Users, Star, Globe } from 'lucide-react';

const NewContentPromotionBanner2025 = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-cyan-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Banner */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white mb-8">
              <Sparkles className="w-5 h-5 mr-2 text-yellow-300" />
              🚀 NEW CONTENT LAUNCH - JANUARY 2025
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Revolutionary
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                Content Hub
              </span>
              <span className="block text-3xl md:text-5xl text-purple-200">
                Now Live!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-10">
              Discover cutting-edge AI solutions, quantum computing breakthroughs, and revolutionary technology insights that are transforming industries worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/ai-innovation-hub-2025"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explore AI Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/quantum-computing-solutions-2025"
                className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Globe className="w-5 h-5 mr-2" />
                Quantum Computing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Automation Suite</h3>
              <p className="text-purple-100 leading-relaxed">
                Comprehensive AI tools that automate business processes and increase productivity by 300%.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Success Stories</h3>
              <p className="text-purple-100 leading-relaxed">
                Real-world case studies showcasing how our solutions transform businesses globally.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Future Tech</h3>
              <p className="text-purple-100 leading-relaxed">
                Quantum computing, neural interfaces, and next-generation technology insights.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-300/30 rounded-full text-sm font-semibold text-yellow-200 mb-6">
              <Star className="w-4 h-4 mr-2" />
              LIMITED TIME: Get 50% Off Premium Content
            </div>
            
            <p className="text-lg text-purple-100 mb-6">
              Join thousands of professionals who are already transforming their businesses with our cutting-edge solutions.
            </p>
            
            <Link 
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-2xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Start Your Transformation Today
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentPromotionBanner2025;