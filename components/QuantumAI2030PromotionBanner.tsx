import React from 'react';
import Link from 'next/link';

const QuantumAI2030PromotionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚛️ QUANTUM AI 2030</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Quantum AI Business Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the convergence of quantum computing and AI. Unlock unprecedented computational 
            power with quantum-enhanced machine learningneural networksand business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🧮</div>
            <h3 className="text-lg font-bold mb-3">Quantum ML</h3>
            <p className="text-gray-300 text-sm mb-4">
              Quantum-enhanced machine learning with exponential speedups.
            </p>
            <div className="text-xl font-bold text-green-400">1000x Faster</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🕸️</div>
            <h3 className="text-lg font-bold mb-3">Quantum Neural Nets</h3>
            <p className="text-gray-300 text-sm mb-4">
              Superposition-based information processing and parallel computation.
            </p>
            <div className="text-xl font-bold text-blue-400">Parallel Processing</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-bold mb-3">Quantum Optimization</h3>
            <p className="text-gray-300 text-sm mb-4">
              Quantum annealing for complex business optimization problems.
            </p>
            <div className="text-xl font-bold text-purple-400">99.9% Accuracy</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-bold mb-3">Quantum Security</h3>
            <p className="text-gray-300 text-sm mb-4">
              Unbreakable quantum encryption and post-quantum cryptography.
            </p>
            <div className="text-xl font-bold text-yellow-400">Unbreakable</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Quantum AI Business Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">💼</div>
              <h4 className="text-lg font-bold mb-2">Financial Services</h4>
              <p className="text-gray-300 text-sm">
                Quantum portfolio optimizationrisk managementand fraud detection.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏭</div>
              <h4 className="text-lg font-bold mb-2">Manufacturing</h4>
              <p className="text-gray-300 text-sm">
                Supply chain optimizationpredictive maintenanceand quality control.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg font-bold mb-2">Healthcare</h4>
              <p className="text-gray-300 text-sm">
                Drug discoverypersonalized medicineand medical diagnostics.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 mb-8">
            <h3 className="text-2xl font-bold mb-4">Expected ROI by 2030</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">5000%</div>
                <div className="text-sm text-gray-300">Early Adopter ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">$50B</div>
                <div className="text-sm text-gray-300">Market Opportunity</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">1000x</div>
                <div className="text-sm text-gray-300">Computational Speedup</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/quantum-ai-2030-business-transformation-ultimate-guide"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Read Ultimate Guide
            </Link>
            <Link
              href="/services/quantum-ai"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-lg"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors text-lg"
            >
              Start Quantum Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2030PromotionBanner;