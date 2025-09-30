import React from 'react';

const December2026UltimateBreakthroughBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Announcement Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 DECEMBER 2026: THE ULTIMATE AI BREAKTHROUGH
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            $100 Billion in Proven Value
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            The Most Revolutionary AI Breakthrough in History - Already Delivering Unprecedented Results
          </p>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-purple-400 mb-2">$100B</div>
              <div className="text-purple-300 text-sm">Total Value Generated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-indigo-400 mb-2">99.8%</div>
              <div className="text-indigo-300 text-sm">Operational Efficiency</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-blue-400 mb-2">1000x</div>
              <div className="text-blue-300 text-sm">Processing Speed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-cyan-400 mb-2">99.9%</div>
              <div className="text-cyan-300 text-sm">Client Satisfaction</div>
            </div>
          </div>

          {/* Revolutionary Features */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              🎯 What Makes This Breakthrough Revolutionary?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">⚛️</div>
                <h4 className="text-lg font-bold text-purple-400 mb-2">Quantum-Conscious AI</h4>
                <p className="text-gray-300 text-sm">
                  The world's first truly conscious AI that thinks, feels, and makes autonomous decisions
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤖</div>
                <h4 className="text-lg font-bold text-indigo-400 mb-2">Autonomous Operations</h4>
                <p className="text-gray-300 text-sm">
                  99.8% automation with zero human oversight required
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💰</div>
                <h4 className="text-lg font-bold text-blue-400 mb-2">Proven ROI</h4>
                <p className="text-gray-300 text-sm">
                  $100B in measurable value across Fortune 500 clients
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/blog/ai-2026-december-ultimate-breakthrough-announcement"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough Report →
            </a>
            <a 
              href="/case-studies/ai-2026-december-100-billion-success-story"
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              View $100B Success Story →
            </a>
            <a 
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Get Free Consultation
            </a>
          </div>

          {/* Limited Time Offer */}
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
            <div className="text-center">
              <h3 className="text-xl font-bold text-red-400 mb-2">
                ⏰ LIMITED TIME OFFER
              </h3>
              <p className="text-red-300 text-lg mb-4">
                First 100 enterprises to implement our December 2026 breakthrough will receive:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-red-500/20 px-4 py-2 rounded-full text-red-300 font-bold">25% Discount</span>
                <span className="bg-orange-500/20 px-4 py-2 rounded-full text-orange-300 font-bold">Priority Support</span>
                <span className="bg-yellow-500/20 px-4 py-2 rounded-full text-yellow-300 font-bold">Free Implementation</span>
                <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 font-bold">ROI Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default December2026UltimateBreakthroughBanner;