import React from 'react';
import Link from 'next/link';

export default function QuantumComputing2026UltimateBanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚛️ QUANTUM REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Quantum Computing 2026 Ultimate
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate quantum computing revolution of 2026. From quantum supremacy to 
            practical applicationsdiscover how quantum computing is transforming every industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quantum-computing-2026-ultimate"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              Enter the Quantum Era
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-900 transition-all"
            >
              Get Quantum Access
            </Link>
          </div>
        </div>
        
        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center bg-gradient-to-br from-cyan-600 to-blue-600 p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">10^15</div>
            <div className="text-lg opacity-90">Speed Increase</div>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-lg opacity-90">Qubits</div>
          </div>
          <div className="text-center bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-lg opacity-90">Accuracy</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
}