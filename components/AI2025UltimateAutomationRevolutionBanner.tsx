import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateAutomationRevolutionBanner() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 to-red-500 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 animate-pulse">
            🚀 BREAKTHROUGH ANNOUNCEMENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            AI 2025 Ultimate Automation Revolution
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
            Experience the most revolutionary AI automation breakthrough in history, delivering unprecedented 
            <span className="text-yellow-400 font-bold"> 10,000% ROI</span> and transforming entire industries overnight.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">Autonomous Systems</h3>
            <p className="text-gray-300 text-sm">
              AI systems that make complex business decisions autonomously with 99.9% accuracy
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Lightning Processing</h3>
            <p className="text-gray-300 text-sm">
              Process millions of operations per second with quantum-enhanced AI algorithms
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Predictive Intelligence</h3>
            <p className="text-gray-300 text-sm">
              Anticipate market changes and operational challenges 5 years into the future
            </p>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">10,000%</div>
            <div className="text-sm text-gray-300">Guaranteed ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10,000x</div>
            <div className="text-sm text-gray-300">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-sm text-gray-300">Companies Transformed</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/ai-2025-ultimate-automation-revolution"
            className="bg-gradient-to-r from-yellow-500 to-red-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            🚀 Explore the Revolution
          </Link>
          <Link
            href="/case-studies/ai-2025-global-transformation-50000-roi"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
          >
            📊 View Success Stories
          </Link>
          <Link
            href="/resources/ai-2025-ultimate-automation-guide"
            className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-30 transition-colors"
          >
            📚 Get Implementation Guide
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-sm mb-4">Trusted by Fortune 500 companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">Microsoft</div>
            <div className="text-2xl font-bold">Google</div>
            <div className="text-2xl font-bold">Amazon</div>
            <div className="text-2xl font-bold">Tesla</div>
            <div className="text-2xl font-bold">Apple</div>
          </div>
        </div>
      </div>
    </section>
  );
}