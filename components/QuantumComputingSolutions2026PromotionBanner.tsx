import React from 'react';
import Link from 'next/link';

export default function QuantumComputingSolutions2026PromotionBanner() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold mb-6 animate-pulse">
            ⚛️ QUANTUM BREAKTHROUGH
          </div>
          
          {/* Main Content */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Quantum Computing Solutions 2026
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the quantum revolution with our breakthrough quantum computing solutions, 
            delivering unprecedented computational power and quantum supremacy across industries.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚛️🧠</div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum-AI Fusion</h3>
              <p className="text-gray-300 text-sm">15,000% ROI with 10,000x faster processing</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🌐⚛️</div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum Internet</h3>
              <p className="text-gray-300 text-sm">Ultra-secure unhackable communication</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🔧⚛️</div>
              <h3 className="text-lg font-bold text-white mb-2">Error-Corrected Quantum</h3>
              <p className="text-gray-300 text-sm">99.9% accuracy in complex calculations</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quantum-computing-solutions-2026"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Solutions
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}