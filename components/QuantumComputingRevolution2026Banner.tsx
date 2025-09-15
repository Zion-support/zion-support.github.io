import React from 'react';
import Link from 'next/link';

export default function QuantumComputingRevolution2026Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-16 left-16 w-24 h-24 bg-indigo-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-24 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-24 left-1/3 w-16 h-16 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/4 w-18 h-18 bg-cyan-500/20 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-sm font-bold mb-6 animate-bounce">
            ⚛️ QUANTUM BREAKTHROUGH
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Quantum Computing Revolution 2026
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Error-corrected quantum computers achieving quantum supremacy with 25,000% ROI potential across industries
          </p>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/30">
              <div className="text-2xl mb-2">⚛️</div>
              <h3 className="font-bold text-indigo-200 mb-1">Error-Corrected Quantum</h3>
              <p className="text-sm text-gray-300">99.9% accuracy breakthrough</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-bold text-purple-200 mb-1">Quantum Machine Learning</h3>
              <p className="text-sm text-gray-300">10,000x faster processing</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/30">
              <div className="text-2xl mb-2">🌐</div>
              <h3 className="font-bold text-cyan-200 mb-1">Quantum Internet</h3>
              <p className="text-sm text-gray-300">Unbreakable encryption</p>
            </div>
          </div>

          {/* Performance metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-1">1000x</div>
              <div className="text-sm text-gray-300">Speed Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">∞</div>
              <div className="text-sm text-gray-300">Problem Solving</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">25,000%</div>
              <div className="text-sm text-gray-300">ROI Potential</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quantum-computing-revolution-2026" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Quantum Solutions
            </Link>
            <Link 
              href="/case-studies/quantum-computing-2026-success" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Success Stories
            </Link>
          </div>

          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>Revolutionary quantum computing technology solving previously impossible problems</p>
            <p className="mt-1">Exclusive quantum solutions from Zion Tech 'Group', 's research division</p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-24 right-12 w-4 h-4 bg-indigo-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-24 left-12 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-2000"></div>
    </div>
  );
}