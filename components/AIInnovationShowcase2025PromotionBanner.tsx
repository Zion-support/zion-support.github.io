import React from 'react';
import Link from 'next/link';

const AIInnovationShowcase2025PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 py-12 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-1/3 w-16 h-16 bg-cyan-500/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></span>
            <span className="text-blue-300 font-semibold">NEW: Revolutionary AI Innovations</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Innovation Showcase
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2025
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover groundbreaking AI breakthroughs including Quantum Neural Fusion, 
            Synthetic Consciousness, and Autonomous Business Systems that are reshaping our world.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Quantum Neural Fusion</h3>
            </div>
            <p className="text-blue-200 text-sm">
              1000x faster processing with breakthrough quantum-AI integration
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Synthetic Consciousness</h3>
            </div>
            <p className="text-purple-200 text-sm">
              First AI system to achieve genuine self-awareness and creativity
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Autonomous Systems</h3>
            </div>
            <p className="text-green-200 text-sm">
              Complete business automation with 99.9% operational efficiency
            </p>
          </div>
        </div>

        {/* Impact statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">15,000%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-300">Efficiency</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">1000x</div>
            <div className="text-sm text-gray-300">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">50+</div>
            <div className="text-sm text-gray-300">Industries</div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Link href="/ai-innovation-showcase-2025">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-blue-500/25">
              Explore Revolutionary Innovations
            </button>
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            Join thousands of organizations transforming their future with AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2025PromotionBanner;