import React from 'react';
import Link from 'next/link';

const BusinessIntelligenceRevolutionBanner2025 = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Data Visualization Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill="%23ffffff" fill-opacity%3D%220.1%22%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3Cpath d="M20 20c0 11.046 8.954 20 20 20V20H20z"/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Animated Charts */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-30">
        <div className="w-full h-full flex items-end justify-center space-x-1">
          <div className="w-4 bg-blue-400 rounded-t animate-pulse" style={{height: '60%'}}></div>
          <div className="w-4 bg-purple-400 rounded-t animate-pulse delay-100" style={{height: '80%'}}></div>
          <div className="w-4 bg-cyan-400 rounded-t animate-pulse delay-200" style={{height: '100%'}}></div>
          <div className="w-4 bg-indigo-400 rounded-t animate-pulse delay-300" style={{height: '70%'}}></div>
          <div className="w-4 bg-pink-400 rounded-t animate-pulse delay-400" style={{height: '90%'}}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <span className="mr-2">📊</span>
            AI BUSINESS INTELLIGENCE REVOLUTION
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Business Intelligence
            </span>
            <br />
            <span className="text-white">
              Revolution 2025-2026
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your decision-making with <span className="text-blue-400 font-semibold">AI-powered BI</span> that delivers 
            <span className="text-cyan-400 font-semibold"> 340% ROI</span> and <span className="text-purple-400 font-semibold">95%+ accuracy</span> in predictions
          </p>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Analytics</h3>
              <p className="text-sm text-gray-300">AI systems process data 24/7identifying insights automatically</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-bold mb-2">Predictive Intelligence</h3>
              <p className="text-sm text-gray-300">95%+ accuracy in predicting market trends and customer behavior</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-lg font-bold mb-2">Natural Language BI</h3>
              <p className="text-sm text-gray-300">Ask questions in plain English and get instant insights</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2">Real-Time Processing</h3>
              <p className="text-sm text-gray-300">Instant analysis of live data streams for immediate insights</p>
            </div>
          </div>

          {/* Industry Impact */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 mb-10 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Industry Transformations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-sm text-gray-300">Fraud Detection Accuracy</div>
                <div className="text-xs text-gray-400 mt-1">Financial Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Quality Control Accuracy</div>
                <div className="text-xs text-gray-400 mt-1">Manufacturing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">95%</div>
                <div className="text-sm text-gray-300">Early Disease Detection</div>
                <div className="text-xs text-gray-400 mt-1">Healthcare</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-2026-ultimate-business-intelligence-revolution"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover BI Revolution
            </Link>
            <Link
              href="/resources/ai-2025-2026-quantum-ml-implementation-ultimate-guide"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Get Implementation Guide
            </Link>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">340%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">85%</div>
              <div className="text-sm text-gray-300">Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">92%</div>
              <div className="text-sm text-gray-300">Decision Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1">67%</div>
              <div className="text-sm text-gray-300">Efficiency Gain</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Data Points */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-4 h-4 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-10 w-5 h-5 bg-pink-400 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default BusinessIntelligenceRevolutionBanner2025;