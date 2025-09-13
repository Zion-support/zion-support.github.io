import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Star, TrendingUp, Users } from 'lucide-react';

export default function AI2025UltimateContentRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 border border-purple-500/30 rounded-2xl mb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-pink-500/10 to-purple-600/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"></div>
      
      <div className="relative z-10 p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm">
                <Zap className="w-4 h-4 mr-1" />
                NEW
              </div>
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="ml-2 text-sm font-semibold">Ultimate Content Revolution</span>
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              The Ultimate Content Revolution
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Has Arrived
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Experience the most advanced AI-powered content ecosystem ever created. 
              Transform your business with <span className="text-yellow-400 font-bold">10,000%+ ROI</span> through revolutionary content strategies.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2 text-white">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="font-bold">10,000%+ ROI</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="font-bold">10,000+ Success Stories</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="font-bold">99.9% Accuracy</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/ai-2025-ultimate-content-revolution"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Explore Revolution
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="/ai-2025-revolutionary-content-showcase"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors duration-300"
              >
                View Showcase
              </Link>
            </div>
          </div>
          
          {/* Right content - Visual elements */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-purple-600/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-yellow-400/30 to-purple-600/30 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400/40 to-purple-600/40 rounded-full flex items-center justify-center">
                    <Zap className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400"></div>
    </div>
  );
}