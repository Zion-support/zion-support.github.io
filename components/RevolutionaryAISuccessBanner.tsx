import React from 'react';
import Link from 'next/link';

export default function RevolutionaryAISuccessBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white py-16">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
              💰 MEGA SUCCESS STORY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              $250M ROI Success Story
            </h2>
            <p className="text-xl text-green-100 mb-8">
              See how a Fortune 500 company achieved unprecedented transformation through comprehensive AI implementation, delivering $250M in cost savings and 340% ROI.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">$250M</div>
                <p className="text-green-100 text-sm">Total Savings</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">340%</div>
                <p className="text-green-100 text-sm">ROI</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-enterprise-transformation-mega-success-2026"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                📖 Read Full Case Study
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                📞 Call +1 302 464 0950
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold">AI 2026 Revolution</h3>
              </div>
              <p className="text-green-100 mb-4">
                Discover the revolutionary AI breakthroughs that are transforming enterprise operations.
              </p>
              <Link 
                href="/blog/ai-2026-next-generation-ai-revolution" 
                className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
              >
                Read Article →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold">Quantum AI Breakthrough</h3>
              </div>
              <p className="text-green-100 mb-4">
                1000x faster machine learning with quantum-enhanced AI capabilities.
              </p>
              <Link 
                href="/blog/ai-quantum-optimization-2026" 
                className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold">Neural Interfaces</h3>
              </div>
              <p className="text-green-100 mb-4">
                Revolutionary human-AI collaboration through neural interface technology.
              </p>
              <Link 
                href="/blog/ai-neural-interfaces-2026" 
                className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
              >
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}