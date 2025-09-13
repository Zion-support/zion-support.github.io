import React from 'react';
import Link from 'next/link';

export default function QuantumComputingSolutions2025Banner() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-8 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-8 right-1/4 w-3 h-3 bg-white rounded-full animate-ping delay-3000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Quantum breakthrough badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-white text-sm font-bold mb-4 animate-pulse">
            <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-ping"></span>
            ⚛️ QUANTUM COMPUTING BREAKTHROUGH
          </div>
          
          {/* Main headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Quantum Computing Solutions 2025
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white opacity-90 mb-6 max-w-4xl mx-auto">
            Achieve quantum supremacy with revolutionary quantum computing solutions. 
            <span className="font-bold"> 15,000% ROI</span> • 
            <span className="font-bold"> 99.97% Accuracy</span> • 
            <span className="font-bold"> 10,000x Faster Processing</span>
          </p>
          
          {/* Key features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold">
              ⚛️ Error-Corrected Quantum Computers
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold">
              🧠 Quantum Machine Learning
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold">
              🌐 Quantum Internet
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold">
              ⚡ Quantum Optimization
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quantum-computing-solutions-2025"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum Solutions →
            </Link>
            <Link 
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-white text-sm opacity-80">
            <div className="flex items-center">
              <span className="text-indigo-400 mr-2">✓</span>
              <span>15,000% ROI Guaranteed</span>
            </div>
            <div className="flex items-center">
              <span className="text-indigo-400 mr-2">✓</span>
              <span>99.97% Quantum Accuracy</span>
            </div>
            <div className="flex items-center">
              <span className="text-indigo-400 mr-2">✓</span>
              <span>10,000x Speed Improvement</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-8 text-white opacity-20 animate-bounce">
        <div className="text-2xl">⚛️</div>
      </div>
      <div className="absolute top-1/3 right-8 text-white opacity-20 animate-bounce delay-1000">
        <div className="text-2xl">🧠</div>
      </div>
      <div className="absolute bottom-1/4 left-12 text-white opacity-20 animate-bounce delay-2000">
        <div className="text-2xl">🌐</div>
      </div>
      <div className="absolute bottom-1/3 right-12 text-white opacity-20 animate-bounce delay-3000">
        <div className="text-2xl">⚡</div>
      </div>
    </div>
  );
}