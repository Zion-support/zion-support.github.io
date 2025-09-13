import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Target, Brain, TrendingUp } from 'lucide-react';

const NewContent2025UltimateBreakthroughBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border border-purple-500/20 rounded-xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative px-6 py-8 md:px-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full mb-4">
                <Star className="h-4 w-4 mr-2" />
                New Ultimate Content Available
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI 2025-2026 Ultimate Trends
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Revolutionary Breakthrough
                </span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-6 max-w-2xl">
                Discover the most revolutionary AI trends, case studies, and implementation guides 
                that will transform your business with 2,500-5,000% ROI achievement.
              </p>
              
              {/* Feature Highlights */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Target className="h-4 w-4 text-green-400" />
                  <span>50,000% ROI Case Study</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Brain className="h-4 w-4 text-blue-400" />
                  <span>Quantum Consciousness</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Zap className="h-4 w-4 text-purple-400" />
                  <span>Autonomous Operations</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/blog/ai-2025-2026-ultimate-trends-breakthrough"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Ultimate Trends
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/case-studies/ai-2025-revolutionary-enterprise-transformation-50000-roi"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  View 50,000% ROI Story
                </Link>
              </div>
            </div>
            
            {/* Right Content - Visual Elements */}
            <div className="flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                {/* ROI Achievement Card */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-green-500/20">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-400">50,000%</div>
                    <div className="text-xs text-gray-400">ROI Achieved</div>
                  </div>
                </div>
                
                {/* Quantum Breakthrough Card */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
                  <div className="text-center">
                    <Brain className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-400">10,000x</div>
                    <div className="text-xs text-gray-400">Faster Processing</div>
                  </div>
                </div>
                
                {/* Autonomous Operations Card */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-xs text-gray-400">Autonomous</div>
                  </div>
                </div>
                
                {/* Implementation Guide Card */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/20">
                  <div className="text-center">
                    <Target className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-yellow-400">100%</div>
                    <div className="text-xs text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
    </div>
  );
};

export default NewContent2025UltimateBreakthroughBanner;