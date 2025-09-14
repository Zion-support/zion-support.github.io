import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimateShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-20-20v20h20c0-11.046-8.954-20-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white border-opacity-30">
            🆕 NEW CONTENT 2025
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Solutions
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Now Available
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explore our latest breakthrough content featuring quantum AI, autonomous systems, 
            and enterprise transformation strategies that deliver unprecedented results.
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quantum AI Content */}
          <Link href="/blog/quantum-ai-2026-business-revolution" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 h-full">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  🔬 Quantum AI
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                Quantum AI Business Revolution
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Discover how quantum computing is revolutionizing business operations with 1,200% ROI potential.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-300 text-sm font-medium">Read More →</span>
                <span className="text-blue-200 text-xs">20 min read</span>
              </div>
            </div>
          </Link>
          
          {/* Autonomous Systems */}
          <Link href="/blog/ai-2025-autonomous-business-revolution-ultimate" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 h-full">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  🤖 Autonomous
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                Autonomous Business Systems
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Learn how to implement fully autonomous business operations for maximum efficiency.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-300 text-sm font-medium">Read More →</span>
                <span className="text-blue-200 text-xs">25 min read</span>
              </div>
            </div>
          </Link>
          
          {/* Enterprise Transformation */}
          <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 h-full">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  🏢 Enterprise
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                Global Enterprise Success
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Multi-national corporation achieves 450% ROI across 15 countries with AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-300 text-sm font-medium">Read More →</span>
                <span className="text-blue-200 text-xs">18 min read</span>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Success Metrics */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Proven Results Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">$100B+</div>
              <div className="text-blue-100 text-sm">Market Cap Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">500+</div>
              <div className="text-blue-100 text-sm">Enterprises Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">99.7%</div>
              <div className="text-blue-100 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-300 mb-2">25+</div>
              <div className="text-blue-100 text-sm">Countries Served</div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 right-20 w-16 h-16 bg-yellow-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
    </div>
  );
}