import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import LoadingSpinner from '../../components/LoadingSpinner';
import QuantumComputingUltimateBreakthroughShowcase from '../../components/QuantumComputingUltimateBreakthroughShowcase';
import QuantumComputingUltimateBreakthroughPromotionBanner from '../../components/QuantumComputingUltimateBreakthroughPromotionBanner';

const QuantumComputingBreakthroughsPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEO 
        title="Quantum Computing Ultimate Breakthrough - Zion Tech Group"
        description="Revolutionary quantum computing technologies that will transform every industry. Get exclusive access to 1M+ qubit processors, quantum-neural integration, and unbreakable security."
        keywords="quantum computing, quantum supremacy, quantum neural networks, quantum cryptography, quantum internet, quantum AI, quantum breakthroughs"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Quantum Computing Ultimate Breakthrough
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary quantum computing technologies that will transform every industry 
                and solve humanity's greatest challenges
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Schedule Demo
                </Link>
                <Link 
                  to="/ai-2025-2030-predictions" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View AI Predictions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Promotion Banner */}
        <QuantumComputingUltimateBreakthroughPromotionBanner />

        {/* Main Showcase */}
        <QuantumComputingUltimateBreakthroughShowcase />

        {/* Technical Specifications */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our quantum computing solutions feature cutting-edge specifications that 
                push the boundaries of what's possible with quantum technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">1M+</div>
                <div className="text-lg text-white mb-2">Qubits</div>
                <div className="text-gray-300">Processing Power</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10,000x</div>
                <div className="text-lg text-white mb-2">Faster</div>
                <div className="text-gray-300">Than Classical</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-lg text-white mb-2">Secure</div>
                <div className="text-gray-300">Encryption</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">Global</div>
                <div className="text-lg text-white mb-2">Scale</div>
                <div className="text-gray-300">Network</div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Showcase */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Quantum computing is transforming industries and solving problems that were 
                previously impossible for classical computers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Drug Discovery</h3>
                <p className="text-gray-300 mb-4">
                  Quantum computers can simulate molecular interactions at the quantum level, 
                  accelerating drug discovery by decades.
                </p>
                <div className="text-cyan-400 font-semibold">10,000x faster drug development</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Financial Modeling</h3>
                <p className="text-gray-300 mb-4">
                  Complex financial risk analysis and portfolio optimization that would take 
                  classical computers centuries.
                </p>
                <div className="text-purple-400 font-semibold">Real-time risk analysis</div>
              </div>
              
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Climate Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Modeling complex climate systems and optimizing renewable energy solutions 
                  for maximum efficiency.
                </p>
                <div className="text-green-400 font-semibold">Accelerated climate research</div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Space Exploration</h3>
                <p className="text-gray-300 mb-4">
                  Optimizing space missions and analyzing astronomical data to unlock the 
                  mysteries of the universe.
                </p>
                <div className="text-orange-400 font-semibold">Advanced space missions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the Quantum Revolution
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Get exclusive access to quantum computing breakthroughs and implementation guides
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Demo
              </Link>
              <Link
                to="/automation-solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Explore Automation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default QuantumComputingBreakthroughsPage;