import React from 'react';
import Link from 'next/link';

export default function UltimateAutonomousAI2025Banner() {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-2 mb-6 shadow-lg">
            <span className="text-sm font-bold tracking-wide">🚀 NEW: AUTONOMOUS AI 2025 REVOLUTION</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ultimate Autonomous AI Revolution
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Experience the most advanced autonomous AI systems achieving <span className="font-bold text-yellow-400">99.9% autonomous operations</span> with 
            <span className="font-bold text-green-400"> $5.2 billion ROI</span> in just 18 months.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">$5.2B</div>
              <div className="text-sm opacity-90">ROI Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm opacity-90">Autonomous Operations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">18</div>
              <div className="text-sm opacity-90">Months to Success</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.7%</div>
              <div className="text-sm opacity-90">Self-Healing Success</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-ultimate-autonomous-revolution"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Read the Revolution
            </Link>
            <Link
              href="/case-studies/global-enterprise-autonomous-ai-transformation-2025-ultimate-success-5-billion-roi"
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              💰 See $5.2B Success Story
            </Link>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/resources/autonomous-ai-implementation-master-guide-2025"
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 border border-white/20"
            >
              📋 Implementation Guide
            </Link>
            <Link 
              href="/contact"
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 border border-white/20"
            >
              💬 Free Consultation
            </Link>
            <Link 
              href="/services"
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 border border-white/20"
            >
              🛠️ Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm opacity-75 mb-4">
              Trusted by Fortune 100 companies worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-sm font-semibold">🏆 Industry Leader</div>
              <div className="text-sm font-semibold">🔒 Enterprise Security</div>
              <div className="text-sm font-semibold">⚡ 24/7 Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-indigo-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
}