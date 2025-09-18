import React from 'react';
import Link from 'next/link';

export default function NeuralInterface2026Banner() {
  return (
    <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
                🔗 Neural Interface 2026
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Neural Interface Technology 2026
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                The future of human-AI interaction is here. Direct brain-computer interfaces 
                that enable seamless communication between mind and machine.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/neural-interface-2026" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Experience the Future
                </Link>
                <Link 
                  href="/ai-2026-ultimate-breakthrough" 
                  className="border border-green-600 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  AI 2026 Guide
                </Link>
                <Link 
                  href="/services" 
                  className="border border-green-600 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-4xl">🔗</span>
              </div>
            </div>
          </div>
          
          {/* Key Features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🧠</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Non-Invasive</h3>
              <p className="text-sm text-gray-600">Safe brain signal capture</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ultra-Fast</h3>
              <p className="text-sm text-gray-600">Sub-millisecond response</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Precision</h3>
              <p className="text-sm text-gray-600">Accurate control</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-sm text-gray-600">Privacy protected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}