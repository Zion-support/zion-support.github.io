import React from 'react';
import Link from 'next/link';

export default function QuantumRevolution2025Banner() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220%200%2060%2060%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill="%23ffffff" fill-opacity%3D%220.1%22%3E%3Cpath d="M30 0L35 20L55 25L40 40L45 60L30 50L15 60L20 40L5 25L25 20L30 0Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-purple-400 text-black rounded-full px-6 py-2 mb-6 font-semibold">
            <span className="mr-2">⚛️</span>
            QUANTUM REVOLUTION 2025
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Quantum Computing Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the power of quantum computing to solve problems that were previously impossible. Experience exponential speedups and breakthrough capabilities.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-lg font-bold mb-2">Quantum Simulation</h3>
              <p className="text-sm opacity-80">Revolutionary molecular and chemical simulation</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="text-lg font-bold mb-2">Quantum Cryptography</h3>
              <p className="text-sm opacity-80">Unbreakable encryption and ultra-secure communication</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🧮</div>
              <h3 className="text-lg font-bold mb-2">Quantum Optimization</h3>
              <p className="text-sm opacity-80">Solve complex optimization problems with quantum speedup</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quantum-computing-revolution-2025"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Quantum Solutions →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors"
            >
              Get Quantum Access
            </Link>
          </div>
          
          {/* Performance Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">10^15</div>
              <div className="text-sm opacity-80">Speed Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">∞</div>
              <div className="text-sm opacity-80">Security Level</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">100%</div>
              <div className="text-sm opacity-80">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">0</div>
              <div className="text-sm opacity-80">Energy Waste</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}