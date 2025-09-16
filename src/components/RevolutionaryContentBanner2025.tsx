import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover our latest revolutionary content featuring cutting-edge AI, quantum computing, and neural interface technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Revolutionary AI Business Solutions</h3>
            <p className="text-purple-100 mb-6 text-center">
              Transform your business with autonomous AI agents, quantum-powered analytics, and neural interface integration
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• 99.9% Decision Accuracy</li>
              <li>• 1000x Faster Processing</li>
              <li>• Thought-to-Action Control</li>
            </ul>
            <a href="/pages/RevolutionaryAIBusinessSolutions2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI Solutions →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing Revolution</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Experience the future of computing with quantum technology that solves impossible problems
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• 10^18 Operations/Second</li>
              <li>• Unbreakable Security</li>
              <li>• Molecular Simulation</li>
            </ul>
            <a href="/pages/QuantumComputingRevolution2025" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Go Quantum →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌟</div>
            <h3 className="text-2xl font-bold mb-4 text-center">More Revolutionary Content</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Explore our comprehensive collection of cutting-edge technology solutions and innovations
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• 50+ Active Innovations</li>
              <li>• 99.9% Success Rate</li>
              <li>• Infinite Possibilities</li>
            </ul>
            <a href="/pages/InnovationLanding2025" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              View All Content →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-lg">
            <span className="flex items-center">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Live Now
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Updated Daily
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              Revolutionary
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;