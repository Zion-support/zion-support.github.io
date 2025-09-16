import React from 'react';
import Link from 'next/link';

export default function QuantumAI2026RevolutionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
                ⚡ Quantum Revolution
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quantum AI 2026 Revolution
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                Discover how the convergence of quantum computing and AI is creating 
                unprecedented opportunities for business transformation and innovation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/quantum-ai-2026-revolution" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore Quantum AI
                </Link>
                <Link 
                  href="/ai-2026-ultimate-breakthrough" 
                  className="border border-blue-600 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  AI 2026 Guide
                </Link>
                <Link 
                  href="/services" 
                  className="border border-blue-600 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-4xl">⚡</span>
              </div>
            </div>
          </div>
          
          {/* Key Benefits */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Exponential Speed</h3>
              <p className="text-sm text-gray-600">Millions of times faster processing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🧠</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Enhanced Learning</h3>
              <p className="text-sm text-gray-600">Quantum neural networks</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quantum Security</h3>
              <p className="text-sm text-gray-600">Unbreakable encryption</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-sm text-gray-600">Solve impossible problems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}