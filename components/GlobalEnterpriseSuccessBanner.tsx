import React from 'react';
import Link from 'next/link';

export default function GlobalEnterpriseSuccessBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-12 left-12 w-22 h-22 bg-green-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-36 right-16 w-18 h-18 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-16 left-1/4 w-14 h-14 bg-purple-500/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-36 right-1/3 w-16 h-16 bg-yellow-500/20 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/20 border border-green-500/30 mb-8">
            <span className="text-green-400 font-bold text-sm animate-pulse">🏆 SUCCESS STORY</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Global Enterprise Transformation Success
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Fortune 500 company achieves 
            <span className="text-green-400 font-bold"> 12,000% ROI</span> through revolutionary AI transformation
            becoming the most efficient enterprise in their industry.
          </p>

          {/* Results grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-6 rounded-xl border border-green-500/30 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">12,000%</div>
              <div className="text-gray-300">ROI Achieved</div>
            </div>
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-6 rounded-xl border border-blue-500/30 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Efficiency Increase</div>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/30 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">$2.4B</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-800/30 to-orange-800/30 p-6 rounded-xl border border-yellow-500/30 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Autonomous Operation</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Full Case Study
            </Link>
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Start Your Transformation
            </Link>
          </div>

          {/* Testimonial */}
          <div className="mt-12 max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-4">
              "The AI 2025 transformation was the most significant business decision in our 'company', 's history. 
              We achieved results that were previously thought impossible."
            </blockquote>
            <div className="text-lg text-green-400 font-bold">
              Sarah JohnsonCEOGlobal Enterprise Solutions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}