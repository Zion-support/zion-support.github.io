import React from 'react';
import Link from 'next/link';

export default function NeuralInterface2025BreakthroughBanner() {
  return (
    <section className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-white">🧠 BREAKTHROUGH TECHNOLOGY 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Neural Interface 2025 Breakthrough
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto">
            Experience direct brain-computer interaction with revolutionary neural interfaces. 
            Control devices with your mind, enhance cognition, and seamlessly integrate with AI systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/neural-interface-2025-breakthrough"
              className="bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Experience Neural Interface
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-all"
            >
              Join Beta Program
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}