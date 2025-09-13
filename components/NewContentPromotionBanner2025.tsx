import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp, Users } from 'lucide-react';

export default function NewContentPromotionBanner2025() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 text-yellow-300" />
            New Content Available
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Discover AI 2025 Breakthroughs
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Explore revolutionary AI innovations, interactive tools, and real-world success stories that are transforming industries worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
              <Zap className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Interactive Tools</h3>
              <p className="text-sm text-blue-100">Try AI tools live</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
              <TrendingUp className="w-8 h-8 text-green-300 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Success Stories</h3>
              <p className="text-sm text-blue-100">Real ROI results</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
              <Users className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Expert Insights</h3>
              <p className="text-sm text-blue-100">Industry expertise</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/ai-2025-breakthrough-innovations" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg"
            >
              Explore Breakthroughs <ArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/ai-tools-demonstration" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Try AI Tools
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              View Success Stories
            </Link>
          </div>

          <div className="mt-8 text-sm text-blue-200">
            <p>Join 10,000+ businesses already transforming with AI</p>
          </div>
        </div>
      </div>
    </div>
  );
}