import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Target, TrendingUp } from 'lucide-react';

const RevolutionaryTech2025PromotionBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 text-white py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-semibold">REVOLUTIONARY TECHNOLOGY 2025</span>
            <Zap className="w-5 h-5 text-yellow-300" />
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Transform Your Business</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              with Revolutionary AI
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-100">
            Discover breakthrough AI solutions that deliver unprecedented ROI and competitive advantage. 
            Join thousands of forward-thinking companies already transforming their operations.
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-green-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">5000%</div>
              <div className="text-blue-200">Average ROI</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mx-auto mb-4">
                <Target className="w-6 h-6 text-blue-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">30 Days</div>
              <div className="text-blue-200">Implementation</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/revolutionary-ai-ecosystem"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Explore Revolutionary AI
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/case-studies"
              className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center gap-2"
            >
              View Success Stories
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-2xl font-bold">Fortune 500</div>
              <div className="text-2xl font-bold">Global Enterprises</div>
              <div className="text-2xl font-bold">Innovation Leaders</div>
              <div className="text-2xl font-bold">Tech Pioneers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTech2025PromotionBanner;