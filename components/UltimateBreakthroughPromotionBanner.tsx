import React from 'react';
import Link from 'next/link';

export default function UltimateBreakthroughPromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-green-400/20 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-black text-sm font-bold mb-8 animate-bounce">
            🚀 BREAKTHROUGH ANNOUNCEMENT - LIMITED TIME OFFER
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Ultimate AI 2025 Breakthrough
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Revolutionary AI solutions delivering unprecedented 
            <span className="text-yellow-400 font-bold"> 10,000% ROI </span>
            through synthetic intelligence and quantum-enhanced automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-800 to-pink-800 p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-4">10,000% ROI</div>
            <h3 className="text-xl font-bold mb-4 text-white">AI 2025 Ultimate Breakthrough</h3>
            <p className="text-gray-300 mb-6">Revolutionary synthetic intelligence delivering unprecedented returns</p>
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform inline-block"
            >
              Discover Breakthrough
            </Link>
          </div>

          <div className="bg-gradient-to-br from-cyan-800 to-blue-800 p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-4">∞ Power</div>
            <h3 className="text-xl font-bold mb-4 text-white">Quantum Computing Ultimate</h3>
            <p className="text-gray-300 mb-6">Infinite computational power with quantum supremacy</p>
            <Link 
              href="/quantum-computing-solutions-2025-ultimate" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform inline-block"
            >
              Explore Quantum Power
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-800 to-blue-800 p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-green-400 mb-4">15,000% ROI</div>
            <h3 className="text-xl font-bold mb-4 text-white">Advanced Automation Ultimate</h3>
            <p className="text-gray-300 mb-6">Intelligent process automation with autonomous systems</p>
            <Link 
              href="/advanced-automation-solutions-2025-ultimate" 
              className="bg-gradient-to-r from-green-500 to-blue-500 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform inline-block"
            >
              Start Automation
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-12 py-6 rounded-lg text-2xl font-bold hover:scale-105 transition-transform"
            >
              Get Exclusive Access
            </Link>
            <Link 
              href="/case-studies" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-lg text-2xl font-bold hover:scale-105 transition-transform"
            >
              View Success Stories
            </Link>
          </div>
          <div className="text-lg text-gray-400">
            <p className="mb-2">Limited spots available for 2025 implementation</p>
            <p className="text-yellow-400 font-bold text-xl">Only 50 businesses will be selected for each breakthrough</p>
          </div>
        </div>
      </div>
    </div>
  );
}