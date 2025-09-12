import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimatePromotionBanner() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <span className="animate-pulse">🔥</span>
            <span className="ml-2">ULTIMATE CONTENT DROP - JANUARY 2025</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🚀 Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Just Released!
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our most comprehensive AI resources yet: Breakthrough trends, mega success stories, 
            and the ultimate implementation guide that's already helping companies achieve 2000%+ ROI.
          </p>
          
          {/* Content Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">🔮</div>
              <h3 className="text-lg font-bold mb-2">Ultimate Breakthrough Trends</h3>
              <p className="text-sm text-blue-100 mb-4">
                The most comprehensive analysis of AI trends that will reshape everything in 2025
              </p>
              <div className="text-xs text-yellow-300 font-semibold">NEW RELEASE</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-lg font-bold mb-2">2000% ROI Success Story</h3>
              <p className="text-sm text-blue-100 mb-4">
                How a Fortune 100 company achieved unprecedented results with AI transformation
              </p>
              <div className="text-xs text-yellow-300 font-semibold">MEGA CASE STUDY</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-lg font-bold mb-2">Ultimate Master Guide</h3>
              <p className="text-sm text-blue-100 mb-4">
                Complete step-by-step blueprint for AI implementation success
              </p>
              <div className="text-xs text-yellow-300 font-semibold">COMPREHENSIVE</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-ultimate-breakthrough-trends"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              🔮 Explore Breakthrough Trends
            </Link>
            <Link
              href="/case-studies/ai-2025-mega-enterprise-transformation-breakthrough"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              🏆 Read Success Story
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-implementation-master-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              📚 Get Master Guide
            </Link>
          </div>
          
          {/* Social Proof */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">500+</div>
                <div className="text-blue-100">Companies Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">2000%</div>
                <div className="text-blue-100">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">$2.4B</div>
                <div className="text-blue-100">Additional Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">18</div>
                <div className="text-blue-100">Months to Success</div>
              </div>
            </div>
          </div>
          
          {/* Urgency Message */}
          <div className="mt-8 text-center">
            <p className="text-lg text-yellow-300 font-semibold mb-2">
              ⚡ Limited Time: Early Access Pricing Available
            </p>
            <p className="text-blue-200">
              Join 500+ companies already transforming with our AI solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}