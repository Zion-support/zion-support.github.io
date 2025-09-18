import React from 'react';

const AdvancedTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ADVANCED TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🔬 Advanced Technology Showcase 2025</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most cutting-edge technologies and innovations that are shaping the future of humanity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">🤖</span>
              AI & Machine Learning
            </h3>
            <p className="text-gray-300 mb-4">
              Advanced AI systems with neural networks, deep learning, and predictive analytics capabilities.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Neural Network Architectures</li>
              <li>• Deep Learning Models</li>
              <li>• AI-Powered Automation</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-xl p-6 border border-teal-500/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">⚛️</span>
              Quantum Computing
            </h3>
            <p className="text-gray-300 mb-4">
              Revolutionary quantum computing solutions for complex problem-solving and optimization.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Quantum Algorithms</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Machine Learning</li>
              <li>• Quantum Simulation</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pages/AdvancedTechShowcase2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center">
              🚀 Explore Advanced Tech →
            </a>
            <a href="/pages/FutureInnovationLab2025" className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300 inline-flex items-center justify-center">
              🔬 Visit Innovation Lab →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTechBanner2025;