import React from 'react';
import Link from 'next/link';

export default function QuantumComputingBreakthroughPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 py-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-bounce">
            <span className="text-blue-400 font-bold text-lg">⚡ QUANTUM COMPUTING BREAKTHROUGH</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Quantum Computing Revolution 2025-2030
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Experience the quantum leap that will revolutionize every industry. 
            From <span className="text-blue-400 font-bold">error-corrected quantum computers</span> to 
            <span className="text-purple-400 font-bold"> universal quantum supremacy</span> - 
            achieve <span className="text-pink-400 font-bold">10^15x computational speed</span>.
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400 mb-2">10^15</div>
              <div className="text-gray-300 font-semibold">Speed Increase</div>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-gray-300 font-semibold">Error Correction</div>
            </div>
            <div className="bg-gradient-to-br from-pink-800/30 to-red-800/30 p-6 rounded-xl border border-pink-500/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-pink-400 mb-2">100M+</div>
              <div className="text-gray-300 font-semibold">Logical Qubits</div>
            </div>
            <div className="bg-gradient-to-br from-green-800/30 to-blue-800/30 p-6 rounded-xl border border-green-500/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-gray-300 font-semibold">Problem Solving</div>
            </div>
          </div>
          
          {/* Quantum applications preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-800/20 to-purple-800/20 p-6 rounded-xl border border-blue-500/20 backdrop-blur-sm">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold text-white mb-2">Drug Discovery</h3>
              <p className="text-gray-300">99% faster molecular simulation</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Cryptography</h3>
              <p className="text-gray-300">100% unbreakable encryption</p>
            </div>
            <div className="bg-gradient-to-br from-pink-800/20 to-red-800/20 p-6 rounded-xl border border-pink-500/20 backdrop-blur-sm">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-2">Climate Modeling</h3>
              <p className="text-gray-300">1000x more accurate predictions</p>
            </div>
          </div>
          
          {/* Industry impact preview */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-white/10 backdrop-blur-sm mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Industry Transformation Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">5,000%</div>
                <div className="text-gray-300">Healthcare ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">8,500%</div>
                <div className="text-gray-300">Finance ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">12,000%</div>
                <div className="text-gray-300">Manufacturing ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400 mb-2">15,000%</div>
                <div className="text-gray-300">Energy ROI</div>
              </div>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link 
              href="/quantum-computing-breakthrough-2025-2030"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-lg font-bold text-xl hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore Quantum Timeline
            </Link>
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-lg font-bold text-xl hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Quantum Strategy
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">✓</span>
              <span>Leading Quantum Research</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">✓</span>
              <span>Patent-Pending Technology</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">✓</span>
              <span>Government Partnerships</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}