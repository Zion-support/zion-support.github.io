import React from 'react';

const NewTechShowcase2025: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-4">
            🚀 NEW IN 2025
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and neural interfaces that are reshaping the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Innovation Hub */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Innovation Hub</h3>
            <p className="text-gray-600 mb-6">
              Explore cutting-edge AI solutions including autonomous agents, neural networks, and machine learning platforms.
            </p>
            <a 
              href="/pages/AIInnovationHub2026" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              Learn More →
            </a>
          </div>

          {/* Quantum Computing Revolution */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Revolution</h3>
            <p className="text-gray-600 mb-6">
              Dive into the world of quantum computing and its potential to solve complex problems exponentially faster.
            </p>
            <a 
              href="/pages/QuantumComputingRevolution2026" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              Learn More →
            </a>
          </div>

          {/* Neural Interface Revolution */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Neural Interface</h3>
            <p className="text-gray-600 mb-6">
              Experience the future of human-computer interaction through advanced neural interface technology.
            </p>
            <a 
              href="/pages/NeuralInterfaceRevolution2026" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              Learn More →
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started with Our Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewTechShowcase2025;