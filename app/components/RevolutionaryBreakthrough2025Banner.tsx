import React from 'react';
import Link from 'next/link';

const RevolutionaryBreakthrough2025Banner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          {/* Breaking News Badge */}
          <div className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
            BREAKING: AI 2025 Revolutionary Breakthrough
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthrough
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the <strong className="text-yellow-400">2000% ROI</strong> success story that's revolutionizing business operations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Success Metrics */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Revolutionary Results</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">2000%</div>
                  <div className="text-sm text-gray-300">ROI Achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">$2.8B</div>
                  <div className="text-sm text-gray-300">Revenue Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
                  <div className="text-sm text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-sm text-gray-300">System Uptime</div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <h4 className="text-xl font-bold mb-4 text-yellow-400">Revolutionary Features</h4>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Quantum-Enhanced Neural Networks
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Autonomous Business Orchestration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Predictive Business Intelligence
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Self-Optimizing Systems
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Content Links */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">New Revolutionary Content</h3>
              
              <div className="space-y-6">
                {/* Blog Post Link */}
                <Link 
                  href="/blog/ai-2025-revolutionary-breakthrough-ultimate-automation-revolution"
                  className="block group"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold mr-2">NEW</span>
                          <span className="text-sm text-gray-300">Blog Post</span>
                        </div>
                        <h4 className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                          AI 2025: Revolutionary Breakthrough Guide
                        </h4>
                        <p className="text-sm text-gray-300 mb-3">
                          Complete guide to the revolutionary AI automation breakthrough transforming businesses
                        </p>
                        <div className="flex items-center text-yellow-400 text-sm">
                          <span>Read More</span>
                          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-4xl ml-4">🚀</div>
                    </div>
                  </div>
                </Link>

                {/* Case Study Link */}
                <Link 
                  href="/case-studies/ai-2025-revolutionary-breakthrough-2000-roi-success-story"
                  className="block group"
                >
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold mr-2">FEATURED</span>
                          <span className="text-sm text-gray-300">Case Study</span>
                        </div>
                        <h4 className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                          2000% ROI Success Story
                        </h4>
                        <p className="text-sm text-gray-300 mb-3">
                          Fortune 500 company achieves unprecedented success with revolutionary AI implementation
                        </p>
                        <div className="flex items-center text-yellow-400 text-sm">
                          <span>View Case Study</span>
                          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-4xl ml-4">💰</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Revolution?</h3>
              <p className="text-lg mb-6 opacity-90">
                Transform your business with the same revolutionary AI breakthrough
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-yellow-600 transition-colors transform hover:scale-105"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">500+</div>
              <div className="text-sm text-gray-300">Companies Transformed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">$50B+</div>
              <div className="text-sm text-gray-300">Value Generated</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryBreakthrough2025Banner;