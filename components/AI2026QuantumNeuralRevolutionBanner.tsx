import React from 'react';
import Link from 'next/link';

export default function AI2026QuantumNeuralRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold mb-8 animate-pulse">
            🌌 QUANTUM-NEURAL REVOLUTION - 20,000% ROI BREAKTHROUGH
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            AI 2026 Quantum-Neural Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Witness the convergence of quantum computing and neural networks. Our revolutionary quantum-neural fusion technology delivers unprecedented 20,000% ROI with 99.97% accuracy.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">20,000%</div>
              <div className="text-lg text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.97%</div>
              <div className="text-lg text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">50,000x</div>
              <div className="text-lg text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">∞</div>
              <div className="text-lg text-gray-300">Quantum Scalability</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/ai-2026-quantum-neural-revolution" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore the Revolution
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join the Revolution
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>The future of intelligence is here - experience quantum-neural fusion technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}