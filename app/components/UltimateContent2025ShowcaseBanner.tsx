import React from 'react';
import Link from 'next/link';

export default function UltimateContent2025ShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
            🚀 NEW: Ultimate Content 2025 Showcase
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI 2025: The Enterprise
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolution Begins
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how Fortune 500 companies are achieving <strong className="text-yellow-300">500%+ ROI</strong> with 
            cutting-edge AI solutions. Real case studies, proven strategies, and actionable insights.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">500%+</div>
              <div className="text-blue-100 text-sm md:text-base">Average ROI</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">$2.8B</div>
              <div className="text-blue-100 text-sm md:text-base">Annual Savings</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">98%</div>
              <div className="text-blue-100 text-sm md:text-base">Success Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl md:text-4xl font-bold text-pink-300 mb-2">18</div>
              <div className="text-blue-100 text-sm md:text-base">Months to ROI</div>
            </div>
          </div>
          
          {/* Featured Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            {/* Featured Blog Post */}
            <Link href="/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    📖 Featured Article
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  AI 2025: The Enterprise AI Revolution
                </h3>
                <p className="text-blue-100 mb-4 text-sm md:text-base">
                  Complete guide to achieving 500%+ ROI with advanced AI automation and machine learning solutions.
                </p>
                <div className="flex items-center text-yellow-300 font-medium">
                  Read Full Article →
                </div>
              </div>
            </Link>
            
            {/* Featured Case Study */}
            <Link href="/case-studies/fortune-500-ai-transformation-ultimate-success-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    📊 Case Study
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  Fortune 500 AI Transformation
                </h3>
                <p className="text-blue-100 mb-4 text-sm md:text-base">
                  Real-world success story: $2.8B annual savings in 18 months with 567% ROI achievement.
                </p>
                <div className="flex items-center text-yellow-300 font-medium">
                  View Success Story →
                </div>
              </div>
            </Link>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your AI Journey
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              View All Success Stories
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-blue-200 text-sm mb-4">Trusted by Fortune 500 companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">🏢 Fortune 500</div>
              <div className="text-white font-semibold">🌍 Global Enterprises</div>
              <div className="text-white font-semibold">🏭 Manufacturing Leaders</div>
              <div className="text-white font-semibold">🏦 Financial Giants</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-pink-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
}