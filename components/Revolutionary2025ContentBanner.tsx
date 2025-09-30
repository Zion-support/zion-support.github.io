import React from 'react';
import Link from 'next/link';

const Revolutionary2025ContentBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-cyan-500/20 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Revolutionary 2025 Content</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of AI is 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {' '}Here Today
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking AI innovations, enterprise transformation strategies, and cutting-edge technologies 
            that are reshaping industries in 2025 and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Enterprise Revolution</h3>
                <p className="text-sm text-gray-300">300% ROI Guaranteed</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Transform your enterprise with autonomous AI systems that deliver unprecedented efficiency gains and cost savings.
            </p>
            <Link 
              href="/blog/ai-enterprise-revolution-2025"
              className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              Explore Now →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Edge AI Computing</h3>
                <p className="text-sm text-gray-300">Sub-50ms Response</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Achieve real-time AI processing at the edge with revolutionary latency optimization techniques.
            </p>
            <Link 
              href="/blog/edge-ai-computing-2025"
              className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Security & Governance</h3>
                <p className="text-sm text-gray-300">99.7% Threat Detection</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Next-generation AI security with autonomous threat detection and zero-trust architecture.
            </p>
            <Link 
              href="/blog/ai-security-governance-2025"
              className="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors"
            >
              Discover →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
            <span className="text-2xl">🎯</span>
            <div className="text-left">
              <div className="font-bold text-lg">Ready to Transform Your Business?</div>
              <div className="text-sm text-gray-300">Join 10,000+ enterprises already using our AI solutions</div>
            </div>
            <Link 
              href="/services"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revolutionary2025ContentBanner;