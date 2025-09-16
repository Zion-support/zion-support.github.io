import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const QuantumAI2026BreakthroughBanner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚛️ QUANTUM AI 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Quantum AI 2026: The Ultimate Business Transformation
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore how quantum computing and AI are converging to create unprecedented 
            business opportunities with exponential speedups and revolutionary capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">1000x</div>
            <div className="text-sm opacity-90">Speedup in ML Tasks</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 text-center">
            <div className="text-3xl mb-3">🎯</div>
            <div className="text-2xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-sm opacity-90">Optimization Accuracy</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 text-center">
            <div className="text-3xl mb-3">💰</div>
            <div className="text-2xl font-bold text-blue-400 mb-2">$47.2B</div>
            <div className="text-sm opacity-90">Market Size 2026</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 text-center">
            <div className="text-3xl mb-3">🏢</div>
            <div className="text-2xl font-bold text-purple-400 mb-2">340%</div>
            <div className="text-sm opacity-90">Fortune 500 Adoption</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <h3 className="text-xl font-bold mb-4">Core Technologies</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm">Quantum Machine Learning (QML)</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm">Quantum Optimization Algorithms</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm">Quantum Cryptography & Security</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm">Quantum Neural Networks</span>
              </li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <h3 className="text-xl font-bold mb-4">Success Stories</h3>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-sm">Global Investment Bank</div>
                <div className="text-xs opacity-75">40% improvement in portfolio returns</div>
              </div>
              <div>
                <div className="font-semibold text-sm">Pharmaceutical Company</div>
                <div className="text-xs opacity-75">80% reduction in drug discovery time</div>
              </div>
              <div>
                <div className="font-semibold text-sm">Logistics Company</div>
                <div className="text-xs opacity-75">25% reduction in delivery time</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog/quantum-ai-2026-business-transformation-ultimate-guide"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Read Full Guide
            </a>
            <a
              href="/services/quantum-technology"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Explore Quantum Solutions
            </a>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join the quantum AI revolution - be among the first to transform your business
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2026BreakthroughBanner;