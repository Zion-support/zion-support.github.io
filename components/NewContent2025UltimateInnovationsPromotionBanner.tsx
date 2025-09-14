import React from 'react';
import Link from 'next/link';
BrainTrendingUpZapArrowRightStarSparkles

export default function NewContent2025UltimateInnovationsPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 border border-purple-500/30 rounded-xl p-6 mb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold text-sm">NEW CONTENT</span>
          </div>
          <div className="flex items-center space-x-1 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Description */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Revolutionary AI 2025
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Ultimate Innovations
              </span>
            </h2>
            
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Discover the next generation of AI breakthroughs that are transforming industries and reshaping the future of business.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-xs font-medium">
                Neural Interfaces
              </span>
              <span className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-xs font-medium">
                Quantum AI
              </span>
              <span className="px-3 py-1 bg-indigo-600/30 text-indigo-200 rounded-full text-xs font-medium">
                Autonomous Systems
              </span>
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-200 rounded-full text-xs font-medium">
                Transcendent Intelligence
              </span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-green-400 mr-1" />
                <span>99.9% Accuracy</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                <span>2,500% ROI</span>
              </div>
              <div className="flex items-center">
                <Brain className="w-4 h-4 text-green-400 mr-1" />
                <span>Revolutionary</span>
              </div>
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="flex flex-col space-y-3">
            <Link 
              href="/ai-2025-next-generation-innovations"
              className="group flex items-center justify-between p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Next Gen Innovations</h3>
                  <p className="text-gray-300 text-xs">Revolutionary AI breakthroughs</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              href="/ai-trends-2025-ultimate-predictions"
              className="group flex items-center justify-between p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Ultimate Predictions</h3>
                  <p className="text-gray-300 text-xs">AI trends & market analysis</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              href="/services"
              className="group flex items-center justify-between p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-lg hover:from-indigo-600/30 hover:to-purple-600/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">AI Services</h3>
                  <p className="text-gray-300 text-xs">Transform your business</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 pt-4 border-t border-purple-500/20">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <div className="text-sm text-gray-300">
              <span className="text-purple-400 font-semibold">Limited Time:</span> Get exclusive access to revolutionary AI innovations
            </div>
            <Link 
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}