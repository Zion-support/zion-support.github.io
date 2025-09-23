import React from 'react';
import Link from 'next/link';

const AI2026QuantumBreakthroughBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-purple-400 rounded-full opacity-20 animate-pulse delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🚀 NEW 2026 BREAKTHROUGH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            AI 2026: Quantum Computing Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the quantum computing breakthrough that's revolutionizing enterprise with 
            <span className="font-bold text-yellow-300"> 10,000x faster processing</span> and 
            <span className="font-bold text-green-300"> 2,500% ROI</span> in just 18 months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-yellow-300 mb-2">10,000x</div>
            <div className="text-lg opacity-90">Faster Processing</div>
            <div className="text-sm opacity-75 mt-2">Than classical computers</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-green-300 mb-2">2,500%</div>
            <div className="text-lg opacity-90">Average ROI</div>
            <div className="text-sm opacity-75 mt-2">Within 18 months</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-purple-300 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Accuracy Rate</div>
            <div className="text-sm opacity-75 mt-2">In complex optimization</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Revolutionary Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-5 rounded-lg p-4">
              <h4 className="font-bold text-lg mb-2">Global Investment Bank</h4>
              <p className="text-sm opacity-90 mb-2">$8.7B portfolio optimized with 340% improvement in performance</p>
              <div className="text-yellow-300 font-bold">$2.3B additional returns generated</div>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-4">
              <h4 className="font-bold text-lg mb-2">Pharmaceutical Giant</h4>
              <p className="text-sm opacity-90 mb-2">15x faster drug discovery with 89% cost reduction</p>
              <div className="text-green-300 font-bold">$12.5B projected revenue from new discoveries</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog/ai-2026-quantum-computing-breakthrough"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Full Article →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Quantum Assessment
            </Link>
          </div>
          <p className="text-sm opacity-75">
            Join 500+ enterprises already transforming with quantum AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2026QuantumBreakthroughBanner;