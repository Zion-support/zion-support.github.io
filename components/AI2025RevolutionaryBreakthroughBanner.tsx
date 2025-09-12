import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, TrendingUp, Star } from 'lucide-react';

export default function AI2025RevolutionaryBreakthroughBanner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center mb-4">
              <div className="flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mr-4">
                <Star className="w-4 h-4 mr-1" />
                BREAKTHROUGH INNOVATION
              </div>
              <div className="flex items-center px-3 py-1 bg-green-500/20 rounded-full text-sm font-semibold">
                <TrendingUp className="w-4 h-4 mr-1" />
                NEW CONTENT
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI 2025: Revolutionary
              <span className="block text-yellow-300">Breakthroughs</span>
            </h2>
            
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Discover the most groundbreaking AI innovations of 2025 that are reshaping industries, 
              from quantum-enhanced neural networks to autonomous business intelligence systems.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Brain className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-sm font-semibold">Quantum AI</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-sm font-semibold">2000% ROI</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-sm font-semibold">Global Impact</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-sm font-semibold">Industry First</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/blog/ai-2025-revolutionary-breakthroughs"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Read Full Article
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Case Study
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-6">
                  <Brain className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Revolutionary AI Breakthroughs
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-white font-medium">Quantum Neural Networks</span>
                    <span className="text-yellow-300 font-bold">99.7%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-white font-medium">ROI Achievement</span>
                    <span className="text-green-300 font-bold">2000%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-white font-medium">Global Deployment</span>
                    <span className="text-blue-300 font-bold">50+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-white font-medium">Cost Savings</span>
                    <span className="text-purple-300 font-bold">$2.5B</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
}