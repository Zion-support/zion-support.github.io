import React from 'react';
import Link from 'next/link';

export default function AI2025RevolutionaryBreakthroughPromotionBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 BREAKTHROUGH ANNOUNCEMENT
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI 2025 Revolutionary Breakthrough
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            The most significant AI advancement of 2025 is here. Discover how this breakthrough is delivering 
            <span className="font-bold text-yellow-300"> 2,500-5,000% ROI</span> for businesses worldwide.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-3">
              <div className="text-white font-bold text-2xl">99.9%</div>
              <div className="text-white/80 text-sm">Accuracy Rate</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-3">
              <div className="text-white font-bold text-2xl">10,000x</div>
              <div className="text-white/80 text-sm">Faster Processing</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-3">
              <div className="text-white font-bold text-2xl">Autonomous</div>
              <div className="text-white/80 text-sm">Operations</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthrough-announcement"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Discover the Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              📊 See 10,000% ROI Case Study
            </Link>
          </div>
          
          {/* Additional links */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80">
            <Link 
              href="/resources/ai-2025-revolutionary-implementation-guide" 
              className="hover:text-white transition-colors underline"
            >
              📚 Implementation Guide
            </Link>
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthroughs" 
              className="hover:text-white transition-colors underline"
            >
              🔥 Join Webinar
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-white transition-colors underline"
            >
              💬 Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
      </div>
    </section>
  );
}