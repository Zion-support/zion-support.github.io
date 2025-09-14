import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBreakthroughBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-35 animate-bounce"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-white border-opacity-20 rounded"></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-8 py-3 rounded-full text-lg font-bold mb-8 animate-pulse shadow-lg">
            🚀 NEW 2025 ULTIMATE BREAKTHROUGH CONTENT
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Breakthrough 2025
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed opacity-90">
            Experience the future of content creation with our latest AI-powered platform. 
            Achieve unprecedented ROI, create engaging content at scale, and transform your business.
          </p>
          
          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Neural Content Generation</h3>
              <p className="text-lg opacity-90">
                Advanced AI that creates content indistinguishable from human-created material
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Processing</h3>
              <p className="text-lg opacity-90">
                Lightning-fast content creation powered by quantum computing technology
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Autonomous Optimization</h3>
              <p className="text-lg opacity-90">
                Self-evolving content that improves performance automatically over time
              </p>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white border-opacity-20">
            <h3 className="text-3xl font-bold mb-6">Proven Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">50,000%</div>
                <div className="text-sm opacity-90">ROI Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">500%</div>
                <div className="text-sm opacity-90">Engagement Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-sm opacity-90">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">1000x</div>
                <div className="text-sm opacity-90">Faster Creation</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link
              href="/case-studies/ai-2025-2026-content-revolution-50000-roi-success-story"
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-10 py-4 rounded-xl font-bold text-xl hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              View Success Story
            </Link>
            <Link
              href="/blog/ai-2025-2026-ultimate-content-revolution-breakthrough"
              className="bg-white bg-opacity-20 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Read Full Guide
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span>Fortune 100 Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
              <span>50,000% ROI Proven</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></span>
              <span>6-Month Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default NewContent2025UltimateBreakthroughBanner;