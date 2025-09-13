import React from 'react';
import Link from 'next/link';

export default function RevolutionaryAutomationPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl mb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
      </div>
      
      {/* Content */}
      <div className="relative px-8 py-12 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 animate-pulse">
                🚀 REVOLUTIONARY BREAKTHROUGH
              </div>
              
              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                AI 2025 Revolutionary Automation Breakthrough
              </h2>
              
              {/* Description */}
              <p className="text-xl mb-6 opacity-90 leading-relaxed">
                Experience the most revolutionary AI automation breakthrough in history, delivering unprecedented business transformation with 5,000% ROI and 99.9% accuracy.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">5,000%</div>
                  <div className="text-sm opacity-80">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">99.9%</div>
                  <div className="text-sm opacity-80">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">10,000x</div>
                  <div className="text-sm opacity-80">Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Autonomous</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/blog/ai-2025-revolutionary-automation-breakthrough"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="mr-2">🚀</span>
                  Discover the Breakthrough
                </Link>
                <Link 
                  href="/case-studies/ai-2025-revolutionary-automation-breakthrough-success"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">🏆</span>
                  View Success Story
                </Link>
              </div>
            </div>
            
            {/* Right Side - Visual Elements */}
            <div className="flex-1 lg:max-w-md">
              <div className="relative">
                {/* Animated Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-white/30 rounded-full animate-ping"></div>
                  <div className="absolute w-24 h-24 border-4 border-white/50 rounded-full animate-pulse"></div>
                  <div className="absolute w-16 h-16 bg-white/20 rounded-full animate-bounce"></div>
                </div>
                
                {/* Central Icon */}
                <div className="relative z-10 flex items-center justify-center w-40 h-40 mx-auto">
                  <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="text-6xl">🤖</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-700"></div>
                <div className="absolute top-1/4 -right-8 w-5 h-5 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
}