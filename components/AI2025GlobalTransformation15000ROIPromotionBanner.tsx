import React from 'react';
import Link from 'next/link';

export default function AI2025GlobalTransformation15000ROIPromotionBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-36 h-36 bg-white rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-bold animate-bounce">🏆 BREAKTHROUGH SUCCESS</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            💰 Fortune 500 Achieves 15,000% ROI with AI Transformation - See How!
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-5xl mx-auto">
            Real case study: How a Fortune 500 manufacturing company saved 
            <span className="font-bold text-yellow-300"> $345M annually</span> and achieved 
            <span className="font-bold text-yellow-300"> 15,000% ROI</span> in just 12 months using our revolutionary AI solutions.
            <span className="block mt-2 text-sm">
              ✅ 85% process automation ✅ 99.9% system uptime ✅ Global deployment across 15 countries
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="/case-studies/ai-2025-global-transformation-breakthrough-15000-roi"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📊 Read Full Case Study
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              🛠️ Get Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="bg-yellow-400 text-green-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Start Your Transformation
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300">15,000%</div>
              <div className="text-sm">ROI Achieved</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300">$345M</div>
              <div className="text-sm">Annual Savings</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300">85%</div>
              <div className="text-sm">Automation</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300">12</div>
              <div className="text-sm">Months</div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-4 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold mb-2">🎯 What You'll Learn:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                Exact implementation strategy
              </div>
              <div className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                ROI calculation methodology
              </div>
              <div className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                Technology stack details
              </div>
              <div className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                Timeline and milestones
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm opacity-80">
            🔥 Limited Time: Free consultation call with our AI transformation experts
          </div>
        </div>
      </div>
    </section>
  );
}