import React from 'react';

const AdvancedTechShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ADVANCED TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6">Advanced Technology Showcase 2025</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most cutting-edge technologies and innovations that are shaping the future
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Artificial Intelligence</h3>
            <p className="text-gray-300 mb-6">
              Advanced AI systems with machine learning, natural language processing, and computer vision capabilities.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Neural Network Architectures</li>
              <li>• Deep Learning Models</li>
              <li>• AI-Powered Automation</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 rounded-2xl p-8 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum computing solutions for complex problem-solving and optimization.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Quantum Algorithms</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Machine Learning</li>
              <li>• Quantum Simulation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Neural Interfaces</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer interfaces for enhanced human-machine interaction.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Brain-Computer Interfaces</li>
              <li>• Neural Prosthetics</li>
              <li>• Cognitive Enhancement</li>
              <li>• Thought-Controlled Systems</li>
            </ul>
          </div>
        </div>

        {/* Innovation Timeline */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Innovation Timeline 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">Q1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Q1 2025</h3>
              <p className="text-gray-300">AI Consciousness Breakthrough</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">Q2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Q2 2025</h3>
              <p className="text-gray-300">Quantum Interface Launch</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">Q3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Q3 2025</h3>
              <p className="text-gray-300">Neural Network Revolution</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">Q4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Q4 2025</h3>
              <p className="text-gray-300">Interdimensional Technology</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most advanced technologies and innovations that will shape tomorrow's world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Explore Technologies
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTechShowcase2025;