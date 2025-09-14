import React from 'react';
import Link from 'next/link';
ArrowRightTrendingUpUsersDollarSignAwardCheckCircleStar

export default function AISuccessStories2025Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-2xl mx-4 my-8 border border-purple-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M30 30c0-16.569-13.431-30-30-30v30h30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                NEW: Real Success Stories
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Success Stories
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> 2025</span>
                <br />
                Real ResultsReal Impact
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover how leading companies achieved unprecedented results with our AI solutions. 
                <span className="text-yellow-400 font-semibold"> Average ROI: 2,400% | 500+ Companies Transformed | $2.5B+ Total Savings</span>
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-white">
                  <TrendingUp className="w-5 h-5 mr-3 text-purple-400" />
                  <div>
                    <div className="font-semibold">2,400% Average ROI</div>
                    <div className="text-sm text-gray-400">Proven Results</div>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <Users className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <div className="font-semibold">500+ Companies</div>
                    <div className="text-sm text-gray-400">Transformed</div>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <DollarSign className="w-5 h-5 mr-3 text-green-400" />
                  <div>
                    <div className="font-semibold">$2.5B+ Savings</div>
                    <div className="text-sm text-gray-400">Total Impact</div>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 text-orange-400" />
                  <div>
                    <div className="font-semibold">99.2% Success Rate</div>
                    <div className="text-sm text-gray-400">Guaranteed Results</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/ai-success-stories-2025" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Success Stories
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Start Your Story
                </Link>
              </div>
            </div>
            
            {/* Right Content - Success Story Highlights */}
            <div className="relative">
              <div className="space-y-6">
                {/* Featured Success Story */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">TechCorp Global</h3>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">Manufacturing • AI Quality Control</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">2,500%</div>
                      <div className="text-gray-300 text-xs">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">99.8%</div>
                      <div className="text-gray-300 text-xs">Accuracy</div>
                    </div>
                  </div>
                </div>
                
                {/* Second Success Story */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">FinanceFlow Inc</h3>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">Financial Services • Fraud Detection</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">1,800%</div>
                      <div className="text-gray-300 text-xs">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">99.5%</div>
                      <div className="text-gray-300 text-xs">Accuracy</div>
                    </div>
                  </div>
                </div>
                
                {/* Third Success Story */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">HealthTech Solutions</h3>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">Healthcare • Medical AI</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">3,200%</div>
                      <div className="text-gray-300 text-xs">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                      <div className="text-gray-300 text-xs">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
    </div>
  );
}