import React from 'react';
import Link from 'next/link';

const NewContent2026UltimateBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🌟 NEW CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Ultimate AI Transformation Guide
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI strategies, quantum computing breakthroughs, and autonomous system architectures that will revolutionize your business in 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content/ai-2026-ultimate-transformation-guide"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Read Ultimate Guide
            </Link>
            <Link
              href="/blog/ai-2026-quantum-breakthroughs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Quantum Breakthroughs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026UltimateBanner;