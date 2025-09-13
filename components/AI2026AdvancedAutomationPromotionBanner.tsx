import React from 'react';
import Link from 'next/link';

export default function AI2026AdvancedAutomationPromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
              🤖 NEW: ADVANCED AUTOMATION MASTERY 2026
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Master Advanced AI
              <span className="block text-emerald-200">
                Automation Techniques
              </span>
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Transform your business operations with cutting-edge automation frameworks, 
              enterprise-grade optimization strategies, and revolutionary efficiency techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/ai-2026-advanced-automation-mastery"
                className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Master Automation Now
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 text-center"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-emerald-200 text-sm">Process Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">300%</div>
              <div className="text-emerald-200 text-sm">Efficiency Boost</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">$2.5M</div>
              <div className="text-emerald-200 text-sm">Average Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-emerald-200 text-sm">Automated Ops</div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}