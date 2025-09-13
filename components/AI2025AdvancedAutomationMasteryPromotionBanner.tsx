import React from 'react';
import Link from 'next/link';

export default function AI2025AdvancedAutomationMasteryPromotionBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white bg-opacity-10 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW BREAKTHROUGH CONTENT</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            🎯 AI 2025 Advanced Automation Mastery: Complete Implementation Guide
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-4xl mx-auto">
            Master the most advanced AI automation techniques of 2025. Learn from Fortune 500 implementations 
            and achieve unprecedented efficiency gains with our proven methodologies. Includes real case studies 
            showing 2,400% ROI and $180M annual savings.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">2,400%</div>
              <div className="text-sm">Proven ROI</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-300">$180M</div>
              <div className="text-sm">Annual Savings</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-300">95%</div>
              <div className="text-sm">Efficiency Gain</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2025-advanced-automation-mastery"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📚 Read Complete Guide
            </Link>
            <Link
              href="/case-studies/ai-2025-global-enterprise-automation-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              🏆 View Case Study
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🛠️ Get Toolkit
            </Link>
          </div>
          
          <div className="mt-6 text-sm opacity-75">
            ⏰ Limited Time: Free implementation consultation with guide purchase
          </div>
        </div>
      </div>
    </section>
  );
}