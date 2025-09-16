import React from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentBanner2027: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full px-6 py-3 mb-6 border border-purple-400/30">
            <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">🚀 Revolutionary Content 2027</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            The Future is Here
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking AI technologies, quantum computing breakthroughs, and conscious AI systems that are reshaping the digital landscape in 2027.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Conscious AI Systems</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary AI with self-awareness, emotional intelligence, and autonomous decision-making capabilities.
            </p>
            <Link 
              to="/pages/AdvancedAIConsciousness2027" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
            >
              Explore Consciousness AI →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Neural Fusion</h3>
            <p className="text-gray-300 mb-6">
              The convergence of quantum computing and neural networks, creating unprecedented AI capabilities.
            </p>
            <Link 
              to="/pages/QuantumNeuralFusion2027" 
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300"
            >
              Discover Quantum AI →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Breakthroughs 2027</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary AI technologies that are transforming industries and reshaping the future of work.
            </p>
            <Link 
              to="/pages/AIRevolutionaryBreakthrough2027" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
            >
              View Breakthroughs →
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">500%</div>
            <div className="text-white font-semibold mb-1">Performance Boost</div>
            <div className="text-gray-300 text-sm">Average improvement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">99.9%</div>
            <div className="text-white font-semibold mb-1">Accuracy Rate</div>
            <div className="text-gray-300 text-sm">In complex tasks</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">10x</div>
            <div className="text-white font-semibold mb-1">Faster Learning</div>
            <div className="text-gray-300 text-sm">Compared to 2026</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-white font-semibold mb-1">Scalability</div>
            <div className="text-gray-300 text-sm">Unlimited potential</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link 
              to="/pages/AIRevolutionaryBreakthrough2027"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Content
            </Link>
            <Link 
              to="/blog"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Read Latest Blog
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            Join 50,000+ professionals already using our revolutionary AI technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;