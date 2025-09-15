import React from 'react';
import Link from 'next/link';

const AI2025RevolutionaryBreakthroughBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 via-purple-600/90 to-blue-600/90">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-6 py-2 mb-6 animate-pulse">
            <span className="text-sm font-bold text-black">🔥 LIMITED TIME - REVOLUTIONARY BREAKTHROUGH</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AI 2025 Revolutionary Breakthrough
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced AI technology ever created. Transform your business with unprecedented intelligence and automation.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold mb-2">10x Performance</h3>
              <p className="text-sm opacity-80">Revolutionary speed and efficiency</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold mb-2">5000% ROI</h3>
              <p className="text-sm opacity-80">Proven return on investment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-bold mb-2">Enterprise Security</h3>
              <p className="text-sm opacity-80">Military-grade protection</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Instant Access
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Watch Demo
            </Link>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm opacity-80 mb-4">Trusted by Fortune 500 companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Microsoft</div>
              <div className="text-2xl font-bold">Google</div>
              <div className="text-2xl font-bold">Amazon</div>
              <div className="text-2xl font-bold">Tesla</div>
              <div className="text-2xl font-bold">Apple</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025RevolutionaryBreakthroughBanner;