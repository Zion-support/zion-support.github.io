import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-sm font-medium text-white">🚀 NEW CONTENT 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Solutions
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Transforming Industries
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover cutting-edge AI technologies, automation solutions, and digital transformation strategies 
            that are reshaping the future of business and technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 text-green-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">500% ROI Increase</h3>
              <p className="text-blue-100 text-sm">Average business transformation results</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">10,000+ Companies</h3>
              <p className="text-blue-100 text-sm">Already transformed with our solutions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Zap className="h-8 w-8 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">90% Faster</h3>
              <p className="text-blue-100 text-sm">Process automation and optimization</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              Explore New Content
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300/20 rounded-full animate-ping"></div>
    </div>
  );
};

export default NewContentPromotionBanner2025;