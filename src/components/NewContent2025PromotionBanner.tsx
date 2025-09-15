import React from 'react';
import Link from 'next/link';
ArrowRightSparklesTrendingUpUsersClock

export default function NewContent2025PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-white font-medium text-sm">NEW CONTENT ALERT</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Discover the Latest
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  AI Innovations
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Explore cutting-edge AI technologiesbreakthrough case studiesand revolutionary insights that are reshaping industries in 2025.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-gray-400 text-sm">New Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">25+</div>
                  <div className="text-gray-400 text-sm">Case Studies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100K+</div>
                  <div className="text-gray-400 text-sm">Readers</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/ai-2025-latest-innovations"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Read Latest Innovations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/case-studies/ai-2025-global-tech-transformation-mega-success"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  View Success Stories
                </Link>
              </div>
            </div>
            
            {/* Right Content - Featured Content Cards */}
            <div className="space-y-6">
              {/* Featured Blog Post */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">AI</span>
                  </div>
                  <div className="text-white font-semibold">Latest Blog Post</div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  AI 2025: Latest Innovations and Breakthrough Technologies
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Discover quantum AI fusioneural interfacesand autonomous systems revolutionizing industries.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    5 min read
                  </div>
                  <Link
                    href="/blog/ai-2025-latest-innovations"
                    className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
              
              {/* Featured Case Study */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">CS</span>
                  </div>
                  <div className="text-white font-semibold">Featured Case Study</div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Global Tech Giant: 50,000% ROI Success
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  How a Fortune 500 company achieved unprecedented ROI through AI transformation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    500K+ employees
                  </div>
                  <Link
                    href="/case-studies/ai-2025-global-tech-transformation-mega-success"
                    className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 border border-yellow-400/30">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50,000%</div>
                  <div className="text-yellow-400 font-semibold mb-1">ROI Achieved</div>
                  <div className="text-gray-300 text-sm">by our latest client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl"></div>
    </div>
  );
}