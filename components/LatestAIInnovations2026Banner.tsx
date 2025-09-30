import React from 'react';
import Link from 'next/link';

export default function LatestAIInnovations2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🚀 New Release
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                January 2026
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Latest AI Innovations 2026: 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Revolutionary Breakthroughs
              </span>
            </h2>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Discover the cutting-edge AI technologies that are transforming industries in 2026. 
              From autonomous systems to quantum-enhanced AI, explore the innovations driving 
              unprecedented business growth and efficiency.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">400%</div>
                <div className="text-sm opacity-90">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">85%</div>
                <div className="text-sm opacity-90">Efficiency Gain</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">$2.3M</div>
                <div className="text-sm opacity-90">Avg. Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-autonomous-systems-2026"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Explore AI Innovations →
              </Link>
              <Link
                href="/case-studies/ai-retail-transformation-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 text-center"
              >
                View Success Stories
              </Link>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Autonomous Systems</h3>
                  <p className="text-sm opacity-90 mb-3">
                    Self-learning systems that make complex decisions and adapt independently
                  </p>
                  <Link
                    href="/blog/ai-autonomous-systems-2026"
                    className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Retail AI Transformation</h3>
                  <p className="text-sm opacity-90 mb-3">
                    200% revenue growth and 85% cost reduction in 12 months
                  </p>
                  <Link
                    href="/case-studies/ai-retail-transformation-2026"
                    className="text-green-300 font-semibold hover:text-green-200 transition-colors"
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Interactive ROI Calculator</h3>
                  <p className="text-sm opacity-90 mb-3">
                    Calculate your organization's potential AI transformation ROI
                  </p>
                  <a
                    href="#roi-calculator"
                    className="text-purple-300 font-semibold hover:text-purple-200 transition-colors"
                  >
                    Try Calculator →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/40 rounded-full animate-pulse delay-2000"></div>
    </section>
  );
}