import React from 'react';
import Link from 'next/link';

export default function RevolutionaryAI2025PromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY BREAKTHROUGH - JANUARY 2025</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AI 2025: Revolutionary Breakthrough Ecosystem
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
            Discover the most advanced AI ecosystem ever created. Achieve <span className="font-bold text-yellow-300">10,000% ROI</span> with 
            revolutionary neural architectures, quantum AI integration, and autonomous systems that transform every industry.
          </p>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl mb-2">💰</div>
              <div className="text-sm font-semibold">10,000% ROI</div>
              <div className="text-xs opacity-80">Average in 6 months</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm font-semibold">1000x Faster</div>
              <div className="text-xs opacity-80">Processing speed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-sm font-semibold">99.8% Accuracy</div>
              <div className="text-xs opacity-80">Quality rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-sm font-semibold">500+ Deployments</div>
              <div className="text-xs opacity-80">Global success</div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-revolutionary-breakthrough-ecosystem"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🚀 Explore Revolutionary AI
            </Link>
            <Link
              href="/resources/ai-2025-revolutionary-implementation-master-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📚 Download Master Guide
            </Link>
            <Link
              href="/case-studies/ai-2025-revolutionary-enterprise-transformation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🏆 View Success Stories
            </Link>
          </div>
          
          {/* Featured Content Preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/blog/ai-2025-revolutionary-breakthrough-ecosystem" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl mb-3">🧠</div>
                <h3 className="text-lg font-semibold mb-2">Revolutionary Breakthrough</h3>
                <p className="text-sm opacity-90 mb-3">Complete ecosystem transformation guide</p>
                <div className="text-xs bg-white/20 px-3 py-1 rounded-full inline-block">
                  NEW RELEASE
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-2025-revolutionary-enterprise-transformation" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-lg font-semibold mb-2">Enterprise Success</h3>
                <p className="text-sm opacity-90 mb-3">Fortune 500 achieves 10,000% ROI</p>
                <div className="text-xs bg-green-500/20 px-3 py-1 rounded-full inline-block">
                  SUCCESS STORY
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-2025-revolutionary-implementation-master-guide" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-lg font-semibold mb-2">Master Guide</h3>
                <p className="text-sm opacity-90 mb-3">Complete implementation blueprint</p>
                <div className="text-xs bg-blue-500/20 px-3 py-1 rounded-full inline-block">
                  ESSENTIAL
                </div>
              </div>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm opacity-80 mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold">Fortune 500</div>
              <div className="text-lg font-semibold">Global 2000</div>
              <div className="text-lg font-semibold">Enterprise</div>
              <div className="text-lg font-semibold">Startups</div>
              <div className="text-lg font-semibold">Government</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}