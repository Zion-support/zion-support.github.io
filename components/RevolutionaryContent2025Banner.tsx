import React from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Banner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-pink-500/20 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Revolutionary Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full px-8 py-3 mb-8 font-bold text-lg shadow-lg">
            ⚡ REVOLUTIONARY BREAKTHROUGH 2025
          </div>
          
          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-white to-pink-300 bg-clip-text text-transparent leading-tight">
            The Future is Here
          </h2>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed opacity-90">
            Experience the most advanced AI content and insights that are transforming industries worldwide
          </p>
          
          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">AI Consciousness</h3>
              <p className="text-sm opacity-80">Explore the evolution of AI consciousness and synthetic intelligence</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3">Quantum Networks</h3>
              <p className="text-sm opacity-80">Discover quantum computing breakthroughs and neural interfaces</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Autonomous Future</h3>
              <p className="text-sm opacity-80">Self-managing systems and autonomous business operations</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-3">Enterprise Success</h3>
              <p className="text-sm opacity-80">Proven strategies for 340% ROI and business transformation</p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of enterprises already leveraging these breakthrough technologies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Explore All Content
              </Link>
              <Link
                href="/services"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get Implementation Support
              </Link>
              <Link
                href="/contact"
                className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-lg opacity-80">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">$50B+</div>
              <div className="text-lg opacity-80">Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">98%</div>
              <div className="text-lg opacity-80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-lg opacity-80">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Banner;