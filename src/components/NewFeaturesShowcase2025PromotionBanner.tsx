import React from 'react';
import Link from 'next/link';
ArrowRightSparklesZapStarCheckCircle

export default function NewFeaturesShowcase2025PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-white font-medium text-sm">NEW FEATURES</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Revolutionary
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  New Features
                </span>
                <span className="block text-3xl md:text-4xl text-gray-300">Available Now</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover 500+ new features that are transforming how businesses operatecreate contentand engage with their audiences in 2025.
              </p>
              
              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300 text-sm">AI Content Generation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300 text-sm">Real-time Analytics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300 text-sm">Advanced Security</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300 text-sm">Workflow Automation</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/features"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Features
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Try Demo
                </Link>
              </div>
            </div>
            
            {/* Right Content - Feature Cards */}
            <div className="space-y-6">
              {/* AI Content Generation */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">AI</span>
                  </div>
                  <div className="text-white font-semibold">AI Content Generation</div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  10x Faster Content Creation
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Automatically generate SEO-optimized content using advanced AI models.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Star className="w-4 h-4 mr-1" />
                    4.9/5 rating
                  </div>
                  <span className="text-yellow-400 text-sm font-medium">
                    New Feature →
                  </span>
                </div>
              </div>
              
              {/* Real-time Analytics */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">📊</span>
                  </div>
                  <div className="text-white font-semibold">Live Analytics</div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Real-time Performance Monitoring
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Monitor content performance with live analytics and AI-driven insights.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Zap className="w-4 h-4 mr-1" />
                    Live updates
                  </div>
                  <span className="text-yellow-400 text-sm font-medium">
                    Just Launched →
                  </span>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-6 border border-yellow-400/30">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-yellow-400 font-semibold mb-1">New Features</div>
                  <div className="text-gray-300 text-sm">Added in 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl"></div>
    </div>
  );
}