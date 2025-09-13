import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Brain, TrendingUp, Clock } from 'lucide-react';

const AI2025RevolutionaryBreakthroughContentPromotionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-purple-900/50 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-sm border border-white/20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="p-2 bg-purple-600/20 rounded-xl">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                    NEW CONTENT AVAILABLE
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  AI 2025 Revolutionary Breakthrough Content
                </h2>
                
                <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                  Discover the most groundbreaking AI developments, neural architecture revolutions, and quantum-AI fusion breakthroughs that are reshaping the future of technology.
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Neural Architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Latest Research</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Updated Daily</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/ai-2025-breakthrough-content-showcase"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Explore Breakthrough Content
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/ai-2025-revolutionary-content-showcase"
                    className="inline-flex items-center justify-center border border-white/20 hover:border-purple-500/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-purple-600/10"
                  >
                    View All Articles
                  </Link>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <div className="p-4 bg-purple-600/30 rounded-xl mb-4 mx-auto w-fit">
                        <Brain className="w-12 h-12 text-purple-300" />
                      </div>
                      <div className="text-white font-bold text-lg mb-2">AI 2025</div>
                      <div className="text-purple-300 text-sm">Revolutionary Content</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/30 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-500/30 rounded-full animate-pulse delay-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025RevolutionaryBreakthroughContentPromotionBanner;