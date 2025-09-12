import React from 'react';
import Link from 'next/link';

export default function MegaPromotionalBanner2025() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-16 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main Headline */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 animate-pulse">
          🚀 BREAKTHROUGH 2025 - LIMITED TIME OFFER
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Revolutionary AI Solutions
          <span className="block text-yellow-300">Now Available</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
          Experience the most advanced AI technologies of 2025. Quantum computing, autonomous business systems, 
          space technology, and enterprise transformation solutions that are reshaping industries worldwide.
        </p>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">⚛️</div>
            <h3 className="text-lg font-bold text-white mb-2">Quantum Computing</h3>
            <p className="text-white/80 text-sm">1000-qubit processors with exponential speed improvements</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-bold text-white mb-2">Autonomous Systems</h3>
            <p className="text-white/80 text-sm">Self-managing business operations with 99.9% efficiency</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-bold text-white mb-2">Space Technology</h3>
            <p className="text-white/80 text-sm">Advanced satellite systems and space-based AI platforms</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="text-lg font-bold text-white mb-2">Enterprise AI</h3>
            <p className="text-white/80 text-sm">Complete business transformation with 2000% ROI</p>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6">Proven Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-white/80 text-sm">AI Solutions Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">$50B+</div>
              <div className="text-white/80 text-sm">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-white/80 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">24/7</div>
              <div className="text-white/80 text-sm">Support Available</div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link 
            href="/quantum-computing-revolution-2025" 
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Quantum Computing →
          </Link>
          <Link 
            href="/autonomous-business-systems-2025" 
            className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Try Autonomous Systems →
          </Link>
          <Link 
            href="/space-technology-solutions-2025" 
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
          >
            Discover Space Tech →
          </Link>
        </div>

        {/* Limited Time Offer */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">🔥 LIMITED TIME OFFER</h3>
          <p className="text-white/90 mb-4">
            Get 50% off your first AI implementation + FREE consultation with our experts
          </p>
          <div className="flex items-center justify-center gap-4 text-white">
            <span className="text-sm">Valid until:</span>
            <span className="bg-white/20 px-3 py-1 rounded-full font-semibold">March 31, 2025</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-sm">Fortune 500 Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-sm">24/7 Expert Support</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-sm">Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-sm">SLA 99.9% Uptime</span>
          </div>
        </div>
      </div>
    </div>
  );
}