import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Brain, Rocket } from 'lucide-react';

export default function AI2025UltimateInnovationShowcaseBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary AI Innovations 2025
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Ultimate AI Innovation
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Showcase
                </span>
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Discover the most groundbreaking AI technologies and solutions that are transforming industries and revolutionizing how we work, create, and innovate in 2025.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/ai-2025-ultimate-innovation-showcase"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Explore Innovations
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {/* Innovation Cards */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Consciousness AI</h3>
                    <p className="text-blue-100 text-sm">Self-aware systems</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Quantum AI</h3>
                    <p className="text-blue-100 text-sm">Quantum computing</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Autonomous AI</h3>
                    <p className="text-blue-100 text-sm">Self-improving</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Neural AI</h3>
                    <p className="text-blue-100 text-sm">Brain interfaces</p>
                  </div>
                </div>
                
                {/* Innovation Stats */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">10,000x</div>
                      <div className="text-blue-100 text-sm">Speed Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">99.7%</div>
                      <div className="text-blue-100 text-sm">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">85%</div>
                      <div className="text-blue-100 text-sm">Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}