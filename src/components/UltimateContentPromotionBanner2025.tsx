import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const UltimateContentPromotionBanner2025: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-pink-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-indigo-500/20 rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-8 py-3 rounded-full text-lg font-bold mb-8 animate-pulse shadow-lg">
            ⚡ ULTIMATE CONTENT 2025 - LIMITED TIME ⚡
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Ultimate AI Content
            </span><br />
            Revolution is Here
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed opacity-90">
            Discover the most comprehensive collection of AI insights, case studies, and breakthrough technologies 
            that are <strong className="text-yellow-400">transforming businesses worldwide</strong> with unprecedented ROI.
          </p>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50,000%</div>
              <div className="text-lg font-semibold">Average ROI</div>
              <div className="text-sm opacity-80">Proven Results</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-green-400 mb-2">800%</div>
              <div className="text-lg font-semibold">Fortune 500 ROI</div>
              <div className="text-sm opacity-80">Real Case Studies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-lg font-semibold">Success Stories</div>
              <div className="text-sm opacity-80">Documented Results</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-lg font-semibold">Expert Support</div>
              <div className="text-sm opacity-80">Always Available</div>
            </div>
          </div>
          
          {/* Featured Content Preview */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Featured Content Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-left">
                <div className="text-yellow-400 text-2xl mb-2">🤖</div>
                <h4 className="font-bold mb-2">AI Automation Revolution</h4>
                <p className="text-sm opacity-80">Complete business transformation with intelligent automation</p>
              </div>
              <div className="text-left">
                <div className="text-blue-400 text-2xl mb-2">⚡</div>
                <h4 className="font-bold mb-2">Quantum Computing 2026</h4>
                <p className="text-sm opacity-80">Next-generation computational power for complex problems</p>
              </div>
              <div className="text-left">
                <div className="text-green-400 text-2xl mb-2">🧠</div>
                <h4 className="font-bold mb-2">Neural Interfaces</h4>
                <p className="text-sm opacity-80">Direct brain-computer interfaces for enhanced productivity</p>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/content"
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-12 py-4 rounded-xl font-bold text-xl hover:from-yellow-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore All Content
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-12 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Expert Consultation
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              <span>Fortune 500 Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              <span>50,000+ Businesses Served</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              <span>24/7 Expert Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentPromotionBanner2025;