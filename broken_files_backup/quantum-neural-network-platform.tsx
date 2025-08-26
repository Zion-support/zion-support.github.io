import React from 'react';
import { Link } from 'react-router-dom';
const QuantumNeuralNetworkPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Quantum Neural Network Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionary quantum computing platform that combines the power of quantum mechanics
              with advanced neural network architectures for unprecedented AI capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
              >
                Get Started
              </Link>
              <Link
                to="/services/quantum-ai"
                className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quantum Supremacy</h3>
              <p className="text-gray-300">
                Leverage quantum entanglement and superposition for computational tasks
                that are impossible with classical computers.
              </p>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Neural Architecture</h3>
              <p className="text-gray-300">
                Advanced neural network designs optimized for quantum computing,
                enabling faster training and inference.
              </p>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance Boost</h3>
              <p className="text-gray-300">
                Up to 1000x faster processing for complex AI workloads
                compared to traditional computing methods.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Use Cases Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Applications & Use Cases
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Scientific Research</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Drug discovery and molecular modeling
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Climate prediction and environmental modeling
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Quantum chemistry simulations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Materials science research
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">AI & Machine Learning</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Large language model training
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Computer vision optimization
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Reinforcement learning algorithms
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  Neural network architecture search
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum revolution and unlock unprecedented computational power
            for your AI and research projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/services/quantum-ai"
              className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuantumNeuralNetworkPlatform;