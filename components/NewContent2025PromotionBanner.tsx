import React from 'react';
import Link from 'next/link';

export default function NewContent2025PromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT DROP - JANUARY 2025</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            🎯 Ultimate AI Business Transformation Guide
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the complete roadmap for achieving <span className="font-bold text-yellow-300">1,500% ROI</span> through 
            strategic AI implementation. Learn from Fortune 500 success stories and avoid costly mistakes.
          </p>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="text-lg font-semibold mb-2">Complete Master Guide</h3>
              <p className="text-sm opacity-90">500+ pages of proven frameworks, templates, and step-by-step strategies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="text-lg font-semibold mb-2">Fortune 500 Case Study</h3>
              <p className="text-sm opacity-90">Real success story: 1,500% ROI in 18 months with detailed implementation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">🛠️</div>
              <h3 className="text-lg font-semibold mb-2">Ready-to-Use Tools</h3>
              <p className="text-sm opacity-90">25+ templates, ROI calculator, and implementation checklists</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/resources/ai-2025-ultimate-implementation-master-guide"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              📚 Download Master Guide
            </Link>
            <Link
              href="/case-studies/ai-2025-fortune-500-transformation-breakthrough"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              🏆 View Case Study
            </Link>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <span className="text-yellow-300">⭐⭐⭐⭐⭐</span>
              <span>4.9/5 from 10,000+ users</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">100,000+</span>
              <span>downloads this month</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">500+</span>
              <span>Fortune 500 companies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}