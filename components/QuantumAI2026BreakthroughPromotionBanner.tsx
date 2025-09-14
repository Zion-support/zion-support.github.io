import React from 'react';
import Link from 'next/link';

const QuantumAI2026BreakthroughPromotionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">⚛️ QUANTUM BREAKTHROUGH</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quantum AI 2026 Breakthrough
            </h2>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Explore the revolutionary quantum AI technologies that will reshape computing in 2026. 
              Discover quantum machine learning, quantum neural networks, and breakthrough applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quantum-ai-2026-breakthrough"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Discover Quantum AI
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Get Quantum Consultation
              </Link>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">Quantum Technologies:</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">⚛️</span>
                <span>Quantum machine learning algorithms</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">⚛️</span>
                <span>Quantum neural networks</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">⚛️</span>
                <span>Quantum cryptography & security</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">⚛️</span>
                <span>Quantum optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">⚛️</span>
                <span>Quantum simulation & modeling</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">⚛️</span>
                <span>Real-world quantum applications</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white border-opacity-20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-xs opacity-80">Qubits</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1000x</div>
                  <div className="text-xs opacity-80">Faster</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-xs opacity-80">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2026BreakthroughPromotionBanner;