import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContent2025Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-8 shadow-lg border border-white border-opacity-20">
            🌟 REVOLUTIONARY BREAKTHROUGH 2025
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Future of AI is
            <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Here Today
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-4xl mx-auto">
            Experience the next generation of AI solutions that are transforming industries and 
            creating unprecedented opportunities for growth and innovation.
          </p>
        </div>
        
        {/* Featured Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Major Content */}
          <div className="space-y-6">
            <Link href="/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough" className="group block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    🚀 Featured Article
                  </span>
                  <span className="text-purple-200 text-sm">18 min read</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                  AI 2025: The Enterprise Revolution
                </h3>
                <p className="text-purple-100 mb-6 text-base">
                  Discover how Fortune 500 companies are achieving 500%+ ROI with advanced AI automation 
                  and machine learning solutions that are transforming entire industries.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-green-500 bg-opacity-20 text-green-300 px-3 py-1 rounded-full">500%+ ROI</span>
                    <span className="bg-blue-500 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full">$2.8B Savings</span>
                  </div>
                  <span className="text-yellow-300 font-medium">Read Full Article →</span>
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/fortune-500-ai-transformation-ultimate-success-2025" className="group block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    📊 Success Story
                  </span>
                  <span className="text-purple-200 text-sm">22 min read</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                  Fortune 500 Transformation
                </h3>
                <p className="text-purple-100 mb-6 text-base">
                  Real-world case study showing how a Fortune 500 manufacturing company achieved 
                  567% ROI through comprehensive AI implementation in just 18 months.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-green-500 bg-opacity-20 text-green-300 px-3 py-1 rounded-full">567% ROI</span>
                    <span className="bg-purple-500 bg-opacity-20 text-purple-300 px-3 py-1 rounded-full">18 Months</span>
                  </div>
                  <span className="text-yellow-300 font-medium">View Success Story →</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Right Column - Additional Content */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <h3 className="text-xl font-bold text-white mb-4">🔥 Trending Topics</h3>
              <div className="space-y-4">
                <Link href="/blog/quantum-ai-2026-business-revolution" className="group block">
                  <div className="flex items-center justify-between p-3 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all">
                    <div>
                      <h4 className="text-white font-medium group-hover:text-yellow-300 transition-colors">
                        Quantum AI Revolution
                      </h4>
                      <p className="text-purple-200 text-sm">1,200% ROI potential</p>
                    </div>
                    <span className="text-yellow-300">→</span>
                  </div>
                </Link>
                
                <Link href="/blog/ai-2025-autonomous-business-revolution-ultimate" className="group block">
                  <div className="flex items-center justify-between p-3 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all">
                    <div>
                      <h4 className="text-white font-medium group-hover:text-yellow-300 transition-colors">
                        Autonomous Systems
                      </h4>
                      <p className="text-purple-200 text-sm">Fully automated operations</p>
                    </div>
                    <span className="text-yellow-300">→</span>
                  </div>
                </Link>
                
                <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="group block">
                  <div className="flex items-center justify-between p-3 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all">
                    <div>
                      <h4 className="text-white font-medium group-hover:text-yellow-300 transition-colors">
                        Global Transformation
                      </h4>
                      <p className="text-purple-200 text-sm">450% ROI across 15 countries</p>
                    </div>
                    <span className="text-yellow-300">→</span>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <h3 className="text-xl font-bold text-white mb-4">📈 Impact Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">$100B+</div>
                  <div className="text-purple-200 text-xs">Market Cap Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">500+</div>
                  <div className="text-purple-200 text-xs">Companies Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">99.7%</div>
                  <div className="text-purple-200 text-xs">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-300">25+</div>
                  <div className="text-purple-200 text-xs">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Join the AI Revolution?
            </h3>
            <p className="text-purple-100 mb-6 text-lg">
              Transform your business with proven AI solutions that deliver unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-pink-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
}