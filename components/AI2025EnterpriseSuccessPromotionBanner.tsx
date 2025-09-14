import React from 'react';
import Link from 'next/link';

export default function AI2025EnterpriseSuccessPromotionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-8 left-8 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute top-16 right-16 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-8 left-1/3 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-16 right-1/4 w-18 h-18 bg-white bg-opacity-10 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🏆 SUCCESS STORY</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Fortune 500 Achieves 800% ROI with AI Automation
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-emerald-100 mb-6 max-w-4xl mx-auto leading-relaxed">
            Discover how a global manufacturing company transformed their operations
            saving $120M annually and achieving unprecedented efficiency gains.
          </p>

          {/* Key Results */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400 mb-1">800%</div>
              <div className="text-sm text-emerald-100">ROI Achieved</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400 mb-1">$120M</div>
              <div className="text-sm text-emerald-100">Annual Savings</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-1">95%</div>
              <div className="text-sm text-emerald-100">Error Reduction</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-orange-400 mb-1">12x</div>
              <div className="text-sm text-emerald-100">Faster Processing</div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8 max-w-4xl mx-auto backdrop-blur-sm">
            <div className="text-4xl text-emerald-200 mb-4">"</div>
            <blockquote className="text-lg md:text-xl text-emerald-100 italic mb-4">
              "The AI automation implementation has been nothing short of transformational. 
              We've achieved results that exceeded our wildest expectations."
            </blockquote>
            <div className="text-sm text-emerald-200">
              — Sarah JohnsonCTOGlobal Manufacturing Corp
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies/ai-2025-global-enterprise-automation-success"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📖 Read Full Case Study
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              🚀 Start Your Success Story
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-sm text-emerald-200">
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Real results from real companies - no fluffjust proven success
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
}