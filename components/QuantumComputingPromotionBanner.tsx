import React from 'react';
import Link from 'next/link';

export default function QuantumComputingPromotionBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">⚛️ QUANTUM COMPUTING</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quantum Computing Business Applications 2026
          </h2>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Revolutionary solutions for modern enterprises. From optimization to cryptography, 
            discover practical quantum applications that deliver real business value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-yellow-300 mb-2">1000x</div>
            <div className="text-sm opacity-90">Faster Optimization</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-green-300 mb-2">99.9%</div>
            <div className="text-sm opacity-90">Accuracy Rate</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-pink-300 mb-2">$2.5B</div>
            <div className="text-sm opacity-90">Market Value</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-300 mb-2">15%</div>
            <div className="text-sm opacity-90">Cost Reduction</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3">Supply Chain Optimization</h3>
            <p className="text-sm opacity-90 mb-3">
              Quantum algorithms solve complex optimization problems involving thousands of variables in real-time.
            </p>
            <ul className="text-sm opacity-90 space-y-1">
              <li>• Multi-objective optimization</li>
              <li>• Real-time route planning</li>
              <li>• Inventory management</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3">Financial Services</h3>
            <p className="text-sm opacity-90 mb-3">
              Revolutionizing trading, risk assessment, and fraud detection with quantum advantage.
            </p>
            <ul className="text-sm opacity-90 space-y-1">
              <li>• Portfolio optimization</li>
              <li>• High-frequency trading</li>
              <li>• Risk management</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/quantum-computing-business-applications-2026"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Applications
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Quantum Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}