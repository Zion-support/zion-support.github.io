"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const QuantumComputingRevolution2025Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Quantum field background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-cyan-400/30">
            <span className="text-sm font-medium">⚛️ QUANTUM COMPUTING REVOLUTION 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Quantum-Powered AI
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the next frontier of computing with quantum-enhanced AI systems that process data at speeds previously thought impossible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-6 rounded-xl backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-lg font-semibold mb-2">Quantum Supremacy</h3>
              <p className="text-sm opacity-90">Exponential computational power</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-6 rounded-xl backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-lg font-semibold mb-2">Quantum Algorithms</h3>
              <p className="text-sm opacity-90">Revolutionary problem-solving</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-6 rounded-xl backdrop-blur-sm border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-lg font-semibold mb-2">Quantum Entanglement</h3>
              <p className="text-sm opacity-90">Instant data synchronization</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-xl backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Quantum Speed</h3>
              <p className="text-sm opacity-90">Lightning-fast processing</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl backdrop-blur-sm border border-cyan-400/20 mb-8">
            <h3 className="text-2xl font-bold mb-4">Revolutionary Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Molecular Simulation</h4>
                <p className="text-sm opacity-90">Model complex molecular interactions in real-time</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Cryptography</h4>
                <p className="text-sm opacity-90">Unbreakable quantum encryption protocols</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-400 mb-2">Optimization</h4>
                <p className="text-sm opacity-90">Solve NP-hard problems in polynomial time</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quantum-computing-2025"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum AI
            </Link>
            <Link
              href="/quantum-demo"
              className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              Try Quantum Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingRevolution2025Banner;