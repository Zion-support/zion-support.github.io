import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ArrowRightStarBrainZapAtomBot

export default function NewContent2025InnovationShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-cyan-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            New Revolutionary Content Available
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the Future of
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Technology Innovation
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore groundbreaking AI innovationsquantum computing breakthroughsand advanced automation solutions that will transform your business in 2025-2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* AI Innovation Showcase */}
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Innovation Showcase</h3>
            <p className="text-gray-300 text-sm mb-4">
              Revolutionary AI technologies including quantum AI fusioneural interfacesand autonomous business systems.
            </p>
            <a 
              href="/ai-innovation-showcase-2025-2026"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm"
            >
              Explore Now
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          {/* Quantum Computing Breakthrough */}
          <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Atom className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Computing</h3>
            <p className="text-gray-300 text-sm mb-4">
              Next-generation quantum processorsquantum AI fusionand unbreakable quantum cryptography systems.
            </p>
            <a 
              href="/quantum-computing-breakthrough-2025-2026"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
            >
              Discover More
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          {/* Advanced Automation */}
          <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Advanced Automation</h3>
            <p className="text-gray-300 text-sm mb-4">
              Intelligent automation solutions that work 24/7learn continuouslyand deliver unprecedented efficiency.
            </p>
            <a 
              href="/advanced-automation-solutions-2025-2026"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold text-sm"
            >
              Learn More
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/ai-innovation-showcase-2025-2026"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Explore All Innovations
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}