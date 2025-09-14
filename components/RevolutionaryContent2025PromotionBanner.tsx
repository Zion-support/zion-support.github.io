import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContent2025PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm mb-6">
                🚀 Revolutionary Content Launch
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                AI 2025: Revolutionary Automation Breakthrough
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Discover the automation breakthrough that's transforming industries. Learn how companies 
                are achieving 300% efficiency gains and $50M+ in annual savings through revolutionary AI automation.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-1">300%</div>
                  <div className="text-sm text-blue-100">Efficiency Increase</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-300 mb-1">$50M</div>
                  <div className="text-sm text-blue-100">Annual Savings</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/blog/ai-2025-revolutionary-automation-breakthrough"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Read the Full Article
                  <span className="ml-2">→</span>
                </Link>
                <Link 
                  href="/case-studies/fortune-500-ai-transformation-2025-breakthrough"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm"
                >
                  View Case Study
                </Link>
              </div>
            </div>

            {/* Right Content - Interactive Preview */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  {/* Article Preview */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-lg">📰</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Revolutionary Automation Article</h3>
                        <p className="text-blue-200 text-sm">12 min read • Published Jan 2025</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-white/20 rounded-full">
                        <div className="h-2 bg-yellow-400 rounded-full w-3/4"></div>
                      </div>
                      <div className="flex space-x-4 text-sm text-blue-200">
                        <span>• Neural Process Automation</span>
                        <span>• Quantum-Enhanced Processing</span>
                      </div>
                    </div>
                  </div>

                  {/* Case Study Preview */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-lg">🏆</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Fortune 500 Success Story</h3>
                        <p className="text-blue-200 text-sm">$50M Savings • 300% Efficiency</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-300">$50M</div>
                        <div className="text-xs text-blue-200">Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-300">300%</div>
                        <div className="text-xs text-blue-200">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-300">6mo</div>
                        <div className="text-xs text-blue-200">ROI</div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Elements */}
                  <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl p-4 border border-yellow-400/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold text-sm">Interactive ROI Calculator</h4>
                        <p className="text-yellow-200 text-xs">Calculate your potential savings</p>
                      </div>
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-yellow-800 text-sm">📊</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-yellow-800 text-sm">✨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-green-800 text-xs">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Strip */}
      <div className="bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="px-8 py-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
            <div className="text-white text-sm mb-2 sm:mb-0">
              <span className="font-semibold">Don't miss out:</span> Join 10,000+ executives reading our latest insights
            </div>
            <Link 
              href="/newsletter"
              className="inline-flex items-center px-6 py-2 bg-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              Subscribe Now
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}