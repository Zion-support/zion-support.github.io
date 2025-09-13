import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Star, TrendingUp } from 'lucide-react';

export default function AI2025UltimateContentRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl mx-4 my-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                NEW: Ultimate Content Revolution
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI 2025
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Ultimate Content</span>
                <br />
                Revolution
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover the most comprehensive collection of AI breakthroughs, predictions, and revolutionary content that will transform your understanding of artificial intelligence. 
                <span className="text-yellow-400 font-semibold"> 500+ articles, 50+ experts, 1M+ monthly readers.</span>
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-white">
                  <Brain className="w-5 h-5 mr-2 text-purple-400" />
                  <span className="font-medium">AI Predictions 2025-2030</span>
                </div>
                <div className="flex items-center text-white">
                  <Zap className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="font-medium">Quantum Computing</span>
                </div>
                <div className="flex items-center text-white">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  <span className="font-medium">Neural Interfaces</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/ai-2025-ultimate-content-revolution" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Ultimate Content
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/ai-2025-ultimate-content-revolution#content-showcase" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  View Categories
                </Link>
              </div>
            </div>
            
            {/* Right Content - Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* Stats Cards */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-white font-medium">AI Articles</div>
                  <div className="text-gray-300 text-sm">Expert Content</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-white font-medium">Expert Authors</div>
                  <div className="text-gray-300 text-sm">Industry Leaders</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">1M+</div>
                  <div className="text-white font-medium">Monthly Readers</div>
                  <div className="text-gray-300 text-sm">Global Audience</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                  <div className="text-white font-medium">Accuracy Rate</div>
                  <div className="text-gray-300 text-sm">Verified Content</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
    </div>
  );
}