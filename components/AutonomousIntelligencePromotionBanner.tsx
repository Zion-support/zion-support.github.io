import React from 'react';
import Link from 'next/link';

export default function AutonomousIntelligencePromotionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white opacity-10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🧠 BREAKTHROUGH TECHNOLOGY</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            🚀 Autonomous Business Intelligence Breakthrough
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Revolutionary AI systems that provide autonomous business insights with 
            <span className="font-semibold text-yellow-300"> 95% accuracy improvements</span> and 
            <span className="font-semibold text-green-300"> 2000% ROI</span>. 
            Transform your decision-making process with cutting-edge autonomous intelligence.
          </p>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-xl font-semibold mb-2">95% Accuracy</h3>
              <p className="text-sm opacity-90">Unprecedented decision accuracy with autonomous AI analysis</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="text-xl font-semibold mb-2">2000% ROI</h3>
              <p className="text-sm opacity-90">Proven return on investment from global finance leader</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Real-Time</h3>
              <p className="text-sm opacity-90">Instant insights and automated recommendations</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-autonomous-business-intelligence-breakthrough"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              🧠 Learn About Breakthrough
            </Link>
            <Link
              href="/case-studies/ai-2025-global-finance-autonomous-intelligence-breakthrough"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg transform hover:scale-105 transition-transform"
            >
              💰 View 2000% ROI Case Study
            </Link>
            <Link
              href="/resources/ai-2025-autonomous-intelligence-implementation-master-guide"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-purple-600 transition-colors text-lg transform hover:scale-105 transition-transform"
            >
              📚 Get Implementation Guide
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Global Finance Leader Success</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span>6-Month Implementation Timeline</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span>Enterprise-Grade Security</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20">
            <p className="text-lg mb-4">
              <strong>Ready to transform your business intelligence?</strong>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg"
            >
              🚀 Get Started Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}