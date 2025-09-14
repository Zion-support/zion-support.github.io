import React from 'react';
import Link from 'next/link';

const AI2026QuantumRevolutionUltimateBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-500 rounded-full opacity-25 animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 QUANTUM AI 2026 REVOLUTION</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Quantum AI</span><br />
            Revolution is Here
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Experience <span className="font-bold text-yellow-400">1000x faster processing</span> with quantum-enhanced AI that solves impossible problems and delivers <span className="font-bold text-green-400">1000%+ ROI</span>
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">1000x</div>
              <div className="text-lg font-semibold mb-2">Faster Processing</div>
              <div className="text-sm opacity-80">Quantum speed for complex optimization</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-green-400 mb-2">1000%</div>
              <div className="text-lg font-semibold mb-2">ROI Increase</div>
              <div className="text-sm opacity-80">Proven results from Fortune 500 companies</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Accuracy Rate</div>
              <div className="text-sm opacity-80">Quantum precision in every calculation</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/quantum-ai-2026"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore Quantum AI Solutions
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quantum Assessment
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Fortune 500 Proven</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>1000%+ ROI Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>24/7 Quantum Support</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-10 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
    </section>
  );
};

export default AI2026QuantumRevolutionUltimateBanner;